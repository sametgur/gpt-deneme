import type { Locale } from "./index"

type TranslationKey =
  | "home"
  | "about"
  | "menu"
  | "gallery"
  | "contact"
  | "reservation"
  | "phoneNumber"
  | "heroTitle"
  | "heroSubtitle"
  | "exploreMenu"
  | "makeReservation"
  | "explore"
  | "featuredDishes"
  | "featuredDishesSubtitle"
  | "inTheHeartOfAkyaka"
  | "inTheHeartOfAkyakaText1"
  | "inTheHeartOfAkyakaText2"
  | "exploreAkyaka"
  | "ourMenu"
  | "ourMenuSubtitle"
  | "viewFullMenu"
  | "visitUs"
  | "visitUsSubtitle"
  | "address"
  | "workingHours"
  | "workingHoursWeekdays"
  | "workingHoursWeekends"
  | "email"
  | "guestReviews"
  | "reservationTitle"
  | "reservationSubtitle"
  | "fullName"
  | "phone"
  | "date"
  | "time"
  | "numberOfGuests"
  | "specialRequests"
  | "submit"
  | "quickLinks"
  | "workingHoursTitle"
  | "reservationRecommended"
  | "copyright"
  | "privacyPolicy"
  | "termsOfService"
  | "viewQrMenu"
  | "qrMenuTitle"
  | "qrMenuSubtitle"
  | "downloadQrCode"
  | "copyMenuLink"
  | "copied"
  | "menuCategories"
  | "menuCategoriesSubtitle"
  | "viewDetails"
  | "chefRecommendation"
  | "allCategories"
  | "breakfast"
  | "coldAppetizers"
  | "hotAppetizers"
  | "mainCourses"
  | "drinks"
  | "salads"
  | "soups"
  | "pasta"
  | "pizza"
  | "desserts"
  | "seafood"
  | "specialMenus"
  | "Kahvaltı"
  | "Soğuk Başlangıçlar"
  | "Sıcak Başlangıçlar"
  | "Ana Yemekler"
  | "İçecekler"
  | "Salatalar"
  | "Çorbalar"
  | "Makarnalar"
  | "Pizzalar"
  | "Tatlılar"
  | "Deniz Ürünleri"
  | "Özel Menüler"
  | "blog"
  | "blogTitle"
  | "blogCategories"
  | "blogRelatedPosts"
  | "blogShare"
  | "blogComments"
  // About sayfası için çeviri anahtarları
  | "about.title"
  | "about.subtitle"
  | "about.tabs.story"
  | "about.tabs.team"
  | "about.tabs.values"
  | "about.story.title"
  | "about.story.p1"
  | "about.story.p2"
  | "about.mission.title"
  | "about.mission.description"
  | "about.location.title"
  | "about.location.description"
  | "about.cuisine.title"
  | "about.cuisine.description"
  | "about.team.title"
  | "about.team.join.title"
  | "about.team.join.description"
  | "about.team.join.cta"
  | "about.values.title"
  | "about.values.sustainable.title"
  | "about.values.sustainable.description"
  | "about.values.community.title"
  | "about.values.community.description"
  | "about.values.quality.title"
  | "about.values.quality.description"
  | "about.values.experience.title"
  | "about.values.experience.description"
  | "about.commitment.title"
  | "about.commitment.p1"
  | "about.commitment.p2"
  | "about.testimonials.title"
  | "about.testimonials.quote1"
  | "about.testimonials.quote2"
  | "about.testimonials.quote3"
  | "about.visit.title"
  | "about.visit.description"
  | "about.visit.cta"
  | "raki" // Yeni
  | "wines" // Yeni

export const translations: Record<Locale, Record<TranslationKey, string>> = {
  tr: {
    // Mevcut çeviriler korunacak
    home: "Ana Sayfa",
    about: "Hakkımızda",
    menu: "Menü",
    gallery: "Galeri",
    contact: "İletişim",
    reservation: "Rezervasyon",
    phoneNumber: "+90 252 123 45 67",
    heroTitle: "CENNET RESTAURANT",
    heroSubtitle: "Akyaka'nın kalbinde, suyun üzerinde eşsiz bir deneyim",
    exploreMenu: "Menüyü Keşfet",
    makeReservation: "Rezervasyon Yap",
    explore: "Keşfet",
    featuredDishes: "Öne Çıkan Lezzetlerimiz",
    featuredDishesSubtitle: "Akyaka'nın eşsiz doğasından ilham alan, şeflerimizin özenle hazırladığı özel tatlar",
    inTheHeartOfAkyaka: "Akyaka'nın Kalbinde",
    inTheHeartOfAkyakaText1:
      "Akyaka, Muğla'nın eşsiz doğal güzelliklerinden biri olan Azmak Nehri'nin denizle buluştuğu noktada yer alan cennet köşemizdir. Cennet Restaurant olarak, bu muhteşem doğanın tam kalbinde, suyun üzerinde konumlanmış restoranımızda sizlere unutulmaz bir deneyim sunuyoruz.",
    inTheHeartOfAkyakaText2:
      "Akyaka'nın geleneksel mimarisini yansıtan restoranımızda, bölgenin taze deniz ürünleri ve yerel lezzetlerini modern bir sunumla buluşturuyoruz. Azmak Nehri'nin berrak sularının üzerinde, doğayla iç içe bir yemek deneyimi için sizi Cennet Restaurant'a bekliyoruz.",
    exploreAkyaka: "Akyaka'yı Keşfet",
    ourMenu: "Menümüz",
    ourMenuSubtitle: "Akyaka'nın taze malzemeleriyle hazırlanan özel lezzetlerimiz",
    viewFullMenu: "Tüm Menüyü Gör",
    visitUs: "Bizi Ziyaret Edin",
    visitUsSubtitle:
      "Akyaka'nın kalbinde, Azmak Nehri'nin denizle buluştuğu noktada yer alan Cennet Restaurant, eşsiz manzarası ve lezzetleriyle sizleri ağırlamaktan mutluluk duyar.",
    address: "Adres",
    workingHours: "Çalışma Saatleri",
    workingHoursWeekdays: "Pazartesi - Cuma: 09:00 - 23:00",
    workingHoursWeekends: "Cumartesi - Pazar: 10:00 - 00:00",
    email: "E-posta",
    guestReviews: "Misafir Yorumları",
    reservationTitle: "Rezervasyon",
    reservationSubtitle: "Özel anlarınız için masanızı şimdiden ayırtın",
    fullName: "İsim Soyisim",
    phone: "Telefon",
    date: "Tarih",
    time: "Saat",
    numberOfGuests: "Kişi Sayısı",
    specialRequests: "Özel İstekler",
    submit: "Gönder",
    quickLinks: "Hızlı Bağlantılar",
    workingHoursTitle: "Çalışma Saatleri",
    reservationRecommended: "Rezervasyon tavsiye edilir",
    copyright: "Tüm hakları saklıdır.",
    privacyPolicy: "Gizlilik Politikası",
    termsOfService: "Kullanım Koşulları",
    viewQrMenu: "Mobil Menümüz",
    qrMenuTitle: "Menümüzü Telefonunuzda Görüntüleyin",
    qrMenuSubtitle: "QR kodu tarayarak menümüze hızlıca erişebilirsiniz",
    downloadQrCode: "QR Kodu İndir",
    copyMenuLink: "Menü Linkini Kopyala",
    copied: "Kopyalandı!",
    menuCategories: "Menü Kategorileri",
    menuCategoriesSubtitle: "Lezzetli yemeklerimizi kategorilere göre keşfedin",
    viewDetails: "Detayları Gör",
    chefRecommendation: "Şef Önerisi",
    allCategories: "Tüm Kategoriler",
    breakfast: "Kahvaltı",
    coldAppetizers: "Soğuk Başlangıçlar",
    hotAppetizers: "Sıcak Başlangıçlar",
    mainCourses: "Ana Yemekler",
    drinks: "İçecekler",
    salads: "Salatalar",
    soups: "Çorbalar",
    pasta: "Makarnalar",
    pizza: "Pizzalar",
    desserts: "Tatlılar",
    seafood: "Deniz Ürünleri",
    specialMenus: "Özel Menüler",
    Kahvaltı: "Kahvaltı",
    "Soğuk Başlangıçlar": "Soğuk Başlangıçlar",
    "Sıcak Başlangıçlar": "Sıcak Başlangıçlar",
    "Ana Yemekler": "Ana Yemekler",
    İçecekler: "İçecekler",
    Salatalar: "Salatalar",
    Çorbalar: "Çorbalar",
    Makarnalar: "Makarnalar",
    Pizzalar: "Pizzalar",
    Tatlılar: "Tatlılar",
    "Deniz Ürünleri": "Deniz Ürünleri",
    "Özel Menüler": "Özel Menüler",
    blog: "Blog",
    blogTitle: "Blog",
    blogCategories: "Kategoriler",
    blogRelatedPosts: "İlgili Yazılar",
    blogShare: "Bu yazıyı paylaş",
    blogComments: "Yorumlar",

    // Hakkımızda sayfası için çeviriler
    "about.title": "Hakkımızda",
    "about.subtitle": "Cennet Restaurant'ın Hikayesi",
    "about.tabs.story": "Hikayemiz",
    "about.tabs.team": "Ekibimiz",
    "about.tabs.values": "Değerlerimiz",
    "about.story.title": "Hikayemiz",
    "about.story.p1":
      "Cennet Restaurant, 1983 yılında Akyaka'nın eşsiz doğal güzellikleri içerisinde, Azmak Nehri'nin kıyısında kurulmuştur. Kurucumuz Ali Cennet, deniz ürünlerine olan tutkusu ve misafirperverliği ile kısa sürede bölgenin en sevilen restoranlarından biri haline gelmiştir.",
    "about.story.p2":
      "Yıllar içinde büyüyen ve gelişen restoranımız, bugün ikinci ve üçüncü nesil aile üyeleri tarafından aynı özen ve tutkuyla işletilmeye devam etmektedir.",
    "about.mission.title": "Misyonumuz",
    "about.mission.description":
      "Misafirlerimize sadece bir yemek değil, tüm duyularına hitap eden eşsiz bir deneyim sunmak. Taze ve kaliteli malzemelerle hazırlanan lezzetli yemekler, profesyonel ve samimi hizmet anlayışı ve eşsiz manzara eşliğinde unutulmaz anlar yaşatmak.",
    "about.location.title": "Konumumuz",
    "about.location.description":
      "Akyaka'nın kalbinde, Azmak Nehri'nin denizle buluştuğu noktada yer alan restoranımız, eşsiz manzarası ve doğayla iç içe atmosferiyle misafirlerimize unutulmaz bir deneyim sunuyor.",
    "about.cuisine.title": "Mutfağımız",
    "about.cuisine.description":
      "Ege ve Akdeniz mutfağının en seçkin lezzetlerini, taze deniz ürünleri ve yerel malzemelerle harmanlayarak sunuyoruz. Şeflerimiz, geleneksel tarifleri modern dokunuşlarla yeniden yorumluyor.",
    "about.team.title": "Profesyonel Ekibimiz",
    "about.team.join.title": "Ekibimize Katılın",
    "about.team.join.description":
      "Cennet Restaurant ailesi olarak, tutkulu ve yetenekli ekip arkadaşları arıyoruz. Bizimle çalışmak isterseniz, özgeçmişinizi gönderebilirsiniz.",
    "about.team.join.cta": "Bize Ulaşın",
    "about.values.title": "Değerlerimiz",
    "about.values.sustainable.title": "Sürdürülebilirlik",
    "about.values.sustainable.description":
      "Doğaya saygılı uygulamalarımız ve yerel üreticilerle işbirliğimiz sayesinde çevresel etkimizi en aza indiriyoruz.",
    "about.values.community.title": "Toplum",
    "about.values.community.description":
      "Yerel toplumu destekliyor, bölge ekonomisine katkıda bulunuyor ve kültürel değerleri yaşatıyoruz.",
    "about.values.quality.title": "Kalite",
    "about.values.quality.description":
      "En taze ve kaliteli malzemeleri kullanarak, her tabağı bir sanat eseri gibi hazırlıyoruz.",
    "about.values.experience.title": "Deneyim",
    "about.values.experience.description":
      "Misafirlerimize sadece bir yemek değil, tüm duyularına hitap eden unutulmaz bir deneyim sunuyoruz.",
    "about.commitment.title": "Taahhüdümüz",
    "about.commitment.p1":
      "Cennet Restaurant olarak, misafirlerimize en kaliteli hizmeti sunmak için sürekli kendimizi geliştiriyoruz.",
    "about.commitment.p2":
      "Sürdürülebilir uygulamalarımız, yerel üreticilerle işbirliğimiz ve çevreye duyarlı yaklaşımımızla, gelecek nesillere daha iyi bir dünya bırakmayı hedefliyoruz.",
    "about.testimonials.title": "Misafir Yorumları",
    "about.testimonials.quote1":
      "Akyaka'da yediğim en lezzetli yemekler ve en güzel manzara. Kesinlikle tekrar geleceğim!",
    "about.testimonials.quote2":
      "Incredible food and service. The seafood was the freshest I've ever had. A must-visit when in Akyaka!",
    "about.testimonials.quote3":
      "Ein wunderbares Restaurant mit ausgezeichnetem Essen und einem atemberaubenden Blick. Sehr zu empfehlen!",
    "about.visit.title": "Bizi Ziyaret Edin",
    "about.visit.description":
      "Akyaka'nın kalbinde, Azmak Nehri'nin denizle buluştuğu noktada yer alan Cennet Restaurant, eşsiz manzarası ve lezzetleriyle sizleri bekliyor.",
    "about.visit.cta": "İletişime Geçin",
    raki: "Rakı",
    wines: "Şaraplar",
  },
  en: {
    // Mevcut çeviriler korunacak
    home: "Home",
    about: "About",
    menu: "Menu",
    gallery: "Gallery",
    contact: "Contact",
    reservation: "Reservation",
    phoneNumber: "+90 252 123 45 67",
    heroTitle: "CENNET RESTAURANT",
    heroSubtitle: "A unique experience over the water in the heart of Akyaka",
    exploreMenu: "Explore Menu",
    makeReservation: "Make Reservation",
    explore: "Explore",
    featuredDishes: "Featured Dishes",
    featuredDishesSubtitle: "Special flavors carefully prepared by our chefs, inspired by the unique nature of Akyaka",
    inTheHeartOfAkyaka: "In the Heart of Akyaka",
    inTheHeartOfAkyakaText1:
      "Akyaka is our paradise corner located at the point where the Azmak River, one of the unique natural beauties of Muğla, meets the sea. As Cennet Restaurant, we offer you an unforgettable experience in our restaurant located right in the heart of this magnificent nature, over the water.",
    inTheHeartOfAkyakaText2:
      "In our restaurant reflecting the traditional architecture of Akyaka, we combine the fresh seafood and local flavors of the region with a modern presentation. We invite you to Cennet Restaurant for a dining experience intertwined with nature, over the clear waters of the Azmak River.",
    exploreAkyaka: "Explore Akyaka",
    ourMenu: "Our Menu",
    ourMenuSubtitle: "Special flavors prepared with fresh ingredients from Akyaka",
    viewFullMenu: "View Full Menu",
    visitUs: "Visit Us",
    visitUsSubtitle:
      "Located in the heart of Akyaka, at the point where the Azmak River meets the sea, Cennet Restaurant is pleased to welcome you with its unique view and flavors.",
    address: "Address",
    workingHours: "Working Hours",
    workingHoursWeekdays: "Monday - Friday: 09:00 - 23:00",
    workingHoursWeekends: "Saturday - Sunday: 10:00 - 00:00",
    email: "Email",
    guestReviews: "Guest Reviews",
    reservationTitle: "Reservation",
    reservationSubtitle: "Reserve your table now for your special moments",
    fullName: "Full Name",
    phone: "Phone",
    date: "Date",
    time: "Time",
    numberOfGuests: "Number of Guests",
    specialRequests: "Special Requests",
    submit: "Submit",
    quickLinks: "Quick Links",
    workingHoursTitle: "Working Hours",
    reservationRecommended: "Reservation recommended",
    copyright: "All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    viewQrMenu: "Mobile Menu",
    qrMenuTitle: "View Our Menu on Your Phone",
    qrMenuSubtitle: "Scan the QR code to quickly access our menu",
    downloadQrCode: "Download QR Code",
    copyMenuLink: "Copy Menu Link",
    copied: "Copied!",
    menuCategories: "Menu Categories",
    menuCategoriesSubtitle: "Discover our delicious dishes by categories",
    viewDetails: "View Details",
    chefRecommendation: "Chef's Recommendation",
    allCategories: "All Categories",
    breakfast: "Breakfast",
    coldAppetizers: "Cold Appetizers",
    hotAppetizers: "Hot Appetizers",
    mainCourses: "Main Courses",
    drinks: "Drinks",
    salads: "Salads",
    soups: "Soups",
    pasta: "Pasta",
    pizza: "Pizza",
    desserts: "Desserts",
    seafood: "Seafood",
    specialMenus: "Special Menus",
    Kahvaltı: "Breakfast",
    "Soğuk Başlangıçlar": "Cold Appetizers",
    "Sıcak Başlangıçlar": "Hot Appetizers",
    "Ana Yemekler": "Main Courses",
    İçecekler: "Drinks",
    Salatalar: "Salads",
    Çorbalar: "Soups",
    Makarnalar: "Pasta",
    Pizzalar: "Pizza",
    Tatlılar: "Desserts",
    "Deniz Ürünleri": "Seafood",
    "Özel Menüler": "Special Menus",
    blog: "Blog",
    blogTitle: "Blog",
    blogCategories: "Categories",
    blogRelatedPosts: "Related Posts",
    blogShare: "Share this post",
    blogComments: "Comments",

    // About page translations
    "about.title": "About Us",
    "about.subtitle": "The Story of Cennet Restaurant",
    "about.tabs.story": "Our Story",
    "about.tabs.team": "Our Team",
    "about.tabs.values": "Our Values",
    "about.story.title": "Our Story",
    "about.story.p1":
      "Cennet Restaurant was established in 1995 on the banks of the Azmak River, amidst the unique natural beauty of Akyaka. Our founder, Ali Cennet, quickly made it one of the most beloved restaurants in the region with his passion for seafood and hospitality.",
    "about.story.p2":
      "Our restaurant, which has grown and developed over the years, continues to be operated with the same care and passion by second and third generation family members today.",
    "about.mission.title": "Our Mission",
    "about.mission.description":
      "To provide our guests not just a meal, but a unique experience that appeals to all their senses. To create unforgettable moments with delicious food prepared with fresh and quality ingredients, professional and friendly service, and a unique view.",
    "about.location.title": "Our Location",
    "about.location.description":
      "Located in the heart of Akyaka, at the point where the Azmak River meets the sea, our restaurant offers an unforgettable experience to our guests with its unique view and atmosphere intertwined with nature.",
    "about.cuisine.title": "Our Cuisine",
    "about.cuisine.description":
      "We present the most distinguished flavors of Aegean and Mediterranean cuisine, blended with fresh seafood and local ingredients. Our chefs reinterpret traditional recipes with modern touches.",
    "about.team.title": "Our Professional Team",
    "about.team.join.title": "Join Our Team",
    "about.team.join.description":
      "As the Cennet Restaurant family, we are looking for passionate and talented team members. If you would like to work with us, you can send your resume.",
    "about.team.join.cta": "Contact Us",
    "about.values.title": "Our Values",
    "about.values.sustainable.title": "Sustainability",
    "about.values.sustainable.description":
      "We minimize our environmental impact through our environmentally friendly practices and cooperation with local producers.",
    "about.values.community.title": "Community",
    "about.values.community.description":
      "We support the local community, contribute to the regional economy, and keep cultural values alive.",
    "about.values.quality.title": "Quality",
    "about.values.quality.description":
      "Using the freshest and highest quality ingredients, we prepare each dish like a work of art.",
    "about.values.experience.title": "Experience",
    "about.values.experience.description":
      "We offer our guests not just a meal, but an unforgettable experience that appeals to all their senses.",
    "about.commitment.title": "Our Commitment",
    "about.commitment.p1":
      "As Cennet Restaurant, we continuously improve ourselves to provide the highest quality service to our guests.",
    "about.commitment.p2":
      "With our sustainable practices, cooperation with local producers, and environmentally conscious approach, we aim to leave a better world for future generations.",
    "about.testimonials.title": "Guest Reviews",
    "about.testimonials.quote1":
      "The most delicious food and the most beautiful view I've had in Akyaka. I will definitely come back!",
    "about.testimonials.quote2":
      "Incredible food and service. The seafood was the freshest I've ever had. A must-visit when in Akyaka!",
    "about.testimonials.quote3":
      "Ein wunderbares Restaurant mit ausgezeichnetem Essen und einem atemberaubenden Blick. Sehr zu empfehlen!",
    "about.visit.title": "Visit Us",
    "about.visit.description":
      "Located in the heart of Akyaka, at the point where the Azmak River meets the sea, Cennet Restaurant awaits you with its unique view and flavors.",
    "about.visit.cta": "Contact Us",
    raki: "Raki",
    wines: "Wines",
  },
  de: {
    // Mevcut çeviriler korunacak
    home: "Startseite",
    about: "Über uns",
    menu: "Speisekarte",
    gallery: "Galerie",
    contact: "Kontakt",
    reservation: "Reservierung",
    phoneNumber: "+90 252 123 45 67",
    heroTitle: "CENNET RESTAURANT",
    heroSubtitle: "Ein einzigartiges Erlebnis über dem Wasser im Herzen von Akyaka",
    exploreMenu: "Speisekarte erkunden",
    makeReservation: "Reservierung vornehmen",
    explore: "Erkunden",
    featuredDishes: "Besondere Gerichte",
    featuredDishesSubtitle:
      "Besondere Aromen, sorgfältig zubereitet von unseren Köchen, inspiriert von der einzigartigen Natur von Akyaka",
    inTheHeartOfAkyaka: "Im Herzen von Akyaka",
    inTheHeartOfAkyakaText1:
      "Akyaka ist unser Paradies an dem Punkt, wo der Azmak-Fluss, eine der einzigartigen Naturschönheiten von Muğla, auf das Meer trifft. Als Cennet Restaurant bieten wir Ihnen ein unvergessliches Erlebnis in unserem Restaurant, das direkt im Herzen dieser herrlichen Natur über dem Wasser liegt.",
    inTheHeartOfAkyakaText2:
      "In unserem Restaurant, das die traditionelle Architektur von Akyaka widerspiegelt, kombinieren wir die frischen Meeresfrüchte und lokalen Aromen der Region mit einer modernen Präsentation. Wir laden Sie ins Cennet Restaurant ein, um ein Esserlebnis zu genießen, das mit der Natur verflochten ist, über den klaren Gewässern des Azmak-Flusses.",
    exploreAkyaka: "Akyaka erkunden",
    ourMenu: "Unsere Speisekarte",
    ourMenuSubtitle: "Besondere Aromen, zubereitet mit frischen Zutaten aus Akyaka",
    viewFullMenu: "Vollständige Speisekarte anzeigen",
    visitUs: "Besuchen Sie uns",
    visitUsSubtitle:
      "Im Herzen von Akyaka, an dem Punkt, wo der Azmak-Fluss auf das Meer trifft, freut sich das Cennet Restaurant, Sie mit seiner einzigartigen Aussicht und seinen Aromen zu begrüßen.",
    address: "Adresse",
    workingHours: "Öffnungszeiten",
    workingHoursWeekdays: "Montag - Freitag: 09:00 - 23:00",
    workingHoursWeekends: "Samstag - Sonntag: 10:00 - 00:00",
    email: "E-Mail",
    guestReviews: "Gästebewertungen",
    reservationTitle: "Reservierung",
    reservationSubtitle: "Reservieren Sie jetzt Ihren Tisch für Ihre besonderen Momente",
    fullName: "Vollständiger Name",
    phone: "Telefon",
    date: "Datum",
    time: "Uhrzeit",
    numberOfGuests: "Anzahl der Gäste",
    specialRequests: "Besondere Wünsche",
    submit: "Absenden",
    quickLinks: "Schnelllinks",
    workingHoursTitle: "Öffnungszeiten",
    reservationRecommended: "Reservierung empfohlen",
    copyright: "Alle Rechte vorbehalten.",
    privacyPolicy: "Datenschutzrichtlinie",
    termsOfService: "Nutzungsbedingungen",
    viewQrMenu: "Mobile Speisekarte",
    qrMenuTitle: "Sehen Sie unsere Speisekarte auf Ihrem Telefon",
    qrMenuSubtitle: "Scannen Sie den QR-Code, um schnell auf unsere Speisekarte zuzugreifen",
    downloadQrCode: "QR-Code herunterladen",
    copyMenuLink: "Menülink kopieren",
    copied: "Kopiert!",
    menuCategories: "Menükategorien",
    menuCategoriesSubtitle: "Entdecken Sie unsere köstlichen Gerichte nach Kategorien",
    viewDetails: "Details anzeigen",
    chefRecommendation: "Empfehlung des Küchenchefs",
    allCategories: "Alle Kategorien",
    breakfast: "Frühstück",
    coldAppetizers: "Kalte Vorspeisen",
    hotAppetizers: "Warme Vorspeisen",
    mainCourses: "Hauptgerichte",
    drinks: "Getränke",
    salads: "Salate",
    soups: "Suppen",
    pasta: "Pasta",
    pizza: "Pizza",
    desserts: "Desserts",
    seafood: "Meeresfrüchte",
    specialMenus: "Spezialmenüs",
    Kahvaltı: "Frühstück",
    "Soğuk Başlangıçlar": "Kalte Vorspeisen",
    "Sıcak Başlangıçlar": "Warme Vorspeisen",
    "Ana Yemekler": "Hauptgerichte",
    İçecekler: "Getränke",
    Salatalar: "Salate",
    Çorbalar: "Suppen",
    Makarnalar: "Pasta",
    Pizzalar: "Pizza",
    Tatlılar: "Desserts",
    "Deniz Ürünleri": "Meeresfrüchte",
    "Özel Menüler": "Spezialmenüs",
    blog: "Blog",
    blogTitle: "Blog",
    blogCategories: "Kategorien",
    blogRelatedPosts: "Ähnliche Beiträge",
    blogShare: "Diesen Beitrag teilen",
    blogComments: "Kommentare",

    // About page translations
    "about.title": "Über Uns",
    "about.subtitle": "Die Geschichte des Cennet Restaurants",
    "about.tabs.story": "Unsere Geschichte",
    "about.tabs.team": "Unser Team",
    "about.tabs.values": "Unsere Werte",
    "about.story.title": "Unsere Geschichte",
    "about.story.p1":
      "Das Cennet Restaurant wurde 1995 am Ufer des Azmak-Flusses inmitten der einzigartigen Naturschönheit von Akyaka gegründet. Unser Gründer, Ali Cennet, machte es mit seiner Leidenschaft für Meeresfrüchte und Gastfreundschaft schnell zu einem der beliebtesten Restaurants der Region.",
    "about.story.p2":
      "Unser Restaurant, das im Laufe der Jahre gewachsen und sich entwickelt hat, wird heute mit der gleichen Sorgfalt und Leidenschaft von Familienmitgliedern der zweiten und dritten Generation weitergeführt.",
    "about.mission.title": "Unsere Mission",
    "about.mission.description":
      "Unseren Gästen nicht nur eine Mahlzeit, sondern ein einzigartiges Erlebnis zu bieten, das alle ihre Sinne anspricht. Unvergessliche Momente zu schaffen mit köstlichem Essen aus frischen und hochwertigen Zutaten, professionellem und freundlichem Service und einer einzigartigen Aussicht.",
    "about.location.title": "Unser Standort",
    "about.location.description":
      "Im Herzen von Akyaka, an dem Punkt, wo der Azmak-Fluss auf das Meer trifft, bietet unser Restaurant unseren Gästen mit seiner einzigartigen Aussicht und der mit der Natur verflochtenen Atmosphäre ein unvergessliches Erlebnis.",
    "about.cuisine.title": "Unsere Küche",
    "about.cuisine.description":
      "Wir präsentieren die erlesensten Aromen der ägäischen und mediterranen Küche, gemischt mit frischen Meeresfrüchten und lokalen Zutaten. Unsere Köche interpretieren traditionelle Rezepte mit modernen Akzenten neu.",
    "about.team.title": "Unser Professionelles Team",
    "about.team.join.title": "Werden Sie Teil Unseres Teams",
    "about.team.join.description":
      "Als Familie des Cennet Restaurants suchen wir nach leidenschaftlichen und talentierten Teammitgliedern. Wenn Sie mit uns arbeiten möchten, können Sie Ihren Lebenslauf senden.",
    "about.team.join.cta": "Kontaktieren Sie Uns",
    "about.values.title": "Unsere Werte",
    "about.values.sustainable.title": "Nachhaltigkeit",
    "about.values.sustainable.description":
      "Wir minimieren unsere Umweltauswirkungen durch umweltfreundliche Praktiken und Zusammenarbeit mit lokalen Produzenten.",
    "about.values.community.title": "Gemeinschaft",
    "about.values.community.description":
      "Wir unterstützen die lokale Gemeinschaft, tragen zur regionalen Wirtschaft bei und halten kulturelle Werte am Leben.",
    "about.values.quality.title": "Qualität",
    "about.values.quality.description":
      "Mit den frischesten und hochwertigsten Zutaten bereiten wir jedes Gericht wie ein Kunstwerk zu.",
    "about.values.experience.title": "Erlebnis",
    "about.values.experience.description":
      "Wir bieten unseren Gästen nicht nur eine Mahlzeit, sondern ein unvergessliches Erlebnis, das alle ihre Sinne anspricht.",
    "about.commitment.title": "Unser Engagement",
    "about.commitment.p1":
      "Als Cennet Restaurant verbessern wir uns kontinuierlich, um unseren Gästen den höchsten Qualitätsservice zu bieten.",
    "about.commitment.p2":
      "Mit unseren nachhaltigen Praktiken, der Zusammenarbeit mit lokalen Produzenten und unserem umweltbewussten Ansatz wollen wir zukünftigen Generationen eine bessere Welt hinterlassen.",
    "about.testimonials.title": "Gästebewertungen",
    "about.testimonials.quote1":
      "Das köstlichste Essen und die schönste Aussicht, die ich in Akyaka hatte. Ich werde definitiv wiederkommen!",
    "about.testimonials.quote2":
      "Incredible food and service. The seafood was the freshest I've ever had. A must-visit when in Akyaka!",
    "about.testimonials.quote3":
      "Ein wunderbares Restaurant mit ausgezeichnetem Essen und einem atemberaubenden Blick. Sehr zu empfehlen!",
    "about.visit.title": "Besuchen Sie Uns",
    "about.visit.description":
      "Im Herzen von Akyaka, an dem Punkt, wo der Azmak-Fluss auf das Meer trifft, erwartet Sie das Cennet Restaurant mit seiner einzigartigen Aussicht und seinen Aromen.",
    "about.visit.cta": "Kontaktieren Sie Uns",
    raki: "Rakı",
    wines: "Weine",
  },
}

// Add the getTranslation function
export function getTranslation(locale: Locale, key: TranslationKey): string {
  if (!translations[locale]) {
    return key
  }
  return translations[locale][key] || key
}
