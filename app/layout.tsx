import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { FloatingContactButtons, FloatingWhatsappButton } from "@/components/floating-contact-buttons"
import { Toaster } from "@/components/ui/toaster" // Toaster'ı doğru yerden içe aktar

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cennet Restaurant",
  description: "Akyaka'da eşsiz lezzetler ve huzurlu bir atmosfer.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="TR-48" />
        <meta name="geo.placename" content="Akyaka, Muğla" />
        <link rel="canonical" href="https://www.cennetrestaurant.com.tr" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Cennet Restaurant",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6268_2b1cd5e4-5d47-4ff3-9f84-6f21acb084eb.jpg-UGrMufDqeFK2GfoBbgM1s91i42cmZD.jpeg",
              "@id": "https://www.cennetrestaurant.com.tr",
              url: "https://www.cennetrestaurant.com.tr",
              telephone: "+902521234567",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Akyaka Mah. Cennet Cad. No:123",
                addressLocality: "Akyaka",
                addressRegion: "Muğla",
                postalCode: "48000",
                addressCountry: "TR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 37.05,
                longitude: 28.33,
              },
              servesCuisine: ["Turkish", "Seafood"],
              priceRange: "₺₺₺",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "23:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday", "Sunday"],
                  opens: "10:00",
                  closes: "00:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <FloatingContactButtons />
        <FloatingWhatsappButton />
        <Toaster /> {/* Toaster bileşenini buraya ekle */}
      </body>
    </html>
  )
}
