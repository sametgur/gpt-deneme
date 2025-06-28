"use client"

import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import type { BlogPost, BlogCategory } from "@/lib/blog-data"

interface CategoryClientPageProps {
  posts: BlogPost[]
  category: BlogCategory
  locale: string
}

export default function CategoryClientPage({ posts, category, locale }: CategoryClientPageProps) {
  // Kategori ve posts için null/undefined kontrolü
  if (!category) {
    return <div className="container mx-auto px-4 py-8">Kategori bulunamadı.</div>
  }

  // Kategori adı için güvenlik kontrolü
  const categoryName = category.name || "Blog Kategorisi"
  const categoryDescription = category.description || ""

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">{categoryName}</h1>
        <p className="text-gray-600 mb-8">{categoryDescription}</p>

        <div className="grid gap-8">
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.slug} className="border-b border-gray-200 pb-8 mb-8 last:border-0">
                <Link href={`/${locale}/blog/${post.slug}`} className="group">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="relative h-48 md:h-full rounded-lg overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg?height=400&width=600&query=blog"}
                        alt={post.title || "Blog post"}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                        {post.title || "Blog Yazısı"}
                      </h2>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span>{formatDate(post.date || new Date().toISOString(), locale)}</span>
                        <span className="mx-2">•</span>
                        <span>
                          {typeof post.author === "string" ? post.author : post.author?.name || "Cennet Restaurant"}
                        </span>
                      </div>
                      <p className="text-gray-600 line-clamp-3">{post.excerpt || ""}</p>
                      <div className="mt-4">
                        <span className="text-blue-600 font-medium group-hover:underline">Devamını Oku</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>Bu kategoride henüz blog yazısı bulunmamaktadır.</p>
          )}
        </div>
      </div>
    </div>
  )
}
