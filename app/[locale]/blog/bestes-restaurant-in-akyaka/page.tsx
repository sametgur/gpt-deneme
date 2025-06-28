import type { Metadata } from "next"
import { getDictionary } from "@/lib/i18n"
import { getLocaleFromParams } from "@/lib/i18n"
import BestesRestaurantInAkyakaBlogClient from "./BestesRestaurantInAkyakaBlogClient"

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = getLocaleFromParams(params)
  const dict = await getDictionary(locale)

  return {
    title: "Bestes Restaurant in Akyaka - Cennet Restaurant",
    description:
      "Entdecken Sie das beste kulinarische Erlebnis in Akyaka im Cennet Restaurant. Frische Meeresfrüchte, authentische türkische Küche und atemberaubende Ausblicke.",
  }
}

export default async function BestesRestaurantInAkyakaPage({ params }: { params: { locale: string } }) {
  const locale = getLocaleFromParams(params)
  const dict = await getDictionary(locale)

  return <BestesRestaurantInAkyakaBlogClient dict={dict} locale={locale} />
}
