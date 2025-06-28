"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

import { Button } from "@/components/ui/button"
import type { Locale } from "@/lib/i18n"
import { getTranslation } from "@/lib/i18n/translations"
import SafeImage from "./safe-image"

interface HeroSectionProps {
  locale: Locale
}

export default function HeroSection({ locale }: HeroSectionProps) {
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(locale, key)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-gray-800">
      {/* Use SafeImage instead of regular img */}
      <div className="absolute inset-0 h-full w-full">
        <SafeImage
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/adad.jpg-smu2vv1l56hogvJcgqa4sDNsbjTZiH.jpeg"
          alt="Cennet Restaurant Akyaka - Waterfront Dining"
          fill
          className="object-cover"
          fallbackSrc="/waterfront-restaurant.png"
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute -right-20 top-20 h-40 w-40 rounded-full bg-turquoise-500/30 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute -left-20 top-40 h-60 w-60 rounded-full bg-turquoise-500/20 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex justify-center"
          >
            <div className="relative">
              <SafeImage
                src="/cennet-logo.png"
                alt="Cennet Restaurant Logo"
                width={280}
                height={140}
                className="h-auto w-auto max-w-[280px] drop-shadow-lg"
                fallbackSrc="/placeholder.svg?height=140&width=280&query=restaurant logo"
              />
              <motion.div
                animate={{
                  boxShadow: [
                    "0px 0px 0px rgba(32, 178, 170, 0)",
                    "0px 0px 20px rgba(32, 178, 170, 0.5)",
                    "0px 0px 0px rgba(32, 178, 170, 0)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute inset-0 rounded-full"
              />
            </div>
          </motion.div>

          <h1 className="font-serif text-5xl font-bold tracking-tight text-white drop-shadow-lg md:text-7xl lg:text-8xl">
            {t("heroTitle")}
          </h1>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-turquoise-500 shadow-lg md:mt-6 md:h-2 md:w-40"></div>
          <p className="mt-6 text-lg text-white/90 drop-shadow-md md:text-xl lg:text-2xl">{t("heroSubtitle")}</p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-6 sm:space-y-0 md:mt-12"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden rounded-full bg-turquoise-500 px-8 py-6 text-base font-medium text-white transition-all duration-300 hover:bg-turquoise-600 hover:shadow-lg md:text-lg"
              onClick={() => document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="relative z-10">{t("makeReservation")}</span>
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group relative overflow-hidden rounded-full border-2 border-white bg-transparent px-8 py-6 text-base font-medium text-white transition-all duration-300 hover:bg-white/20 hover:shadow-lg md:text-lg"
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="relative z-10">{t("exploreMenu")}</span>
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-turquoise-500 transition-all duration-300 group-hover:w-full"></span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <span className="mb-2 text-sm font-light text-white/80">{t("explore")}</span>
          <div className="h-16 w-8 rounded-full border-2 border-white/30 p-1">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="h-2 w-2 rounded-full bg-white"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
