import type { Locale } from "./i18n"

// Sözlük verilerini getir
export async function getDictionary(locale: Locale) {
  try {
    return (await import(`./dictionaries/${locale}.json`)).default
  } catch (error) {
    console.error(`Dictionary for locale ${locale} not found`, error)
    // Varsayılan dil sözlüğünü döndür
    return (await import(`./dictionaries/tr.json`)).default
  }
}
