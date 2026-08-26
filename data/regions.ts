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
        "excerpt": "Arnavutköy bölgesinde arnavutköy, İstanbul Havalimanı’nın faaliyete geçmesi ve çevresinde kümelenen dev kargo antrepoları, gümrükleme ofisleri ve lojistik merkezleriyle kentin en stratejik aktarma merkezlerinden birine dönüşmüştür. Geniş yüzölçümü ve.",
        "article": [
          "Arnavutköy, İstanbul Havalimanı’nın faaliyete geçmesi ve çevresinde kümelenen dev kargo antrepoları, gümrükleme ofisleri ve lojistik merkezleriyle kentin en stratejik aktarma merkezlerinden birine dönüşmüştür. Geniş yüzölçümü ve hızla gelişen sanayi/depolama aksı, zaman duyarlı hava kargo transferlerini zorunlu kılmaktadır.",
          "Örneğin; havalimanı gümrük sahasında bekleyen kritik bir ithalat evrakını, konşimento asıllarını veya acil bir medikal test kitini mesai bitmeden Maslak veya İkitelli'deki merkezinize ulaştırmanız mı gerekiyor? Havalimanı bölgesinin geniş operasyon alanında vakit kaybetmek yerine AcilJet Kurye ile irtibata geçtiğinizde; havalimanı ve antrepo prosedürlerine hakim saha ekibimiz paketi dakikalar içinde teslim alır, Kuzey Marmara Otoyolu ve bağlantı yollarını kullanarak en kısa sürede doğrudan hedefe teslim eder.",
          "Öne çıkan hizmetler: Havalimanı & Gümrük VIP Kurye; Uçak Kargo Entegrasyonlu Teslimat; Hafif Ticari & Panelvan Antrepo Transferi; 7/24 Kesintisiz Lojistik Hattı."
        ],
        "quickStat": "Havalimanı & Gümrük VIP Kurye"
      },
      {
        "name": "Avcılar",
        "slug": "avcilar-kurye",
        "headline": "Avcılar Moto Kurye | Üniversite, Ambarlı Limanı & E-5 Hattı",
        "excerpt": "Avcılar bölgesinde avcılar; Ambarlı Liman Tesisleri, üniversite kampüsleri, otomotiv yan sanayisi ve E-5 karayolu üzerindeki yoğun ticari aksıyla İstanbul’un batı kapısındaki en hareketli ilçelerdendir. E-5 trafiğinin gün boyu süren yoğunluğu.",
        "article": [
          "Avcılar; Ambarlı Liman Tesisleri, üniversite kampüsleri, otomotiv yan sanayisi ve E-5 karayolu üzerindeki yoğun ticari aksıyla İstanbul’un batı kapısındaki en hareketli ilçelerdendir. E-5 trafiğinin gün boyu süren yoğunluğu, deniz ticareti ve ithalat-ihracat evraklarının transferinde dakik çözümler gerektirir.",
          "Örneğin; Ambarlı Limanı'nda tahliye bekleyen bir konteyner için acil olarak gümrük müşavirliğine veya Karaköy'deki armatör ofisine ulaştırılması gereken orijinal ordino ve manifesto evraklarınız mı var? E-5 ve yan yol kuyruklarında saatlerce beklemek yerine AcilJet Moto Kurye'yi arayabilirsiniz. Bölgede sürekli ring halinde bulunan ekiplerimiz, evrakları liman kapısından mühürlü teslim alıp trafiğin tıkalı olduğu noktaları hızla aşarak alıcısına eksiksiz teslim eder.",
          "Öne çıkan hizmetler: Ambarlı Limanı & Gümrük Evrak Kuryesi; Express Moto Kurye (E-5 Koridoru); Üniversite & Akademik Dosya Dağıtımı; Araçlı Ticari Koli Taşımacılığı."
        ],
        "quickStat": "Ambarlı Limanı & Gümrük Evrak Kuryesi"
      },
      {
        "name": "Bağcılar",
        "slug": "bagcilar-kurye",
        "headline": "Bağcılar Kurye | İSTOÇ, Matbaacılar Sitesi & Ticaret Merkezleri",
        "excerpt": "Bağcılar bölgesinde bağcılar; İSTOÇ, Tekstilkent, Matbaacılar Sitesi, Oto Market ve Basın Ekspres aksı ile toptan ticaretin, matbaacılığın ve dağıtım ağlarının kalbidir. Binlerce firmanın her gün yüz binlerce ürün sirkülasyonu yaptığı bu bölgede.",
        "article": [
          "Bağcılar; İSTOÇ, Tekstilkent, Matbaacılar Sitesi, Oto Market ve Basın Ekspres aksı ile toptan ticaretin, matbaacılığın ve dağıtım ağlarının kalbidir. Binlerce firmanın her gün yüz binlerce ürün sirkülasyonu yaptığı bu bölgede lojistik gecikmeler doğrudan ciro kaybına neden olur.",
          "Örneğin; Matbaacılar Sitesi'nde baskısı yeni biten kurumsal katalog numunelerini veya İSTOÇ'taki toptan mağazanızdan çıkan e- ticaret toplu paketlerini Anadolu Yakası'ndaki mağazanıza aynı gün mesai bitimine kadar ulaştırmanız mı gerekiyor? Ağır kamyon ve sevkiyat trafiğinde zaman harcamak yerine AcilJet Araçlı ve Moto Kurye filomuz devreye girer. Motora sığacak numuneleri moto kurye ile, toplu kolileri ise Doblo/Panelvan araçlarımızla planlı şekilde adresine sevk ederiz.",
          "Öne çıkan hizmetler: İSTOÇ & Tekstilkent Toptan Kurye; Matbaa & Numune Hızlı Teslimatı; Panelvan & Doblo Koli Dağıtımı; E-Ticaret Aynı Gün Teslimat."
        ],
        "quickStat": "İSTOÇ & Tekstilkent Toptan Kurye"
      },
      {
        "name": "Bahçelievler",
        "slug": "bahcelievler-kurye",
        "headline": "Bahçelievler Moto Kurye | Medikal, Tekstil & Ticari Teslimat",
        "excerpt": "Bahçelievler bölgesinde bahçelievler; Yenibosna, Şirinevler, Kocasinan ve Ömür akslarıyla hem yoğun nüfuslu yerleşim alanlarını hem de Kuyumcukent, tekstil atölyeleri ve büyük özel hastane komplekslerini bünyesinde barındırır. Dar mahalle sokakları ile.",
        "article": [
          "Bahçelievler; Yenibosna, Şirinevler, Kocasinan ve Ömür akslarıyla hem yoğun nüfuslu yerleşim alanlarını hem de Kuyumcukent, tekstil atölyeleri ve büyük özel hastane komplekslerini bünyesinde barındırır. Dar mahalle sokakları ile D-100 bağlantılarının yarattığı trafik baskısı hızlı çözümleri zorunlu kılar.",
          "Örneğin; Kuyumcukent'teki atölyenizden Kapalıçarşı'ya yetiştirilmesi gereken değerli bir kalıp veya özel sipariş takı mı var ya da Yenibosna'daki özel bir hastaneden Acıbadem'deki bir laboratuvara acil kan/biyopsi tüpü mü gönderilecek? AcilJet Kurye'nin hassas taşıma hazneli araçları ile güvenliği en üst düzeyde tutarak, trafiğe takılmadan doğrudan ve kontrollü teslimat sağlıyoruz.",
          "Öne çıkan hizmetler: Kuyumcukent Hassas Gönderi Kuryesi; Hastaneler Arası Medikal Evrak & Tahlil; Tekstil Atölye Numune Dağıtımı; Express & VIP Şehir İçi Kurye."
        ],
        "quickStat": "Kuyumcukent Hassas Gönderi Kuryesi"
      },
      {
        "name": "Bakırköy",
        "slug": "bakirkoy-kurye",
        "headline": "Bakırköy Kurye | Sahil Hattı, Sağlık Kompleksleri & AVM Lojistiği",
        "excerpt": "Bakırköy bölgesinde bakırköy; Ataköy, Florya, Yeşilköy sahil şeridi, köklü sağlık kuruluşları, adliye sarayı ve lüks alışveriş merkezleriyle kentin en köklü ve hareketli ticaret/yaşam merkezlerindendir. Sahil yolu ve E-5 bağlantılarında mesai.",
        "article": [
          "Bakırköy; Ataköy, Florya, Yeşilköy sahil şeridi, köklü sağlık kuruluşları, adliye sarayı ve lüks alışveriş merkezleriyle kentin en köklü ve hareketli ticaret/yaşam merkezlerindendir. Sahil yolu ve E-5 bağlantılarında mesai saatlerinde yaşanan trafik tıkanıklıkları acil taşımacılığı kritik hale getirir.",
          "Örneğin; Bakırköy Adliyesi'nde saat 16:30'daki bir duruşma öncesinde hâkime sunulması gereken ek delil dosyasını veya Ataköy Marina'daki müşterinize Florya'dan teslim edilecek lüks mağaza paketini acilen ulaştırmanız mı gerekiyor? AcilJet VIP Moto Kurye, adresinizden paketi alır almaz başka hiçbir ara teslimat yapmadan en uygun sahil veya yan yol bağlantısıyla dakikalar içinde teslimatı gerçekleştirir.",
          "Öne çıkan hizmetler: Bakırköy Adliyesi Hukuk & Dava Dosyası Kuryesi; Florya & Ataköy VIP Özel Paket Taşımacılığı; Klinik & Sağlık Merkezi Rapor Transferi; Lüks Mağaza & Butik Aynı Gün Teslimat."
        ],
        "quickStat": "Bakırköy Adliyesi Hukuk & Dava Dosyası Kuryesi"
      },
      {
        "name": "Başakşehir",
        "slug": "basaksehir-kurye",
        "headline": "Başakşehir Kurye | İkitelli OSB, Şehir Hastanesi & Modern Konutlar",
        "excerpt": "Başakşehir bölgesinde başakşehir; devasa organize sanayi siteleri (İkitelli OSB), Çam ve Sakura Şehir Hastanesi, modern konut projeleri ve Bahçeşehir aksıyla dev bir sanayi ve sağlık merkezidir. Geniş coğrafi yapısı ve sanayi giriş-çıkışlarındaki ağır.",
        "article": [
          "Başakşehir; devasa organize sanayi siteleri (İkitelli OSB), Çam ve Sakura Şehir Hastanesi, modern konut projeleri ve Bahçeşehir aksıyla dev bir sanayi ve sağlık merkezidir. Geniş coğrafi yapısı ve sanayi giriş-çıkışlarındaki ağır vasıta trafiği esnek lojistik modellerini gerektirir.",
          "Örneğin; İkitelli OSB'deki fabrikanızda çalışan CNC tezgâhı için acil bir rulman/elektronik kart mı lazım veya Çam ve Sakura Şehir Hastanesi'ne bir medikal medikal firmanın acil cerrahi sarf malzemesi mi ulaştırması gerekiyor? AcilJet Kurye, motorlu ve hafif ticari filosuyla hem küçük yedek parçaları hem de hacimli koli ve cihazları anında alıp doğrudan ilgili üniteye sevk eder.",
          "Öne çıkan hizmetler: İkitelli OSB Ağır Sanayi & Yedek Parça Kuryesi; Şehir Hastanesi Medikal & Tıbbi Cihaz Teslimatı; Bahçeşehir & Kayaşehir Hızlı Paket Servisi; Panelvan & Doblo İmalat Sevkiyatı."
        ],
        "quickStat": "İkitelli OSB Ağır Sanayi & Yedek Parça Kuryesi"
      },
      {
        "name": "Bayrampaşa",
        "slug": "bayrampasa-kurye",
        "headline": "Bayrampaşa Kurye | Büyük Otogar, Mega Center & İmalat Sanayi",
        "excerpt": "Bayrampaşa bölgesinde bayrampaşa; 15 Temmuz Demokrasi Otogarı, Mega Center Gıda Toptancıları Sitesi, plastik, kalıp ve triko imalathaneleriyle İstanbul’un üretim ve şehirlerarası yolcu/kargo aktarma göbeğidir. Otogar çevresi ve sanayi sokaklarındaki.",
        "article": [
          "Bayrampaşa; 15 Temmuz Demokrasi Otogarı, Mega Center Gıda Toptancıları Sitesi, plastik, kalıp ve triko imalathaneleriyle İstanbul’un üretim ve şehirlerarası yolcu/kargo aktarma göbeğidir. Otogar çevresi ve sanayi sokaklarındaki yoğun karmaşa özel teslimat planı ister.",
          "Örneğin; Anadolu'daki bir bayinize giden şehirlerarası otobüsün bagajına kalkıştan 20 dakika önce acil bir yedek parça kolisini yetiştirmeniz mi gerekiyor? Ya da Mega Center'daki toptancı ofisinizden Kadıköy'deki restorana acil gıda numunesi mi gidecek? AcilJet Otobüs Kargo Kuryesi otogar peronlarına kadar inip gönderinizi muavine elden teslim eder veya moto kuryemiz numuneyi şehiriçi hedefe hızla ulaştırır.",
          "Öne çıkan hizmetler: Bayrampaşa Otogar Emanet & Bagaj Kuryesi; Mega Center Toptan Gıda & Numune Transferi; Plastik & Kalıp İmalatçıları Acil Parça Dağıtımı; Şehirlerarası Otobüs Kargo Entegrasyonu."
        ],
        "quickStat": "Bayrampaşa Otogar Emanet & Bagaj Kuryesi"
      },
      {
        "name": "Beşiktaş",
        "slug": "besiktas-kurye",
        "headline": "Beşiktaş Acil Kurye | Boğaz Hattı, Ajanslar & Kurumsal Merkezler",
        "excerpt": "Beşiktaş bölgesinde beşiktaş; Levent, Etiler, Akaretler, Bebek ve Ortaköy hattıyla kreatif ajanslar, konsolosluklar, üniversiteler, holding binaları ve lüks yaşamın merkezidir. Barbaros Bulvarı ve sahil sahil yolu trafiğinin kilitlendiği anlarda.",
        "article": [
          "Beşiktaş; Levent, Etiler, Akaretler, Bebek ve Ortaköy hattıyla kreatif ajanslar, konsolosluklar, üniversiteler, holding binaları ve lüks yaşamın merkezidir. Barbaros Bulvarı ve sahil sahil yolu trafiğinin kilitlendiği anlarda zaman yönetimi hayati önem taşır.",
          "Örneğin; Akaretler’deki kreatif ajansınızdan Levent’teki kurumsal müşterinize saat 16:30’daki kritik lansman toplantısına yetişmesi gereken ıslak imzalı sözleşme veya sunum numunesini mi göndermeniz gerekiyor? Barbaros trafiğinde zaman kaybetmek yerine AcilJet WhatsApp hattına konumu iletmeniz yeterlidir. 15 dakikada gelen VIP Moto Kuryemiz paketi alıp doğrudan Levent'e toplantı masasına ulaştırır.",
          "Öne çıkan hizmetler: VIP Moto Kurye (Doğrudan & Beklemesiz Teslimat); Kreatif Ajans & Medya Lansman Kuryesi; Bebek & Etiler Lüks Butik Teslimatı; 7/24 Gece ve Nöbetçi Evrak Servisi."
        ],
        "quickStat": "VIP Moto Kurye (Doğrudan & Beklemesiz Teslimat)"
      },
      {
        "name": "Beylikdüzü",
        "slug": "beylikduzu-kurye",
        "headline": "Beylikdüzü Kurye | TÜYAP Fuar Merkezi, Mermerciler & Sanayi",
        "excerpt": "Beylikdüzü bölgesinde beylikdüzü; TÜYAP Fuar ve Kongre Merkezi, Bakırcılar ve Mermerciler Sanayi Sitesi, modern konut siteleri ve liman bağlantısıyla batı İstanbul’un en dinamik ilçelerindendir. Kent merkezine olan mesafesi nedeniyle doğru araç ve.",
        "article": [
          "Beylikdüzü; TÜYAP Fuar ve Kongre Merkezi, Bakırcılar ve Mermerciler Sanayi Sitesi, modern konut siteleri ve liman bağlantısıyla batı İstanbul’un en dinamik ilçelerindendir. Kent merkezine olan mesafesi nedeniyle doğru araç ve hızlı otoyol navigasyonu şarttır.",
          "Örneğin; TÜYAP Fuarı'nda standınız açıkken acilen Kadıköy veya Maslak'taki merkez ofisinizden unuttuğunuz fuar sözleşmelerine, tanıtım broşürlerine veya yedek bir cihaza mı ihtiyacınız oldu? Beylikdüzü AcilJet Kurye ekibimiz otoyol bağlantılarını kullanarak merkezden malzemeyi teslim alır ve fuar standınıza bizzat elden teslim eder.",
          "Öne çıkan hizmetler: TÜYAP Fuar & Kongre Stand Kuryesi; Beylikdüzü OSB & Mermerciler Sanayi Parça Dağıtımı; Metropoller Arası Express Kurye; Doblo / Panelvan ile Hacimli Fuar Taşımacılığı."
        ],
        "quickStat": "TÜYAP Fuar & Kongre Stand Kuryesi"
      },
      {
        "name": "Beyoğlu",
        "slug": "beyoglu-kurye",
        "headline": "Beyoğlu Moto Kurye | Taksim, Karaköy, Galata & Konsolosluklar",
        "excerpt": "Beyoğlu bölgesinde beyoğlu; İstiklal Caddesi, Karaköy liman bölgesi, Cihangir, Galata ve Pera hattındaki tarihi sokakları, konsoloslukları, sanat galerileri, mimarlık ofisleri ve otelleriyle kendine has bir dokuya sahiptir. Araç girişine kapalı.",
        "article": [
          "Beyoğlu; İstiklal Caddesi, Karaköy liman bölgesi, Cihangir, Galata ve Pera hattındaki tarihi sokakları, konsoloslukları, sanat galerileri, mimarlık ofisleri ve otelleriyle kendine has bir dokuya sahiptir. Araç girişine kapalı yayalaştırılmış yollar ve dik yokuşlar uzman moto kurye hakimiyeti gerektirir.",
          "Örneğin; Karaköy'deki mimarlık ofisinizden Beşiktaş'taki konsolosluğa veya Galata'daki bir otele misafirin unuttuğu pasaport/bilet evrakını mı ulaştırmanız gerekiyor? Araç trafiğinin tıkandığı ve yayalaştırılmış alanların bulunduğu Beyoğlu sokaklarında AcilJet Moto Kurye çevik sürüşüyle paketi adresinden alıp hedef kapıya kadar eksiksiz ulaştırır.",
          "Öne çıkan hizmetler: Konsolosluk, Vize & Pasaport Kuryesi; Karaköy & Galata Butik / Galeri Taşımacılığı; Tarihi Yarımada & Beyoğlu Dar Sokak Moto Kuryesi; Oteller Arası Acil Misafir Emanet Transferi."
        ],
        "quickStat": "Konsolosluk, Vize & Pasaport Kuryesi"
      },
      {
        "name": "Büyükçekmece",
        "slug": "buyukcekmece-kurye",
        "headline": "Büyükçekmece Kurye | Göl Havzası, Kumburgaz & Sanayi Tesisleri",
        "excerpt": "Büyükçekmece bölgesinde büyükçekmece; göl çevresindeki villalar, sahil şeridi, Hadımköy bağlantı aksı ve E-5 boyunca sıralanan sanayi tesisleriyle geniş bir coğrafyayı kapsar. Merkeze uzaklığı sebebiyle acil gönderilerde zaman planlaması büyük.",
        "article": [
          "Büyükçekmece; göl çevresindeki villalar, sahil şeridi, Hadımköy bağlantı aksı ve E-5 boyunca sıralanan sanayi tesisleriyle geniş bir coğrafyayı kapsar. Merkeze uzaklığı sebebiyle acil gönderilerde zaman planlaması büyük hassasiyet taşır.",
          "Örneğin; Kumburgaz veya Mimarsinan'daki fabrikanızdan Maslak'taki genel merkeze yetiştirilecek acil finansal denetim raporu veya fatura koçanları mı var? Normal kargoların ertesi güne bıraktığı bu mesafeyi AcilJet VIP Kurye aynı gün içinde 1-2 saat gibi rekor bir sürede kapıdan kapıya ulaştırır.",
          "Öne çıkan hizmetler: Şehirlerarası Çevre Yol Bağlantılı Hızlı Teslimat; Hadımköy-Büyükçekmece Sanayi Koridoru Kuryesi; Yazlık & Villa Siteleri Özel Kurye Hizmeti; Araçlı Panelvan Koli Taşımacılığı."
        ],
        "quickStat": "Şehirlerarası Çevre Yol Bağlantılı Hızlı Teslimat"
      },
      {
        "name": "Çatalca",
        "slug": "catalca-kurye",
        "headline": "Çatalca Kurye | Trakya Serbest Bölge, Lojistik Depolar & Çiftlikler",
        "excerpt": "Çatalca bölgesinde i̇stanbul’un yüzölçümü bakımından en büyük ilçesi olan Çatalca; Trakya Serbest Bölgesi, dev antrepolar, gümrük ambarları, rüzgâr santralleri ve agro-turizm tesisleriyle sanayi ile doğanın buluştuğu noktadır. Uzak mesafeler güçlü.",
        "article": [
          "İstanbul’un yüzölçümü bakımından en büyük ilçesi olan Çatalca; Trakya Serbest Bölgesi, dev antrepolar, gümrük ambarları, rüzgâr santralleri ve agro-turizm tesisleriyle sanayi ile doğanın buluştuğu noktadır. Uzak mesafeler güçlü araç filosu gerektirir.",
          "Örneğin; Trakya Serbest Bölgesi'ndeki yabancı sermayeli fabrikanızdan onaylanması gereken acil gümrük beyannamelerini ve test numunelerini Avrupa Yakası merkezine veya Anadolu Yakası'na aynı gün mü ulaştırmalısınız? AcilJet Kurye, Çatalca'nın geniş yol ağlarına hakim kuryeleriyle mesafeleri kısaltarak güvenli teslimat sunar.",
          "Öne çıkan hizmetler: Trakya Serbest Bölge Gümrük & Numune Kuryesi; Lojistik Depolar Arası Acil İrsaliye & Evrak; Çatalca-İstanbul Merkez Express Teslimat; Kamyonet & Panelvan Ağır Parça Taşımacılığı."
        ],
        "quickStat": "Trakya Serbest Bölge Gümrük & Numune Kuryesi"
      },
      {
        "name": "Esenler",
        "slug": "esenler-kurye",
        "headline": "Esenler Kurye | Giyimkent, Tekstilkent & Otogar Çevresi Lojistiği",
        "excerpt": "Esenler bölgesinde esenler; Tekstilkent ve Giyimkent gibi iki dev ticaret kompleksi, toptan hazır giyim showroomları ve kentin merkez otoyol kavşaklarına komşuluğu ile tekstil sektörünün ana omurgasıdır. Günlük yüz binlerce fatura, kumaş numunesi.",
        "article": [
          "Esenler; Tekstilkent ve Giyimkent gibi iki dev ticaret kompleksi, toptan hazır giyim showroomları ve kentin merkez otoyol kavşaklarına komşuluğu ile tekstil sektörünün ana omurgasıdır. Günlük yüz binlerce fatura, kumaş numunesi ve mağaza kolisi transfer edilir.",
          "Örneğin; Tekstilkent'teki kumaş toptancınızdan Osmanbey'deki moda tasarımcısına yeni sezon kartela ve numune kumaşlarının 1 saat içinde gitmesi mi gerekiyor? Müşterinizi bekletmemek adına AcilJet Moto Kurye'yi yönlendiriyoruz; kartelalar zarar görmeden, ütüsü bozulmadan doğrudan tasarımcının eline teslim ediliyor.",
          "Öne çıkan hizmetler: Tekstilkent & Giyimkent Kartela / Kumaş Kuryesi; Hazır Giyim Toptan Sipariş & Koli Transferi; E-Ticaret Moda Mağazaları Hızlı Dağıtım; Otogar Bağlantılı Şehirlerarası Paket Çözümleri."
        ],
        "quickStat": "Tekstilkent & Giyimkent Kartela / Kumaş Kuryesi"
      },
      {
        "name": "Esenyurt",
        "slug": "esenyurt-kurye",
        "headline": "Esenyurt Kurye | Üretim Tesisleri, E-Ticaret Depoları & Rezidanslar",
        "excerpt": "Esenyurt bölgesinde esenyurt; yüzlerce fabrikanın yer aldığı sanayi siteleri, dev e-ticaret lojistik depoları, lojistik köyleri ve yoğun nüfuslu konut projeleriyle İstanbul'un en hareketli ve hacimli bölgesidir. Bölge içi yoğun trafik ve depo giriş.",
        "article": [
          "Esenyurt; yüzlerce fabrikanın yer aldığı sanayi siteleri, dev e-ticaret lojistik depoları, lojistik köyleri ve yoğun nüfuslu konut projeleriyle İstanbul'un en hareketli ve hacimli bölgesidir. Bölge içi yoğun trafik ve depo giriş kuyrukları operasyonel hız gerektirir.",
          "Örneğin; Esenyurt'taki ana e-ticaret deponuzdan Kadıköy veya Beşiktaş'taki müşterinize 'aynı gün 3 saatte teslim' sözü verdiğiniz kritik bir elektronik ürünü veya yedek parçayı çıkarmak mı istiyorsunuz? AcilJet Araçlı ve Motorlu Kurye filomuz depodan toplu veya tekli alım yaparak tüm İstanbul geneline aynı gün jet hızında dağıtım sağlar.",
          "Öne çıkan hizmetler: E-Ticaret Depo Aynı Gün Hızlı Çıkış; Sanayi Siteleri Yedek Parça & Hammadde Kuryesi; Panelvan & Doblo Hacimli Yük Taşımacılığı; Rezidans & Toplu Konut Acil Kurye."
        ],
        "quickStat": "E-Ticaret Depo Aynı Gün Hızlı Çıkış"
      },
      {
        "name": "Eyüpsultan",
        "slug": "eyupsultan-kurye",
        "headline": "Eyüpsultan Kurye | Haliç Kıyısı, Göktürk, Kemerburgaz & Sanayi",
        "excerpt": "Eyüpsultan bölgesinde eyüpsultan; tarihi Haliç kıyılarından Rami gıda toptancılarına, oradan Göktürk ve Kemerburgaz’ın lüks villa yerleşimlerine ve Kuzey Marmara Otoyolu bağlantılarına kadar uzanan çok katmanlı bir ilçedir. Farklı bölgelerin farklı.",
        "article": [
          "Eyüpsultan; tarihi Haliç kıyılarından Rami gıda toptancılarına, oradan Göktürk ve Kemerburgaz’ın lüks villa yerleşimlerine ve Kuzey Marmara Otoyolu bağlantılarına kadar uzanan çok katmanlı bir ilçedir. Farklı bölgelerin farklı hız ve araç ihtiyaçları bulunur.",
          "Örneğin; Göktürk'teki ofisinizden Maslak veya Levent'e acil bir proje dosyası göndermek istediğinizde ya da Rami'deki toptancıdan bir restorana acil malzeme yetiştirmeniz gerektiğinde AcilJet Kurye anında bölgenize en yakın kuryeyi yönlendirir. Kuzey ormanları yolu veya Haliç sahil yolu üzerinden en uygun bağlantıyla paketiniz zamanında yerine ulaşır.",
          "Öne çıkan hizmetler: Göktürk & Kemerburgaz VIP Özel Kurye; Rami & Topçular Toptan Gıda/Ticari Kurye; Haliç Hattı Mimarlık & Ajans Dosya Teslimi; 7/24 Kesintisiz Nöbetçi Moto Kurye."
        ],
        "quickStat": "Göktürk & Kemerburgaz VIP Özel Kurye"
      },
      {
        "name": "Fatih",
        "slug": "fatih-kurye",
        "headline": "Fatih Moto Kurye | Tarihi Yarımada, Laleli, Kapalıçarşı & Çapa",
        "excerpt": "Fatih bölgesinde fatih; Kapalıçarşı kuyumcuları, Laleli ve Merter bağlantılı hazır giyim ihracatçıları, Çapa ve Cerrahpaşa tıp fakülteleri, Vatan Caddesi resmi kurumlarıyla Tarihi Yarımada'nın kalbidir. Dar sokaklar, araç trafiğine kapalı alanlar.",
        "article": [
          "Fatih; Kapalıçarşı kuyumcuları, Laleli ve Merter bağlantılı hazır giyim ihracatçıları, Çapa ve Cerrahpaşa tıp fakülteleri, Vatan Caddesi resmi kurumlarıyla Tarihi Yarımada'nın kalbidir. Dar sokaklar, araç trafiğine kapalı alanlar ve turist kalabalığı sadece moto kurye ile aşılabilir.",
          "Örneğin; Laleli'deki toptan mağazanızdan Rusya veya Arap ülkelerine gidecek acil bir sipariş numunesini Atatürk veya İstanbul Havalimanı kargo acentesine mi yetiştireceksiniz? Ya da Çapa Tıp Fakültesi'ne acil medikal evrak mı gidecek? AcilJet Moto Kurye, Fatih'in tarihi dar sokaklarında zaman kaybetmeden paketi alır ve en hızlı çıkış arterinden hedefe ulaştırır.",
          "Öne çıkan hizmetler: Kapalıçarşı Kıymetli Maden & Kuyum Kuryesi; Laleli İhracat & Tekstil Numune Kuryesi; Çapa & Cerrahpaşa Medikal / Tahlil Taşımacılığı; Resmi Daire & Noter Evrak Dağıtımı."
        ],
        "quickStat": "Kapalıçarşı Kıymetli Maden & Kuyum Kuryesi"
      },
      {
        "name": "Gaziosmanpaşa",
        "slug": "gaziosmanpasa-kurye",
        "headline": "Gaziosmanpaşa Kurye | Hastaneler, Adliye & Küçük Sanayi Siteleri",
        "excerpt": "Gaziosmanpaşa bölgesinde gaziosmanpaşa; kentsel dönüşümle modernleşen merkez aksı, özel hastane yatırımları, GOP Adliyesi ve küçük ölçekli imalathaneleriyle TEM ve E-5 arasında stratejik bir geçiş noktasıdır. Mahalle içi dik yokuşlar ve yoğun trafik.",
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
        "excerpt": "Güngören bölgesinde güngören ve Merter; Türkiye'nin hazır giyim ve tekstil ihracat başkentidir. Kumaşçılar, aksesuar üreticileri, modelhaneler ve ihracat showroomlarının iç içe olduğu Merter sokaklarında trafik günün her saati kilitlidir. Hız burada.",
        "article": [
          "Güngören ve Merter; Türkiye'nin hazır giyim ve tekstil ihracat başkentidir. Kumaşçılar, aksesuar üreticileri, modelhaneler ve ihracat showroomlarının iç içe olduğu Merter sokaklarında trafik günün her saati kilitlidir. Hız burada siparişi bağlayan ana faktördür.",
          "Örneğin; Merter'deki showroomunuza gelen yabancı alıcı heyeti için Güngören'deki modelhaneden acil prova numunesi kumaş veya dikilmiş ilk numune mi bekleniyor? Trafikte kendi aracınızla 1 saat harcamak yerine AcilJet Merter Kuryesi'ni çağırın; 10 dakikada ürünü modelhaneden alıp showroomdaki alıcı masasına koysun.",
          "Öne çıkan hizmetler: Merter Tekstil & Moda Showroom Kuryesi; Modelhane & Kesimhane Acil Numune Transferi; Fatura, Çek & İhracat Dosyası Hızlı Teslimi; Doblo / Panelvan ile Butik & Mağaza Koli Sevkiyatı."
        ],
        "quickStat": "Merter Tekstil & Moda Showroom Kuryesi"
      },
      {
        "name": "Kâğıthane",
        "slug": "kagithane-kurye",
        "headline": "Kâğıthane Kurye | Cendere Vadisi, Bilişim Vadisi & Ofis Kuleleri",
        "excerpt": "Kâğıthane bölgesinde kâğıthane; Cendere Vadisi boyunca yükselen modern ofis kuleleri, bilişim şirketleri, lojistik merkezleri ve Maslak-Levent hattına doğrudan tünel bağlantılarıyla kentin yeni nesil iş merkezidir. Vadi trafiğinde dakik operasyon.",
        "article": [
          "Kâğıthane; Cendere Vadisi boyunca yükselen modern ofis kuleleri, bilişim şirketleri, lojistik merkezleri ve Maslak-Levent hattına doğrudan tünel bağlantılarıyla kentin yeni nesil iş merkezidir. Vadi trafiğinde dakik operasyon büyük avantaj sağlar.",
          "Örneğin; Cendere Caddesi'ndeki teknoloji şirketinizden Ümraniye Finans Merkezi'ndeki bir bankaya yedeklenmiş kritik veri disklerini veya ıslak imzalı yazılım sözleşmesini saat 17:00'ye kadar iletmeniz mi gerekiyor? AcilJet Express Moto Kurye, Kâğıthane-Piyalepaşa tüneli ve köprü geçişlerini en uygun geçiş planıyla aşarak paketi vaktinde teslim eder.",
          "Öne çıkan hizmetler: Cendere Vadisi Bilişim & Yazılım Kuryesi; Plazalar Arası Sözleşme & Noter Evrak Dağıtımı; E-Ticaret Firmaları İçin Hızlı Paket Servisi; 7/24 Kesintisiz Şirket Kurye Çözümleri."
        ],
        "quickStat": "Cendere Vadisi Bilişim & Yazılım Kuryesi"
      },
      {
        "name": "Küçükçekmece",
        "slug": "kucukcekmece-kurye",
        "headline": "Küçükçekmece Kurye | Sefaköy, Halkalı, Basın Ekspres & Atakent",
        "excerpt": "Küçükçekmece bölgesinde küçükçekmece; Basın Ekspres yolu üzerindeki finans kuleleri, oteller, Sefaköy sanayi siteleri, Halkalı lojistik terminalleri ve Atakent'in dev konut projeleriyle Avrupa Yakası'nın en kalabalık ticaret ve yaşam merkezlerinden.",
        "article": [
          "Küçükçekmece; Basın Ekspres yolu üzerindeki finans kuleleri, oteller, Sefaköy sanayi siteleri, Halkalı lojistik terminalleri ve Atakent'in dev konut projeleriyle Avrupa Yakası'nın en kalabalık ticaret ve yaşam merkezlerinden biridir.",
          "Örneğin; Basın Ekspres üzerindeki otelde düzenlenen uluslararası bir konferansa Levent'teki ajansınızdan son dakika basılan yaka kartları ve sunum cihazlarını mı yetiştireceksiniz? Basın Ekspres'in meşhur sıkışık trafiğinde beklemeden AcilJet VIP Moto Kurye ile malzemeleri doğrudan fuaye alanına ulaştırabilirsiniz.",
          "Öne çıkan hizmetler: Basın Ekspres Otel & Kongre Kuryesi; Halkalı Gümrük & Lojistik Evrak Servisi; Sefaköy Sanayi Parça ve Numune Dağıtımı; Atakent Rezidans Kişisel Acil Paket Hizmeti."
        ],
        "quickStat": "Basın Ekspres Otel & Kongre Kuryesi"
      },
      {
        "name": "Sarıyer & Maslak",
        "slug": "sariyer-maslak-kurye",
        "headline": "Sarıyer & Maslak Acil Kurye | Plazalar, Konsolosluklar & Siteler",
        "excerpt": "Sarıyer & Maslak bölgesinde sarıyer ve Maslak aksı; gökdelenler, holding merkezleri, İTÜ Teknokent, konsolosluklar, Tarabya-Yeniköy yalıları ve Zekeriyaköy villaları ile iş ve bürokrasi dünyasının zirvesidir. Büyükdere Caddesi trafiği ve plaza güvenlik.",
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
        "excerpt": "Silivri bölgesinde silivri; Değirmenköy ve Selimpaşa Organize Sanayi Bölgeleri, ilaç fabrikaları, plastik üreticileri ve Trakya ile İstanbul'u bağlayan D-100 ve TEM otoyolu üzerindeki kilit konumuyla endüstriyel bir merkezdir. Uzak mesafede ekspres.",
        "article": [
          "Silivri; Değirmenköy ve Selimpaşa Organize Sanayi Bölgeleri, ilaç fabrikaları, plastik üreticileri ve Trakya ile İstanbul'u bağlayan D-100 ve TEM otoyolu üzerindeki kilit konumuyla endüstriyel bir merkezdir. Uzak mesafede ekspres lojistik hayati önemdedir.",
          "Örneğin; Selimpaşa OSB'deki fabrikanızdan Dudullu OSB'deki müşterinize acil onay için gönderilmesi gereken üretim numunesi veya kalıp parçası mı var? Standart kargoların 2 günde götürdüğü bu mesafeyi AcilJet Doblo/Panelvan veya Moto Kurye filosu aynı gün 2-3 saat içinde eksiksiz tamamlar.",
          "Öne çıkan hizmetler: Selimpaşa & Değirmenköy Sanayi Kuryesi; İlaç Fabrikaları Hammadde & Numune Transferi; İstanbul-Trakya Şehirlerarası Express Hat; Panelvan & Doblo Hacimli Fabrika Sevkiyatı."
        ],
        "quickStat": "Selimpaşa & Değirmenköy Sanayi Kuryesi"
      },
      {
        "name": "Sultangazi",
        "slug": "sultangazi-kurye",
        "headline": "Sultangazi Kurye | Taş Ocakları, İmalat Atölyeleri & Konutlar",
        "excerpt": "Sultangazi bölgesinde sultangazi; tekstil, ayakkabı, metal döküm ve taş ocakları tesisleriyle hızla gelişen imalat odaklı bir ilçedir. TEM otoyoluna yakınlığı sayesinde çevre ilçelere ve sanayi merkezlerine hızlı erişim potansiyeline.",
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
        "excerpt": "Şişli & Nişantaşı bölgesinde şişli; Mecidiyeköy’ün iş kuleleri, Nişantaşı’nın haute couture moda atölyeleri, Fulya ve Bomonti’nin rezidansları ve dev özel hastaneleriyle İstanbul’un kalbidir. Halaskargazi, Valikonağı ve Büyükdere Caddesi’nde araçla ilerlemek.",
        "article": [
          "Şişli; Mecidiyeköy’ün iş kuleleri, Nişantaşı’nın haute couture moda atölyeleri, Fulya ve Bomonti’nin rezidansları ve dev özel hastaneleriyle İstanbul’un kalbidir. Halaskargazi, Valikonağı ve Büyükdere Caddesi’nde araçla ilerlemek imkansızken iki tekerlekli kuryeler vazgeçilmezdir.",
          "Örneğin; Nişantaşı’ndaki estetik kliniğinizin operasyon sırasında acilen Maslak’taki laboratuvardan özel bir medikal biyopsi kitine mi ihtiyacı oldu ya da moda tasarımcınızın özel dikim elbisesini akşam galası öncesi Beşiktaş’taki müşterisine mi ulaştırması gerekiyor? AcilJet VIP Kurye, özel korumalı çantasıyla sarsıntısız, steril ve dakikalar içinde teslimatı sağlar.",
          "Öne çıkan hizmetler: Fulya & Nişantaşı Medikal ve Klinik Kuryesi; Haute Couture Askılı & Butik Kıyafet Taşımacılığı; Mecidiyeköy Plaza ve Noter Evrak Dağıtımı; 7/24 Kesintisiz Nöbetçi Moto Kurye."
        ],
        "quickStat": "Fulya & Nişantaşı Medikal ve Klinik Kuryesi"
      },
      {
        "name": "Zeytinburnu",
        "slug": "zeytinburnu-kurye",
        "headline": "Zeytinburnu Kurye | Deri Sanayi, Tekstil Toptancıları & Demirciler",
        "excerpt": "Zeytinburnu bölgesinde zeytinburnu; tarihi Dericiler Sitesi, Demirciler Sitesi, kumaş toptancıları ve Ambarlar bölgesiyle hafif sanayi ve lojistiğin merkez üssüdür. E-5 ve sahil yolu arasındaki kilit konumuyla tüm şehre hızlı çıkış imkânı.",
        "article": [
          "Zeytinburnu; tarihi Dericiler Sitesi, Demirciler Sitesi, kumaş toptancıları ve Ambarlar bölgesiyle hafif sanayi ve lojistiğin merkez üssüdür. E-5 ve sahil yolu arasındaki kilit konumuyla tüm şehre hızlı çıkış imkânı verir.",
          "Örneğin; Demirciler Sitesi'ndeki atölyenizden Tuzla Tersaneleri'ne acil teslim edilmesi gereken özel kesim bir metal parça veya yedek cıvata takımı mı var? AcilJet Kurye, ister moto kurye ister Doblo hafif ticari araçla parçayı anında alıp sahil yolundan doğrudan tersaneye sevk eder.",
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
        "excerpt": "Adalar bölgesinde büyükada, Heybeliada, Burgazada ve Kınalıada; motorlu kara taşıtı trafiğine kapalı yapısı ve deniz ulaşımına bağımlılığı ile İstanbul’un en özel lojistik bölgesidir. Adalara gönderi ulaştırmak özel deniz motoru ve iskele.",
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
        "excerpt": "Ataşehir bölgesinde ataşehir; İstanbul Uluslararası Finans Merkezi (İFM), banka genel müdürlükleri, Batı Ataşehir lüks rezidansları ve Yedpa Ticaret Merkezi ile Anadolu Yakası'nın finansal kalbidir. TEM ve E-5 kesişimindeki yoğun plaza trafiği.",
        "article": [
          "Ataşehir; İstanbul Uluslararası Finans Merkezi (İFM), banka genel müdürlükleri, Batı Ataşehir lüks rezidansları ve Yedpa Ticaret Merkezi ile Anadolu Yakası'nın finansal kalbidir. TEM ve E-5 kesişimindeki yoğun plaza trafiği dakiklik gerektirir.",
          "Örneğin; Finans Merkezi'ndeki genel müdürlüğünüzden Maslak'taki yabancı ortaklarınıza saat 17:00 yönetim kurulu öncesinde ıslak imzalı bilançoları ve fizibilite raporlarını mı ulaştırmalısınız? Köprü trafiğinin kilitlendiği saatlerde AcilJet VIP Moto Kurye en seri köprü bağlantısını kullanarak evrakları tam zamanında toplantı masasına iletir.",
          "Öne çıkan hizmetler: İstanbul Finans Merkezi (İFM) VIP Kurye; YEDPA Ticaret Merkezi Toptan & Parça Kuryesi; Banka & Denetim Şirketleri Evrak Sirkülasyonu; Rezidanslar İçin 7/24 Güvenli Paket Servisi."
        ],
        "quickStat": "İstanbul Finans Merkezi (İFM) VIP Kurye"
      },
      {
        "name": "Beykoz",
        "slug": "beykoz-kurye",
        "headline": "Beykoz Kurye | Kavacık İş Merkezleri, Villalar & Riva Hattı",
        "excerpt": "Beykoz bölgesinde beykoz; Fatih Sultan Mehmet Köprüsü ayağındaki Kavacık plazaları, Boğaz köyleri (Kanlıca, Anadolu Hisarı, Paşabahçe), Acarkent/ Beykoz Konakları ve Riva aksıyla hem kurumsal hem lüks konut alanıdır. Dağınık coğrafi yapıda yol.",
        "article": [
          "Beykoz; Fatih Sultan Mehmet Köprüsü ayağındaki Kavacık plazaları, Boğaz köyleri (Kanlıca, Anadolu Hisarı, Paşabahçe), Acarkent/ Beykoz Konakları ve Riva aksıyla hem kurumsal hem lüks konut alanıdır. Dağınık coğrafi yapıda yol bilgisi esastır.",
          "Örneğin; Kavacık'taki genel merkezinizden Riva'daki film platosuna acil bir çekim ekipmanı/kostüm mü gidecek ya da Acarkent'teki müşterinize Nişantaşı'ndan değerli bir mücevher kutusu mu teslim edilecek? AcilJet Kurye'nin bölgeye hâkim sürücüleri geniş villa sitelerinde kaybolmadan, doğrudan hedefe hızlı ve güvenli teslimat yapar.",
          "Öne çıkan hizmetler: Kavacık Plazalar Kurumsal Evrak Kuryesi; Dizi/Film Platoları Acil Ekipman & Kostüm Transferi; Acarkent & Beykoz Konakları VIP Paket Kuryesi; Boğaz Hattı Sahil Express Dağıtımı."
        ],
        "quickStat": "Kavacık Plazalar Kurumsal Evrak Kuryesi"
      },
      {
        "name": "Çekmeköy",
        "slug": "cekmekoy-kurye",
        "headline": "Çekmeköy Kurye | Taşdelen, Ömerli Villaları & Madenler Hattı",
        "excerpt": "Çekmeköy bölgesinde çekmeköy; Taşdelen sanayi siteleri, Alemdağ, Ömerli villa projeleri, kolejler ve Kuzey Marmara Otoyolu bağlantısıyla Anadolu Yakası'nın hızla büyüyen merkezlerindendir. Genişleyen yerleşim alanlarında hızlı adres takibi.",
        "article": [
          "Çekmeköy; Taşdelen sanayi siteleri, Alemdağ, Ömerli villa projeleri, kolejler ve Kuzey Marmara Otoyolu bağlantısıyla Anadolu Yakası'nın hızla büyüyen merkezlerindendir. Genişleyen yerleşim alanlarında hızlı adres takibi şarttır.",
          "Örneğin; Çekmeköy'deki bir eğitim kurumundan veya işletmenizden Ataşehir'deki muhasebe merkezine acil yetiştirilmesi gereken bordro ve çek evraklarınız mı var? AcilJet Express Kurye çağrınız üzerine 15 dakikada adresinize gelerek evrakları teslim alır ve Şile otoyolundan hızla hedef ilçeye iletir.",
          "Öne çıkan hizmetler: Şile Otoyolu & Madenler Express Kurye; Ömerli Villa Siteleri Özel Kurye; Taşdelen Sanayi Parça ve Numune Dağıtımı; Hafif Ticari Doblo ile Koli & Malzeme Taşıma."
        ],
        "quickStat": "Şile Otoyolu & Madenler Express Kurye"
      },
      {
        "name": "Kadıköy",
        "slug": "kadikoy-kurye",
        "headline": "Kadıköy Moto Kurye | Bağdat Caddesi, Moda, Rıhtım & Kozyatağı",
        "excerpt": "Kadıköy bölgesinde kadıköy; Bağdat Caddesi’nin lüks mağazaları, Moda ve Caferağa’nın tasarım atölyeleri, Rıhtım’ın insan sirkülasyonu ve Kozyatağı plazalarıyla Anadolu Yakası’nın kültürel ve ekonomik merkezidir. Gün boyu süren trafik ve otopark.",
        "article": [
          "Kadıköy; Bağdat Caddesi’nin lüks mağazaları, Moda ve Caferağa’nın tasarım atölyeleri, Rıhtım’ın insan sirkülasyonu ve Kozyatağı plazalarıyla Anadolu Yakası’nın kültürel ve ekonomik merkezidir. Gün boyu süren trafik ve otopark sıkıntısı moto kuryeyi vazgeçilmez kılar.",
          "Örneğin; Bağdat Caddesi’ndeki butiğinizden Nişantaşı’ndaki müşterinize akşam giyilecek özel tasarım bir elbiseyi mi göndereceksiniz ya da Kozyatağı'ndaki ofisinizden karşı yakaya sözleşme mi gidecek? AcilJet Express Kurye, Avrasya Tüneli ve köprü alternatiflerini en hızlı şekilde değerlendirerek aynı gün, tam taahhüt edilen saatte paketi yerine ulaştırır.",
          "Öne çıkan hizmetler: Bağdat Caddesi Lüks Butik & Moda Kuryesi; Kozyatağı Plaza ve Ofis Evrak Transferi; Moda Tasarım Atölyeleri Numune Dağıtımı; 7/24 Nöbetçi Gece Moto Kuryesi."
        ],
        "quickStat": "Bağdat Caddesi Lüks Butik & Moda Kuryesi"
      },
      {
        "name": "Kartal",
        "slug": "kartal-kurye",
        "headline": "Kartal Kurye | Anadolu Adalet Sarayı, Sahil Yolu & Sanayi",
        "excerpt": "Kartal bölgesinde kartal; dünyanın en büyük adliye binalarından biri olan İstanbul Anadolu Adalet Sarayı, sahil şeridi, kentsel dönüşümle yükselen rezidanslar ve oto sanayi siteleriyle kritik bir ilçedir. Hukuk büroları ve noterler için Kartal.",
        "article": [
          "Kartal; dünyanın en büyük adliye binalarından biri olan İstanbul Anadolu Adalet Sarayı, sahil şeridi, kentsel dönüşümle yükselen rezidanslar ve oto sanayi siteleriyle kritik bir ilçedir. Hukuk büroları ve noterler için Kartal adliye trafiği büyük önem taşır.",
          "Örneğin; Şişli veya Maslak'taki hukuk büronuzdan Kartal Anadolu Adliyesi'ne saat 16:30'a kadar sunulması gereken acil temyiz dilekçesi, itiraz evrakı veya keşif dosyası mı var? AcilJet Adliye Kuryesi, evrakınızı masanızdan alır, trafiği aşarak Kartal Adliyesi kalemine bizzat teslim eder ve barkodlu alındı belgesini tarafınıza bildirir.",
          "Öne çıkan hizmetler: Anadolu Adalet Sarayı Hukuk & Dosya Kuryesi; Kartal Oto Sanayi Yedek Parça Dağıtımı; Sahil Kordonu & Rezidans Hızlı Teslimatı; Panelvan & Doblo ile Ofis Taşıma ve Koli Sevkiyatı."
        ],
        "quickStat": "Anadolu Adalet Sarayı Hukuk & Dosya Kuryesi"
      },
      {
        "name": "Maltepe",
        "slug": "maltepe-kurye",
        "headline": "Maltepe Kurye | Küçükyalı Ofis Park, E-5 Ticaret & Dragos",
        "excerpt": "Maltepe bölgesinde maltepe; Küçükyalı Teknoloji ve Ofis Parkları, Altayçeşme sağlık merkezleri, Dragos sahil villaları ve E-5 boyunca sıralanan kurumsal genel müdürlüklerle güçlü bir lojistik aks üzerindedir. E-5 ve sahil trafiğinin kilitlendiği.",
        "article": [
          "Maltepe; Küçükyalı Teknoloji ve Ofis Parkları, Altayçeşme sağlık merkezleri, Dragos sahil villaları ve E-5 boyunca sıralanan kurumsal genel müdürlüklerle güçlü bir lojistik aks üzerindedir. E-5 ve sahil trafiğinin kilitlendiği saatlerde moto kurye hayati rol oynar.",
          "Örneğin; Küçükyalı Ofis Park'taki telekomünikasyon şirketinizden Levent'teki iş ortağınıza acil teknik şartname veya prototip donanım mı göndereceksiniz? AcilJet Kurye, E-5 trafiğine takılmadan hızlı şerit kontrolü ve deneyimli personeliyle donanımı güvenle taşır ve alıcısına ulaştırır.",
          "Öne çıkan hizmetler: Küçükyalı Ofis Park Kurumsal Kurye; Dragos & Sahil VIP Özel Paket Servisi; Medikal ve Ortopedi Ürünleri Hızlı Dağıtımı; 7/24 Kesintisiz Şehir İçi Express Teslimat."
        ],
        "quickStat": "Küçükyalı Ofis Park Kurumsal Kurye"
      },
      {
        "name": "Pendik",
        "slug": "pendik-kurye",
        "headline": "Pendik Kurye | Sabiha Gökçen Havalimanı, Ro-Ro Limanı & Sanayi",
        "excerpt": "Pendik bölgesinde pendik; Sabiha Gökçen Uluslararası Havalimanı, Pendik Uluslararası Ro-Ro Liman Terminali, Kurtköy Teknopark ve tersane yan sanayisi ile uluslararası ticaret ve lojistiğin merkez üssüdür. Havalimanı kargo terminalleri ile şehir.",
        "article": [
          "Pendik; Sabiha Gökçen Uluslararası Havalimanı, Pendik Uluslararası Ro-Ro Liman Terminali, Kurtköy Teknopark ve tersane yan sanayisi ile uluslararası ticaret ve lojistiğin merkez üssüdür. Havalimanı kargo terminalleri ile şehir merkezi arasındaki evrak akışı çok yoğundur.",
          "Örneğin; Sabiha Gökçen Havalimanı kargo gümrüğüne inen acil bir uçak yedek parçasını veya ihracat konşimentosunu Gebze OSB'deki fabrikanıza 1 saat içinde yetiştirmeniz mi gerekiyor? AcilJet Pendik Kuryesi, kargo terminalinden paketi teslim alarak Kuzey Marmara veya E-5 üzerinden doğrudan fabrikanın montaj hattına ulaştırır.",
          "Öne çıkan hizmetler: Sabiha Gökçen Kargo & Havalimanı VIP Kurye; Pendik Ro-Ro Limanı Gümrük & Manifesto Evrakı; Kurtköy Teknopark Bilişim & Proje Kuryesi; Uçak Kargo & Otobüs Kargo Şehirlerarası Entegrasyon."
        ],
        "quickStat": "Sabiha Gökçen Kargo & Havalimanı VIP Kurye"
      },
      {
        "name": "Sancaktepe",
        "slug": "sancaktepe-kurye",
        "headline": "Sancaktepe Kurye | Samandıra, Sarıgazi & Depolama Merkezleri",
        "excerpt": "Sancaktepe bölgesinde sancaktepe; Samandıra ve Sarıgazi aksında yer alan dev lojistik antrepolar, otomotiv yan sanayi depoları, ilaç dağıtım merkezleri ve yeni şehir hastanesi projesiyle hızla gelişen bir lojistik merkezdir. Depolar arası stok.",
        "article": [
          "Sancaktepe; Samandıra ve Sarıgazi aksında yer alan dev lojistik antrepolar, otomotiv yan sanayi depoları, ilaç dağıtım merkezleri ve yeni şehir hastanesi projesiyle hızla gelişen bir lojistik merkezdir. Depolar arası stok transferlerinde hız gereklidir.",
          "Örneğin; Samandıra'daki ana deponuzdan Beşiktaş'taki bir perakende mağazasına müşterinin beklediği özel seri bir ürünü veya mağaza arası acil stok takviyesini mi yapmanız gerekiyor? AcilJet Araçlı (Panelvan/Doblo) veya Moto Kurye ekibimiz depodan ürünü barkod kontrolüyle teslim alır ve mağazaya doğrudan sevk eder.",
          "Öne çıkan hizmetler: Samandıra & Sarıgazi Depo Kuryesi; Otomotiv Yan Sanayi Acil Yedek Parça Dağıtımı; İlaç & Sağlık Ürünleri Depo Çıkış Kuryesi; Panelvan & Doblo Hacimli Yük Taşıma."
        ],
        "quickStat": "Samandıra & Sarıgazi Depo Kuryesi"
      },
      {
        "name": "Sultanbeyli",
        "slug": "sultanbeyli-kurye",
        "headline": "Sultanbeyli Kurye | TEM Bağlantısı, Yan Sanayi & Ticaret",
        "excerpt": "Sultanbeyli bölgesinde sultanbeyli; TEM otoyolunun kenarında kurulu stratejik konumu, metal ve ahşap işleme atölyeleri, yapı market tedarikçileri ve yerel ticaret merkezleriyle sanayi koridorunun kilit bir halkasıdır. TEM gişelerine yakınlık hızlı.",
        "article": [
          "Sultanbeyli; TEM otoyolunun kenarında kurulu stratejik konumu, metal ve ahşap işleme atölyeleri, yapı market tedarikçileri ve yerel ticaret merkezleriyle sanayi koridorunun kilit bir halkasıdır. TEM gişelerine yakınlık hızlı çıkış sağlar.",
          "Örneğin; Sultanbeyli'deki mobilya/metal aksesuar atölyenizden Başakşehir'deki bir şantiyeye montaj ustalarının beklediği acil bağlantı elemanları veya özel aparatlar mı gidecek? AcilJet Moto Kurye veya hafif ticari aracımızla siparişi anında alıyor, TEM üzerinden direkt şantiyeye ulaştırarak montajın durmasını önlüyoruz.",
          "Öne çıkan hizmetler: TEM Koridoru Hızlı Moto Kurye; Metal & Ahşap İmalat Atölyeleri Parça Kuryesi; Şantiye & Proje Acil Malzeme Taşımacılığı; Uygun Fiyatlı Şehir İçi Normal & Express Kurye."
        ],
        "quickStat": "TEM Koridoru Hızlı Moto Kurye"
      },
      {
        "name": "Şile",
        "slug": "sile-kurye",
        "headline": "Şile Kurye | Sahil Şeridi, Ağva, Butik Oteller & Kampüsler",
        "excerpt": "Şile bölgesinde şile ve Ağva; Karadeniz sahil şeridi, butik otelleri, Işık Üniversitesi kampüsü, yazlık villaları ve doğal ürün üreticileriyle kentin merkezine en uzak ilçelerindendir. Uzun virajlı otoyol mesafeleri profesyonel sürücü tecrübesi.",
        "article": [
          "Şile ve Ağva; Karadeniz sahil şeridi, butik otelleri, Işık Üniversitesi kampüsü, yazlık villaları ve doğal ürün üreticileriyle kentin merkezine en uzak ilçelerindendir. Uzun virajlı otoyol mesafeleri profesyonel sürücü tecrübesi ister.",
          "Örneğin; Şile veya Ağva'daki otelinizde konaklayan önemli bir misafiriniz kimlik, pasaport veya özel ilacını Kadıköy/Beşiktaş'taki evinde mi unuttu? Ya da üniversite kampüsünden acil bir akademik evrak mı gönderilecek? Standart kargoların günlerce uğramadığı durumlarda AcilJet Özel Kurye kapıdan kapıya doğrudan ekspres transfer sağlar.",
          "Öne çıkan hizmetler: Şile & Ağva Otelleri Acil Misafir Kuryesi; Işık Üniversitesi Akademik Evrak Dağıtımı; Yazlık Konutlar İçin Özel İlaç ve Paket Kuryesi; Şehirlerarası Nitelikte Şile-İstanbul VIP Teslimat."
        ],
        "quickStat": "Şile & Ağva Otelleri Acil Misafir Kuryesi"
      },
      {
        "name": "Tuzla",
        "slug": "tuzla-kurye",
        "headline": "Tuzla Kurye | Tersaneler Bölgesi, Deri OSB, Kimyacılar & Birlik",
        "excerpt": "Tuzla bölgesinde tuzla; Türkiye'nin gemi inşa ve tersaneler merkezi, İstanbul Deri Organize Sanayi Bölgesi, Kimyacılar OSB, Birlik OSB, Serbest Bölge ve İTOSB ile ağır sanayi ve ihracatın başkentidir. Gemi jeneratör parçalarından kimyasal test.",
        "article": [
          "Tuzla; Türkiye'nin gemi inşa ve tersaneler merkezi, İstanbul Deri Organize Sanayi Bölgesi, Kimyacılar OSB, Birlik OSB, Serbest Bölge ve İTOSB ile ağır sanayi ve ihracatın başkentidir. Gemi jeneratör parçalarından kimyasal test numunelerine kadar her sevkiyat dakiktir.",
          "Örneğin; Tuzla Tersaneler Bölgesi'nde havuzda bakımda olan yabancı bayraklı bir geminin denize inmesi için acilen Karaköy'den veya havalimanından gelmesi gereken özel bir gümrüklü vana, sertifika veya elektronik kontrol kartı mı var? Geminin rıhtımda fazladan beklemesi devasa maliyet demektir. AcilJet Kurye, parçayı anında teslim alıp tersane kapısından içeriye gemi yetkilisine teslim eder.",
          "Öne çıkan hizmetler: Tersaneler Bölgesi Acil Gemi Parçası Kuryesi; Deri OSB, Kimyacılar & Birlik OSB Sanayi Kuryesi; Tuzla Serbest Bölge Gümrük Evrak Servisi; Panelvan / Kamyonet Ağır Sanayi Sevkiyatı."
        ],
        "quickStat": "Tersaneler Bölgesi Acil Gemi Parçası Kuryesi"
      },
      {
        "name": "Ümraniye",
        "slug": "umraniye-kurye",
        "headline": "Ümraniye Kurye | Dudullu OSB, İMES, KADOSAN & Finans Hattı",
        "excerpt": "Ümraniye bölgesinde ümraniye; Dudullu Organize Sanayi Bölgesi, İMES Sanayi Sitesi, KADOSAN Oto Sanayi, DES Sanayi Sitesi, Modoko Mobilyacılar Sitesi ve plazalar aksıyla devasa bir sanayi ve ticaret devidir. Yüzlerce fabrika ve ofis arasında her.",
        "article": [
          "Ümraniye; Dudullu Organize Sanayi Bölgesi, İMES Sanayi Sitesi, KADOSAN Oto Sanayi, DES Sanayi Sitesi, Modoko Mobilyacılar Sitesi ve plazalar aksıyla devasa bir sanayi ve ticaret devidir. Yüzlerce fabrika ve ofis arasında her dakika evrak ve parça transferi akar.",
          "Örneğin; İMES'teki kalıpçı atölyenizden Dudullu OSB'deki otomotiv yan sanayi fabrikasına saat 14:00 mesaisine yetişmesi gereken kritik bir aparat veya Modoko'daki mobilya mağazanızdan mimarlık ofisine kumaş numuneleri mi gidecek? AcilJet Kurye'nin bölgede hazır bekleyen yaygın moto ve araçlı kuryeleri sayesinde ürünleriniz dakikalar içinde transfer edilir.",
          "Öne çıkan hizmetler: İMES, KADOSAN & Dudullu OSB Ağır Sanayi Kuryesi; MODOKO Mobilya & Numune Hızlı Teslimatı; Plazalar & Finans Kuruluşları Kurumsal Evrak Dağıtımı; Doblo / Panelvan ile Atölye ve Fabrika Taşımacılığı."
        ],
        "quickStat": "İMES, KADOSAN & Dudullu OSB Ağır Sanayi Kuryesi"
      },
      {
        "name": "Üsküdar",
        "slug": "uskudar-kurye",
        "headline": "Üsküdar Kurye | Altunizade Sağlık & Ofis Aksı, Beylerbeyi & Çamlıca",
        "excerpt": "Üsküdar bölgesinde üsküdar; Altunizade iş merkezleri, özel hastaneler ve üniversiteler, Çamlıca iş kuleleri, Beylerbeyi ve Çengelköy Boğaz sahil hattı ile hem tarihi dokuyu hem kurumsal hayatı bir arada yaşar. 15 Temmuz Şehitler Köprüsü ve Avrasya.",
        "article": [
          "Üsküdar; Altunizade iş merkezleri, özel hastaneler ve üniversiteler, Çamlıca iş kuleleri, Beylerbeyi ve Çengelköy Boğaz sahil hattı ile hem tarihi dokuyu hem kurumsal hayatı bir arada yaşar. 15 Temmuz Şehitler Köprüsü ve Avrasya Tüneli bağlantı noktasıdır.",
          "Örneğin; Altunizade'deki özel hastaneden çıkan bir patoloji sonucunun acilen Maslak'taki uzman hekime gösterilmesi mi gerekiyor ya da Çengelköy'deki restoranınızdan Avrupa Yakası'na özel bir gurme siparişi mi ulaştıracaksınız? AcilJet VIP Moto Kurye köprü trafiğine girmeden en uygun bağlantıyla paketi alıp doğrudan doktora veya alıcıya teslim eder.",
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
          "Örneğin; GOSB'daki otomotiv fabrikasında montaj hattının durmaması için Maslak veya İkitelli'deki ana tedarikçiden acilen gelmesi gereken özel bir cıvata kiti veya teknik çizim dosyası mı var? İstanbul-Gebze gişeler trafiğini dert etmeyin. AcilJet Gebze Ekspres Kuryesi, İstanbul'dan aldığı paketi Kuzey Marmara veya E-5 üzerinden 45-60 dakika içinde fabrikanızın mal kabul birimine teslim eder.",
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
          "Örneğin; İstanbul'daki ofisinizden Ankara'daki bakanlık ihalesine yarın sabah 09:00'da teslim edilmesi gereken ihale dosyasını veya İzmir'deki fabrikanın acil beklediği elektronik kartı aynı gün içinde mi iletmek istiyorsunuz? AcilJet Şehirlerarası Kurye ekibimiz paketi adresinizden alır; THY Uçak Kargo veya Şehirlerarası Otobüs terminallerine bizzat teslim eder, varış şehrinde karşılanıp kapıya kadar ulaştırılmasını koordine eder.",
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
