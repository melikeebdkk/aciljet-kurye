import Head from "next/head";
import Image from "next/image";

const groups = [
  {
    id: "moto-kurye",
    eyebrow: "Hız odaklı",
    title: "Moto Kurye Hizmetleri",
    intro: "AcilJet moto kurye hizmeti; evrak, küçük paket, numune ve zaman hassasiyeti olan teslimatlarda hızlı hareket etmek için kurgulanır.",
    visual: "/aciljet-moto-service.webp",
    visualAlt: "AcilJet moto kurye hizmetleri",
    items: [
      ["V.I.P. Kurye", "45-60 Dakika", "En acil gönderilerde paket başka teslimatlarla birleştirilmeden öncelikli rota ile ilerler."],
      ["Express Kurye", "90 Dakika", "Acil ama tekil rota gerektirmeyen gönderiler için hız ve maliyet dengesi kurulur."],
      ["Normal Kurye", "180 Dakika", "Gün içinde yetişmesi gereken planlı paketler için ekonomik ve kontrollü teslimat yapılır."],
      ["Gece Kuryesi", "7/24", "Mesai sonrası ortaya çıkan evrak, paket ve operasyon ihtiyaçları için yönlendirme sağlanır."],
    ],
  },
  {
    id: "aracli-lojistik",
    eyebrow: "Hacim odaklı",
    title: "Araçlı Kurye & Lojistik",
    intro: "Motora sığmayan, hassas veya çok adetli gönderilerde AcilJet doğru araç tipiyle teslimat planı oluşturur.",
    visual: "/aciljet-parcel-van-premium.webp",
    visualAlt: "Araçlı kurye için koli ve panelvan hazırlığı",
    items: [
      ["Hafif Ticari Kurye", "Binek & Doblo", "Orta hacimli paketler, cihazlar ve hassas teslimatlar için korunaklı araç seçeneği."],
      ["Panelvan & Kamyonet", "Hacimli gönderi", "Koli, numune, mağaza çıkışı veya üretim malzemesi gibi büyük gönderiler için tek seferlik taşıma planı."],
      ["Esnek Filo Yönetimi", "Maliyet kontrolü", "Paket boyutu ve rota dikkate alınarak gereksiz büyük araç maliyeti engellenir."],
    ],
  },
  {
    id: "sehirlerarasi",
    eyebrow: "Türkiye geneli",
    title: "Uçak & Otobüs Kargo",
    intro: "Şehir dışına çıkacak gönderilerde hız, bütçe ve teslimat güvenliği birlikte değerlendirilir.",
    visual: "/service-intercity.webp",
    visualAlt: "Şehirler arası kurye ve kargo aktarımı",
    items: [
      ["Uçak Kargo", "Havalimanı aktarmalı", "Uzak şehirlere hızlı ulaşması gereken evrak ve numuneler için havayolu bağlantısı kurulur."],
      ["Otobüs Kargo", "Terminal teslimatı", "Ekonomik şehir dışı gönderilerde uygun sefer ve terminal bağlantısı planlanır."],
      ["Çevre İl Kurye", "Kapıdan kapıya", "Bursa, Kocaeli ve Tekirdağ gibi yakın hatlarda doğrudan teslimat seçeneği değerlendirilir."],
    ],
  },
  {
    id: "kurumsal-cozumler",
    eyebrow: "İş ortaklığı",
    title: "Kurumsal Çözümler",
    intro: "Düzenli gönderi trafiği olan işletmeler için AcilJet, tekil kurye çağrısından daha planlı bir operasyon modeli sunar.",
    visual: "/aciljet-region-map.webp",
    visualAlt: "Kurumsal lojistik rota planlama görseli",
    items: [
      ["E-Ticaret Desteği", "Günlük çıkış", "Siparişlerin müşteriye hızlı ve marka itibarını koruyacak şekilde ulaşması hedeflenir."],
      ["Sözleşmeli Kurye", "Aylık model", "Düzenli evrak, numune veya şube arası teslimatlar için devamlı iş akışı kurulur."],
      ["Toplu Dağıtım", "Planlı dağıtım", "Davetiye, fatura, hediye veya kampanya paketleri adres listesine göre organize edilir."],
    ],
  },
];

export default function Hizmetlerimiz() {
  return (
    <>
      <Head>
        <title>Hizmetlerimiz | AcilJet Kurye</title>
        <meta name="description" content="AcilJet Kurye moto kurye, araçlı kurye, şehirlerarası kargo ve kurumsal lojistik çözümleri." />
        <link rel="canonical" href="https://www.aciljetkurye.com/hizmetlerimiz" />
      </Head>
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

        {groups.map((group, index) => (
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
                {group.items.map(([name, time, text], itemIndex) => (
                  <article key={name} className="grid gap-3 border-b border-[#d8c7b0]/60 p-6 last:border-b-0 md:grid-cols-[0.35fr_1fr]">
                    <div>
                      <p className={["text-xs font-extrabold uppercase tracking-[0.16em]", itemIndex === 0 ? "text-[#7a1e2d]" : "text-[#8a7258]"].join(" ")}>{time}</p>
                      <h3 className="mt-2 text-xl font-extrabold text-[#111418]">{name}</h3>
                    </div>
                    <p className="leading-7 text-[#111418]/66">{text}</p>
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
