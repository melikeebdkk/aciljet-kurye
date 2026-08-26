import Image from "next/image";
import { PageSeo, breadcrumbSchema, serviceSchema } from "@/components/Seo";
import { serviceGroups } from "@/data/services";

export default function Hizmetlerimiz() {
  return (
    <>
      <PageSeo
        title="Moto Kurye, Araçlı Kurye ve VIP Kurye Hizmetleri | AcilJet"
        description="AcilJet Kurye; moto kurye, VIP kurye, express kurye, araçlı kurye, uçak kargo, otobüs kargo ve kurumsal lojistik çözümleri sunar."
        path="/hizmetlerimiz"
        image="/aciljet-moto-service.webp"
        jsonLd={[
          breadcrumbSchema([
            { name: "Ana Sayfa", path: "/" },
            { name: "Hizmetlerimiz", path: "/hizmetlerimiz" },
          ]),
          serviceSchema(
            "AcilJet Kurye Hizmetleri",
            "Moto kurye, araçlı kurye, şehirlerarası kargo ve kurumsal lojistik hizmetleri.",
            "/hizmetlerimiz"
          ),
        ]}
      />
      <main className="aciljet-shell">
        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d8c7b0]/80 aciljet-champagne-panel p-6 shadow-soft sm:p-10 lg:p-14">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#7a1e2d]">AcilJet Hizmetleri</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-[#111418] md:text-6xl">
              Hız, hacim ve mesafeye göre net kurye çözümleri.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[#111418]/68 md:text-lg">
              Her gönderi aynı tempoda ilerlemez. AcilJet, paketin aciliyetini, hacmini ve teslimat yönünü birlikte değerlendirerek doğru hizmet modelini seçer.
            </p>
          </div>
        </section>

        {serviceGroups.map((group, index) => (
          <section key={group.id} id={group.id} className={["scroll-mt-32 px-4 py-14 sm:px-6 lg:px-8", index % 2 ? "bg-white" : ""].join(" ")}>
            <div className="mx-auto max-w-7xl">
              <div className={["grid gap-8 lg:items-center", index % 2 ? "lg:grid-cols-[1.1fr_0.9fr]" : "lg:grid-cols-[0.9fr_1.1fr]"].join(" ")}>
                <div className={index % 2 ? "lg:order-2" : ""}>
                  <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#7a1e2d]">{group.eyebrow}</p>
                  <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111418] md:text-5xl">{group.title}</h2>
                  <p className="mt-5 text-base leading-8 text-[#111418]/68 md:text-lg">{group.intro}</p>
                </div>

                <div className="overflow-hidden rounded-[1.7rem] border border-[#d8c7b0]/80 bg-white shadow-[0_18px_55px_rgba(42,13,21,0.09)]">
                  <div className="relative min-h-[16rem] sm:min-h-[22rem]">
                    <Image
                      src={group.visual}
                      alt={group.visualAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 660px"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111418]/62 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

              <div className="mt-7 overflow-hidden rounded-[1.5rem] border border-[#d8c7b0]/80 bg-white shadow-[0_16px_42px_rgba(42,13,21,0.07)]">
                {group.items.map((item, itemIndex) => (
                  <article key={item.name} className="grid gap-3 border-b border-[#d8c7b0]/60 p-6 last:border-b-0 md:grid-cols-[0.35fr_1fr]">
                    <div>
                      <p className={["text-xs font-extrabold uppercase tracking-[0.16em]", itemIndex === 0 ? "text-[#7a1e2d]" : "text-[#8a7258]"].join(" ")}>{item.label}</p>
                      <h3 className="mt-2 text-xl font-extrabold text-[#111418]">{item.name}</h3>
                    </div>
                    <p className="leading-7 text-[#111418]/66">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
