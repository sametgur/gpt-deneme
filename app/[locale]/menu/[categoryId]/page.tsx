import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n"
import MenuCategoryClientPage from "./MenuCategoryClientPage"

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

type Props = {
  params: { categoryId: string; locale: Locale }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoryId, locale } = params
  const category = menuCategories.find((c) => c.id.toString() === categoryId)

  return {
    title: `${category?.name[locale] || "Menü"} | Cennet Restaurant Akyaka`,
    description: category?.description[locale] || "Cennet Restaurant'ın özel menüsü",
  }
}

export default function MenuCategoryPage({ params }: Props) {
  return <MenuCategoryClientPage params={params} />
}
