export default function NotFound() {
  return (
    <main className="container py-24 text-center">
      <h1 className="text-4xl font-extrabold mb-4">Sayfa bulunamadı (404)</h1>
      <p className="mb-8">Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.</p>
      <a href="/" className="underline">Anasayfa'ya dön</a>
    </main>
  );
}
