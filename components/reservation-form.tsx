"use client"

import type React from "react"

import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Clock, Users, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { Locale } from "@/lib/i18n"
import { getTranslation } from "@/lib/i18n/translations"

interface ReservationFormProps {
  locale: Locale
}

export default function ReservationForm({ locale }: ReservationFormProps) {
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(locale, key)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="reservation" ref={ref} className="relative overflow-hidden bg-gray-50 py-20 md:py-24 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="reservation-pattern"
              patternUnits="userSpaceOnUse"
              width="40"
              height="40"
              patternTransform="rotate(45)"
            >
              <rect width="100%" height="100%" fill="none" />
              <circle cx="20" cy="20" r="1" fill="currentColor" className="text-turquoise-500" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#reservation-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              {t("reservationTitle")}
            </h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-turquoise-500" />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">{t("reservationSubtitle")}</p>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="grid md:grid-cols-2">
              {/* Form */}
              <div className="p-6 md:p-8 lg:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("fullName")}</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className="border-gray-300 focus:border-turquoise-500 focus:ring-turquoise-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("email")}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="border-gray-300 focus:border-turquoise-500 focus:ring-turquoise-500"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t("phone")}</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="border-gray-300 focus:border-turquoise-500 focus:ring-turquoise-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guests">{t("numberOfGuests")}</Label>
                      <div className="relative">
                        <Input
                          id="guests"
                          name="guests"
                          type="number"
                          min="1"
                          max="20"
                          required
                          className="border-gray-300 pl-10 focus:border-turquoise-500 focus:ring-turquoise-500"
                        />
                        <Users className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="date">{t("date")}</Label>
                      <div className="relative">
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          required
                          className="border-gray-300 pl-10 focus:border-turquoise-500 focus:ring-turquoise-500"
                        />
                        <Calendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">{t("time")}</Label>
                      <div className="relative">
                        <Input
                          id="time"
                          name="time"
                          type="time"
                          required
                          className="border-gray-300 pl-10 focus:border-turquoise-500 focus:ring-turquoise-500"
                        />
                        <Clock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t("specialRequests")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="border-gray-300 focus:border-turquoise-500 focus:ring-turquoise-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-turquoise-500 text-white hover:bg-turquoise-600"
                  >
                    {isSubmitting ? t("submitting") : t("makeReservation")}
                  </Button>

                  {isSuccess && (
                    <div className="rounded-md bg-green-50 p-4 text-center text-green-800">
                      {t("reservationSuccess")}
                    </div>
                  )}
                </form>
              </div>

              {/* Info */}
              <div className="relative flex items-center bg-turquoise-600 p-6 text-white md:p-8 lg:p-10">
                <div className="absolute inset-0 bg-turquoise-600 opacity-90" />
                <div className="relative z-10 space-y-6">
                  <h3 className="text-2xl font-bold">{t("reservationInfo")}</h3>
                  <p>{t("reservationInfoDesc")}</p>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="rounded-full bg-white/20 p-2">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{t("openingHours")}</p>
                        <p className="text-sm text-white/80">{t("openingHoursValue")}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="rounded-full bg-white/20 p-2">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{t("phoneReservation")}</p>
                        <a
                          href="tel:+905322367539"
                          className="text-sm text-white/80 transition-colors hover:text-white"
                        >
                          +90 532 236 75 39
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="rounded-full bg-white/20 p-2">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{t("emailReservation")}</p>
                        <a
                          href="mailto:info@cennetrestaurant.com"
                          className="text-sm text-white/80 transition-colors hover:text-white"
                        >
                          info@cennetrestaurant.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="font-medium">{t("reservationNote")}</p>
                    <p className="mt-2 text-sm text-white/80">{t("reservationNoteDesc")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
