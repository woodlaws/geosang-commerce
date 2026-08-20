"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { TrackedLink } from "@/components/TrackedLink";

const links = [["캠페인", "/campaigns"], ["브랜드 입점", "/brands"], ["인플루언서 지원", "/creators"], ["공동구매 진행", "/process"], ["회사 소개", "/about"], ["자주 묻는 질문", "/faq"]];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <>
    <div className="notice"><strong>호주에서 찾은 좋은 상품을 한국 크리에이터의 콘텐츠와 연결합니다.</strong><small>AUSTRALIAN PRODUCT · CREATOR COMMERCE</small></div>
    <header className="site-header-wrap">
      <div className="site-header">
        <BrandLogo priority onClick={() => setOpen(false)} />
        <nav aria-label="주요 메뉴">{links.map(([label, href]) => <Link key={href} href={href} className={pathname === href ? "active" : ""}>{label}</Link>)}</nav>
        <div className="header-cta"><TrackedLink href="/brands#inquiry" analyticsEvent="click_brand_inquiry" className="outline-button compact">브랜드 상품 제안</TrackedLink><TrackedLink href="/creators#apply" analyticsEvent="click_creator_apply" className="gradient-button compact">파트너 등록</TrackedLink></div>
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "메뉴 닫기" : "메뉴 열기"}><span/><span/><span/></button>
      </div>
      {open ? <div id="mobile-menu" className="mobile-menu open">
        <BrandLogo compact onClick={() => setOpen(false)} />
        {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <div><TrackedLink href="/brands#inquiry" analyticsEvent="click_brand_inquiry" className="outline-button" onClick={() => setOpen(false)}>브랜드 상품 제안</TrackedLink><TrackedLink href="/creators#apply" analyticsEvent="click_creator_apply" className="gradient-button" onClick={() => setOpen(false)}>인플루언서 파트너 등록</TrackedLink></div>
      </div> : null}
    </header>
  </>;
}
