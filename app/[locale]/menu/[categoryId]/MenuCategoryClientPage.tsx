"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Search } from "lucide-react"
import { type Locale, getPathWithLocale } from "@/lib/i18n"
import { MainHeader } from "@/components/main-header"
import { Footer } from "@/components/footer"

// Menu categories data
const menuCategories = [
  {
    id: 2,
    name: {
      tr: "Kahvaltı",
      en: "Breakfast",
      de: "Frühstück",
    },
    description: {
      tr: "Zengin içerikli geleneksel Türk kahvaltısı ve özel kahvaltı tabakları",
      en: "Traditional Turkish breakfast with rich content and special breakfast plates",
      de: "Traditionelles türkisches Frühstück mit reichhaltigem Inhalt und speziellen Frühstücksteller",
    },
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/82_slide2.jpg-HuQ196HBptu7yEXQo7UoaqYPiohpHc.jpeg",
  },
  {
    id: 3,
    name: {
      tr: "Soğuk Başlangıçlar",
      en: "Cold Starters",
      de: "Kalte Vorspeisen",
    },
    description: {
      tr: "Taze ve lezzetli mezeler, salatalar ve soğuk başlangıçlar",
      en: "Fresh and delicious appetizers, salads and cold starters",
      de: "Frische und leckere Vorspeisen, Salate und kalte Vorspeisen",
    },
    image: "/turkish-cold-meze.png",
  },
  {
    id: 4,
    name: {
      tr: "Sıcak Başlangıçlar",
      en: "Hot Starters",
      de: "Warme Vorspeisen",
    },
    description: {
      tr: "Özenle hazırlanmış sıcak başlangıçlar ve ara sıcaklar",
      en: "Carefully prepared hot starters and appetizers",
      de: "Sorgfältig zubereitete warme Vorspeisen und Appetithäppchen",
    },
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6217_deniz_sicak.jpg-0MumAmT23XzdXMrNQ0d4bcuBTwBAat.jpeg",
  },
  {
    id: 5,
    name: {
      tr: "Ana Yemekler",
      en: "Main Courses",
      de: "Hauptgerichte",
    },
    description: {
      tr: "Geleneksel Türk mutfağından özel tariflerle hazırlanan ana yemekler",
      en: "Main courses prepared with special recipes from traditional Turkish cuisine",
      de: "Hauptgerichte, die mit speziellen Rezepten aus der traditionellen türkischen Küche zubereitet werden",
    },
    image: "/turkish-main-dishes.png",
  },
  {
    id: 6,
    name: {
      tr: "İçecekler",
      en: "Beverages",
      de: "Getränke",
    },
    description: {
      tr: "Sıcak ve soğuk içecekler, özel kokteyllerimiz",
      en: "Hot and cold drinks, our special cocktails",
      de: "Heiße und kalte Getränke, unsere speziellen Cocktails",
    },
    image: "/turkish-drinks-trio.png",
  },
  {
    id: 7,
    name: {
      tr: "Salatalar",
      en: "Salads",
      de: "Salate",
    },
    description: {
      tr: "Taze mevsim sebzeleriyle hazırlanan sağlıklı salatalar",
      en: "Healthy salads prepared with fresh seasonal vegetables",
      de: "Gesunde Salate, zubereitet mit frischem Saisongemüse",
    },
    image: "/turkish-fresh-salads.png",
  },
  {
    id: 8,
    name: {
      tr: "Çorbalar",
      en: "Soups",
      de: "Suppen",
    },
    description: {
      tr: "Geleneksel Türk mutfağından özel tariflerle hazırlanan çorbalar",
      en: "Soups prepared with special recipes from traditional Turkish cuisine",
      de: "Suppen, die mit speziellen Rezepten aus der traditionellen türkischen Küche zubereitet werden",
    },
    image: "/turkish-soups.png",
  },
  {
    id: 9,
    name: {
      tr: "Makarnalar",
      en: "Pasta",
      de: "Pasta",
    },
    description: {
      tr: "El yapımı makarnalar ve özel soslarla hazırlanan makarna çeşitleri",
      en: "Handmade pasta and pasta varieties prepared with special sauces",
      de: "Handgemachte Pasta und Pastasorten, die mit speziellen Saucen zubereitet werden",
    },
    image: "/turkish-pasta-dishes.png",
  },
  {
    id: 10,
    name: {
      tr: "Pizzalar",
      en: "Pizzas",
      de: "Pizzas",
    },
    description: {
      tr: "Taş fırında pişirilen, özel malzemelerle hazırlanan pizza çeşitleri",
      en: "Pizza varieties prepared with special ingredients, baked in a stone oven",
      de: "Pizzasorten, die mit speziellen Zutaten zubereitet und im Steinofen gebacken werden",
    },
    image: "/turkish-style-pizzas.png",
  },
  {
    id: 11,
    name: {
      tr: "Tatlılar",
      en: "Desserts",
      de: "Desserts",
    },
    description: {
      tr: "Geleneksel ve özel tariflerle hazırlanan tatlılar",
      en: "Desserts prepared with traditional and special recipes",
      de: "Desserts, die mit traditionellen und speziellen Rezepten zubereitet werden",
    },
    image: "/turkish-desserts-baklava-kunefe.png",
  },
  {
    id: 12,
    name: {
      tr: "Deniz Ürünleri",
      en: "Seafood",
      de: "Meeresfrüchte",
    },
    description: {
      tr: "Akyaka'nın taze deniz ürünleri, özel soslarla hazırlanmış balık çeşitleri",
      en: "Fresh seafood from Akyaka, fish varieties prepared with special sauces",
      de: "Frische Meeresfrüchte aus Akyaka, Fischsorten, die mit speziellen Saucen zubereitet werden",
    },
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8728_baliklar.jpg-TVWfUlRPXePZPxvJMg61jhNMzhvF0U.jpeg",
  },
  {
    id: 13,
    name: {
      tr: "Özel Menüler",
      en: "Special Menus",
      de: "Spezialmenüs",
    },
    description: {
      tr: "Özel günler ve kutlamalar için hazırlanan menüler",
      en: "Menus prepared for special days and celebrations",
      de: "Menüs für besondere Tage und Feierlichkeiten",
    },
    image: "/turkish-special-menus.png",
  },
]

// Menu items data
const menuItems = {
  2: [
    {
      id: 1,
      name: {
        tr: "Serpme Kahvaltı",
        en: "Turkish Breakfast Spread",
        de: "Türkisches Frühstück",
      },
      description: {
        tr: "Zengin içerikli geleneksel Türk kahvaltısı (2 kişilik)",
        en: "Traditional Turkish breakfast with rich content (for 2 people)",
        de: "Traditionelles türkisches Frühstück mit reichhaltigem Inhalt (für 2 Personen)",
      },
      price: 450,
      image: "/simit-spread.png",
      popular: true,
    },
    {
      id: 2,
      name: {
        tr: "Menemen",
        en: "Menemen",
        de: "Menemen",
      },
      description: {
        tr: "Domates, biber ve yumurta ile hazırlanan geleneksel Türk kahvaltı yemeği",
        en: "Traditional Turkish breakfast dish prepared with tomatoes, peppers and eggs",
        de: "Traditionelles türkisches Frühstücksgericht, zubereitet mit Tomaten, Paprika und Eiern",
      },
      price: 120,
      image: "/hearty-turkish-menemen.png",
      popular: true,
    },
    {
      id: 3,
      name: {
        tr: "Sahanda Yumurta",
        en: "Fried Eggs",
        de: "Spiegeleier",
      },
      description: {
        tr: "Tereyağında kızartılmış yumurta",
        en: "Eggs fried in butter",
        de: "In Butter gebratene Eier",
      },
      price: 90,
      image: "/turkish-fried-eggs.png",
    },
    {
      id: 4,
      name: {
        tr: "Peynirli Omlet",
        en: "Cheese Omelette",
        de: "Käse-Omelett",
      },
      description: {
        tr: "Beyaz peynir ile hazırlanan omlet",
        en: "Omelette prepared with white cheese",
        de: "Omelett, zubereitet mit Weißkäse",
      },
      price: 110,
      image: "/turkish-cheese-omelette.png",
    },
    {
      id: 5,
      name: {
        tr: "Kahvaltı Tabağı",
        en: "Breakfast Plate",
        de: "Frühstücksteller",
      },
      description: {
        tr: "Zeytin, peynir, domates, salatalık, bal, tereyağı, reçel ve simit",
        en: "Olives, cheese, tomatoes, cucumber, honey, butter, jam and simit",
        de: "Oliven, Käse, Tomaten, Gurke, Honig, Butter, Marmelade und Simit",
      },
      price: 180,
      image: "/turkish-breakfast-plate.png",
    },
  ],
  3: [
    {
      id: 6,
      name: {
        tr: "Meze Tabağı",
        en: "Meze Platter",
        de: "Meze-Platte",
      },
      description: {
        tr: "Humus, cacık, patlıcan salatası, yaprak sarma ve havuç tarator",
        en: "Hummus, tzatziki, eggplant salad, stuffed vine leaves and carrot tarator",
        de: "Hummus, Tzatziki, Auberginensalat, gefüllte Weinblätter und Karotten-Tarator",
      },
      price: 220,
      image: "/turkish-meze-platter.png",
      popular: true,
    },
    {
      id: 7,
      name: {
        tr: "Yaprak Sarma",
        en: "Stuffed Vine Leaves",
        de: "Gefüllte Weinblätter",
      },
      description: {
        tr: "Pirinç, soğan, nane ve baharatlarla doldurulmuş asma yaprağı sarması",
        en: "Vine leaves stuffed with rice, onions, mint and spices",
        de: "Weinblätter gefüllt mit Reis, Zwiebeln, Minze und Gewürzen",
      },
      price: 120,
      image: "/turkish-stuffed-vine-leaves.png",
    },
    {
      id: 8,
      name: {
        tr: "Cacık",
        en: "Tzatziki",
        de: "Tzatziki",
      },
      description: {
        tr: "Yoğurt, salatalık, sarımsak ve nane ile hazırlanan soğuk meze",
        en: "Cold appetizer prepared with yogurt, cucumber, garlic and mint",
        de: "Kalte Vorspeise, zubereitet mit Joghurt, Gurke, Knoblauch und Minze",
      },
      price: 80,
      image: "/turkish-cacik.png",
    },
    {
      id: 9,
      name: {
        tr: "Humus",
        en: "Hummus",
        de: "Hummus",
      },
      description: {
        tr: "Nohut, tahin, zeytinyağı ve baharatlarla hazırlanan meze",
        en: "Appetizer prepared with chickpeas, tahini, olive oil and spices",
        de: "Vorspeise, zubereitet mit Kichererbsen, Tahini, Olivenöl und Gewürzen",
      },
      price: 90,
      image: "/turkish-hummus.png",
    },
    {
      id: 10,
      name: {
        tr: "Patlıcan Salatası",
        en: "Eggplant Salad",
        de: "Auberginensalat",
      },
      description: {
        tr: "Közlenmiş patlıcan, soğan, domates ve zeytinyağı ile hazırlanan salata",
        en: "Salad prepared with roasted eggplant, onions, tomatoes and olive oil",
        de: "Salat, zubereitet mit gerösteter Aubergine, Zwiebeln, Tomaten und Olivenöl",
      },
      price: 100,
      image: "/turkish-eggplant-salad.png",
    },
  ],
  4: [
    {
      id: 11,
      name: {
        tr: "Kalamar Tava",
        en: "Fried Calamari",
        de: "Gebratener Tintenfisch",
      },
      description: {
        tr: "Çıtır kaplama ile kızartılmış kalamar",
        en: "Calamari fried with crispy coating",
        de: "Tintenfisch mit knuspriger Panade gebraten",
      },
      price: 180,
      image: "/golden-crispy-calamari.png",
      popular: true,
    },
    {
      id: 12,
      name: {
        tr: "Sigara Böreği",
        en: "Cheese Rolls",
        de: "Käserollen",
      },
      description: {
        tr: "Beyaz peynir ile doldurulmuş, kızartılmış yufka ruloları",
        en: "Fried phyllo rolls filled with white cheese",
        de: "Gebratene Phyllo-Rollen gefüllt mit Weißkäse",
      },
      price: 120,
      image: "/turkish-cheese-rolls.png",
    },
    {
      id: 13,
      name: {
        tr: "Mantı",
        en: "Turkish Dumplings",
        de: "Türkische Teigtaschen",
      },
      description: {
        tr: "Kıyma ile doldurulmuş hamur, yoğurt ve sarımsaklı sos ile servis edilir",
        en: "Dough filled with minced meat, served with yogurt and garlic sauce",
        de: "Teig gefüllt mit Hackfleisch, serviert mit Joghurt und Knoblauchsauce",
      },
      price: 150,
      image: "/turkish-manti-dumplings.png",
      popular: true,
    },
    {
      id: 14,
      name: {
        tr: "Paçanga Böreği",
        en: "Pastirma Pastry",
        de: "Pastirma-Gebäck",
      },
      description: {
        tr: "Pastırma ve kaşar peyniri ile doldurulmuş, kızartılmış yufka böreği",
        en: "Fried phyllo pastry filled with pastirma and kasseri cheese",
        de: "Gebratenes Phyllo-Gebäck gefüllt mit Pastirma und Kasseri-Käse",
      },
      price: 140,
      image: "/turkish-pacanga-pastirma-borek.png",
    },
  ],
  5: [
    {
      id: 15,
      name: {
        tr: "Kuzu Tandır",
        en: "Lamb Tandoori",
        de: "Lamm Tandoori",
      },
      description: {
        tr: "Fırında yavaş pişirilmiş kuzu eti, pilav ile servis edilir",
        en: "Slow-cooked lamb in the oven, served with rice",
        de: "Langsam im Ofen gegartes Lammfleisch, serviert mit Reis",
      },
      price: 280,
      image: "/sizzling-lamb-tandoori.png",
      popular: true,
    },
    {
      id: 16,
      name: {
        tr: "Köfte",
        en: "Turkish Meatballs",
        de: "Türkische Fleischbällchen",
      },
      description: {
        tr: "Baharatlarla harmanlanmış ızgara köfte, patates kızartması ile servis edilir",
        en: "Grilled meatballs blended with spices, served with french fries",
        de: "Gegrillte Fleischbällchen mit Gewürzen, serviert mit Pommes Frites",
      },
      price: 200,
      image: "/spiced-turkish-meatballs.png",
      popular: true,
    },
    {
      id: 17,
      name: {
        tr: "Patlıcan Kebabı",
        en: "Eggplant Kebab",
        de: "Auberginen-Kebab",
      },
      description: {
        tr: "Közlenmiş patlıcan ve kıyma ile hazırlanan kebap",
        en: "Kebab prepared with roasted eggplant and minced meat",
        de: "Kebab, zubereitet mit gerösteter Aubergine und Hackfleisch",
      },
      price: 220,
      image: "/smoky-eggplant-kebab.png",
    },
    {
      id: 18,
      name: {
        tr: "Tavuk Şiş",
        en: "Chicken Shish Kebab",
        de: "Hühnchen-Spieß",
      },
      description: {
        tr: "Marine edilmiş tavuk göğsü şiş, pilav ve ızgara sebzeler ile servis edilir",
        en: "Marinated chicken breast skewers, served with rice and grilled vegetables",
        de: "Marinierte Hähnchenbrust-Spieße, serviert mit Reis und gegrilltem Gemüse",
      },
      price: 180,
      image: "/turkish-chicken-shish-kebab.png",
    },
    {
      id: 19,
      name: {
        tr: "Etli Güveç",
        en: "Meat Stew",
        de: "Fleischeintopf",
      },
      description: {
        tr: "Fırında pişirilmiş dana eti ve sebze güveç",
        en: "Oven-baked veal and vegetable stew",
        de: "Im Ofen gebackener Kalbs- und Gemüseeintopf",
      },
      price: 240,
      image: "/turkish-meat-stew.png",
    },
  ],
  6: [
    {
      id: 20,
      name: {
        tr: "Türk Kahvesi",
        en: "Turkish Coffee",
        de: "Türkischer Kaffee",
      },
      description: {
        tr: "Geleneksel Türk kahvesi, lokum ile servis edilir",
        en: "Traditional Turkish coffee, served with Turkish delight",
        de: "Traditioneller türkischer Kaffee, serviert mit Lokum",
      },
      price: 40,
      image: "/turkish-coffee-delight.png",
      popular: true,
    },
    {
      id: 21,
      name: {
        tr: "Çay",
        en: "Turkish Tea",
        de: "Türkischer Tee",
      },
      description: {
        tr: "Geleneksel Türk çayı, ince belli bardakta servis edilir",
        en: "Traditional Turkish tea, served in a tulip-shaped glass",
        de: "Traditioneller türkischer Tee, serviert in einem tulpenförmigen Glas",
      },
      price: 15,
      image: "/turkish-tea-glass.png",
    },
    {
      id: 22,
      name: {
        tr: "Ayran",
        en: "Ayran",
        de: "Ayran",
      },
      description: {
        tr: "Yoğurt, su ve tuz ile hazırlanan geleneksel Türk içeceği",
        en: "Traditional Turkish drink prepared with yogurt, water and salt",
        de: "Traditionelles türkisches Getränk, zubereitet mit Joghurt, Wasser und Salz",
      },
      price: 25,
      image: "/turkish-ayran.png",
    },
    {
      id: 23,
      name: {
        tr: "Şalgam Suyu",
        en: "Turnip Juice",
        de: "Rübensaft",
      },
      description: {
        tr: "Fermente edilmiş mor havuç ve şalgam suyu",
        en: "Fermented purple carrot and turnip juice",
        de: "Fermentierter lila Karotten- und Rübensaft",
      },
      price: 30,
      image: "/turkish-salgam-turnip-juice.png",
    },
    {
      id: 24,
      name: {
        tr: "Rakı",
        en: "Raki",
        de: "Raki",
      },
      description: {
        tr: "Geleneksel Türk anason likörü, su ve buz ile servis edilir",
        en: "Traditional Turkish anise liqueur, served with water and ice",
        de: "Traditioneller türkischer Anislikör, serviert mit Wasser und Eis",
      },
      price: 120,
      image: "/turkish-raki-meze.png",
    },
  ],
  7: [
    {
      id: 25,
      name: {
        tr: "Mevsim Salatası",
        en: "Seasonal Salad",
        de: "Saisonaler Salat",
      },
      description: {
        tr: "Taze mevsim sebzeleri ile hazırlanan salata",
        en: "Salad prepared with fresh seasonal vegetables",
        de: "Salat, zubereitet mit frischem Saisongemüse",
      },
      price: 80,
      image: "/turkish-seasonal-salad.png",
    },
    {
      id: 26,
      name: {
        tr: "Çoban Salatası",
        en: "Shepherd's Salad",
        de: "Hirtensalat",
      },
      description: {
        tr: "Domates, salatalık, biber, soğan ve maydanoz ile hazırlanan salata",
        en: "Salad prepared with tomatoes, cucumber, peppers, onions and parsley",
        de: "Salat, zubereitet mit Tomaten, Gurke, Paprika, Zwiebeln und Petersilie",
      },
      price: 90,
      image: "/turkish-shepherd-salad.png",
      popular: true,
    },
    {
      id: 27,
      name: {
        tr: "Akdeniz Salatası",
        en: "Mediterranean Salad",
        de: "Mediterraner Salat",
      },
      description: {
        tr: "Domates, salatalık, zeytin, peynir ve zeytinyağı ile hazırlanan salata",
        en: "Salad prepared with tomatoes, cucumber, olives, cheese and olive oil",
        de: "Salat, zubereitet mit Tomaten, Gurke, Oliven, Käse und Olivenöl",
      },
      price: 100,
      image: "/mediterranean-salad-olives.png",
    },
    {
      id: 28,
      name: {
        tr: "Tavuklu Sezar Salatası",
        en: "Chicken Caesar Salad",
        de: "Caesar Salat mit Hähnchen",
      },
      description: {
        tr: "Izgara tavuk, marul, kruton, parmesan peyniri ve sezar sosu ile hazırlanan salata",
        en: "Salad prepared with grilled chicken, lettuce, croutons, parmesan cheese and caesar dressing",
        de: "Salat, zubereitet mit gegrilltem Hähnchen, Salat, Croutons, Parmesan und Caesar-Dressing",
      },
      price: 140,
      image: "/chicken-caesar-salad.png",
    },
  ],
  // Diğer kategoriler için menü öğeleri...
}

type Props = {
  params: { categoryId: string; locale: Locale }
}

export default function MenuCategoryClientPage({ params }: Props) {
  const { categoryId, locale } = params
  const [searchTerm, setSearchTerm] = useState("")

  const category = menuCategories.find((c) => c.id.toString() === categoryId)
  const items = menuItems[categoryId as keyof typeof menuItems] || []

  const filteredItems = items.filter(
    (item) =>
      item.name[locale].toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description[locale].toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <MainHeader locale={locale} />
        <div className="container mx-auto px-4 py-8 flex-grow">
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold mb-4">
              {locale === "tr"
                ? "Kategori bulunamadı"
                : locale === "de"
                  ? "Kategorie nicht gefunden"
                  : "Category not found"}
            </h1>
            <Link
              href={getPathWithLocale("/menu", locale)}
              className="text-blue-600 hover:underline flex items-center justify-center gap-2"
            >
              <ArrowLeft size={16} />
              {locale === "tr" ? "Menüye geri dön" : locale === "de" ? "Zurück zum Menü" : "Back to menu"}
            </Link>
          </div>
        </div>
        <Footer locale={locale} />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader locale={locale} />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-8">
          <Link
            href={getPathWithLocale("/menu", locale)}
            className="text-blue-600 hover:underline flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            {locale === "tr" ? "Menüye geri dön" : locale === "de" ? "Zurück zum Menü" : "Back to menu"}
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="md:w-1/3">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name[locale]}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-2">{category.name[locale]}</h1>
            <p className="text-gray-600 mb-6">{category.description[locale]}</p>

            <div className="relative mb-6">
              <input
                type="text"
                placeholder={
                  locale === "tr" ? "Menüde ara..." : locale === "de" ? "Im Menü suchen..." : "Search in menu..."
                }
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
                item.popular ? "ring-2 ring-amber-400" : ""
              }`}
            >
              <div className="relative h-48">
                <Image src={item.image || "/placeholder.svg"} alt={item.name[locale]} fill className="object-cover" />
                {item.popular && (
                  <div className="absolute top-2 right-2 bg-amber-400 text-white text-xs font-bold px-2 py-1 rounded">
                    {locale === "tr" ? "Popüler" : locale === "de" ? "Beliebt" : "Popular"}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{item.name[locale]}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description[locale]}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">₺{item.price}</span>
                  <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    {locale === "tr" ? "Sipariş Ver" : locale === "de" ? "Bestellen" : "Order"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              {locale === "tr"
                ? "Aramanızla eşleşen ürün bulunamadı."
                : locale === "de"
                  ? "Keine Produkte gefunden, die Ihrer Suche entsprechen."
                  : "No products found matching your search."}
            </p>
          </div>
        )}
      </div>
      <Footer locale={locale} />
    </div>
  )
}
