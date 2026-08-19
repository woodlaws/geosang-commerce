export const siteConfig = {
  name: "거상커머스",
  englishName: "GEOSANG COMMERCE",
  description: "거상커머스는 브랜드와 인플루언서를 연결해 공동구매 캠페인을 기획·운영하는 인플루언서 공동구매 플랫폼입니다.",
  serviceDescription: "브랜드와 인플루언서를 연결하는 공동구매 플랫폼",
  slogan: "좋은 상품과 영향력을 매출로 연결합니다",
  operatorNotice: "거상커머스는 거상마케팅센터가 운영하는 공동구매 플랫폼입니다.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://geosang-creator-commerce.geosangbruce.chatgpt.site",
  logo: "/images/brand/geosang-commerce-logo.png",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
  youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "",
  tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL || "",
};

export const team = [
  { name: "임헌수", role: "대표", lines: ["거상스쿨·거상마케팅센터 대표", "AI·마케팅·교육 콘텐츠 기획", "브랜드 콘텐츠 및 판매 구조 설계"] },
  { name: "이유진", role: "팀장", lines: ["거상마케팅센터 공동구매 운영", "인플루언서 커뮤니케이션", "캠페인 일정·판매·정산 관리"] },
];

export const commonFaqs = [
  { question: "팔로워 수가 많아야 지원할 수 있나요?", answer: "팔로워 규모만으로 판단하지 않습니다. 상품과 콘텐츠 분야의 적합성, 채널 운영의 진정성, 콘텐츠 품질을 함께 확인합니다." },
  { question: "재고를 직접 구매해야 하나요?", answer: "현재 안내된 캠페인은 공급사가 상품 공급과 배송을 담당하는 구조입니다. 세부 조건은 매칭 후 캠페인별로 안내합니다." },
  { question: "판매 수익은 어떻게 정산되나요?", answer: "캠페인 시작 전 판매 조건과 정산 일정을 협의해 안내합니다. 실제 정산 방식은 상품과 판매 채널에 따라 달라질 수 있습니다." },
  { question: "브랜드는 어떤 업무를 맡게 되나요?", answer: "상품 정보와 재고를 제공하고 주문 상품을 출고합니다. 거상커머스는 인플루언서 매칭, 일정 조율, 운영과 정산 중계를 지원합니다." },
];
