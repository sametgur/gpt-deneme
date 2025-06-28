import type { Metadata } from "next"
import { getDictionary } from "@/lib/i18n"
import { getLocaleFromParams } from "@/lib/i18n"
import BestRestaurantInAkyakaBlogClient from "./BestRestaurantInAkyakaBlogClient"

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = getLocaleFromParams(params)
  const dict = await getDictionary(locale)

  return {
    title: "Best Restaurant in Akyaka - Cennet Restaurant",
    description:
      "Discover the best dining experience in Akyaka at Cennet Restaurant. Fresh seafood, authentic Turkish cuisine, and stunning views.",
  }
}

export default async function BestRestaurantInAkyakaPage({ params }: { params: { locale: string } }) {
  const locale = getLocaleFromParams(params)
  const dict = await getDictionary(locale)

  return <BestRestaurantInAkyakaBlogClient dict={dict} locale={locale} />
}
