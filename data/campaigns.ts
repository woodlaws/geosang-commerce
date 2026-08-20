export type CampaignStatus = "모집 중" | "제안 가능" | "준비 중" | "종료";

export type CampaignVariant = {
  composition: string;
  regularPrice: number;
  onlineLowestPrice?: number;
  offerPrice: number;
};

export type CampaignDetailContent = {
  englishName: string;
  introduction: string;
  productFacts: { label: string; value: string }[];
  highlights: { title: string; description: string }[];
  routine: { image: string; title: string; description: string; points: string[] };
  comparison: { image: string; title: string; rows: { label: string; first: string; second: string }[] };
  mgoGuide: { title: string; description: string; emphasis: string; rows: { mgo: string; umf: string; grade: string }[]; note: string };
  originStory: { images: { src: string; alt: string }[]; title: string; description: string; cards: string[] };
  packageStory: { image: string; title: string; cards: { title: string; description: string }[] };
  contentIdeas: string[];
  hooks: string[];
  faqs: { question: string; answer: string }[];
  supportNote: string;
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
};

export const campaigns: Campaign[] = [
  {
    slug: "manuka-royal-jelly-mgo-300",
    brand: "GOODAY HONEY",
    name: "마누카꿀 로열젤리 MGO 300+",
    category: "건강식품",
    status: "모집 중",
    image: "/products/manuka-royal-jelly.png",
    imageAlt: "마누카꿀 로열젤리 MGO 300+ 패키지",
    shipping: "무료배송",
    variants: [
      { composition: "1개 (12g × 10포)", regularPrice: 38000, offerPrice: 28900 },
      { composition: "3개 (12g × 30포)", regularPrice: 114000, offerPrice: 76500 },
      { composition: "6개 (12g × 60포)", regularPrice: 228000, offerPrice: 139000 },
      { composition: "9개 (12g × 90포)", regularPrice: 342000, offerPrice: 205900 },
    ],
    features: ["스틱형 개별 포장", "호주 생산 제품", "여러 수량 구성 선택 가능"],
    contentFields: ["푸드 라이프", "일상 루틴", "선물 추천"],
    recommendedChannels: ["Instagram", "Shorts", "Naver Blog"],
    contentIdeas: ["아침 일상 속 섭취 루틴", "부모님 또는 지인 선물 구성 소개"],
    creatorTypes: ["식품과 라이프스타일 콘텐츠를 만드는 크리에이터", "제품 사용 장면을 자연스럽게 보여줄 수 있는 크리에이터"],
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
    image: "/products/propolis-spray.png",
    imageAlt: "굿데이 프로폴리스 스프레이 패키지",
    shipping: "무료배송",
    variants: [
      { composition: "1개", regularPrice: 30000, offerPrice: 19800 },
      { composition: "4개 + 선물백 증정", regularPrice: 120000, offerPrice: 71900 },
      { composition: "7개 + 선물백 2개 증정", regularPrice: 210000, offerPrice: 118500 },
    ],
    features: ["스프레이 타입", "휴대 가능한 패키지", "선물백 포함 구성 선택 가능"],
    contentFields: ["라이프스타일", "여행·휴대 아이템", "선물 추천"],
    recommendedChannels: ["Instagram", "TikTok", "Shorts"],
    contentIdeas: ["가방 속 휴대 아이템", "여행 준비물 소개"],
    creatorTypes: ["일상 속 제품 활용을 보여주는 크리에이터", "간결한 숏폼 제품 소개에 강한 크리에이터"],
  },
  {
    slug: "quokkies-macadamia",
    brand: "QUOKKIES",
    name: "쿼키즈 마카다미아",
    category: "식품",
    status: "제안 가능",
    origin: "호주",
    image: "/products/quokkies-macadamia.png",
    imageAlt: "쿼키즈 마카다미아 바닐라 로스티드와 드라이 로스티드 패키지",
    imageTreatment: "editorial",
    searchKeywords: ["쿼키즈", "마카다미아", "바닐라", "드라이", "바닐라 로스티드", "드라이 로스티드", "호주", "간식"],
    flavors: [
      { name: "바닐라 로스티드", description: "초록색 패키지의 바닐라 로스티드 마카다미아" },
      { name: "드라이 로스티드", description: "주황색 패키지의 드라이 로스티드 마카다미아" },
    ],
    seoTitle: "쿼키즈 마카다미아 공동구매 인플루언서 모집 | 거상커머스",
    seoDescription: "호주 쿼키즈 마카다미아 바닐라 로스티드와 드라이 로스티드 공동구매를 진행할 인플루언서를 모집합니다. 상품 공급과 무료배송, 캠페인 운영을 지원합니다.",
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
    contentFields: ["간식·먹방", "육아·가족", "홈카페", "캠핑·여행", "호주 상품", "건강한 라이프스타일", "직장인 간식"],
    recommendedChannels: ["Instagram", "TikTok", "YouTube", "Naver Blog"],
    contentIdeas: ["바닐라와 드라이 2종 비교", "홈카페 또는 사무실 간식 콘텐츠"],
    creatorTypes: ["간식·먹방·홈카페 콘텐츠를 만드는 크리에이터", "가족 일상, 캠핑·여행, 직장인 라이프를 다루는 크리에이터", "호주 상품을 자연스럽게 소개할 수 있는 크리에이터"],
  },
];

export const categoryFilters = ["전체", "건강식품", "식품", "뷰티", "생활용품", "모집 중", "제안 가능", "준비 중", "종료"] as const;

export const won = (value: number) => `${value.toLocaleString("ko-KR")}원`;
export const discountRate = (regularPrice: number, offerPrice: number) => Math.round((1 - offerPrice / regularPrice) * 100);
export const getCampaign = (slug: string) => campaigns.find((campaign) => campaign.slug === slug);
