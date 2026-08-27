import Head from "next/head";
import type { AppProps } from "next/app";
import { Manrope, Sora } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import Script from "next/script";
import { PHONE_NUMBER, SITE_NAME, SITE_URL } from "@/components/Seo";

const manrope = Manrope({
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

const sora = Sora({
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--font-sora",
  weight: ["600", "700", "800"],
});

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

      <Script id="ga4-delayed-loader" strategy="afterInteractive">
        {`
          (function () {
            var loaded = false;
            function loadAnalytics() {
              if (loaded) return;
              loaded = true;
              var script = document.createElement('script');
              script.async = true;
              script.src = 'https://www.googletagmanager.com/gtag/js?id=G-13QLYYGSJ4';
              document.head.appendChild(script);
              window.dataLayer = window.dataLayer || [];
              window.gtag = function(){dataLayer.push(arguments);}
              window.gtag('js', new Date());
              window.gtag('config', 'G-13QLYYGSJ4');
            }
            ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach(function(eventName) {
              window.addEventListener(eventName, loadAnalytics, { once: true, passive: true });
            });
            window.setTimeout(loadAnalytics, 5000);
          })();
        `}
      </Script>

      <div className={`${manrope.className} ${manrope.variable} ${sora.variable}`}>
        <Navbar />
        <FloatingCTA />
        <main className="pb-24 pt-24 md:pt-28 lg:pb-0">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
