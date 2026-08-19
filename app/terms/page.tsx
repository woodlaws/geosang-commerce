import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
export const metadata: Metadata = { title:"이용약관", description:"거상커머스 서비스 이용약관", alternates:{canonical:"/terms"} };
export default function TermsPage(){ return <main><PageHero eyebrow="TERMS" title="이용약관" description="실제 서비스 범위와 계약 구조가 확정되면 법률 검토를 거쳐 최종 약관으로 교체합니다."/><article className="shell legal section-gap"><h2>1. 목적</h2><p>이 약관은 거상커머스가 제공하는 브랜드 입점 및 인플루언서 공동구매 연계 서비스의 기본 이용 조건을 정하기 위한 초안입니다.</p><h2>2. 서비스의 범위</h2><p>상품 검토, 인플루언서 매칭, 캠페인 일정 조율, 판매 운영 커뮤니케이션과 정산 중계 등을 포함할 수 있습니다.</p><h2>3. 캠페인 조건</h2><p>판매가, 수익 배분, 일정, 콘텐츠 기준과 정산 방식은 개별 캠페인 합의에 따릅니다.</p><h2>4. 운영 안내</h2><p>거상커머스는 거상마케팅센터가 운영합니다. 사업자 정보와 책임 범위 등 계약에 필요한 공식 정보는 확정 후 고지합니다.</p></article></main> }
