"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Send } from "lucide-react"
import { motion } from "framer-motion"

interface NewsletterSignupProps {
  locale?: string
}

export function NewsletterSignup({ locale = "tr" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return

    setStatus("loading")

    // Burada gerçek bir API çağrısı yapılabilir
    try {
      // Simüle edilmiş API çağrısı
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus("success")
      setEmail("")
    } catch (error) {
      setStatus("error")
    }
  }

  const title =
    locale === "tr"
      ? "Bültenimize Abone Olun"
      : locale === "de"
        ? "Abonnieren Sie unseren Newsletter"
        : "Subscribe to Our Newsletter"

  const description =
    locale === "tr"
      ? "En yeni tarifler, özel etkinlikler ve Türk mutfağı hakkında güncellemeler için bültenimize abone olun."
      : locale === "de"
        ? "Abonnieren Sie unseren Newsletter für die neuesten Rezepte, exklusive Veranstaltungen und Updates über die türkische Küche."
        : "Subscribe to our newsletter for the latest recipes, exclusive events, and updates about Turkish cuisine."

  const buttonText = locale === "tr" ? "Abone Ol" : locale === "de" ? "Abonnieren" : "Subscribe"
  const successText =
    locale === "tr" ? "Abone oldunuz!" : locale === "de" ? "Sie haben abonniert!" : "You've subscribed!"
  const errorText =
    locale === "tr" ? "Bir hata oluştu" : locale === "de" ? "Ein Fehler ist aufgetreten" : "An error occurred"
  const placeholderText =
    locale === "tr" ? "E-posta adresiniz" : locale === "de" ? "Ihre E-Mail-Adresse" : "Your email address"

  return (
    <motion.div
      className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-sm border border-amber-200 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center justify-center w-12 h-12 bg-amber-200 rounded-full">
            <Mail className="h-6 w-6 text-amber-700" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h3>
            <p className="text-sm text-amber-800/70 mt-1">
              {locale === "tr"
                ? "Ücretsiz, istediğiniz zaman abonelikten çıkabilirsiniz"
                : locale === "de"
                  ? "Kostenlos, Sie können sich jederzeit abmelden"
                  : "Free, you can unsubscribe at any time"}
            </p>
          </div>
        </div>

        <p className="text-gray-700 mb-6">{description}</p>

        {status === "success" ? (
          <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg flex items-center gap-3">
            <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{successText}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder={placeholderText}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 border-amber-200 focus:border-amber-400 bg-white"
              disabled={status === "loading"}
            />
            <Button
              type="submit"
              disabled={status === "loading"}
              className="bg-amber-500 hover:bg-amber-600 text-white flex items-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {locale === "tr" ? "Gönderiliyor..." : locale === "de" ? "Wird gesendet..." : "Sending..."}
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  {buttonText}
                </>
              )}
            </Button>
          </form>
        )}

        {status === "error" && <p className="mt-4 text-sm text-red-600">{errorText}</p>}
      </div>

      <div className="bg-amber-200/50 px-6 md:px-8 py-4 border-t border-amber-200 text-sm text-amber-800">
        {locale === "tr"
          ? "Kişisel verileriniz gizlilik politikamıza uygun olarak işlenecektir."
          : locale === "de"
            ? "Ihre persönlichen Daten werden gemäß unserer Datenschutzrichtlinie verarbeitet."
            : "Your personal data will be processed according to our privacy policy."}
      </div>
    </motion.div>
  )
}

export default NewsletterSignup
