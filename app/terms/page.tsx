import { PageHero } from "@/components/PageHero";
import { termsSections } from "@/data/legal";
import { createPageMetadata } from "@/data/site";
export const metadata = createPageMetadata("이용약관", "거상커머스 서비스 이용약관", "/terms");
export default function TermsPage(){ return <main><PageHero eyebrow="TERMS" title="이용약관" description="서비스 범위와 계약 구조를 실제 운영 정보로 교체하기 쉽게 분리한 약관 초안입니다."/><article className="shell legal section-gap">{termsSections.map((section)=><section key={section.title}><h2>{section.title}</h2><p>{section.body}</p></section>)}</article></main> }
