"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import type { Locale } from "@/lib/i18n"
import { getTranslation } from "@/lib/i18n/translations"

interface AnimatedFoodGalleryProps {
  locale: Locale
}

export default function AnimatedFoodGallery({ locale }: AnimatedFoodGalleryProps) {
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(locale, key)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const foodImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8728_baliklar.jpg-TVWfUlRPXePZPxvJMg61jhNMzhvF0U.jpeg",
      alt: "Grilled fish",
      category: locale === "tr" ? "Balık" : locale === "de" ? "Fisch" : "Fish",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6217_deniz_sicak.jpg-0MumAmT23XzdXMrNQ0d4bcuBTwBAat.jpeg",
      alt: "Seafood dish",
      category: locale === "tr" ? "Deniz Ürünleri" : locale === "de" ? "Meeresfrüchte" : "Seafood",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/82_slide2.jpg-HuQ196HBptu7yEXQo7UoaqYPiohpHc.jpeg",
      alt: "Turkish breakfast",
      category: locale === "tr" ? "Kahvaltı" : locale === "de" ? "Frühstück" : "Breakfast",
    },
    {
      src: "/turkish-meze-platter.png",
      alt: "Meze platter",
      category: locale === "tr" ? "Mezeler" : locale === "de" ? "Vorspeisen" : "Appetizers",
    },
    {
      src: "/sizzling-lamb-tandoori.png",
      alt: "Lamb tandoori",
      category: locale === "tr" ? "Et Yemekleri" : locale === "de" ? "Fleischgerichte" : "Meat Dishes",
    },
    {
      src: "/turkish-desserts-baklava-kunefe.png",
      alt: "Turkish desserts",
      category: locale === "tr" ? "Tatlılar" : locale === "de" ? "Desserts" : "Desserts",
    },
    {
      src: "/turkish-coffee-delight.png",
      alt: "Turkish coffee",
      category: locale === "tr" ? "İçecekler" : locale === "de" ? "Getränke" : "Beverages",
    },
    {
      src: "/turkish-seasonal-salad.png",
      alt: "Seasonal salad",
      category: locale === "tr" ? "Salatalar" : locale === "de" ? "Salate" : "Salads",
    },
  ]

  return (
    <section ref={ref} className="relative overflow-hidden bg-amber-50 py-24">
      <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-amber-300/20 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl"></div>

      <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{t("ourMenu")}</h2>
          <div className="mx-auto mt-2 h-1 w-24 bg-amber-500 md:h-2 md:w-32"></div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">{t("ourMenuSubtitle")}</p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {foodImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative aspect-square">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-gray-900">
                    {image.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
