import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BrandLogo } from "@/components/BrandLogo";

export function Footer() {
  const trustDetails = [
    ["운영회사", siteConfig.company], ["대표자", siteConfig.representative], ["사업자등록번호", siteConfig.businessNumber], ["주소", siteConfig.address], ["운영시간", siteConfig.hours],
  ].filter((detail): detail is [string, string] => Boolean(detail[1]));
  const socialLinks = [["인스타그램", siteConfig.instagram], ["유튜브", siteConfig.youtube], ["틱톡", siteConfig.tiktok]].filter((link): link is [string, string] => Boolean(link[1]));
  return <footer className="footer"><div className="shell footer-grid">
    <div className="footer-brand"><BrandLogo /><p>{siteConfig.serviceDescription}</p><small>{siteConfig.operatorNotice}</small><b>AUSTRALIAN PRODUCTS · KOREAN CREATORS · COMMERCE CONNECTION</b></div>
    <div><strong>서비스</strong><Link href="/campaigns">호주 상품 캠페인</Link><Link href="/brands">브랜드 상품 제안</Link><Link href="/creators">인플루언서 파트너 등록</Link></div>
    <div><strong>안내</strong><Link href="/process">공동구매 진행</Link><Link href="/faq">자주 묻는 질문</Link><Link href="/privacy">개인정보처리방침</Link><Link href="/terms">이용약관</Link></div>
    {trustDetails.length || siteConfig.email || siteConfig.phone || socialLinks.length ? <div className="contact-card"><strong>운영·문의 정보</strong>{trustDetails.map(([label,value]) => <span key={label}>{label} {value}</span>)}{siteConfig.email ? <a href={`mailto:${siteConfig.email}`}>이메일 {siteConfig.email}</a> : null}{siteConfig.phone ? <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}>전화 {siteConfig.phone}</a> : null}{socialLinks.map(([label,url]) => <a key={label} href={url} target="_blank" rel="noreferrer">{label}</a>)}</div> : null}
  </div><div className="shell copyright">© 2026 GEOSANG COMMERCE. All rights reserved.</div></footer>;
}
