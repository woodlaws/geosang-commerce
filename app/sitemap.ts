import type { MetadataRoute } from "next";
import { campaigns } from "@/data/campaigns";
import { siteConfig } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap { const pages=["","/campaigns","/brands","/creators","/process","/about","/faq","/privacy","/terms"]; return [...pages.map(path=>({url:`${siteConfig.url}${path}`,changeFrequency:path===""?"weekly" as const:"monthly" as const,priority:path===""?1:.7})),...campaigns.map(x=>({url:`${siteConfig.url}/campaigns/${x.slug}`,changeFrequency:"weekly" as const,priority:.8}))]; }
