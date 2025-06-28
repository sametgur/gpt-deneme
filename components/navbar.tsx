"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white py-2 shadow-md" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Image
              src="/cennet-logo.png"
              alt="Cennet Restaurant Logo"
              width={120}
              height={70}
              className="h-auto w-auto"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-8 md:flex">
          {[
            { name: "Ana Sayfa", href: "#" },
            { name: "Hakkımızda", href: "#" },
            { name: "Menü", href: "#menu" },
            { name: "Galeri", href: "#" },
            { name: "İletişim", href: "#" },
            { name: "Blog", href: "#" },
          ].map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-gray-700 hover:text-turquoise-600" : "text-white hover:text-turquoise-200"
              }`}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        <div className="hidden items-center space-x-4 md:flex">
          <motion.a
            href="tel:+902521234567"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`flex items-center ${scrolled ? "text-gray-700" : "text-white"}`}
          >
            <Phone className="mr-2 h-4 w-4" />
            <span>+90 252 123 45 67</span>
          </motion.a>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Button
              className={`${
                scrolled
                  ? "bg-turquoise-500 text-white hover:bg-turquoise-600"
                  : "bg-white text-gray-900 hover:bg-white/90"
              }`}
              onClick={() => document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" })}
            >
              Rezervasyon
            </Button>
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-md p-2 ${
              scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
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
              {[
                { name: "Ana Sayfa", href: "#" },
                { name: "Hakkımızda", href: "#" },
                { name: "Menü", href: "#menu" },
                { name: "Galeri", href: "#" },
                { name: "İletişim", href: "#" },
                { name: "Blog", href: "#" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-4 flex flex-col space-y-2 px-3">
                <a href="tel:+902521234567" className="flex items-center text-gray-700">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>+90 252 123 45 67</span>
                </a>
                <Button
                  className="w-full bg-turquoise-500 hover:bg-turquoise-600"
                  onClick={() => {
                    document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" })
                    setIsMenuOpen(false)
                  }}
                >
                  Rezervasyon
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
