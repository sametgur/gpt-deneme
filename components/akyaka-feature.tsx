"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import type { Locale } from "@/lib/i18n"
import { translations } from "@/lib/i18n/translations"
import SafeImage from "./safe-image"

interface AkyakaFeatureProps {
  locale: Locale
}

export default function AkyakaFeature({ locale }: AkyakaFeatureProps) {
  // Güvenli çeviri fonksiyonu
  const t = (key: keyof (typeof translations)[typeof locale]) => {
    // Locale veya translations[locale] tanımsızsa, key'i döndür
    if (!locale || !translations[locale]) return key
    // Çeviri varsa döndür, yoksa key'i döndür
    return translations[locale][key] || key
  }

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} className="relative overflow-hidden bg-amber-50 py-24">
      <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div style={{ y: y1 }}>
            <h2 className="font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {t("inTheHeartOfAkyaka")}
            </h2>
            <div className="mt-2 h-1 w-20 bg-amber-500 md:h-2 md:w-32"></div>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">{t("inTheHeartOfAkyakaText1")}</p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">{t("inTheHeartOfAkyakaText2")}</p>
            <Button className="mt-8 bg-amber-500 hover:bg-amber-600">
              {t("exploreAkyaka")} <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
          <motion.div style={{ y: y2 }} className="relative grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                <SafeImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6268_2b1cd5e4-5d47-4ff3-9f84-6f21acb084eb.jpg-UGrMufDqeFK2GfoBbgM1s91i42cmZD.jpeg"
                  alt="Akyaka Cennet Restaurant"
                  fill
                  className="object-cover"
                  fallbackSrc="/cozy-italian-restaurant.png"
                />
              </div>
              <div className="relative h-40 overflow-hidden rounded-lg shadow-lg">
                <SafeImage
                  src="/akyaka-houses.png"
                  alt="Akyaka architecture"
                  fill
                  className="object-cover"
                  fallbackSrc="/diverse-neighborhood.png"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-40 overflow-hidden rounded-lg shadow-lg">
                <SafeImage
                  src="/akyaka-river-serenity.png"
                  alt="Azmak River"
                  fill
                  className="object-cover"
                  fallbackSrc="/tranquil-river.png"
                />
              </div>
              <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                <SafeImage
                  src="/akyaka-golden-hour.png"
                  alt="Akyaka beach"
                  fill
                  className="object-cover"
                  fallbackSrc="/tropical-beach-paradise.png"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-amber-300/20 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl"></div>
    </section>
  )
}
