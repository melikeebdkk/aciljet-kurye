import { PageSeo, breadcrumbSchema } from "@/components/Seo";

const principles = [
  ["Hızlı karar", "Acil gönderilerde bekleten değil, yönlendiren operasyon dili kurarız."],
  ["Doğru ekip", "Her paketi motorla çözmeye çalışmayız; araç ihtiyacı varsa baştan doğru modeli seçeriz."],
  ["Net iletişim", "Teslimat modu, tahmini süre ve fiyat yaklaşımı talep anında açık biçimde konuşulur."],
  ["Kontrollü teslimat", "Acil olmak dikkatsiz olmak değildir; paket teslim süreci kontrollü şekilde takip edilir."],
];

export default function Hakkimizda() {
  return (
    <>
      <PageSeo
        title="AcilJet Kurye Hakkında | İstanbul Acil Kurye Ekibi"
        description="AcilJet Kurye; İstanbul merkezli moto kurye, araçlı kurye, VIP kurye ve şehirlerarası teslimat ihtiyaçları için hızlı operasyon yapısı sunar."
        path="/hakkimizda"
        jsonLd={breadcrumbSchema([
          { name: "Ana Sayfa", path: "/" },
          { name: "Hakkımızda", path: "/hakkimizda" },
        ])}
      />
      <main className="aciljet-shell">
        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_420px] lg:items-stretch">
            <div className="aciljet-champagne-panel rounded-[2rem] border border-[#d8c7b0]/80 p-6 shadow-soft sm:p-10 lg:p-14">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#7a1e2d]">Hakkımızda</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-[#111418] md:text-6xl">
                AcilJet Kurye, acil teslimat ihtiyacına sade ve keskin cevap verir.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[#111418]/70 md:text-lg">
                Markanın odağı tek bir cümlede toplanır: paketin ne olduğu, nereye gideceği ve ne kadar acil olduğu netleştiğinde doğru teslimat planı vakit kaybetmeden kurulur.
              </p>
            </div>
            <aside className="aciljet-dark-panel rounded-[2rem] border border-[#d8c7b0]/40 p-6 text-white shadow-soft sm:p-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#d8c7b0]">Çalışma Kodu</p>
              <div className="mt-8 space-y-7">
                {["Talebi al", "Modeli seç", "Planı kur", "Teslimatı izle"].map((item, index) => (
                  <div key={item} className="relative border-l border-[#d8c7b0]/30 pl-6">
                    <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[#d8c7b0]" />
                    <p className="text-3xl font-extrabold">0{index + 1}</p>
                    <h2 className="mt-2 text-lg font-extrabold">{item}</h2>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>
        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#7a1e2d]">Biz Kimiz?</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111418] md:text-5xl">
                İstanbul merkezli acil kurye ve lojistik çözüm yapısı.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-[#111418]/70 md:text-lg">
              <p>AcilJet Kurye, şehir içi ve şehir dışı gönderilerde hızlı talep alma, doğru araç seçimi ve net iletişim üzerine konumlanan bir kurye markasıdır.</p>
              <p>Her gönderiyi aynı kategoriye sıkıştırmak yerine, paketin hacmini ve teslimat aciliyetini birlikte değerlendirir. Böylece hem zaman kaybı hem de gereksiz maliyet azaltılır.</p>
              <p>Marka dili agresif değil; keskin, sade ve güven veren bir operasyon çizgisine dayanır.</p>
            </div>
          </div>
        </section>
        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#7a1e2d]">Neden AcilJet?</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111418] md:text-5xl">
                Acil teslimatta hız kadar netlik de önemlidir.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {principles.map(([title, text]) => (
                <article key={title} className="aciljet-champagne-panel rounded-[1.5rem] border border-[#d8c7b0]/80 p-6 shadow-[0_16px_34px_rgba(42,13,21,0.07)]">
                  <span className="mb-5 block h-1 w-12 rounded-full bg-[#7a1e2d]" />
                  <h3 className="text-xl font-extrabold text-[#111418]">{title}</h3>
                  <p className="mt-4 leading-7 text-[#111418]/65">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
