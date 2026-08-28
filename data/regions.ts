export type Accent = "petrol" | "burgundy" | "deepblue" | "ink";

export type District = {
  name: string;
  slug: string;
  headline: string;
  excerpt: string;
  article: string[];
  quickStat?: string;
};

export type Region = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  accent: Accent;
  districts: District[];
};

export const regions: Region[] = [
  {
    "id": "avrupa-yakasi",
    "eyebrow": "Avrupa Yakası",
    "title": "Avrupa Yakası kurye ve lojistik bölgeleri",
    "intro": "AcilJet Kurye, Avrupa Yakası'nın 25 ilçesinde havalimanı, sanayi, plaza, sağlık, ticaret ve şehirlerarası bağlantı ihtiyaçlarına göre moto kurye ve araçlı teslimat planı oluşturur.",
    "accent": "burgundy",
    "districts": [
      {
        "name": "Arnavutköy",
        "slug": "arnavutkoy-kurye",
        "headline": "Arnavutköy Kurye | İstanbul Havalimanı & Lojistik Koridoru",
        "excerpt": "Arnavutköy, İstanbul Havalimanı çevresindeki kargo antrepoları, gümrükleme ofisleri ve lojistik merkezleriyle stratejik bir teslimat bölgesidir. Geniş yüzölçümü nedeniyle hava kargo ve antrepo gönderilerinde doğru araç seçimi önem taşır.",
        "article": [
          "Arnavutköy, İstanbul Havalimanı’nın faaliyete geçmesi ve çevresinde kümelenen kargo antrepoları, gümrükleme ofisleri ve lojistik merkezleriyle kentin stratejik aktarma merkezlerinden birine dönüşmüştür. Geniş yüzölçümü ve gelişen sanayi/depolama aksı, zaman duyarlı hava kargo transferlerinde planlı kurye desteği gerektirir.",
          "Örneğin; havalimanı gümrük sahasında bekleyen kritik bir ithalat evrakını, konşimento asıllarını veya acil bir medikal test kitini mesai bitmeden Maslak veya İkitelli'deki merkezinize ulaştırmanız mı gerekiyor? Havalimanı bölgesinin geniş operasyon alanında vakit kaybetmek yerine AcilJet Kurye ile irtibata geçtiğinizde; havalimanı ve antrepo prosedürlerine hakim saha ekibimiz paketi hızlıca teslim alır ve bağlantı yollarını değerlendirerek doğrudan hedefe ulaştırır.",
          "Öne çıkan hizmetler: Havalimanı & Gümrük VIP Kurye; Uçak Kargo Entegrasyonlu Teslimat; Hafif Ticari & Panelvan Antrepo Transferi; 7/24 Kesintisiz Lojistik Hattı."
        ],
        "quickStat": "Havalimanı & Gümrük VIP Kurye"
      },
      {
        "name": "Avcılar",
        "slug": "avcilar-kurye",
        "headline": "Avcılar Moto Kurye | Üniversite, Ambarlı Limanı & E-5 Hattı",
        "excerpt": "Avcılar; Ambarlı Limanı, üniversite kampüsleri, otomotiv yan sanayisi ve E-5 üzerindeki ticari hareketliliğiyle batı İstanbul'un yoğun kurye bölgelerindendir. Liman evrakı, numune ve ticari paketler için zaman planı net olan teslimat gerekir.",
        "article": [
          "Avcılar; Ambarlı Liman Tesisleri, üniversite kampüsleri, otomotiv yan sanayisi ve E-5 karayolu üzerindeki yoğun ticari aksıyla İstanbul’un batı kapısındaki en hareketli ilçelerdendir. E-5 trafiğinin gün boyu süren yoğunluğu, deniz ticareti ve ithalat-ihracat evraklarının transferinde dakik çözümler gerektirir.",
          "Örneğin; Ambarlı Limanı'nda tahliye bekleyen bir konteyner için acil olarak gümrük müşavirliğine veya Karaköy'deki armatör ofisine ulaştırılması gereken orijinal ordino ve manifesto evraklarınız mı var? AcilJet Moto Kurye, evrakları liman kapısından teslim alır, E-5 ve yan yol yoğunluğunu dikkate alarak alıcısına kontrollü şekilde ulaştırır.",
          "Öne çıkan hizmetler: Ambarlı Limanı & Gümrük Evrak Kuryesi; Express Moto Kurye (E-5 Koridoru); Üniversite & Akademik Dosya Dağıtımı; Araçlı Ticari Koli Taşımacılığı."
        ],
        "quickStat": "Ambarlı Limanı & Gümrük Evrak Kuryesi"
      },
      {
        "name": "Bağcılar",
        "slug": "bagcilar-kurye",
        "headline": "Bağcılar Kurye | İSTOÇ, Matbaacılar Sitesi & Ticaret Merkezleri",
        "excerpt": "Bağcılar; İSTOÇ, Tekstilkent, Matbaacılar Sitesi, Oto Market ve Basın Ekspres aksıyla toptan ticaret ve dağıtımın yoğun olduğu bir ilçedir. Numune, evrak ve koli gönderilerinde moto kurye ile araçlı kurye seçimi paketin hacmine göre planlanır.",
        "article": [
          "Bağcılar; İSTOÇ, Tekstilkent, Matbaacılar Sitesi, Oto Market ve Basın Ekspres aksı ile toptan ticaretin, matbaacılığın ve dağıtım ağlarının kalbidir. Yoğun ürün ve evrak sirkülasyonu olan bu bölgede lojistik gecikmeler işletmeler için doğrudan sorun yaratır.",
          "Örneğin; Matbaacılar Sitesi'nde baskısı yeni biten kurumsal katalog numunelerini veya İSTOÇ'taki toptan mağazanızdan çıkan e-ticaret paketlerini Anadolu Yakası'ndaki mağazanıza aynı gün mesai bitimine kadar ulaştırmanız mı gerekiyor? Ağır kamyon ve sevkiyat trafiğinde zaman harcamak yerine AcilJet Araçlı ve Moto Kurye filomuz devreye girer. Motora sığacak numuneleri moto kurye ile, toplu kolileri ise Doblo/Panelvan araçlarımızla planlı şekilde adresine sevk ederiz.",
          "Öne çıkan hizmetler: İSTOÇ & Tekstilkent Toptan Kurye; Matbaa & Numune Hızlı Teslimatı; Panelvan & Doblo Koli Dağıtımı; E-Ticaret Aynı Gün Teslimat."
        ],
        "quickStat": "İSTOÇ & Tekstilkent Toptan Kurye"
      },
      {
        "name": "Bahçelievler",
        "slug": "bahcelievler-kurye",
        "headline": "Bahçelievler Moto Kurye | Medikal, Tekstil & Ticari Teslimat",
        "excerpt": "Bahçelievler; Yenibosna, Şirinevler, Kocasinan ve Ömür hattında hem yoğun yerleşim alanlarını hem de Kuyumcukent, tekstil atölyeleri ve sağlık merkezlerini barındırır. Dar sokaklar ve D-100 bağlantıları nedeniyle adres bilgisi net kurye planı gerekir.",
        "article": [
          "Bahçelievler; Yenibosna, Şirinevler, Kocasinan ve Ömür akslarıyla hem yoğun nüfuslu yerleşim alanlarını hem de Kuyumcukent, tekstil atölyeleri ve özel sağlık merkezlerini bünyesinde barındırır. Dar mahalle sokakları ile D-100 bağlantılarının yarattığı trafik baskısı planlı kurye çözümlerini öne çıkarır.",
          "Örneğin; Kuyumcukent'teki atölyenizden Kapalıçarşı'ya yetiştirilmesi gereken değerli bir kalıp veya özel sipariş takı mı var ya da Yenibosna'daki özel bir hastaneden Acıbadem'deki bir laboratuvara acil kan/biyopsi tüpü mü gönderilecek? AcilJet Kurye, gönderi türüne uygun taşıma çantası ve kontrollü teslimat akışıyla paketi doğrudan alıcıya ulaştırır.",
          "Öne çıkan hizmetler: Kuyumcukent Hassas Gönderi Kuryesi; Hastaneler Arası Medikal Evrak & Tahlil; Tekstil Atölye Numune Dağıtımı; Express & VIP Şehir İçi Kurye."
        ],
        "quickStat": "Kuyumcukent Hassas Gönderi Kuryesi"
      },
      {
        "name": "Bakırköy",
        "slug": "bakirkoy-kurye",
        "headline": "Bakırköy Kurye | Sahil Hattı, Sağlık Kompleksleri & AVM Lojistiği",
        "excerpt": "Bakırköy; Ataköy, Florya, Yeşilköy sahil hattı, sağlık kuruluşları, adliye ve alışveriş merkezleriyle yoğun bir ticaret ve yaşam bölgesidir. Sahil yolu ile D-100 bağlantılarında mesai saatlerine göre teslimat planı yapılır.",
        "article": [
          "Bakırköy; Ataköy, Florya, Yeşilköy sahil şeridi, sağlık kuruluşları, adliye sarayı ve alışveriş merkezleriyle kentin köklü ticaret ve yaşam merkezlerindendir. Sahil yolu ve D-100 bağlantılarında mesai saatlerinde yaşanan trafik yoğunluğu acil taşımacılığı önemli hale getirir.",
          "Örneğin; Bakırköy Adliyesi'nde saat 16:30'daki bir duruşma öncesinde hâkime sunulması gereken ek delil dosyasını veya Ataköy Marina'daki müşterinize Florya'dan teslim edilecek lüks mağaza paketini acilen ulaştırmanız mı gerekiyor? AcilJet VIP Moto Kurye, adresinizden paketi alır almaz başka hiçbir ara teslimat yapmadan en uygun sahil veya yan yol bağlantısıyla teslimatı öncelikli şekilde gerçekleştirir.",
          "Öne çıkan hizmetler: Bakırköy Adliyesi Hukuk & Dava Dosyası Kuryesi; Florya & Ataköy VIP Özel Paket Taşımacılığı; Klinik & Sağlık Merkezi Rapor Transferi; Lüks Mağaza & Butik Aynı Gün Teslimat."
        ],
        "quickStat": "Bakırköy Adliyesi Hukuk & Dava Dosyası Kuryesi"
      },
      {
        "name": "Başakşehir",
        "slug": "basaksehir-kurye",
        "headline": "Başakşehir Kurye | İkitelli OSB, Şehir Hastanesi & Modern Konutlar",
        "excerpt": "Başakşehir; İkitelli OSB, Çam ve Sakura Şehir Hastanesi, modern konut projeleri ve Bahçeşehir aksıyla sanayi, sağlık ve yaşam alanlarını bir arada taşır. Geniş coğrafi yapı ve ağır vasıta trafiği nedeniyle teslimatlar doğru ekip seçimiyle planlanır.",
        "article": [
          "Başakşehir; İkitelli OSB, Çam ve Sakura Şehir Hastanesi, modern konut projeleri ve Bahçeşehir aksıyla güçlü bir sanayi ve sağlık merkezidir. Geniş coğrafi yapısı ve sanayi giriş-çıkışlarındaki ağır vasıta trafiği esnek lojistik modellerini gerektirir.",
          "Örneğin; İkitelli OSB'deki fabrikanızda çalışan CNC tezgâhı için acil bir rulman/elektronik kart mı lazım veya Çam ve Sakura Şehir Hastanesi'ne bir medikal firmanın acil cerrahi sarf malzemesi mi ulaştırması gerekiyor? AcilJet Kurye, motorlu ve hafif ticari filosuyla hem küçük yedek parçaları hem de hacimli koli ve cihazları hızlıca alıp doğrudan ilgili üniteye sevk eder.",
          "Öne çıkan hizmetler: İkitelli OSB Ağır Sanayi & Yedek Parça Kuryesi; Şehir Hastanesi Medikal & Tıbbi Cihaz Teslimatı; Bahçeşehir & Kayaşehir Hızlı Paket Servisi; Panelvan & Doblo İmalat Sevkiyatı."
        ],
        "quickStat": "İkitelli OSB Ağır Sanayi & Yedek Parça Kuryesi"
      },
      {
        "name": "Bayrampaşa",
        "slug": "bayrampasa-kurye",
        "headline": "Bayrampaşa Kurye | Büyük Otogar, Mega Center & İmalat Sanayi",
        "excerpt": "Bayrampaşa; 15 Temmuz Demokrasi Otogarı, Mega Center ve imalat atölyeleriyle şehir içi ve şehirlerarası gönderilerin kesiştiği bir bölgedir. Otogar çevresi ve sanayi sokaklarındaki yoğunluk özel teslimat planı gerektirir.",
        "article": [
          "Bayrampaşa; 15 Temmuz Demokrasi Otogarı, Mega Center Gıda Toptancıları Sitesi, plastik, kalıp ve triko imalathaneleriyle İstanbul’un üretim ve şehirlerarası yolcu/kargo aktarma göbeğidir. Otogar çevresi ve sanayi sokaklarındaki yoğun karmaşa özel teslimat planı ister.",
          "Örneğin; Anadolu'daki bir bayinize giden şehirlerarası otobüsün bagajına kalkıştan kısa süre önce acil bir yedek parça kolisini yetiştirmeniz mi gerekiyor? Ya da Mega Center'daki toptancı ofisinizden Kadıköy'deki restorana acil gıda numunesi mi gidecek? AcilJet Otobüs Kargo Kuryesi otogar peronlarına kadar inip gönderinizi muavine elden teslim eder veya moto kuryemiz numuneyi şehir içi hedefe hızlıca ulaştırır.",
          "Öne çıkan hizmetler: Bayrampaşa Otogar Emanet & Bagaj Kuryesi; Mega Center Toptan Gıda & Numune Transferi; Plastik & Kalıp İmalatçıları Acil Parça Dağıtımı; Şehirlerarası Otobüs Kargo Entegrasyonu."
        ],
        "quickStat": "Bayrampaşa Otogar Emanet & Bagaj Kuryesi"
      },
      {
        "name": "Beşiktaş",
        "slug": "besiktas-kurye",
        "headline": "Beşiktaş Acil Kurye | Boğaz Hattı, Ajanslar & Kurumsal Merkezler",
        "excerpt": "Beşiktaş; Levent, Etiler, Akaretler, Bebek ve Ortaköy hattında ajanslar, konsolosluklar, üniversiteler ve kurumsal merkezlerle yoğun bir teslimat trafiğine sahiptir. Barbaros Bulvarı ve sahil yolu yoğunluğunda planlı moto kurye desteği öne çıkar.",
        "article": [
          "Beşiktaş; Levent, Etiler, Akaretler, Bebek ve Ortaköy hattıyla kreatif ajanslar, konsolosluklar, üniversiteler ve holding binalarını bir araya getirir. Barbaros Bulvarı ve sahil yolu trafiğinin yoğunlaştığı anlarda zaman yönetimi kritik hale gelir.",
          "Örneğin; Akaretler’deki kreatif ajansınızdan Levent’teki kurumsal müşterinize saat 16:30’daki kritik lansman toplantısına yetişmesi gereken ıslak imzalı sözleşme veya sunum numunesini mi göndermeniz gerekiyor? Konum ve paket bilgisi alındığında Barbaros Bulvarı, sahil yolu ve alternatif bağlantılar değerlendirilir; VIP moto kurye gönderiyi tek iş olarak alıp toplantı saatine göre doğrudan alıcıya ulaştırır.",
          "Öne çıkan hizmetler: VIP Moto Kurye (Doğrudan & Beklemesiz Teslimat); Kreatif Ajans & Medya Lansman Kuryesi; Bebek & Etiler Lüks Butik Teslimatı; 7/24 Gece ve Nöbetçi Evrak Servisi."
        ],
        "quickStat": "VIP Moto Kurye (Doğrudan & Beklemesiz Teslimat)"
      },
      {
        "name": "Beylikdüzü",
        "slug": "beylikduzu-kurye",
        "headline": "Beylikdüzü Kurye | TÜYAP Fuar Merkezi, Mermerciler & Sanayi",
        "excerpt": "Beylikdüzü; TÜYAP Fuar ve Kongre Merkezi, sanayi siteleri, konut projeleri ve liman bağlantısıyla batı İstanbul'un hareketli teslimat noktalarındandır. Merkeze olan mesafe nedeniyle moto kurye ve araçlı kurye seçimi gönderiye göre yapılır.",
        "article": [
          "Beylikdüzü; TÜYAP Fuar ve Kongre Merkezi, Bakırcılar ve Mermerciler Sanayi Sitesi, modern konut siteleri ve liman bağlantısıyla batı İstanbul’un dinamik ilçelerindendir. Kent merkezine olan mesafesi nedeniyle doğru araç seçimi ve otoyol bağlantılarının planlanması önemlidir.",
          "Örneğin; TÜYAP Fuarı'nda standınız açıkken acilen Kadıköy veya Maslak'taki merkez ofisinizden unuttuğunuz fuar sözleşmelerine, tanıtım broşürlerine veya yedek bir cihaza mı ihtiyacınız oldu? Beylikdüzü AcilJet Kurye ekibimiz otoyol bağlantılarını kullanarak merkezden malzemeyi teslim alır ve fuar standınıza elden ulaştırır.",
          "Öne çıkan hizmetler: TÜYAP Fuar & Kongre Stand Kuryesi; Beylikdüzü OSB & Mermerciler Sanayi Parça Dağıtımı; Metropoller Arası Express Kurye; Doblo / Panelvan ile Hacimli Fuar Taşımacılığı."
        ],
        "quickStat": "TÜYAP Fuar & Kongre Stand Kuryesi"
      },
      {
        "name": "Beyoğlu",
        "slug": "beyoglu-kurye",
        "headline": "Beyoğlu Moto Kurye | Taksim, Karaköy, Galata & Konsolosluklar",
        "excerpt": "Beyoğlu; İstiklal Caddesi, Karaköy, Cihangir, Galata ve Pera hattındaki otel, galeri, ofis ve konsolosluklarla özel adres takibi isteyen bir ilçedir. Araç girişine kapalı veya dar sokaklarda moto kurye teslimatı öne çıkar.",
        "article": [
          "Beyoğlu; İstiklal Caddesi, Karaköy liman bölgesi, Cihangir, Galata ve Pera hattındaki tarihi sokakları, konsoloslukları, sanat galerileri, mimarlık ofisleri ve otelleriyle kendine has bir dokuya sahiptir. Araç girişine kapalı yayalaştırılmış yollar ve dik yokuşlar uzman moto kurye hakimiyeti gerektirir.",
          "Örneğin; Karaköy'deki mimarlık ofisinizden Beşiktaş'taki konsolosluğa veya Galata'daki bir otele misafirin unuttuğu pasaport/bilet evrakını mı ulaştırmanız gerekiyor? Araç trafiğinin yoğunlaştığı ve yayalaştırılmış alanların bulunduğu Beyoğlu sokaklarında AcilJet Moto Kurye paketi adresinden alıp hedef kapıya kontrollü şekilde ulaştırır.",
          "Öne çıkan hizmetler: Konsolosluk, Vize & Pasaport Kuryesi; Karaköy & Galata Butik / Galeri Taşımacılığı; Tarihi Yarımada & Beyoğlu Dar Sokak Moto Kuryesi; Oteller Arası Acil Misafir Emanet Transferi."
        ],
        "quickStat": "Konsolosluk, Vize & Pasaport Kuryesi"
      },
      {
        "name": "Büyükçekmece",
        "slug": "buyukcekmece-kurye",
        "headline": "Büyükçekmece Kurye | Göl Havzası, Kumburgaz & Sanayi Tesisleri",
        "excerpt": "Büyükçekmece; göl çevresi, sahil hattı, Hadımköy bağlantısı ve D-100 üzerindeki sanayi tesisleriyle geniş bir teslimat alanına sahiptir. Merkeze uzaklığı nedeniyle acil gönderilerde çıkış saati ve araç seçimi dikkatle planlanır.",
        "article": [
          "Büyükçekmece; göl çevresindeki villalar, sahil şeridi, Hadımköy bağlantı aksı ve E-5 boyunca sıralanan sanayi tesisleriyle geniş bir coğrafyayı kapsar. Merkeze uzaklığı sebebiyle acil gönderilerde zaman planlaması büyük hassasiyet taşır.",
          "Örneğin; Kumburgaz veya Mimarsinan'daki fabrikanızdan Maslak'taki genel merkeze yetiştirilecek acil finansal denetim raporu veya fatura koçanları mı var? AcilJet VIP Kurye, gönderinin çıkış saatini ve yol yoğunluğunu dikkate alarak aynı gün kapıdan kapıya teslimat planlar.",
          "Öne çıkan hizmetler: Şehirlerarası Çevre Yol Bağlantılı Hızlı Teslimat; Hadımköy-Büyükçekmece Sanayi Koridoru Kuryesi; Yazlık & Villa Siteleri Özel Kurye Hizmeti; Araçlı Panelvan Koli Taşımacılığı."
        ],
        "quickStat": "Şehirlerarası Çevre Yol Bağlantılı Hızlı Teslimat"
      },
      {
        "name": "Çatalca",
        "slug": "catalca-kurye",
        "headline": "Çatalca Kurye | Trakya Serbest Bölge, Lojistik Depolar & Çiftlikler",
        "excerpt": "Çatalca; Trakya Serbest Bölgesi, antrepolar, gümrük ambarları, rüzgar santralleri ve geniş kırsal alanlarıyla İstanbul'un en büyük ilçelerindendir. Uzak mesafeler nedeniyle gönderiler güzergah, araç ve teslim saati birlikte değerlendirilerek planlanır.",
        "article": [
          "İstanbul’un yüzölçümü bakımından en büyük ilçesi olan Çatalca; Trakya Serbest Bölgesi, antrepolar, gümrük ambarları, rüzgâr santralleri ve agro-turizm tesisleriyle sanayi ile doğanın buluştuğu noktadır. Uzak mesafeler doğru araç ve zaman planı gerektirir.",
          "Örneğin; Trakya Serbest Bölgesi'ndeki yabancı sermayeli fabrikanızdan onaylanması gereken acil gümrük beyannamelerini ve test numunelerini Avrupa Yakası merkezine veya Anadolu Yakası'na aynı gün mü ulaştırmalısınız? AcilJet Kurye, Çatalca'nın geniş yol ağlarını dikkate alarak teslimatı planlı ve kontrollü şekilde yürütür.",
          "Öne çıkan hizmetler: Trakya Serbest Bölge Gümrük & Numune Kuryesi; Lojistik Depolar Arası Acil İrsaliye & Evrak; Çatalca-İstanbul Merkez Express Teslimat; Kamyonet & Panelvan Ağır Parça Taşımacılığı."
        ],
        "quickStat": "Trakya Serbest Bölge Gümrük & Numune Kuryesi"
      },
      {
        "name": "Esenler",
        "slug": "esenler-kurye",
        "headline": "Esenler Kurye | Giyimkent, Tekstilkent & Otogar Çevresi Lojistiği",
        "excerpt": "Esenler; Tekstilkent, Giyimkent, toptan hazır giyim showroomları ve merkezi otoyol bağlantılarıyla tekstil gönderilerinin yoğun olduğu bir ilçedir. Fatura, kumaş numunesi ve mağaza kolileri için hızlı ve takip edilebilir kurye akışı gerekir.",
        "article": [
          "Esenler; Tekstilkent ve Giyimkent gibi büyük ticaret kompleksleri, toptan hazır giyim showroomları ve merkezi otoyol kavşaklarına komşuluğu ile tekstil sektörünün ana geçiş noktalarındandır. Gün içinde fatura, kumaş numunesi ve mağaza kolisi transferleri yoğunlaşır.",
          "Örneğin; Tekstilkent'teki kumaş toptancınızdan Osmanbey'deki moda tasarımcısına yeni sezon kartela ve numune kumaşlarının aynı gün içinde ulaşması mı gerekiyor? Müşterinizi bekletmemek adına AcilJet Moto Kurye'yi yönlendiriyoruz; kartelalar zarar görmeden, ütüsü bozulmadan doğrudan tasarımcının eline teslim ediliyor.",
          "Öne çıkan hizmetler: Tekstilkent & Giyimkent Kartela / Kumaş Kuryesi; Hazır Giyim Toptan Sipariş & Koli Transferi; E-Ticaret Moda Mağazaları Hızlı Dağıtım; Otogar Bağlantılı Şehirlerarası Paket Çözümleri."
        ],
        "quickStat": "Tekstilkent & Giyimkent Kartela / Kumaş Kuryesi"
      },
      {
        "name": "Esenyurt",
        "slug": "esenyurt-kurye",
        "headline": "Esenyurt Kurye | Üretim Tesisleri, E-Ticaret Depoları & Rezidanslar",
        "excerpt": "Esenyurt; sanayi siteleri, e-ticaret depoları, lojistik alanları ve yoğun konut projeleriyle hacimli gönderilerin sık çıktığı bir bölgedir. Depo girişleri ve bölge içi trafik nedeniyle teslimat saati ve araç tipi önceden netleştirilir.",
        "article": [
          "Esenyurt; sanayi siteleri, e-ticaret depoları, lojistik alanları ve yoğun nüfuslu konut projeleriyle İstanbul'un hacimli gönderi bölgelerindendir. Bölge içi yoğun trafik ve depo giriş kuyrukları operasyonel planlama gerektirir.",
          "Örneğin; Esenyurt'taki ana e-ticaret deponuzdan Kadıköy veya Beşiktaş'taki müşterinize aynı gün teslim hedefiyle kritik bir elektronik ürünü veya yedek parçayı çıkarmak mı istiyorsunuz? AcilJet Araçlı ve Motorlu Kurye filomuz depodan toplu veya tekli alım yaparak İstanbul geneline planlı aynı gün dağıtım sağlar.",
          "Öne çıkan hizmetler: E-Ticaret Depo Aynı Gün Hızlı Çıkış; Sanayi Siteleri Yedek Parça & Hammadde Kuryesi; Panelvan & Doblo Hacimli Yük Taşımacılığı; Rezidans & Toplu Konut Acil Kurye."
        ],
        "quickStat": "E-Ticaret Depo Aynı Gün Hızlı Çıkış"
      },
      {
        "name": "Eyüpsultan",
        "slug": "eyupsultan-kurye",
        "headline": "Eyüpsultan Kurye | Haliç Kıyısı, Göktürk, Kemerburgaz & Sanayi",
        "excerpt": "Eyüpsultan; Haliç kıyısı, Rami gıda toptancıları, Göktürk-Kemerburgaz yerleşimleri ve Kuzey Marmara bağlantılarıyla farklı teslimat ihtiyaçlarını aynı ilçede toplar. Her bölgenin trafik ve adres yapısı ayrı değerlendirilir.",
        "article": [
          "Eyüpsultan; tarihi Haliç kıyılarından Rami gıda toptancılarına, oradan Göktürk ve Kemerburgaz yerleşimlerine ve Kuzey Marmara Otoyolu bağlantılarına kadar uzanan çok katmanlı bir ilçedir. Farklı bölgelerin farklı araç ve teslimat planı ihtiyaçları bulunur.",
          "Örneğin; Göktürk'teki ofisinizden Maslak veya Levent'e acil bir proje dosyası göndermek istediğinizde ya da Rami'deki toptancıdan bir restorana acil malzeme yetiştirmeniz gerektiğinde AcilJet Kurye bölgeye uygun kuryeyi yönlendirir. Kuzey ormanları yolu veya Haliç sahil yolu üzerinden en uygun bağlantıyla paketiniz planlanan saat aralığında yerine ulaşır.",
          "Öne çıkan hizmetler: Göktürk & Kemerburgaz VIP Özel Kurye; Rami & Topçular Toptan Gıda/Ticari Kurye; Haliç Hattı Mimarlık & Ajans Dosya Teslimi; 7/24 Kesintisiz Nöbetçi Moto Kurye."
        ],
        "quickStat": "Göktürk & Kemerburgaz VIP Özel Kurye"
      },
      {
        "name": "Fatih",
        "slug": "fatih-kurye",
        "headline": "Fatih Moto Kurye | Tarihi Yarımada, Laleli, Kapalıçarşı & Çapa",
        "excerpt": "Fatih; Kapalıçarşı, Laleli, Çapa, Cerrahpaşa ve Vatan Caddesi hattıyla evrak, numune ve medikal gönderilerin yoğun olduğu Tarihi Yarımada merkezidir. Dar sokaklar ve araç kısıtları nedeniyle moto kurye planı öne çıkar.",
        "article": [
          "Fatih; Kapalıçarşı kuyumcuları, Laleli ve Merter bağlantılı hazır giyim ihracatçıları, Çapa ve Cerrahpaşa tıp fakülteleri, Vatan Caddesi resmi kurumlarıyla Tarihi Yarımada'nın kalbidir. Dar sokaklar, araç trafiğine kapalı alanlar ve turist yoğunluğu moto kurye planını avantajlı hale getirir.",
          "Örneğin; Laleli'deki toptan mağazanızdan yurt dışına çıkacak acil bir sipariş numunesini İstanbul Havalimanı kargo acentesine mi yetiştireceksiniz? Ya da Çapa Tıp Fakültesi'ne acil medikal evrak mı gidecek? AcilJet Moto Kurye, Fatih'in tarihi dar sokaklarını ve çıkış bağlantılarını dikkate alarak paketi doğrudan hedefe ulaştırır.",
          "Öne çıkan hizmetler: Kapalıçarşı Kıymetli Maden & Kuyum Kuryesi; Laleli İhracat & Tekstil Numune Kuryesi; Çapa & Cerrahpaşa Medikal / Tahlil Taşımacılığı; Resmi Daire & Noter Evrak Dağıtımı."
        ],
        "quickStat": "Kapalıçarşı Kıymetli Maden & Kuyum Kuryesi"
      },
      {
        "name": "Gaziosmanpaşa",
        "slug": "gaziosmanpasa-kurye",
        "headline": "Gaziosmanpaşa Kurye | Hastaneler, Adliye & Küçük Sanayi Siteleri",
        "excerpt": "Gaziosmanpaşa; merkez aksı, hastaneler, adliye çevresi ve küçük imalathaneleriyle TEM ile D-100 arasında yoğun bir geçiş noktasıdır. Mahalle içi yokuşlar ve trafik nedeniyle teslimatlarda adres doğruluğu ve kurye deneyimi önemlidir.",
        "article": [
          "Gaziosmanpaşa; kentsel dönüşümle modernleşen merkez aksı, özel hastane yatırımları, GOP Adliyesi ve küçük ölçekli imalathaneleriyle TEM ve E-5 arasında stratejik bir geçiş noktasıdır. Mahalle içi dik yokuşlar ve yoğun trafik tecrübeli kurye gerektirir.",
          "Örneğin; Gaziosmanpaşa'daki özel bir cerrahi tıp merkezinden Şişli'deki patoloji laboratuvarına ivedilikle ulaştırılması gereken biyopsi numuneleriniz mi var? AcilJet Medikal Kurye özel korumalı çantasıyla sarsıntısız ve ısı dengesini koruyarak numuneleri güvenle taşır, doktorunuza ve hastanıza zaman kazandırır.",
          "Öne çıkan hizmetler: Sağlık Kurumları Arası Medikal / Biyopsi Kuryesi; Gaziosmanpaşa Adliyesi Hukuk Dosyası Teslimi; İmalathane & Atölye Parça Dağıtımı; Express Şehir İçi Moto Kurye."
        ],
        "quickStat": "Sağlık Kurumları Arası Medikal / Biyopsi Kuryesi"
      },
      {
        "name": "Güngören",
        "slug": "gungoren-kurye",
        "headline": "Güngören Kurye | Merter Tekstil Piyasası & Moda İhracat Hattı",
        "excerpt": "Güngören ve Merter; hazır giyim, tekstil aksesuarı, modelhane ve showroom trafiğinin yoğun olduğu bir ticaret hattıdır. Numune, kartela ve evrak gönderilerinde hızlı alım ve doğrudan teslimat büyük avantaj sağlar.",
        "article": [
          "Güngören ve Merter; hazır giyim, tekstil aksesuarı, modelhane ve ihracat showroomlarının iç içe olduğu yoğun bir ticaret hattıdır. Numune ve kartela akışında hızlı teslimat, müşteri görüşmelerinin aksamadan ilerlemesine yardımcı olur.",
          "Örneğin; Merter'deki showroomunuza gelen yabancı alıcı heyeti için Güngören'deki modelhaneden acil prova numunesi kumaş veya dikilmiş ilk numune mi bekleniyor? AcilJet Merter Kuryesi, ürünü modelhaneden teslim alır ve showroomdaki alıcı görüşmesine göre öncelikli şekilde ulaştırır.",
          "Öne çıkan hizmetler: Merter Tekstil & Moda Showroom Kuryesi; Modelhane & Kesimhane Acil Numune Transferi; Fatura, Çek & İhracat Dosyası Hızlı Teslimi; Doblo / Panelvan ile Butik & Mağaza Koli Sevkiyatı."
        ],
        "quickStat": "Merter Tekstil & Moda Showroom Kuryesi"
      },
      {
        "name": "Kâğıthane",
        "slug": "kagithane-kurye",
        "headline": "Kâğıthane Kurye | Cendere Vadisi, Bilişim Vadisi & Ofis Kuleleri",
        "excerpt": "Kâğıthane; Cendere Vadisi, ofis kuleleri, bilişim şirketleri, lojistik merkezleri ve Maslak-Levent bağlantılarıyla yeni nesil iş bölgelerinden biridir. Vadi trafiğinde zamanında alım ve net teslimat planı işletmeler için avantaj sağlar.",
        "article": [
          "Kâğıthane; Cendere Vadisi boyunca yükselen modern ofis kuleleri, bilişim şirketleri, lojistik merkezleri ve Maslak-Levent hattına doğrudan tünel bağlantılarıyla kentin yeni nesil iş merkezidir. Vadi trafiğinde planlı kurye operasyonu büyük avantaj sağlar.",
          "Örneğin; Cendere Caddesi'ndeki teknoloji şirketinizden Ümraniye Finans Merkezi'ndeki bir bankaya yedeklenmiş kritik veri disklerini veya ıslak imzalı yazılım sözleşmesini saat 17:00'ye kadar iletmeniz mi gerekiyor? AcilJet Express Moto Kurye, Kâğıthane-Piyalepaşa tüneli ve köprü geçişlerini en uygun geçiş planıyla aşarak paketi vaktinde teslim eder.",
          "Öne çıkan hizmetler: Cendere Vadisi Bilişim & Yazılım Kuryesi; Plazalar Arası Sözleşme & Noter Evrak Dağıtımı; E-Ticaret Firmaları İçin Hızlı Paket Servisi; 7/24 Kesintisiz Şirket Kurye Çözümleri."
        ],
        "quickStat": "Cendere Vadisi Bilişim & Yazılım Kuryesi"
      },
      {
        "name": "Küçükçekmece",
        "slug": "kucukcekmece-kurye",
        "headline": "Küçükçekmece Kurye | Sefaköy, Halkalı, Basın Ekspres & Atakent",
        "excerpt": "Küçükçekmece; Basın Ekspres, Sefaköy sanayi alanları, Halkalı lojistik terminalleri ve Atakent konut projeleriyle yoğun bir ticaret ve yaşam bölgesidir. Evrak, numune ve koli gönderileri için gün içi teslimat planı düzenli takip edilir.",
        "article": [
          "Küçükçekmece; Basın Ekspres yolu üzerindeki finans kuleleri, oteller, Sefaköy sanayi siteleri, Halkalı lojistik terminalleri ve Atakent'in dev konut projeleriyle Avrupa Yakası'nın en kalabalık ticaret ve yaşam merkezlerinden biridir.",
          "Örneğin; Basın Ekspres üzerindeki otelde düzenlenen uluslararası bir konferansa Levent'teki ajansınızdan son dakika basılan yaka kartları ve sunum cihazlarını mı yetiştireceksiniz? AcilJet VIP Moto Kurye, Basın Ekspres yoğunluğunu dikkate alarak malzemeleri doğrudan fuaye alanına ulaştırır.",
          "Öne çıkan hizmetler: Basın Ekspres Otel & Kongre Kuryesi; Halkalı Gümrük & Lojistik Evrak Servisi; Sefaköy Sanayi Parça ve Numune Dağıtımı; Atakent Rezidans Kişisel Acil Paket Hizmeti."
        ],
        "quickStat": "Basın Ekspres Otel & Kongre Kuryesi"
      },
      {
        "name": "Sarıyer & Maslak",
        "slug": "sariyer-maslak-kurye",
        "headline": "Sarıyer & Maslak Acil Kurye | Plazalar, Konsolosluklar & Siteler",
        "excerpt": "Sarıyer ve Maslak hattı; plazalar, holding merkezleri, İTÜ Teknokent, konsolosluklar ve Boğaz çevresindeki özel adreslerle kurumsal gönderilerin yoğunlaştığı bir bölgedir. Büyükdere Caddesi trafiği ve plaza güvenlik süreçleri teslimat planına dahil edilir.",
        "article": [
          "Sarıyer ve Maslak aksı; gökdelenler, holding merkezleri, İTÜ Teknokent, konsolosluklar, Tarabya-Yeniköy yalıları ve Zekeriyaköy villaları ile iş ve bürokrasi dünyasının zirvesidir. Büyükdere Caddesi trafiği ve plaza güvenlik kuralları uzman kurye personeli gerektirir.",
          "Örneğin; Maslak'taki holding merkezinden Anadolu Yakası Kartal Adliyesi'ne mesai bitmeden yetişmesi gereken acil bir ihtiyati tedbir kararı veya ihale dosyası mı var? AcilJet VIP Kurye, plazanızın resepsiyonundan evrakı teslim alır almaz beklemesiz doğrudan akışla ilerler ve mesai bitmeden adliye kalemine teslimatı gerçekleştirir.",
          "Öne çıkan hizmetler: Maslak Plaza & Holding VIP Kuryesi; Konsolosluk Vize & Pasaport Hızlı Teslimi; Zekeriyaköy & Tarabya Özel Rezidans Kuryesi; Teknokent Yazılım Donanım & Çip Transferi."
        ],
        "quickStat": "Maslak Plaza & Holding VIP Kuryesi"
      },
      {
        "name": "Silivri",
        "slug": "silivri-kurye",
        "headline": "Silivri Kurye | Sanayi Tesisleri, Çiftlikler & Trakya Geçiş Hattı",
        "excerpt": "Silivri; Değirmenköy ve Selimpaşa sanayi bölgeleri, ilaç fabrikaları, plastik üreticileri ve Trakya bağlantısıyla endüstriyel gönderiler için önemli bir hattır. Uzak mesafe teslimatlarında araçlı kurye ve zaman planı birlikte değerlendirilir.",
        "article": [
          "Silivri; Değirmenköy ve Selimpaşa Organize Sanayi Bölgeleri, ilaç fabrikaları, plastik üreticileri ve Trakya ile İstanbul'u bağlayan D-100 ve TEM otoyolu üzerindeki konumuyla endüstriyel bir merkezdir. Uzak mesafede ekspres lojistik planı önemlidir.",
          "Örneğin; Selimpaşa OSB'deki fabrikanızdan Dudullu OSB'deki müşterinize acil onay için gönderilmesi gereken üretim numunesi veya kalıp parçası mı var? AcilJet Doblo/Panelvan veya Moto Kurye ekibi gönderinin hacmine göre seçilir ve aynı gün teslimat hedefiyle planlanır.",
          "Öne çıkan hizmetler: Selimpaşa & Değirmenköy Sanayi Kuryesi; İlaç Fabrikaları Hammadde & Numune Transferi; İstanbul-Trakya Şehirlerarası Express Hat; Panelvan & Doblo Hacimli Fabrika Sevkiyatı."
        ],
        "quickStat": "Selimpaşa & Değirmenköy Sanayi Kuryesi"
      },
      {
        "name": "Sultangazi",
        "slug": "sultangazi-kurye",
        "headline": "Sultangazi Kurye | Taş Ocakları, İmalat Atölyeleri & Konutlar",
        "excerpt": "Sultangazi; tekstil, ayakkabı, metal döküm ve taş ocakları çevresindeki üretim hareketliliğiyle imalat odaklı bir ilçedir. TEM bağlantısı sayesinde çevre ilçelere ve sanayi merkezlerine kurye akışı planlanabilir.",
        "article": [
          "Sultangazi; tekstil, ayakkabı, metal döküm ve taş ocakları tesisleriyle hızla gelişen imalat odaklı bir ilçedir. TEM otoyoluna yakınlığı sayesinde çevre ilçelere ve sanayi merkezlerine hızlı erişim potansiyeline sahiptir.",
          "Örneğin; Sultangazi'deki tekstil/ayakkabı atölyenizden Merter veya Gedikpaşa'daki toptancıya acil numune veya sipariş faturası mı yetiştirilecek? AcilJet Moto Kurye, çevre yolu bağlantılarını seri şekilde kullanarak paketlerinizi gecikmeden teslimat noktasına ulaştırır.",
          "Öne çıkan hizmetler: İmalat & Döküm Atölyeleri Acil Parça Kuryesi; Ayakkabı & Tekstil Numune Dağıtımı; Fatura, Çek ve Resmi Evrak Teslimatı; Ekonomik Normal ve Express Kurye."
        ],
        "quickStat": "İmalat & Döküm Atölyeleri Acil Parça Kuryesi"
      },
      {
        "name": "Şişli & Nişantaşı",
        "slug": "sisli-nisantasi-kurye",
        "headline": "Şişli & Nişantaşı Kurye | Sağlık, Moda, Finans & Rezidanslar",
        "excerpt": "Şişli ve Nişantaşı; Mecidiyeköy iş kuleleri, Nişantaşı moda atölyeleri, Fulya-Bomonti rezidansları ve özel sağlık merkezleriyle gün içinde yoğun kurye ihtiyacı doğuran bir hattır. Klinik, moda ve ofis gönderileri için kontrollü teslimat planlanır.",
        "article": [
          "Şişli; Mecidiyeköy’ün iş kuleleri, Nişantaşı’nın moda atölyeleri, Fulya ve Bomonti’nin rezidansları ve özel hastaneleriyle İstanbul’un yoğun teslimat merkezlerindendir. Halaskargazi, Valikonağı ve Büyükdere Caddesi’nde trafik arttığında moto kurye teslimatı önemli avantaj sağlar.",
          "Örneğin; Nişantaşı’ndaki estetik kliniğinizin operasyon sırasında acilen Maslak’taki laboratuvardan özel bir medikal biyopsi kitine mi ihtiyacı oldu ya da moda tasarımcınızın özel dikim elbisesini akşam galası öncesi Beşiktaş’taki müşterisine mi ulaştırması gerekiyor? AcilJet VIP Kurye, uygun taşıma çantası ve tek teslimat odağıyla gönderiyi hızlı, kontrollü ve alıcı bilgisi netleşmiş şekilde tamamlar.",
          "Öne çıkan hizmetler: Fulya & Nişantaşı Medikal ve Klinik Kuryesi; Haute Couture Askılı & Butik Kıyafet Taşımacılığı; Mecidiyeköy Plaza ve Noter Evrak Dağıtımı; 7/24 Kesintisiz Nöbetçi Moto Kurye."
        ],
        "quickStat": "Fulya & Nişantaşı Medikal ve Klinik Kuryesi"
      },
      {
        "name": "Zeytinburnu",
        "slug": "zeytinburnu-kurye",
        "headline": "Zeytinburnu Kurye | Deri Sanayi, Tekstil Toptancıları & Demirciler",
        "excerpt": "Zeytinburnu; Dericiler Sitesi, Demirciler Sitesi, kumaş toptancıları ve Ambarlar bölgesiyle hafif sanayi ve lojistik gönderilerin yoğun olduğu bir ilçedir. D-100 ve sahil yolu bağlantıları şehir geneline teslimat planını kolaylaştırır.",
        "article": [
          "Zeytinburnu; tarihi Dericiler Sitesi, Demirciler Sitesi, kumaş toptancıları ve Ambarlar bölgesiyle hafif sanayi ve lojistiğin merkez üssüdür. E-5 ve sahil yolu arasındaki kilit konumuyla tüm şehre hızlı çıkış imkânı verir.",
          "Örneğin; Demirciler Sitesi'ndeki atölyenizden Tuzla Tersaneleri'ne acil teslim edilmesi gereken özel kesim bir metal parça veya yedek cıvata takımı mı var? AcilJet Kurye, gönderinin ölçüsüne göre moto kurye veya Doblo hafif ticari araç seçerek parçayı doğrudan tersaneye sevk eder.",
          "Öne çıkan hizmetler: Demirciler & Dericiler Sanayi Kuryesi; Kumaş & Tekstil Toptan Numune Dağıtımı; Tersane & İmalathane Acil Parça Lojistiği; Şehir İçi Araçlı Panelvan Koli Taşımacılığı."
        ],
        "quickStat": "Demirciler & Dericiler Sanayi Kuryesi"
      }
    ]
  },
  {
    "id": "anadolu-yakasi",
    "eyebrow": "Anadolu Yakası",
    "title": "Anadolu Yakası kurye ve lojistik bölgeleri",
    "intro": "AcilJet Kurye, Anadolu Yakası'nın 14 ilçesinde sahil, E-5, TEM, havalimanı, sanayi ve ofis akslarını ayrı teslimat karakterleriyle değerlendirerek teslimat yapar.",
    "accent": "petrol",
    "districts": [
      {
        "name": "Adalar",
        "slug": "adalar-kurye",
        "headline": "Adalar Kurye | Büyükada, Heybeliada & Deniz Motoru Entegrasyonu",
        "excerpt": "Adalar; Büyükada, Heybeliada, Burgazada ve Kınalıada hattında deniz ulaşımına bağlı özel bir teslimat bölgesidir. İskele saatleri, paket türü ve alıcı bilgisi birlikte değerlendirilerek kurye akışı planlanır.",
        "article": [
          "Büyükada, Heybeliada, Burgazada ve Kınalıada; motorlu kara taşıtı trafiğine kapalı yapısı ve deniz ulaşımına bağımlılığı ile İstanbul’un en özel lojistik bölgesidir. Adalara gönderi ulaştırmak özel deniz motoru ve iskele koordinasyonu ister.",
          "Örneğin; Büyükada'daki bir otele veya köşke ana karadan (Kadıköy, Kartal veya Bostancı) acilen unuttukları önemli bir sağlık evrakını, şirket imza sirkülerini veya teknik bir yedek parçayı mı iletmeniz gerekiyor? AcilJet Kurye, anakaradaki kuryesiyle paketi alıp Bostancı/Kartal motor iskelesine ulaştırır, ada kuryemiz ile iskelede karşılayarak doğrudan adresteki kapıya bisiklet/elektrikli araçla teslim eder.",
          "Öne çıkan hizmetler: İskele & Deniz Motoru Bağlantılı Kurye; Adalar Özel Evrak & Sağlık Kiti Teslimatı; Bostancı-Kartal İskele Transferi; Ada İçi Elektrikli Araçla Kapıya Teslim."
        ],
        "quickStat": "İskele & Deniz Motoru Bağlantılı Kurye"
      },
      {
        "name": "Ataşehir",
        "slug": "atasehir-kurye",
        "headline": "Ataşehir Kurye | İstanbul Finans Merkezi, Plazalar & Rezidanslar",
        "excerpt": "Ataşehir; İstanbul Finans Merkezi, banka genel müdürlükleri, Batı Ataşehir rezidansları ve YEDPA hattıyla Anadolu Yakası'nın en yoğun iş bölgelerinden biridir. Evrak, numune ve acil paketler için saat planı net olan kurye akışı gerekir.",
        "article": [
          "Ataşehir; İstanbul Uluslararası Finans Merkezi (İFM), banka genel müdürlükleri, Batı Ataşehir rezidansları ve Yedpa Ticaret Merkezi ile Anadolu Yakası'nın güçlü iş bölgelerindendir. TEM ve D-100 kesişimindeki yoğun plaza trafiği dakiklik gerektirir.",
          "Örneğin; Finans Merkezi'ndeki genel müdürlüğünüzden Maslak'taki yabancı ortaklarınıza saat 17:00 yönetim kurulu öncesinde ıslak imzalı bilançoları ve fizibilite raporlarını mı ulaştırmalısınız? AcilJet VIP Moto Kurye, köprü ve tünel alternatiflerini trafik durumuna göre değerlendirir; evrakı toplantı saatine yetişecek şekilde öncelikli akışa alır.",
          "Öne çıkan hizmetler: İstanbul Finans Merkezi (İFM) VIP Kurye; YEDPA Ticaret Merkezi Toptan & Parça Kuryesi; Banka & Denetim Şirketleri Evrak Sirkülasyonu; Rezidanslar İçin 7/24 Güvenli Paket Servisi."
        ],
        "quickStat": "İstanbul Finans Merkezi (İFM) VIP Kurye"
      },
      {
        "name": "Beykoz",
        "slug": "beykoz-kurye",
        "headline": "Beykoz Kurye | Kavacık İş Merkezleri, Villalar & Riva Hattı",
        "excerpt": "Beykoz; Kavacık plazaları, Kanlıca-Anadolu Hisarı-Paşabahçe sahil hattı, Acarkent ve Riva aksıyla hem kurumsal hem özel adres teslimatları isteyen bir ilçedir. Dağınık coğrafi yapıda yol bilgisi teslimat başarısını doğrudan etkiler.",
        "article": [
          "Beykoz; Fatih Sultan Mehmet Köprüsü ayağındaki Kavacık plazaları, Boğaz köyleri, Acarkent/Beykoz Konakları ve Riva aksıyla hem kurumsal hem özel adres teslimatlarına açıktır. Dağınık coğrafi yapıda yol bilgisi esastır.",
          "Örneğin; Kavacık'taki genel merkezinizden Riva'daki film platosuna acil bir çekim ekipmanı/kostüm mü gidecek ya da Acarkent'teki müşterinize Nişantaşı'ndan değerli bir mücevher kutusu mu teslim edilecek? AcilJet Kurye'nin bölgeye hâkim sürücüleri geniş site ve villa adreslerinde hedefe doğrudan teslimat yapar.",
          "Öne çıkan hizmetler: Kavacık Plazalar Kurumsal Evrak Kuryesi; Dizi/Film Platoları Acil Ekipman & Kostüm Transferi; Acarkent & Beykoz Konakları VIP Paket Kuryesi; Boğaz Hattı Sahil Express Dağıtımı."
        ],
        "quickStat": "Kavacık Plazalar Kurumsal Evrak Kuryesi"
      },
      {
        "name": "Çekmeköy",
        "slug": "cekmekoy-kurye",
        "headline": "Çekmeköy Kurye | Taşdelen, Ömerli Villaları & Madenler Hattı",
        "excerpt": "Çekmeköy; Taşdelen sanayi siteleri, Alemdağ, Ömerli villa projeleri, kolejler ve Kuzey Marmara bağlantısıyla hızla büyüyen bir teslimat alanıdır. Genişleyen yerleşim bölgelerinde açık adres ve alıcı bilgisi kurye planını hızlandırır.",
        "article": [
          "Çekmeköy; Taşdelen sanayi siteleri, Alemdağ, Ömerli villa projeleri, kolejler ve Kuzey Marmara Otoyolu bağlantısıyla Anadolu Yakası'nın hızla büyüyen merkezlerindendir. Genişleyen yerleşim alanlarında açık adres ve alıcı bilgisi önemlidir.",
          "Örneğin; Çekmeköy'deki bir eğitim kurumundan veya işletmenizden Ataşehir'deki muhasebe merkezine acil yetiştirilmesi gereken bordro ve çek evraklarınız mı var? AcilJet Express Kurye, adres ve alıcı bilgisi netleştiğinde evrakları teslim alır ve Şile otoyolu bağlantısını kullanarak hedef ilçeye hızlıca iletir.",
          "Öne çıkan hizmetler: Şile Otoyolu & Madenler Express Kurye; Ömerli Villa Siteleri Özel Kurye; Taşdelen Sanayi Parça ve Numune Dağıtımı; Hafif Ticari Doblo ile Koli & Malzeme Taşıma."
        ],
        "quickStat": "Şile Otoyolu & Madenler Express Kurye"
      },
      {
        "name": "Kadıköy",
        "slug": "kadikoy-kurye",
        "headline": "Kadıköy Moto Kurye | Bağdat Caddesi, Moda, Rıhtım & Kozyatağı",
        "excerpt": "Kadıköy; Bağdat Caddesi mağazaları, Moda-Caferağa atölyeleri, Rıhtım çevresi ve Kozyatağı ofisleriyle Anadolu Yakası'nda moto kurye talebinin en yoğun olduğu merkezlerden biridir. Trafik ve otopark yükü teslimat planını doğrudan etkiler.",
        "article": [
          "Kadıköy; Bağdat Caddesi’nin mağazaları, Moda ve Caferağa’nın tasarım atölyeleri, Rıhtım’ın insan sirkülasyonu ve Kozyatağı plazalarıyla Anadolu Yakası’nın kültürel ve ekonomik merkezidir. Gün boyu süren trafik ve otopark sıkıntısı moto kurye teslimatını pratik hale getirir.",
          "Örneğin; Bağdat Caddesi’ndeki butiğinizden Nişantaşı’ndaki müşterinize akşam giyilecek özel tasarım bir elbiseyi mi göndereceksiniz ya da Kozyatağı'ndaki ofisinizden karşı yakaya sözleşme mi gidecek? AcilJet Express Kurye, Avrasya Tüneli ve köprü alternatiflerini trafik durumuna göre değerlendirir; gönderiyi aynı gün teslimat hedefiyle planlayıp alıcıya net bilgiyle ulaştırır.",
          "Öne çıkan hizmetler: Bağdat Caddesi Lüks Butik & Moda Kuryesi; Kozyatağı Plaza ve Ofis Evrak Transferi; Moda Tasarım Atölyeleri Numune Dağıtımı; 7/24 Nöbetçi Gece Moto Kuryesi."
        ],
        "quickStat": "Bağdat Caddesi Lüks Butik & Moda Kuryesi"
      },
      {
        "name": "Kartal",
        "slug": "kartal-kurye",
        "headline": "Kartal Kurye | Anadolu Adalet Sarayı, Sahil Yolu & Sanayi",
        "excerpt": "Kartal; İstanbul Anadolu Adalet Sarayı, sahil hattı, rezidans bölgeleri ve oto sanayi siteleriyle evrak ve parça teslimatının yoğunlaştığı bir ilçedir. Hukuk büroları, noterler ve sanayi işletmeleri için düzenli kurye planı önemlidir.",
        "article": [
          "Kartal; dünyanın en büyük adliye binalarından biri olan İstanbul Anadolu Adalet Sarayı, sahil şeridi, kentsel dönüşümle yükselen rezidanslar ve oto sanayi siteleriyle kritik bir ilçedir. Hukuk büroları ve noterler için Kartal adliye trafiği büyük önem taşır.",
          "Örneğin; Şişli veya Maslak'taki hukuk büronuzdan Kartal Anadolu Adliyesi'ne saat 16:30'a kadar sunulması gereken acil temyiz dilekçesi, itiraz evrakı veya keşif dosyası mı var? AcilJet Adliye Kuryesi, evrakınızı adresinizden alır, trafik durumunu dikkate alarak Kartal Adliyesi kalemine teslim eder ve alındı bilgisini tarafınıza bildirir.",
          "Öne çıkan hizmetler: Anadolu Adalet Sarayı Hukuk & Dosya Kuryesi; Kartal Oto Sanayi Yedek Parça Dağıtımı; Sahil Kordonu & Rezidans Hızlı Teslimatı; Panelvan & Doblo ile Ofis Taşıma ve Koli Sevkiyatı."
        ],
        "quickStat": "Anadolu Adalet Sarayı Hukuk & Dosya Kuryesi"
      },
      {
        "name": "Maltepe",
        "slug": "maltepe-kurye",
        "headline": "Maltepe Kurye | Küçükyalı Ofis Park, E-5 Ticaret & Dragos",
        "excerpt": "Maltepe; Küçükyalı ofis parkları, Altayçeşme sağlık merkezleri, Dragos sahil hattı ve D-100 üzerindeki kurumsal adreslerle güçlü bir teslimat aksıdır. D-100 ve sahil trafiği yoğunlaştığında moto kurye planı öne çıkar.",
        "article": [
          "Maltepe; Küçükyalı Teknoloji ve Ofis Parkları, Altayçeşme sağlık merkezleri, Dragos sahil hattı ve D-100 boyunca sıralanan kurumsal adreslerle güçlü bir lojistik aks üzerindedir. D-100 ve sahil trafiğinin yoğunlaştığı saatlerde moto kurye önemli avantaj sağlar.",
          "Örneğin; Küçükyalı Ofis Park'taki telekomünikasyon şirketinizden Levent'teki iş ortağınıza acil teknik şartname veya prototip donanım mı göndereceksiniz? AcilJet Kurye, D-100 yoğunluğunu ve alternatif bağlantıları değerlendirerek gönderiyi alıcısına kontrollü şekilde ulaştırır.",
          "Öne çıkan hizmetler: Küçükyalı Ofis Park Kurumsal Kurye; Dragos & Sahil VIP Özel Paket Servisi; Medikal ve Ortopedi Ürünleri Hızlı Dağıtımı; 7/24 Kesintisiz Şehir İçi Express Teslimat."
        ],
        "quickStat": "Küçükyalı Ofis Park Kurumsal Kurye"
      },
      {
        "name": "Pendik",
        "slug": "pendik-kurye",
        "headline": "Pendik Kurye | Sabiha Gökçen Havalimanı, Ro-Ro Limanı & Sanayi",
        "excerpt": "Pendik; Sabiha Gökçen Havalimanı, Ro-Ro Limanı, Kurtköy Teknopark ve tersane yan sanayisiyle uluslararası ticaret bağlantılarının güçlü olduğu bir ilçedir. Havalimanı, liman ve sanayi gönderileri için takip edilebilir teslimat planı yapılır.",
        "article": [
          "Pendik; Sabiha Gökçen Uluslararası Havalimanı, Pendik Uluslararası Ro-Ro Liman Terminali, Kurtköy Teknopark ve tersane yan sanayisi ile uluslararası ticaret ve lojistiğin merkez üssüdür. Havalimanı kargo terminalleri ile şehir merkezi arasındaki evrak akışı çok yoğundur.",
          "Örneğin; Sabiha Gökçen Havalimanı kargo gümrüğüne inen acil bir uçak yedek parçasını veya ihracat konşimentosunu Gebze OSB'deki fabrikanıza aynı gün içinde yetiştirmeniz mi gerekiyor? AcilJet Pendik Kuryesi, kargo terminalinden paketi teslim alarak Kuzey Marmara veya E-5 üzerinden doğrudan fabrikanın montaj hattına ulaştırır.",
          "Öne çıkan hizmetler: Sabiha Gökçen Kargo & Havalimanı VIP Kurye; Pendik Ro-Ro Limanı Gümrük & Manifesto Evrakı; Kurtköy Teknopark Bilişim & Proje Kuryesi; Uçak Kargo & Otobüs Kargo Şehirlerarası Entegrasyon."
        ],
        "quickStat": "Sabiha Gökçen Kargo & Havalimanı VIP Kurye"
      },
      {
        "name": "Sancaktepe",
        "slug": "sancaktepe-kurye",
        "headline": "Sancaktepe Kurye | Samandıra, Sarıgazi & Depolama Merkezleri",
        "excerpt": "Sancaktepe; Samandıra ve Sarıgazi aksındaki lojistik antrepolar, otomotiv yan sanayi depoları ve dağıtım merkezleriyle gelişen bir teslimat bölgesidir. Depolar arası stok, numune ve evrak akışında doğru araç seçimi önemlidir.",
        "article": [
          "Sancaktepe; Samandıra ve Sarıgazi aksında yer alan lojistik antrepolar, otomotiv yan sanayi depoları ve ilaç dağıtım merkezleriyle hızla gelişen bir lojistik merkezdir. Depolar arası stok transferlerinde doğru araç ve teslimat zamanı önemlidir.",
          "Örneğin; Samandıra'daki ana deponuzdan Beşiktaş'taki bir perakende mağazasına müşterinin beklediği özel seri bir ürünü veya mağaza arası acil stok takviyesini mi yapmanız gerekiyor? AcilJet Araçlı (Panelvan/Doblo) veya Moto Kurye ekibimiz depodan ürünü barkod kontrolüyle teslim alır ve mağazaya doğrudan sevk eder.",
          "Öne çıkan hizmetler: Samandıra & Sarıgazi Depo Kuryesi; Otomotiv Yan Sanayi Acil Yedek Parça Dağıtımı; İlaç & Sağlık Ürünleri Depo Çıkış Kuryesi; Panelvan & Doblo Hacimli Yük Taşıma."
        ],
        "quickStat": "Samandıra & Sarıgazi Depo Kuryesi"
      },
      {
        "name": "Sultanbeyli",
        "slug": "sultanbeyli-kurye",
        "headline": "Sultanbeyli Kurye | TEM Bağlantısı, Yan Sanayi & Ticaret",
        "excerpt": "Sultanbeyli; TEM bağlantısı, metal ve ahşap işleme atölyeleri, yapı market tedarikçileri ve yerel ticaret merkezleriyle sanayi koridorunda önemli bir noktadır. Parça, numune ve şantiye gönderileri için araç tipi gönderiye göre belirlenir.",
        "article": [
          "Sultanbeyli; TEM otoyolunun kenarında kurulu stratejik konumu, metal ve ahşap işleme atölyeleri, yapı market tedarikçileri ve yerel ticaret merkezleriyle sanayi koridorunun kilit bir halkasıdır. TEM gişelerine yakınlık hızlı çıkış sağlar.",
          "Örneğin; Sultanbeyli'deki mobilya/metal aksesuar atölyenizden Başakşehir'deki bir şantiyeye montaj ustalarının beklediği acil bağlantı elemanları veya özel aparatlar mı gidecek? AcilJet Moto Kurye veya hafif ticari araçla gönderiyi alır, TEM bağlantısını kullanarak şantiye teslimatını planlı şekilde tamamlar.",
          "Öne çıkan hizmetler: TEM Koridoru Hızlı Moto Kurye; Metal & Ahşap İmalat Atölyeleri Parça Kuryesi; Şantiye & Proje Acil Malzeme Taşımacılığı; Uygun Fiyatlı Şehir İçi Normal & Express Kurye."
        ],
        "quickStat": "TEM Koridoru Hızlı Moto Kurye"
      },
      {
        "name": "Şile",
        "slug": "sile-kurye",
        "headline": "Şile Kurye | Sahil Şeridi, Ağva, Butik Oteller & Kampüsler",
        "excerpt": "Şile ve Ağva; Karadeniz sahil hattı, butik oteller, Işık Üniversitesi, yazlık villalar ve doğal ürün üreticileriyle merkezden uzak teslimat noktalarına sahiptir. Uzun mesafe ve virajlı yollar nedeniyle kurye planı dikkatle hazırlanır.",
        "article": [
          "Şile ve Ağva; Karadeniz sahil şeridi, butik otelleri, Işık Üniversitesi kampüsü, yazlık villaları ve doğal ürün üreticileriyle kentin merkezine en uzak ilçelerindendir. Uzun virajlı otoyol mesafeleri profesyonel sürücü tecrübesi ister.",
          "Örneğin; Şile veya Ağva'daki otelinizde konaklayan önemli bir misafiriniz kimlik, pasaport veya özel ilacını Kadıköy/Beşiktaş'taki evinde mi unuttu? Ya da üniversite kampüsünden acil bir akademik evrak mı gönderilecek? AcilJet Özel Kurye, uzak mesafe ve alıcı bilgilerini netleştirerek kapıdan kapıya doğrudan transfer sağlar.",
          "Öne çıkan hizmetler: Şile & Ağva Otelleri Acil Misafir Kuryesi; Işık Üniversitesi Akademik Evrak Dağıtımı; Yazlık Konutlar İçin Özel İlaç ve Paket Kuryesi; Şehirlerarası Nitelikte Şile-İstanbul VIP Teslimat."
        ],
        "quickStat": "Şile & Ağva Otelleri Acil Misafir Kuryesi"
      },
      {
        "name": "Tuzla",
        "slug": "tuzla-kurye",
        "headline": "Tuzla Kurye | Tersaneler Bölgesi, Deri OSB, Kimyacılar & Birlik",
        "excerpt": "Tuzla; tersaneler, İstanbul Deri OSB, Kimyacılar OSB, Birlik OSB, Serbest Bölge ve İTOSB ile ağır sanayi ve ihracat gönderilerinin yoğun olduğu bir ilçedir. Parça, evrak ve numune teslimatlarında araçlı kurye desteği sık kullanılır.",
        "article": [
          "Tuzla; Türkiye'nin gemi inşa ve tersaneler merkezi, İstanbul Deri Organize Sanayi Bölgesi, Kimyacılar OSB, Birlik OSB, Serbest Bölge ve İTOSB ile ağır sanayi ve ihracatın güçlü bölgelerindendir. Gemi parçalarından kimyasal test numunelerine kadar her sevkiyat net plan ister.",
          "Örneğin; Tuzla Tersaneler Bölgesi'nde havuzda bakımda olan yabancı bayraklı bir geminin denize inmesi için acilen Karaköy'den veya havalimanından gelmesi gereken özel bir gümrüklü vana, sertifika veya elektronik kontrol kartı mı var? AcilJet Kurye, parçayı teslim alır ve tersane giriş prosedürlerini dikkate alarak gemi yetkilisine ulaştırır.",
          "Öne çıkan hizmetler: Tersaneler Bölgesi Acil Gemi Parçası Kuryesi; Deri OSB, Kimyacılar & Birlik OSB Sanayi Kuryesi; Tuzla Serbest Bölge Gümrük Evrak Servisi; Panelvan / Kamyonet Ağır Sanayi Sevkiyatı."
        ],
        "quickStat": "Tersaneler Bölgesi Acil Gemi Parçası Kuryesi"
      },
      {
        "name": "Ümraniye",
        "slug": "umraniye-kurye",
        "headline": "Ümraniye Kurye | Dudullu OSB, İMES, KADOSAN & Finans Hattı",
        "excerpt": "Ümraniye; Dudullu OSB, İMES, KADOSAN, DES, Modoko ve plaza bölgeleriyle Anadolu Yakası'nın yoğun sanayi ve ofis akslarından biridir. Fabrika, atölye ve kurumsal adresler arasında evrak, numune ve parça teslimatı sıklaşır.",
        "article": [
          "Ümraniye; Dudullu Organize Sanayi Bölgesi, İMES Sanayi Sitesi, KADOSAN Oto Sanayi, DES Sanayi Sitesi, Modoko Mobilyacılar Sitesi ve plazalar aksıyla güçlü bir sanayi ve ticaret bölgesidir. Fabrika ve ofisler arasında evrak, numune ve parça transferi yoğun şekilde ilerler.",
          "Örneğin; İMES'teki kalıpçı atölyenizden Dudullu OSB'deki otomotiv yan sanayi fabrikasına saat 14:00 mesaisine yetişmesi gereken kritik bir aparat veya Modoko'daki mobilya mağazanızdan mimarlık ofisine kumaş numuneleri mi gidecek? AcilJet Kurye'nin moto ve araçlı kurye ağıyla ürünleriniz uygun ekip seçilerek hızlıca transfer edilir.",
          "Öne çıkan hizmetler: İMES, KADOSAN & Dudullu OSB Ağır Sanayi Kuryesi; MODOKO Mobilya & Numune Hızlı Teslimatı; Plazalar & Finans Kuruluşları Kurumsal Evrak Dağıtımı; Doblo / Panelvan ile Atölye ve Fabrika Taşımacılığı."
        ],
        "quickStat": "İMES, KADOSAN & Dudullu OSB Ağır Sanayi Kuryesi"
      },
      {
        "name": "Üsküdar",
        "slug": "uskudar-kurye",
        "headline": "Üsküdar Kurye | Altunizade Sağlık & Ofis Aksı, Beylerbeyi & Çamlıca",
        "excerpt": "Üsküdar; Altunizade iş merkezleri, sağlık kurumları, üniversiteler, Çamlıca, Beylerbeyi ve Çengelköy hattıyla hem kurumsal hem özel teslimatların yoğunlaştığı bir ilçedir. Köprü ve Avrasya bağlantıları trafik durumuna göre değerlendirilir.",
        "article": [
          "Üsküdar; Altunizade iş merkezleri, özel hastaneler ve üniversiteler, Çamlıca iş kuleleri, Beylerbeyi ve Çengelköy Boğaz sahil hattı ile hem tarihi dokuyu hem kurumsal hayatı bir arada yaşar. 15 Temmuz Şehitler Köprüsü ve Avrasya Tüneli bağlantı noktasıdır.",
          "Örneğin; Altunizade'deki özel hastaneden çıkan bir patoloji sonucunun acilen Maslak'taki uzman hekime gösterilmesi mi gerekiyor ya da Çengelköy'deki restoranınızdan Avrupa Yakası'na özel bir gurme siparişi mi ulaştıracaksınız? AcilJet VIP Moto Kurye, trafik durumuna göre köprü veya alternatif bağlantıları değerlendirerek paketi doğrudan doktora ya da alıcıya teslim eder.",
          "Öne çıkan hizmetler: Altunizade Sağlık Kompleksleri Medikal Kurye; 15 Temmuz Şehitler Köprüsü Girişi Express Kurye; Boğaz Hattı Butik ve Gurme Sipariş Dağıtımı; Üniversiteler Arası Tez & Belge Dağıtımı."
        ],
        "quickStat": "Altunizade Sağlık Kompleksleri Medikal Kurye"
      }
    ]
  },
  {
    "id": "gebze-kocaeli",
    "eyebrow": "Gebze & Kocaeli Hattı",
    "title": "Gebze ve Kocaeli sanayi teslimat hattı",
    "intro": "Gebze, Kocaeli ve İstanbul arasındaki sanayi, depo, üretim ve gümrük bağlantılı gönderilerde doğru araç ve doğru teslimat planı oluşturulur.",
    "accent": "deepblue",
    "districts": [
      {
        "name": "Gebze & Kocaeli Hattı",
        "slug": "gebze-kocaeli-kurye",
        "headline": "Gebze & Kocaeli Kurye | GOSB, TOSB, Dilovası ve İstanbul Bağlantısı",
        "excerpt": "Gebze, Kocaeli ve İstanbul arasında sanayi, depo, üretim ve acil araçlı kurye ihtiyaçları için planlı teslimat yapılır.",
        "article": [
          "Örneğin; GOSB'daki otomotiv fabrikasında montaj hattının durmaması için Maslak veya İkitelli'deki ana tedarikçiden acilen gelmesi gereken özel bir cıvata kiti veya teknik çizim dosyası mı var? AcilJet Gebze Ekspres Kuryesi, İstanbul'dan aldığı paketi Kuzey Marmara veya E-5 yoğunluğunu değerlendirerek fabrikanızın mal kabul birimine planlı şekilde teslim eder.",
          "Öne çıkan hizmetler: İstanbul - Gebze Arası VIP Express Moto Kurye; GOSB, TOSB & Dilovası Sanayi Kuryesi; Panelvan & Doblo ile Fabrikalar Arası Sevkiyat; Gümrük & İthalat/İhracat İrsaliye Dağıtımı."
        ],
        "quickStat": "İstanbul - Gebze Arası VIP Express Moto Kurye"
      }
    ]
  },
  {
    "id": "sehirlerarasi",
    "eyebrow": "Şehirlerarası",
    "title": "Şehirlerarası kurye ve kargo hattı",
    "intro": "İstanbul çıkışlı Türkiye geneli gönderilerde uçak kargo, otobüs kargo ve kapıdan kapıya araçlı kurye seçenekleri birlikte değerlendirilir.",
    "accent": "ink",
    "districts": [
      {
        "name": "Şehirlerarası Kurye",
        "slug": "sehirlerarasi-kurye",
        "headline": "Şehirlerarası Acil Kurye | Uçak Kargo, Otobüs Kargo ve Kapıdan Kapıya",
        "excerpt": "İstanbul çıkışlı şehir dışı gönderiler için uçak kargo, otobüs kargo ve kapıdan kapıya teslimat seçenekleri planlanır.",
        "article": [
          "Örneğin; İstanbul'daki ofisinizden Ankara'daki bakanlık ihalesine ertesi sabah teslim edilmesi gereken ihale dosyasını veya İzmir'deki fabrikanın acil beklediği elektronik kartı aynı gün içinde mi iletmek istiyorsunuz? AcilJet Şehirlerarası Kurye ekibimiz paketi adresinizden alır; uçak kargo veya şehirlerarası otobüs terminali seçeneklerini değerlendirir, varış şehrinde karşılanıp kapıya kadar ulaştırılmasını koordine eder.",
          "Öne çıkan hizmetler: İstanbul Havalimanı & Sabiha Gökçen Uçak Kargo; Esenler & Harem Otogar Otobüs Kargo Kuryesi; Bursa, Kocaeli, Tekirdağ Kapıdan Kapıya Araçlı Kurye; VIP Şehirlerarası Özel Kurye Hizmeti."
        ],
        "quickStat": "İstanbul Havalimanı & Sabiha Gökçen Uçak Kargo"
      }
    ]
  }
];

export const allDistricts = regions.flatMap((region) =>
  region.districts.map((district) => ({
    ...district,
    regionId: region.id,
    regionTitle: region.eyebrow,
    accent: region.accent,
  }))
);

export function getDistrictBySlug(slug: string) {
  return allDistricts.find((district) => district.slug === slug);
}
