"use client";

import { usePathname } from "next/navigation";
import { TrackedLink } from "@/components/TrackedLink";

export function MobilePageCTA() {
  const pathname = usePathname();
  if (pathname === "/creators") return <div className="mobile-bottom-cta"><TrackedLink href="#apply" analyticsEvent="click_creator_apply">인플루언서 지원하기</TrackedLink></div>;
  if (pathname === "/brands") return <div className="mobile-bottom-cta"><TrackedLink href="#inquiry" analyticsEvent="click_brand_inquiry">브랜드 입점 문의</TrackedLink></div>;
  return null;
}
