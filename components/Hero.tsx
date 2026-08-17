import Image from "next/image";

export default function Hero() {
  return (
    <section className="aciljet-shell px-3 py-4 sm:px-6 sm:py-7 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.7rem] border border-[#d8c7b0]/80 bg-white shadow-[0_28px_84px_rgba(42,13,21,0.13)] sm:rounded-[2.2rem]">
        <div className="aciljet-line-grid absolute inset-0 opacity-55" />
        <div className="absolute -right-28 top-20 h-72 w-72 rounded-full bg-[#7a1e2d]/12 blur-3xl" />
        <div className="absolute -left-24 bottom-4 h-64 w-64 rounded-full bg-[#d8c7b0]/34 blur-3xl" />
        <div className="relative grid min-h-[33rem] gap-8 px-5 py-8 sm:px-10 sm:py-12 lg:grid-cols-[0.98fr_0.72fr] lg:items-center lg:px-16 lg:py-16">
          <div>
            <p className="inline-flex max-w-full rounded-full border border-[#d8c7b0]/80 bg-white/78 px-4 py-2 text-[0.58rem] font-extrabold uppercase tracking-[0.24em] text-[#7a1e2d] shadow-[0_14px_36px_rgba(216,199,176,0.28)] sm:text-xs md:text-sm">
              Acil kurye operasyonu
            </p>
            <h1 className="mt-6 max-w-5xl text-[2.35rem] font-extrabold leading-[1.02] tracking-tight text-[#111418] min-[420px]:text-[2.75rem] sm:text-6xl lg:text-[5.25rem]">
              Acil gönderiniz için
              <br />
              <span className="text-[#7a1e2d]">keskin rota, net teslimat.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-[#111418]/68 md:text-lg">
              AcilJet Kurye; İstanbul içi moto kurye, araçlı kurye ve şehirlerarası teslimat taleplerinde hızlı karar, doğru ekip ve kontrollü operasyon diliyle çalışır.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="tel:+905428421013" className="btn-primary">Hemen Ara</a>
              <a href="https://wa.me/905428421013?text=Merhaba%2C%20kurye%20hizmeti%20i%C3%A7in%20fiyat%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="btn-ghost">WhatsApp</a>
            </div>
          </div>

          <div className="relative min-h-[21rem] overflow-hidden rounded-[1.65rem] border border-[#d8c7b0]/80 bg-[#111418] p-6 text-white shadow-[0_22px_60px_rgba(17,20,24,0.18)] lg:min-h-[28rem]">
            <Image
              src="/aciljet-motokurye-logo-hero.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-cover object-[62%_center]"
              priority={false}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,20,24,0.88)_0%,rgba(42,13,21,0.72)_48%,rgba(17,20,24,0.42)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_28%,rgba(122,30,45,0.30),transparent_42%),linear-gradient(180deg,rgba(17,20,24,0.15)_0%,rgba(17,20,24,0.72)_100%)]" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#d8c7b0]">Operasyon Mantığı</p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">Adres, paket, aciliyet. Gerisi rota planı.</h2>
              </div>
              <div className="mt-8 grid gap-3">
                {["Acil alım yönlendirmesi", "Moto veya araçlı ekip seçimi", "Teslimat süresi ve fiyat netliği"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/12 bg-white/[0.08] px-4 py-3 backdrop-blur">
                    <span className="mb-2 block h-1 w-10 rounded-full bg-[#d8c7b0]" />
                    <p className="text-sm font-extrabold text-white/90">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
