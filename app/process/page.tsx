import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProcessChecklists } from "@/components/ProcessChecklists";
import { faqItems } from "@/data/faqs";
import { brandProcess, campaignFlow, creatorProcess, operationRoles, processNotices, responsibilityRows, type ProcessStep } from "@/data/process";
import { absoluteUrl, createPageMetadata } from "@/data/site";

const title = "공동구매 진행 절차 | 거상커머스";
const description = "거상커머스의 인플루언서 공동구매 진행 절차를 확인하세요. 인플루언서 지원과 브랜드 입점부터 상품 매칭, 콘텐츠 제작, 판매 운영, 배송과 정산까지 단계별로 안내합니다.";

export const metadata = createPageMetadata(title, description, "/process");

function ProcessSteps({ steps, tone }: { steps: ProcessStep[]; tone: "creator" | "brand" }) {
  return <ol className={`detailed-process-list ${tone}`}>{steps.map((step) => <li id={`${tone}-step-${step.number}`} key={step.number} className="detailed-process-card"><div className="process-card-number"><span>STEP</span><strong>{step.number}</strong></div><div className="process-card-content"><h3>{step.title}</h3><p className="process-card-description">{step.description}</p><div className="process-card-details"><strong>{step.detailTitle}</strong><ul>{step.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div>{step.result ? <p className="process-result"><b>결과</b>{step.result}</p> : null}{step.note ? <p className="process-note">{step.note}</p> : null}{step.cta ? <Link className="gradient-button compact" href={step.cta.href}>{step.cta.label}</Link> : null}</div></li>)}</ol>;
}

export default function ProcessPage() {
  const relatedFaqIds = ["creator-first-campaign", "operation-samples", "sales-revenue", "sales-customer-service", "sales-settlement"];
  const relatedFaqs = relatedFaqIds.map((id) => faqItems.find((item) => item.id === id)).filter((item) => item !== undefined);
  const processUrl = absoluteUrl("/process");
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", "@id": `${processUrl}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "홈", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "공동구매 진행", item: processUrl }] },
      { "@type": "ItemList", "@id": `${processUrl}#creator-process-list`, name: "인플루언서 공동구매 진행 절차", itemListOrder: "https://schema.org/ItemListOrderAscending", numberOfItems: creatorProcess.length, itemListElement: creatorProcess.map((step, index) => ({ "@type": "ListItem", position: index + 1, name: step.title, description: step.description, url: `${processUrl}#creator-step-${step.number}` })) },
      { "@type": "ItemList", "@id": `${processUrl}#brand-process-list`, name: "브랜드 공동구매 입점 절차", itemListOrder: "https://schema.org/ItemListOrderAscending", numberOfItems: brandProcess.length, itemListElement: brandProcess.map((step, index) => ({ "@type": "ListItem", position: index + 1, name: step.title, description: step.description, url: `${processUrl}#brand-step-${step.number}` })) },
    ],
  };

  return <main className="process-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

    <section className="process-hero"><div className="shell"><span className="eyebrow">HOW IT WORKS</span><h1>공동구매, 역할과 절차가 명확해야 잘 팔립니다</h1><p>거상커머스는 브랜드와 인플루언서가 각자의 전문 영역에 집중할 수 있도록 상품 검토부터 콘텐츠, 판매 운영, 배송 협의와 정산까지 필요한 과정을 연결합니다.</p><div className="process-hero-actions"><a className="gradient-button" href="#creator-process">인플루언서로 참여</a><a className="outline-button" href="#brand-process">브랜드로 참여</a></div></div></section>

    <section className="shell section-gap operation-map"><div className="center-head"><span className="eyebrow">OPERATING STRUCTURE</span><h2>공동구매 운영 구조</h2><p>거상커머스의 인플루언서 마케팅은 브랜드·공급사, 인플루언서와 소비자가 각자의 역할로 연결되는 구조입니다.</p></div><div className="operation-map-grid">{operationRoles.map((role, index) => <article key={role.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{role.title}</h3><strong>{role.summary}</strong><ul>{role.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></article>)}</div></section>

    <section className="process-track creator-track" id="creator-process"><div className="shell"><div className="process-track-head"><div><span className="eyebrow">FOR CREATORS</span><h2>인플루언서는 콘텐츠와 고객 소통에 집중하세요</h2></div><p>지원부터 상품 매칭, 콘텐츠 제작, 판매와 정산까지 단계별로 안내합니다.</p></div><ProcessSteps steps={creatorProcess} tone="creator" /></div></section>

    <section className="process-track brand-track" id="brand-process"><div className="shell"><div className="process-track-head"><div><span className="eyebrow">FOR BRANDS</span><h2>브랜드는 좋은 상품과 안정적인 공급에 집중하세요</h2></div><p>브랜드 공동구매 입점 후 상품 검토부터 조건 설계, 인플루언서 매칭, 배송과 정산까지 함께 조율합니다.</p></div><ProcessSteps steps={brandProcess} tone="brand" /></div></section>

    <section className="shell responsibility-section section-gap"><div className="center-head"><span className="eyebrow">RESPONSIBILITIES</span><h2>누가 무엇을 담당하나요?</h2><p>각 업무의 주담당과 협의·지원 범위를 진행 전에 명확하게 확인합니다.</p></div><div className="responsibility-table" aria-label="공동구매 업무별 책임표"><div className="responsibility-row responsibility-head"><strong>업무</strong><strong>브랜드·공급사</strong><strong>거상커머스</strong><strong>인플루언서</strong></div>{responsibilityRows.map(([task, brand, geosang, creator]) => <div className="responsibility-row" key={task}><strong>{task}</strong><span data-label="브랜드·공급사">{brand}</span><span data-label="거상커머스">{geosang}</span><span data-label="인플루언서">{creator}</span></div>)}</div></section>

    <section className="process-checklist-section section-gap"><div className="shell"><div className="center-head"><span className="eyebrow">BEFORE YOU START</span><h2>진행 전 이것만은 확인해 주세요</h2><p>체크 내용은 현재 기기에만 표시되며 서버에 저장되지 않습니다.</p></div><ProcessChecklists /></div></section>

    <section className="shell campaign-flow-section section-gap"><div className="center-head"><span className="eyebrow">CAMPAIGN FLOW</span><h2>캠페인은 이런 흐름으로 준비됩니다</h2></div><ol>{campaignFlow.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></li>)}</ol><p>전체 일정은 상품 준비 상태, 인플루언서 일정, 배송과 판매 시스템에 따라 달라질 수 있습니다.</p></section>

    <section className="process-notice-section section-gap"><div className="shell"><div className="center-head"><span className="eyebrow">BEFORE COMMERCE</span><h2>공동구매 전에 꼭 알아두세요</h2></div><div className="process-notice-grid">{processNotices.map(([heading, copy], index) => <article key={heading}><span>{String(index + 1).padStart(2, "0")}</span><h3>{heading}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="shell process-faq section-gap"><div className="faq-wrap"><div><span className="eyebrow">PROCESS FAQ</span><h2>진행 전에 자주 묻는 질문</h2><p>공동구매 운영 방법, 샘플, 배송과 정산 조건을 미리 확인하세요.</p><Link href="/faq" className="outline-button compact">자주 묻는 질문 전체 보기</Link></div><FAQAccordion items={relatedFaqs} /></div></section>

    <section className="shell process-final-cta unified section-gap" aria-label="공동구매 시작하기"><article><span>START WITH GEOSANG COMMERCE</span><h2>거상커머스와 공동구매를 시작해보세요</h2><p>인플루언서와 브랜드에 맞는 상품과 협업 방식을 함께 검토합니다.</p><div className="process-final-actions"><Link className="white-button" href="/creators">인플루언서 파트너 등록 <b>→</b></Link><Link className="white-button" href="/brands">브랜드 상품 제안 <b>→</b></Link></div></article></section>
  </main>;
}
