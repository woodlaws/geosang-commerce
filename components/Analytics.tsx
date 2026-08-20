"use client";

import Script from "next/script";

const configuredId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
const measurementId = /^G-[A-Z0-9]+$/.test(configuredId) ? configuredId : "";

export function Analytics() {
  if (!measurementId) return null;
  return <>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
    <Script id="ga4-config" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', '${measurementId}', { anonymize_ip: true });
    `}</Script>
  </>;
}
