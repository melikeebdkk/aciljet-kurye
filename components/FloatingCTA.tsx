const phoneHref = "tel:+905364643329";
const whatsappHref =
  "https://wa.me/905364643329?text=Merhaba%2C%20kurye%20hizmeti%20i%C3%A7in%20fiyat%20almak%20istiyorum.";

export default function FloatingCTA() {
  return (
    <>
      <div className="fixed bottom-8 left-8 z-40 hidden overflow-hidden rounded-[1.65rem] border border-[#d8c7b0]/80 bg-[#fffdf8]/96 p-2 shadow-[0_22px_65px_rgba(42,13,21,0.14)] backdrop-blur lg:flex">
        <a
          href={phoneHref}
          className="group flex min-h-[68px] min-w-[150px] items-center justify-center gap-3 rounded-2xl px-4 text-center transition hover:bg-[#f8efe4]"
          aria-label="Telefonla ara"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#7a1e2d_0%,#111418_100%)] text-white transition group-hover:brightness-110">
            <svg width="23" height="23" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.11 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.07.92.28 1.81.62 2.64a2 2 0 0 1-.45 2.18L9.4 11.4a16 16 0 0 0 3.2 3.2l1.86-1.86a2 2 0 0 1 2.18-.45c.83.34 1.72.55 2.64.62A2 2 0 0 1 22 16.92Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-left text-sm font-black uppercase leading-4 tracking-wide text-[#111418]">
            Hemen
            <br />
            Ara
          </span>
        </a>
        <span className="my-2 w-px bg-[#d8c7b0]/70" />
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-h-[68px] min-w-[150px] items-center justify-center gap-3 rounded-2xl px-4 text-center transition hover:bg-[#f8efe4]"
          aria-label="WhatsApp'tan yaz"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d8c7b0] text-[#111418] transition group-hover:bg-[#7a1e2d] group-hover:text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M20.5 11.6a8.4 8.4 0 0 1-12.42 7.38L4 20l1.1-3.9A8.39 8.39 0 1 1 20.5 11.6Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-left text-sm font-black uppercase leading-4 tracking-wide text-[#111418]">
            WhatsApp
          </span>
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-3 z-40 mx-auto flex w-[calc(100%-1.5rem)] max-w-sm gap-2 rounded-[1.35rem] border border-[#d8c7b0]/80 bg-[#fffdf8]/96 p-2 shadow-[0_22px_65px_rgba(42,13,21,0.14)] backdrop-blur lg:hidden">
        <a
          href={phoneHref}
          className="flex min-h-12 flex-1 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#7a1e2d,#111418)] text-sm font-black uppercase tracking-wide text-white"
        >
          Hemen Ara
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 flex-1 items-center justify-center rounded-2xl border border-[#d8c7b0]/80 bg-[#f8efe4] px-2 text-[13px] font-black uppercase tracking-normal text-[#111418]"
        >
          WhatsApp
        </a>
      </div>
    </>
  );
}
