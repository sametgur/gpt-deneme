"use client"
import Image from "next/image"
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Twitter, Send } from "lucide-react"
import type { Locale } from "@/lib/i18n"
import { motion } from "framer-motion"

import MainHeader from "@/components/main-header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

type Props = {
  params: { locale: Locale }
}

export default function ContactPageClient({ params }: Props) {
  // Ensure locale is one of the supported locales, default to 'tr' if not
  const locale = params?.locale && ["tr", "en", "de"].includes(params.locale) ? params.locale : "tr"

  const contactContent = {
    tr: {
      title: "İletişim",
      subtitle: "Bize ulaşın, sorularınızı yanıtlayalım, rezervasyonunuzu alalım",
      contactInfo: "İletişim Bilgileri",
      address: "Adres",
      addressLine1: "Akyaka Mah. Cennet Cad. No:123, Muğla, Türkiye",
      addressLine2: "Azmak Nehri üzerinde, Akyaka merkeze 5 dakika yürüme mesafesinde",
      workingHours: "Çalışma Saatleri",
      workingHoursWeekdays: "Pazartesi - Cuma: 09:00 - 23:00",
      workingHoursWeekends: "Cumartesi - Pazar: 10:00 - 00:00",
      phone: "Telefon",
      phoneNumber2: "+90 532 236 75 39 (Rezervasyon)",
      email: "E-posta",
      emailAddress1: "info@cennetrestaurant.com.tr",
      emailAddress2: "rezervasyon@cennetrestaurant.com.tr",
      socialMedia: "Sosyal Medya",
      writeToUs: "Bize Yazın",
      fullName: "İsim Soyisim",
      subject: "Konu",
      message: "Mesajınız",
      send: "Gönder",
      findUs: "Bizi Bulun",
      findUsText: "Akyaka'nın kalbinde, Azmak Nehri üzerinde yer alan restoranımıza kolayca ulaşabilirsiniz.",
    },
    en: {
      title: "Contact",
      subtitle: "Contact us, let us answer your questions, take your reservation",
      contactInfo: "Contact Information",
      address: "Address",
      addressLine1: "Akyaka Mah. Cennet Cad. No:123, Muğla, Turkey",
      addressLine2: "On the Azmak River, 5 minutes walking distance from Akyaka center",
      workingHours: "Working Hours",
      workingHoursWeekdays: "Monday - Friday: 09:00 - 23:00",
      workingHoursWeekends: "Saturday - Sunday: 10:00 - 00:00",
      phone: "Phone",
      phoneNumber2: "+90 532 236 75 39 (Reservation)",
      email: "Email",
      emailAddress1: "info@cennetrestaurant.com.tr",
      emailAddress2: "reservation@cennetrestaurant.com.tr",
      socialMedia: "Social Media",
      writeToUs: "Write to Us",
      fullName: "Full Name",
      subject: "Subject",
      message: "Your Message",
      send: "Send",
      findUs: "Find Us",
      findUsText: "You can easily reach our restaurant located on the Azmak River in the heart of Akyaka.",
    },
    de: {
      title: "Kontakt",
      subtitle: "Kontaktieren Sie uns, lassen Sie uns Ihre Fragen beantworten, nehmen Sie Ihre Reservierung entgegen",
      contactInfo: "Kontaktinformationen",
      address: "Adresse",
      addressLine1: "Akyaka Mah. Cennet Cad. No:123, Muğla, Türkei",
      addressLine2: "Am Azmak-Fluss, 5 Gehminuten vom Zentrum von Akyaka entfernt",
      workingHours: "Öffnungszeiten",
      workingHoursWeekdays: "Montag - Freitag: 09:00 - 23:00",
      workingHoursWeekends: "Samstag - Sonntag: 10:00 - 00:00",
      phone: "Telefon",
      phoneNumber2: "+90 532 236 75 39 (Reservierung)",
      email: "E-Mail",
      emailAddress1: "info@cennetrestaurant.com.tr",
      emailAddress2: "rezervasyon@cennetrestaurant.com.tr",
      socialMedia: "Soziale Medien",
      writeToUs: "Schreiben Sie uns",
      fullName: "Vollständiger Name",
      subject: "Betreff",
      message: "Ihre Nachricht",
      send: "Senden",
      findUs: "Finden Sie uns",
      findUsText: "Sie können unser Restaurant am Azmak-Fluss im Herzen von Akyaka leicht erreichen.",
    },
  }

  // Ensure we have content for the locale, fallback to Turkish if not
  const content = contactContent[locale] || contactContent.tr

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <MainHeader />

      {/* Page Header */}
      <section className="relative pt-24">
        <div className="relative h-[50vh] w-full overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6268_2b1cd5e4-5d47-4ff3-9f84-6f21acb084eb.jpg-UGrMufDqeFK2GfoBbgM1s91i42cmZD.jpeg"
            alt={content.title}
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0">{/* Intentionally left blank */}</div>
          {/* Tabii, hakkımızda, galeri ve iletişim sayfalarını daha renkli ve cıvıl cıvıl bir şekilde yeniden tasarlayacağım! */}
        </div>
      </section>
      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-lg shadow-md bg-white"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-5">{content.writeToUs}</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  {content.fullName}
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  {content.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  {content.message}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                ></textarea>
              </div>
              <div>
                <Button type="submit" className="w-full">
                  {content.send} <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-lg shadow-md bg-white"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-5">{content.contactInfo}</h2>
            <div className="space-y-4">
              {/* Address */}
              <div>
                <h3 className="font-semibold text-gray-700 flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-gray-500" /> {content.address}
                </h3>
                <p className="text-gray-600">{content.addressLine1}</p>
                <p className="text-gray-600">{content.addressLine2}</p>
              </div>

              {/* Working Hours */}
              <div>
                <h3 className="font-semibold text-gray-700 flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-gray-500" /> {content.workingHours}
                </h3>
                <p className="text-gray-600">{content.workingHoursWeekdays}</p>
                <p className="text-gray-600">{content.workingHoursWeekends}</p>
              </div>

              {/* Phone */}
              <div>
                <h3 className="font-semibold text-gray-700 flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-gray-500" /> {content.phone}
                </h3>
                <p className="text-gray-600">{content.phoneNumber2}</p>
              </div>

              {/* Email */}
              <div>
                <h3 className="font-semibold text-gray-700 flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-gray-500" /> {content.email}
                </h3>
                <p className="text-gray-600">{content.emailAddress1}</p>
                <p className="text-gray-600">{content.emailAddress2}</p>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-gray-700">{content.socialMedia}</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Find Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-5">{content.findUs}</h2>
          <p className="text-gray-600 mb-8">{content.findUsText}</p>
          {/* Replace with actual map embed or image */}
          <div className="h-96 bg-gray-200 rounded-lg shadow-md flex items-center justify-center overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.113401726693!2d28.340387399999997!3d37.054780699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bf9fc1b997f155%3A0x84fe5d1b4d87187e!2sCennet%20Restaurant%20-%20Azmak%20Ba%C5%9F%C4%B1%20Akyaka!5e0!3m2!1str!2str!4v1750180050774!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cennet Restaurant Konumu"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
