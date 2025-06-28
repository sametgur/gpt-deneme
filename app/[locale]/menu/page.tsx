import type { Metadata } from "next"
import { type Locale, locales } from "@/lib/i18n"
import MenuClientPage from "./MenuClientPage"
import MainHeader from "@/components/main-header"
import Footer from "@/components/footer"

type Props = {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale

  const title = {
    tr: "Menümüz | Cennet Restaurant Akyaka",
    en: "Our Menu | Cennet Restaurant Akyaka",
    de: "Unsere Speisekarte | Cennet Restaurant Akyaka",
  }

  const description = {
    tr: "Cennet Restaurant'ın özenle hazırlanmış menüsünü keşfedin. Taze deniz ürünleri, geleneksel Türk mutfağı ve özel lezzetlerimiz.",
    en: "Discover the carefully prepared menu of Cennet Restaurant. Fresh seafood, traditional Turkish cuisine and our special flavors.",
    de: "Entdecken Sie die sorgfältig zubereitete Speisekarte des Cennet Restaurants. Frische Meeresfrüchte, traditionelle türkische Küche und unsere besonderen Aromen.",
  }

  return {
    title: title[locale],
    description: description[locale],
  }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function MenuPage({ params }: Props) {
  return (
    <div className="min-h-screen bg-white">
      <MainHeader locale={params.locale} />
      <MenuClientPage locale={params.locale} />
      <Footer locale={params.locale} />
    </div>
  )
}
