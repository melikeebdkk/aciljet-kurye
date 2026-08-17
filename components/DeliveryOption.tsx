import Image from "next/image";

type Item = { name: string; detail: string; iconSrc?: string; };

export default function DeliveryOption({ title, items }: { title: string; items: Item[] }) {
  return (
    <div className="glass p-6 shadow-soft">
      <h4 className="text-lg font-semibold mb-4">{title}</h4>
      <ul className="space-y-3">
        {items.map((i) => (
          <li key={i.name} className="flex items-start gap-3">
            {i.iconSrc ? (
              <Image src={i.iconSrc} alt={i.name} width={28} height={28} className="mt-0.5 h-7 w-7 object-contain" />
            ) : (
              <span className="mt-1 inline-block w-2 h-2 rounded-full bg-white/70" />
            )}
            <div>
              <p className="font-medium">{i.name}</p>
              <p className="text-sm text-kurye-navy/70">{i.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
