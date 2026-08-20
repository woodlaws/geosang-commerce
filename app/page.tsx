import Image from "next/image";
import Link from "next/link";
import { CampaignCard } from "@/components/CampaignCard";
import { CTASection } from "@/components/CTASection";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { campaigns } from "@/data/campaigns";
import { team } from "@/data/site";
import { TrackedLink } from "@/components/TrackedLink";

export default function Home() {
  return (
    <main>
      <section className="hero shell">
        <div className="hero-copy">
          <span className="eyebrow">브랜드와 인플루언서를 연결하는 공동구매 플랫폼</span>
          <h1><em>좋은 제품,</em><br/><em>영향력 있는 콘텐츠,</em><br/>함께 만드는 매출</h1>
          <p>인플루언서는 콘텐츠에 집중하세요. 상품 공급·배송·캠페인 운영은 거상커머스가 지원합니다.</p>
          <div className="hero-actions"><TrackedLink href="/creators#apply" analyticsEvent="click_creator_apply" className="gradient-button">공동구매 제안받기</TrackedLink><TrackedLink href="/brands#inquiry" analyticsEvent="click_brand_inquiry" className="outline-button">브랜드 입점 문의</TrackedLink></div>
        </div>
        <div className="hero-visual" aria-label="현재 제안 가능한 상품">
          <div className="glow" />
          <Image src="/products/manuka-royal-jelly.png" alt="마누카꿀 로열젤리 MGO 300+" width={620} height={620} priority className="product manuka" />
          <Image src="/products/propolis-spray.png" alt="굿데이 프로폴리스 스프레이" width={460} height={460} priority className="product propolis" />
        </div>
      </section>
      <section className="benefit-strip shell section-gap">
        {[ ["↗", "높은 수익 기회", "콘텐츠 영향력을 실제 판매 수익으로 연결할 수 있습니다."], ["□", "재고 부담 없음", "상품 공급과 배송 조건 협의를 지원합니다."], ["◇", "무료배송·운영 지원", "운영 부담을 줄여 콘텐츠에 집중할 수 있습니다."] ].map(([icon,title,desc]) => <article key={title}><span>{icon}</span><h3>{title}</h3><p>{desc}</p></article>)}
      </section>
      <section className="shell section-gap"><div className="section-head"><div><span className="eyebrow">OPEN CAMPAIGNS</span><h2>지금 제안 가능한 캠페인</h2></div><Link href="/campaigns">전체 보기 →</Link></div><div className="campaign-grid home-grid">{campaigns.filter((item) => ["manuka-royal-jelly-mgo-300", "gooday-propolis-spray", "quokkies-macadamia"].includes(item.slug)).map((item) => <CampaignCard campaign={item} key={item.slug} />)}</div></section>
      <section className="soft-section section-gap"><div className="shell"><div className="center-head"><span className="eyebrow">CREATOR BENEFITS</span><h2>콘텐츠에 집중할 수 있는 이유</h2><p>상품 검토부터 배송과 정산 안내까지, 캠페인 운영의 복잡한 과정을 함께합니다.</p></div><div className="feature-grid">{["검토된 공동구매 상품", "재고 부담 없는 진행", "공급·배송 운영 지원", "콘텐츠 기획 자료 제공", "판매 현황 확인 지원", "체계적인 정산 안내"].map((item,index) => <article key={item}><span>{String(index+1).padStart(2,"0")}</span><strong>{item}</strong></article>)}</div></div></section>
      <section className="shell section-gap"><div className="center-head"><span className="eyebrow">HOW IT WORKS</span><h2>공동구매 진행 과정</h2><p>지원부터 판매 마감과 정산까지 6단계로 투명하게 진행합니다.</p></div><ProcessTimeline /></section>
      <section className="team-section section-gap"><div className="shell"><div className="section-head"><div><span className="eyebrow">OUR TEAM</span><h2>운영팀도 현직 인플루언서입니다</h2><p>직접 콘텐츠를 만들고 고객과 소통하는 운영팀이 캠페인을 함께 설계합니다.</p></div><Link href="/about">팀 소개 보기 →</Link></div><div className="team-grid">{team.map((member,index) => <article key={member.name}><div className="profile-ring"><div>{index === 0 ? "임" : "이"}</div></div><div><span>GEOSANG TEAM</span><h3>{member.name} <small>{member.role}</small></h3>{member.lines.map((line) => <p key={line}>{line}</p>)}</div></article>)}</div></div></section>
      <div className="shell cta-stack section-gap"><CTASection eyebrow="FOR CREATORS" title="함께 매출을 만들 크리에이터를 찾습니다" description="팔로워 규모보다 상품과 콘텐츠의 적합성을 중요하게 봅니다." href="/creators#apply" label="인플루언서 지원하기"/><CTASection tone="gold" eyebrow="FOR BRANDS" title="좋은 제품을 더 많은 고객에게 알리고 싶으신가요?" description="상품에 어울리는 인플루언서를 발굴하고 기획부터 운영까지 함께합니다." href="/brands#inquiry" label="브랜드 입점 문의하기"/></div>
    </main>
  );
}
