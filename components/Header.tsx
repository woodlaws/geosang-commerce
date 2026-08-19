"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";

const links = [["캠페인", "/campaigns"], ["브랜드 입점", "/brands"], ["인플루언서 지원", "/creators"], ["진행 방법", "/process"], ["성공사례", "/cases"], ["회사 소개", "/about"], ["자주 묻는 질문", "/faq"]];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <>
    <div className="notice">신뢰할 수 있는 브랜드와 인플루언서를 연결해 더 큰 가치를 만듭니다.</div>
    <header className="site-header-wrap">
      <div className="site-header">
        <BrandLogo priority onClick={() => setOpen(false)} />
        <nav aria-label="주요 메뉴">{links.map(([label, href]) => <Link key={href} href={href} className={pathname === href ? "active" : ""}>{label}</Link>)}</nav>
        <div className="header-cta"><Link href="/brands#inquiry" className="outline-button compact">입점 문의</Link><Link href="/creators#apply" className="gradient-button compact">지원하기</Link></div>
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "메뉴 닫기" : "메뉴 열기"}><span/><span/><span/></button>
      </div>
      {open ? <div id="mobile-menu" className="mobile-menu open">
        <BrandLogo compact onClick={() => setOpen(false)} />
        {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <div><Link href="/brands#inquiry" className="outline-button" onClick={() => setOpen(false)}>브랜드 입점 문의</Link><Link href="/creators#apply" className="gradient-button" onClick={() => setOpen(false)}>인플루언서 지원</Link></div>
      </div> : null}
    </header>
  </>;
}
