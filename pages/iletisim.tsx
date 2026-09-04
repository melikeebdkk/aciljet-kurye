import Link from "next/link";
import { PageSeo, breadcrumbSchema, faqSchema, serviceSchema } from "@/components/Seo";
import { contactFaqs } from "@/data/faqs";

export default function Iletisim() {
  return (
    <>
      <PageSeo
        title="Acil Kurye İletişim | 7/24 Telefon ve WhatsApp | AcilJet Kurye"
        description="AcilJet Kurye iletişim hattı: İstanbul içi moto kurye, VIP kurye, express kurye ve araçlı kurye talepleri için telefon veya WhatsApp ile ulaşın."
        path="/iletisim"
        jsonLd={[
          breadcrumbSchema([
            { name: "Ana Sayfa", path: "/" },
            { name: "İletişim", path: "/iletisim" },
          ]),
          serviceSchema(
            "Acil Kurye İletişim Hattı",
            "Telefon ve WhatsApp üzerinden hızlı kurye talebi oluşturma.",
            "/iletisim"
          ),
          faqSchema(contactFaqs),
        ]}
      />
      <main className="aciljet-shell">
        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="aciljet-champagne-panel rounded-[2rem] border border-[#d8c7b0]/80 p-6 shadow-soft sm:p-10 lg:p-14">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#7a1e2d]">İletişim</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-[#111418] md:text-6xl">
                Acil gönderi için beklemeyin, doğrudan ulaşın.
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#111418]/68 md:text-lg">
                Form doldurup cevap beklemek yerine alım adresini, teslim adresini ve paket bilgisini iletin. AcilJet Kurye ekibi uygun teslimat modelini hızlıca netleştirir.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {["Adres bilgisi", "Paket hacmi", "Aciliyet modu"].map((item) => (
                  <div key={item} className="rounded-[1.25rem] border border-[#d8c7b0]/80 bg-white/78 p-4 shadow-[0_10px_24px_rgba(42,13,21,0.05)]">
                    <span className="mb-3 block h-1 w-10 rounded-full bg-[#7a1e2d]" />
                    <p className="text-sm font-extrabold text-[#111418]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <aside className="rounded-[2rem] border border-[#d8c7b0]/80 bg-white p-4 shadow-soft sm:p-5">
              <div className="aciljet-dark-panel rounded-[1.5rem] p-6 text-white">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#d8c7b0]">Hızlı Talep</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Adresi söyleyin, uygun teslimat modelini belirleyelim.</h2>
                <p className="mt-4 leading-7 text-white/70">
                  Nereden alınacak, nereye gidecek ve paket yaklaşık ne boyutta? Bu üç bilgiyle teslimat planı ve araç tipi hızlıca şekillenir.
                </p>
              </div>
              <div className="mt-4 grid gap-3">
                <a href="tel:+905364643329" className="group rounded-[1.35rem] border border-[#d8c7b0]/80 bg-[#fffaf2] p-5 transition hover:border-[#7a1e2d]/35">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#7a1e2d]">Tıkla, Ara</p>
                  <p className="mt-2 text-3xl font-extrabold tracking-tight text-[#111418]">0536 464 33 29</p>
                  <p className="mt-3 leading-7 text-[#111418]/62">Telefonla arayın; adresi, paket tipini ve aciliyetinizi söyleyin.</p>
                </a>
                <a href="https://wa.me/905364643329?text=Merhaba%2C%20kurye%20hizmeti%20i%C3%A7in%20fiyat%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="group rounded-[1.35rem] border border-[#d8c7b0]/80 bg-white p-5 transition hover:border-[#7a1e2d]/35">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#7a1e2d]">WhatsApp</p>
                  <p className="mt-2 text-2xl font-extrabold tracking-tight text-[#111418]">Konum ve paket bilgisini gönderin.</p>
                  <p className="mt-3 leading-7 text-[#111418]/62">VIP, Express, Normal veya araçlı kurye seçeneklerinden hangisinin uygun olduğunu belirleyelim.</p>
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#7a1e2d]">Talep Öncesi</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111418] md:text-5xl">
                Hizmet veya bölge sayfasından hızlıca seçim yapın.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#111418]/68 md:text-lg">
                Gönderi tipiniz ve ilçe detayınız netse iletişim daha hızlı ilerler. Aşağıdaki sayfalar talep öncesi doğru seçimi kolaylaştırır.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Moto kurye", "/moto-kurye"],
                ["Araçlı kurye", "/aracli-kurye"],
                ["Gece kurye", "/gece-kurye"],
                ["İstanbul kurye bölgeleri", "/bolgelerimiz"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  prefetch={false}
                  className="aciljet-champagne-panel rounded-[1.25rem] border border-[#d8c7b0]/80 p-5 text-sm font-extrabold text-[#111418] shadow-[0_12px_28px_rgba(42,13,21,0.05)] transition hover:border-[#7a1e2d]/40 hover:text-[#7a1e2d]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#7a1e2d]">S.S.S</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111418] md:text-5xl">
                İletişim ve talep hakkında sorular.
              </h2>
            </div>
            <div className="space-y-3">
              {contactFaqs.map((faq) => (
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
