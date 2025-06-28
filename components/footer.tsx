"use client"

import type { Locale } from "@/lib/i18n"
import { getTranslation } from "@/lib/i18n/translations"
import { getPathWithLocale, defaultLocale } from "@/lib/i18n"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowUp } from "lucide-react"

interface FooterProps {
  locale?: Locale
}

export function Footer({ locale = defaultLocale }: FooterProps) {
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(locale, key)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navItems = [
    { name: t("home"), href: getPathWithLocale("/", locale) },
    { name: t("about"), href: getPathWithLocale("/hakkimizda", locale) },
    { name: t("menu"), href: getPathWithLocale("/menu", locale) },
    { name: t("gallery"), href: getPathWithLocale("/galeri", locale) },
    { name: t("contact"), href: getPathWithLocale("/iletisim", locale) },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold text-white">CENNET</h3>
            <p className="mt-4">
              {locale === "tr"
                ? "Akyaka'nın kalbinde, eşsiz lezzetler ve muhteşem manzara ile unutulmaz bir deneyim sunuyoruz."
                : locale === "de"
                  ? "Im Herzen von Akyaka bieten wir ein unvergessliches Erlebnis mit einzigartigen Aromen und einer herrlichen Aussicht."
                  : "In the heart of Akyaka, we offer an unforgettable experience with unique flavors and a magnificent view."}
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="rounded-full bg-gray-800 p-2 transition-colors hover:bg-turquoise-500"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-800 p-2 transition-colors hover:bg-turquoise-500"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-800 p-2 transition-colors hover:bg-turquoise-500"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">{t("quickLinks")}</h3>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="transition-colors hover:text-turquoise-400">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">{t("workingHoursTitle")}</h3>
            <ul className="mt-4 space-y-2">
              <li>{t("workingHoursWeekdays")}</li>
              <li>{t("workingHoursWeekends")}</li>
              <li className="font-medium text-turquoise-400">{t("reservationRecommended")}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">{t("contact")}</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-turquoise-400" />
                <span>Akyaka Mah. Cennet Cad. No:123, Muğla, Türkiye</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-turquoise-400" />
                <span>+90 532 236 75 39</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-turquoise-400" />
                <span>info@cennetrestaurant.com.tr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative mt-12 border-t border-gray-800 pt-8 text-center">
          <button
            onClick={scrollToTop}
            className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-turquoise-500 text-white transition-colors hover:bg-turquoise-600"
            aria-label="Yukarı çık"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
          <p>
            &copy; {currentYear} Cennet Restaurant Akyaka. {t("copyright")}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            <a href="#" className="hover:text-turquoise-400">
              {t("privacyPolicy")}
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-turquoise-400">
              {t("termsOfService")}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

// Aynı zamanda varsayılan dışa aktarma olarak da tanımlayalım
export default Footer
