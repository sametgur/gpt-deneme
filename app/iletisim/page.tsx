import type { Metadata } from "next"
import Image from "next/image"
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react"

import MainHeader from "@/components/main-header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { defaultLocale } from "@/lib/i18n"

export const metadata: Metadata = {
  title: "İletişim | Cennet Restaurant Akyaka",
  description: "Cennet Restaurant ile iletişime geçin. Adres, telefon, e-posta bilgilerimiz ve çalışma saatlerimiz.",
  keywords: "Cennet Restaurant iletişim, Akyaka restoran adres, Cennet Restaurant telefon, Akyaka yemek rezervasyon",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <MainHeader />

      {/* Page Header */}
      <section className="relative pt-24">
        <div className="relative h-[40vh] w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6268_2b1cd5e4-5d47-4ff3-9f84-6f21acb084eb.jpg-UGrMufDqeFK2GfoBbgM1s91i42cmZD.jpeg"
            alt="Cennet Restaurant İletişim"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="mb-4 font-serif text-5xl font-bold tracking-tight md:text-6xl">İletişim</h1>
            <p className="max-w-2xl text-lg md:text-xl">
              Bize ulaşın, sorularınızı yanıtlayalım, rezervasyonunuzu alalım
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900">İletişim Bilgileri</h2>
              <div className="mt-2 h-1 w-20 bg-amber-500"></div>

              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 shrink-0 text-amber-500" />
                  <div>
                    <h3 className="text-lg font-semibold">Adres</h3>
                    <p className="mt-1 text-gray-600">Akyaka Mah. Cennet Cad. No:123, Muğla, Türkiye</p>
                    <p className="mt-1 text-gray-600">
                      Azmak Nehri üzerinde, Akyaka merkeze 5 dakika yürüme mesafesinde
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="mr-4 h-6 w-6 shrink-0 text-amber-500" />
                  <div>
                    <h3 className="text-lg font-semibold">Çalışma Saatleri</h3>
                    <p className="mt-1 text-gray-600">Pazartesi - Cuma: 09:00 - 23:00</p>
                    <p className="text-gray-600">Cumartesi - Pazar: 10:00 - 00:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="mr-4 h-6 w-6 shrink-0 text-amber-500" />
                  <div>
                    <h3 className="text-lg font-semibold">Telefon</h3>
                    <p className="mt-1 text-gray-600">+90 252 123 45 67</p>
                    <p className="text-gray-600">+90 532 123 45 67 (Rezervasyon)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="mr-4 h-6 w-6 shrink-0 text-amber-500" />
                  <div>
                    <h3 className="text-lg font-semibold">E-posta</h3>
                    <p className="mt-1 text-gray-600">info@cennetrestaurant.com.tr</p>
                    <p className="text-gray-600">rezervasyon@cennetrestaurant.com.tr</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold">Sosyal Medya</h3>
                <div className="mt-4 flex space-x-4">
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-amber-500 hover:text-white"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-amber-500 hover:text-white"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-amber-500 hover:text-white"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900">Bize Yazın</h2>
              <div className="mt-2 h-1 w-20 bg-amber-500"></div>

              <form className="mt-8 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      İsim Soyisim
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      E-posta
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Konu
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  ></textarea>
                </div>
                <div>
                  <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600">
                    Gönder
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[500px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1630266.0552388846!2d28.340387!3d37.054781!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bf9fc1b997f155%3A0x84fe5d1b4d87187e!2sCennet%20Restaurant%20-%20Azmak%20Ba%C5%9F%C4%B1%20Akyaka!5e0!3m2!1str!2sus!4v1746381915782!5m2!1str!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <Footer locale={defaultLocale} />
    </div>
  )
}
