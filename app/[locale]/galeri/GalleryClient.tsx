"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import type { Locale } from "@/lib/i18n"

// Gallery categories and images
const galleryData = {
  restaurant: [
    { src: "/unnamed.webp", alt: "Restaurant Interior", width: 1200, height: 800 },
    // { src: "/outdoor-restaurant-sea-view.png", alt: "Outdoor Seating with Sea View", width: 1200, height: 800 }, // Bu satır kaldırıldı
    { src: "/waterfront-dining.png", alt: "Waterfront Dining", width: 1200, height: 800 },
    { src: "/outdoor-restaurant-seating.webp", alt: "Outdoor Restaurant Seating", width: 1200, height: 800 },
  ],
  food: [
    { src: "/turkish-main-dishes.png", alt: "Turkish Main Dishes", width: 1200, height: 800 },
    { src: "/turkish-meze-variety.png", alt: "Turkish Meze Variety", width: 1200, height: 800 },
    { src: "/turkish-desserts-baklava-kunefe.png", alt: "Turkish Desserts", width: 1200, height: 800 },
    { src: "/turkish-cold-meze.png", alt: "Turkish Cold Meze", width: 1200, height: 800 },
    { src: "/char-grilled-octopus.png", alt: "Char Grilled Octopus", width: 1200, height: 800 },
    { src: "/fresh-fish-ice.png", alt: "Fresh Fish on Ice", width: 1200, height: 800 },
  ],
  akyaka: [
    { src: "/akyaka-houses.png", alt: "Akyaka Houses", width: 1200, height: 800 },
    { src: "/akyaka-river-serenity.png", alt: "Akyaka River Serenity", width: 1200, height: 800 },
    { src: "/akyaka-golden-hour.png", alt: "Akyaka at Golden Hour", width: 1200, height: 800 },
    { src: "/akyaka-river-mountains.png", alt: "Akyaka River and Mountains", width: 1200, height: 800 },
    { src: "/akyaka-traditional-houses.png", alt: "Akyaka Traditional Houses", width: 1200, height: 800 },
  ],
}

// Translations for gallery page
const galleryTranslations = {
  tr: {
    title: "Galeri",
    subtitle: "Cennet Restaurant'ın eşsiz atmosferini ve lezzetlerini keşfedin",
    categories: {
      all: "Tümü",
      restaurant: "Restoran",
      food: "Yemekler",
      akyaka: "Akyaka",
    },
  },
  en: {
    title: "Gallery",
    subtitle: "Discover the unique atmosphere and flavors of Cennet Restaurant",
    categories: {
      all: "All",
      restaurant: "Restaurant",
      food: "Food",
      akyaka: "Akyaka",
    },
  },
  de: {
    title: "Galerie",
    subtitle: "Entdecken Sie die einzigartige Atmosphäre und Aromen des Cennet Restaurants",
    categories: {
      all: "Alle",
      restaurant: "Restaurant",
      food: "Essen",
      akyaka: "Akyaka",
    },
  },
}

interface GalleryClientProps {
  locale: string
}

export default function GalleryClient({ locale }: GalleryClientProps) {
  // Safe locale handling
  const safeLocale = (locale as Locale) || "tr"

  // Translation function
  const t = (key: string) => {
    const keys = key.split(".")
    let result = galleryTranslations[safeLocale as keyof typeof galleryTranslations]

    for (const k of keys) {
      if (result && typeof result === "object" && k in result) {
        result = result[k as keyof typeof result]
      } else {
        // Fallback to English or key itself
        return key
      }
    }

    return result as string
  }

  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [filteredImages, setFilteredImages] = useState<any[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Combine all images for the 'all' category
  const allImages = [...galleryData.restaurant, ...galleryData.food, ...galleryData.akyaka]

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredImages(shuffleArray([...allImages]))
    } else {
      setFilteredImages(shuffleArray([...galleryData[activeCategory as keyof typeof galleryData]]))
    }

    // Add a small delay to allow for animation
    setTimeout(() => {
      setIsLoaded(true)
    }, 300)
  }, [activeCategory])

  // Fisher-Yates shuffle algorithm
  function shuffleArray(array: any[]) {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  // Translate image alt text based on locale
  const getLocalizedAlt = (alt: string) => {
    const altTranslations: Record<string, Record<string, string>> = {
      "Restaurant Interior": {
        tr: "Restoran İç Mekanı",
        de: "Restaurant Innenraum",
      },
      "Outdoor Seating with Sea View": {
        tr: "Deniz Manzaralı Dış Mekan Oturma Alanı",
        de: "Außensitzplätze mit Meerblick",
      },
      "Waterfront Dining": {
        tr: "Su Kenarında Yemek",
        de: "Essen am Wasser",
      },
      "Outdoor Restaurant Seating": {
        // Yeni alt metin çevirisi
        tr: "Dış Mekan Restoran Oturma Alanı",
        de: "Außenbereich des Restaurants",
      },
      "Turkish Main Dishes": {
        tr: "Türk Ana Yemekleri",
        de: "Türkische Hauptgerichte",
      },
      "Turkish Meze Variety": {
        tr: "Türk Meze Çeşitleri",
        de: "Türkische Meze-Vielfalt",
      },
      "Turkish Desserts": {
        tr: "Türk Tatlıları",
        de: "Türkische Desserts",
      },
      "Turkish Cold Meze": {
        tr: "Türk Soğuk Mezeler",
        de: "Türkische kalte Meze",
      },
      "Char Grilled Octopus": {
        tr: "Izgara Ahtapot",
        de: "Gegrillter Oktopus",
      },
      "Fresh Fish on Ice": {
        tr: "Buz Üzerinde Taze Balık",
        de: "Frischer Fisch auf Eis",
      },
      "Akyaka Houses": {
        tr: "Akyaka Evleri",
        de: "Akyaka Häuser",
      },
      "Akyaka River Serenity": {
        tr: "Akyaka Nehir Huzuru",
        de: "Akyaka Fluss Gelassenheit",
      },
      "Akyaka at Golden Hour": {
        tr: "Altın Saatte Akyaka",
        de: "Akyaka zur goldenen Stunde",
      },
      "Akyaka River and Mountains": {
        tr: "Akyaka Nehri ve Dağları",
        de: "Akyaka Fluss und Berge",
      },
      "Akyaka Traditional Houses": {
        tr: "Akyaka Geleneksel Evleri",
        de: "Akyaka traditionelle Häuser",
      },
    }

    return altTranslations[alt]?.[safeLocale] || alt
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/turkish-meze-variety.png" alt="Turkish Meze Variety" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-red-900/50" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">{t("title")}</h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto drop-shadow-md">{t("subtitle")}</p>
          </motion.div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["all", "restaurant", "food", "akyaka"].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsLoaded(false)
                setTimeout(() => setActiveCategory(category), 300)
              }}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-amber-500 to-red-500 text-white shadow-lg"
                  : "bg-white text-gray-700 shadow hover:shadow-md"
              }`}
            >
              {t(`categories.${category}`)}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${image.src}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="relative overflow-hidden rounded-xl shadow-lg bg-white"
            >
              <div className="aspect-w-4 aspect-h-3 cursor-pointer" onClick={() => setLightboxImage(image.src)}>
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={getLocalizedAlt(image.alt)}
                  width={image.width}
                  height={image.height}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-medium">{getLocalizedAlt(image.alt)}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setLightboxImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-5xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={lightboxImage || "/placeholder.svg"}
                  alt="Enlarged gallery image"
                  width={1200}
                  height={800}
                  className="object-contain max-h-[90vh]"
                />
                <button
                  className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                  onClick={() => setLightboxImage(null)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
