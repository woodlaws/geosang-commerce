"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function CampaignAnalytics({ slug, name }: { slug: string; name: string }) {
  useEffect(() => {
    trackEvent("view_campaign", { campaign_slug: slug, campaign_name: name });
  }, [slug, name]);
  return null;
}
