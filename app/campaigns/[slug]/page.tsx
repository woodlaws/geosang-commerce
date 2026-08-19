import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { campaigns, discountRate, getCampaign, won } from "@/data/campaigns";

export function generateStaticParams() { return campaigns.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const item = getCampaign(slug); if (!item) return {};
  const title = item.seoTitle || item.name;
  const description = item.seoDescription || `${item.brand} ${item.name} 공동구매 구성, 제안가, 배송 정보와 크리에이터 지원 내용을 확인하세요.`;
  return { title: item.seoTitle ? { absolute: item.seoTitle } : item.name, description, alternates: { canonical: `/campaigns/${slug}` }, openGraph: { title, description, images: item.image ? [{ url: item.image, alt: item.imageAlt }] : [] }, twitter: { title, description, images: item.image ? [item.image] : [] } };
}
export default async function CampaignDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const item = getCampaign(slug); if (!item) notFound(); const lead = item.variants[0]; const hasOnlineLowest = item.variants.some((variant) => variant.onlineLowestPrice);
  const faq = [
    { question: "제안가는 누구나 바로 구매할 수 있는 가격인가요?", answer: "표시된 금액은 공동구매 진행을 위한 제안 기준입니다. 실제 판매 일정과 조건은 캠페인 협의 후 확정됩니다." },
    { question: "상품 샘플과 콘텐츠 자료가 제공되나요?", answer: "제공 범위는 매칭 후 캠페인 조건에 따라 안내합니다. 확인되지 않은 제공 항목은 사전에 확정하지 않습니다." },
    { question: "배송은 누가 담당하나요?", answer: `${item.name} 캠페인은 현재 가격 제안 자료상 ${item.shipping}으로 안내되어 있으며 상품 출고는 공급사가 담당합니다.` },
  ];
  const jsonLd = { "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[{ "@type":"ListItem", position:1, name:"홈", item:"/" },{ "@type":"ListItem", position:2, name:"캠페인", item:"/campaigns" },{ "@type":"ListItem", position:3, name:item.name }] };
  return <main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><section className="product-landing shell"><div className={`detail-image ${item.image ? item.imageTreatment || "product" : "placeholder"}`}>{item.image ? <Image src={item.image} alt={item.imageAlt || item.name} width={820} height={760} priority className="contain-image"/> : <div className="placeholder-art"><span>Q</span><strong>QUOKKIES</strong><small>상품 이미지 준비 중</small></div>}</div><div className="detail-copy"><span className="brand-label">{item.brand} · {item.category}{item.origin ? ` · ${item.origin}` : ""}</span><h1>{item.name}</h1><div className="status-line"><span className="status live">{item.status === "제안 가능" ? "공동구매 제안 가능" : item.status}</span><span>{item.shipping}</span></div><p className="lead-composition">대표 구성 · {lead.composition}</p><div className="detail-price"><span>{discountRate(lead.regularPrice,lead.offerPrice)}%</span><strong>{won(lead.offerPrice)}</strong><del>{won(lead.regularPrice)}</del></div><p className="price-note">공동구매 제안 기준가이며 실제 진행 조건은 협의 후 확정됩니다.</p><div className="feature-bullets">{item.features.map((feature) => <span key={feature}>✓ {feature}</span>)}</div><Link href={`/creators?campaign=${item.slug}#apply`} className="gradient-button wide">이 상품 제안받기</Link></div></section>
  {item.flavors?.length ? <section className="flavor-section shell section-gap"><div className="center-head"><span className="eyebrow">TWO FLAVORS</span><h2>바닐라·드라이 2종을 한 번에</h2><p>초록색 바닐라 로스티드와 주황색 드라이 로스티드 패키지를 콘텐츠 콘셉트에 맞춰 소개할 수 있습니다.</p></div><div className="flavor-grid">{item.flavors.map((flavor, index) => <article key={flavor.name} className={index === 0 ? "vanilla" : "dry"}><span>{String(index + 1).padStart(2, "0")}</span><h3>{flavor.name}</h3><p>{flavor.description}</p></article>)}</div></section> : null}
  <section className="soft-section section-gap"><div className="shell split-info"><div><span className="eyebrow">CONTENT FIT</span><h2>추천 콘텐츠 분야</h2>{item.contentFields.map((field) => <span className="pill" key={field}>{field}</span>)}</div><div><span className="eyebrow">CREATOR FIT</span><h2>추천 인플루언서 유형</h2>{item.creatorTypes.map((type) => <p key={type}>• {type}</p>)}</div></div></section>
  <section className="shell section-gap"><div className="section-head"><div><span className="eyebrow">PRICE OPTIONS</span><h2>진행 가능한 상품 구성</h2></div></div><div className={`price-table ${hasOnlineLowest ? "with-online" : ""}`}><div><strong>구성</strong><strong>정상가</strong>{hasOnlineLowest && <strong>온라인 최저가</strong>}<strong>공동구매 제안가</strong><strong>할인율</strong></div>{item.variants.map((v) => <div key={v.composition}><span>{v.composition}</span><span>{won(v.regularPrice)}</span>{hasOnlineLowest && <span>{v.onlineLowestPrice ? won(v.onlineLowestPrice) : "-"}</span>}<strong>{won(v.offerPrice)}</strong><span>{discountRate(v.regularPrice,v.offerPrice)}%</span></div>)}</div><p className="table-note">가격 정보 출처: 첨부된 ‘거상 공구 가격 제안의 건’ 자료. 실제 진행 조건은 협의 후 확정됩니다.</p></section>
  <section className="shell section-gap"><div className="center-head"><span className="eyebrow">CAMPAIGN SUPPORT</span><h2>거상커머스가 함께합니다</h2></div><div className="feature-grid">{["상품·채널 적합성 확인", "캠페인 일정 조율", "콘텐츠 기획 자료 안내", "공급·배송 커뮤니케이션", "판매 현황 확인 지원", "정산 일정 안내"].map((x,i)=><article key={x}><span>{String(i+1).padStart(2,"0")}</span><strong>{x}</strong></article>)}</div></section>
  <section className="shell section-gap"><div className="center-head"><span className="eyebrow">PROCESS</span><h2>공동구매 진행 과정</h2></div><ProcessTimeline /></section>
  <section className="soft-section section-gap"><div className="shell faq-wrap"><div><span className="eyebrow">FAQ</span><h2>자주 묻는 질문</h2></div><FAQAccordion items={faq}/></div></section><div className="sticky-detail-cta"><span><strong>{item.name}</strong><small>{item.shipping} · 제안가 {won(lead.offerPrice)}부터</small></span><Link href={`/creators?campaign=${item.slug}#apply`} className="gradient-button">제안받기</Link></div></main>;
}
