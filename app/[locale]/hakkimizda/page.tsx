import type { Metadata } from "next"
import VibrantAboutPage from "./VibrantAboutPage"
import type { Locale } from "@/lib/i18n"

type Props = {
  params: { locale: Locale }
}

export default function AboutPage({ params }: Props) {
  return <VibrantAboutPage params={params} />
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: "Cennet Restaurant - Hakkımızda",
    description: "Akyaka'nın kalbinde, Azmak Nehri'nin üzerinde konumlanmış Cennet Restaurant'ın hikayesi.",
  }
}
