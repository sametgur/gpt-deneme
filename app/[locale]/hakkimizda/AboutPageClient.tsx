"use client"

import type { Locale } from "@/lib/i18n"
import { useTranslations } from "@/hooks/use-translations"
import Image from "next/image"
import { motion } from "framer-motion"

type Props = {
  params: { locale: Locale }
}

export default function AboutPageClient({ params }: Props) {
  const { t } = useTranslations(params.locale)

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center"
      >
        {t("about")}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-600 text-center"
      >
        {t("about.hero.subtitle")}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative h-64 w-full mt-8"
      >
        <Image src="/turkish-restaurant-wooden-interior.png" alt="About Us Image" fill className="object-cover" />
      </motion.div>
    </div>
  )
}
