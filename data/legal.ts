import { siteConfig } from "@/data/site";

export const privacyConfig = {
  controller: process.env.NEXT_PUBLIC_PRIVACY_CONTROLLER || "",
  officer: process.env.NEXT_PUBLIC_PRIVACY_OFFICER || "",
  retentionPeriod: process.env.NEXT_PUBLIC_PRIVACY_RETENTION_PERIOD || "",
  processor: process.env.NEXT_PUBLIC_PRIVACY_PROCESSOR || "",
  collectedItems: [
    "이름·담당자 이름",
    "연락처",
    "이메일",
    "인플루언서 채널 및 콘텐츠 정보",
    "브랜드·상품·배송 정보",
    "문의 내용",
    "유입 페이지·UTM 정보·User Agent",
  ],
  purposes: ["신청자 확인", "캠페인 적합성 검토", "상담 및 후속 연락", "접수 경로 분석"],
  destruction: "보유 기간이 끝나거나 처리 목적이 달성된 정보는 복구할 수 없는 방법으로 지체 없이 파기합니다.",
  refusal: "개인정보 수집·이용 동의를 거부할 수 있으나, 필수 항목 동의를 거부하면 온라인 신청 또는 상담 접수가 제한됩니다.",
};

export const operatorDetails = [
  ["개인정보처리자", privacyConfig.controller],
  ["운영 회사", siteConfig.company],
  ["대표자", siteConfig.representative],
  ["사업자등록번호", siteConfig.businessNumber],
  ["사업장 주소", siteConfig.address],
  ["개인정보 담당자", privacyConfig.officer],
  ["문의 이메일", siteConfig.email],
  ["문의 전화번호", siteConfig.phone],
] as const;

export const termsSections = [
  { title: "1. 목적", body: "이 약관은 거상커머스가 제공하는 브랜드 입점 및 인플루언서 공동구매 연계 서비스의 기본 이용 조건을 안내하기 위한 초안입니다." },
  { title: "2. 서비스의 범위", body: "상품 검토, 인플루언서 매칭, 캠페인 일정 조율, 판매 운영 커뮤니케이션과 정산 중계 등을 포함할 수 있습니다." },
  { title: "3. 캠페인 조건", body: "판매가, 수익 배분, 일정, 콘텐츠 기준과 정산 방식은 개별 캠페인에서 당사자 간 협의를 거쳐 확정합니다." },
  { title: "4. 운영 안내", body: "운영 주체, 책임 범위 및 계약 조건은 실제 공동구매 계약 전에 서면으로 확인하며, 이 초안만으로 구체적인 정산 또는 법적 책임이 확정되지 않습니다." },
];
