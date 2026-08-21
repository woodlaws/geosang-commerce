import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CampaignCard } from "@/components/CampaignCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TrackedLink } from "@/components/TrackedLink";
import { campaigns } from "@/data/campaigns";
import { commonFaqs, absoluteUrl, COMMON_OG_IMAGE, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: "호주 상품 공동구매 플랫폼 | 거상커머스" },
  description: "거상커머스는 호주 프리미엄 상품을 발굴하고 한국 인플루언서와 연결해 공동구매 상품 매칭, 콘텐츠 안내와 캠페인 운영을 지원합니다.",
  alternates: { canonical: absoluteUrl("/") },
  openGraph: { title: "호주 상품과 한국 크리에이터를 연결합니다 | 거상커머스", description: "호주 프리미엄 상품을 한국 인플루언서의 콘텐츠와 연결하는 공동구매 플랫폼", url: absoluteUrl("/"), siteName: siteConfig.name, locale: "ko_KR", type: "website", images: [{ url: absoluteUrl(COMMON_OG_IMAGE), width: 1200, height: 630, alt: "호주 프리미엄 상품과 한국 크리에이터를 연결하는 거상커머스" }] },
  twitter: { card: "summary_large_image", title: "호주 상품과 한국 크리에이터를 연결합니다 | 거상커머스", description: "호주 프리미엄 상품을 한국 인플루언서의 콘텐츠와 연결하는 공동구매 플랫폼", images: [absoluteUrl(COMMON_OG_IMAGE)] },
};

const stories = [
  ["진행 캠페인", "/campaigns", "/images/campaigns/quokkies-macadamia/quokkies-macadamia-thumbnail.webp"],
  ["마누카꿀", "/campaigns/manuka-royal-jelly-mgo-300", "/images/campaigns/manuka-300/manuka-mgo-300-thumbnail.webp"],
  ["프로폴리스", "/campaigns/gooday-propolis-spray", "/images/campaigns/propolis-spray/propolis-spray-thumbnail.webp"],
  ["마카다미아", "/campaigns/quokkies-macadamia", "/images/campaigns/quokkies-macadamia/quokkies-macadamia-thumbnail.webp"],
  ["크리에이터", "/creators", "/images/team/lim-heonsu.jpg"],
  ["공구 운영", "/process", "/images/team/lee-yujin.png"],
  ["지원 방법", "/creators#apply", "/images/team/instagram-happy-yujin.png"],
  ["브랜드 문의", "/brands#inquiry", "/images/home/australian-products/propolis-spray-gift.webp"],
] as const;

const process = [
  ["01", "크리에이터 지원", "활동 채널과 콘텐츠 분야를 등록합니다.", "＋"],
  ["02", "상품 선택 및 협의", "팬과 콘텐츠에 맞는 상품과 조건을 확인합니다.", "♡"],
  ["03", "콘텐츠 제작", "상품을 이해하고 나만의 방식으로 소개합니다.", "▻"],
  ["04", "공동구매 오픈", "확정된 일정과 판매 링크로 공동구매를 시작합니다.", "◎"],
  ["05", "배송 및 고객 관리", "공급사와 운영팀이 배송 정보를 연결합니다.", "↗"],
  ["06", "판매 정산 및 다음 캠페인", "합의한 기준으로 정산하고 다음 협업을 검토합니다.", "✓"],
] as const;

const supportMessages = [
  ["verified.product", "실제 공급 가능한 상품", "정확한 상품 정보와 공동구매 구성을 확인합니다."],
  ["creator.matching", "콘텐츠 적합성 중심 매칭", "팔로워 수보다 채널 분야와 팬의 관심사를 함께 봅니다."],
  ["commerce.operation", "판매 운영 커뮤니케이션", "콘텐츠·일정·판매·배송 정보를 한 흐름으로 연결합니다."],
  ["delivery.settlement", "배송과 정산 기준 안내", "담당 역할과 기준을 캠페인 시작 전에 확인합니다."],
] as const;

export default function Home() {
  return <main className="creator-commerce-home">
    <section className="cc-hero"><div className="shell cc-hero-grid">
      <div className="cc-hero-copy"><span className="cc-kicker">CREATOR COMMERCE PLATFORM</span><h1>좋은 상품과<br /><em>영향력 있는 크리에이터</em>가<br />만나는 곳</h1><p>거상커머스는 검증된 브랜드와 인플루언서를 연결하여 공동구매 기획부터 판매, 배송, 정산까지 함께하는 크리에이터 커머스 플랫폼입니다.</p><div className="cc-hero-actions"><TrackedLink href="/campaigns" analyticsEvent="view_campaign" className="gradient-button">공동구매 상품 보기</TrackedLink><TrackedLink href="/creators#apply" analyticsEvent="click_creator_apply" className="outline-button">크리에이터 지원하기</TrackedLink></div><span className="cc-one-line">✓ 상품 소싱부터 콘텐츠, 판매, 배송까지 한 번에</span></div>
      <div className="cc-social-collage" aria-label="거상커머스 크리에이터 커머스 미리보기">
        <article className="cc-profile-card cc-profile-one"><div><Image src="/images/team/lim-heonsu.jpg" alt="임헌수 대표" width={74} height={74}/><span><strong>@geosang.bruce</strong><small>콘텐츠·커머스 전략</small></span><b>팔로우</b></div><p>좋은 상품이 팬에게 자연스럽게 닿는 콘텐츠와 판매 구조를 설계합니다.</p></article>
        <article className="cc-feed-card"><div className="cc-feed-head"><Image src="/images/team/lee-yujin.png" alt="이유진 팀장" width={44} height={44}/><span><strong>@happy.yujin_</strong><small>GEOSANG COMMERCE</small></span><b>•••</b></div><div className="cc-feed-image"><Image src="/images/campaigns/quokkies-macadamia/quokkies-macadamia-hero.webp" alt="쿼키즈 마카다미아 공동구매 상품" fill priority sizes="(max-width: 900px) 88vw, 480px"/></div><div className="cc-feed-actions" aria-hidden="true"><span>♡</span><span>◯</span><span>⌁</span><b>▢</b></div><p><strong>상품을 이해하고, 팬이 궁금해할 이야기를 콘텐츠로 연결합니다.</strong></p></article>
        <article className="cc-profile-card cc-profile-two"><div><Image src="/images/team/lee-yujin.png" alt="이유진 팀장" width={74} height={74}/><span><strong>@happy.yujin_</strong><small>캠페인 운영</small></span><b>메시지</b></div><div className="cc-mini-products"><Image src="/images/home/australian-products/manuka-mgo-300-product.webp" alt="마누카 MGO 300+" width={88} height={72}/><Image src="/images/home/australian-products/propolis-spray-product.webp" alt="굿데이 프로폴리스 스프레이" width={88} height={72}/><Image src="/images/home/australian-products/quokkies-macadamia-lifestyle.webp" alt="쿼키즈 마카다미아" width={88} height={72}/></div></article>
        <span className="cc-floating-badge badge-one">CREATOR MATCH</span><span className="cc-floating-badge badge-two">공구 제안 가능</span>
      </div>
    </div></section>

    <nav className="shell cc-stories" aria-label="주요 콘텐츠 바로가기">{stories.map(([label, href, image]) => <Link key={label} href={href}><span><Image src={image} alt="" width={82} height={82}/></span><strong>{label}</strong></Link>)}</nav>

    <section className="shell cc-section cc-benefits"><div className="cc-section-head"><span className="cc-kicker">WHY GEOSANG COMMERCE</span><h2>크리에이터는 팬에게 집중하고,<br />운영은 거상커머스가 연결합니다</h2></div><div className="cc-benefit-grid">{[["01","내 콘텐츠에 맞는 상품","상품을 찾는 시간을 줄이고 채널과 팬에게 맞는 제안을 받습니다."],["02","재고 부담 없는 협업","공급사가 상품과 배송을 담당하는 구조를 우선 검토합니다."],["03","판매 운영 지원","기획·콘텐츠 안내·일정·배송 커뮤니케이션을 연결합니다."],["04","반복 가능한 파트너십","한 번의 노출보다 서로 잘 맞는 다음 캠페인을 함께 검토합니다."]].map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>

    <section className="cc-campaigns cc-section"><div className="shell"><div className="cc-section-head row"><div><span className="cc-kicker">TRENDING CAMPAIGNS</span><h2>지금 뜨고 있는 공동구매</h2><p>크리에이터와 고객의 반응이 좋은 캠페인을 만나보세요.</p></div><Link href="/campaigns">전체 상품 보기 →</Link></div><div className="campaign-grid home-campaign-grid">{campaigns.map((campaign) => <CampaignCard key={campaign.slug} campaign={campaign}/>)}</div></div></section>

    <section className="shell cc-section cc-creators"><div className="cc-creator-copy"><span className="cc-kicker">CREATOR PARTNERS</span><h2>당신의 영향력이<br /><em>매출이 됩니다</em></h2><p>팬과 쌓아온 신뢰가 좋은 상품을 만날 때 콘텐츠는 새로운 판매 기회가 됩니다. 거상커머스는 크리에이터가 상품을 찾고 운영을 조율하는 시간을 줄여 콘텐츠와 팬의 반응에 집중할 수 있도록 돕습니다.</p><TrackedLink href="/creators#apply" analyticsEvent="click_creator_apply" className="gradient-button">크리에이터 파트너 등록</TrackedLink></div><div className="cc-creator-profiles"><a href="https://www.instagram.com/geosang.bruce/" target="_blank" rel="noreferrer"><div><Image src="/images/team/lim-heonsu.jpg" alt="임헌수 대표 인스타그램 프로필" fill sizes="(max-width: 700px) 78vw, 320px"/></div><span>CREATOR COMMERCE</span><h3>임헌수 대표</h3><p>@geosang.bruce · 콘텐츠와 판매 구조 설계</p></a><a href="https://www.instagram.com/happy.yujin_/" target="_blank" rel="noreferrer"><div><Image src="/images/team/lee-yujin.png" alt="이유진 팀장 인스타그램 프로필" fill sizes="(max-width: 700px) 78vw, 320px"/></div><span>CAMPAIGN OPERATION</span><h3>이유진 팀장</h3><p>@happy.yujin_ · 캠페인 운영과 커뮤니케이션</p></a></div></section>

    <section className="cc-process cc-section"><div className="shell"><div className="cc-section-head centered"><span className="cc-kicker">HOW IT WORKS</span><h2>콘텐츠 하나가 공동구매가 되는 과정</h2><p>지원부터 다음 캠페인까지, 각 단계의 역할과 기준을 먼저 확인합니다.</p></div><ol>{process.map(([n,t,d,icon]) => <li key={n}><div><span>{icon}</span><b>STEP {n}</b></div><h3>{t}</h3><p>{d}</p></li>)}</ol><div className="cc-center-link"><Link href="/process" className="outline-button">전체 진행 방법 보기</Link></div></div></section>

    <section className="cc-australia cc-section"><div className="shell cc-australia-grid"><div className="cc-australia-image"><Image src="/images/home/australian-products/australian-beekeeping.webp" alt="호주 양봉 현장에서 벌집을 관리하는 양봉가" fill sizes="(max-width: 900px) 92vw, 52vw"/></div><div><span className="cc-kicker">AUSTRALIAN PRODUCT NETWORK</span><h2>호주의 좋은 상품을<br />한국의 팬들에게</h2><p>호주 공급 네트워크에서 찾은 마누카꿀, 프로폴리스, 마카다미아처럼 이야기와 품질 기준이 분명한 상품을 한국 크리에이터의 콘텐츠와 연결합니다.</p><ul><li>실제 공급 가능한 프리미엄 상품 검토</li><li>콘텐츠로 설명할 수 있는 원산지와 상품 스토리</li><li>공급·배송 역할이 연결된 공동구매 구조</li></ul><Link href="/campaigns" className="cc-dark-link">호주 상품 캠페인 보기 →</Link></div></div></section>

    <section className="shell cc-section cc-brand"><div><span className="cc-kicker">FOR BRANDS</span><h2>브랜드의 상품을<br />크리에이터의 영향력과 연결합니다</h2><p>상품은 준비됐지만 함께 판매할 파트너를 찾기 어렵다면, 거상커머스가 상품과 고객을 이해하는 크리에이터를 검토합니다.</p><TrackedLink href="/brands#inquiry" analyticsEvent="click_brand_inquiry" className="gradient-button">브랜드 입점 문의하기</TrackedLink></div><div className="cc-brand-services">{["상품과 크리에이터 매칭","캠페인 기획·판매 페이지 지원","콘텐츠 방향과 필수 정보 안내","주문·배송·정산 커뮤니케이션","다음 캠페인을 위한 반복 협업 검토"].map((item,index) => <article key={item}><span>{String(index+1).padStart(2,"0")}</span><strong>{item}</strong><b>↗</b></article>)}</div></section>

    <section className="cc-trust cc-section"><div className="shell"><div className="cc-section-head centered"><span className="cc-kicker">TRUST THROUGH OPERATION</span><h2>숫자를 부풀리지 않고,<br />확인된 운영 기준으로 신뢰를 만듭니다</h2></div><div className="cc-message-grid">{supportMessages.map(([handle,title,copy]) => <article key={handle}><div><span>G</span><p><strong>{handle}</strong><small>거상커머스 운영 안내</small></p><b>•••</b></div><h3>{title}</h3><p>{copy}</p><small>확인된 역할과 조건을 기준으로 안내합니다.</small></article>)}</div></div></section>

    <section className="shell cc-faq cc-section"><div><span className="cc-kicker">FAQ</span><h2>공동구매를 시작하기 전에</h2><p>지원, 상품 검토, 공급·배송과 정산에서 자주 묻는 내용을 먼저 확인하세요.</p><Link href="/faq">전체 질문 보기 →</Link></div><FAQAccordion items={commonFaqs}/></section>

    <section className="shell cc-final-cta"><div><span>START YOUR CREATOR COMMERCE</span><h2>좋은 상품을 찾고 있다면,<br />이제 거상커머스와 함께 시작하세요.</h2></div><div><TrackedLink href="/creators#apply" analyticsEvent="click_creator_apply" className="white-button primary">크리에이터 지원하기 <b>→</b></TrackedLink><TrackedLink href="/brands#inquiry" analyticsEvent="click_brand_inquiry" className="white-button">브랜드 입점 문의 <b>→</b></TrackedLink><Link href="/campaigns" className="white-button">캠페인 보기 <b>→</b></Link></div></section>
  </main>;
}
