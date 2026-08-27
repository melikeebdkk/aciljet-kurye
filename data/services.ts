export type ServiceItem = {
  name: string;
  label: string;
  text: string;
};

export type ServiceGroup = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  visual: string;
  visualAlt: string;
  items: ServiceItem[];
};

export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroText: string;
  visual: string;
  visualAlt: string;
  highlights: string[];
  sections: Array<{
    title: string;
    text: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "moto-kurye",
    eyebrow: "Hız odaklı",
    title: "Moto Kurye Hizmetleri",
    intro: "AcilJet moto kurye hizmeti; evrak, küçük paket, numune ve zaman hassasiyeti olan teslimatlarda hızlı hareket etmek için kurgulanır.",
    visual: "/aciljet-moto-service.webp",
    visualAlt: "AcilJet moto kurye hizmetleri",
    items: [
      { name: "V.I.P. Kurye", label: "45-60 Dakika", text: "En acil gönderilerde paket başka teslimatlarla birleştirilmeden öncelikli teslimat planıyla ilerler." },
      { name: "Express Kurye", label: "90 Dakika", text: "Acil ama tekil teslimat gerektirmeyen gönderiler için hız ve maliyet dengesi kurulur." },
      { name: "Normal Kurye", label: "180 Dakika", text: "Gün içinde yetişmesi gereken planlı paketler için ekonomik ve kontrollü teslimat yapılır." },
      { name: "Gece Kuryesi", label: "7/24", text: "Mesai sonrası ortaya çıkan evrak, paket ve operasyon ihtiyaçları için yönlendirme sağlanır." },
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
      { name: "Hafif Ticari Kurye", label: "Binek & Doblo", text: "Orta hacimli paketler, cihazlar ve hassas teslimatlar için korunaklı araç seçeneği." },
      { name: "Panelvan & Kamyonet", label: "Hacimli gönderi", text: "Koli, numune, mağaza çıkışı veya üretim malzemesi gibi büyük gönderiler için tek seferlik taşıma planı." },
      { name: "Esnek Filo Yönetimi", label: "Maliyet kontrolü", text: "Paket boyutu ve teslimat yönü dikkate alınarak gereksiz büyük araç maliyeti engellenir." },
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
      { name: "Uçak Kargo", label: "Havalimanı aktarmalı", text: "Uzak şehirlere hızlı ulaşması gereken evrak ve numuneler için havayolu bağlantısı kurulur." },
      { name: "Otobüs Kargo", label: "Terminal teslimatı", text: "Ekonomik şehir dışı gönderilerde uygun sefer ve terminal bağlantısı planlanır." },
      { name: "Çevre İl Kurye", label: "Kapıdan kapıya", text: "Bursa, Kocaeli ve Tekirdağ gibi yakın hatlarda doğrudan teslimat seçeneği değerlendirilir." },
    ],
  },
  {
    id: "kurumsal-cozumler",
    eyebrow: "İş ortaklığı",
    title: "Kurumsal Çözümler",
    intro: "Düzenli gönderi trafiği olan işletmeler için AcilJet Kurye, tekil kurye çağrısından daha planlı bir operasyon modeli sunar.",
    visual: "/aciljet-region-map.webp",
    visualAlt: "Kurumsal lojistik teslimat planlama görseli",
    items: [
      { name: "E-Ticaret Desteği", label: "Günlük çıkış", text: "Siparişlerin müşteriye hızlı ve marka itibarını koruyacak şekilde ulaşması hedeflenir." },
      { name: "Sözleşmeli Kurye", label: "Aylık model", text: "Düzenli evrak, numune veya şube arası teslimatlar için devamlı iş akışı kurulur." },
      { name: "Toplu Dağıtım", label: "Planlı dağıtım", text: "Davetiye, fatura, hediye veya kampanya paketleri adres listesine göre organize edilir." },
    ],
  },
];

export const servicePages: ServicePage[] = [
  {
    slug: "moto-kurye",
    title: "Moto Kurye",
    shortTitle: "Moto Kurye",
    metaTitle: "İstanbul Moto Kurye | 7/24 Hızlı Motorlu Kurye | AcilJet Kurye",
    metaDescription: "İstanbul moto kurye hizmeti: evrak, paket, numune ve acil gönderiler için 7/24 hızlı motorlu kurye çözümleri. AcilJet ile telefon veya WhatsApp üzerinden talep oluşturun.",
    heroTitle: "İstanbul içi acil gönderiler için moto kurye.",
    heroText: "Motorlu kurye, küçük ve orta boy gönderilerde trafik baskısını azaltan en pratik teslimat modelidir. AcilJet Kurye, talebi alır, paket tipini değerlendirir ve uygun ekibi hızlıca yönlendirir.",
    visual: "/aciljet-moto-service.webp",
    visualAlt: "İstanbul moto kurye hizmeti",
    highlights: ["Evrak ve küçük paket", "Acil alım yönlendirmesi", "7/24 talep hattı", "İstanbul içi teslimat"],
    sections: [
      { title: "Moto kurye hangi gönderiler için uygundur?", text: "Sözleşme, fatura, ihale dosyası, numune, küçük ürün ve zaman hassasiyeti olan paketler moto kurye için uygundur. Paket hacmi büyüdüğünde araçlı seçenek ayrıca değerlendirilir." },
      { title: "Teslimat süresi nasıl belirlenir?", text: "Alım adresi, teslim noktası, paket içeriği ve aciliyet seviyesi birlikte değerlendirilir. VIP, express veya normal teslimat seçeneklerinden uygun olanı seçilir." },
      { title: "Kurumsal işler için moto kurye", text: "Hukuk büroları, klinikler, ajanslar, e-ticaret ekipleri ve ofisler düzenli evrak veya numune gönderilerinde moto kurye hizmetinden yararlanabilir." },
    ],
    faqs: [
      { question: "Moto kurye ne taşır?", answer: "Evrak, küçük paket, numune, medikal evrak, ticari ürün ve zaman hassasiyeti olan gönderiler taşınabilir." },
      { question: "Moto kurye talebi nasıl oluşturulur?", answer: "Alım adresi, teslim adresi, paket boyutu ve aciliyet bilgisini telefon veya WhatsApp üzerinden iletmeniz yeterlidir." },
    ],
  },
  {
    slug: "vip-kurye",
    title: "VIP Kurye",
    shortTitle: "VIP Kurye",
    metaTitle: "VIP Kurye İstanbul | Acil ve Beklemesiz Teslimat | AcilJet Kurye",
    metaDescription: "VIP kurye hizmetiyle acil evrak ve özel paketleriniz İstanbul içinde bekletilmeden teslimat planına alınır. AcilJet 7/24 VIP kurye desteği sunar.",
    heroTitle: "Acil ve hassas gönderiler için VIP kurye.",
    heroText: "VIP kurye, gönderinin başka teslimatlarla birleştirilmeden öncelikli ele alınması gereken durumlar için tasarlanır. Kritik evrak, hassas paket ve zaman sınırı olan işler için uygundur.",
    visual: "/service-moto-selected.webp",
    visualAlt: "VIP kurye teslimat hizmeti",
    highlights: ["Öncelikli teslimat", "Hassas gönderi takibi", "45-60 dakika hedefi", "Telefon ve WhatsApp talebi"],
    sections: [
      { title: "VIP kurye ne zaman tercih edilir?", text: "Duruşma, ihale, toplantı, medikal belge veya müşteriye özel teslimat gibi zamanın kritik olduğu işlerde VIP kurye tercih edilir." },
      { title: "Beklemesiz teslimat yaklaşımı", text: "Paket alındıktan sonra teslimat planı tek gönderi odağında kurulur. Böylece ara beklemeler ve gereksiz zaman kaybı azaltılır." },
      { title: "Güven ve iletişim", text: "VIP gönderilerde adres, kişi ve teslim bilgisi netleştirilir. Süre ve teslimat modeli talep anında açık biçimde paylaşılır." },
    ],
    faqs: [
      { question: "VIP kurye ile express kurye farkı nedir?", answer: "VIP kurye daha acil ve hassas işler için öncelikli ele alınır; express kurye ise hız ve maliyet dengesini koruyan bir seçenektir." },
      { question: "VIP kurye gece çalışır mı?", answer: "Evet, uygun operasyon koşullarında 7/24 VIP kurye talebi alınabilir." },
    ],
  },
  {
    slug: "express-kurye",
    title: "Express Kurye",
    shortTitle: "Express Kurye",
    metaTitle: "Express Kurye İstanbul | 90 Dakika Hedefli Teslimat | AcilJet Kurye",
    metaDescription: "Express kurye hizmeti; İstanbul içi acil ama ekonomik teslimatlar için 90 dakika hedefli hızlı kurye çözümü sunar. AcilJet ile hemen talep oluşturun.",
    heroTitle: "Hız ve maliyet dengesini koruyan express kurye.",
    heroText: "Express kurye, gönderinin gün içinde hızlıca ulaşması gereken ama VIP seviyesinde tekil öncelik gerektirmeyen durumlarda güçlü bir seçenektir.",
    visual: "/service-moto.webp",
    visualAlt: "Express kurye motorlu teslimat",
    highlights: ["90 dakika hedefi", "Öncelikli akış", "Evrak ve paket", "İstanbul içi çözüm"],
    sections: [
      { title: "Express kurye kimler için uygundur?", text: "Ofisler, mağazalar, klinikler, ajanslar ve e-ticaret ekipleri gün içinde yetişmesi gereken gönderilerde express kurye kullanabilir." },
      { title: "Planlı ama hızlı teslimat", text: "Express kurye, aciliyeti yüksek gönderiyi uygun ekip ve zaman penceresiyle birleştirir. Böylece hız korunurken maliyet kontrol altında kalır." },
      { title: "Talep için gereken bilgiler", text: "Alım ve teslim adresi, paket boyutu, alıcı bilgisi ve teslimat aciliyeti fiyat ve süre yaklaşımını netleştirir." },
    ],
    faqs: [
      { question: "Express kurye kaç dakikada teslim eder?", answer: "Gönderi ve mesafeye göre değişmekle birlikte express kurye için 90 dakika hedefli teslimat yaklaşımı kullanılır." },
      { question: "Express kurye araçlı olabilir mi?", answer: "Paket hacmi motora uygun değilse hafif ticari veya panelvan seçenekleri değerlendirilebilir." },
    ],
  },
  {
    slug: "aracli-kurye",
    title: "Araçlı Kurye",
    shortTitle: "Araçlı Kurye",
    metaTitle: "Araçlı Kurye İstanbul | Doblo, Panelvan ve Kamyonet | AcilJet Kurye",
    metaDescription: "Araçlı kurye hizmeti; koli, numune, cihaz, mağaza sevkiyatı ve hacimli gönderiler için Doblo, panelvan ve kamyonet seçenekleri sunar.",
    heroTitle: "Motora sığmayan gönderiler için araçlı kurye.",
    heroText: "Araçlı kurye, paket hacmi büyüdüğünde veya gönderi hassas taşıma istediğinde devreye girer. AcilJet Kurye, gönderiye göre binek, Doblo, panelvan veya kamyonet seçeneği değerlendirir.",
    visual: "/aciljet-parcel-van-premium.webp",
    visualAlt: "Araçlı kurye ve panelvan teslimat",
    highlights: ["Doblo ve panelvan", "Hacimli koli", "Hassas cihaz taşıma", "Şirket teslimatları"],
    sections: [
      { title: "Araçlı kurye hangi işler için uygundur?", text: "Çok adetli koli, mağaza ürünü, numune, teknik cihaz, yedek parça, stand malzemesi ve motora sığmayan gönderiler araçlı kurye için uygundur." },
      { title: "Doğru araç seçimi", text: "Paketin hacmi, ağırlığı, hassasiyeti ve teslimat yönü birlikte değerlendirilir. Gereksiz büyük araç maliyeti oluşturmadan uygun model seçilir." },
      { title: "Kurumsal ve düzenli sevkiyat", text: "E-ticaret, üretim, sağlık, hukuk, reklam ve mağaza ekipleri düzenli araçlı kurye ihtiyaçları için AcilJet ile çalışabilir." },
    ],
    faqs: [
      { question: "Araçlı kurye hangi araçlarla yapılır?", answer: "Gönderiye göre binek araç, Doblo, panelvan veya kamyonet seçenekleri değerlendirilebilir." },
      { question: "Araçlı kurye aynı gün teslim eder mi?", answer: "İstanbul içi ve yakın çevre teslimatlarda uygun koşullarda aynı gün teslimat planlanabilir." },
    ],
  },
  {
    slug: "gece-kurye",
    title: "Gece Kurye",
    shortTitle: "Gece Kurye",
    metaTitle: "Gece Kurye İstanbul | 7/24 Acil Kurye Hizmeti | AcilJet Kurye",
    metaDescription: "Gece kurye hizmetiyle mesai sonrası acil evrak, paket ve özel gönderiler için 7/24 telefon ve WhatsApp üzerinden kurye talebi oluşturabilirsiniz.",
    heroTitle: "Mesai sonrası acil gönderiler için gece kurye.",
    heroText: "Acil gönderiler yalnızca mesai saatlerinde ortaya çıkmaz. Gece kurye hizmeti, akşam, gece ve hafta sonu oluşan teslimat ihtiyaçları için planlanır.",
    visual: "/service-corporate.webp",
    visualAlt: "Gece kurye ve 7/24 teslimat hizmeti",
    highlights: ["7/24 talep hattı", "Mesai sonrası teslimat", "Acil evrak ve paket", "Hafta sonu destek"],
    sections: [
      { title: "Gece kurye hangi durumlarda gerekir?", text: "Geç saatli toplantılar, nöbetçi klinikler, otel teslimatları, acil evraklar ve hafta sonu çıkan paket ihtiyaçları gece kurye kapsamına girer." },
      { title: "Gece teslimatında net iletişim", text: "Alıcı bilgisi, açık adres, teslimat zamanı ve paket içeriği baştan netleştirilir. Böylece gece operasyonlarında gereksiz bekleme azaltılır." },
      { title: "Telefon ve WhatsApp ile hızlı talep", text: "Gece kurye talebinde en hızlı yol telefon veya WhatsApp üzerinden adres ve paket bilgisini iletmektir." },
    ],
    faqs: [
      { question: "Gece kurye her ilçeye gider mi?", answer: "Operasyon uygunluğuna göre İstanbul içi birçok bölge için gece kurye yönlendirmesi yapılabilir." },
      { question: "Gece kurye fiyatı nasıl belirlenir?", answer: "Mesafe, saat, paket hacmi ve aciliyet seviyesi birlikte değerlendirilir." },
    ],
  },
  {
    slug: "sehirlerarasi-kurye",
    title: "Şehirlerarası Kurye",
    shortTitle: "Şehirlerarası",
    metaTitle: "Şehirlerarası Kurye | Uçak Kargo ve Otobüs Kargo | AcilJet Kurye",
    metaDescription: "İstanbul çıkışlı şehirlerarası kurye, uçak kargo, otobüs kargo ve çevre il araçlı teslimat çözümleri için AcilJet Kurye ile iletişime geçin.",
    heroTitle: "İstanbul çıkışlı şehirlerarası gönderiler için çözüm.",
    heroText: "Şehirlerarası kurye hizmeti; hız, bütçe ve teslimat güvenliği birlikte değerlendirilerek uçak kargo, otobüs kargo veya kapıdan kapıya araçlı teslimat seçenekleriyle planlanır.",
    visual: "/service-intercity.webp",
    visualAlt: "Şehirlerarası kurye ve kargo aktarımı",
    highlights: ["Uçak kargo", "Otobüs kargo", "Çevre il teslimatı", "Kapıdan kapıya seçenek"],
    sections: [
      { title: "Şehirlerarası kurye nasıl çalışır?", text: "Gönderinin varış şehri, teslim zamanı ve paket içeriğine göre havalimanı, terminal veya araçlı teslimat seçeneği değerlendirilir." },
      { title: "Uçak ve otobüs kargo bağlantısı", text: "Uzak şehirlerde hız gerektiğinde uçak kargo; ekonomik şehir dışı gönderilerde otobüs kargo bağlantısı planlanabilir." },
      { title: "Çevre illere aynı gün teslimat", text: "Kocaeli, Bursa, Tekirdağ ve yakın hatlarda kapıdan kapıya araçlı teslimat seçeneği değerlendirilebilir." },
    ],
    faqs: [
      { question: "Şehirlerarası kurye kapıdan kapıya olur mu?", answer: "Yakın çevre illerde ve uygun operasyon koşullarında kapıdan kapıya teslimat planlanabilir." },
      { question: "Uçak kargo için paketi siz mi teslim ediyorsunuz?", answer: "Gönderi adresinden alınarak uygun havalimanı kargo noktasına ulaştırılması koordine edilebilir." },
    ],
  },
];

export function getServicePageBySlug(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
