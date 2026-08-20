import Image from "next/image";
import { BrandLogo } from "@/components/BrandLogo";
import { createPageMetadata, siteConfig } from "@/data/site";

const title = "회사소개 | 거상커머스 – 거상스쿨·거상마케팅센터 커머스 전문 파트";
const description = "거상커머스는 거상스쿨과 거상마케팅센터의 교육·콘텐츠·마케팅 역량을 기반으로 상품 발굴, 콘텐츠 제작, 인플루언서 마케팅, 판매 전환과 유통 확장을 지원하는 커머스 전문 조직입니다.";

export const metadata = createPageMetadata(title, description, "/about");

const ecosystem = [
  { number: "01", name: "거상스쿨", role: "AI·마케팅·콘텐츠 교육", description: "사업자와 실무자가 AI와 콘텐츠를 활용해 스스로 성장할 수 있도록 교육합니다.", href: "https://www.geosangschool.co.kr/", external: true },
  { number: "02", name: "거상마케팅센터", role: "마케팅 전략 및 현장 실행", description: "브랜드 진단, 콘텐츠 제작, 검색 노출, SNS와 로컬 마케팅을 현장에서 직접 실행합니다.", href: "https://geosangmarketing.com/", external: true },
  { number: "03", name: "거상커머스", role: "상품 판매와 유통 확장", description: "교육과 마케팅으로 축적한 역량을 상품 기획, 공동구매, 온라인 판매와 유통으로 연결합니다.", href: "/campaigns", external: false },
];

const leaders = [
  {
    name: "임헌수",
    roles: ["거상스쿨·거상마케팅센터 대표", "거상커머스 총괄"],
    statement: "AI와 마케팅을 실제 매출 구조로 연결합니다",
    profileImage: "/images/team/lim-heonsu.jpg",
    profileAlt: "임헌수 거상스쿨·거상마케팅센터 대표",
    profileClass: "lim",
    intro: "임헌수 대표는 교육, 콘텐츠, 마케팅을 사업자의 실질적인 매출 구조로 연결하는 전략을 연구하고 실행해왔습니다. 거상스쿨의 교육 경험과 거상마케팅센터의 현장 마케팅 역량을 바탕으로 거상커머스의 사업 방향과 브랜드 전략, 커머스 모델을 총괄합니다.",
    verified: "마케팅 분야 도서 7권 저자 · 큐레이션 2권 감수 · 13년 현장 교육 경력",
    duties: ["거상커머스 사업 및 브랜드 전략 총괄", "AI·콘텐츠·마케팅 기반 판매 구조 설계", "생산자·브랜드·파트너 협업 모델 개발", "교육과 마케팅을 커머스로 연결하는 사업 기획"],
    instagram: "https://www.instagram.com/geosang.bruce/",
    handle: "@geosang.bruce",
    instagramImage: "/images/team/instagram-geosang-bruce.png",
    instagramAlt: "임헌수 대표 인스타그램 @geosang.bruce 프로필",
    reference: "https://www.geosangschool.co.kr/about",
  },
  {
    name: "이유진",
    roles: ["거상마케팅센터 팀장", "거상커머스 마케팅·운영 리더"],
    statement: "좋은 상품이 고객을 만나고 판매되도록 실행합니다",
    profileImage: "/images/team/lee-yujin.png",
    profileAlt: "이유진 거상마케팅센터 팀장",
    profileClass: "yujin",
    intro: "이유진 팀장은 브랜드와 상품을 고객에게 효과적으로 알리고 실제 판매로 이어지게 하는 마케팅 실무와 프로젝트 운영을 담당합니다. 콘텐츠 기획, SNS 운영, 브랜드 및 협력사 커뮤니케이션을 바탕으로 거상커머스의 마케팅과 판매 실행을 이끌어갑니다.",
    verified: "『매출 10배 올려주는 라이브커머스 마케팅』 저자 · 로컬 브랜딩·플레이스 마케팅 실무",
    duties: ["상품 및 브랜드 마케팅 전략 실행", "SNS·블로그·숏폼 콘텐츠 기획", "브랜드·생산자·협력사 프로젝트 운영", "판매 촉진 캠페인과 커머스 실무 관리"],
    instagram: "https://www.instagram.com/happy.yujin_/",
    handle: "@happy.yujin_",
    instagramImage: "/images/team/instagram-happy-yujin.png",
    instagramAlt: "이유진 팀장 인스타그램 @happy.yujin_ 프로필",
    reference: "https://geosangmarketing-yujin.vercel.app/",
  },
];

const capabilities = [
  ["01", "직접 운영하는 SNS", "운영진이 직접 콘텐츠를 기획하고 SNS 채널을 운영하며 고객의 반응을 확인합니다."],
  ["02", "교육에서 검증된 콘텐츠", "거상스쿨의 교육과 실습을 통해 축적된 AI·콘텐츠 제작 방법을 커머스에 적용합니다."],
  ["03", "판매까지 연결하는 실행력", "단순한 조회수나 팔로워 증가가 아니라 문의, 구매, 재구매로 이어지는 구조를 설계합니다."],
];

const process = [
  ["01", "상품 발견", "상품의 경쟁력과 핵심 고객을 분석합니다."],
  ["02", "판매 전략", "고객의 구매 이유와 적합한 판매 채널을 설계합니다."],
  ["03", "콘텐츠 제작", "상세페이지, 사진, 영상, 블로그와 SNS 콘텐츠를 제작합니다."],
  ["04", "마케팅 실행", "검색, SNS, 인플루언서, 공동구매 등 상품에 맞는 마케팅을 실행합니다."],
  ["05", "판매와 재구매", "판매 데이터를 분석하고 후기, 고객 관리와 재구매 구조를 개선합니다."],
];

export default function AboutPage() {
  const details = [["운영회사", siteConfig.company], ["대표자", siteConfig.representative], ["사업자등록번호", siteConfig.businessNumber], ["주소", siteConfig.address], ["대표 이메일", siteConfig.email], ["대표 전화번호", siteConfig.phone], ["운영시간", siteConfig.hours]].filter((item): item is [string, string] => Boolean(item[1]));
  const organizationId = `${siteConfig.url}/about#organization`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": organizationId, name: "거상커머스", alternateName: "GEOSANG COMMERCE", url: `${siteConfig.url}/about`, description, logo: `${siteConfig.url}${siteConfig.logo}`, parentOrganization: { "@type": "Organization", name: "거상마케팅센터", url: "https://geosangmarketing.com/" } },
      { "@type": "Person", "@id": `${siteConfig.url}/about#lim-heonsu`, name: "임헌수", jobTitle: "거상커머스 총괄", image: `${siteConfig.url}/images/team/lim-heonsu.jpg`, worksFor: { "@id": organizationId }, sameAs: ["https://www.geosangschool.co.kr/about", "https://www.instagram.com/geosang.bruce/"] },
      { "@type": "Person", "@id": `${siteConfig.url}/about#lee-yujin`, name: "이유진", jobTitle: "거상커머스 마케팅·운영 리더", image: `${siteConfig.url}/images/team/lee-yujin.png`, worksFor: { "@id": organizationId }, sameAs: ["https://geosangmarketing-yujin.vercel.app/", "https://www.instagram.com/happy.yujin_/"] },
    ],
  };

  return (
    <main className="about-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="about-hero">
        <div className="shell about-hero-inner">
          <div className="about-hero-copy">
            <span className="eyebrow">ABOUT GEOSANG COMMERCE</span>
            <h1>교육과 마케팅을 넘어,<br /><em>실제 판매까지</em></h1>
            <p>거상커머스는 거상스쿨과 거상마케팅센터의 교육·콘텐츠·마케팅 역량을 결합해 좋은 상품이 고객을 만나고 실제 매출로 이어지도록 돕는 커머스 전문 파트입니다.</p>
            <strong>좋은 상품을 발굴하고, 팔리는 콘텐츠를 만들고, 생산자와 고객을 연결합니다.</strong>
            <div className="about-hero-actions"><a className="gradient-button" href="/brands#inquiry">거상커머스 문의하기</a><a className="outline-button" href="#business-areas">사업 영역 살펴보기</a></div>
          </div>
          <div className="about-hero-panel" aria-label="거상커머스 핵심 사업 영역">
            <BrandLogo className="about-hero-logo" />
            <div className="about-keywords">{["상품 발굴", "콘텐츠 제작", "인플루언서 마케팅", "판매 전환", "유통 확장"].map((item, index) => <span key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="shell section-gap about-origin">
        <div className="about-section-title"><span className="eyebrow">OUR ORIGIN</span><h2>거상커머스는<br />이렇게 탄생했습니다</h2></div>
        <div className="about-origin-copy">
          <p>거상스쿨은 AI와 마케팅, 콘텐츠 활용법을 교육해왔으며 거상마케팅센터는 다양한 브랜드와 사업자의 마케팅을 현장에서 직접 실행해왔습니다.</p>
          <p>거상커머스는 이렇게 축적된 교육과 마케팅 역량을 상품 판매와 유통으로 확장하기 위해 만들어진 커머스 전문 파트입니다.</p>
          <p>단순히 상품을 입점시키거나 광고하는 데 그치지 않습니다. 상품의 경쟁력과 고객의 구매 이유를 발견하고, 상세페이지·블로그·숏폼·SNS 콘텐츠를 제작하며, 공동구매와 온라인 판매 채널까지 연결합니다.</p>
          <p>교육에서 끝나지 않고, 마케팅에서 멈추지 않고, 실제 판매 성과까지 연결하는 것이 거상커머스의 역할입니다.</p>
          <blockquote>“배우는 데서 끝나지 않고, 실행하는 데서 멈추지 않고, 실제 판매까지 연결합니다.”</blockquote>
        </div>
      </section>

      <section className="about-ecosystem section-gap" id="business-areas"><div className="shell">
        <div className="center-head"><span className="eyebrow">GEOSANG ECOSYSTEM</span><h2>교육·마케팅·커머스가 하나로 연결됩니다</h2><p>배우고, 현장에서 실행하고, 상품 판매와 유통으로 확장하는 하나의 흐름을 만듭니다.</p></div>
        <div className="ecosystem-grid">{ecosystem.map((item) => <a key={item.name} className="ecosystem-card" href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} aria-label={`${item.name} ${item.external ? "공식 홈페이지 새 탭에서 보기" : "사업 영역 보기"}`}><span>{item.number}</span><small>{item.role}</small><h3>{item.name}</h3><p>{item.description}</p><b>{item.external ? "공식 홈페이지 보기 ↗" : "캠페인 보기 →"}</b></a>)}</div>
      </div></section>

      <section className="shell section-gap about-leaders" id="team">
        <div className="center-head"><span className="eyebrow">LEADERSHIP TEAM</span><h2>콘텐츠와 판매를 직접 경험한 운영진</h2><p>거상커머스의 운영진은 책상 위의 전략만 제시하지 않습니다. 직접 콘텐츠를 만들고, SNS 채널을 운영하며, 고객의 반응과 판매 현장을 경험하고 있습니다.</p></div>
        <div className="leader-grid">{leaders.map((leader) => <article className="leader-card" key={leader.name}>
          <div className="leader-profile"><div className={`leader-photo ${leader.profileClass}`}><Image src={leader.profileImage} alt={leader.profileAlt} width={620} height={760} sizes="(max-width: 560px) 120px, 180px" /></div><div><span>GEOSANG COMMERCE TEAM</span><h3>{leader.name}</h3>{leader.roles.map((role) => <small key={role}>{role}</small>)}</div></div>
          <h4>{leader.statement}</h4><p className="leader-intro">{leader.intro}</p><p className="verified-profile">확인된 공개 소개 · {leader.verified}</p>
          <div className="leader-duties"><strong>주요 역할</strong><ul>{leader.duties.map((duty) => <li key={duty}>{duty}</li>)}</ul></div>
          <a className="leader-reference" href={leader.reference} target="_blank" rel="noopener noreferrer" aria-label={`${leader.name} 소개 참고 사이트 새 탭에서 보기`}>공개 소개 더 보기 ↗</a>
          <div className="instagram-block"><a className="instagram-preview" href={leader.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${leader.handle} 인스타그램 프로필 새 탭에서 보기`}><Image src={leader.instagramImage} alt={leader.instagramAlt} width={960} height={960} sizes="(max-width: 900px) 100vw, 540px" /></a><div className="instagram-meta"><div><span>INSTAGRAM</span><strong>{leader.handle}</strong></div><a href={leader.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${leader.handle} 인스타그램 새 탭에서 활동 보기`}>인스타그램에서 활동 보기 ↗</a></div></div>
        </article>)}</div>
      </section>

      <section className="about-capabilities section-gap"><div className="shell"><div className="center-head"><span className="eyebrow">HANDS-ON LEADERS</span><h2>직접 콘텐츠를 만드는 커머스 운영진</h2><p>SNS 채널을 직접 운영하고 고객 반응을 확인하는 실무형 리더가 교육·콘텐츠·마케팅을 판매로 연결합니다.</p></div><div className="capability-grid">{capabilities.map(([number, heading, copy]) => <article key={heading}><span>{number}</span><h3>{heading}</h3><p>{copy}</p></article>)}</div></div></section>

      <section className="shell section-gap commerce-process"><div className="center-head"><span className="eyebrow">HOW WE WORK</span><h2>좋은 상품이 매출이 되는 과정</h2><p>상품을 발견하는 순간부터 판매 이후의 재구매 구조까지 한 흐름으로 설계합니다.</p></div><ol>{process.map(([number, heading, copy]) => <li key={heading}><span>{number}</span><div><h3>{heading}</h3><p>{copy}</p></div></li>)}</ol></section>

      {details.length ? <section className="shell operator-details section-gap"><div className="center-head"><span className="eyebrow">CONTACT & TRUST</span><h2>운영·연락처 정보</h2></div><dl>{details.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section> : null}

      <section className="shell section-gap about-final-cta"><div><span>COMMERCE PARTNERSHIP</span><h2>좋은 상품이 제대로 팔리는 구조를 함께 만들겠습니다</h2><p>상품 발굴부터 콘텐츠 제작, 마케팅, 판매 채널 연결까지 거상커머스와 상담하세요.</p></div><div className="about-final-actions"><a className="white-button" href="/brands#inquiry">커머스 협업 문의하기 <b>→</b></a><a className="white-button secondary" href="/brands#inquiry">상품 입점·판매 상담하기 <b>→</b></a></div></section>
    </main>
  );
}
