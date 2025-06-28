import type { Metadata } from "next"
import { type Locale, locales } from "@/lib/i18n"
import ContactPageClient from "./ContactPageClient"

type Props = {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Ensure locale is one of the supported locales, default to 'tr' if not
  const locale = params?.locale && ["tr", "en", "de"].includes(params.locale) ? params.locale : "tr"

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

export default function ContactPage({ params }: Props) {
  return <ContactPageClient params={params} />
}
