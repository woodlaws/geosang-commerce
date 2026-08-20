"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { TrackedLink } from "@/components/TrackedLink";

export function MobilePageCTA() {
  const pathname = usePathname();
  const [creatorCtaVisible, setCreatorCtaVisible] = useState(true);
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
  if (pathname === "/creators") return creatorCtaVisible ? <div className="mobile-bottom-cta"><TrackedLink href="#apply" analyticsEvent="click_creator_apply">크리에이터 파트너 등록하기</TrackedLink></div> : null;
  if (pathname === "/brands") return <div className="mobile-bottom-cta"><TrackedLink href="#inquiry" analyticsEvent="click_brand_inquiry">브랜드 입점 문의</TrackedLink></div>;
  return null;
}
