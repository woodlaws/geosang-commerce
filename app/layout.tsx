import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { MobilePageCTA } from "@/components/MobilePageCTA";
import { absoluteUrl, siteConfig } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "호주 상품 공동구매 플랫폼 | 거상커머스", template: "%s | 거상커머스" },
  description: siteConfig.description,
  keywords: ["호주 상품 공동구매", "인플루언서 공동구매", "공동구매 플랫폼", "호주 프리미엄 상품", "브랜드 공동구매 입점", "거상커머스"],
  alternates: { canonical: absoluteUrl("/") },
  openGraph: { title: "호주 상품 공동구매 플랫폼 | 거상커머스", description: siteConfig.description, url: absoluteUrl("/"), siteName: siteConfig.name, locale: "ko_KR", type: "website", images: [{ url: absoluteUrl("/og.png"), width: 1200, height: 630, alt: "거상커머스 호주 프리미엄 상품 컬렉션" }] },
  twitter: { card: "summary_large_image", title: "호주 상품 공동구매 플랫폼 | 거상커머스", description: siteConfig.description, images: [absoluteUrl("/og.png")] },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: absoluteUrl(siteConfig.logo), type: "image/png" }],
    shortcut: absoluteUrl(siteConfig.logo),
    apple: [{ url: absoluteUrl(siteConfig.logo), type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${siteConfig.url}/#organization`, name: siteConfig.name, alternateName: siteConfig.englishName, description: siteConfig.serviceDescription, url: absoluteUrl("/"), logo: absoluteUrl(siteConfig.logo), sameAs: [siteConfig.instagram, siteConfig.youtube, siteConfig.tiktok].filter(Boolean), parentOrganization: { "@type": "Organization", name: "거상마케팅센터" } },
      { "@type": "WebSite", "@id": `${siteConfig.url}/#website`, name: siteConfig.name, url: absoluteUrl("/"), publisher: { "@id": `${siteConfig.url}/#organization` }, inLanguage: "ko-KR" },
    ],
  };
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} antialiased`}><Analytics /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><Header />{children}<Footer /><MobilePageCTA /></body>
    </html>
  );
}
