import Link from "next/link";
import { FAQExplorer } from "@/components/FAQExplorer";
import { faqItems } from "@/data/faqs";
import { absoluteUrl, createPageMetadata } from "@/data/site";

const description = "인플루언서 지원부터 브랜드 입점, 상품 배송과 판매 정산까지 공동구매를 시작하기 전에 자주 묻는 질문을 확인하세요.";

export const metadata = createPageMetadata("자주 묻는 질문", description, "/faq");

export default function FAQPage() {
  const faqUrl = absoluteUrl("/faq");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${faqUrl}#faq`,
    url: faqUrl,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main className="faq-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="faq-hero">
        <div className="shell">
          <span className="eyebrow">FAQ</span>
          <h1>궁금한 내용을 먼저 확인해 보세요</h1>
          <p>인플루언서 지원부터 브랜드 입점, 상품 배송과 판매 정산까지 공동구매를 시작하기 전에 자주 묻는 질문을 정리했습니다. 실제 조건은 상품과 채널에 따라 달라질 수 있으며 캠페인 확정 전에 정확하게 안내합니다.</p>
          <div className="faq-hero-actions"><Link className="gradient-button" href="/creators#apply">인플루언서 지원하기</Link><Link className="outline-button" href="/brands#inquiry">브랜드 입점 문의하기</Link></div>
        </div>
      </section>

      <section className="shell faq-content section-gap">
        <div className="faq-content-head"><div><span className="eyebrow">PRACTICAL GUIDE</span><h2>신청 전에 꼭 확인해 주세요</h2></div><p>조건이 캠페인마다 달라지는 항목은 진행 전 협의하고 서면으로 정확하게 안내합니다.</p></div>
        <FAQExplorer items={faqItems} />
      </section>

      <section className="shell faq-conversion section-gap" aria-label="신청 안내">
        <article><span>FOR CREATORS</span><h2>함께 판매할 상품을 찾고 계신가요?</h2><p>현재 모집 중인 캠페인을 확인하고 거상커머스 인플루언서로 지원해 보세요.</p><Link className="white-button" href="/creators#apply">인플루언서 지원하기 <b>→</b></Link></article>
        <article><span>FOR BRANDS</span><h2>상품에 맞는 인플루언서를 찾고 계신가요?</h2><p>상품과 공급 조건을 보내주시면 공동구매 캠페인 가능성을 검토합니다.</p><Link className="white-button" href="/brands#inquiry">브랜드 입점 문의하기 <b>→</b></Link></article>
      </section>
    </main>
  );
}
