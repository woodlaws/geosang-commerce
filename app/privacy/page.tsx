import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
export const metadata: Metadata = { title:"개인정보처리방침", description:"GEOSANG CREATOR COMMERCE 개인정보처리방침", alternates:{canonical:"/privacy"} };
export default function PrivacyPage(){ return <main><PageHero eyebrow="POLICY" title="개인정보처리방침" description="공개 전 실제 수집 항목, 보유 기간, 처리 위탁 현황과 사업자 정보를 확정해 반영해야 합니다."/><article className="shell legal section-gap"><h2>1. 수집하는 개인정보</h2><p>인플루언서 지원 및 브랜드 상담 과정에서 이름, 연락처, 이메일, 채널 또는 회사 정보, 문의 내용을 수집할 수 있습니다.</p><h2>2. 이용 목적</h2><p>지원자 또는 상담 신청자의 신원 확인, 캠페인 적합성 검토, 문의 답변과 후속 연락을 위해 이용합니다.</p><h2>3. 보유 및 이용 기간</h2><p>실제 운영 정책과 관련 법령을 검토한 뒤 정확한 기간을 입력해야 합니다. 현재 문구는 공개 전 검토용 초안입니다.</p><h2>4. 문의</h2><p>개인정보 보호 담당자와 연락처: 정보 입력 필요</p></article></main> }
