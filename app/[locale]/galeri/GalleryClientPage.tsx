"use client"
import Image from "next/image"
import type { Locale } from "@/lib/i18n"
import { translations } from "@/lib/i18n/translations"
import { motion } from "framer-motion"

import MainHeader from "@/components/main-header"
import Footer from "@/components/footer"
import GalleryComponent from "@/components/gallery-component"

type Props = {
  params: { locale: Locale }
}

export default function GalleryClientPage({ params }: Props) {
  const locale = params.locale
  const t = (key: keyof (typeof translations)[typeof locale]) => translations[locale][key] || key

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <MainHeader />

      {/* Page Header */}
      <section className="relative pt-24">
        <div className="relative h-[50vh] w-full overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6268_2b1cd5e4-5d47-4ff3-9f84-6f21acb084eb.jpg-UGrMufDqeFK2GfoBbgM1s91i42cmZD.jpeg"
            alt={t("gallery")}
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-600/30 to-amber-500/30"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4 font-serif text-5xl font-bold tracking-tight md:text-7xl drop-shadow-lg"
            >
              {t("gallery")}
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "150px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-2 bg-rose-400 mb-6"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-2xl text-lg md:text-xl drop-shadow-md"
            >
              {locale === "tr"
                ? "Restoranımızdan, lezzetlerimizden ve Akyaka'nın eşsiz manzarasından kareler"
                : locale === "de"
                  ? "Bilder von unserem Restaurant, unseren Gerichten und der einzigartigen Aussicht von Akyaka"
                  : "Images from our restaurant, our dishes and the unique view of Akyaka"}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Gallery Introduction */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-rose-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200 rounded-full translate-x-1/3 translate-y-1/3 opacity-30 blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            >
              {locale === "tr"
                ? "Görsel Yolculuğumuz"
                : locale === "de"
                  ? "Unsere visuelle Reise"
                  : "Our Visual Journey"}
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-rose-400 to-amber-500 mx-auto mt-4 mb-6"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-lg text-gray-600"
            >
              {locale === "tr"
                ? "Cennet Restaurant'ın büyüleyici dünyasını keşfedin. Lezzetli yemeklerimizden, eşsiz manzaramıza ve sıcak atmosferimize kadar her anı fotoğraflarla yakaladık."
                : locale === "de"
                  ? "Entdecken Sie die faszinierende Welt des Cennet Restaurants. Von unseren köstlichen Gerichten über unsere einzigartige Aussicht bis hin zu unserer warmen Atmosphäre haben wir jeden Moment in Bildern festgehalten."
                  : "Discover the enchanting world of Cennet Restaurant. From our delicious dishes to our unique view and warm atmosphere, we've captured every moment in photographs."}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryComponent locale={locale} />
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  )
}
