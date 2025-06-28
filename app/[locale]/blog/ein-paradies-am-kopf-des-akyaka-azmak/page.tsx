import { redirect } from "next/navigation"
import type { Locale } from "@/lib/i18n"

type Props = {
  params: { locale: Locale }
}

// This is a redirect page for German users
export default function EinParadiesAmKopfDesAkyakaAzmakPage({ params }: Props) {
  const { locale } = params

  // Redirect to the main blog post with the correct locale
  redirect(`/${locale}/blog/akyaka-azmak-basinda-bir-cennet`)
}
