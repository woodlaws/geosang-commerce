import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return <footer className="footer"><div className="shell footer-grid">
    <div><Link href="/" className="brand-mark"><strong>GEOSANG</strong><span>CREATOR COMMERCE</span></Link><p>브랜드와 크리에이터의 좋은 연결을 설계합니다.</p></div>
    <div><strong>서비스</strong><Link href="/campaigns">캠페인</Link><Link href="/brands">브랜드 입점</Link><Link href="/creators">인플루언서 지원</Link></div>
    <div><strong>안내</strong><Link href="/process">진행 방법</Link><Link href="/faq">자주 묻는 질문</Link><Link href="/privacy">개인정보처리방침</Link><Link href="/terms">이용약관</Link></div>
    <div className="contact-card"><strong>문의하기</strong><span>이메일 {siteConfig.email}</span><span>전화 {siteConfig.phone}</span><small>운영 정보는 공개 전 실제 정보로 교체해 주세요.</small></div>
  </div><div className="shell copyright">© {new Date().getFullYear()} GEOSANG MARKETING CENTER. All rights reserved.</div></footer>;
}
