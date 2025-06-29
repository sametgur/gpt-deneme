import type React from "react"
import type { Metadata } from "next"
import { Inter, Lusitana } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster" // Toaster'ı içe aktar

import "@/components/blog/styles.css"
import "@/app/globals.css" // globals.css'i içe aktar

const inter = Inter({ subsets: ["latin"] })
const lusitana = Lusitana({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "Cennet Restaurant Akyaka",
  description: "Akyaka'da eşsiz lezzetler ve muhteşem manzara",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster /> {/* Toaster bileşenini buraya ekle */}
        </ThemeProvider>
      </body>
    </html>
  )
}
