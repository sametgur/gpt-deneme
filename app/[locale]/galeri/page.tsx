import { Suspense } from "react"
import GalleryClient from "./GalleryClient"

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params
  const locale = rawLocale || "tr"

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Yükleniyor...</div>}>
      <GalleryClient locale={locale} />
    </Suspense>
  )
}
