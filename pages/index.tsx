import Hero from "@/components/Hero";
import HomeSections from "@/components/HomeSections";
import { PageSeo, serviceSchema } from "@/components/Seo";

export default function Home() {
  return (
    <>
      <PageSeo
        title="İstanbul Moto Kurye ve 7/24 Acil Kurye | AcilJet Kurye"
        description="AcilJet Kurye; İstanbul içi moto kurye, VIP kurye, express kurye, araçlı kurye ve şehirlerarası teslimat için 7/24 hızlı kurye çözümleri sunar."
        path="/"
        jsonLd={serviceSchema(
          "İstanbul Moto Kurye ve Acil Kurye Hizmeti",
          "İstanbul içi moto kurye, VIP kurye, express kurye ve araçlı kurye teslimat çözümleri.",
          "/"
        )}
      />
      <Hero />
      <HomeSections />
    </>
  );
}
