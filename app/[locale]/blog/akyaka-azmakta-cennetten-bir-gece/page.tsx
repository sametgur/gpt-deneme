import { redirect } from "next/navigation"

export default async function RedirectPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale === "tr") {
    redirect("/tr/blog-akyaka-azmakta-cennetten-bir-gece")
  } else if (locale === "en") {
    redirect("/en/blog/a-heavenly-night-at-akyaka-azmak")
  } else if (locale === "de") {
    redirect("/de/blog/eine-himmlische-nacht-am-akyaka-azmak")
  }

  // Default fallback
  redirect("/tr/blog-akyaka-azmakta-cennetten-bir-gece")
}
