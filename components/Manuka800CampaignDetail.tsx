import Image from "next/image";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { TrackedLink } from "@/components/TrackedLink";
import { Campaign, discountRate, won } from "@/data/campaigns";

export function Manuka800CampaignDetail({ item }: { item: Campaign }) {
  const detail = item.detail;
  if (!detail) return null;
  const lead = item.variants[0];
  const applyHref = `/creators?campaign=${item.slug}#apply`;

  return <main className="mgo800-page">
    <section className="mgo800-hero"><div className="shell mgo800-hero-inner">
      <div className="mgo800-hero-image"><Image src={item.image!} alt={item.imageAlt || item.name} width={800} height={720} priority sizes="(max-width: 900px) 100vw, 48vw" /></div>
      <div className="mgo800-hero-copy"><span className="mgo800-kicker">{item.brand} · {item.category} · {item.origin}</span><p className="mgo800-english">{detail.englishName}</p><h1>{item.name}</h1><p className="mgo800-intro">{detail.introduction}</p>
        <div className="mgo800-facts">{detail.productFacts.map((fact) => <div key={fact.label}><small>{fact.label}</small><strong>{fact.value}</strong></div>)}</div>
        <div className="mgo800-price-summary"><span>{discountRate(lead.regularPrice, lead.offerPrice)}%</span><strong>{won(lead.offerPrice)}</strong><del>{won(lead.regularPrice)}</del></div><p className="mgo800-price-note">공동구매 제안 기준가이며 실제 진행 조건과 일정은 협의 후 확정됩니다.</p>
        <TrackedLink href={applyHref} analyticsEvent="click_creator_apply" analyticsData={{ campaign_slug: item.slug }} className="mgo800-primary-button">이 상품 제안받기</TrackedLink>
      </div>
    </div></section>

    <section className="shell mgo800-section"><div className="mgo800-section-head"><span>PRODUCT HIGHLIGHTS</span><h2>한 포에 담은 프리미엄 마누카 루틴</h2></div><div className="mgo800-highlight-grid">{detail.highlights.map((highlight, index) => <article key={highlight.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{highlight.title}</h3><p>{highlight.description}</p></article>)}</div></section>

    <section className="mgo800-cream-section mgo800-section"><div className="shell mgo800-two-column"><div className="mgo800-editorial-image"><Image src={detail.routine.image} alt="굿데이허니 마누카 MGO 800+ 개별 스틱" width={720} height={820} sizes="(max-width: 900px) 100vw, 46vw" /></div><div className="mgo800-copy-block"><span>01 · DAILY ROUTINE</span><h2>{detail.routine.title}</h2><p>{detail.routine.description}</p><ul>{detail.routine.points.map((point) => <li key={point}>{point}</li>)}</ul></div></div></section>

    <section className="shell mgo800-section"><div className="mgo800-section-head"><span>02 · LINEUP GUIDE</span><h2>{detail.comparison.title}</h2><p>MGO 300+와 800+의 우열이 아닌 패키지와 콘텐츠 포지션 차이를 확인하세요.</p></div><div className="mgo800-comparison-layout"><Image src={detail.comparison.image} alt="굿데이허니 마누카 MGO 300+와 MGO 800+ 스틱 비교" width={800} height={700} sizes="(max-width: 900px) 100vw, 48vw" /><div className="mgo800-table-wrap"><table><thead><tr><th>구분</th><th>MGO 300+</th><th>MGO 800+</th></tr></thead><tbody>{detail.comparison.rows.map((row) => <tr key={row.label}><th>{row.label}</th><td>{row.first}</td><td>{row.second}</td></tr>)}</tbody></table></div></div></section>

    <section className="mgo800-gold-section mgo800-section"><div className="shell"><div className="mgo800-section-head"><span>03 · MGO GUIDE</span><h2>{detail.mgoGuide.title}</h2><p>{detail.mgoGuide.description}</p><strong>{detail.mgoGuide.emphasis}</strong></div><div className="mgo800-table-wrap mgo800-grade-table"><table><thead><tr><th>MGO 함량 (mg/kg)</th><th>UMF 등급</th><th>GRADE</th></tr></thead><tbody>{detail.mgoGuide.rows.map((row) => <tr key={row.mgo}><td>{row.mgo}</td><td>{row.umf}</td><td>{row.grade}</td></tr>)}</tbody></table></div><p className="mgo800-source-note">{detail.mgoGuide.note}</p></div></section>

    <section className="shell mgo800-section"><div className="mgo800-section-head"><span>04 · FROM AUSTRALIA</span><h2>{detail.originStory.title}</h2><p>{detail.originStory.description}</p></div><div className="mgo800-origin-images">{detail.originStory.images.map((image) => <Image key={image.src} src={image.src} alt={image.alt} width={800} height={600} sizes="(max-width: 700px) 100vw, 50vw" />)}</div><div className="mgo800-origin-cards">{detail.originStory.cards.map((card) => <article key={card}>{card}</article>)}</div></section>

    <section className="mgo800-dark-section mgo800-section"><div className="shell mgo800-package-layout"><div className="mgo800-package-image"><Image src={detail.packageStory.image} alt="굿데이허니 마누카 MGO 800+ 블랙 골드 패키지" width={720} height={900} sizes="(max-width: 900px) 100vw, 44vw" /></div><div><div className="mgo800-section-head left"><span>05 · PACKAGE</span><h2>{detail.packageStory.title}</h2></div><div className="mgo800-package-cards">{detail.packageStory.cards.map((card) => <article key={card.title}><h3>{card.title}</h3><p>{card.description}</p></article>)}</div></div></div></section>

    <section className="shell mgo800-section"><div className="mgo800-section-head"><span>CONTENT PLAYBOOK</span><h2>이런 콘텐츠로 소개하기 좋습니다</h2><p>제품 특성을 사실에 근거해 설명하고, 검증되지 않은 건강 효능이나 의학적 표현은 사용하지 않습니다.</p></div><div className="mgo800-content-layout"><div><h3>추천 콘텐츠 아이디어</h3><ol>{detail.contentIdeas.map((idea) => <li key={idea}>{idea}</li>)}</ol></div><div><h3>추천 인플루언서 분야</h3><div className="mgo800-tag-cloud">{item.contentFields.map((field) => <span key={field}>{field}</span>)}</div><h3>콘텐츠 훅 예시</h3><ul className="mgo800-hooks">{detail.hooks.map((hook) => <li key={hook}>“{hook}”</li>)}</ul></div></div></section>

    <section className="mgo800-cream-section mgo800-section"><div className="shell"><div className="mgo800-section-head"><span>PRICE OPTIONS</span><h2>공동구매 제안 구성</h2><p>모든 구성은 무료배송이며 실제 진행 조건과 일정은 협의 후 확정됩니다.</p></div><div className="mgo800-price-cards">{item.variants.map((variant) => <article key={variant.composition}><h3>{variant.composition}</h3><div><small>정상가</small><del>{won(variant.regularPrice)}</del></div><div className="offer"><small>공동구매 제안가</small><strong>{won(variant.offerPrice)}</strong><span>{discountRate(variant.regularPrice, variant.offerPrice)}% 할인</span></div><b>{item.shipping}</b></article>)}</div><p className="mgo800-source-note">가격은 공동구매 제안 기준이며 판매 일정, 수량, 수수료 및 세부 조건은 협의 후 최종 확정됩니다.</p></div></section>

    <section className="shell mgo800-section"><div className="mgo800-section-head"><span>CAMPAIGN SUPPORT</span><h2>거상커머스가 함께합니다</h2></div><div className="mgo800-support-grid">{["상품·채널 적합성 확인", "캠페인 일정 조율", "콘텐츠 기획 자료 안내", "공급·배송 커뮤니케이션", "판매 현황 확인 지원", "정산 일정 안내"].map((support, index) => <article key={support}><span>{String(index + 1).padStart(2, "0")}</span><strong>{support}</strong></article>)}</div><p className="mgo800-support-note">{detail.supportNote}</p></section>

    <section className="mgo800-dark-section mgo800-section"><div className="shell"><div className="mgo800-section-head light"><span>PROCESS</span><h2>공동구매 진행 과정</h2></div><ProcessTimeline /></div></section>
    <section className="mgo800-cream-section mgo800-section"><div className="shell mgo800-faq-layout"><div><span className="mgo800-kicker">FAQ</span><h2>자주 묻는 질문</h2><p>신청 전 궁금한 내용을 확인해 보세요.</p></div><FAQAccordion items={detail.faqs} /></div></section>

    <section className="shell mgo800-final-cta"><div><span>CREATOR PARTNERSHIP</span><h2>이 상품과 콘텐츠가 잘 맞는다면 제안을 받아보세요</h2><p>채널과 콘텐츠 성향을 확인한 후 공동구매 조건과 진행 가능 일정을 안내해드립니다.</p></div><TrackedLink href={applyHref} analyticsEvent="click_creator_apply" analyticsData={{ campaign_slug: item.slug }} className="mgo800-white-button">마누카 MGO 800+ 제안받기</TrackedLink></section>
    <div className="sticky-detail-cta"><span><strong>{item.name}</strong><small>{item.shipping} · 제안가 {won(lead.offerPrice)}부터</small></span><TrackedLink href={applyHref} analyticsEvent="click_creator_apply" analyticsData={{ campaign_slug: item.slug }} className="gradient-button">마누카 MGO 800+ 제안받기</TrackedLink></div>
  </main>;
}
