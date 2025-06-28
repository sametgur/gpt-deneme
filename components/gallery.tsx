"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6268_2b1cd5e4-5d47-4ff3-9f84-6f21acb084eb.jpg-UGrMufDqeFK2GfoBbgM1s91i42cmZD.jpeg",
      alt: "Cennet Restaurant waterside dining area",
      category: "Mekan",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8728_baliklar.jpg-TVWfUlRPXePZPxvJMg61jhNMzhvF0U.jpeg",
      alt: "Grilled fish dish",
      category: "Deniz Ürünleri",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6217_deniz_sicak.jpg-0MumAmT23XzdXMrNQ0d4bcuBTwBAat.jpeg",
      alt: "Seafood dish with shrimp",
      category: "Deniz Ürünleri",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/82_slide2.jpg-HuQ196HBptu7yEXQo7UoaqYPiohpHc.jpeg",
      alt: "Turkish breakfast spread",
      category: "Kahvaltı",
    },
    {
      src: "/placeholder.svg?height=600&width=800&query=turkish restaurant interior with wooden details",
      alt: "Restaurant interior",
      category: "Mekan",
    },
    {
      src: "/placeholder.svg?height=600&width=800&query=chef cooking seafood in restaurant kitchen",
      alt: "Chef preparing seafood",
      category: "Mutfak",
    },
    {
      src: "/placeholder.svg?height=600&width=800&query=akyaka river view with mountains",
      alt: "Akyaka river view",
      category: "Akyaka",
    },
    {
      src: "/placeholder.svg?height=600&width=800&query=turkish desserts baklava and kunefe",
      alt: "Turkish desserts",
      category: "Tatlılar",
    },
  ]

  const handlePrev = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
  }

  const handleNext = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") setSelectedImage(null)
    if (e.key === "ArrowLeft") handlePrev()
    if (e.key === "ArrowRight") handleNext()
  }

  return (
    <section className="bg-gray-50 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Galeri</h2>
          <div className="mx-auto mt-2 h-1 w-20 bg-amber-500 md:h-2 md:w-32"></div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Restoranımızdan, Akyaka'dan ve özel lezzetlerimizden kareler
          </p>
        </motion.div>

        <div
          ref={galleryRef}
          className="mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`group relative cursor-pointer overflow-hidden rounded-xl ${
                index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <div className={`relative ${index === 0 ? "h-80 sm:h-[500px]" : "h-64"}`}>
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-gray-900">
                    {image.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/80"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </button>

              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/80"
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrev()
                }}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/80"
                onClick={(e) => {
                  e.stopPropagation()
                  handleNext()
                }}
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative h-[80vh] w-full max-w-5xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={images[selectedImage].src || "/placeholder.svg"}
                  alt={images[selectedImage].alt}
                  fill
                  className="object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-center text-white">
                  <p className="text-lg font-medium">{images[selectedImage].alt}</p>
                  <p className="text-sm text-gray-300">{images[selectedImage].category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
