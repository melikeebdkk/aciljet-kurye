import Head from "next/head";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import Script from "next/script";
import { PHONE_NUMBER, SITE_NAME, SITE_URL } from "@/components/Seo";

export default function MyApp({ Component, pageProps }: AppProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    telephone: PHONE_NUMBER,
    image: `${SITE_URL}/aciljet-logo-selected.webp`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Beykoz",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    areaServed: ["İstanbul", "Anadolu Yakası", "Avrupa Yakası", "Çevre iller"],
    openingHours: "Mo-Su 00:00-23:59",
    description:
      "İstanbul ve çevre illerde 7/24 moto kurye, araçlı kurye, VIP kurye, uçak kargo ve otobüs kargo çözümleri.",
    sameAs: [],
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "tr-TR",
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="theme-color" content="#111418" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema, websiteSchema]) }}
        />
      </Head>

      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-13QLYYGSJ4"
      />
      <Script id="ga4-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-13QLYYGSJ4');
        `}
      </Script>

      <Navbar />
      <FloatingCTA />
      <main className="pb-24 pt-24 md:pt-28 lg:pb-0">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
