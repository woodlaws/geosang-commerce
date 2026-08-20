import { createHash } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const recentApplications = new Map<string, number>();
const DUPLICATE_WINDOW_MS = 10 * 60 * 1000;

type ChannelInput = { type?: unknown; url?: unknown; primary?: unknown };
type ApplicationInput = Record<string, unknown> & { channels?: unknown };

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function list(value: unknown, maxItems = 12, maxLength = 80) {
  return Array.isArray(value) ? value.slice(0, maxItems).map((item) => text(item, maxLength)).filter(Boolean) : [];
}

function validUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  const endpoint = (process.env.CREATOR_FORM_ENDPOINT || process.env.NEXT_PUBLIC_CREATOR_FORM_ENDPOINT || "").trim();
  if (!endpoint || !validUrl(endpoint)) return NextResponse.json({ error: "FORM_NOT_READY" }, { status: 503 });

  let input: ApplicationInput;
  try {
    input = await request.json();
  } catch {
    return NextResponse.json({ error: "INVALID_JSON" }, { status: 400 });
  }

  if (text(input.website, 120)) return NextResponse.json({ error: "SPAM_REJECTED" }, { status: 400 });
  const startedAt = Number(input.formStartedAt);
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < 2500) return NextResponse.json({ error: "TOO_FAST" }, { status: 429 });

  const name = text(input.name, 60);
  const phone = text(input.phone, 30);
  const email = text(input.email, 120).toLowerCase();
  const rawChannels = Array.isArray(input.channels) ? input.channels.slice(0, 3) as ChannelInput[] : [];
  const channels = rawChannels.map((item) => ({ type: text(item.type, 40), url: text(item.url, 300), primary: Boolean(item.primary) })).filter((item) => item.type && validUrl(item.url));
  if (!name || phone.length < 7 || !validEmail(email) || !channels.length || input.privacyConsent !== true) return NextResponse.json({ error: "VALIDATION_FAILED" }, { status: 422 });

  const duplicateKey = createHash("sha256").update(`${email}|${phone.replace(/\D/g, "")}`).digest("hex");
  const now = Date.now();
  for (const [key, timestamp] of recentApplications) if (now - timestamp > DUPLICATE_WINDOW_MS) recentApplications.delete(key);
  if (recentApplications.has(duplicateKey)) return NextResponse.json({ error: "DUPLICATE_APPLICATION" }, { status: 409 });

  const payload = {
    applicationType: "creator",
    submittedAt: new Date().toISOString(),
    name,
    phone,
    email,
    channels,
    primaryChannel: channels.find((channel) => channel.primary)?.type || channels[0].type,
    channelUrls: channels.map((channel) => channel.url),
    contentFields: list(input.contentFields),
    followerCount: text(input.followerCount, 30),
    averageViews: text(input.averageViews, 30),
    audienceAge: text(input.audienceAge, 40),
    audienceGender: text(input.audienceGender, 40),
    audienceInterests: list(input.audienceInterests, 12, 60),
    contentFormats: list(input.contentFormats, 12, 40),
    groupBuyExperience: text(input.groupBuyExperience, 40),
    recentCampaignProduct: text(input.recentCampaignProduct, 120),
    recentCampaignChannel: text(input.recentCampaignChannel, 80),
    recentCampaignUrl: validUrl(text(input.recentCampaignUrl, 300)) ? text(input.recentCampaignUrl, 300) : "",
    preferredCategories: list(input.preferredCategories, 10, 60),
    campaign: text(input.campaign, 100),
    message: text(input.message, 1500),
    privacyConsent: true,
    confirmations: list(input.confirmations, 4, 80),
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
    recentApplications.set(duplicateKey, now);
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "UPSTREAM_UNAVAILABLE" }, { status: 502 });
  }
}
