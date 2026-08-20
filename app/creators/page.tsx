import Image from "next/image";
import Link from "next/link";
import { CreatorApplication } from "@/components/CreatorApplication";
import { FAQAccordion } from "@/components/FAQAccordion";
import { campaigns, discountRate, won } from "@/data/campaigns";
import { faqItems } from "@/data/faqs";
import { createPageMetadata } from "@/data/site";

const description = "인스타그램, 틱톡, 유튜브, 쇼츠, 네이버 블로그 등에서 활동하는 인플루언서를 모집합니다. 실제 공급 가능한 상품과 공동구매 운영을 지원합니다.";
export const metadata = createPageMetadata("인플루언서 공동구매 모집", description, "/creators");

const wanted = [
  ["꾸준히 콘텐츠를 만드는 분", "채널 규모보다 최근에도 자신의 주제로 꾸준히 소통하고 있는지를 봅니다."], ["상품을 직접 이해하는 분", "정해진 문구를 읽기보다 제품을 경험하고 자신의 언어로 소개할 수 있는 분을 찾습니다."], ["팔로워와 신뢰를 쌓은 분", "숫자보다 댓글과 대화, 콘텐츠에 대한 팔로워의 실제 반응을 중요하게 확인합니다."], ["일정과 기준을 지키는 분", "광고·협찬 표시와 약속된 업로드·판매 일정을 성실하게 지킬 수 있어야 합니다."], ["판매 과정을 함께 개선할 분", "단기 판매로 끝내지 않고 콘텐츠와 고객 반응을 함께 돌아볼 파트너를 기다립니다."], ["자신의 분야가 분명한 분", "간식, 육아, 여행, 홈카페처럼 상품과 연결할 수 있는 콘텐츠 전문 분야가 있으면 좋습니다."],
];
const benefits = [
  ["검토된 상품 제안", "실제 공급과 공동구매 조건을 확인한 상품을 채널 적합성과 함께 제안합니다."], ["재고 부담 없는 진행", "안내된 캠페인은 기본적으로 공급사가 재고와 소비자 배송을 담당합니다."], ["공급·배송 운영 지원", "상품 구성, 주문, 출고와 고객 응대 역할을 진행 전에 명확하게 안내합니다."], ["콘텐츠 자료 안내", "제품 정보, 필수 표시 문구와 일정 등 제작에 필요한 기준을 정리해 제공합니다."], ["판매 현황 확인 지원", "캠페인 구조에 맞는 판매 현황 확인 방법과 집계 기준을 안내합니다."], ["정산 조건 사전 협의", "판매 시작 전에 역할, 수익 배분, 취소·반품 반영과 정산 일정을 협의합니다."],
];
const unsuitable = ["상품을 확인하지 않고 단순 복사 콘텐츠만 제작하는 경우", "광고·협찬 표시 기준을 지키기 어려운 경우", "약속한 콘텐츠와 판매 일정을 반복해서 지키기 어려운 경우", "확인되지 않은 효능이나 과장 표현을 사용하려는 경우", "팔로워 정보나 활동 내용을 사실과 다르게 제출하는 경우", "단기 수익만을 위해 채널 주제와 무관한 상품을 반복 소개하는 경우"];
const process = [["01", "인플루언서 지원", "활동 채널과 콘텐츠 분야, 관심 상품을 등록합니다."], ["02", "채널과 상품 적합성 확인", "콘텐츠 분야, 팔로워 반응과 상품 적합성을 확인합니다."], ["03", "캠페인 제안과 조건 협의", "상품 구성, 판매 일정, 콘텐츠 형식과 정산 조건을 협의합니다."], ["04", "제품 체험과 콘텐츠 준비", "상품을 이해하고 채널에 적합한 콘텐츠를 기획합니다."], ["05", "공동구매 오픈", "확정된 콘텐츠와 판매 링크로 공동구매를 진행합니다."], ["06", "판매 마감과 정산", "취소·반품 내역을 반영한 뒤 합의한 기준으로 정산합니다."]];
const openCampaigns = campaigns.filter((item) => ["manuka-royal-jelly-mgo-300", "gooday-propolis-spray", "quokkies-macadamia"].includes(item.slug));
const creatorFaqs = faqItems.filter((item) => item.category === "creator").slice(0, 6);

export default function CreatorsPage() {
  return <main className="creators-page">
    <section className="creator-hero"><div className="shell creator-hero-inner"><div><span className="eyebrow">CREATOR PARTNERS</span><h1>좋은 콘텐츠를<br /><em>실제 판매 기회로</em><br />연결하세요</h1><p>거상커머스는 상품과 콘텐츠의 적합성을 바탕으로 인플루언서와 공동구매 캠페인을 연결합니다. 상품 공급과 배송, 캠페인 운영을 지원해 콘텐츠와 고객 소통에 집중할 수 있도록 돕습니다.</p><strong>팔로워 수보다 상품과 콘텐츠의 적합성을 중요하게 봅니다.</strong><div className="creator-hero-actions"><Link href="#open-campaigns" className="outline-button">모집 캠페인 보기</Link><Link href="#apply" className="gradient-button">간편 지원하기</Link></div></div><div className="creator-hero-panel"><span>PARTNER PRINCIPLES</span>{["실제 공급 가능한 상품", "명확한 가격과 구성", "공급·배송 운영 지원", "콘텐츠를 이해하는 운영팀"].map((item, i) => <div key={item}><b>0{i + 1}</b><strong>{item}</strong></div>)}</div></div></section>

    <section className="shell section-gap"><div className="center-head"><span className="eyebrow">WHO WE ARE LOOKING FOR</span><h2>이런 인플루언서를 찾습니다</h2><p>큰 숫자보다 자신의 분야에서 신뢰를 쌓고 상품을 진정성 있게 소개할 수 있는 분과 함께합니다.</p></div><div className="creator-card-grid">{wanted.map(([title, copy], i) => <article key={title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="creator-channels" aria-label="지원 가능 채널">{["Instagram", "TikTok", "YouTube", "Shorts", "Naver Blog", "라이브커머스", "기타 채널"].map((item) => <span key={item}>{item}</span>)}</div></section>

    <section className="creator-benefit-section section-gap"><div className="shell"><div className="center-head"><span className="eyebrow">PARTNER SUPPORT</span><h2>콘텐츠에 집중할 수 있도록 지원합니다</h2><p>진행 전 역할과 조건을 확인하고, 판매 과정에서 필요한 운영 정보를 함께 정리합니다.</p></div><div className="creator-benefit-grid">{benefits.map(([title, copy], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="shell creator-unsuitable section-gap"><div><span className="eyebrow">BEFORE YOU APPLY</span><h2>함께하기 어려운 경우도 확인해 주세요</h2><p>고객과 브랜드, 인플루언서 모두가 신뢰할 수 있는 캠페인을 위해 기본 원칙을 확인합니다.</p></div><ul>{unsuitable.map((item) => <li key={item}>{item}</li>)}</ul></section>

    <section id="open-campaigns" className="creator-campaigns section-gap"><div className="shell"><div className="section-head"><div><span className="eyebrow">OPEN CAMPAIGNS</span><h2>지금 지원할 수 있는 캠페인</h2><p>실제 공급 가능한 상품의 구성과 가격을 확인하고 관심 상품으로 바로 지원하세요.</p></div><Link href="/campaigns">전체 캠페인 보기 →</Link></div><div className="creator-campaign-grid">{openCampaigns.map((item) => { const lead = item.variants[0]; return <article key={item.slug}><div className={`creator-campaign-image ${item.imageTreatment || "product"}`}><Image src={item.image!} alt={item.imageAlt || item.name} fill sizes="(max-width: 900px) 100vw, 33vw" /></div><div className="creator-campaign-body"><div className="campaign-kicker"><span className="status live">{item.status === "제안 가능" ? "공동구매 제안 가능" : item.status}</span><b>{item.brand}</b></div><h3>{item.name}</h3><p className="campaign-composition">대표 구성 · {lead.composition}</p><div className="creator-price"><span>{discountRate(lead.regularPrice, lead.offerPrice)}%</span><strong>{won(lead.offerPrice)}</strong><del>{won(lead.regularPrice)}</del></div><div className="campaign-tags"><b>{item.shipping}</b>{item.contentFields.slice(0, 5).map((field) => <span key={field}>{field}</span>)}</div><div className="recommended-channels"><small>추천 채널</small><p>{item.recommendedChannels?.join(" · ")}</p></div><div className="creator-campaign-actions"><Link className="outline-button" href={`/campaigns/${item.slug}`}>상품 자세히 보기</Link><Link className="gradient-button" href={`/creators?campaign=${item.slug}#apply`}>이 상품으로 지원하기</Link></div></div></article>; })}</div></div></section>

    <section className="shell creator-process section-gap"><div className="center-head"><span className="eyebrow">HOW IT WORKS</span><h2>지원부터 정산까지</h2><p>신청, 매칭, 판매와 정산의 기준을 단계별로 확인할 수 있습니다.</p></div><ol>{process.map(([number, title, copy]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol><div className="center-action"><Link className="outline-button" href="/process#creator-process">공동구매 전체 진행 과정</Link></div></section>

    <section className="creator-team section-gap"><div className="shell"><div className="center-head"><span className="eyebrow">HANDS-ON TEAM</span><h2>운영팀도 직접 콘텐츠를 만드는 인플루언서입니다</h2><p>거상커머스는 단순히 상품 정보만 전달하는 중개업체가 아닙니다. 콘텐츠를 직접 만들고 고객과 소통하는 운영팀이 인플루언서의 입장에서 캠페인을 함께 검토합니다.</p></div><div className="creator-team-grid"><article><Image src="/images/team/lim-heonsu.jpg" alt="임헌수 대표" width={420} height={480}/><div><span>대표</span><h3>임헌수</h3><ul><li>거상스쿨·거상마케팅센터 대표</li><li>AI·마케팅·교육 콘텐츠 기획</li><li>브랜드 콘텐츠와 판매 구조 설계</li></ul><a href="https://www.instagram.com/geosang.bruce/" target="_blank" rel="noopener noreferrer">@geosang.bruce ↗</a></div></article><article><Image src="/images/team/lee-yujin.png" alt="이유진 팀장" width={420} height={480}/><div><span>팀장</span><h3>이유진</h3><ul><li>거상마케팅센터 공동구매 운영</li><li>인플루언서 커뮤니케이션</li><li>캠페인 일정·판매·정산 관리</li></ul><a href="https://www.instagram.com/happy.yujin_/" target="_blank" rel="noopener noreferrer">@happy.yujin_ ↗</a></div></article></div></div></section>

    <CreatorApplication />
    <section className="soft-section section-gap"><div className="shell faq-wrap"><div><span className="eyebrow">CREATOR FAQ</span><h2>지원 전 자주 묻는 질문</h2><p>지원 조건과 매칭 방식을 먼저 확인해 주세요.</p></div><FAQAccordion items={creatorFaqs}/></div></section>
  </main>;
}
