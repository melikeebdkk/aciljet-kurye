import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { regions } from "../data/regions";

const nav = [
  { name: "Anasayfa", href: "/" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Hizmetlerimiz", href: "/hizmetlerimiz" },
  { name: "Bölgelerimiz", href: "/bolgelerimiz" },
  { name: "İletişim", href: "/iletisim" },
];

const serviceLinks = [
  { title: "Moto Kurye Çözümleri", href: "/hizmetlerimiz#moto-kurye" },
  { title: "Araçlı Lojistik & Filo", href: "/hizmetlerimiz#aracli-lojistik" },
  { title: "Uçak & Otobüs Kargo", href: "/hizmetlerimiz#sehirlerarasi" },
  { title: "Kurumsal İş Ortaklığı", href: "/hizmetlerimiz#kurumsal-cozumler" },
];

const accentBars = ["bg-[#7a1e2d]", "bg-[#d8c7b0]", "bg-[#111418]", "bg-[#a3263a]"];
const regionCardStyles = [
  "bg-[linear-gradient(135deg,#ffffff_0%,#fff7ec_100%)] hover:border-[#7a1e2d]/35",
  "bg-[linear-gradient(135deg,#ffffff_0%,#f8ecee_100%)] hover:border-[#7a1e2d]/35",
  "bg-[linear-gradient(135deg,#ffffff_0%,#f5efe6_100%)] hover:border-[#d8c7b0]",
  "bg-[linear-gradient(135deg,#ffffff_0%,#f7f4ef_100%)] hover:border-[#111418]/20",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const linkClass = (href: string) => [
    "relative whitespace-nowrap text-[15px] font-extrabold text-[#111418] transition-colors duration-200 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#7a1e2d] after:transition-transform after:duration-200 hover:text-[#7a1e2d] hover:after:scale-x-100",
    router.pathname === href ? "text-[#7a1e2d] after:scale-x-100" : "",
  ].join(" ");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d8c7b0]/70 bg-white/94 shadow-[0_10px_30px_rgba(42,13,21,0.07)] backdrop-blur">
      <div className="mx-auto w-full max-w-[1510px] px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[86px] items-center justify-between gap-4 py-3 sm:min-h-[92px]">
          <Link href="/" prefetch={false} className="flex min-w-0 shrink-0 items-center">
            <Image src="/aciljet-logo-premium.svg" alt="AcilJet Kurye" width={430} height={150} className="h-12 w-auto shrink-0 sm:h-[54px] lg:h-[58px]" priority />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-9">
            {nav.map((item) => item.href === "/hizmetlerimiz" ? (
              <div key={item.name} className="group relative py-7">
                <Link href={item.href} prefetch={false} className={linkClass(item.href)}>{item.name}</Link>
                <div className="pointer-events-none absolute left-1/2 top-[4.2rem] w-[350px] -translate-x-1/2 translate-y-2 overflow-hidden rounded-[1.35rem] border border-[#d8c7b0]/80 bg-white p-4 opacity-0 shadow-[0_28px_80px_rgba(42,13,21,0.18)] transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="pointer-events-none absolute inset-0 aciljet-champagne-panel" />
                  <div className="relative"><p className="pb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#7a1e2d]">Hizmetlerimiz</p><div className="grid gap-2">
                    {serviceLinks.map((service, index) => (<Link key={service.href} href={service.href} prefetch={false} className="group flex items-center gap-3 rounded-xl px-2 py-2.5 text-sm font-extrabold text-[#111418] transition hover:bg-white/75 hover:text-[#7a1e2d]"><span className={["h-8 w-1 rounded-full transition group-hover:h-10", accentBars[index] || "bg-[#7a1e2d]"].join(" ")} /><span>{service.title}</span></Link>))}
                  </div></div>
                </div>
              </div>
            ) : item.href === "/bolgelerimiz" ? (
              <div key={item.name} className="group relative py-7">
                <Link href={item.href} prefetch={false} className={linkClass(item.href)}>{item.name}</Link>
                <div className="pointer-events-none absolute left-1/2 top-[4.2rem] w-[820px] -translate-x-1/2 translate-y-2 overflow-hidden rounded-[1.35rem] border border-[#d8c7b0]/80 bg-white p-3 opacity-0 shadow-[0_28px_80px_rgba(42,13,21,0.20)] transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="pointer-events-none absolute inset-0 aciljet-champagne-panel" />
                  <div className="relative"><p className="px-2 pb-3 pt-1 text-xs font-extrabold uppercase tracking-[0.2em] text-[#7a1e2d]">Bölgelerimiz</p><div className="grid gap-3 lg:grid-cols-2">
                    {regions.map((region, index) => (<div key={region.id} className={["rounded-[1rem] border border-[#d8c7b0]/75 p-3 transition", regionCardStyles[index] || "bg-white"].join(" ")}><Link href={`/bolgelerimiz#${region.id}`} prefetch={false} className="flex items-center gap-3"><span className={["h-9 w-1.5 rounded-full", accentBars[index] || "bg-[#7a1e2d]"].join(" ")} /><span className="block text-sm font-extrabold text-[#111418] transition hover:text-[#7a1e2d]">{region.eyebrow}</span></Link><div className="mt-3 grid grid-cols-2 gap-1.5">{region.districts.map((district) => (<a key={district.slug} href={`/bolgelerimiz/${district.slug}`} className="rounded-xl border border-[#d8c7b0]/70 bg-white/86 px-3 py-2 text-xs font-bold leading-5 text-[#111418]/72 shadow-[0_6px_14px_rgba(42,13,21,0.035)] transition hover:border-[#7a1e2d]/30 hover:bg-[#7a1e2d] hover:text-white">{district.name}</a>))}</div></div>))}
                  </div></div>
                </div>
              </div>
            ) : (<Link key={item.name} href={item.href} prefetch={false} className={linkClass(item.href)}>{item.name}</Link>))}
          </nav>

          <div className="flex shrink-0 items-center gap-2.5">
            <a href="tel:+905428421013" className="hidden min-h-11 items-center justify-center whitespace-nowrap rounded-2xl border border-[#d8c7b0]/80 bg-white px-5 text-sm font-extrabold text-[#111418] transition hover:border-[#7a1e2d] hover:text-[#7a1e2d] xl:inline-flex" aria-label="Telefonla Ara">0542 842 10 13</a>
            <a href="https://wa.me/905428421013?text=Merhaba%2C%20kurye%20talebi%20olu%C5%9Fturmak%20istiyorum." target="_blank" rel="noopener noreferrer" className="hidden min-h-11 items-center justify-center whitespace-nowrap rounded-2xl bg-[linear-gradient(135deg,#7a1e2d_0%,#111418_100%)] px-5 text-sm font-extrabold text-white shadow-[0_18px_36px_rgba(122,30,45,0.18)] transition hover:brightness-110 sm:inline-flex" aria-label="WhatsApp'tan yaz">WhatsApp</a>
            <button className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d8c7b0]/80 text-[#111418] transition hover:border-[#7a1e2d] hover:text-[#7a1e2d] lg:hidden" onClick={() => setOpen(!open)} aria-label="Menüyü Aç/Kapat" aria-expanded={open}><span className="sr-only">Menu</span><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
          </div>
        </div>
        {open && (<div className="pb-2 pt-3 lg:hidden"><nav className="max-h-[calc(100vh-7rem)] overflow-y-auto rounded-[1.5rem] border border-[#d8c7b0]/80 bg-white p-2 shadow-soft"><div className="flex flex-col gap-2">{nav.map((item) => (<Link key={item.name} href={item.href} prefetch={false} className={["rounded-2xl px-4 py-3 font-bold text-[#111418] transition-colors hover:bg-[#fff7ec] hover:text-[#7a1e2d]", router.pathname === item.href ? "bg-[#fff7ec] text-[#7a1e2d]" : ""].join(" ")} onClick={() => setOpen(false)}>{item.name}</Link>))}</div><div className="mt-2 grid gap-1 border-y border-[#d8c7b0]/70 py-2">{serviceLinks.map((service, index) => (<Link key={service.href} href={service.href} prefetch={false} className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-extrabold text-[#111418]/78 transition hover:bg-[#fff7ec] hover:text-[#7a1e2d]" onClick={() => setOpen(false)}><span className={["h-7 w-1.5 rounded-full", accentBars[index] || "bg-[#7a1e2d]"].join(" ")} /><span>{service.title}</span></Link>))}</div><a href="tel:+905428421013" className="mt-2 block rounded-2xl px-4 py-3 font-bold text-[#111418] hover:bg-[#fff7ec]">0542 842 10 13</a><a href="https://wa.me/905428421013?text=Merhaba%2C%20kurye%20talebi%20olu%C5%9Fturmak%20istiyorum." target="_blank" rel="noopener noreferrer" className="mt-2 block rounded-2xl bg-[linear-gradient(135deg,#7a1e2d,#111418)] px-4 py-3 font-bold text-white">WhatsApp</a></nav></div>)}
      </div>
    </header>
  );
}
