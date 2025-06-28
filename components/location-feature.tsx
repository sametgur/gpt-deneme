"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { MapPin, Clock, Phone, Mail } from "lucide-react"
import type { Locale } from "@/lib/i18n"
import { translations } from "@/lib/i18n/translations"
import SafeImage from "./safe-image"

interface LocationFeatureProps {
  locale: Locale
}

export default function LocationFeature({ locale }: LocationFeatureProps) {
  const t = (key: keyof (typeof translations)[typeof locale]) => translations[locale][key] || key
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} className="relative overflow-hidden bg-gray-900 py-24 text-white">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <SafeImage
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6268_2b1cd5e4-5d47-4ff3-9f84-6f21acb084eb.jpg-UGrMufDqeFK2GfoBbgM1s91i42cmZD.jpeg"
          alt="Cennet Restaurant Akyaka"
          fill
          className="object-cover opacity-30"
          fallbackSrc="/cozy-italian-restaurant.png"
        />
      </div>

      <motion.div style={{ opacity, scale }} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">{t("visitUs")}</h2>
            <div className="mt-2 h-1 w-20 bg-amber-500 md:h-2 md:w-32"></div>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">{t("visitUsSubtitle")}</p>

            <div className="mt-8 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <MapPin className="mr-4 h-6 w-6 shrink-0 text-amber-500" />
                <div>
                  <h3 className="text-lg font-semibold">{t("address")}</h3>
                  <p className="mt-1 text-gray-300">Akyaka Mah. Cennet Cad. No:123, Muğla, Türkiye</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <Clock className="mr-4 h-6 w-6 shrink-0 text-amber-500" />
                <div>
                  <h3 className="text-lg font-semibold">{t("workingHours")}</h3>
                  <p className="mt-1 text-gray-300">{t("workingHoursWeekdays")}</p>
                  <p className="text-gray-300">{t("workingHoursWeekends")}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <Phone className="mr-4 h-6 w-6 shrink-0 text-amber-500" />
                <div>
                  <h3 className="text-lg font-semibold">{t("phone")}</h3>
                  <p className="mt-1 text-gray-300">{t("phoneNumber")}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <Mail className="mr-4 h-6 w-6 shrink-0 text-amber-500" />
                <div>
                  <h3 className="text-lg font-semibold">{t("email")}</h3>
                  <p className="mt-1 text-gray-300">info@cennetrestaurant.com.tr</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="relative h-[400px] overflow-hidden rounded-xl md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1630266.0552388846!2d28.340387!3d37.054781!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bf9fc1b997f155%3A0x84fe5d1b4d87187e!2sCennet%20Restaurant%20-%20Azmak%20Ba%C5%9F%C4%B1%20Akyaka!5e0!3m2!1str!2sus!4v1746381915782!5m2!1str!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
