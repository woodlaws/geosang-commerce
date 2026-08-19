import Image from "next/image";
import Link from "next/link";
import { Campaign, discountRate, won } from "@/data/campaigns";

export function CampaignCard({ campaign }: { campaign: Campaign }) {
  const lead = campaign.variants[0];
  return <article className="campaign-card">
    <div className={`campaign-image ${campaign.image ? "" : "placeholder"}`}>
      <span className={`status ${campaign.status === "모집 중" ? "live" : "ready"}`}>{campaign.status}</span>
      {campaign.image ? <Image src={campaign.image} alt={campaign.imageAlt || campaign.name} width={680} height={560} className="contain-image" /> : <div className="placeholder-art"><span>Q</span><strong>QUIRKIES</strong><small>상품 이미지 준비 중</small></div>}
    </div>
    <div className="campaign-body"><span className="brand-label">{campaign.brand}</span><h3>{campaign.name}</h3><p className="composition">{lead.composition}</p>
      <div className="price-row"><span className="discount">{discountRate(lead.regularPrice, lead.offerPrice)}%</span><strong>{won(lead.offerPrice)}</strong><del>{won(lead.regularPrice)}</del></div>
      <div className="tag-row"><span>{campaign.shipping}</span><span>{campaign.category}</span></div>
      <div className="card-actions"><Link href={`/campaigns/${campaign.slug}`} className="outline-button">상세보기</Link><Link href={`/creators?campaign=${campaign.slug}#apply`} className="gradient-button">이 상품 제안받기</Link></div>
    </div>
  </article>;
}
