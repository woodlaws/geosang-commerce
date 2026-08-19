import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "거상커머스 | 인플루언서 공동구매 플랫폼", template: "%s | 거상커머스" },
  description: siteConfig.description,
  keywords: ["인플루언서 공동구매", "공동구매 플랫폼", "브랜드 공동구매 입점", "공동구매 대행", "인플루언서 마케팅", "거상마케팅센터"],
  alternates: { canonical: "/" },
  openGraph: { title: "거상커머스 | 인플루언서 공동구매 플랫폼", description: siteConfig.description, url: "/", siteName: siteConfig.name, locale: "ko_KR", type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "거상커머스 · GEOSANG COMMERCE" }] },
  twitter: { card: "summary_large_image", title: "거상커머스 | 인플루언서 공동구매 플랫폼", description: siteConfig.description, images: ["/og.png"] },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: siteConfig.logo, type: "image/png" }],
    shortcut: siteConfig.logo,
    apple: [{ url: siteConfig.logo, type: "image/png" }],
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
      { "@type": "Organization", "@id": `${siteConfig.url}/#organization`, name: siteConfig.name, alternateName: siteConfig.englishName, description: siteConfig.serviceDescription, url: siteConfig.url, logo: new URL(siteConfig.logo, siteConfig.url).toString(), parentOrganization: { "@type": "Organization", name: "거상마케팅센터" } },
      { "@type": "WebSite", "@id": `${siteConfig.url}/#website`, name: siteConfig.name, url: siteConfig.url, publisher: { "@id": `${siteConfig.url}/#organization` }, inLanguage: "ko-KR" },
    ],
  };
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} antialiased`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><Header />{children}<Footer /><div className="mobile-bottom-cta"><a href="/brands#inquiry">입점 문의</a><a href="/creators#apply">인플루언서 지원</a></div></body>
    </html>
  );
}
