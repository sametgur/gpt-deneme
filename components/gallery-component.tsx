"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X, Camera, Utensils, MapPin, Home } from "lucide-react"
import type { Locale } from "@/lib/i18n"
import { translations } from "@/lib/i18n/translations"

interface GalleryComponentProps {
  locale: Locale
}

export default function GalleryComponent({ locale }: GalleryComponentProps) {
  const t = (key: keyof (typeof translations)[typeof locale]) => translations[locale][key] || key

  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [isLoaded, setIsLoaded] = useState(false)
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const categories = [
    {
      id: "all",
      name: locale === "tr" ? "Tümü" : locale === "de" ? "Alle" : "All",
      icon: <Home className="h-4 w-4 mr-2" />,
    },
    {
      id: "restaurant",
      name: locale === "tr" ? "Restoran" : locale === "de" ? "Restaurant" : "Restaurant",
      icon: <Camera className="h-4 w-4 mr-2" />,
    },
    {
      id: "food",
      name: locale === "tr" ? "Yemekler" : locale === "de" ? "Gerichte" : "Food",
      icon: <Utensils className="h-4 w-4 mr-2" />,
    },
    {
      id: "seafood",
      name: locale === "tr" ? "Deniz Ürünleri" : locale === "de" ? "Meeresfrüchte" : "Seafood",
      icon: <Utensils className="h-4 w-4 mr-2" />,
    },
    {
      id: "akyaka",
      name: "Akyaka",
      icon: <MapPin className="h-4 w-4 mr-2" />,
    },
  ]

  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6268_2b1cd5e4-5d47-4ff3-9f84-6f21acb084eb.jpg-UGrMufDqeFK2GfoBbgM1s91i42cmZD.jpeg",
      alt: locale === "tr" ? "Cennet Restaurant su kenarı yemek alanı" : "Cennet Restaurant waterside dining area",
      category: "restaurant",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8728_baliklar.jpg-TVWfUlRPXePZPxvJMg61jhNMzhvF0U.jpeg",
      alt: locale === "tr" ? "Izgara balık tabağı" : "Grilled fish dish",
      category: "seafood",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6217_deniz_sicak.jpg-0MumAmT23XzdXMrNQ0d4bcuBTwBAat.jpeg",
      alt: locale === "tr" ? "Karidesli deniz ürünleri tabağı" : "Seafood dish with shrimp",
      category: "seafood",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/82_slide2.jpg-HuQ196HBptu7yEXQo7UoaqYPiohpHc.jpeg",
      alt: locale === "tr" ? "Türk kahvaltı sofrası" : "Turkish breakfast spread",
      category: "food",
    },
    {
      src: "/turkish-restaurant-wooden-interior.png",
      alt: locale === "tr" ? "Restoran iç mekanı" : "Restaurant interior",
      category: "restaurant",
    },
    {
      src: "/chef-seafood-kitchen.png",
      alt: locale === "tr" ? "Şef deniz ürünleri hazırlıyor" : "Chef preparing seafood",
      category: "food",
    },
    {
      src: "/akyaka-river-mountains.png",
      alt: locale === "tr" ? "Akyaka nehir manzarası" : "Akyaka river view",
      category: "akyaka",
    },
    {
      src: "/turkish-desserts.png",
      alt: locale === "tr" ? "Türk tatlıları" : "Turkish desserts",
      category: "food",
    },
    {
      src: "/akyaka-traditional-houses.png",
      alt: locale === "tr" ? "Akyaka geleneksel evleri" : "Akyaka traditional houses",
      category: "akyaka",
    },
    {
      src: "/turkish-meze-variety.png",
      alt: locale === "tr" ? "Türk meze çeşitleri" : "Turkish meze appetizers",
      category: "food",
    },
    {
      src: "/fresh-fish-ice.png",
      alt: locale === "tr" ? "Taze yakalanmış balık teşhiri" : "Fresh caught fish display",
      category: "seafood",
    },
    {
      src: "/outdoor-restaurant-sea-view.png",
      alt: locale === "tr" ? "Restoran dış mekan oturma alanı" : "Restaurant outdoor seating",
      category: "restaurant",
    },
  ]

  const filteredImages = activeCategory === "all" ? images : images.filter((image) => image.category === activeCategory)

  const handlePrev = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
  }

  const handleNext = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") setSelectedImage(null)
    if (e.key === "ArrowLeft") handlePrev()
    if (e.key === "ArrowRight") handleNext()
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-wrap justify-center gap-3"
      >
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.1 * index },
            }}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-lg shadow-rose-500/20"
                : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
            }`}
          >
            {category.icon}
            {category.name}
          </motion.button>
        ))}
      </motion.div>

      <div
        ref={galleryRef}
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <AnimatePresence mode="wait">
          {filteredImages.map((image, index) => (
            <motion.div
              layout
              key={image.src}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative h-72">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end justify-start p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <span className="text-white font-medium drop-shadow-md">{image.alt}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition-colors hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition-colors hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation()
                handlePrev()
              }}
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition-colors hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative h-[80vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[selectedImage].src || "/placeholder.svg"}
                alt={filteredImages[selectedImage].alt}
                fill
                className="object-contain"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center"
              >
                <p className="text-xl font-medium text-white">{filteredImages[selectedImage].alt}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
