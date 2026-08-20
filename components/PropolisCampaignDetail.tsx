import Image from "next/image";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { TrackedLink } from "@/components/TrackedLink";
import { Campaign, discountRate, won } from "@/data/campaigns";

export function PropolisCampaignDetail({ item }: { item: Campaign }) {
  const detail = item.propolisDetail;
  if (!detail) return null;
  const lead = item.variants[0];
  const applyHref = `/creators?campaign=${item.slug}#apply`;

  return <main className="propolis-page">
    <section className="propolis-hero"><div className="shell propolis-hero-grid">
      <div className="propolis-hero-image"><Image src={detail.heroImage} alt={item.imageAlt || item.name} width={1100} height={800} priority sizes="(max-width: 900px) 100vw, 52vw" /></div>
      <div className="propolis-hero-copy"><span className="propolis-kicker">G’DAY HONEY · 건강기능식품 · 호주</span><p className="propolis-english">{detail.englishName}</p><h1>{item.name}</h1><p className="propolis-intro">{detail.introduction}</p><strong className="propolis-claim">{detail.functionalClaim}</strong><div className="propolis-price"><span>{discountRate(lead.regularPrice, lead.offerPrice)}%</span><strong>{won(lead.offerPrice)}</strong><del>{won(lead.regularPrice)}</del></div><p className="propolis-note">공동구매 제안 기준가이며 실제 판매 구성, 일정과 진행 조건은 협의 후 확정됩니다.</p><TrackedLink href={applyHref} analyticsEvent="click_creator_apply" analyticsData={{ campaign_slug: item.slug }} className="propolis-primary-button">이 상품 제안받기</TrackedLink></div>
    </div><div className="shell propolis-review"><div><b>건강기능식품</b><span>한국건강기능식품협회 광고심의 완료</span><strong>심의번호 {detail.reviewNumber}</strong></div><p>{detail.reviewText}</p></div></section>

    <section className="shell propolis-section"><div className="propolis-section-head"><span>PRODUCT HIGHLIGHTS</span><h2>한눈에 보는 핵심 포인트</h2></div><div className="propolis-highlight-grid">{detail.highlights.map((x, i) => <article key={x.title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{x.title}</h3><p>{x.description}</p></article>)}</div></section>

    <section className="propolis-warm propolis-section"><div className="shell propolis-brand-grid"><Image src={detail.images.dutyFree} alt="호주 Sydney Duty Free 매장 전경" width={1100} height={610} sizes="(max-width: 900px) 100vw, 52vw" /><div><span className="propolis-kicker">FROM AUSTRALIA</span><h2>호주에서 시작된 굿데이 브랜드</h2><p>호주 Sydney Duty Free에서 만나볼 수 있었던 굿데이 브랜드가 국내에 정식 수입되었습니다.</p><ul><li>호주 Sydney Duty Free에서 판매된 브랜드</li><li>국내 정식 수입 제품</li><li>호주에서 제조된 프로폴리스 스프레이</li><li>건강기능식품으로 정식 표시된 제품</li></ul></div></div></section>

    <section className="shell propolis-section propolis-function-grid"><div><Image src={detail.images.product} alt="굿데이 프로폴리스 스프레이 제품과 벌집" width={900} height={1450} sizes="(max-width: 900px) 100vw, 44vw" /></div><div><span className="propolis-kicker">FUNCTIONAL CLAIM</span><h2>인정받은 구강 항균 기능성</h2><strong className="propolis-claim">{detail.functionalClaim}</strong><p>굿데이 프로폴리스 스프레이는 프로폴리스 추출물을 주원료로 한 건강기능식품입니다. 1일 섭취량 1.5ml 기준 총 플라보노이드 2.25mg을 함유하고 있습니다.</p><b className="propolis-medicine-note">본 제품은 질병의 예방 및 치료를 위한 의약품이 아닙니다.</b></div></section>

    <section className="propolis-dark propolis-section"><div className="shell"><div className="propolis-section-head light"><span>INGREDIENTS</span><h2>제품에 담긴 주요 원료</h2></div><div className="propolis-ingredient-grid">{detail.ingredients.map((x) => <article key={x.name}><span>{x.type}</span><h3>{x.name}</h3><p>{x.description}</p></article>)}</div></div></section>

    <section className="propolis-warm propolis-section"><div className="shell propolis-serving-grid"><div><Image src={detail.images.use} alt="굿데이 프로폴리스 스프레이를 손으로 구강에 분사하는 사용 예시" width={900} height={1300} sizes="(max-width: 900px) 100vw, 44vw" /></div><div><span className="propolis-kicker">SERVING GUIDE</span><h2>이렇게 섭취하세요</h2><dl className="propolis-serving-summary"><div><dt>섭취 대상</dt><dd>{detail.servingGuide.target}</dd></div><div><dt>섭취방법</dt><dd>{detail.servingGuide.method}</dd></div><div><dt>1일 섭취량</dt><dd>{detail.servingGuide.dailyAmount}</dd></div></dl><ol className="propolis-steps">{detail.servingGuide.steps.map((step, i) => <li key={step}><span>{i + 1}</span>{step}</li>)}</ol></div></div><div className="shell propolis-caution"><h3>섭취 전 확인해 주세요</h3><ul>{detail.cautions.map((x) => <li key={x}>{x}</li>)}</ul></div></section>

    <section className="shell propolis-section"><div className="propolis-section-head"><span>PRODUCT INFORMATION</span><h2>제품 표시사항</h2><p>제품 표시사항을 기준으로 접근 가능한 HTML 정보로 정리했습니다.</p></div><div className="propolis-info-grid"><div><dl className="propolis-info-list">{detail.productInfo.map((x) => <div key={x.label}><dt>{x.label}</dt><dd>{x.value}</dd></div>)}</dl><p><strong>수입업소 소재지</strong><br />{detail.address}</p><p><strong>원재료명</strong><br />{detail.rawIngredients}</p></div><div><h3>영양·기능정보 <small>1일 섭취량 1.5ml</small></h3><dl className="propolis-nutrition">{detail.nutrition.map((x) => <div key={x.name}><dt>{x.name}</dt><dd>{x.value}</dd></div>)}</dl><strong className="propolis-claim">{detail.functionalClaim}</strong><p>영양·기능정보는 제품 표시사항을 기준으로 작성했습니다.</p></div></div></section>

    <section className="propolis-dark propolis-section"><div className="shell propolis-gift-grid"><Image src={detail.images.gift} alt="굿데이 프로폴리스 스프레이와 노란색 선물 패키지" width={900} height={1260} sizes="(max-width: 900px) 100vw, 44vw" /><div><span className="propolis-kicker">PACKAGE</span><h2>선물로도 제안하기 좋은 패키지</h2><p>검정·골드 제품 패키지와 노란색 선물 박스를 활용하여 감사 선물, 호주 상품 소개, 프리미엄 라이프스타일 콘텐츠로 구성할 수 있습니다.</p><ul><li>검정·골드 컬러의 제품 디자인</li><li>휴대하기 좋은 25ml 크기</li><li>선물 콘텐츠에 활용할 수 있는 패키지 이미지</li></ul><b className="propolis-package-note">선물 패키지 포함 여부는 실제 공동구매 구성 협의 후 확정됩니다.</b></div></div></section>

    <section className="shell propolis-section"><div className="propolis-section-head"><span>CONTENT PLAYBOOK</span><h2>이런 콘텐츠로 소개하기 좋습니다</h2></div><div className="propolis-content-grid"><div><h3>콘텐츠 아이디어</h3><ol>{detail.contentIdeas.map((x) => <li key={x}>{x}</li>)}</ol></div><div><h3>추천 크리에이터</h3><div className="propolis-tags">{detail.creatorTypes.map((x) => <span key={x}>{x}</span>)}</div><h3>숏폼 훅 예시</h3><ul>{detail.hooks.map((x) => <li key={x}>“{x}”</li>)}</ul></div></div><div className="propolis-expression-guide"><strong>콘텐츠에서 사용하지 않는 표현</strong>{detail.prohibitedExpressions.map((x) => <span key={x}>{x}</span>)}</div></section>

    <section className="propolis-warm propolis-section"><div className="shell"><div className="propolis-section-head"><span>PRICE OPTIONS</span><h2>공동구매 상품 구성</h2></div><div className="propolis-price-cards">{item.variants.map((x) => <article key={x.composition}><h3>{x.composition}</h3><p><small>정상가</small><del>{won(x.regularPrice)}</del></p><p><small>공동구매 제안가</small><strong>{won(x.offerPrice)}</strong><span>{discountRate(x.regularPrice, x.offerPrice)}% 할인</span></p><b>{item.shipping}</b></article>)}</div><p className="propolis-note">가격은 공동구매 제안 기준이며 판매 일정, 수량, 수수료, 선물 패키지 포함 여부와 세부 조건은 협의 후 최종 확정됩니다.</p></div></section>

    <section className="shell propolis-section"><div className="propolis-section-head"><span>CAMPAIGN SUPPORT</span><h2>거상커머스가 함께합니다</h2></div><div className="propolis-support-grid">{detail.supportItems.map((x, i) => <article key={x}><span>{String(i + 1).padStart(2, "0")}</span><strong>{x}</strong></article>)}</div><p className="propolis-support-note">{detail.supportNote}</p></section>
    <section className="propolis-dark propolis-section"><div className="shell"><div className="propolis-section-head light"><span>PROCESS</span><h2>공동구매 진행 과정</h2></div><ProcessTimeline /></div></section>
    <section className="propolis-warm propolis-section"><div className="shell propolis-faq-grid"><div><span className="propolis-kicker">FAQ</span><h2>자주 묻는 질문</h2><p>신청 전 상품 정보와 표시·광고 기준을 확인해 주세요.</p></div><FAQAccordion items={detail.faqs} /></div></section>
    <section className="shell propolis-final-cta"><div><span>CREATOR PARTNERSHIP</span><h2>{detail.finalCta.title}</h2><p>{detail.finalCta.description}</p></div><TrackedLink href={applyHref} analyticsEvent="click_creator_apply" analyticsData={{ campaign_slug: item.slug }} className="propolis-primary-button">{detail.finalCta.button}</TrackedLink></section>
    <div className="sticky-detail-cta"><span><strong>{item.name}</strong><small>{item.shipping} · 제안가 {won(lead.offerPrice)}부터</small></span><TrackedLink href={applyHref} analyticsEvent="click_creator_apply" analyticsData={{ campaign_slug: item.slug }} className="gradient-button">{detail.finalCta.button}</TrackedLink></div>
  </main>;
}
