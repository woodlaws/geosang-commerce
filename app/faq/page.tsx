import type { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PageHero } from "@/components/PageHero";
import { commonFaqs } from "@/data/site";
export const metadata: Metadata = { title:"자주 묻는 질문", description:"브랜드 입점과 인플루언서 공동구매 지원, 배송과 정산에 관한 자주 묻는 질문", alternates:{canonical:"/faq"} };
export default function FAQPage(){ const jsonLd={"@context":"https://schema.org","@type":"FAQPage",mainEntity:commonFaqs.map(x=>({"@type":"Question",name:x.question,acceptedAnswer:{"@type":"Answer",text:x.answer}}))}; return <main><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/><PageHero eyebrow="FAQ" title="궁금한 내용을 먼저 확인해 보세요" description="캠페인의 실제 조건은 상품과 채널에 따라 달라질 수 있으며, 매칭 후 정확히 안내합니다."/><section className="shell faq-single section-gap"><FAQAccordion items={commonFaqs}/></section></main> }
