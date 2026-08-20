import Image from "next/image";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TrackedLink } from "@/components/TrackedLink";
import { Campaign, discountRate, won } from "@/data/campaigns";

type Fact = { label: string; value: string };
type Highlight = { title: string; description: string };

export function ProductHero({ item, image, title, englishName, introduction, facts, notice, href }: { item: Campaign; image: string; title: string; englishName: string; introduction: string; facts: Fact[]; notice: string; href: string }) {
  const lead = item.variants[0];
  return <section className="quokkies-hero"><div className="shell quokkies-hero-grid"><div className="quokkies-hero-image"><Image src={image} alt={item.imageAlt || item.name} width={1200} height={1054} priority sizes="(max-width: 900px) 100vw, 52vw" /></div><div className="quokkies-hero-copy"><span className="quokkies-kicker">{item.brand} · {item.origin}산 {item.category} · 120g</span><p className="quokkies-english">{englishName}</p><h1>{title}</h1><p className="quokkies-intro">{introduction}</p><div className="quokkies-flavor-pills"><span>바닐라 로스티드</span><span>드라이 로스티드</span></div><div className="quokkies-price"><span>{discountRate(lead.regularPrice, lead.offerPrice)}%</span><strong>{won(lead.offerPrice)}</strong><del>{won(lead.regularPrice)}</del></div><p className="quokkies-lead-composition">대표 구성 · {lead.composition}</p><p className="quokkies-note">{notice}</p><TrackedLink href={href} analyticsEvent="click_creator_apply" analyticsData={{ campaign_slug: item.slug }} className="quokkies-primary-button">이 상품 제안받기</TrackedLink></div></div><div className="shell quokkies-facts">{facts.map((fact) => <div key={fact.label}><small>{fact.label}</small><strong>{fact.value}</strong></div>)}</div></section>;
}

export function ProductHighlights({ title, items, note }: { title: string; items: Highlight[]; note?: string }) {
  return <section className="shell quokkies-section"><div className="quokkies-section-head"><span>PRODUCT HIGHLIGHTS</span><h2>{title}</h2></div><div className="quokkies-highlight-grid">{items.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>{note ? <p className="quokkies-source-notice">{note}</p> : null}</section>;
}

export function ImageTextSection({ image, imageAlt, eyebrow, title, children, reverse = false, tone = "plain" }: { image: string; imageAlt: string; eyebrow: string; title: string; children: React.ReactNode; reverse?: boolean; tone?: "plain" | "cream" | "orange" }) {
  return <section className={`${tone === "cream" ? "quokkies-cream " : tone === "orange" ? "quokkies-orange " : ""}quokkies-section`}><div className={`shell quokkies-image-text ${reverse ? "reverse" : ""}`}><Image src={image} alt={imageAlt} width={900} height={760} sizes="(max-width: 900px) 100vw, 48vw" /><div><span className="quokkies-kicker">{eyebrow}</span><h2>{title}</h2>{children}</div></div></section>;
}

export function FlavorComparison({ flavors }: { flavors: { name: string; color: string; description: string; ideas: string[] }[] }) {
  return <section className="quokkies-cream quokkies-section"><div className="shell"><div className="quokkies-section-head"><span>TWO FLAVORS</span><h2>취향에 따라 고르는 두 가지 맛</h2></div><div className="quokkies-flavors">{flavors.map((flavor, index) => <article className={index === 0 ? "vanilla" : "dry"} key={flavor.name}><span>{flavor.color} 패키지</span><h3>{flavor.name}</h3><p>{flavor.description}</p><div>{flavor.ideas.map((idea) => <b key={idea}>{idea}</b>)}</div></article>)}</div></div></section>;
}

export function ProductInfoTable({ title, rows }: { title: string; rows: { label: string; value: string }[] }) {
  return <section className="shell quokkies-section"><div className="quokkies-section-head"><span>PRODUCT DIFFERENCE</span><h2>{title}</h2></div><div className="quokkies-table-wrap"><table><thead><tr><th>비교 항목</th><th>쿼키즈 마카다미아</th></tr></thead><tbody>{rows.map((row) => <tr key={row.label}><th>{row.label}</th><td>{row.value}</td></tr>)}</tbody></table></div></section>;
}

export function PriceOptions({ item, note }: { item: Campaign; note: string }) {
  return <section className="quokkies-cream quokkies-section"><div className="shell"><div className="quokkies-section-head"><span>PRICE OPTIONS</span><h2>공동구매 상품 구성</h2></div><div className="quokkies-price-cards">{item.variants.map((variant) => <article key={variant.composition}><h3>{variant.composition}</h3><p><small>정상가</small><del>{won(variant.regularPrice)}</del></p>{variant.onlineLowestPrice ? <p><small>온라인 최저가</small><span>{won(variant.onlineLowestPrice)}</span></p> : null}<p className="offer"><small>공동구매 제안가</small><strong>{won(variant.offerPrice)}</strong><b>{discountRate(variant.regularPrice, variant.offerPrice)}% 할인</b></p><em>{item.shipping}</em></article>)}</div><p className="quokkies-note">{note}</p></div></section>;
}

export function CreatorContentIdeas({ ideas, creators, hooks }: { ideas: string[]; creators: string[]; hooks: string[] }) {
  return <section className="shell quokkies-section"><div className="quokkies-section-head"><span>CONTENT PLAYBOOK</span><h2>이런 콘텐츠로 소개하기 좋습니다</h2></div><div className="quokkies-content-grid"><div><h3>콘텐츠 아이디어</h3><ol>{ideas.map((idea) => <li key={idea}>{idea}</li>)}</ol></div><div><h3>추천 크리에이터</h3><div className="quokkies-tags">{creators.map((creator) => <span key={creator}>{creator}</span>)}</div><h3>숏폼 훅 예시</h3><ul>{hooks.map((hook) => <li key={hook}>“{hook}”</li>)}</ul></div></div></section>;
}

export function CampaignSupport({ items, note }: { items: string[]; note: string }) {
  return <section className="shell quokkies-section"><div className="quokkies-section-head"><span>CAMPAIGN SUPPORT</span><h2>거상커머스가 함께합니다</h2></div><div className="quokkies-support-grid">{items.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></article>)}</div><p className="quokkies-support-note">{note}</p></section>;
}

export function ProductFaq({ items }: { items: { question: string; answer: string }[] }) {
  return <section className="quokkies-cream quokkies-section"><div className="shell quokkies-faq-grid"><div><span className="quokkies-kicker">FAQ</span><h2>자주 묻는 질문</h2><p>맛 구성과 오프너, 진행 조건을 신청 전에 확인해 보세요.</p></div><FAQAccordion items={items} /></div></section>;
}

export function ProductCta({ item, title, description, button, href }: { item: Campaign; title: string; description: string; button: string; href: string }) {
  const lead = item.variants[0];
  return <><section className="shell quokkies-final-cta"><div><span>CREATOR PARTNERSHIP</span><h2>{title}</h2><p>{description}</p></div><TrackedLink href={href} analyticsEvent="click_creator_apply" analyticsData={{ campaign_slug: item.slug }} className="quokkies-primary-button">{button}</TrackedLink></section><div className="sticky-detail-cta"><span><strong>{item.name}</strong><small>{item.shipping} · 제안가 {won(lead.offerPrice)}부터</small></span><TrackedLink href={href} analyticsEvent="click_creator_apply" analyticsData={{ campaign_slug: item.slug }} className="gradient-button">{button}</TrackedLink></div></>;
}
