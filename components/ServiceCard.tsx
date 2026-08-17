type Props = {
  title: string;
  desc: string;
};

function ServiceIcon({ title }: { title: string }) {
  if (title.toLowerCase().includes("araç")) {
    return (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden="true">
        <path d="M8 29h3l4-12h20l5 12h2v9h-5a5 5 0 0 1-10 0h-7a5 5 0 0 1-10 0H8v-9Z" stroke="currentColor" strokeWidth="3" />
        <path d="M16 17h15l3 8H13l3-8Z" stroke="currentColor" strokeWidth="3" />
      </svg>
    );
  }

  if (title.toLowerCase().includes("şehir")) {
    return (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden="true">
        <path d="M6 31 41 9l-9 34-8-14-18 2Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="m24 29 17-20" stroke="currentColor" strokeWidth="3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden="true">
      <path d="M11 29h18l7-8h6" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
      <path d="M18 29h10l4 8H15l3-8Z" stroke="currentColor" strokeWidth="3" />
      <circle cx="16" cy="38" r="4" stroke="currentColor" strokeWidth="3" />
      <circle cx="35" cy="38" r="4" stroke="currentColor" strokeWidth="3" />
      <path d="M9 21h13l5-8h8" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

export default function ServiceCard({ title, desc }: Props) {
  return (
    <div className="glass p-6 shadow-soft transition hover:translate-y-[-2px]">
      <div className="flex items-center gap-4 mb-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-kurye-petrol/25 bg-kurye-smoke text-kurye-petrol">
          <ServiceIcon title={title} />
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <p className="text-kurye-navy/70">{desc}</p>
    </div>
  );
}
