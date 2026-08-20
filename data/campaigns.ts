export type CampaignStatus = "모집 중" | "제안 가능" | "준비 중" | "종료";

export type CampaignVariant = {
  composition: string;
  regularPrice: number;
  onlineLowestPrice?: number;
  offerPrice: number;
};

export type CampaignDetailContent = {
  theme?: "light" | "dark";
  englishName: string;
  introduction: string;
  heroNotice?: string;
  highlightTitle?: string;
  productFacts: { label: string; value: string }[];
  highlights: { title: string; description: string }[];
  routine: { image: string; imageAlt?: string; title: string; description: string; points: string[] };
  ingredientStory?: { title: string; description: string; ingredients: { name: string; amount: number }[] };
  comparison: { image?: string; title: string; description?: string; rows: { label: string; first: string; second: string }[]; link?: { href: string; label: string } };
  mgoGuide: { title: string; description: string; emphasis: string; rows: { mgo: string; umf: string; grade: string }[]; emphasizedMgo?: string[]; note: string };
  originStory: { images: { src: string; alt: string }[]; title: string; description: string; cards: string[] };
  packageStory: { image: string; imageAlt?: string; title: string; cards: { title: string; description: string }[] };
  productInfo?: { rows: { label: string; value: string }[]; importer: string; address: string; phone: string; nutrition: { name: string; value: string }[]; note: string };
  contentIdeas: string[];
  hooks: string[];
  faqs: { question: string; answer: string }[];
  supportNote: string;
  finalCta?: { title: string; description: string; button: string };
};

export type PropolisDetailContent = {
  englishName: string;
  introduction: string;
  functionalClaim: string;
  reviewNumber: string;
  reviewText: string;
  heroImage: string;
  images: { dutyFree: string; product: string; use: string; gift: string; ingredients: string; label: string };
  productFacts: { label: string; value: string }[];
  highlights: { title: string; description: string }[];
  ingredients: { name: string; type: "주원료" | "부원료"; description: string }[];
  servingGuide: { target: string; method: string; dailyAmount: string; steps: string[] };
  cautions: string[];
  productInfo: { label: string; value: string }[];
  address: string;
  rawIngredients: string;
  nutrition: { name: string; value: string }[];
  contentIdeas: string[];
  creatorTypes: string[];
  hooks: string[];
  prohibitedExpressions: string[];
  faqs: { question: string; answer: string }[];
  supportItems: string[];
  supportNote: string;
  finalCta: { title: string; description: string; button: string };
};

export type QuokkiesDetailContent = {
  displayName: string;
  englishName: string;
  introduction: string;
  heroImage: string;
  images: { origin: string; package: string; opener: string; size: string };
  productFacts: { label: string; value: string }[];
  highlights: { title: string; description: string }[];
  flavors: { name: string; color: string; description: string; ideas: string[] }[];
  packageColors: string[];
  originRegions: { english: string; korean: string }[];
  nutSize: { range: string; comparison: string; sourceNotice: string };
  kernelRatio: string;
  packagePoints: string[];
  openerGuide: string[];
  comparison: { label: string; value: string }[];
  recommendations: string[];
  allergyNotice: string[];
  contentIdeas: string[];
  creatorTypes: string[];
  hooks: string[];
  faqs: { question: string; answer: string }[];
  supportItems: string[];
  supportNote: string;
  finalCta: { title: string; description: string; button: string };
};

export type Campaign = {
  slug: string;
  brand: string;
  name: string;
  category: "건강식품" | "식품" | "뷰티" | "생활용품";
  status: CampaignStatus;
  image?: string;
  imageAlt?: string;
  imageTreatment?: "product" | "editorial" | "cover";
  origin?: string;
  searchKeywords?: string[];
  flavors?: { name: string; description: string }[];
  seoTitle?: string;
  seoDescription?: string;
  shipping: "무료배송" | "배송비 별도";
  variants: CampaignVariant[];
  features: string[];
  contentFields: string[];
  recommendedChannels?: string[];
  contentIdeas?: string[];
  creatorTypes: string[];
  detail?: CampaignDetailContent;
  propolisDetail?: PropolisDetailContent;
  quokkiesDetail?: QuokkiesDetailContent;
};

export const campaigns: Campaign[] = [
  {
    slug: "manuka-royal-jelly-mgo-300",
    brand: "GOODAY HONEY",
    name: "마누카꿀 로열젤리 MGO 300+",
    category: "건강식품",
    status: "모집 중",
    origin: "호주",
    image: "/images/campaigns/manuka-300/manuka-mgo-300-thumbnail.webp",
    imageAlt: "굿데이허니 마누카 위드 로열젤리 MGO 300+ 10포 패키지",
    imageTreatment: "cover",
    seoTitle: "굿데이허니 마누카꿀 로열젤리 MGO 300+ 공동구매 | 거상커머스",
    seoDescription: "호주에서 제조된 굿데이허니 마누카 위드 로열젤리 MGO 300+의 원재료, 제품 구성, 영양정보, 공동구매 제안가와 콘텐츠 아이디어를 확인하세요.",
    shipping: "무료배송",
    variants: [
      { composition: "1개 (12g × 10포)", regularPrice: 38000, offerPrice: 28900 },
      { composition: "3개 (12g × 30포)", regularPrice: 114000, offerPrice: 76500 },
      { composition: "6개 (12g × 60포)", regularPrice: 228000, offerPrice: 139000 },
      { composition: "9개 (12g × 90포)", regularPrice: 342000, offerPrice: 205900 },
    ],
    features: ["MGO 300+", "벌꿀 95%와 로열젤리 5%", "12g 개별 스틱", "호주 제조", "화이트·골드 패키지"],
    contentFields: ["일상·라이프스타일 크리에이터", "가족·육아 콘텐츠 크리에이터", "푸드 및 식품 리뷰 크리에이터", "직장인 루틴 크리에이터", "선물 추천 콘텐츠 크리에이터", "호주 여행·생활 콘텐츠 크리에이터"],
    recommendedChannels: ["Instagram", "Shorts", "Naver Blog"],
    contentIdeas: ["바쁜 아침에 챙기는 나만의 한 포 루틴", "사무실 서랍이나 가방 속 데일리 아이템", "마누카꿀 MGO 숫자를 쉽게 설명하는 콘텐츠", "부모님·가족에게 제안하는 깔끔한 선물", "MGO 300+와 800+ 비교 콘텐츠", "호주 제조 식품과 원재료를 소개하는 정보형 콘텐츠"],
    creatorTypes: ["일상과 가족 루틴을 자연스럽게 보여주는 크리에이터", "푸드·식품 정보를 이해하기 쉽게 설명하는 크리에이터", "선물 또는 호주 라이프 콘텐츠를 만드는 크리에이터"],
    detail: {
      theme: "light",
      englishName: "G’DAY HONEY MANUKA WITH ROYAL JELLY MGO 300+",
      introduction: "호주산 마누카꿀과 로열젤리를 한 포에 담은 데일리 스틱형 제품입니다.",
      heroNotice: "공동구매 제안 기준가이며 실제 판매 구성, 일정 및 진행 조건은 협의 후 확정됩니다.",
      highlightTitle: "데일리 마누카를 한눈에 확인하세요",
      productFacts: [{ label: "식품 유형", value: "당류가공품" }, { label: "구성", value: "12g × 10스틱" }, { label: "총내용량", value: "120g" }, { label: "총열량", value: "390kcal" }, { label: "원재료", value: "벌꿀 95%, 로열젤리 5%" }, { label: "제조국", value: "호주" }, { label: "제조사", value: "PURE AUSTRALIA PTY LTD" }, { label: "형태", value: "개별 스틱 포장" }, { label: "배송", value: "무료배송" }, { label: "캠페인 상태", value: "모집 중" }],
      highlights: [{ title: "MGO 300+", description: "마누카꿀의 MGO 함량 기준을 확인할 수 있는 제품" }, { title: "마누카꿀과 로열젤리", description: "벌꿀 95%와 로열젤리 5%로 구성" }, { title: "12g 개별 스틱", description: "계량하거나 덜어낼 필요 없이 한 포씩 이용" }, { title: "호주 제조", description: "PURE AUSTRALIA PTY LTD에서 제조된 호주 제품" }, { title: "데일리·선물용 패키지", description: "화이트·골드 디자인의 깔끔한 패키지" }],
      routine: { image: "/images/campaigns/manuka-300/manuka-mgo-300-routine.webp", imageAlt: "굿데이허니 마누카 MGO 300+ 흰색 개별 스틱", title: "하루 한 포로 간편하게 즐기는 마누카 루틴", description: "12g씩 개별 포장된 스틱형 제품으로 별도의 계량 없이 간편하게 이용할 수 있습니다. 집과 사무실은 물론 외출이나 여행 중에도 휴대하기 좋은 구성입니다.", points: ["벌꿀 95%와 로열젤리 5%의 원재료 구성", "한 포씩 꺼내기 편한 개별 스틱", "호주 제조 제품", "보관과 휴대가 편리한 패키지", "일상 루틴과 선물 콘텐츠에 적합"] },
      ingredientStory: { title: "마누카꿀에 로열젤리를 더한 한 포", description: "굿데이허니 마누카 위드 로열젤리 MGO 300+는 벌꿀 95%와 로열젤리 5%로 구성된 당류가공품입니다. 마누카꿀과 로열젤리를 한 번에 소개할 수 있어 원재료와 제품 구성 중심의 콘텐츠를 만들기 좋습니다.", ingredients: [{ name: "벌꿀", amount: 95 }, { name: "로열젤리", amount: 5 }] },
      comparison: { title: "콘텐츠와 고객에 맞춰 선택하는 마누카 라인업", description: "두 제품의 차이는 단순한 우열이 아니라 MGO 기준과 판매 포지션, 콘텐츠 타깃의 차이로 설명해 주세요.", rows: [{ label: "패키지", first: "화이트·골드", second: "블랙·골드" }, { label: "포지션", first: "데일리 마누카 루틴", second: "프리미엄 마누카 라인" }, { label: "구성", first: "12g × 10포", second: "12g × 10포" }, { label: "추천 콘텐츠", first: "일상·가족·입문형", second: "프리미엄·선물·정보형" }, { label: "정상가", first: "38,000원", second: "63,000원" }, { label: "대표 제안가", first: "28,900원", second: "50,900원" }], link: { href: "/campaigns/manuka-royal-jelly-mgo-800", label: "MGO 800+도 비교하기" } },
      mgoGuide: { title: "MGO 300+는 무엇인가요?", description: "MGO는 마누카꿀에 포함된 메틸글리옥살(Methylglyoxal)의 함량을 나타내는 지표로 사용됩니다. 숫자는 제품의 MGO 함량 기준을 구분하는 데 활용됩니다.", emphasis: "MGO 300+는 일상적인 마누카 루틴을 제안하기 좋은 굿데이허니의 화이트 패키지 라인입니다.", rows: [{ mgo: "약 MGO 83+", umf: "UMF 5+", grade: "Premium" }, { mgo: "약 MGO 263+", umf: "UMF 10+", grade: "Premium" }, { mgo: "약 MGO 306+", umf: "UMF 11+", grade: "Extra Premium" }, { mgo: "약 MGO 514+", umf: "UMF 15+", grade: "Extra Premium" }, { mgo: "약 MGO 759+", umf: "UMF 19+", grade: "Super Premium" }, { mgo: "약 MGO 826+", umf: "UMF 20+", grade: "Super Premium" }], emphasizedMgo: ["약 MGO 263+", "약 MGO 306+"], note: "등급 비교는 첨부 상품자료를 바탕으로 정리한 참고 정보이며 인증기관과 제품별 기준에 따라 차이가 있을 수 있습니다." },
      originStory: { images: [{ src: "/images/campaigns/manuka-300/manuka-mgo-300-04.webp", alt: "호주 양봉가와 벌집에서 흐르는 꿀" }, { src: "/images/campaigns/manuka-300/manuka-mgo-300-06.webp", alt: "벌집을 확인하는 호주 양봉 현장" }], title: "호주의 자연에서 시작되는 마누카 허니", description: "굿데이허니 마누카 위드 로열젤리 MGO 300+는 호주에서 제조된 제품입니다. 양봉 환경과 마누카꿀의 원산지 이야기는 제품 소개 콘텐츠에 자연스럽게 활용할 수 있습니다.", cards: ["호주 제조 제품", "마누카꿀 원료 스토리", "양봉 과정과 자연환경 이미지", "화이트·골드의 깔끔한 브랜드 디자인"] },
      packageStory: { image: "/images/campaigns/manuka-300/manuka-mgo-300-package.webp", imageAlt: "굿데이허니 마누카 MGO 300+ 화이트 골드 패키지", title: "간편하고 깔끔한 화이트·골드 패키지", cards: [{ title: "언제 어디서든 한 포", description: "휴대하기 편리한 12g 개별 스틱 구성" }, { title: "보관하기 편한 패키지", description: "필요한 만큼 한 포씩 꺼내기 좋은 패키지 구조" }, { title: "부담 없이 제안하는 선물", description: "화이트·골드 디자인과 컴팩트한 크기의 선물용 구성" }] },
      productInfo: { rows: [{ label: "제품명", value: "굿데이 허니 마누카 위드 로열젤리 300+" }, { label: "식품의 유형", value: "당류가공품" }, { label: "원재료명 및 함량", value: "벌꿀 95%, 로열젤리 5%" }, { label: "내용량", value: "120g, 12g × 10스틱" }, { label: "총열량", value: "390kcal" }, { label: "소비기한", value: "제품 뒷면 별도 표시" }, { label: "포장재질", value: "내포장 스틱: 폴리에틸렌, 외포장: 종이" }, { label: "보관방법", value: "직사광선을 피하고 서늘한 곳에 보관" }, { label: "제조회사", value: "PURE AUSTRALIA PTY LTD" }, { label: "반품 및 교환", value: "구입처 및 수입원" }, { label: "부정·불량식품 신고", value: "국번 없이 1399" }], importer: "호주직구닷컴 주식회사", address: "서울특별시 용산구 청파로49길 37-3(청파동2가), 디테일씨빌딩 2층 255호", phone: "02-568-9220", nutrition: [{ name: "열량", value: "390kcal" }, { name: "나트륨", value: "10mg, 0.5%" }, { name: "탄수화물", value: "96g, 30%" }, { name: "당류", value: "96g, 96%" }, { name: "지방", value: "0g, 0%" }, { name: "트랜스지방", value: "0g" }, { name: "포화지방", value: "0g, 0%" }, { name: "콜레스테롤", value: "0mg, 0%" }, { name: "단백질", value: "2g, 4%" }], note: "1일 영양성분 기준치에 대한 비율(%)은 2,000kcal 기준이므로 개인의 필요 열량에 따라 다를 수 있습니다." },
      contentIdeas: ["바쁜 아침에 챙기는 나만의 한 포 루틴", "사무실 서랍이나 가방 속 데일리 아이템", "마누카꿀 MGO 숫자를 쉽게 설명하는 콘텐츠", "부모님·가족에게 제안하는 깔끔한 선물", "MGO 300+와 800+ 비교 콘텐츠", "호주 제조 식품과 원재료를 소개하는 정보형 콘텐츠"],
      hooks: ["마누카꿀 앞의 300+, 무슨 숫자인지 알고 계셨나요?", "꿀을 매번 덜어 먹기 번거로웠다면 이렇게 챙겨보세요.", "화이트 300+와 블랙 800+, 어떤 차이가 있을까요?"],
      faqs: [{ question: "MGO 300+는 무엇을 의미하나요?", answer: "MGO는 마누카꿀에 포함된 메틸글리옥살의 함량 기준을 구분하는 지표입니다. 300+는 이 제품에 사용된 마누카꿀의 MGO 등급을 나타냅니다." }, { question: "MGO 800+ 제품과 어떤 차이가 있나요?", answer: "300+는 화이트·골드 패키지의 데일리 마누카 루틴, 800+는 블랙·골드 패키지의 프리미엄 라인으로 안내합니다. 두 제품의 우열이 아니라 MGO 기준과 콘텐츠 포지션의 차이입니다." }, { question: "상품 샘플과 콘텐츠 자료가 제공되나요?", answer: "샘플과 상품 자료의 제공 범위는 인플루언서 매칭 후 캠페인 조건에 따라 안내합니다. 확정되지 않은 항목은 사전에 약속하지 않습니다." }, { question: "배송은 누가 담당하나요?", answer: "상품 공급과 소비자 택배 발송은 공급사가 담당합니다. 거상커머스는 출고 일정과 운영 관련 커뮤니케이션을 지원합니다." }, { question: "공동구매 구성과 가격은 변경될 수 있나요?", answer: "표시 가격과 구성은 공동구매 제안 기준입니다. 판매 일정, 수량, 수수료와 세부 조건을 협의한 뒤 최종 확정합니다." }, { question: "식품 관련 콘텐츠에서 주의할 표현이 있나요?", answer: "질병의 예방·치료, 면역력 향상, 항균 효과 등 확인되지 않은 효능을 단정하는 표현은 피해야 합니다. 콘텐츠 제작 전 제공되는 상품정보와 표시·광고 가이드를 확인해 주세요." }],
      supportNote: "상품 공급과 택배 발송은 공급사가 담당하고, 거상커머스는 인플루언서 매칭, 캠페인 조율, 콘텐츠 안내 및 운영 커뮤니케이션을 지원합니다.",
      finalCta: { title: "데일리 마누카 콘텐츠와 잘 맞는다면 제안을 받아보세요", description: "채널과 콘텐츠 성향을 검토한 후 공동구매 조건과 진행 가능 일정을 안내해드립니다.", button: "MGO 300+ 상품 제안받기" }
    },
  },
  {
    slug: "manuka-royal-jelly-mgo-800",
    brand: "GOODAY HONEY",
    name: "굿데이허니 마누카 위드 로열젤리 MGO 800+",
    category: "건강식품",
    status: "준비 중",
    origin: "호주",
    image: "/images/campaigns/manuka-800/manuka-mgo-800-thumbnail.webp",
    imageAlt: "굿데이허니 마누카꿀 로열젤리 MGO 800+ 10포 패키지",
    imageTreatment: "cover",
    seoTitle: "굿데이허니 마누카꿀 로열젤리 MGO 800+ 공동구매 | 거상커머스",
    seoDescription: "호주산 마누카꿀과 로열젤리를 한 포에 담은 굿데이허니 MGO 800+ 스틱 제품의 특징, 구성, 공동구매 제안가와 콘텐츠 아이디어를 확인하세요.",
    shipping: "무료배송",
    variants: [
      { composition: "1개 (12g × 10포)", regularPrice: 63000, offerPrice: 50900 },
      { composition: "3개 (12g × 30포)", regularPrice: 189000, offerPrice: 141900 },
      { composition: "6개 (12g × 60포)", regularPrice: 378000, offerPrice: 268500 },
      { composition: "9개 (12g × 90포)", regularPrice: 567000, offerPrice: 372900 },
    ],
    features: ["MGO 800+", "마누카꿀과 로열젤리", "12g 개별 스틱", "호주 생산 제품", "블랙·골드 패키지"],
    contentFields: ["건강한 일상과 루틴 콘텐츠", "프리미엄 식품 리뷰", "가족·부모님 선물 추천", "직장인 라이프스타일", "여행 및 호주 관련 콘텐츠", "제품 성분과 특징을 설명하는 정보형 콘텐츠"],
    recommendedChannels: ["Instagram", "TikTok", "YouTube", "Shorts", "Naver Blog"],
    contentIdeas: ["나의 아침 건강 루틴", "출근 가방 속 데일리 아이템", "부모님과 가족을 위한 선물 추천", "호주에서 온 프리미엄 식품 소개", "MGO 등급을 쉽게 설명하는 정보형 콘텐츠", "300+와 800+ 제품 비교 콘텐츠"],
    creatorTypes: ["건강한 일상과 루틴 콘텐츠를 만드는 크리에이터", "프리미엄 식품과 가족 선물을 소개하는 크리에이터", "제품 성분과 특징을 이해하기 쉽게 설명하는 정보형 크리에이터"],
    detail: {
      englishName: "G’DAY HONEY MANUKA WITH ROYAL JELLY MGO 800+",
      introduction: "호주산 마누카꿀과 로열젤리를 한 포에 담은 프리미엄 스틱형 제품입니다.",
      productFacts: [{ label: "구성", value: "12g × 10포" }, { label: "총내용량", value: "120g" }, { label: "원산지", value: "호주" }, { label: "형태", value: "개별 스틱 포장" }, { label: "배송", value: "무료배송" }, { label: "캠페인 상태", value: "준비 중" }],
      highlights: [{ title: "MGO 800+", description: "마누카꿀의 MGO 수치를 확인할 수 있는 고함량 제품" }, { title: "마누카꿀 × 로열젤리", description: "두 원료를 한 포에 담은 프리미엄 구성" }, { title: "12g 개별 스틱", description: "계량하거나 덜어낼 필요 없이 간편하게 섭취" }, { title: "호주산 원료와 생산", description: "호주에서 생산된 굿데이허니 제품" }, { title: "선물하기 좋은 패키지", description: "검정과 골드 컬러의 프리미엄 패키지" }],
      routine: { image: "/images/campaigns/manuka-800/manuka-mgo-800-routine.webp", title: "하루 한 포로 간편하게 챙기는 프리미엄 루틴", description: "굿데이허니 마누카 위드 로열젤리 MGO 800+는 휴대와 보관이 편리한 12g 스틱형 제품입니다. 집과 사무실은 물론 여행 중에도 간편하게 즐길 수 있습니다.", points: ["로열젤리를 함께 담은 구성", "호주산 마누카꿀 사용", "계량이 필요 없는 1회분 포장", "아침이나 일상 루틴 콘텐츠에 적합", "선물용으로 활용하기 좋은 패키지"] },
      comparison: { image: "/images/campaigns/manuka-800/manuka-mgo-800-03.webp", title: "콘텐츠 목적에 맞게 선택하는 마누카 라인업", rows: [{ label: "패키지", first: "화이트·골드", second: "블랙·골드" }, { label: "제품 포지션", first: "데일리 마누카 루틴", second: "프리미엄 마누카 루틴" }, { label: "형태", first: "12g 개별 스틱", second: "12g 개별 스틱" }, { label: "한 상자 구성", first: "10포", second: "10포" }, { label: "추천 콘텐츠", first: "일상·가족·입문형", second: "프리미엄·선물·제품 설명형" }] },
      mgoGuide: { title: "MGO 800+는 무엇인가요?", description: "MGO는 마누카꿀에 포함된 메틸글리옥살(Methylglyoxal)의 함량을 나타내는 지표입니다. 숫자는 제품의 MGO 함량 기준을 구분하는 데 사용됩니다.", emphasis: "이 제품은 MGO 800+ 등급의 마누카꿀을 사용한 프리미엄 라인입니다.", rows: [{ mgo: "약 MGO 83+", umf: "UMF 5+", grade: "Premium" }, { mgo: "약 MGO 263+", umf: "UMF 10+", grade: "Premium" }, { mgo: "약 MGO 306+", umf: "UMF 11+", grade: "Extra Premium" }, { mgo: "약 MGO 514+", umf: "UMF 15+", grade: "Extra Premium" }, { mgo: "약 MGO 759+", umf: "UMF 19+", grade: "Super Premium" }, { mgo: "약 MGO 826+", umf: "UMF 20+", grade: "Super Premium" }], note: "등급 비교는 첨부 상품자료를 바탕으로 한 참고 정보이며 인증기관과 제품별 기준에 따라 차이가 있을 수 있습니다." },
      originStory: { images: [{ src: "/images/campaigns/manuka-800/manuka-mgo-800-05.webp", alt: "호주 양봉가가 벌집 틀을 살펴보는 모습" }, { src: "/images/campaigns/manuka-800/manuka-mgo-800-08.webp", alt: "벌집과 양봉 현장 모습" }], title: "호주 자연에서 시작되는 마누카 허니", description: "굿데이허니는 호주의 자연환경에서 생산된 마누카꿀을 사용합니다. 원료의 이야기와 양봉 현장은 제품의 원산지와 브랜드 스토리를 전달하기 좋은 콘텐츠 소재입니다.", cards: ["호주산 마누카꿀", "원료와 생산 과정을 보여주는 브랜드 스토리", "스틱 포장을 통한 편리한 보관과 섭취", "검정과 골드 컬러의 프리미엄 디자인"] },
      packageStory: { image: "/images/campaigns/manuka-800/manuka-mgo-800-package.webp", title: "간편하고 깔끔한 스틱 패키지", cards: [{ title: "언제 어디서든 한 포", description: "휴대하기 편리한 개별 스틱 구성" }, { title: "깔끔한 슬라이드 오픈 패키지", description: "한 포씩 꺼내어 보관하고 사용하기 편한 구조" }, { title: "프리미엄 건강 선물 제안", description: "부담스럽지 않은 크기와 고급스러운 블랙·골드 디자인" }] },
      contentIdeas: ["나의 아침 건강 루틴", "출근 가방 속 데일리 아이템", "부모님과 가족을 위한 선물 추천", "호주에서 온 프리미엄 식품 소개", "MGO 등급을 쉽게 설명하는 정보형 콘텐츠", "300+와 800+ 제품 비교 콘텐츠"],
      hooks: ["마누카꿀도 숫자를 보고 골라야 한다는 사실, 알고 계셨나요?", "바쁜 아침, 꿀을 한 포씩 챙길 수 있다면?", "화이트 300+와 블랙 800+, 어떤 차이가 있을까요?"],
      faqs: [{ question: "MGO 800+는 무엇을 의미하나요?", answer: "MGO는 마누카꿀에 포함된 메틸글리옥살의 함량을 구분하는 지표입니다. 800+는 이 제품에 사용된 마누카꿀의 MGO 등급을 나타냅니다." }, { question: "MGO 300+ 제품과 어떤 차이가 있나요?", answer: "두 제품은 패키지와 MGO 등급, 콘텐츠 포지션이 다릅니다. 300+는 데일리 루틴, 800+는 프리미엄·선물·정보형 콘텐츠에 활용하기 좋은 제품으로 안내하고 있으며 우열을 의미하지 않습니다." }, { question: "상품 샘플과 콘텐츠 자료가 제공되나요?", answer: "샘플과 상품 자료의 제공 범위는 인플루언서 매칭 후 캠페인 조건에 따라 안내합니다. 확정되지 않은 제공 항목은 사전에 약속하지 않습니다." }, { question: "배송은 누가 담당하나요?", answer: "상품 공급과 소비자 택배 발송은 공급사가 담당합니다. 거상커머스는 출고 일정과 운영 관련 커뮤니케이션을 지원합니다." }, { question: "공동구매 가격과 구성은 변경될 수 있나요?", answer: "표시 가격과 구성은 공동구매 제안 기준입니다. 판매 일정, 수량, 수수료와 세부 조건을 협의한 뒤 최종 확정합니다." }, { question: "건강 관련 표현은 콘텐츠에서 어떻게 사용해야 하나요?", answer: "식품 및 건강 관련 콘텐츠는 질병의 예방·치료 또는 특정 효능을 단정하는 표현을 피해야 합니다. 실제 콘텐츠 제작 전 제공되는 상품 정보와 표시·광고 가이드를 확인해 주세요." }],
      supportNote: "상품 공급과 택배 발송은 공급사가 담당하고, 거상커머스는 상품 매칭, 캠페인 조율, 콘텐츠 안내 및 커뮤니케이션을 지원합니다."
    },
  },
  {
    slug: "gooday-propolis-spray",
    brand: "GOODAY HONEY",
    name: "굿데이 프로폴리스 스프레이",
    category: "건강식품",
    status: "모집 중",
    origin: "호주",
    image: "/images/campaigns/propolis-spray/propolis-spray-thumbnail.webp",
    imageAlt: "굿데이 프로폴리스 스프레이 25ml 제품과 패키지",
    imageTreatment: "cover",
    seoTitle: "굿데이 프로폴리스 스프레이 공동구매 | 거상커머스",
    seoDescription: "호주에서 제조된 굿데이 프로폴리스 스프레이 25ml의 기능성, 원재료, 섭취방법, 공동구매 제안가와 인플루언서 콘텐츠 아이디어를 확인하세요.",
    searchKeywords: ["굿데이", "프로폴리스", "스프레이", "구강", "건강기능식품", "호주"],
    shipping: "무료배송",
    variants: [
      { composition: "1개 (25ml)", regularPrice: 30000, offerPrice: 19800 },
      { composition: "4개 + 선물백 증정", regularPrice: 120000, offerPrice: 71900 },
      { composition: "7개 + 선물백 2개 증정", regularPrice: 210000, offerPrice: 118500 },
    ],
    features: ["구강 항균 기능성", "25ml 미세분사 스프레이", "총 플라보노이드 2.25mg", "호주 제조", "휴대 가능한 패키지"],
    contentFields: ["건강한 생활 습관", "라이프스타일·직장인", "여행·출장 준비", "호주 제품", "부모님·가족 선물", "건강기능식품 정보", "구강 관리"],
    recommendedChannels: ["Instagram", "TikTok", "Shorts"],
    contentIdeas: ["가방 속 휴대용 구강 루틴 아이템", "식사 후 사용하는 나만의 구강 관리 루틴", "호주에서 온 건강기능식품 소개", "출장·여행 시 챙기는 소형 스프레이"],
    creatorTypes: ["건강한 생활 습관 콘텐츠 크리에이터", "라이프스타일·직장인 콘텐츠 크리에이터", "건강기능식품 정보형 크리에이터"],
    propolisDetail: {
      englishName: "G’DAY PROPOLIS SPRAY",
      introduction: "프로폴리스 추출물을 주원료로 한 25ml 구강 스프레이형 건강기능식품입니다.",
      functionalClaim: "구강에서의 항균작용에 도움을 줄 수 있음",
      reviewNumber: "260111780",
      reviewText: "한국건강기능식품협회에서 광고심의를 받은 광고물입니다. 심의번호 260111780",
      heroImage: "/images/campaigns/propolis-spray/propolis-spray-hero.webp",
      images: { dutyFree: "/images/campaigns/propolis-spray/propolis-spray-sydney-duty-free.webp", product: "/images/campaigns/propolis-spray/propolis-spray-product.webp", use: "/images/campaigns/propolis-spray/propolis-spray-use.webp", gift: "/images/campaigns/propolis-spray/propolis-spray-gift-package.webp", ingredients: "/images/campaigns/propolis-spray/propolis-spray-ingredients.webp", label: "/images/campaigns/propolis-spray/propolis-spray-label.webp" },
      productFacts: [{ label: "제품 유형", value: "건강기능식품" }, { label: "내용량", value: "25ml" }, { label: "1일 섭취량", value: "1.5ml" }, { label: "섭취방법", value: "성인 1일 3회, 1회 0.5ml씩 구강에 분사" }, { label: "제조국", value: "호주" }, { label: "제조사", value: "PURE AUSTRALIA PTY LTD" }, { label: "원산지", value: "호주" }, { label: "형태", value: "미세분사 스프레이" }, { label: "용기", value: "알루미늄" }, { label: "배송", value: "무료배송" }, { label: "캠페인 상태", value: "모집 중" }],
      highlights: [{ title: "구강 항균 기능성", description: "구강에서의 항균작용에 도움을 줄 수 있는 건강기능식품" }, { title: "25ml 스프레이형", description: "구강에 직접 분사할 수 있는 미세분사 방식" }, { title: "프로폴리스 추출물", description: "총 플라보노이드 1일 섭취량 기준 2.25mg 함유" }, { title: "호주 제조", description: "PURE AUSTRALIA PTY LTD에서 제조된 호주산 제품" }, { title: "휴대하기 좋은 크기", description: "가방이나 파우치에 보관하기 편한 컴팩트한 용기" }],
      ingredients: [{ name: "프로폴리스 추출물", type: "주원료", description: "프로폴리스는 벌이 외부 환경으로부터 벌집을 보호하기 위해 사용하는 물질로 알려져 있으며, 본 제품에서는 건강기능식품의 기능성 주원료로 사용됩니다." }, { name: "카카두플럼열매추출물", type: "부원료", description: "호주 북부 지역에서 자생하는 카카두플럼 열매에서 얻은 추출물입니다." }, { name: "마누카꿀", type: "부원료", description: "호주에서 생산되는 마누카꿀을 제품의 부원료로 사용했습니다." }, { name: "페퍼민트·포멜로·레몬", type: "부원료", description: "페퍼민트향과 과일 계열 향을 함께 사용한 스프레이형 제품입니다." }],
      servingGuide: { target: "성인", method: "1일 3회, 1회 0.5ml(3회 분사)를 구강에 분사하여 섭취하십시오.", dailyAmount: "총 1.5ml", steps: ["사용 전 제품을 확인합니다.", "구강을 향해 3회 분사합니다.", "하루 3회 기준으로 섭취합니다."] },
      cautions: ["프로폴리스에 알레르기를 나타내는 사람은 섭취에 주의하십시오.", "이상사례 발생 시 섭취를 중단하고 전문가와 상담하십시오.", "아이들의 손이 닿지 않는 서늘한 곳에 보관하십시오.", "소비기한은 제품 측면의 별도 표시일까지입니다.", "본 제품은 질병의 예방 및 치료를 위한 의약품이 아닙니다.", "이상사례 신고는 국번 없이 1577-2488입니다."],
      productInfo: [{ label: "제품명", value: "굿데이 프로폴리스 스프레이" }, { label: "제품 유형", value: "건강기능식품" }, { label: "내용량", value: "25ml" }, { label: "제조사", value: "PURE AUSTRALIA PTY LTD" }, { label: "원산지", value: "호주" }, { label: "수입업소명", value: "호주직구닷컴 주식회사" }, { label: "고객상담전화", value: "02-568-9220" }, { label: "섭취방법", value: "성인 1일 3회, 1회 0.5ml(3회 분사)를 구강에 분사" }, { label: "보관방법", value: "아이들 손이 닿지 않는 서늘한 곳에 실온 보관" }, { label: "소비기한", value: "제품 측면 별도 표시일까지" }, { label: "포장재질", value: "용기 알루미늄, 뚜껑 PP" }, { label: "반품 및 교환", value: "구입처 및 수입원" }],
      address: "서울특별시 용산구 청파로49길 37-03(청파동2가), 디테일씨빌딩 2층 255호",
      rawIngredients: "프로폴리스추출물, 정제수, 글리세린, D-소비톨(감미료), 벌꿀, 포멜로열매추출물, 카카두플럼열매추출물, 레몬추출물, L-멘톨, 서양박하잎오일",
      nutrition: [{ name: "열량", value: "0kcal" }, { name: "탄수화물", value: "0g" }, { name: "당류", value: "0g" }, { name: "단백질", value: "0g" }, { name: "지방", value: "0g" }, { name: "총 플라보노이드", value: "2.25mg" }],
      contentIdeas: ["가방 속 휴대용 구강 루틴 아이템", "식사 후 사용하는 나만의 구강 관리 루틴", "호주에서 온 건강기능식품 소개", "프로폴리스 주원료를 설명하는 정보형 콘텐츠", "출장·여행 시 챙기는 소형 스프레이", "부모님·직장 동료를 위한 선물 아이디어", "Sydney Duty Free 브랜드 스토리", "건강기능식품 표시사항 확인법"],
      creatorTypes: ["건강한 생활 습관 콘텐츠", "라이프스타일·직장인 콘텐츠", "여행·출장 준비 콘텐츠", "호주 여행 및 호주 제품 콘텐츠", "부모님·가족 선물 콘텐츠", "건강기능식품 정보형 콘텐츠", "구강 관리 콘텐츠"],
      hooks: ["이 작은 스프레이가 건강기능식품이라는 사실, 알고 계셨나요?", "식사 후 간편하게 챙기는 나만의 구강 루틴", "프로폴리스 스프레이를 고를 때 확인해야 할 한 가지", "호주에서 온 25ml 구강 스프레이, 무엇이 다를까요?"],
      prohibitedExpressions: ["목이 아플 때 뿌리세요", "감기 예방 스프레이", "입냄새 제거", "잇몸병 예방", "염증 치료", "천연 항생제"],
      faqs: [{ question: "굿데이 프로폴리스 스프레이는 어떤 제품인가요?", answer: "프로폴리스 추출물을 주원료로 한 25ml 구강 스프레이형 건강기능식품입니다." }, { question: "인정받은 기능성은 무엇인가요?", answer: "제품 표시사항에 따른 기능성 내용은 ‘구강에서의 항균작용에 도움을 줄 수 있음’입니다. 질병의 예방·치료나 세균 제거를 보장하는 제품으로 표현하면 안 됩니다." }, { question: "하루에 몇 번 섭취하나요?", answer: "성인은 하루 3회, 1회 0.5ml(3회 분사)를 구강에 분사하여 섭취합니다. 1일 섭취량은 총 1.5ml입니다." }, { question: "프로폴리스 알레르기가 있어도 섭취할 수 있나요?", answer: "프로폴리스에 알레르기를 나타내는 사람은 섭취에 주의해야 합니다. 이상사례가 발생하면 섭취를 중단하고 전문가와 상담해 주세요." }, { question: "상품 샘플과 콘텐츠 자료가 제공되나요?", answer: "샘플과 상품 자료의 제공 범위는 매칭 후 캠페인 조건에 따라 안내합니다. 건강기능식품 표시·광고 가이드도 함께 확인합니다." }, { question: "배송은 누가 담당하나요?", answer: "상품 공급과 소비자 택배 발송은 공급사가 담당하며, 거상커머스가 출고 일정과 운영 커뮤니케이션을 지원합니다." }, { question: "건강기능식품 콘텐츠에서 어떤 표현을 주의해야 하나요?", answer: "질병의 예방·치료, 세균 제거, 감기 예방, 입냄새 제거 등 허용 범위를 벗어난 표현은 사용하지 않습니다. 제공되는 표시·광고 가이드를 확인해 주세요." }, { question: "선물 박스가 공동구매 구성에 포함되나요?", answer: "선물 패키지 포함 여부는 실제 공동구매 구성과 공급 조건을 협의한 후 확정됩니다." }],
      supportItems: ["상품과 채널 적합성 확인", "캠페인 일정 조율", "콘텐츠 기획자료 및 표시·광고 가이드 안내", "공급 및 배송 커뮤니케이션", "판매 현황 확인 지원", "정산 일정 안내"],
      supportNote: "상품 공급과 택배 발송은 공급사가 담당하고, 거상커머스는 인플루언서 매칭, 캠페인 조율, 콘텐츠 안내 및 운영 커뮤니케이션을 지원합니다.",
      finalCta: { title: "프로폴리스 콘텐츠와 잘 맞는다면 상품 제안을 받아보세요", description: "채널과 콘텐츠 성향을 검토한 후 공동구매 조건, 표시·광고 가이드와 진행 가능 일정을 안내해드립니다.", button: "프로폴리스 스프레이 제안받기" }
    },
  },
  {
    slug: "quokkies-macadamia",
    brand: "QUOKKIES",
    name: "쿼키즈 마카다미아",
    category: "식품",
    status: "제안 가능",
    origin: "호주",
    image: "/images/campaigns/quokkies-macadamia/quokkies-macadamia-thumbnail.webp",
    imageAlt: "쿼키즈 마카다미아 바닐라 로스티드와 드라이 로스티드 120g 패키지",
    imageTreatment: "cover",
    searchKeywords: ["쿼키즈", "마카다미아", "바닐라", "드라이", "바닐라 로스티드", "드라이 로스티드", "호주", "간식"],
    flavors: [
      { name: "바닐라 로스티드", description: "초록색 패키지의 바닐라 로스티드 마카다미아" },
      { name: "드라이 로스티드", description: "주황색 패키지의 드라이 로스티드 마카다미아" },
    ],
    seoTitle: "쿼키즈 호주산 마카다미아 공동구매 | 거상커머스",
    seoDescription: "호주산 쿼키즈 마카다미아 바닐라 로스티드와 드라이 로스티드의 특징, 맛 비교, 패키지, 공동구매 제안가와 콘텐츠 아이디어를 확인하세요.",
    shipping: "무료배송",
    variants: [
      { composition: "바닐라 로스티드 120g × 6개", regularPrice: 75000, onlineLowestPrice: 54900, offerPrice: 44900 },
      { composition: "드라이 로스티드 120g × 6개", regularPrice: 75000, onlineLowestPrice: 54900, offerPrice: 44900 },
      { composition: "바닐라 3개 + 드라이 3개 혼합", regularPrice: 75000, onlineLowestPrice: 54900, offerPrice: 44900 },
      { composition: "바닐라 로스티드 120g × 10개", regularPrice: 125000, onlineLowestPrice: 86000, offerPrice: 69500 },
      { composition: "드라이 로스티드 120g × 10개", regularPrice: 125000, onlineLowestPrice: 86000, offerPrice: 69500 },
      { composition: "바닐라 5개 + 드라이 5개 혼합", regularPrice: 125000, onlineLowestPrice: 86000, offerPrice: 69500 },
    ],
    features: ["바닐라·드라이 2종", "120g 개별 패키지", "6개·10개 구성 선택 가능", "호주 원산지", "무료배송"],
    contentFields: ["간식·먹방", "육아·가족", "홈카페", "캠핑·여행", "호주 상품", "수입식품 리뷰", "직장인 간식"],
    recommendedChannels: ["Instagram", "TikTok", "YouTube", "Naver Blog"],
    contentIdeas: ["바닐라와 드라이 2종 비교", "홈카페 또는 사무실 간식 콘텐츠"],
    creatorTypes: ["간식·먹방·홈카페 콘텐츠를 만드는 크리에이터", "가족 일상, 캠핑·여행, 직장인 라이프를 다루는 크리에이터", "호주 상품을 자연스럽게 소개할 수 있는 크리에이터"],
    quokkiesDetail: {
      displayName: "쿼키즈 프리미엄 마카다미아",
      englishName: "QUOKKIES PREMIUM MACADAMIA",
      introduction: "호주산 마카다미아를 껍질째 담아 직접 열어 먹는 재미까지 더한 프리미엄 간식입니다.",
      heroImage: "/images/campaigns/quokkies-macadamia/quokkies-macadamia-hero.webp",
      images: { origin: "/images/campaigns/quokkies-macadamia/quokkies-macadamia-origin.webp", package: "/images/campaigns/quokkies-macadamia/quokkies-macadamia-package.webp", opener: "/images/campaigns/quokkies-macadamia/quokkies-macadamia-opener.webp", size: "/images/campaigns/quokkies-macadamia/quokkies-macadamia-size.webp" },
      productFacts: [{ label: "원산지", value: "호주" }, { label: "내용량", value: "1봉 120g" }, { label: "맛", value: "바닐라 로스티드 / 드라이 로스티드" }, { label: "포장", value: "지퍼형 산패 방지 패키지" }, { label: "특징", value: "껍질째 담은 마카다미아" }, { label: "이용 방법", value: "전용 오프너로 껍질을 열어 섭취" }, { label: "배송", value: "무료배송" }, { label: "캠페인 상태", value: "공동구매 제안 가능" }],
      highlights: [{ title: "호주산 마카다미아", description: "호주에서 생산된 마카다미아를 사용한 제품" }, { title: "두 가지 맛", description: "바닐라 로스티드와 드라이 로스티드 구성" }, { title: "직접 열어 먹는 재미", description: "전용 오프너로 껍질을 열어 먹는 체험형 간식" }, { title: "120g 지퍼 패키지", description: "보관하기 편리한 재밀봉형 패키지" }, { title: "쿼카 캐릭터 디자인", description: "숏폼과 가족 콘텐츠에 활용하기 좋은 밝은 패키지" }],
      flavors: [{ name: "바닐라 로스티드", color: "그린", description: "마카다미아의 고소한 맛에 바닐라 풍미를 더한 제품입니다.", ideas: ["달콤한 간식", "디저트와 커피 페어링", "가족 간식", "선물 추천", "패키지 언박싱"] }, { name: "드라이 로스티드", color: "오렌지", description: "마카다미아 본연의 고소한 풍미를 느낄 수 있도록 로스팅한 제품입니다.", ideas: ["담백한 견과 간식", "맥주·와인 안주", "캠핑 간식", "사무실 간식", "맛 비교 콘텐츠"] }],
      packageColors: ["그린·옐로", "오렌지·화이트"],
      originRegions: [{ english: "Bundaberg, Queensland", korean: "호주 퀸즐랜드주 번다버그" }, { english: "Byron Bay, New South Wales", korean: "호주 뉴사우스웨일스주 바이런베이" }],
      nutSize: { range: "24~26mm", comparison: "일반 제품 대비 약 5~10% 큰 크기", sourceNotice: "크기 및 알맹이 비율은 공급사가 제공한 상품자료를 기준으로 작성했으며 원물 특성상 개체별 차이가 있을 수 있습니다." },
      kernelRatio: "약 35%",
      packagePoints: ["수분 유입을 줄이는 재밀봉 구조", "빛의 영향을 줄이도록 설계된 불투명 패키지", "먹고 남은 제품을 보관하기 편한 지퍼형 포장", "두 가지 맛을 색상으로 쉽게 구분", "휴대와 선물에 적합한 패키지 디자인"],
      openerGuide: ["껍질의 절개된 틈을 확인합니다.", "전용 오프너를 틈에 넣습니다.", "오프너를 돌려 껍질을 열고 알맹이를 꺼냅니다."],
      comparison: [{ label: "원산지", value: "호주" }, { label: "크기", value: "공급 자료 기준 24~26mm" }, { label: "형태", value: "껍질째 담은 마카다미아" }, { label: "패키지", value: "지퍼형 불투명 패키지" }, { label: "오프너", value: "껍질 개봉용 전용 오프너" }, { label: "맛", value: "바닐라 로스티드 / 드라이 로스티드" }, { label: "콘텐츠 요소", value: "직접 열기, 시식, 두 가지 맛 비교" }],
      recommendations: ["견과류와 고소한 간식을 좋아하는 분", "직접 열어 먹는 재미있는 간식을 찾는 분", "캠핑·여행·사무실 간식을 찾는 분", "호주산 식품과 이색 간식에 관심 있는 분", "선물하기 좋은 패키지를 찾는 분", "아이와 함께 즐길 체험형 간식을 찾는 부모님"],
      allergyNotice: ["본 제품은 견과류인 마카다미아를 포함한 식품입니다.", "견과류 알레르기가 있는 사람은 섭취에 주의해야 합니다.", "원물 특성상 크기와 모양에 차이가 있을 수 있습니다.", "껍질과 전용 오프너 사용 시 손이 다치지 않도록 주의해 주세요.", "어린이가 오프너를 사용할 경우 보호자가 함께해 주세요.", "원재료, 소비기한, 보관방법과 제조·수입원 정보는 실제 제품 표시사항을 확인해 주세요.", "상세 표시사항은 공급사 확인 후 업데이트 예정입니다."],
      contentIdeas: ["껍질째 마카다미아 직접 열어보기", "바닐라와 드라이 로스티드 맛 비교", "알맹이 크기 측정 챌린지", "쿼카 캐릭터 패키지 언박싱", "커피·맥주·와인과 페어링", "캠핑과 여행용 간식", "아이와 함께 오프너 사용해보기", "호주에서 온 이색 간식 소개"],
      creatorTypes: ["푸드·먹방 크리에이터", "육아·가족 콘텐츠", "캠핑·여행 콘텐츠", "홈카페·커피 콘텐츠", "와인·맥주·안주 콘텐츠", "호주 여행 및 호주 생활 콘텐츠", "선물 추천 콘텐츠", "재미있는 숏폼 콘텐츠"],
      hooks: ["마카다미아를 망치 없이 이렇게 연다고요?", "초록색과 주황색, 어떤 맛이 더 맛있을까요?", "이렇게 큰 마카다미아는 처음 봤습니다.", "껍질을 직접 열어 먹는 호주 간식", "귀여운 쿼카가 들고 있는 진짜 마카다미아"],
      faqs: [{ question: "바닐라 로스티드와 드라이 로스티드는 어떻게 다른가요?", answer: "바닐라 로스티드는 마카다미아의 고소한 맛에 바닐라 풍미를 더한 제품이며, 드라이 로스티드는 마카다미아 본연의 고소한 풍미를 느끼기 좋게 로스팅한 제품입니다." }, { question: "한 봉의 내용량은 얼마인가요?", answer: "한 봉의 내용량은 120g입니다." }, { question: "마카다미아 껍질은 어떻게 여나요?", answer: "껍질의 절개된 틈에 전용 오프너를 넣고 천천히 돌려 껍질을 연 뒤 알맹이를 꺼냅니다." }, { question: "전용 오프너가 함께 제공되나요?", answer: "전용 오프너 제공 여부와 수량은 실제 공동구매 구성 협의 후 확정됩니다." }, { question: "견과류 알레르기가 있어도 먹을 수 있나요?", answer: "마카다미아는 견과류입니다. 견과류 알레르기가 있는 분은 섭취를 피하거나 제품 표시사항을 확인한 후 전문가와 상담해 주세요." }, { question: "맛을 섞어서 공동구매할 수 있나요?", answer: "현재 제안 자료에는 바닐라·드라이 혼합 구성이 포함되어 있습니다. 실제 맛 조합과 수량은 진행 조건을 협의한 뒤 확정합니다." }, { question: "상품 샘플과 콘텐츠 자료가 제공되나요?", answer: "샘플과 상품 자료의 제공 범위는 크리에이터 매칭 후 캠페인 조건에 따라 안내합니다." }, { question: "배송은 누가 담당하나요?", answer: "상품 공급과 소비자 택배 발송은 공급사가 담당하고, 거상커머스가 일정과 운영 커뮤니케이션을 지원합니다." }],
      supportItems: ["상품과 채널 적합성 확인", "맛과 판매 구성 협의", "캠페인 일정 조율", "콘텐츠 기획자료 안내", "공급 및 배송 커뮤니케이션", "판매 현황 확인 지원", "정산 일정 안내"],
      supportNote: "상품 공급과 택배 발송은 공급사가 담당하고, 거상커머스는 인플루언서 매칭, 캠페인 조율, 콘텐츠 안내 및 운영 커뮤니케이션을 지원합니다.",
      finalCta: { title: "재미있는 푸드 콘텐츠와 잘 맞는다면 제안을 받아보세요", description: "채널과 콘텐츠 성향을 검토한 후 맛 구성, 공동구매 조건과 진행 가능 일정을 안내해드립니다.", button: "쿼키즈 마카다미아 제안받기" }
    },
  },
];

export const categoryFilters = ["전체", "건강식품", "식품", "뷰티", "생활용품", "모집 중", "제안 가능", "준비 중", "종료"] as const;

export const won = (value: number) => `${value.toLocaleString("ko-KR")}원`;
export const discountRate = (regularPrice: number, offerPrice: number) => Math.round((1 - offerPrice / regularPrice) * 100);
export const getCampaign = (slug: string) => campaigns.find((campaign) => campaign.slug === slug);
