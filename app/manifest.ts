import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "거상커머스",
    short_name: "거상커머스",
    description: "브랜드와 인플루언서를 연결하는 공동구매 플랫폼",
    id: absoluteUrl("/"),
    start_url: absoluteUrl("/"),
    scope: absoluteUrl("/"),
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0265ca",
    icons: [
      {
        src: absoluteUrl("/images/brand/geosang-commerce-logo.png"),
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
