import { redirect } from "next/navigation"

export default function RedirectPage({ params }: { params: { locale: string } }) {
  if (params.locale === "tr") {
    redirect("/tr/blog-akyaka-azmakta-cennetten-bir-gece")
  } else if (params.locale === "en") {
    redirect("/en/blog/a-heavenly-night-at-akyaka-azmak")
  } else if (params.locale === "de") {
    redirect("/de/blog/eine-himmlische-nacht-am-akyaka-azmak")
  }

  // Default fallback
  redirect("/tr/blog-akyaka-azmakta-cennetten-bir-gece")
}
