export type FaqItem = {
  question: string;
  answer: string;
};

export const homeFaqs: FaqItem[] = [
  {
    question: "Acil kurye talebinde hangi bilgiler gerekir?",
    answer: "Alım adresi, teslim adresi, paket boyutu ve aciliyet seviyesi yeterlidir. Bu bilgilerle uygun kurye modeli hızlıca belirlenir.",
  },
  {
    question: "Sadece moto kurye mi çalışır?",
    answer: "Hayır. Motor, binek, Doblo, panelvan ve kamyonet seçenekleri gönderinin hacmine göre değerlendirilir.",
  },
  {
    question: "Gece kurye talebi alınır mı?",
    answer: "Evet. AcilJet Kurye, mesai dışı talepler için de 7/24 yönlendirme yapabilecek yapıda konumlandırılır.",
  },
  {
    question: "Fiyat nasıl netleşir?",
    answer: "Mesafe, paket hacmi ve seçilen teslimat modu birlikte hesaplanır; gereksiz araç veya süre maliyeti oluşturulmaz.",
  },
];

export const serviceOverviewFaqs: FaqItem[] = [
  {
    question: "Hangi kurye hizmetini seçmeliyim?",
    answer: "Küçük ve acil gönderiler için moto kurye, öncelikli işler için VIP veya express kurye, hacimli paketler için araçlı kurye daha uygundur.",
  },
  {
    question: "İstanbul dışı gönderiler için destek var mı?",
    answer: "Evet. Şehirlerarası kurye, uçak kargo, otobüs kargo ve çevre il araçlı teslimat seçenekleri talebe göre değerlendirilir.",
  },
  {
    question: "Kurumsal düzenli gönderi yapılabilir mi?",
    answer: "E-ticaret, hukuk, sağlık, üretim ve ofis ekipleri için düzenli gönderi trafiğine uygun kurumsal çözümler oluşturulabilir.",
  },
];

export const contactFaqs: FaqItem[] = [
  {
    question: "AcilJet Kurye'ye en hızlı nasıl ulaşırım?",
    answer: "Acil gönderiler için telefonla arayabilir veya WhatsApp üzerinden alım adresi, teslim adresi ve paket bilgisini gönderebilirsiniz.",
  },
  {
    question: "WhatsApp ile fiyat alabilir miyim?",
    answer: "Evet. Mesafe, paket hacmi ve aciliyet bilgisini paylaştığınızda uygun teslimat modeli ve fiyat yaklaşımı hızlıca netleşir.",
  },
  {
    question: "7/24 kurye talebi oluşturabilir miyim?",
    answer: "AcilJet Kurye, gece ve hafta sonu dahil acil teslimat talepleri için 7/24 iletişim hattı sunar.",
  },
];
