import { CampaignExplorer } from "@/components/CampaignExplorer";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/data/site";
export const metadata = createPageMetadata("공동구매 캠페인", "거상커머스에서 현재 제안 가능한 인플루언서 공동구매 상품과 캠페인을 확인하세요.", "/campaigns");
export default function CampaignsPage() { return <main className="campaigns-page"><PageHero eyebrow="CREATOR CAMPAIGNS" title="내 콘텐츠와 팬에게 맞는 상품을 찾아보세요" description="검토된 브랜드 상품과 정확한 공동구매 제안 조건을 피드처럼 한곳에서 확인할 수 있습니다."/><section className="shell section-gap"><CampaignExplorer /></section></main>; }
