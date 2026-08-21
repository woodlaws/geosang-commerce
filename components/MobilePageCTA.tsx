"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { TrackedLink } from "@/components/TrackedLink";

export function MobilePageCTA() {
  const pathname = usePathname();
  const [creatorCtaVisible, setCreatorCtaVisible] = useState(true);
  const [brandCtaVisible, setBrandCtaVisible] = useState(true);
  useEffect(() => {
    if (pathname !== "/creators") return;
    const resetTimer = window.setTimeout(() => setCreatorCtaVisible(true), 0);
    const target = document.getElementById("apply");
    const observer = target ? new IntersectionObserver(([entry]) => setCreatorCtaVisible(!entry.isIntersecting), { threshold: 0.05 }) : null;
    if (target && observer) observer.observe(target);
    const hide = () => setCreatorCtaVisible(false);
    window.addEventListener("creator-application-complete", hide);
    return () => { window.clearTimeout(resetTimer); observer?.disconnect(); window.removeEventListener("creator-application-complete", hide); };
  }, [pathname]);
  useEffect(() => {
    if (pathname !== "/brands") return;
    const resetTimer = window.setTimeout(() => setBrandCtaVisible(true), 0);
    const target = document.getElementById("inquiry");
    const observer = target ? new IntersectionObserver(([entry]) => setBrandCtaVisible(!entry.isIntersecting), { threshold: 0.05 }) : null;
    if (target && observer) observer.observe(target);
    const hide = () => setBrandCtaVisible(false);
    window.addEventListener("brand-inquiry-complete", hide);
    return () => { window.clearTimeout(resetTimer); observer?.disconnect(); window.removeEventListener("brand-inquiry-complete", hide); };
  }, [pathname]);
  if (pathname === "/creators") return creatorCtaVisible ? <div className="mobile-bottom-cta"><TrackedLink href="#apply" analyticsEvent="click_creator_apply">크리에이터 지원하기</TrackedLink></div> : null;
  if (pathname === "/brands") return brandCtaVisible ? <div className="mobile-bottom-cta"><TrackedLink href="#inquiry" analyticsEvent="click_brand_inquiry">공동구매 상품 제안하기</TrackedLink></div> : null;
  if (pathname === "/") return <div className="mobile-bottom-cta"><TrackedLink href="/creators#apply" analyticsEvent="click_creator_apply">크리에이터 지원하기</TrackedLink></div>;
  return null;
}
