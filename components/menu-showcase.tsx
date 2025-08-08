"use client"

import Link from "next/link"
import { ChevronRight } from 'lucide-react'
import SafeImage from "@/components/safe-image"
import { Button } from "@/components/ui/button"
import type { Locale } from "@/lib/i18n"
import { cn } from "@/lib/utils"

interface MenuShowcaseProps {
  locale?: Locale
}

const categories = [
  {
    key: "cold-appetizers",
    title: { tr: "Soğuk Mezeler", en: "Cold Appetizers", de: "Kalte Vorspeisen" },
    description: {
      tr: "Geleneksel Türk mutfağının en lezzetli soğuk mezeleri",
      en: "The tastiest cold appetizers of traditional Turkish cuisine",
      de: "Die leckersten kalten Vorspeisen der türkischen Küche",
    },
    image: "/turkish-meze-platter.png",
  },
  {
    key: "mains",
    title: { tr: "Ana Yemekler", en: "Main Dishes", de: "Hauptgerichte" },
    description: {
      tr: "Özenle hazırlanan et ve deniz ürünleri ana yemekleri",
      en: "Carefully prepared meat and seafood main courses",
      de: "Sorgfältig zubereitete Fleisch- und Fischhauptgerichte",
    },
    image: "/turkish-main-dishes.png",
  },
  {
    key: "desserts",
    title: { tr: "Tatlılar", en: "Desserts", de: "Desserts" },
    description: {
      tr: "Geleneksel Türk tatlıları ve özel ev yapımı lezzetler",
      en: "Traditional Turkish desserts and special homemade delights",
      de: "Traditionelle türkische Desserts und hausgemachte Spezialitäten",
    },
    image: "/turkish-desserts-baklava-kunefe.png",
  },
  {
    key: "drinks",
    title: { tr: "İçecekler", en: "Drinks", de: "Getränke" },
    description: {
      tr: "Geleneksel Türk içecekleri ve serinletici seçenekler",
      en: "Traditional Turkish drinks and refreshing options",
      de: "Traditionelle türkische Getränke und erfrischende Optionen",
    },
    image: "/turkish-drinks-trio.png",
  },
]

export default function MenuShowcase({ locale = "tr" as Locale }: MenuShowcaseProps) {
  const t = <T extends Record<string, string>>(obj: T) => obj[locale] ?? obj.tr

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <article
              key={cat.key}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
            >
              <div className="relative h-52 w-full">
                <SafeImage
                  src={cat.image}
                  alt={t(cat.title)}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="transition-transform duration-500 group-hover:scale-105"
                  fallbackQuery={`category ${t(cat.title)}`}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <h3 className="absolute bottom-3 left-4 right-4 z-10 text-2xl font-semibold text-white drop-shadow">
                  {t(cat.title)}
                </h3>
              </div>

              <div className="space-y-4 p-5">
                <p className="min-h-[48px] text-sm text-gray-600">{t(cat.description)}</p>
                <Link
                  href={`/${locale}/menu`}
                  className={cn(
                    "inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700"
                  )}
                >
                  {locale === "tr" ? "Detayları Gör" : locale === "de" ? "Details ansehen" : "See details"}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href={`/${locale}/menu`}>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              {locale === "tr" ? "Tüm Menüyü Gör" : locale === "de" ? "Gesamte Speisekarte" : "View Full Menu"}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
