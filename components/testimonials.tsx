"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Star } from "lucide-react"
import type { Locale } from "@/lib/i18n"
import { translations } from "@/lib/i18n/translations"

interface TestimonialsProps {
  locale?: Locale
}

export default function Testimonials({ locale = "tr" }: TestimonialsProps) {
  // Güvenli bir locale değeri kullan
  const safeLocale = (locale || "tr") as Locale

  // Güvenli çeviri fonksiyonu
  const t = (key: string) => {
    try {
      return translations[safeLocale][key as keyof (typeof translations)[typeof safeLocale]] || key
    } catch (error) {
      return key
    }
  }

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const testimonials = {
    tr: [
      {
        name: "Ahmet Yılmaz",
        role: "İstanbul",
        content:
          "Akyaka'da keşfettiğimiz en güzel mekan! Suyun üzerindeki konumu ile eşsiz bir atmosfere sahip. Izgara çipura muhteşemdi, servis kalitesi ve personelin ilgisi üst düzeydi. Kesinlikle tekrar geleceğiz.",
        rating: 5,
        image: "/placeholder.svg?key=g8fx6",
      },
      {
        name: "Ayşe Kaya",
        role: "Ankara",
        content:
          "Ailece gittiğimiz en güzel restoranlardan biri. Çocuklar için de uygun bir ortam. Serpme kahvaltısı çok zengin ve lezzetli. Akyaka'nın doğal güzelliği içinde unutulmaz bir deneyim yaşadık.",
        rating: 5,
        image: "/placeholder.svg?key=cemu3",
      },
      {
        name: "Mehmet Demir",
        role: "İzmir",
        content:
          "Akyaka'ya her geldiğimizde mutlaka uğradığımız bir mekan. Karides güveç favorim! Manzara eşsiz, yemekler taze ve lezzetli. Personel çok ilgili ve güler yüzlü. Herkese tavsiye ederim.",
        rating: 4,
        image: "/placeholder.svg?key=58cpo",
      },
    ],
    en: [
      {
        name: "John Smith",
        role: "London",
        content:
          "The best place we discovered in Akyaka! It has a unique atmosphere with its location over the water. The grilled sea bream was amazing, the service quality and staff attention were top notch. We will definitely come back.",
        rating: 5,
        image: "/placeholder.svg?key=xu2wa",
      },
      {
        name: "Emily Johnson",
        role: "New York",
        content:
          "One of the best restaurants we've been to as a family. It's also suitable for children. The Turkish breakfast spread was very rich and delicious. We had an unforgettable experience in the natural beauty of Akyaka.",
        rating: 5,
        image: "/placeholder.svg?key=hlyop",
      },
      {
        name: "Michael Brown",
        role: "Sydney",
        content:
          "A place we always visit whenever we come to Akyaka. Shrimp casserole is my favorite! The view is unique, the food is fresh and delicious. The staff is very attentive and friendly. I recommend it to everyone.",
        rating: 4,
        image: "/placeholder.svg?key=n579y",
      },
    ],
    de: [
      {
        name: "Hans Müller",
        role: "Berlin",
        content:
          "Der beste Ort, den wir in Akyaka entdeckt haben! Es hat eine einzigartige Atmosphäre mit seiner Lage über dem Wasser. Die gegrillte Dorade war erstaunlich, die Servicequalität und Aufmerksamkeit des Personals waren erstklassig. Wir werden auf jeden Fall wiederkommen.",
        rating: 5,
        image: "/placeholder.svg?key=k4c5n",
      },
      {
        name: "Anna Schmidt",
        role: "München",
        content:
          "Eines der besten Restaurants, in denen wir als Familie waren. Es ist auch für Kinder geeignet. Das türkische Frühstück war sehr reichhaltig und lecker. Wir hatten ein unvergessliches Erlebnis in der natürlichen Schönheit von Akyaka.",
        rating: 5,
        image: "/placeholder.svg?key=cv80l",
      },
      {
        name: "Thomas Weber",
        role: "Hamburg",
        content:
          "Ein Ort, den wir immer besuchen, wenn wir nach Akyaka kommen. Garnelen-Eintopf ist mein Favorit! Die Aussicht ist einzigartig, das Essen ist frisch und lecker. Das Personal ist sehr aufmerksam und freundlich. Ich empfehle es jedem.",
        rating: 4,
        image: "/placeholder.svg?key=3kf8o",
      },
    ],
  }

  // Güvenli bir şekilde testimonials'a eriş
  const currentTestimonials = testimonials[safeLocale] || testimonials.tr

  return (
    <section ref={ref} className="relative overflow-hidden bg-amber-50 py-24">
      <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-amber-300/20 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl"></div>

      <motion.div style={{ opacity, y }} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {t("guestReviews")}
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 bg-amber-500 md:h-2 md:w-32"></div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {currentTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-xl bg-white p-8 shadow-xl"
            >
              <div className="absolute -top-10 left-1/2 h-20 w-20 -translate-x-1/2 overflow-hidden rounded-full border-4 border-white shadow-lg">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-10 flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                  />
                ))}
              </div>

              <p className="mt-4 text-center text-gray-600">"{testimonial.content}"</p>

              <div className="mt-6 text-center">
                <p className="font-medium text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
