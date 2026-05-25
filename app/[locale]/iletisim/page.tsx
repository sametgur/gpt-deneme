import type { Metadata } from "next"
import { type Locale, locales } from "@/lib/i18n"
import ContactPageClient from "./ContactPageClient"

type Props = {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Ensure locale is one of the supported locales, default to 'tr' if not
  const resolved = await params
  const locale = resolved?.locale && ["tr", "en", "de"].includes(resolved.locale) ? resolved.locale : "tr"

  const title = {
    tr: "İletişim | Cennet Restaurant Akyaka",
    en: "Contact | Cennet Restaurant Akyaka",
    de: "Kontakt | Cennet Restaurant Akyaka",
  }

  const description = {
    tr: "Cennet Restaurant ile iletişime geçin. Adres, telefon, e-posta bilgilerimiz ve çalışma saatlerimiz.",
    en: "Contact Cennet Restaurant. Our address, phone, email information and working hours.",
    de: "Kontaktieren Sie das Cennet Restaurant. Unsere Adresse, Telefon, E-Mail-Informationen und Öffnungszeiten.",
  }

  return {
    title: title[locale],
    description: description[locale],
  }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function ContactPage({ params }: Props) {
  const resolved = await params
  return <ContactPageClient params={resolved} />
}
