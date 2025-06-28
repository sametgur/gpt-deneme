import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { defaultLocale } from "@/lib/i18n"

export const metadata: Metadata = {
  title: "Cennet Restaurant Akyaka | Eşsiz Deniz Ürünleri ve Türk Mutfağı",
  description:
    "Akyaka'nın kalbinde, suyun üzerinde konumlanmış Cennet Restaurant'ta taze deniz ürünleri ve geleneksel Türk mutfağının eşsiz lezzetlerini keşfedin.",
  keywords:
    "Akyaka restoran, deniz ürünleri, Türk mutfağı, Muğla restoran, Akyaka yemek, balık restoran, Cennet Restaurant",
  openGraph: {
    title: "Cennet Restaurant Akyaka | Eşsiz Deniz Ürünleri ve Türk Mutfağı",
    description:
      "Akyaka'nın kalbinde, suyun üzerinde konumlanmış Cennet Restaurant'ta taze deniz ürünleri ve geleneksel Türk mutfağının eşsiz lezzetlerini keşfedin.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6268_2b1cd5e4-5d47-4ff3-9f84-6f21acb084eb.jpg-UGrMufDqeFK2GfoBbgM1s91i42cmZD.jpeg",
        width: 1200,
        height: 630,
        alt: "Cennet Restaurant Akyaka",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
}

export default function Home() {
  redirect(`/${defaultLocale}`)
}
