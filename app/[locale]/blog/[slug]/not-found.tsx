import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h2 className="text-4xl font-bold mb-4">Blog Yazısı Bulunamadı</h2>
      <p className="text-gray-600 mb-8">Aradığınız blog yazısı bulunamadı veya kaldırılmış olabilir.</p>
      <Button asChild>
        <Link href="/blog">Blog Ana Sayfasına Dön</Link>
      </Button>
    </div>
  )
}
