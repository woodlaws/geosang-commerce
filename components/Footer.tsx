import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BrandLogo } from "@/components/BrandLogo";

export function Footer() {
  return <footer className="footer"><div className="shell footer-grid">
    <div className="footer-brand"><BrandLogo /><p>{siteConfig.serviceDescription}</p><small>{siteConfig.operatorNotice}</small></div>
    <div><strong>서비스</strong><Link href="/campaigns">캠페인</Link><Link href="/brands">브랜드 입점</Link><Link href="/creators">인플루언서 지원</Link></div>
    <div><strong>안내</strong><Link href="/process">진행 방법</Link><Link href="/faq">자주 묻는 질문</Link><Link href="/privacy">개인정보처리방침</Link><Link href="/terms">이용약관</Link></div>
    {siteConfig.email || siteConfig.phone ? <div className="contact-card"><strong>문의하기</strong>{siteConfig.email ? <span>이메일 {siteConfig.email}</span> : null}{siteConfig.phone ? <span>전화 {siteConfig.phone}</span> : null}</div> : null}
  </div><div className="shell copyright">© 2026 GEOSANG COMMERCE. All rights reserved.</div></footer>;
}
