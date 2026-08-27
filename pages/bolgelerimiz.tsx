import Image from "next/image";
import { regions } from "../data/regions";
import { PageSeo, breadcrumbSchema, serviceSchema } from "@/components/Seo";

const accents = ["#7a1e2d", "#d8c7b0", "#111418", "#a3263a"];

export default function Bolgelerimiz() {
  return (
    <>
      <PageSeo
        title="İstanbul Kurye Bölgeleri | Anadolu ve Avrupa Yakası | AcilJet Kurye"
        description="AcilJet Kurye; İstanbul Anadolu Yakası, Avrupa Yakası, Gebze, Kocaeli ve şehirlerarası teslimat bölgelerinde hızlı kurye hizmeti verir."
        path="/bolgelerimiz"
        image="/aciljet-region-map.webp"
        jsonLd={[
          breadcrumbSchema([
            { name: "Ana Sayfa", path: "/" },
            { name: "Bölgelerimiz", path: "/bolgelerimiz" },
          ]),
          serviceSchema(
            "İstanbul Kurye Hizmet Bölgeleri",
            "Anadolu Yakası, Avrupa Yakası, Gebze, Kocaeli ve şehirlerarası kurye hizmet bölgeleri.",
            "/bolgelerimiz"
          ),
        ]}
      />
      <main className="aciljet-shell">
        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-[#d8c7b0]/80 bg-white shadow-soft lg:grid-cols-[1.05fr_0.95fr]">
            <div className="aciljet-champagne-panel p-6 sm:p-10 lg:p-14">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#7a1e2d]">Hizmet Bölgeleri</p>
              <h1 className="mt-4 max-w-5xl text-4xl font-extrabold tracking-tight text-[#111418] md:text-6xl">
                İstanbul içi ve çevre hatlarda acil teslimat ağı.
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#111418]/68 md:text-lg">
                AcilJet Kurye; Anadolu Yakası, Avrupa Yakası, şehirlerarası ve Gebze-Kocaeli hattını ayrı operasyon karakterleriyle ele alır.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {regions.map((region, index) => (
                  <a
                    key={region.id}
                    href={`#${region.id}`}
                    className="rounded-[1.25rem] border border-[#d8c7b0]/80 bg-white/78 p-4 font-extrabold text-[#111418] shadow-[0_12px_28px_rgba(42,13,21,0.06)] transition hover:-translate-y-0.5 hover:border-[#7a1e2d]/35"
                  >
                    <span className="mb-3 block h-1 w-12 rounded-full" style={{ backgroundColor: accents[index] || "#7a1e2d" }} />
                    {region.eyebrow}
                  </a>
                ))}
              </div>
            </div>
            <div className="relative min-h-[20rem] border-t border-[#d8c7b0]/70 lg:min-h-full lg:border-l lg:border-t-0">
              <Image
                src="/aciljet-region-map.webp"
                alt="AcilJet Kurye hizmet bölgeleri ve teslimat ağı"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,20,24,0.04)_0%,rgba(42,13,21,0.50)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#d8c7b0]">Teslimat Planı</p>
                <p className="mt-2 max-w-md text-2xl font-extrabold leading-tight">
                  İlçe ve hat detayları tek tek ayrı sayfalarda işlendi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {regions.map((region, index) => (
          <section key={region.id} id={region.id} className={["scroll-mt-32 px-4 py-14 sm:px-6 lg:px-8", index % 2 ? "bg-white" : ""].join(" ")}>
            <div className="mx-auto max-w-7xl">
              <div className="mb-8 max-w-4xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#7a1e2d]">{region.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111418] md:text-5xl">{region.title}</h2>
                <p className="mt-5 text-base leading-8 text-[#111418]/68 md:text-lg">{region.intro}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {region.districts.map((district, districtIndex) => (
                  <a
                    key={district.slug}
                    href={`/bolgelerimiz/${district.slug}`}
                    className="aciljet-champagne-panel group relative min-w-0 overflow-hidden rounded-[1.5rem] border border-[#d8c7b0]/80 p-6 shadow-[0_16px_34px_rgba(42,13,21,0.07)] transition hover:-translate-y-1 hover:border-[#7a1e2d]/40"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-[#7a1e2d]" />
                    <span className={["inline-flex rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-[0.15em]", districtIndex === 0 ? "bg-[#7a1e2d] text-white" : "bg-white text-[#111418]"].join(" ")}>
                      {region.eyebrow}
                    </span>
                    <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-[#111418]">{district.name}</h3>
                    <p className="mt-3 text-sm font-extrabold leading-6 text-[#111418]">{district.headline}</p>
                    <p className="mt-3 text-sm leading-7 text-[#111418]/62">{district.excerpt}</p>
                    <span className="mt-5 inline-flex text-sm font-extrabold text-[#7a1e2d]">Makaleyi oku</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
