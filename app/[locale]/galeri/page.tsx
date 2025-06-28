import { Suspense } from "react"
import GalleryClient from "./GalleryClient"

export default function GalleryPage({ params }: { params: { locale: string } }) {
  const locale = params.locale || "tr"

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Yükleniyor...</div>}>
      <GalleryClient locale={locale} />
    </Suspense>
  )
}
