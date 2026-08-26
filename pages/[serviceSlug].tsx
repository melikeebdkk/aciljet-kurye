import Image from "next/image";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { PageSeo, breadcrumbSchema, faqSchema, serviceSchema } from "@/components/Seo";
import { getServicePageBySlug, servicePages } from "@/data/services";
import { regions } from "@/data/regions";

type ServiceLandingProps = {
  service: NonNullable<ReturnType<typeof getServicePageBySlug>>;
};

const featuredDistricts = regions.flatMap((region) => region.districts).slice(0, 8);

export default function ServiceLanding({ service }: ServiceLandingProps) {
  const pagePath = `/${service.slug}`;

  return (
    <>
      <PageSeo
        title={service.metaTitle}
        description={service.metaDescription}
        path={pagePath}
        image={service.visual}
        jsonLd={[
          breadcrumbSchema([
            { name: "Ana Sayfa", path: "/" },
            { name: service.title, path: pagePath },
          ]),
          serviceSchema(service.title, service.metaDescription, pagePath),
          faqSchema(service.faqs),
        ]}
      />
      <main className="aciljet-shell">
        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-[#d8c7b0]/80 bg-white shadow-soft lg:grid-cols-[1.02fr_0.98fr]">
            <div className="aciljet-champagne-panel p-6 sm:p-10 lg:p-14">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#7a1e2d]">AcilJet Hizmetleri</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-[#111418] md:text-6xl">
                {service.heroTitle}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#111418]/68 md:text-lg">{service.heroText}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="tel:+905428421013" className="btn-primary">Hemen Ara</a>
                <a
                  href="https://wa.me/905428421013?text=Merhaba%2C%20kurye%20hizmeti%20i%C3%A7in%20fiyat%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="relative min-h-[20rem] border-t border-[#d8c7b0]/70 lg:min-h-full lg:border-l lg:border-t-0">
              <Image
                src={service.visual}
                alt={service.visualAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,20,24,0.02)_0%,rgba(42,13,21,0.50)_100%)]" />
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#7a1e2d]">Öne Çıkanlar</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111418] md:text-5xl">
                {service.shortTitle} için net hizmet çerçevesi.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {service.highlights.map((highlight, index) => (
                <article key={highlight} className="aciljet-champagne-panel rounded-[1.5rem] border border-[#d8c7b0]/80 p-6 shadow-[0_16px_34px_rgba(42,13,21,0.07)]">
                  <span className={["mb-5 block h-1 w-12 rounded-full", index === 0 ? "bg-[#7a1e2d]" : "bg-[#d8c7b0]"].join(" ")} />
                  <h3 className="text-xl font-extrabold text-[#111418]">{highlight}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
            {service.sections.map((section) => (
              <article key={section.title} className="rounded-[1.5rem] border border-[#d8c7b0]/80 bg-white p-6 shadow-[0_16px_42px_rgba(42,13,21,0.07)]">
                <h2 className="text-2xl font-extrabold tracking-tight text-[#111418]">{section.title}</h2>
                <p className="mt-4 leading-8 text-[#111418]/68">{section.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#7a1e2d]">İç Linkler</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111418] md:text-5xl">
                İstanbul içinde sık talep gelen bölgeler.
              </h2>
              <p className="mt-5 leading-8 text-[#111418]/68">
                Hizmeti ilçe sayfalarıyla desteklemek, hem kullanıcıya hızlı yön verir hem de arama motorlarına daha net konu ilişkisi kurar.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {featuredDistricts.map((district) => (
                <Link
                  key={district.slug}
                  href={`/bolgelerimiz/${district.slug}`}
                  prefetch={false}
                  className="rounded-[1.25rem] border border-[#d8c7b0]/80 bg-white p-4 text-sm font-extrabold text-[#111418] shadow-[0_12px_28px_rgba(42,13,21,0.05)] transition hover:border-[#7a1e2d]/40 hover:text-[#7a1e2d]"
                >
                  {district.name} Kurye
                </Link>
              ))}
            </div>
            <div className="mt-8 rounded-[1.5rem] border border-[#d8c7b0]/80 bg-white p-5 shadow-[0_12px_28px_rgba(42,13,21,0.05)]">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#7a1e2d]">Sonraki adım</p>
              <div className="mt-3 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
                <p className="leading-7 text-[#111418]/68">
                  İlçe detayını inceledikten sonra alım ve teslim adresini paylaşarak hızlı kurye talebini netleştirebilirsiniz.
                </p>
                <Link href="/iletisim" prefetch={false} className="btn-primary">
                  İletişime geç
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#7a1e2d]">S.S.S</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111418] md:text-5xl">
                {service.shortTitle} hakkında sorular.
              </h2>
            </div>
            <div className="space-y-3">
              {service.faqs.map((faq) => (
                <details key={faq.question} className="aciljet-champagne-panel group rounded-[1.25rem] border border-[#d8c7b0]/70 p-5 shadow-[0_12px_28px_rgba(42,13,21,0.07)]">
                  <summary className="cursor-pointer list-none text-lg font-extrabold text-[#111418] marker:hidden">{faq.question}</summary>
                  <p className="mt-3 leading-7 text-[#111418]/65">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: servicePages.map((service) => ({ params: { serviceSlug: service.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ServiceLandingProps> = async ({ params }) => {
  const service = getServicePageBySlug(String(params?.serviceSlug || ""));
  if (!service) return { notFound: true };
  return { props: { service } };
};
