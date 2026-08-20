import Image from "next/image";
import Link from "next/link";
import { Campaign, discountRate, won } from "@/data/campaigns";
import { TrackedLink } from "@/components/TrackedLink";

export function CampaignCard({ campaign }: { campaign: Campaign }) {
  const lead = campaign.variants[0];
  const isActive = campaign.status === "모집 중" || campaign.status === "제안 가능";
  return <article className="campaign-card">
    <div className={`campaign-image ${campaign.image ? campaign.imageTreatment || "product" : "placeholder"}`}>
      <span className={`status ${isActive ? "live" : "ready"}`}>{campaign.status === "제안 가능" ? "공동구매 제안 가능" : campaign.status}</span>
      {campaign.image ? <Image src={campaign.image} alt={campaign.imageAlt || campaign.name} width={680} height={560} className="contain-image" /> : <div className="placeholder-art"><span>Q</span><strong>QUOKKIES</strong><small>상품 이미지 준비 중</small></div>}
    </div>
    <div className="campaign-body"><span className="brand-label">{campaign.brand}</span><h3>{campaign.name}</h3>{campaign.origin && <p className="campaign-meta">원산지 {campaign.origin} · {campaign.flavors?.map((flavor) => flavor.name).join(" / ")}</p>}<p className="composition">대표 구성 · {lead.composition}</p>
      <div className="price-row"><span className="discount">{discountRate(lead.regularPrice, lead.offerPrice)}%</span><strong>{won(lead.offerPrice)}</strong><del>{won(lead.regularPrice)}</del></div>
      <div className="tag-row"><span>{campaign.shipping}</span><span>{campaign.category}</span></div>
      <div className="card-actions"><Link href={`/campaigns/${campaign.slug}`} className="outline-button">상품 자세히 보기</Link><TrackedLink href={`/creators?campaign=${campaign.slug}#apply`} analyticsEvent="click_creator_apply" analyticsData={{campaign_slug:campaign.slug}} className="gradient-button">이 상품 제안받기</TrackedLink></div>
    </div>
  </article>;
}
