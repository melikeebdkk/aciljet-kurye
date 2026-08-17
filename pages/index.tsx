import Head from "next/head";
import Hero from "@/components/Hero";
import HomeSections from "@/components/HomeSections";

export default function Home() {
  return (
    <>
      <Head>
        <title>AcilJet Kurye | İstanbul Moto Kurye, VIP Kurye ve Araçlı Kurye</title>
        <meta
          name="description"
          content="AcilJet Kurye; İstanbul ve çevre illerde 25 yıllık tecrübeyle VIP kurye, Express kurye, gece kurye, araçlı kurye ve şehirlerarası teslimat çözümleri sunar."
        />
        <link rel="canonical" href="https://www.aciljetkurye.com/" />
        <meta property="og:title" content="AcilJet Kurye | İstanbul’un Sokak Hafızası" />
        <meta
          property="og:description"
          content="Saniyeler içinde fiyatlandırma, dakikalar içinde profesyonel teslimat. İstanbul içi ve şehirlerarası kurye çözümleri."
        />
        <meta property="og:image" content="https://www.aciljetkurye.com/aciljet-logo-selected.webp" />
      </Head>
      <Hero />
      <HomeSections />
    </>
  );
}
