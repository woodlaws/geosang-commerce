import Image from "next/image";
import Link from "next/link";
import { env } from "node:process";
import { CreatorApplication, CreatorQuickCheck } from "@/components/CreatorApplication";
import { FAQAccordion } from "@/components/FAQAccordion";
import { campaigns, discountRate, won } from "@/data/campaigns";
import { faqItems } from "@/data/faqs";
import { absoluteUrl, createPageMetadata } from "@/data/site";

const title = "인플루언서 공동구매 파트너 모집 | 거상커머스";
const description = "인스타그램, 틱톡, 유튜브, 쇼츠와 블로그에서 활동하는 인플루언서를 위한 공동구매 캠페인을 확인하고 거상커머스 크리에이터 파트너로 등록해 보세요.";
export const metadata = createPageMetadata(title, description, "/creators");

const wanted = ["특정 분야의 콘텐츠를 꾸준히 만드는 분", "팔로워와 댓글·DM 등으로 실제 소통하는 분", "제품을 직접 이해하고 진정성 있게 소개할 수 있는 분", "캠페인 일정과 광고 표시 기준을 지킬 수 있는 분", "릴스·틱톡·쇼츠 등 영상 콘텐츠 제작이 가능한 분", "단기 판매보다 팔로워 신뢰를 중요하게 생각하는 분"];
const benefits = [
  ["콘텐츠에 맞는 상품 제안", "채널 분야와 팔로워 특성을 고려해 적합한 상품을 제안합니다."], ["재고 부담 없는 진행", "일반적으로 브랜드 또는 공급사가 판매 재고를 준비하고 상품을 발송합니다."], ["경쟁력 있는 공동구매 조건", "정상가, 온라인 판매가, 공급 조건과 배송비를 검토해 캠페인 조건을 협의합니다."], ["콘텐츠 제작 자료", "상품 이미지, 핵심 정보, 필수 표시 문구와 콘텐츠 포인트를 안내합니다."], ["캠페인 일정 관리", "제품 체험, 콘텐츠 준비, 판매 오픈과 마감 일정을 함께 조율합니다."], ["배송 커뮤니케이션 지원", "공급사의 출고 일정과 배송 관련 정보를 확인해 운영 과정에 전달합니다."], ["판매 현황 확인 지원", "캠페인 운영 방식에 따라 판매 현황 또는 집계 자료를 확인할 수 있도록 지원합니다."], ["정산 기준 사전 안내", "판매 시작 전에 수익 배분, 정산 기준과 일정을 협의하고 안내합니다."],
];
const standards = [["직접 이해한 상품만 소개합니다", "제품 정보와 사용 방법을 충분히 확인한 후 콘텐츠를 제작합니다."], ["과장된 표현을 사용하지 않습니다", "확인되지 않은 효능, 수익 보장, 사실과 다른 판매 문구를 사용하지 않습니다."], ["경제적 이해관계를 표시합니다", "제품 제공이나 판매 수익 등 광고·협찬 관계를 관련 기준에 맞게 표시합니다."], ["일정과 고객 안내를 지킵니다", "판매 일정, 배송 안내와 문의 전달 기준을 캠페인 조건에 따라 준수합니다."]];
const process = [["01", "크리에이터 파트너 등록", "기본 정보와 활동 채널, 관심 상품을 등록합니다."], ["02", "채널과 콘텐츠 확인", "콘텐츠 분야와 팔로워 반응, 활동 이력을 확인합니다."], ["03", "상품 매칭과 조건 협의", "적합한 상품의 구성, 일정, 수익과 정산 조건을 협의합니다."], ["04", "제품 체험과 콘텐츠 기획", "상품을 이해하고 채널에 맞는 콘텐츠 방향을 정합니다."], ["05", "콘텐츠 제작과 확인", "상품 정보와 광고 표시 기준을 확인해 콘텐츠를 준비합니다."], ["06", "공동구매 오픈과 판매", "확정된 일정과 판매 링크로 팔로워에게 상품을 소개합니다."], ["07", "판매 마감과 정산", "취소·반품 내역을 반영한 뒤 합의한 기준으로 정산합니다."]];
const campaignSlugs = ["manuka-royal-jelly-mgo-300", "gooday-propolis-spray", "quokkies-macadamia"];
const openCampaigns = campaigns.filter((item) => campaignSlugs.includes(item.slug));
const faqIds = ["creator-followers", "creator-first-campaign", "operation-samples", "sales-inventory", "sales-revenue", "sales-settlement"];
const creatorFaqs = faqIds.map((id) => faqItems.find((item) => item.id === id)).filter((item): item is NonNullable<typeof item> => Boolean(item));

export default function CreatorsPage() {
  const formEnabled = Boolean((env.CREATOR_FORM_ENDPOINT || env.NEXT_PUBLIC_CREATOR_FORM_ENDPOINT || "").trim());
  const structuredData = { "@context": "https://schema.org", "@graph": [
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "홈", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "인플루언서 지원", item: absoluteUrl("/creators") }] },
    { "@type": "FAQPage", mainEntity: creatorFaqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
    { "@type": "ItemList", name: "현재 모집 중인 공동구매 캠페인", itemListElement: openCampaigns.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, url: absoluteUrl(`/campaigns/${item.slug}`) })) },
  ] };
  return <main className="creators-page"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <section className="creator-hero"><div className="shell creator-hero-inner"><div><span className="eyebrow">CREATOR PARTNERS</span><h1>좋은 콘텐츠가<br /><em>좋은 제품을 만나는 순간</em></h1><p>거상커머스는 상품과 콘텐츠의 적합성을 중심으로 인플루언서를 매칭합니다. 상품 공급, 배송 협의, 캠페인 운영과 정산 안내를 지원하므로 크리에이터는 콘텐츠와 팔로워 소통에 집중할 수 있습니다.</p><strong>팔로워 수보다 콘텐츠의 신뢰와 상품 적합성을 봅니다.</strong><div className="creator-hero-actions"><Link href="#apply" className="gradient-button">크리에이터 파트너 등록하기</Link><Link href="#open-campaigns" className="outline-button">현재 모집 상품 보기</Link></div><div className="creator-microcopy">{["공동구매 경험이 없어도 지원 가능", "재고 부담 없는 캠페인 우선", "인스타그램·틱톡·유튜브·쇼츠·블로그 지원", "적합한 캠페인이 있을 때 개별 제안"].map((item) => <span key={item}>✓ {item}</span>)}</div></div><div className="creator-hero-panel"><span>CREATOR COMMERCE</span><h2>거상커머스<br />크리에이터 파트너 등록</h2><p>좋은 제품을 내 콘텐츠로 소개하고, 영향력을 판매 기회로 연결해 보세요.</p>{["상품과 채널 적합성 검토", "캠페인 조건 사전 협의", "콘텐츠·운영 정보 지원"].map((item, i) => <div key={item}><b>0{i + 1}</b><strong>{item}</strong></div>)}</div></div></section>

    <section className="shell section-gap"><div className="center-head"><span className="eyebrow">WHO CAN APPLY</span><h2>이런 크리에이터를 찾습니다</h2><p>팔로워 수만으로 선정하지 않습니다. 콘텐츠 분야, 팔로워 반응, 상품과의 적합성, 일정 준수 가능성을 함께 확인합니다.</p></div><div className="creator-card-grid">{wanted.map((item, i) => <article key={item}><span>{String(i + 1).padStart(2, "0")}</span><h3>{item}</h3></article>)}</div></section>
    <CreatorQuickCheck />

    <section className="creator-benefit-section section-gap"><div className="shell"><div className="center-head"><span className="eyebrow">PARTNER SUPPORT</span><h2>콘텐츠에 집중할 수 있도록 운영을 지원합니다</h2><p>브랜드, 공급사와 인플루언서의 역할을 캠페인 전에 확인하고 필요한 운영 정보를 함께 정리합니다.</p></div><div className="creator-benefit-grid eight">{benefits.map(([heading, copy], i) => <article key={heading}><span>{String(i + 1).padStart(2, "0")}</span><h3>{heading}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="creator-standard section-gap"><div className="shell"><div className="center-head"><span className="eyebrow">PARTNERSHIP STANDARD</span><h2>좋은 공동구매는 팔로워의 신뢰를 지키는 것부터 시작합니다</h2></div><div className="creator-standard-grid">{standards.map(([heading, copy], i) => <article key={heading}><span>0{i + 1}</span><h3>{heading}</h3><p>{copy}</p></article>)}</div></div></section>

    <section id="open-campaigns" className="creator-campaigns section-gap"><div className="shell"><div className="section-head"><div><span className="eyebrow">OPEN CAMPAIGNS</span><h2>지금 지원할 수 있는 캠페인</h2><p>실제 공급 가능한 상품의 구성과 가격, 추천 콘텐츠 아이디어를 확인하세요.</p></div><Link href="/campaigns">전체 캠페인 보기 →</Link></div><div className="creator-campaign-grid">{openCampaigns.map((item) => { const lead = item.variants[0]; return <article key={item.slug}><div className={`creator-campaign-image ${item.imageTreatment || "product"}`}><Image src={item.image!} alt={item.imageAlt || item.name} fill sizes="(max-width: 900px) 100vw, 33vw" /></div><div className="creator-campaign-body"><div className="campaign-kicker"><span className="status live">{item.status === "제안 가능" ? "공동구매 제안 가능" : item.status}</span><b>{item.brand}</b></div><h3>{item.name}</h3><p className="campaign-composition">대표 구성 · {lead.composition}</p><div className="creator-price"><span>{discountRate(lead.regularPrice, lead.offerPrice)}%</span><strong>{won(lead.offerPrice)}</strong><del>{won(lead.regularPrice)}</del></div><div className="campaign-tags"><b>{item.shipping}</b>{item.contentFields.slice(0, 5).map((field) => <span key={field}>{field}</span>)}</div><div className="recommended-channels"><small>추천 채널</small><p>{item.recommendedChannels?.join(" · ")}</p></div><div className="content-ideas"><small>콘텐츠 아이디어</small>{item.contentIdeas?.map((idea) => <p key={idea}>✓ {idea}</p>)}</div><div className="creator-campaign-actions"><Link className="outline-button" href={`/campaigns/${item.slug}`}>상품 상세보기</Link><Link className="gradient-button" href={`/creators?campaign=${item.slug}#apply`}>이 상품으로 지원하기</Link></div></div></article>; })}</div></div></section>

    <section className="shell creator-process section-gap"><div className="center-head"><span className="eyebrow">HOW IT WORKS</span><h2>파트너 등록부터 정산까지</h2><p>처음 공동구매를 시작하는 크리에이터도 전체 흐름을 확인할 수 있습니다.</p></div><ol className="seven">{process.map(([number, heading, copy]) => <li key={number}><span>{number}</span><div><h3>{heading}</h3><p>{copy}</p></div></li>)}</ol><div className="center-action"><Link className="outline-button" href="/process#creator-process">공동구매 전체 과정 보기</Link></div></section>

    <section className="creator-team section-gap"><div className="shell"><div className="center-head"><span className="eyebrow">WHO WE ARE</span><h2>콘텐츠와 마케팅을 이해하는 운영팀이 함께합니다</h2><p>거상커머스는 거상스쿨과 거상마케팅센터의 콘텐츠·마케팅 경험을 바탕으로 브랜드와 크리에이터의 공동구매를 연결합니다.</p></div><div className="creator-team-grid"><article><Image src="/images/team/lim-heonsu.jpg" alt="임헌수 대표" width={420} height={480}/><div><span>대표</span><h3>임헌수</h3><ul><li>거상스쿨·거상마케팅센터 대표</li><li>AI·마케팅·교육 콘텐츠 기획</li><li>브랜드 콘텐츠와 판매 구조 설계</li></ul><a href="https://www.instagram.com/geosang.bruce/" target="_blank" rel="noopener noreferrer">◎ @geosang.bruce ↗</a></div></article><article><Image src="/images/team/lee-yujin.png" alt="이유진 팀장" width={420} height={480}/><div><span>팀장</span><h3>이유진</h3><ul><li>거상마케팅센터 공동구매 운영</li><li>인플루언서 커뮤니케이션</li><li>캠페인 일정·판매·정산 관리</li></ul><a href="https://www.instagram.com/happy.yujin_/" target="_blank" rel="noopener noreferrer">◎ @happy.yujin_ ↗</a></div></article></div></div></section>

    <CreatorApplication formEnabled={formEnabled} />
    <section className="soft-section section-gap"><div className="shell faq-wrap"><div><span className="eyebrow">CREATOR FAQ</span><h2>처음 시작하기 전 확인해 주세요</h2><p>지원, 상품 체험, 재고, 수익과 정산에 관한 기본 안내입니다.</p><Link className="faq-all-link" href="/faq">자주 묻는 질문 전체 보기 →</Link></div><FAQAccordion items={creatorFaqs}/></div></section>
    <section className="creator-seo-copy shell"><p>거상커머스는 인플루언서 공동구매 모집과 공동구매 인플루언서 지원을 연결하는 크리에이터 커머스 플랫폼입니다. 인스타그램 공동구매, 틱톡 공동구매, 유튜브 공동구매와 숏폼 공동구매에 적합한 실제 상품을 검토합니다.</p></section>
  </main>;
}
