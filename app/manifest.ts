import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "거상커머스",
    short_name: "거상커머스",
    description: "브랜드와 인플루언서를 연결하는 공동구매 플랫폼",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0265ca",
    icons: [
      {
        src: "/images/brand/geosang-commerce-logo.png",
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
