import type { Metadata } from "next";
import { featuredFaqs } from "./faqs";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://geosang-commerce.vercel.app";

export const absoluteUrl = (path = "/") => new URL(path, `${SITE_URL}/`).toString();

export const siteConfig = {
  name: "거상커머스",
  englishName: "GEOSANG COMMERCE",
  description: "거상커머스는 브랜드와 인플루언서를 연결해 공동구매 캠페인을 기획·운영하는 인플루언서 공동구매 플랫폼입니다.",
  serviceDescription: "브랜드와 인플루언서를 연결하는 공동구매 플랫폼",
  slogan: "실제 공급 가능한 상품과 체계적인 공동구매 운영 지원",
  operatorNotice: "거상커머스는 거상마케팅센터가 운영하는 공동구매 플랫폼입니다.",
  url: SITE_URL,
  logo: "/images/brand/geosang-commerce-logo.png",
  company: process.env.NEXT_PUBLIC_OPERATOR_COMPANY || "",
  representative: process.env.NEXT_PUBLIC_REPRESENTATIVE_NAME || "",
  businessNumber: process.env.NEXT_PUBLIC_BUSINESS_REGISTRATION_NUMBER || "",
  address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
  hours: process.env.NEXT_PUBLIC_BUSINESS_HOURS || "",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
  youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "",
  tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL || "",
};

export function createPageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;
  const url = absoluteUrl(path);
  const image = absoluteUrl("/og.png");
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: { title: fullTitle, description, url, siteName: siteConfig.name, locale: "ko_KR", type: "website", images: [{ url: image, width: 1729, height: 910, alt: "거상커머스 · GEOSANG COMMERCE" }] },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image] },
  };
}

export const team = [
  { name: "임헌수", role: "대표", image: "/images/team/lim-heonsu.jpg", instagram: "https://www.instagram.com/geosang.bruce/", handle: "@geosang.bruce", lines: ["거상스쿨·거상마케팅센터 대표", "AI·마케팅·교육 콘텐츠 기획", "브랜드 콘텐츠 및 판매 구조 설계"] },
  { name: "이유진", role: "팀장", image: "/images/team/lee-yujin.png", instagram: "https://www.instagram.com/happy.yujin_/", handle: "@happy.yujin_", lines: ["거상마케팅센터 공동구매 운영", "인플루언서 커뮤니케이션", "캠페인 일정·판매·정산 관리"] },
];

export const commonFaqs = featuredFaqs;
