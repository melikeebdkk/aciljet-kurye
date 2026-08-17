import Image from "next/image";
import Link from "next/link";

const phoneDisplay = "0542 842 10 13";
const phoneHref = "tel:+905428421013";
const whatsappHref =
  "https://wa.me/905428421013?text=Merhaba%2C%20kurye%20hizmeti%20i%C3%A7in%20fiyat%20almak%20istiyorum.";

const mainLinks = [
  ["Anasayfa", "/"],
  ["Hakkımızda", "/hakkimizda"],
  ["Hizmetlerimiz", "/hizmetlerimiz"],
  ["Bölgelerimiz", "/bolgelerimiz"],
  ["İletişim", "/iletisim"],
];

const serviceLinks = [
  ["Moto Kurye", "/hizmetlerimiz#moto-kurye"],
  ["Araçlı Lojistik", "/hizmetlerimiz#aracli-lojistik"],
  ["Şehirlerarası", "/hizmetlerimiz#sehirlerarasi"],
  ["Kurumsal Çözümler", "/hizmetlerimiz#kurumsal-cozumler"],
];

const regionLinks = [
  ["Kadıköy", "/bolgelerimiz/kadikoy-kurye"],
  ["Ataşehir", "/bolgelerimiz/atasehir-kurye"],
  ["Maslak", "/bolgelerimiz/maslak-kurye"],
  ["İkitelli", "/bolgelerimiz/ikitelli-kurye"],
  ["Gebze & Kocaeli", "/bolgelerimiz/gebze-kocaeli-kurye"],
];

export default function Footer() {
  return (
    <footer className="border-t border-[#d8c7b0]/70 bg-[#fbfaf7] px-4 pb-28 pt-12 sm:px-6 lg:px-8 lg:pb-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#d8c7b0]/80 bg-[radial-gradient(circle_at_12%_10%,rgba(216,199,176,0.34),transparent_31%),radial-gradient(circle_at_88%_16%,rgba(122,30,45,0.12),transparent_32%),linear-gradient(135deg,#fffdf8_0%,#f8f3ec_48%,#ffffff_100%)] shadow-[0_28px_90px_rgba(42,13,21,0.08)]">
        <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[1.05fr_1.35fr_0.8fr] lg:p-10">
          <div className="space-y-5">
            <Link href="/" prefetch={false} className="inline-flex">
              <Image
                src="/aciljet-logo-premium.svg"
                alt="AcilJet Kurye"
                width={430}
                height={150}
                className="h-16 w-auto"
              />
            </Link>
            <p className="max-w-md text-sm leading-7 text-[#111418]/68">
              İstanbul ve çevre illerde acil moto kurye, araçlı kurye, VIP teslimat ve şehirlerarası lojistik
              çözümleri için hızlı, net ve kontrollü operasyon.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <FooterColumn title="Hızlı Bağlantılar" links={mainLinks} />
            <FooterColumn title="Hizmetler" links={serviceLinks} />
            <FooterColumn title="Bölgeler" links={regionLinks} />
          </div>

          <div className="rounded-[1.6rem] border border-[#d8c7b0]/24 bg-[radial-gradient(circle_at_18%_18%,rgba(122,30,45,0.42),transparent_34%),linear-gradient(135deg,#241118_0%,#111418_52%,#07080a_100%)] p-5 text-white shadow-[0_22px_60px_rgba(17,20,24,0.18)]">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d8c7b0]">7/24 Kurye Hattı</p>
            <a href={phoneHref} className="mt-3 block text-2xl font-black tracking-tight transition hover:text-[#d8c7b0]">
              {phoneDisplay}
            </a>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Alım adresini, teslim noktasını ve paket tipini iletin; uygun teslimat modelini hızlıca netleştirelim.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={phoneHref}
                className="rounded-xl bg-white px-4 py-3 text-sm font-black text-[#111418] transition hover:bg-[#d8c7b0]"
              >
                Hemen Ara
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/18 px-4 py-3 text-sm font-black text-white transition hover:border-[#d8c7b0] hover:text-[#d8c7b0]"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d8c7b0]/55 bg-white/45 px-6 py-5 text-center text-xs font-bold text-[#111418]/48">
          © {new Date().getFullYear()} AcilJet Kurye. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#7a1e2d]">{title}</h3>
      <div className="mt-4 grid gap-3">
        {links.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            prefetch={false}
            className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-[#111418]/68 transition hover:text-[#7a1e2d]"
          >
            <span className="h-px w-5 bg-[#d8c7b0] transition group-hover:w-8 group-hover:bg-[#7a1e2d]" />
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
