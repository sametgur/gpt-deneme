"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import type { Locale } from "@/lib/i18n"
import { getTranslation } from "@/lib/i18n/translations"

interface FeaturedDishesProps {
  locale: Locale
}

export default function FeaturedDishes({ locale }: FeaturedDishesProps) {
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(locale, key)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const dishes = [
    {
      id: 1,
      name: locale === "tr" ? "Izgara Ahtapot" : locale === "de" ? "Gegrillter Oktopus" : "Grilled Octopus",
      description:
        locale === "tr"
          ? "Özel baharatlarla marine edilmiş, közde pişirilmiş taze ahtapot, zeytinyağlı roka eşliğinde"
          : locale === "de"
            ? "Frischer Oktopus, mariniert mit speziellen Gewürzen, gegrillt über Holzkohle, serviert mit Rucola und Olivenöl"
            : "Fresh octopus marinated with special spices, grilled over charcoal, served with arugula and olive oil",
      image: "/char-grilled-octopus.png",
    },
    {
      id: 2,
      name: locale === "tr" ? "Kuzu Şiş" : locale === "de" ? "Lamm-Spieße" : "Lamb Skewers",
      description:
        locale === "tr"
          ? "Özel baharatlarla marine edilmiş kuzu eti, közde pişirilmiş, taze sebzeler ve pilav eşliğinde"
          : locale === "de"
            ? "Lammfleisch mariniert mit speziellen Gewürzen, gegrillt über Holzkohle, serviert mit frischem Gemüse und Reis"
            : "Lamb meat marinated with special spices, grilled over charcoal, served with fresh vegetables and rice",
      image: "/kuzu-sis-550x367.jpg",
    },
    {
      id: 3,
      name: locale === "tr" ? "Izgara Levrek" : locale === "de" ? "Gegrillter Wolfsbarsch" : "Grilled Sea Bass",
      description:
        locale === "tr"
          ? "Akyaka'nın taze denizinden sofraya, özel baharatlarla marine edilmiş ızgara levrek, mevsim yeşillikleri eşliğinde"
          : locale === "de"
            ? "Frisch aus dem Meer von Akyaka, gegrillter Wolfsbarsch mariniert mit speziellen Gewürzen, serviert mit Saisongemüse"
            : "Fresh from the sea of Akyaka, grilled sea bass marinated with special spices, served with seasonal greens",
      image: "/levrek.webp", // Bu yol zaten doğruydu.
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="featured-dishes" className="relative overflow-hidden bg-white py-20 md:py-24 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-turquoise-100/50 blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 h-64 w-64 rounded-full bg-turquoise-100/50 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            {locale === "tr" ? "Öne Çıkan Lezzetlerimiz" : locale === "de" ? "Besondere Gerichte" : "Featured Dishes"}
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-turquoise-500" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            {locale === "tr"
              ? "Akyaka'nın eşsiz doğasından ilham alan, şeflerimizin özenle hazırladığı özel tatlar"
              : locale === "de"
                ? "Besondere Aromen, sorgfältig zubereitet von unseren Köchen, inspiriert von der einzigartigen Natur von Akyaka"
                : "Special flavors carefully prepared by our chefs, inspired by the unique nature of Akyaka"}
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {dishes.map((dish) => (
            <motion.div
              key={dish.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block rounded-full bg-turquoise-500 px-3 py-1 text-sm font-medium text-white">
                    {locale === "tr" ? "Öne Çıkan" : locale === "de" ? "Empfohlen" : "Featured"}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-serif text-xl font-bold text-gray-900">{dish.name}</h3>
                <p className="mb-4 text-gray-600">{dish.description}</p>
                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    className="group flex items-center gap-1 p-0 text-turquoise-600 hover:text-turquoise-700"
                    onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <span>
                      {locale === "tr" ? "Menüyü Gör" : locale === "de" ? "Speisekarte anzeigen" : "View Menu"}
                    </span>
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="rounded-full bg-turquoise-500 px-8 py-6 text-white hover:bg-turquoise-600"
            onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
          >
            {locale === "tr"
              ? "Tüm Menüyü Keşfet"
              : locale === "de"
                ? "Vollständige Speisekarte erkunden"
                : "Explore Full Menu"}
          </Button>
        </div>
      </div>
    </section>
  )
}
