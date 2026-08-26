import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { PageSeo, breadcrumbSchema, serviceSchema } from "@/components/Seo";
import { allDistricts, getDistrictBySlug } from "../../data/regions";

type DistrictPageProps = {
  district: NonNullable<ReturnType<typeof getDistrictBySlug>>;
};

export default function DistrictPage({ district }: DistrictPageProps) {
  const pagePath = `/bolgelerimiz/${district.slug}`;
  const title = `${district.name} Kurye | 7/24 Moto Kurye ve Araçlı Teslimat`;
  const description = `${district.name} kurye hizmeti için AcilJet Kurye: moto kurye, express kurye, VIP kurye ve araçlı teslimat seçenekleriyle hızlı çözüm.`;

  return (
    <>
      <PageSeo
        title={title}
        description={description}
        path={pagePath}
        type="article"
        jsonLd={[
          breadcrumbSchema([
            { name: "Ana Sayfa", path: "/" },
            { name: "Bölgelerimiz", path: "/bolgelerimiz" },
            { name: district.name, path: pagePath },
          ]),
          serviceSchema(
            `${district.name} Kurye Hizmeti`,
            `${district.name} bölgesinde moto kurye, express kurye, VIP kurye ve araçlı teslimat hizmeti.`,
            pagePath
          ),
        ]}
      />
      <main className="aciljet-shell">
        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <article className="aciljet-champagne-panel mx-auto max-w-5xl rounded-[2rem] border border-[#d8c7b0]/80 p-6 shadow-soft sm:p-10 lg:p-14">
            <Link href={`/bolgelerimiz#${district.regionId}`} prefetch={false} className="text-sm font-extrabold text-[#7a1e2d]">
              ← {district.regionTitle}
            </Link>
            <span className="mt-6 block h-1 w-16 rounded-full bg-[#7a1e2d]" />
            <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.24em] text-[#7a1e2d]">Bölge Makalesi</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#111418] md:text-6xl">{district.headline}</h1>
            <p className="mt-5 text-base leading-8 text-[#111418]/68 md:text-lg">{district.excerpt}</p>
            <div className="mt-10 space-y-6 border-t border-[#d8c7b0]/70 pt-8 text-base leading-8 text-[#111418]/72 md:text-lg md:leading-9">
              {district.article.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
              <div className="aciljet-dark-panel rounded-[1.5rem] border border-[#d8c7b0]/30 p-5 text-white">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#d8c7b0]">Hızlı İstatistik</p>
                <p className="mt-4 text-2xl font-extrabold leading-tight">{district.quickStat}</p>
              </div>
              <div className="rounded-[1.5rem] border border-[#d8c7b0]/80 bg-white/82 p-5">
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#7a1e2d]">AcilJet yaklaşımı</p>
                <p className="mt-3 leading-7 text-[#111418]/70">
                  Bu bölgedeki gönderilerde paket hacmi, teslimat aciliyeti ve adres bilgisi birlikte değerlendirilir. Talep için sabit telefon veya WhatsApp panelinden hızlıca ulaşabilirsiniz.
                </p>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: allDistricts.map((district) => ({ params: { slug: district.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<DistrictPageProps> = async ({ params }) => {
  const slug = String(params?.slug || "");
  const district = getDistrictBySlug(slug);
  if (!district) return { notFound: true };
  return { props: { district } };
};
