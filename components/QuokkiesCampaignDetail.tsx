import Image from "next/image";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Campaign } from "@/data/campaigns";
import { CampaignSupport, CreatorContentIdeas, FlavorComparison, ImageTextSection, PriceOptions, ProductCta, ProductFaq, ProductHero, ProductHighlights, ProductInfoTable } from "@/components/campaign-detail/ProductSections";

export function QuokkiesCampaignDetail({ item }: { item: Campaign }) {
  const detail = item.quokkiesDetail;
  if (!detail) return null;
  const applyHref = `/creators?campaign=${item.slug}#apply`;
  return <main className="quokkies-page">
    <ProductHero item={item} image={detail.heroImage} title={detail.displayName} englishName={detail.englishName} introduction={detail.introduction} facts={detail.productFacts} notice="공동구매 제안 기준가이며 맛 구성, 수량, 오프너 제공 여부와 진행 조건은 협의 후 확정됩니다." href={applyHref} />
    <ProductHighlights title="한눈에 보는 상품 포인트" items={detail.highlights} note="24~26mm, 알맹이 비율 약 35%, 호주산 상위 5% 크기 기준은 공급사가 제공한 공식 상품자료를 바탕으로 정리했습니다. 원물 특성상 개체별 차이가 있을 수 있습니다." />
    <FlavorComparison flavors={detail.flavors} />
    <ImageTextSection image={detail.images.origin} imageAlt="쿼키즈 마카다미아 생산 지역인 번다버그와 바이런베이를 표시한 호주 지도" eyebrow="FROM AUSTRALIA" title="마카다미아의 고장 호주에서 왔습니다"><p>쿼키즈는 호주에서 생산된 마카다미아를 사용합니다. 호주 자연과 원산지 이야기는 제품의 신뢰와 차별점을 전달하는 콘텐츠 소재로 활용할 수 있습니다.</p><div className="quokkies-region-list">{detail.originRegions.map((region) => <div key={region.english}><strong>{region.english}</strong><span>{region.korean}</span></div>)}</div></ImageTextSection>
    <section className="quokkies-green quokkies-section"><div className="shell quokkies-size-grid"><div><span className="quokkies-kicker">PREMIUM SIZE</span><h2>눈으로 확인되는 큼직한 마카다미아</h2><p>껍질을 열었을 때 보이는 큼직한 알맹이가 제품의 시각적 만족감과 콘텐츠 재미를 높여줍니다.</p><div className="quokkies-size-cards"><article><span>SIZE</span><strong>{detail.nutSize.range}</strong><p>{detail.nutSize.comparison}</p></article><article><span>KERNEL RATIO</span><strong>{detail.kernelRatio}</strong><p>공급 자료상 호주산 상위 5% 크기 기준</p></article></div><p className="quokkies-source-notice">{detail.nutSize.sourceNotice}</p></div><Image src={detail.images.size} alt="일반 마카다미아와 쿼키즈 마카다미아 크기를 비교한 공급사 상품자료" width={900} height={900} sizes="(max-width: 900px) 100vw, 48vw" /></div></section>
    <ImageTextSection image={detail.images.opener} imageAlt="전용 오프너를 마카다미아 껍질 틈에 넣어 여는 모습" eyebrow="HOW TO OPEN" title="오프너로 직접 열어 먹는 재미" reverse tone="orange"><p>단순히 먹는 간식을 넘어 껍질을 직접 여는 체험이 언박싱과 시식 콘텐츠의 시각적인 장면이 됩니다.</p><ol className="quokkies-opener-steps">{detail.openerGuide.map((step, index) => <li key={step}><span>{index + 1}</span>{step}</li>)}</ol><ul><li>오프너를 사용할 때 손가락이 다치지 않도록 주의합니다.</li><li>어린이가 사용할 경우 보호자가 함께해 주세요.</li><li>마카다미아 껍질은 식용이 아닙니다.</li><li>견과류 알레르기가 있는 사람은 섭취에 주의해야 합니다.</li></ul><p className="quokkies-opener-note">전용 오프너 제공 여부와 수량은 실제 공동구매 구성 협의 후 확정됩니다.</p></ImageTextSection>
    <ImageTextSection image={detail.images.package} imageAlt="초록색과 주황색 쿼키즈 마카다미아 지퍼형 불투명 패키지" eyebrow="ZIPPER PACKAGE" title="신선한 보관을 고려한 지퍼 패키지" tone="cream"><p>패키지 기능은 보관을 돕고 외부 환경의 영향을 줄이도록 설계된 요소로 안내합니다.</p><ul>{detail.packagePoints.map((point) => <li key={point}>{point}</li>)}</ul><div className="quokkies-package-colors">{detail.packageColors.map((color) => <span key={color}>{color}</span>)}</div></ImageTextSection>
    <ProductInfoTable title="쿼키즈 마카다미아의 차별점" rows={detail.comparison} />
    <section className="quokkies-cream quokkies-section"><div className="shell"><div className="quokkies-section-head"><span>RECOMMEND</span><h2>이런 분들께 제안하기 좋습니다</h2></div><div className="quokkies-recommend-grid">{detail.recommendations.map((recommendation, index) => <article key={recommendation}><span>{String(index + 1).padStart(2, "0")}</span><p>{recommendation}</p></article>)}</div><div className="quokkies-caution"><h3>구매 전 확인해 주세요</h3><ul>{detail.allergyNotice.map((notice) => <li key={notice}>{notice}</li>)}</ul></div></div></section>
    <CreatorContentIdeas ideas={detail.contentIdeas} creators={detail.creatorTypes} hooks={detail.hooks} />
    <PriceOptions item={item} note="가격은 공동구매 제안 기준이며 맛 조합, 수량, 전용 오프너 제공 수량과 세부 조건은 협의 후 확정됩니다." />
    <CampaignSupport items={detail.supportItems} note={detail.supportNote} />
    <section className="quokkies-green quokkies-section"><div className="shell"><div className="quokkies-section-head light"><span>PROCESS</span><h2>공동구매 진행 과정</h2></div><ProcessTimeline /></div></section>
    <ProductFaq items={detail.faqs} />
    <ProductCta item={item} title={detail.finalCta.title} description={detail.finalCta.description} button={detail.finalCta.button} href={applyHref} />
  </main>;
}
