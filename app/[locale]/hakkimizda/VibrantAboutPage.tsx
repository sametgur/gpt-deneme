"use client"

import { useTranslations } from "@/hooks/use-translations"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import type { Locale } from "@/lib/i18n"

type Props = {
  params: { locale: Locale }
}

// Sabit çeviriler
const aboutTranslations = {
  tr: {
    "about.title": "Hakkımızda",
    "about.subtitle": "Cennet Restaurant'ın Hikayesi",
    "about.tabs.story": "Hikayemiz",
    "about.tabs.values": "Değerlerimiz",
    "about.story.title": "Hikayemiz",
    "about.story.p1":
      "Cennet Restaurant, 1995 yılında Akyaka'nın eşsiz doğal güzellikleri içerisinde, Azmak Nehri'nin kıyısında kurulmuştur. Kurucumuz Kemal Şahin, deniz ürünlerine olan tutkusu ve misafirperverliği ile kısa sürede bölgenin en sevilen restoranlarından biri haline gelmiştir.",
    "about.story.p2":
      "Yıllar içinde büyüyen ve gelişen restoranımız, bugün ikinci ve üçüncü nesil aile üyeleri tarafından aynı özen ve tutkuyla işletilmeye devam etmektedir.",
    "about.mission.title": "Misyonumuz",
    "about.mission.description":
      "Misafirlerimize sadece bir yemek değil, tüm duyularına hitap eden eşsiz bir deneyim sunmak. Taze ve kaliteli malzemelerle hazırlanan lezzetli yemekler, profesyonel ve samimi hizmet anlayışı ve eşsiz manzara eşliğinde unutulmaz anlar yaşatmak.",
    "about.location.title": "Konumumuz",
    "about.location.description":
      "Akyaka'nın kalbinde, Azmak Nehri'nin denizle buluştuğu noktada yer alan restoranımız, eşsiz manzarası ve doğayla iç içe atmosferiyle misafirlerimize unutulmaz bir deneyim sunuyor.",
    "about.cuisine.title": "Mutfağımız",
    "about.cuisine.description":
      "Ege ve Akdeniz mutfağının en seçkin lezzetlerini, taze deniz ürünleri ve yerel malzemelerle harmanlayarak sunuyoruz. Şeflerimiz, geleneksel tarifleri modern dokunuşlarla yeniden yorumluyor.",
    "about.values.title": "Değerlerimiz",
    "about.values.sustainable.title": "Sürdürülebilirlik",
    "about.values.sustainable.description":
      "Doğaya saygılı uygulamalarımız ve yerel üreticilerle işbirliğimiz sayesinde çevresel etkimizi en aza indiriyoruz.",
    "about.values.community.title": "Toplum",
    "about.values.community.description":
      "Yerel toplumu destekliyor, bölge ekonomisine katkıda bulunuyor ve kültürel değerleri yaşatıyoruz.",
    "about.values.quality.title": "Kalite",
    "about.values.quality.description":
      "En taze ve kaliteli malzemeleri kullanarak, her tabağı bir sanat eseri gibi hazırlıyoruz.",
    "about.values.experience.title": "Deneyim",
    "about.values.experience.description":
      "Misafirlerimize sadece bir yemek değil, tüm duyularına hitap eden unutulmaz bir deneyim sunuyoruz.",
    "about.commitment.title": "Taahhüdümüz",
    "about.commitment.p1":
      "Cennet Restaurant olarak, misafirlerimize en kaliteli hizmeti sunmak için sürekli kendimizi geliştiriyoruz.",
    "about.commitment.p2":
      "Sürdürülebilir uygulamalarımız, yerel üreticilerle işbirliğimiz ve çevreye duyarlı yaklaşımımızla, gelecek nesillere daha iyi bir dünya bırakmayı hedefliyoruz.",
    "about.testimonials.title": "Misafir Yorumları",
    "about.testimonials.quote1":
      "Akyaka'da yediğim en lezzetli yemekler ve en güzel manzara. Kesinlikle tekrar geleceğim!",
    "about.testimonials.quote2":
      "Incredible food and service. The seafood was the freshest I've ever had. A must-visit when in Akyaka!",
    "about.testimonials.quote3":
      "Ein wunderbares Restaurant mit ausgezeichnetem Essen und einem atemberaubenden Blick. Sehr zu empfehlen!",
    "about.visit.title": "Bizi Ziyaret Edin",
    "about.visit.description":
      "Akyaka'nın kalbinde, Azmak Nehri'nin denizle buluştuğu noktada yer alan Cennet Restaurant, eşsiz manzarası ve lezzetleriyle sizleri bekliyor.",
    "about.visit.cta": "İletişime Geçin",
  },
  en: {
    "about.title": "About Us",
    "about.subtitle": "The Story of Cennet Restaurant",
    "about.tabs.story": "Our Story",
    "about.tabs.values": "Our Values",
    "about.story.title": "Our Story",
    "about.story.p1":
      "Cennet Restaurant was established in 1995 on the banks of the Azmak River, amidst the unique natural beauty of Akyaka. Our founder, Kemal Şahin, quickly made it one of the most beloved restaurants in the region with his passion for seafood and hospitality.",
    "about.story.p2":
      "Our restaurant, which has grown and developed over the years, continues to be operated with the same care and passion by second and third generation family members today.",
    "about.mission.title": "Our Mission",
    "about.mission.description":
      "To provide our guests not just a meal, but a unique experience that appeals to all their senses. To create unforgettable moments with delicious food prepared with fresh and quality ingredients, professional and friendly service, and a unique view.",
    "about.location.title": "Our Location",
    "about.location.description":
      "Located in the heart of Akyaka, at the point where the Azmak River meets the sea, our restaurant offers an unforgettable experience to our guests with its unique view and atmosphere intertwined with nature.",
    "about.cuisine.title": "Our Cuisine",
    "about.cuisine.description":
      "We present the most distinguished flavors of Aegean and Mediterranean cuisine, blended with fresh seafood and local ingredients. Our chefs reinterpret traditional recipes with modern touches.",
    "about.values.title": "Our Values",
    "about.values.sustainable.title": "Sustainability",
    "about.values.sustainable.description":
      "We minimize our environmental impact through our environmentally friendly practices and cooperation with local producers.",
    "about.values.community.title": "Community",
    "about.values.community.description":
      "We support the local community, contribute to the regional economy, and keep cultural values alive.",
    "about.values.quality.title": "Quality",
    "about.values.quality.description":
      "Using the freshest and highest quality ingredients, we prepare each dish like a work of art.",
    "about.values.experience.title": "Experience",
    "about.values.experience.description":
      "We offer our guests not just a meal, but an unforgettable experience that appeals to all their senses.",
    "about.commitment.title": "Our Commitment",
    "about.commitment.p1":
      "As Cennet Restaurant, we continuously improve ourselves to provide the highest quality service to our guests.",
    "about.commitment.p2":
      "With our sustainable practices, cooperation with local producers, and environmentally conscious approach, we aim to leave a better world for future generations.",
    "about.testimonials.title": "Guest Reviews",
    "about.testimonials.quote1":
      "The most delicious food and the most beautiful view I've had in Akyaka. I will definitely come back!",
    "about.testimonials.quote2":
      "Incredible food and service. The seafood was the freshest I've ever had. A must-visit when in Akyaka!",
    "about.testimonials.quote3":
      "Ein wunderbares Restaurant mit ausgezeichnetem Essen und einem atemberaubenden Blick. Sehr zu empfehlen!",
    "about.visit.title": "Visit Us",
    "about.visit.description":
      "Located in the heart of Akyaka, at the point where the Azmak River meets the sea, Cennet Restaurant awaits you with its unique view and flavors.",
    "about.visit.cta": "Contact Us",
  },
  de: {
    "about.title": "Über Uns",
    "about.subtitle": "Die Geschichte des Cennet Restaurants",
    "about.tabs.story": "Unsere Geschichte",
    "about.tabs.values": "Unsere Werte",
    "about.story.title": "Unsere Geschichte",
    "about.story.p1":
      "Das Cennet Restaurant wurde 1995 am Ufer des Azmak-Flusses inmitten der einzigartigen Naturschönheit von Akyaka gegründet. Unser Gründer, Kemal Şahin, machte es mit seiner Leidenschaft für Meeresfrüchte und Gastfreundschaft schnell zu einem der beliebtesten Restaurants der Region.",
    "about.story.p2":
      "Unser Restaurant, das im Laufe der Jahre gewachsen und sich entwickelt hat, wird heute mit der gleichen Sorgfalt und Leidenschaft von Familienmitgliedern der zweiten und dritten Generation weitergeführt.",
    "about.mission.title": "Unsere Mission",
    "about.mission.description":
      "Unseren Gästen nicht nur eine Mahlzeit, sondern ein einzigartiges Erlebnis zu bieten, das alle ihre Sinne anspricht. Unvergessliche Momente zu schaffen mit köstlichem Essen aus frischen und hochwertigen Zutaten, professionellem und freundlichem Service und einer einzigartigen Aussicht.",
    "about.location.title": "Unser Standort",
    "about.location.description":
      "Im Herzen von Akyaka, an dem Punkt, wo der Azmak-Fluss auf das Meer trifft, bietet unser Restaurant unseren Gästen mit seiner einzigartigen Aussicht und der mit der Natur verflochtenen Atmosphäre ein unvergessliches Erlebnis.",
    "about.cuisine.title": "Unsere Küche",
    "about.cuisine.description":
      "Wir präsentieren die erlesensten Aromen der ägäischen und mediterranen Küche, gemischt mit frischen Meeresfrüchten und lokalen Zutaten. Unsere Köche interpretieren traditionelle Rezepte mit modernen Akzenten neu.",
    "about.values.title": "Unsere Werte",
    "about.values.sustainable.title": "Nachhaltigkeit",
    "about.values.sustainable.description":
      "Wir minimieren unsere Umweltauswirkungen durch umweltfreundliche Praktiken und Zusammenarbeit mit lokalen Produzenten.",
    "about.values.community.title": "Gemeinschaft",
    "about.values.community.description":
      "Wir unterstützen die lokale Gemeinschaft, tragen zur regionalen Wirtschaft bei und halten kulturelle Werte am Leben.",
    "about.values.quality.title": "Qualität",
    "about.values.quality.description":
      "Mit den frischesten und hochwertigsten Zutaten bereiten wir jedes Gericht wie ein Kunstwerk zu.",
    "about.values.experience.title": "Erlebnis",
    "about.values.experience.description":
      "Wir bieten unseren Gästen nicht nur eine Mahlzeit, sondern ein unvergessliches Erlebnis, das alle ihre Sinne anspricht.",
    "about.commitment.title": "Unser Engagement",
    "about.commitment.p1":
      "Als Cennet Restaurant verbessern wir uns kontinuierlich, um unseren Gästen den höchsten Qualitätsservice zu bieten.",
    "about.commitment.p2":
      "Mit unseren nachhaltigen Praktiken, der Zusammenarbeit mit lokalen Produzenten und unserem umweltbewussten Ansatz wollen wir zukünftigen Generationen eine bessere Welt hinterlassen.",
    "about.testimonials.title": "Gästebewertungen",
    "about.testimonials.quote1":
      "Das köstlichste Essen und die schönste Aussicht, die ich in Akyaka hatte. Ich werde definitiv wiederkommen!",
    "about.testimonials.quote2":
      "Incredible food and service. The seafood was the freshest I've ever had. A must-visit when in Akyaka!",
    "about.testimonials.quote3":
      "Ein wunderbares Restaurant mit ausgezeichnetem Essen und einem atemberaubenden Blick. Sehr zu empfehlen!",
    "about.visit.title": "Besuchen Sie Uns",
    "about.visit.description":
      "Im Herzen von Akyaka, an dem Punkt, wo der Azmak-Fluss auf das Meer trifft, erwartet Sie das Cennet Restaurant mit seiner einzigartigen Aussicht und seinen Aromen.",
    "about.visit.cta": "Kontaktieren Sie Uns",
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function VibrantAboutPage({ params }: Props) {
  const { locale } = useTranslations(params.locale)
  const [activeTab, setActiveTab] = useState("story")

  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Çeviri fonksiyonu - doğrudan sabit çevirilerden alıyor
  const t = (key: string) => {
    const safeLocale = params.locale || "tr"
    try {
      // Sabit çevirilerden al
      return (
        aboutTranslations[safeLocale as keyof typeof aboutTranslations]?.[key as keyof typeof aboutTranslations.tr] ||
        key
      )
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error)
      // Hata durumunda Türkçe çeviriyi dene
      return aboutTranslations.tr[key as keyof typeof aboutTranslations.tr] || key
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/turkish-restaurant-wooden-interior.png"
            alt="Cennet Restaurant Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-red-900/50" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">{t("about.title")}</h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto drop-shadow-md">{t("about.subtitle")}</p>
          </motion.div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["story", "values"].map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-amber-500 to-red-500 text-white shadow-lg"
                  : "bg-white text-gray-700 shadow hover:shadow-md"
              }`}
            >
              {t(`about.tabs.${tab}`)}
            </motion.button>
          ))}
        </div>

        {/* Our Story Section */}
        {activeTab === "story" && (
          <motion.div
            ref={storyRef}
            initial="hidden"
            animate={storyInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src="/chef-seafood-kitchen.png"
                    alt="Chef preparing seafood"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <h2 className="text-3xl font-bold text-amber-800 mb-4">{t("about.story.title")}</h2>
                  <p className="text-gray-700 mb-4">{t("about.story.p1")}</p>
                  <p className="text-gray-700">{t("about.story.p2")}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl shadow-xl p-8 mb-12"
            >
              <h2 className="text-3xl font-bold text-amber-800 mb-4 text-center">{t("about.mission.title")}</h2>
              <p className="text-gray-700 text-center max-w-3xl mx-auto">{t("about.mission.description")}</p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="h-48 relative">
                    <Image
                      src="/akyaka-river-mountains.png"
                      alt="Akyaka River and Mountains"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-amber-800 mb-2">{t("about.location.title")}</h3>
                    <p className="text-gray-700">{t("about.location.description")}</p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="h-48 relative">
                    <Image src="/turkish-meze-variety.png" alt="Turkish Meze Variety" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-amber-800 mb-2">{t("about.cuisine.title")}</h3>
                    <p className="text-gray-700">{t("about.cuisine.description")}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Our Values Section */}
        {activeTab === "values" && (
          <motion.div
            ref={valuesRef}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center text-amber-800 mb-12">
              {t("about.values.title")}
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  icon: "🌱",
                  title: "about.values.sustainable.title",
                  description: "about.values.sustainable.description",
                  color: "from-green-400 to-emerald-500",
                },
                {
                  icon: "🤝",
                  title: "about.values.community.title",
                  description: "about.values.community.description",
                  color: "from-blue-400 to-indigo-500",
                },
                {
                  icon: "🍽️",
                  title: "about.values.quality.title",
                  description: "about.values.quality.description",
                  color: "from-amber-400 to-orange-500",
                },
                {
                  icon: "💫",
                  title: "about.values.experience.title",
                  description: "about.values.experience.description",
                  color: "from-purple-400 to-pink-500",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300"
                >
                  <div className={`h-24 bg-gradient-to-r ${value.color} flex items-center justify-center`}>
                    <span className="text-5xl">{value.icon}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{t(value.title)}</h3>
                    <p className="text-gray-700">{t(value.description)}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-8">
                  <h3 className="text-3xl font-bold text-amber-800 mb-4">{t("about.commitment.title")}</h3>
                  <p className="text-gray-700 mb-4">{t("about.commitment.p1")}</p>
                  <p className="text-gray-700">{t("about.commitment.p2")}</p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/fresh-fish-ice.png"
                    alt="Fresh fish on ice"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Testimonials */}
      <div className="bg-gradient-to-r from-amber-500 to-red-500 py-16 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-white mb-12"
          >
            {t("about.testimonials.title")}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "about.testimonials.quote1",
                author: "Ayşe K.",
                location: "İstanbul",
              },
              {
                quote: "about.testimonials.quote2",
                author: "John D.",
                location: "London",
              },
              {
                quote: "about.testimonials.quote3",
                author: "Hans M.",
                location: "Berlin",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-6"
              >
                <div className="text-amber-500 text-4xl mb-4">"</div>
                <p className="text-gray-700 mb-6 italic">{t(testimonial.quote)}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-gray-800">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image
                src="/outdoor-restaurant-sea-view.png"
                alt="Outdoor restaurant with sea view"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <h3 className="text-3xl font-bold text-amber-800 mb-4">{t("about.visit.title")}</h3>
              <p className="text-gray-700 mb-6">{t("about.visit.description")}</p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/iletisim"
                className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500 to-red-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                {t("about.visit.cta")}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
