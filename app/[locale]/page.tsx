import type { Metadata } from "next"
import { type Locale, locales } from "@/lib/i18n"
import HomePage from "./HomePage"

type Props = {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale

  const title = {
    tr: "Cennet Restaurant Akyaka | Eşsiz Deniz Ürünleri ve Türk Mutfağı",
    en: 'Cennet Restaurant Akyaka | Unique Seafood and Turkish Cuisine",yaka | Unique Seafood and Turkish Cuisine',
    de: "Cennet Restaurant Akyaka | Einzigartige Meeresfrüchte und Türkische Küche",
  }

  const description = {
    tr: "Akyaka'nın kalbinde, suyun üzerinde konumlanmış Cennet Restaurant'ta taze deniz ürünleri ve geleneksel Türk mutfağının eşsiz lezzetlerini keşfedin.",
    en: "Discover the unique flavors of fresh seafood and traditional Turkish cuisine at Cennet Restaurant, located over the water in the heart of Akyaka.",
    de: "Entdecken Sie die einzigartigen Aromen frischer Meeresfrüchte und traditioneller türkischer Küche im Cennet Restaurant, das über dem Wasser im Herzen von Akyaka liegt.",
  }

  return {
    title: title[locale],
    description: description[locale],
    keywords:
      "Akyaka restaurant, seafood, Turkish cuisine, Mugla restaurant, Akyaka food, fish restaurant, Cennet Restaurant",
    openGraph: {
      title: title[locale],
      description: description[locale],
      images: [
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6268_2b1cd5e4-5d47-4ff3-9f84-6f21acb084eb.jpg-UGrMufDqeFK2GfoBbgM1s91i42cmZD.jpeg",
          width: 1200,
          height: 630,
          alt: "Cennet Restaurant Akyaka",
        },
      ],
      locale: locale === "tr" ? "tr_TR" : locale === "de" ? "de_DE" : "en_GB",
      type: "website",
    },
  }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function LocalizedHomePage({ params }: Props) {
  return <HomePage locale={params.locale} />
}
