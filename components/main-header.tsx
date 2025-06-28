"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import LanguageSwitcher from "@/components/language-switcher"
import { useTranslations } from "@/hooks/use-translations"
import { getPathWithLocale } from "@/lib/i18n"

export function MainHeader({ locale = "tr" }: { locale?: string }) {
  const { t } = useTranslations(locale)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { key: "home", href: "/" },
    { key: "about", href: "/hakkimizda" },
    { key: "menu", href: "/menu" },
    { key: "gallery", href: "/galeri" },
    { key: "blog", href: "/blog" },
    { key: "contact", href: "/iletisim" },
  ]

  const isActive = (path: string) => {
    if (path === getPathWithLocale("/", locale)) {
      return pathname === path || pathname === `/${locale}`
    }
    return pathname.startsWith(path)
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled || pathname !== "/" ? "bg-white py-2 shadow-md" : "bg-transparent py-3"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={getPathWithLocale("/", locale)} className="flex items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-16 w-40 overflow-hidden"
          >
            <Image src="/cennet-logo.png" alt="Cennet Restaurant Logo" fill className="object-contain" priority />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={getPathWithLocale(item.href, locale)}
              className={`text-sm font-medium transition-colors ${
                isActive(getPathWithLocale(item.href, locale))
                  ? "text-teal-600"
                  : scrolled || pathname !== "/"
                    ? "text-gray-700 hover:text-teal-600"
                    : "text-white hover:text-teal-200"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center space-x-4 md:flex">
          <LanguageSwitcher />
          <motion.a
            href="tel:+90 532 236 75 39"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`flex items-center ${scrolled || pathname !== "/" ? "text-teal-600" : "text-white"}`}
          >
            <Phone className="mr-2 h-4 w-4" />
            <span>+90 532 236 75 39</span>
          </motion.a>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Button
              className={`${
                scrolled || pathname !== "/"
                  ? "bg-teal-500 text-white hover:bg-teal-600"
                  : "bg-white text-gray-900 hover:bg-white/90"
              }`}
              onClick={() => document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t("reservation")}
            </Button>
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-2 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-md p-2 ${
              scrolled || pathname !== "/" ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Ana menüyü aç</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="space-y-1 bg-white px-2 pb-3 pt-2 shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={getPathWithLocale(item.href, locale)}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    isActive(getPathWithLocale(item.href, locale))
                      ? "bg-teal-50 text-teal-600"
                      : "text-gray-900 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
              <div className="mt-4 flex flex-col space-y-2 px-3">
                <a href="tel:+90 532 236 75 39" className="flex items-center text-teal-600">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>+90 532 236 75 39</span>
                </a>
                <Button
                  className="w-full bg-teal-500 hover:bg-teal-600"
                  onClick={() => {
                    document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" })
                    setIsMenuOpen(false)
                  }}
                >
                  {t("reservation")}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default MainHeader
