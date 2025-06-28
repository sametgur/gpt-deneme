import type React from "react"
import type { Metadata } from "next"
import { Inter, Lusitana } from "next/font/google"
import { dir } from "i18next"
import { locales } from "@/lib/i18n"
import { FloatingContactButtons, FloatingWhatsappButton } from "@/components/floating-contact-buttons"
import type { Locale } from "@/lib/i18n"

import { ThemeProvider } from "@/components/theme-provider"

import "@/components/blog/styles.css"

interface Props {
  children: React.ReactNode
  params: {
    locale: Locale
  }
}

const inter = Inter({ subsets: ["latin"] })
const lusitana = Lusitana({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "Cennet Restaurant Akyaka",
  description: "Akyaka'da eşsiz lezzetler ve muhteşem manzara",
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function RootLayout({ children, params: { locale } }: Props) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <FloatingContactButtons />
          <FloatingWhatsappButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
