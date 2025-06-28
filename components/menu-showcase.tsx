"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ChevronRight } from "lucide-react"

import type { Locale } from "@/lib/i18n"
import { translations } from "@/lib/i18n/translations"

interface MenuShowcaseProps {
  locale: Locale
}

export default function MenuShowcase({ locale }: MenuShowcaseProps) {
  // Güvenli çeviri fonksiyonu
  const t = (key: keyof (typeof translations)[typeof locale]) => {
    // Locale veya translations[locale] tanımsızsa, key'i döndür
    if (!locale || !translations[locale]) return key
    // Çeviri varsa döndür, yoksa key'i döndür
    return translations[locale][key] || key
  }

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const categories = [
    {
      id: "cold-meze",
      name: locale === "tr" ? "Soğuk Mezeler" : locale === "de" ? "Kalte Vorspeisen" : "Cold Appetizers",
      image: "/turkish-cold-meze.png",
      description:
        locale === "tr"
          ? "Geleneksel Türk mutfağının en lezzetli soğuk mezeleri"
          : locale === "de"
            ? "Die köstlichsten kalten Vorspeisen der traditionellen türkischen Küche"
            : "The most delicious cold appetizers of traditional Turkish cuisine",
    },
    {
      id: "main-dishes",
      name: locale === "tr" ? "Ana Yemekler" : locale === "de" ? "Hauptgerichte" : "Main Dishes",
      image: "/grilled-sea-bass-for-main-courses.webp", // Updated image path
      description:
        locale === "tr"
          ? "Özenle hazırlanan et ve deniz ürünleri ana yemekleri"
          : locale === "de"
            ? "Sorgfältig zubereitete Fleisch- und Meeresfrüchte-Hauptgerichte"
            : "Carefully prepared meat and seafood main courses",
    },
    {
      id: "desserts",
      name: locale === "tr" ? "Tatlılar" : locale === "de" ? "Desserts" : "Desserts",
      image: "/turkish-desserts-baklava-kunefe.png",
      description:
        locale === "tr"
          ? "Geleneksel Türk tatlıları ve özel ev yapımı lezzetler"
          : locale === "de"
            ? "Traditionelle türkische Desserts und spezielle hausgemachte Leckereien"
            : "Traditional Turkish desserts and special homemade delicacies",
    },
    {
      id: "drinks",
      name: locale === "tr" ? "İçecekler" : locale === "de" ? "Getränke" : "Drinks",
      image: "/unnamed-1.webp", // Updated image path
      description:
        locale === "tr"
          ? "Geleneksel Türk içecekleri ve serinletici seçenekler"
          : locale === "de"
            ? "Traditionelle türkische Getränke ve erfrischende Optionen"
            : "Traditional Turkish drinks and refreshing options",
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
    <section id="menu" className="relative bg-gray-50 py-20 md:py-24 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="menu-pattern"
              patternUnits="userSpaceOnUse"
              width="40"
              height="40"
              patternTransform="rotate(45)"
            >
              <rect width="100%" height="100%" fill="none" />
              <circle cx="20" cy="20" r="1" fill="currentColor" className="text-turquoise-500" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#menu-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            {locale === "tr" ? "Menümüz" : locale === "de" ? "Unsere Speisekarte" : "Our Menu"}
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-turquoise-500" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            {locale === "tr"
              ? "Akyaka'nın taze malzemeleriyle hazırlanan özel lezzetlerimiz"
              : locale === "de"
                ? "Unsere besonderen Gerichte, zubereitet mit frischen Zutaten aus Akyaka"
                : "Our special flavors prepared with fresh ingredients from Akyaka"}
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <Link href={`/${locale}/menu/${category.id}`}>
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-2xl font-bold text-white">{category.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{category.description}</p>
                  <div className="mt-4 flex items-center text-turquoise-500">
                    <span className="font-medium">
                      {locale === "tr" ? "Detayları Gör" : locale === "de" ? "Details anzeigen" : "View Details"}
                    </span>
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Link
            href={`/${locale}/menu`}
            className="inline-flex items-center justify-center rounded-full bg-turquoise-500 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-turquoise-600 focus:outline-none focus:ring-2 focus:ring-turquoise-500 focus:ring-offset-2"
          >
            {locale === "tr"
              ? "Tüm Menüyü Gör"
              : locale === "de"
                ? "Vollständige Speisekarte anzeigen"
                : "View Full Menu"}
          </Link>
        </div>
      </div>
    </section>
  )
}
