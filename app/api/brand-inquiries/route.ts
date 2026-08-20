import { createHash } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const recentInquiries = new Map<string, number>();
const DUPLICATE_WINDOW_MS = 10 * 60 * 1000;

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.replace(/<[^>]*>/g, "").trim().slice(0, max) : "";
}

function numberValue(value: unknown) {
  const digits = text(value, 30).replace(/\D/g, "");
  return digits ? Number(digits) : 0;
}

function validUrl(value: string) {
  if (!value) return true;
  try { const url = new URL(value); return url.protocol === "https:" || url.protocol === "http:"; } catch { return false; }
}

function validEmail(value: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); }
function validPhone(value: string) { return /^[0-9+()\-\s]{7,20}$/.test(value); }

export async function POST(request: NextRequest) {
  const endpoint = (process.env.BRAND_FORM_ENDPOINT || process.env.NEXT_PUBLIC_BRAND_FORM_ENDPOINT || "").trim();
  if (!endpoint || !validUrl(endpoint)) return NextResponse.json({ error: "FORM_NOT_READY" }, { status: 503 });

  let input: Record<string, unknown>;
  try { input = await request.json(); } catch { return NextResponse.json({ error: "INVALID_JSON" }, { status: 400 }); }

  if (text(input.website, 120)) return NextResponse.json({ error: "SPAM_REJECTED" }, { status: 400 });
  const startedAt = Number(input.formStartedAt);
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < 2500) return NextResponse.json({ error: "TOO_FAST" }, { status: 429 });

  const contactName = text(input.contactName, 60);
  const companyName = text(input.companyName, 100);
  const phone = text(input.phone, 30);
  const email = text(input.email, 120).toLowerCase();
  const brandName = text(input.brandName, 100);
  const productName = text(input.productName, 140);
  const category = text(input.category, 60);
  const countryOfOrigin = text(input.countryOfOrigin, 80);
  const productFeatures = text(input.productFeatures, 1200);
  const certificationStatus = text(input.certificationStatus, 800);
  const companyUrl = text(input.companyUrl, 300);
  const productUrl = text(input.productUrl, 500);
  const materialUrl = text(input.materialUrl, 500);
  const requiredOperational = ["shippingAvailability", "dispatchPeriod", "returnSupport", "customerServiceAvailability", "sampleAvailability", "groupBuyExperience"].map((key) => text(input[key], 120));
  const numericValues = [input.regularPrice, input.onlinePrice, input.desiredGroupBuyPrice, input.availableQuantity].map(numberValue);

  if (!contactName || !companyName || !validPhone(phone) || !validEmail(email) || !brandName || !productName || !category || !countryOfOrigin || !productFeatures || !certificationStatus || requiredOperational.some((value) => !value) || numericValues.some((value) => !Number.isFinite(value) || value <= 0) || !validUrl(companyUrl) || !validUrl(productUrl) || !validUrl(materialUrl) || input.privacyConsent !== true) {
    return NextResponse.json({ error: "VALIDATION_FAILED" }, { status: 422 });
  }

  const duplicateKey = createHash("sha256").update(`${email}|${productName.toLowerCase()}`).digest("hex");
  const now = Date.now();
  for (const [key, timestamp] of recentInquiries) if (now - timestamp > DUPLICATE_WINDOW_MS) recentInquiries.delete(key);
  if (recentInquiries.has(duplicateKey)) return NextResponse.json({ error: "DUPLICATE_INQUIRY" }, { status: 409 });

  const payload = {
    inquiryType: "brand",
    submittedAt: new Date().toISOString(),
    contactName,
    companyName,
    position: text(input.position, 60),
    phone,
    email,
    companyUrl,
    brandName,
    productName,
    category,
    productUrl,
    materialUrl,
    countryOfOrigin,
    regularPrice: numericValues[0],
    onlinePrice: numericValues[1],
    desiredGroupBuyPrice: numericValues[2],
    availableQuantity: numericValues[3],
    expirationInfo: text(input.expirationInfo, 120),
    domesticSalesStatus: text(input.domesticSalesStatus, 80),
    productFeatures,
    certificationStatus,
    shippingAvailability: requiredOperational[0],
    dispatchPeriod: requiredOperational[1],
    returnSupport: requiredOperational[2],
    customerServiceAvailability: requiredOperational[3],
    sampleAvailability: requiredOperational[4],
    groupBuyExperience: requiredOperational[5],
    desiredSchedule: text(input.desiredSchedule, 120),
    preferredCreatorFields: text(input.preferredCreatorFields, 300),
    contentSupportNeeded: text(input.contentSupportNeeded, 80),
    message: text(input.message, 1500),
    privacyConsent: true,
    sourcePage: text(input.sourcePage, 500),
    referrer: text(input.referrer, 500),
    utmSource: text(input.utmSource, 120),
    utmMedium: text(input.utmMedium, 120),
    utmCampaign: text(input.utmCampaign, 120),
    userAgent: text(request.headers.get("user-agent") || input.userAgent, 500),
  };

  try {
    const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(payload), signal: AbortSignal.timeout(15000), cache: "no-store" });
    if (!response.ok) return NextResponse.json({ error: "UPSTREAM_FAILED" }, { status: 502 });
    recentInquiries.set(duplicateKey, now);
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "UPSTREAM_UNAVAILABLE" }, { status: 502 });
  }
}
