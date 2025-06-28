export type Locale = "tr" | "en" | "de"

export const defaultLocale: Locale = "tr"

export const locales: Locale[] = ["tr", "en", "de"]

export const localeNames: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
  de: "Deutsch",
}

export const localeFlags: Record<Locale, string> = {
  tr: "🇹🇷",
  en: "🇬🇧",
  de: "🇩🇪",
}

export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split("/").filter(Boolean)
  const firstSegment = segments[0]

  if (locales.includes(firstSegment as Locale)) {
    return firstSegment as Locale
  }

  return defaultLocale
}

export function getPathWithoutLocale(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean)
  const firstSegment = segments[0]

  if (locales.includes(firstSegment as Locale)) {
    return "/" + segments.slice(1).join("/")
  }

  return pathname
}

export function getPathWithLocale(pathname: string, locale: Locale): string {
  const pathWithoutLocale = getPathWithoutLocale(pathname)

  if (locale === defaultLocale) {
    return pathWithoutLocale
  }

  return `/${locale}${pathWithoutLocale}`
}

// Params'dan locale'i al
export function getLocaleFromParams(params: { locale?: string }): Locale {
  return (params?.locale || defaultLocale) as Locale
}

// Sözlük verilerini getir
export async function getDictionary(locale: Locale) {
  try {
    return (await import(`../dictionaries/${locale}.json`)).default
  } catch (error) {
    console.error(`Dictionary for locale ${locale} not found`, error)
    // Varsayılan dil sözlüğünü döndür
    return (await import(`../dictionaries/${defaultLocale}.json`)).default
  }
}
