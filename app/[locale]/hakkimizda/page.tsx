import type { Metadata } from "next"
import VibrantAboutPage from "./VibrantAboutPage"
import type { Locale } from "@/lib/i18n"

type Props = {
  params: Promise<{ locale: Locale }>
}

export default async function AboutPage({ params }: Props) {
  const resolved = await params
  return <VibrantAboutPage params={resolved} />
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: "Cennet Restaurant - Hakkımızda",
    description: "Akyaka'nın kalbinde, Azmak Nehri'nin üzerinde konumlanmış Cennet Restaurant'ın hikayesi.",
  }
}
