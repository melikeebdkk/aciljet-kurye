import Head from "next/head";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import Script from "next/script";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const canonical =
    "https://www.aciljetkurye.com" +
    (router.asPath === "/" ? "/" : router.asPath.split("?")[0]);
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AcilJet Kurye",
    url: "https://www.aciljetkurye.com",
    telephone: "+905428421013",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Beykoz",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    areaServed: ["İstanbul", "Anadolu Yakası", "Avrupa Yakası", "Çevre iller"],
    openingHours: "Mo-Su 00:00-23:59",
    description:
      "İstanbul ve çevre illerde moto kurye, araçlı kurye, VIP kurye, uçak kargo ve otobüs kargo çözümleri.",
    sameAs: [],
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonical} />
        <meta property="og:site_name" content="AcilJet Kurye" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta name="theme-color" content="#07111f" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
