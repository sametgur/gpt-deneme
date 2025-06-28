"use client"

import { usePathname } from "next/navigation"
import { getLocaleFromPathname, defaultLocale } from "@/lib/i18n"
import { translations } from "@/lib/i18n/translations"

export function useTranslations(localeParam?: string) {
  const pathname = usePathname()
  const locale = localeParam || getLocaleFromPathname(pathname)

  // Daha güvenli bir t fonksiyonu oluşturalım
  const t = (key: keyof (typeof translations)[typeof locale]) => {
    try {
      // Eğer çeviri varsa döndür
      if (translations[locale] && translations[locale][key]) {
        return translations[locale][key]
      }

      // Eğer varsayılan dilde çeviri varsa onu döndür
      if (translations[defaultLocale] && translations[defaultLocale][key]) {
        return translations[defaultLocale][key]
      }

      // Hiçbir çeviri bulunamazsa anahtarı döndür
      return key
    } catch (error) {
      console.error(`Translation error for key: ${String(key)}`, error)
      return key
    }
  }

  return {
    t,
    locale,
  }
}
