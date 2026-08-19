export type CampaignStatus = "모집 중" | "제안 가능" | "준비 중" | "종료";

export type CampaignVariant = {
  composition: string;
  regularPrice: number;
  onlineLowestPrice?: number;
  offerPrice: number;
};

export type Campaign = {
  slug: string;
  brand: string;
  name: string;
  category: "건강식품" | "식품" | "뷰티" | "생활용품";
  status: CampaignStatus;
  image?: string;
  imageAlt?: string;
  imageTreatment?: "product" | "editorial";
  origin?: string;
  searchKeywords?: string[];
  flavors?: { name: string; description: string }[];
  seoTitle?: string;
  seoDescription?: string;
  shipping: "무료배송" | "배송비 별도";
  variants: CampaignVariant[];
  features: string[];
  contentFields: string[];
  creatorTypes: string[];
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
    creatorTypes: ["식품과 라이프스타일 콘텐츠를 만드는 크리에이터", "제품 사용 장면을 자연스럽게 보여줄 수 있는 크리에이터"],
  },
  {
    slug: "manuka-royal-jelly-mgo-800",
    brand: "GOODAY HONEY",
    name: "마누카꿀 로열젤리 MGO 800+",
    category: "건강식품",
    status: "준비 중",
    image: "/products/manuka-royal-jelly.png",
    imageAlt: "굿데이허니 마누카꿀 로열젤리 대표 이미지",
    shipping: "무료배송",
    variants: [
      { composition: "1개 (12g × 10포)", regularPrice: 63000, offerPrice: 50900 },
      { composition: "3개 (12g × 30포)", regularPrice: 189000, offerPrice: 141900 },
      { composition: "6개 (12g × 60포)", regularPrice: 378000, offerPrice: 268500 },
      { composition: "9개 (12g × 90포)", regularPrice: 567000, offerPrice: 372900 },
    ],
    features: ["스틱형 개별 포장", "호주 생산 제품", "여러 수량 구성 선택 가능"],
    contentFields: ["푸드 라이프", "프리미엄 선물", "일상 루틴"],
    creatorTypes: ["프리미엄 식품을 소개하는 크리에이터", "신뢰도 높은 제품 설명형 콘텐츠에 강한 크리에이터"],
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
    seoTitle: "쿼키즈 마카다미아 공동구매 인플루언서 모집 | 거상 크리에이터 커머스",
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
    creatorTypes: ["간식·먹방·홈카페 콘텐츠를 만드는 크리에이터", "가족 일상, 캠핑·여행, 직장인 라이프를 다루는 크리에이터", "호주 상품을 자연스럽게 소개할 수 있는 크리에이터"],
  },
];

export const categoryFilters = ["전체", "건강식품", "식품", "뷰티", "생활용품", "모집 중", "제안 가능", "준비 중", "종료"] as const;

export const won = (value: number) => `${value.toLocaleString("ko-KR")}원`;
export const discountRate = (regularPrice: number, offerPrice: number) => Math.round((1 - offerPrice / regularPrice) * 100);
export const getCampaign = (slug: string) => campaigns.find((campaign) => campaign.slug === slug);
