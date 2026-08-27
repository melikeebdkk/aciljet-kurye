import Image from "next/image";
import Link from "next/link";
import { homeFaqs } from "@/data/faqs";

const reasons = [
  ["Acil iş refleksi", "Talep geldiği anda alım noktası, teslim adresi ve paket tipi birlikte değerlendirilir; yönlendirme kararı bekletilmeden verilir."],
  ["Doğru ekip seçimi", "Küçük evrak için motor, hacimli paket için araçlı ekip yönlendirilir. Amaç hız kadar doğru taşıma modelini seçmektir."],
  ["Net iletişim", "Telefon veya WhatsApp üzerinden alınan bilgilerle teslimat modu, tahmini süre ve fiyat yaklaşımı açık biçimde paylaşılır."],
];

const speeds = [
  ["V.I.P. Kurye", "45 - 60 dk", "Tek gönderi, doğrudan akış, en hızlı teslimat planı.", "Acil", "/vip-kurye"],
  ["Express Kurye", "90 dk", "Öncelikli akışa alınan hızlı ve dengeli teslimat.", "Öncelikli", "/express-kurye"],
  ["Normal Kurye", "180 dk", "Gün içi planlı gönderiler için ekonomik çözüm.", "Planlı", "/moto-kurye"],
  ["Gece Kuryesi", "7/24", "Mesai sonrası acil ihtiyaçlar için kesintisiz yönlendirme.", "Kesintisiz", "/gece-kurye"],
];

const fleet = [
  ["Moto Kurye", "Evrak, küçük paket ve acil şehir içi teslimatlar"],
  ["Binek & Doblo", "Hassas, orta hacimli veya araçla taşınması gereken gönderiler"],
  ["Panelvan", "Çok adetli koli, numune ve mağaza sevkiyatları"],
  ["Kamyonet", "Hacimli, planlı ve operasyon gerektiren taşıma işleri"],
];

const longDistance = [
  ["Havalimanı Aktarmalı", "Uzak şehirlerde hız gerektiğinde uçak kargo bağlantılı teslimat akışı planlanır."],
  ["Terminal Bağlantılı", "Otobüs kargo ağıyla ekonomik ve pratik şehir dışı gönderi yönlendirmesi yapılır."],
  ["Çevre İl Teslimatı", "Kocaeli, Bursa, Tekirdağ gibi yakın hatlarda aynı gün kapıdan kapıya çözüm oluşturulur."],
];

const stats = [
  ["7/24", "Talep hattı"],
  ["4", "Teslimat modeli"],
  ["45 dk", "VIP başlangıç süresi"],
  ["Tek", "Net operasyon akışı"],
];

const featuredDistrictLinks = [
  ["Kadıköy Kurye", "/bolgelerimiz/kadikoy-kurye"],
  ["Ataşehir Kurye", "/bolgelerimiz/atasehir-kurye"],
  ["Ümraniye Kurye", "/bolgelerimiz/umraniye-kurye"],
  ["Beşiktaş Kurye", "/bolgelerimiz/besiktas-kurye"],
  ["Şişli Kurye", "/bolgelerimiz/sisli-nisantasi-kurye"],
  ["Bakırköy Kurye", "/bolgelerimiz/bakirkoy-kurye"],
];

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mb-9 max-w-3xl">
      <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#7a1e2d]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111418] md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-[#111418]/66 md:text-lg">{text}</p>}
    </div>
  );
}

export default function HomeSections() {
  return (
    <div className="aciljet-shell">
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Neden AcilJet Kurye?" title="Acil işlerde hızlı karar, doğru yönlendirme ve temiz iletişim." text="AcilJet Kurye'nin dili gösterişli vaatlerden çok, teslimat anında işe yarayan net operasyona dayanır." />
          <div className="overflow-hidden rounded-[1.7rem] border border-[#d8c7b0]/80 bg-white shadow-[0_20px_60px_rgba(42,13,21,0.10)]">
            <div className="grid divide-y divide-[#d8c7b0]/60 md:grid-cols-3 md:divide-x md:divide-y-0">
              {reasons.map(([title, text], index) => (
                <article key={title} className="aciljet-champagne-panel p-6 md:p-8">
                  <span className={["mb-6 block h-1 w-14 rounded-full", index === 1 ? "bg-[#7a1e2d]" : "bg-[#d8c7b0]"].join(" ")} />
                  <h3 className="text-xl font-extrabold text-[#111418]">{title}</h3>
                  <p className="mt-3 leading-7 text-[#111418]/64">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_12%_10%,rgba(216,199,176,0.34),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(122,30,45,0.13),transparent_32%),linear-gradient(180deg,#fffaf2_0%,#f8efe4_100%)] px-4 py-14 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <SectionTitle eyebrow="Moto Kurye Hizmetleri" title="Aciliyete göre net süre, tek bakışta teslimat modu." />
          <div className="mb-6 overflow-hidden rounded-[1.7rem] border border-[#d8c7b0]/80 bg-[#111418] shadow-[0_22px_62px_rgba(42,13,21,0.14)]">
            <div className="relative min-h-[17rem] sm:min-h-[21rem]">
              <Image
                src="/aciljet-moto-service.webp"
                alt="AcilJet moto kurye teslimat hizmeti"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,20,24,0.86)_0%,rgba(42,13,21,0.58)_42%,rgba(17,20,24,0.16)_100%)]" />
              <div className="relative z-10 max-w-xl p-6 text-white sm:p-8 lg:p-10">
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#d8c7b0]">Saha Hızı</p>
                <h3 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">Dakika kaybetmeden doğru ekip yola çıkar.</h3>
                <p className="mt-4 max-w-md text-sm font-semibold leading-7 text-white/74 sm:text-base">
                  Evrak, numune veya küçük paketlerde teslimat; aciliyet ve trafik akışına göre planlanır.
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.7rem] border border-[#d8c7b0]/80 bg-white/76 shadow-[0_22px_62px_rgba(42,13,21,0.12)] backdrop-blur">
            <div className="grid md:grid-cols-4">
              {speeds.map(([title, time, text, tag, href], index) => (
                <Link key={title} href={href} prefetch={false} className="group relative border-b border-[#d8c7b0]/60 px-5 py-7 transition hover:bg-[#fffaf2] md:border-b-0 md:border-r last:border-b-0 md:last:border-r-0">
                  <span className={["text-xs font-extrabold uppercase tracking-[0.18em]", index === 0 ? "text-[#7a1e2d]" : "text-[#8a7258]"].join(" ")}>{tag}</span>
                  <p className="mt-3 text-4xl font-extrabold tracking-tight text-[#111418] md:text-5xl">{time}</p>
                  <h3 className="mt-3 text-lg font-extrabold text-[#111418]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#111418]/62">{text}</p>
                  <span className="mt-5 inline-flex text-sm font-extrabold text-[#7a1e2d] opacity-0 transition group-hover:opacity-100">Detayı gör</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#7a1e2d]">Araçlı Kurye & Lojistik</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111418] md:text-5xl">Paket büyüdüğünde çözüm büyüsün, maliyet şişmesin.</h2>
              <p className="mt-5 text-base leading-8 text-[#111418]/68 md:text-lg">AcilJet Kurye, motora sığmayan gönderilerde teslimat ihtiyacını araç tipiyle eşleştirir. Böylece küçük işe büyük araç, büyük işe yetersiz çözüm mantığı oluşmaz.</p>
              <Link href="/aracli-kurye" prefetch={false} className="mt-6 inline-flex rounded-2xl border border-[#7a1e2d]/20 bg-white px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-[#7a1e2d] shadow-[0_14px_30px_rgba(216,199,176,0.22)] transition hover:border-[#7a1e2d] hover:bg-[#7a1e2d] hover:text-white">Araçlı kurye sayfasını incele</Link>
            </div>
            <div className="overflow-hidden rounded-[1.7rem] border border-[#d8c7b0]/80 bg-white shadow-[0_18px_55px_rgba(42,13,21,0.10)]">
              <div className="relative min-h-[17rem] border-b border-[#d8c7b0]/70 sm:min-h-[22rem]">
                <Image
                  src="/aciljet-parcel-van-premium.webp"
                  alt="Araçlı kurye için paket ve panelvan hazırlığı"
                  fill
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111418]/72 to-transparent p-5 text-white">
                  <p className="max-w-md text-sm font-bold leading-6 text-white/88">Koli, numune ve hacimli gönderiler için araç tipi gönderiye göre seçilir.</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2">
                {fleet.map(([name, desc], index) => (
                  <Link key={name} href="/aracli-kurye" prefetch={false} className="border-b border-[#d8c7b0]/60 px-5 py-5 transition hover:bg-[#fffaf2] sm:border-r even:sm:border-r-0">
                    <span className={["mb-4 block h-1 w-12 rounded-full", index === 1 ? "bg-[#7a1e2d]" : "bg-[#d8c7b0]"].join(" ")} />
                    <p className="text-lg font-extrabold text-[#111418]">{name}</p>
                    <p className="mt-2 text-sm leading-6 text-[#111418]/62">{desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aciljet-dark-panel relative overflow-hidden px-4 py-14 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-px bg-[#d8c7b0]/35" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
            <div><p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#d8c7b0]">Kurumsal Çözümler</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">Acil operasyonlarda işletmenizin dış saha gücü.</h2></div>
            <p className="text-base leading-8 text-white/72 md:text-lg">E-ticaret, hukuk, sağlık, üretim ve ofis ekipleri için düzenli kurye ihtiyacını tek bir dış operasyon diliyle yönetmeye hazır bir yapı kurulur.</p>
          </div>
          <Link href="/hizmetlerimiz#kurumsal-cozumler" prefetch={false} className="mt-8 inline-flex rounded-2xl bg-[#d8c7b0] px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-[#111418] transition hover:bg-white">Kurumsal çözümleri incele</Link>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionTitle eyebrow="Şehirler Arası Taşımacılık" title="İstanbul dışı gönderiler için kontrollü aktarım." />
              <div className="relative min-h-[15rem] overflow-hidden rounded-[1.6rem] border border-[#d8c7b0]/80 shadow-[0_16px_44px_rgba(42,13,21,0.08)]">
                <Image
                  src="/service-intercity.webp"
                  alt="Şehirler arası kurye ve kargo aktarımı"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.7rem] border border-[#d8c7b0]/80 bg-white shadow-[0_18px_55px_rgba(42,13,21,0.08)]">
              {longDistance.map(([title, text]) => (
                <Link key={title} href="/sehirlerarasi-kurye" prefetch={false} className="grid gap-4 border-b border-[#d8c7b0]/60 p-6 transition hover:bg-[#fffaf2] md:grid-cols-[1fr_auto] md:items-center last:border-b-0">
                  <div><h3 className="text-xl font-extrabold text-[#111418]">{title}</h3><p className="mt-2 leading-7 text-[#111418]/65">{text}</p></div>
                  <span className="text-sm font-extrabold text-[#7a1e2d]">Detayı gör</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_82%_30%,rgba(216,199,176,0.40),transparent_28%),linear-gradient(180deg,#fffaf2_0%,#ffffff_100%)] px-4 py-14 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.7rem] border border-[#d8c7b0]/80 bg-white shadow-[0_18px_55px_rgba(42,13,21,0.08)]">
          <div className="grid divide-y divide-[#d8c7b0]/60 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {stats.map(([value, label], index) => (<div key={label} className="p-6 text-center"><p className={["text-4xl font-extrabold md:text-5xl", index === 1 ? "text-[#7a1e2d]" : "text-[#8a7258]"].join(" ")}>{value}</p><p className="mt-2 font-bold text-[#111418]/68">{label}</p></div>))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <SectionTitle
              eyebrow="Bölge Bağlantıları"
              title="Sık talep gelen ilçelerden hizmet sayfalarına hızlı geçiş."
              text="İlçe detayları, gönderinin çıktığı bölgeye göre moto kurye, araçlı kurye ve iletişim adımlarına bağlanır."
            />
            <Link href="/bolgelerimiz" prefetch={false} className="btn-ghost">
              Tüm bölgeleri gör
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {featuredDistrictLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                prefetch={false}
                className="aciljet-champagne-panel rounded-[1.25rem] border border-[#d8c7b0]/80 p-5 text-sm font-extrabold text-[#111418] shadow-[0_12px_28px_rgba(42,13,21,0.05)] transition hover:border-[#7a1e2d]/40 hover:text-[#7a1e2d]"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/iletisim"
              prefetch={false}
              className="rounded-[1.25rem] border border-[#7a1e2d]/30 bg-[#7a1e2d] p-5 text-sm font-extrabold text-white shadow-[0_12px_28px_rgba(42,13,21,0.08)] transition hover:bg-[#111418]"
            >
              Acil kurye iletişim
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto mb-8 max-w-3xl text-center"><p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#7a1e2d]">S.S.S</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111418] md:text-5xl">Aklınızdaki temel sorular.</h2></div>
          <div className="space-y-3">{homeFaqs.map((faq) => (<details key={faq.question} className="aciljet-champagne-panel group rounded-[1.25rem] border border-[#d8c7b0]/70 p-5 shadow-[0_12px_28px_rgba(42,13,21,0.07)]"><summary className="cursor-pointer list-none text-lg font-extrabold text-[#111418] marker:hidden">{faq.question}</summary><p className="mt-3 leading-7 text-[#111418]/65">{faq.answer}</p></details>))}</div>
        </div>
      </section>
    </div>
  );
}
