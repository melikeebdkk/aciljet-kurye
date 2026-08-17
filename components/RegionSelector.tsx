export default function RegionSelector() {
  const regions = [
    { name: "Anadolu Yakası", desc: "İlçe içi ve yakalar arası hızlı teslimat" },
    { name: "Avrupa Yakası", desc: "Aynı gün ve ekspres seçenekleri" },
    { name: "Şehirlerarası", desc: "Uçak kargo ile aynı gün varış" },
  ];
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {regions.map((r) => (
        <div key={r.name} className="glass p-6 shadow-soft">
          <h3 className="font-bold text-lg mb-2">{r.name}</h3>
          <p className="text-kurye-navy/70">{r.desc}</p>
        </div>
      ))}
    </div>
  );
}
