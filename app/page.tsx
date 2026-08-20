import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TrackedLink } from "@/components/TrackedLink";
import { commonFaqs, absoluteUrl, COMMON_OG_IMAGE, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: "호주 상품 공동구매 플랫폼 | 거상커머스" },
  description: "거상커머스는 호주 프리미엄 상품을 발굴하고 한국 인플루언서와 연결해 공동구매 상품 매칭, 콘텐츠 안내와 캠페인 운영을 지원합니다.",
  alternates: { canonical: absoluteUrl("/") },
  openGraph: { title: "호주 상품과 한국 크리에이터를 연결합니다 | 거상커머스", description: "호주 프리미엄 상품을 한국 인플루언서의 콘텐츠와 연결하는 공동구매 플랫폼", url: absoluteUrl("/"), siteName: siteConfig.name, locale: "ko_KR", type: "website", images: [{ url: absoluteUrl(COMMON_OG_IMAGE), width: 1200, height: 630, alt: "호주 프리미엄 상품과 한국 크리에이터를 연결하는 거상커머스" }] },
  twitter: { card: "summary_large_image", title: "호주 상품과 한국 크리에이터를 연결합니다 | 거상커머스", description: "호주 프리미엄 상품을 한국 인플루언서의 콘텐츠와 연결하는 공동구매 플랫폼", images: [absoluteUrl(COMMON_OG_IMAGE)] },
};

const products = [
  { slug: "manuka-royal-jelly-mgo-300", label: "DAILY MANUKA", name: "마누카 위드 로열젤리 MGO 300+", description: "호주산 마누카꿀과 로열젤리를 담은 데일리 스틱", image: "/images/home/australian-products/manuka-mgo-300-product.webp", alt: "굿데이허니 마누카 위드 로열젤리 MGO 300+ 화이트 패키지" },
  { slug: "manuka-royal-jelly-mgo-800", label: "PREMIUM MANUKA", name: "마누카 위드 로열젤리 MGO 800+", description: "블랙·골드 패키지의 프리미엄 MGO 800+ 라인", image: "/images/home/australian-products/manuka-mgo-800-product.webp", alt: "굿데이허니 마누카 위드 로열젤리 MGO 800+ 블랙 패키지" },
  { slug: "gooday-propolis-spray", label: "FUNCTIONAL PRODUCT", name: "굿데이 프로폴리스 스프레이", description: "호주에서 제조된 25ml 구강 스프레이형 건강기능식품", image: "/images/home/australian-products/propolis-spray-product.webp", alt: "굿데이 프로폴리스 스프레이 25ml 제품과 패키지" },
  { slug: "quokkies-macadamia", label: "AUSTRALIAN SNACK", name: "쿼키즈 마카다미아", description: "직접 껍질을 열어 즐기는 호주산 프리미엄 마카다미아", image: "/images/home/australian-products/quokkies-macadamia-lifestyle.webp", alt: "쿼키즈 마카다미아 바닐라 로스티드와 드라이 로스티드 패키지" },
];

export default function Home() {
  return <main className="australia-home">
    <section className="au-hero"><div className="shell au-hero-grid">
      <div className="au-hero-copy"><span className="au-kicker">AUSTRALIAN PRODUCT CURATION × CREATOR COMMERCE</span><h1><em>호주에서 찾은 좋은 제품,</em><br />콘텐츠를 만나 <strong>매출이 됩니다</strong></h1><p className="au-hero-lead">거상커머스는 호주 프리미엄 상품을 발굴하고, 상품과 잘 맞는 한국 인플루언서를 연결해 공동구매의 전 과정을 지원합니다.</p><p className="au-role-note">상품 공급과 택배 발송은 공급사가 담당하고, 거상커머스는 상품 매칭·캠페인 조율·콘텐츠 안내·운영 커뮤니케이션을 지원합니다.</p><div className="au-hero-actions"><TrackedLink href="/campaigns" analyticsEvent="view_campaign" className="au-button primary">호주 상품 캠페인 보기</TrackedLink><TrackedLink href="/creators#apply" analyticsEvent="click_creator_apply" className="au-button secondary">인플루언서 파트너 등록</TrackedLink></div><Link href="/brands" className="au-text-link">브랜드 상품 제안하기 <span aria-hidden="true">→</span></Link></div>
      <div className="au-collection" aria-label="호주 프리미엄 상품 컬렉션"><span className="au-map-label">CURATED FROM AUSTRALIA</span><div className="au-product-card au-manuka300"><Image src="/images/home/australian-products/manuka-mgo-300-product.webp" alt="마누카 위드 로열젤리 MGO 300+" fill priority sizes="(max-width: 768px) 50vw, 330px" /><small>MANUKA HONEY</small></div><div className="au-product-card au-manuka800"><Image src="/images/home/australian-products/manuka-mgo-800-product.webp" alt="마누카 위드 로열젤리 MGO 800+" fill priority sizes="(max-width: 768px) 50vw, 260px" /><small>PREMIUM MANUKA</small></div><div className="au-product-card au-propolis"><Image src="/images/home/australian-products/propolis-spray-product.webp" alt="굿데이 프로폴리스 스프레이" fill priority sizes="(max-width: 768px) 50vw, 250px" /><small>PROPOLIS</small></div><div className="au-product-card au-quokkies"><Image src="/images/home/australian-products/quokkies-macadamia-lifestyle.webp" alt="쿼키즈 마카다미아 바닐라와 드라이 패키지" fill priority sizes="(max-width: 768px) 50vw, 300px" /><small>MACADAMIA</small></div></div>
    </div><div className="shell au-trust-row" aria-label="거상커머스 지원 범위">{[["01","호주 상품 전문 소싱 네트워크"],["02","공급·배송 연결"],["03","인플루언서 매칭"],["04","공동구매 운영 지원"]].map(([number,label]) => <div key={number}><span>{number}</span><strong>{label}</strong></div>)}</div></section>

    <section className="shell au-section au-products"><div className="au-section-heading"><span className="au-kicker">AUSTRALIAN COLLECTION</span><h2>호주에서 엄선한 공동구매 상품</h2><p>상품 스토리와 콘텐츠 활용도, 배송 구조를 검토한 상품을 소개합니다.</p></div><div className="au-product-grid">{products.map((product) => <Link key={product.slug} href={`/campaigns/${product.slug}`} className="au-campaign-card"><div className="au-campaign-image"><Image src={product.image} alt={product.alt} fill sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 280px" /></div><div><span>{product.label}</span><h3>{product.name}</h3><p>{product.description}</p><strong>상품 자세히 보기 <b aria-hidden="true">→</b></strong></div></Link>)}</div></section>

    <section className="au-australia-story au-section"><div className="shell au-story-grid"><div className="au-story-image"><Image src="/images/home/australian-products/australian-beekeeping.webp" alt="호주 양봉 현장에서 벌집을 관리하는 양봉가" fill sizes="(max-width: 900px) 92vw, 52vw" /></div><div><span className="au-kicker">WHY AUSTRALIA</span><h2>청정한 자연에서 시작된 제품을 찾습니다</h2><p>거상커머스는 호주 상품 공급 네트워크를 기반으로 마누카꿀, 프로폴리스, 마카다미아 등 콘텐츠와 공동구매에 적합한 상품을 발굴합니다.</p><ul className="au-story-points"><li><strong>상품의 원산지와 스토리</strong><span>단순히 가격만 좋은 제품보다 소비자에게 설명할 이야기가 있는 상품을 검토합니다.</span></li><li><strong>공급과 배송이 연결된 구조</strong><span>상품 공급과 택배 발송은 공급사가 담당하고, 거상커머스가 캠페인 운영을 연결합니다.</span></li><li><strong>콘텐츠에 적합한 상품</strong><span>사진·숏폼·리뷰·정보형 콘텐츠로 소개하기 좋은 상품을 우선 검토합니다.</span></li></ul><Link href="/process" className="au-button secondary">공동구매 진행 방식 보기</Link></div></div></section>

    <section className="shell au-section au-role-flow"><div className="au-section-heading centered"><span className="au-kicker">COMMERCE CONNECTION</span><h2>상품은 호주에서, 영향력은 콘텐츠에서</h2><p>공급·운영·콘텐츠의 역할이 명확한 협업 구조입니다.</p></div><ol><li><span>01</span><h3>호주 상품 공급 네트워크</h3><p>공급사가 상품과 배송 구조를 제공합니다.</p></li><li><span>02</span><h3>거상커머스 매칭·운영</h3><p>상품과 인플루언서를 연결하고 조건·일정·콘텐츠를 조율합니다.</p></li><li><span>03</span><h3>인플루언서 콘텐츠·판매</h3><p>자신의 채널과 팔로워에게 맞는 콘텐츠로 공동구매를 진행합니다.</p></li></ol></section>

    <section className="shell au-section au-dual-cta"><article className="creator"><span>FOR CREATORS</span><h2>콘텐츠와 잘 맞는 호주 상품을 제안받으세요</h2><p>채널과 콘텐츠 성향을 등록하면 적합한 상품과 공동구매 기회를 안내해드립니다.</p><TrackedLink href="/creators#apply" analyticsEvent="click_creator_apply" className="au-light-button">인플루언서 파트너 등록 <b>→</b></TrackedLink></article><article className="brand"><span>FOR BRANDS</span><h2>한국 크리에이터와 판매하고 싶은 상품이 있나요?</h2><p>상품 경쟁력과 공급·배송 조건을 검토한 후 적합한 인플루언서와 캠페인을 제안합니다.</p><TrackedLink href="/brands" analyticsEvent="click_brand_inquiry" className="au-light-button">브랜드 상품 제안 <b>→</b></TrackedLink></article></section>

    <section className="shell au-faq au-section"><div><span className="au-kicker">FAQ</span><h2>공동구매 전에 확인하세요</h2><p>상품 제안과 파트너 등록, 공급·배송·운영 과정에서 자주 묻는 내용을 정리했습니다.</p><Link href="/faq" className="au-text-link">전체 질문 보기 →</Link></div><FAQAccordion items={commonFaqs} /></section>
  </main>;
}
