export type FAQCategory = "creator" | "operation" | "sales" | "brand";

export type FAQItem = {
  id: string;
  category: FAQCategory;
  question: string;
  answer: string;
};

export const faqCategories: { id: "all" | FAQCategory; label: string }[] = [
  { id: "all", label: "전체" },
  { id: "creator", label: "인플루언서 지원" },
  { id: "operation", label: "공동구매 운영" },
  { id: "sales", label: "판매·배송·정산" },
  { id: "brand", label: "브랜드 입점" },
];

export const faqItems: FAQItem[] = [
  { id: "creator-followers", category: "creator", question: "팔로워 수가 많아야 지원할 수 있나요?", answer: "팔로워 수만으로 참여 여부를 결정하지 않습니다. 상품과 콘텐츠 분야의 적합성, 채널 운영의 진정성, 콘텐츠 품질과 팔로워 반응을 함께 확인합니다. 팔로워 규모가 크지 않아도 특정 분야에서 꾸준히 소통하는 크리에이터라면 지원할 수 있습니다." },
  { id: "creator-first-campaign", category: "creator", question: "공동구매 경험이 없어도 지원할 수 있나요?", answer: "네, 공동구매 경험이 없어도 지원할 수 있습니다. 처음 진행하는 인플루언서에게는 캠페인 일정, 상품 정보, 콘텐츠 가이드와 진행 절차를 안내합니다. 다만 상품을 충분히 이해하고 약속된 일정과 표시 기준을 지킬 수 있어야 합니다." },
  { id: "creator-channels", category: "creator", question: "어떤 SNS 채널로 참여할 수 있나요?", answer: "인스타그램, 틱톡, 유튜브, 유튜브 쇼츠, 네이버 블로그 등 콘텐츠를 통해 고객과 소통하는 채널이라면 지원할 수 있습니다. 상품 특성과 콘텐츠 형식에 따라 적합한 채널을 검토합니다." },
  { id: "creator-multiple-channels", category: "creator", question: "여러 채널을 함께 운영하면 모두 등록해야 하나요?", answer: "가능하면 실제로 활동 중인 채널을 모두 입력해 주세요. 여러 채널을 함께 운영하면 상품에 적합한 콘텐츠 형식과 캠페인 운영 방법을 검토하는 데 도움이 됩니다." },
  { id: "creator-approval", category: "creator", question: "지원하면 바로 공동구매를 진행할 수 있나요?", answer: "지원 즉시 진행이 확정되는 것은 아닙니다. 신청 내용을 확인한 뒤 채널과 상품의 적합성, 캠페인 일정, 공급 가능 수량 등을 검토합니다. 적합한 캠페인이 있을 경우 개별적으로 연락해 조건을 안내합니다." },
  { id: "creator-product-choice", category: "creator", question: "원하는 상품을 직접 선택할 수 있나요?", answer: "현재 모집 중인 캠페인에서 관심 상품을 선택할 수 있습니다. 다만 최종 매칭은 상품 특성, 채널 콘텐츠, 주요 팔로워층과 진행 일정을 함께 검토해 결정합니다." },
  { id: "creator-multiple-campaigns", category: "creator", question: "여러 상품이나 캠페인에 동시에 지원할 수 있나요?", answer: "여러 상품에 관심을 표시할 수 있습니다. 다만 콘텐츠 일정과 기존 광고·공동구매 진행 상황을 고려해 실제 진행 순서를 협의합니다." },
  { id: "operation-samples", category: "operation", question: "제품 샘플은 제공되나요?", answer: "제품 체험이 필요한 캠페인은 샘플 제공 여부와 수량을 브랜드 또는 공급사와 협의합니다. 모든 캠페인에 무료 샘플이 제공되는 것은 아니며, 제공 조건은 진행 확정 전에 안내합니다." },
  { id: "operation-content-format", category: "operation", question: "콘텐츠는 어떤 형식으로 제작하나요?", answer: "상품과 채널에 따라 릴스, 숏폼, 피드, 스토리, 라이브, 유튜브 영상 또는 블로그 콘텐츠 등으로 진행할 수 있습니다. 캠페인 시작 전 필수 포함 정보, 표현 기준, 업로드 일정과 CTA를 안내합니다." },
  { id: "operation-review", category: "operation", question: "콘텐츠를 업로드하기 전에 검수를 받아야 하나요?", answer: "상품 정보, 가격, 광고 표시와 법적 필수 문구의 오류를 방지하기 위해 사전 확인 절차가 진행될 수 있습니다. 검수 범위와 일정은 캠페인별로 안내하며, 인플루언서 고유의 콘텐츠 스타일은 최대한 존중합니다." },
  { id: "operation-disclosure", category: "operation", question: "광고 또는 협찬 표시는 어떻게 해야 하나요?", answer: "공동구매 및 제품 제공 사실은 관련 법령과 플랫폼 정책에 맞게 명확히 표시해야 합니다. 캠페인 진행 시 필요한 광고·협찬 표시 기준을 안내하며, 인플루언서는 해당 기준을 콘텐츠에 반영해야 합니다." },
  { id: "operation-duration", category: "operation", question: "공동구매 기간은 얼마나 되나요?", answer: "판매 기간은 상품, 재고, 콘텐츠 일정에 따라 달라집니다. 구체적인 오픈일과 마감일은 브랜드·인플루언서·거상커머스가 협의해 확정합니다." },
  { id: "operation-low-sales", category: "operation", question: "판매가 기대보다 적으면 불이익이 있나요?", answer: "사전에 보장 판매량을 별도로 합의하지 않은 경우 단순히 판매량이 적다는 이유만으로 불이익을 적용하지 않습니다. 다만 콘텐츠 업로드, 광고 표시, 일정 준수 등 합의된 기본 의무는 지켜야 합니다." },
  { id: "sales-inventory", category: "sales", question: "인플루언서가 재고를 직접 구매해야 하나요?", answer: "현재 안내된 캠페인은 일반적으로 공급사가 상품 공급과 소비자 배송을 담당하는 구조입니다. 인플루언서가 판매 재고를 직접 보유하는 방식이 필요한 경우에는 진행 전에 별도로 안내하고 협의합니다." },
  { id: "sales-order-payment", category: "sales", question: "주문과 결제는 어디에서 이루어지나요?", answer: "주문과 결제는 캠페인별로 지정된 공동구매 판매 링크 또는 판매 시스템에서 진행됩니다. 최종 판매 링크와 이용 방법은 캠페인 시작 전에 안내합니다." },
  { id: "sales-shipping", category: "sales", question: "배송은 누가 담당하나요?", answer: "기본적으로 상품을 보유한 브랜드 또는 공급사가 주문 확인과 택배 발송을 담당합니다. 구체적인 배송 주체, 배송비와 출고 일정은 캠페인 조건에 따라 달라질 수 있습니다." },
  { id: "sales-customer-service", category: "sales", question: "반품·교환·고객문의는 누가 처리하나요?", answer: "상품의 배송, 오배송, 파손, 반품과 교환 등 고객 응대의 1차 담당은 캠페인별 운영 구조에 따라 정합니다. 인플루언서에게 문의가 접수되면 지정된 고객센터 또는 담당자에게 전달할 수 있도록 연락 체계를 안내합니다." },
  { id: "sales-revenue", category: "sales", question: "판매 수익은 어떻게 결정되나요?", answer: "판매 수익은 상품 공급가, 공동구매 판매가, 결제·플랫폼 비용, 배송 조건과 역할 범위를 검토해 캠페인별로 협의합니다. 최종 수익 배분 조건은 판매 시작 전에 안내하고 합의합니다." },
  { id: "sales-settlement", category: "sales", question: "정산은 언제 이루어지나요?", answer: "정산 시점은 판매 마감, 결제 확정, 취소·반품 처리 기간과 판매 시스템에 따라 달라질 수 있습니다. 정확한 정산 기준일과 지급 방식은 캠페인 시작 전에 서면으로 안내합니다." },
  { id: "sales-dashboard", category: "sales", question: "판매 현황을 확인할 수 있나요?", answer: "캠페인 운영 방식에 따라 판매 현황을 확인할 수 있는 화면, 정기 집계 자료 또는 담당자 안내를 제공합니다. 확인 방법과 제공 주기는 캠페인별로 안내합니다." },
  { id: "brand-eligibility", category: "brand", question: "어떤 브랜드가 입점할 수 있나요?", answer: "안정적인 상품 공급과 소비자 배송이 가능하고, 정확한 상품 정보와 판매 조건을 제공할 수 있는 브랜드 또는 공급사가 신청할 수 있습니다. 식품, 건강식품, 뷰티, 생활용품 등 다양한 카테고리를 검토합니다." },
  { id: "brand-approval", category: "brand", question: "신청하면 모든 상품이 공동구매로 진행되나요?", answer: "입점 신청만으로 캠페인이 확정되지는 않습니다. 상품 경쟁력, 가격 조건, 재고, 배송 시스템, 콘텐츠 적합성과 인플루언서 매칭 가능성을 검토한 후 진행 여부를 안내합니다." },
  { id: "brand-responsibilities", category: "brand", question: "브랜드는 어떤 업무를 담당하나요?", answer: "브랜드 또는 공급사는 정확한 상품 정보, 판매 가능한 재고, 공동구매 조건을 제공하고 소비자 주문 상품을 출고합니다. 거상커머스는 상품 검토, 인플루언서 모집·매칭, 일정 조율과 운영 커뮤니케이션을 지원합니다." },
  { id: "brand-costs", category: "brand", question: "입점비나 공동구매 진행 비용이 있나요?", answer: "상품과 요청 업무의 범위에 따라 비용 구조가 달라질 수 있습니다. 기본 중계, 콘텐츠 제작, 광고 집행, 인플루언서 섭외 등 필요한 업무를 확인한 뒤 진행 전에 견적과 조건을 안내합니다." },
  { id: "brand-pricing", category: "brand", question: "판매 가격은 어떻게 정하나요?", answer: "정상 판매가, 온라인 최저가, 공급가, 배송비와 인플루언서 혜택을 함께 검토해 경쟁력 있는 공동구매 가격을 협의합니다. 기존 판매 채널의 가격 정책을 훼손하지 않도록 사전에 확인합니다." },
  { id: "brand-creator-choice", category: "brand", question: "인플루언서를 브랜드가 직접 선택할 수 있나요?", answer: "거상커머스가 상품과 적합한 인플루언서 후보를 검토해 제안할 수 있으며, 브랜드와 협의해 최종 진행 대상을 정합니다. 특정 인플루언서를 요청하는 경우 섭외 가능 여부를 별도로 확인합니다." },
  { id: "brand-fulfillment", category: "brand", question: "배송과 고객응대 시스템이 꼭 있어야 하나요?", answer: "안정적인 출고와 고객응대가 가능한 브랜드를 우선 검토합니다. 자체 배송이 어려운 경우에는 위탁배송 가능 여부와 필요한 운영 조건을 상담 단계에서 협의합니다." },
  { id: "brand-imported-products", category: "brand", question: "해외 브랜드나 수입상품도 입점할 수 있나요?", answer: "국내 판매에 필요한 상품 정보와 관련 인증·표시 요건, 재고와 배송 체계가 준비되어 있다면 검토할 수 있습니다. 상품 카테고리에 따라 필요한 서류와 조건이 달라질 수 있습니다." },
];

export const featuredFaqs = [
  faqItems.find((item) => item.id === "creator-followers")!,
  faqItems.find((item) => item.id === "sales-inventory")!,
  faqItems.find((item) => item.id === "sales-revenue")!,
  faqItems.find((item) => item.id === "brand-responsibilities")!,
];
