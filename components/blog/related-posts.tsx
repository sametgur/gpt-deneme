"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"
import SafeImage from "@/components/safe-image"

interface RelatedPostsProps {
  posts: BlogPost[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        const locale = post.locale || "tr"
        const title = typeof post.title === "object" ? post.title[locale] || "" : post.title
        const excerpt = typeof post.excerpt === "object" ? post.excerpt[locale] || "" : post.excerpt

        return (
          <Link
            key={post.slug}
            href={`/${locale}/blog/${post.slug}`}
            className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <div className="relative h-48 overflow-hidden">
              <SafeImage
                src={post.image || "/blog-concept.png"}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                fallbackSrc="/blog-concept.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-bold text-gray-900 line-clamp-2">{title}</h3>
              <p className="mb-4 text-sm text-gray-600 line-clamp-2">{excerpt}</p>
              <div className="flex items-center text-amber-600">
                <span className="text-sm font-medium">
                  {locale === "tr" ? "Devamını Oku" : locale === "de" ? "Weiterlesen" : "Read More"}
                </span>
                <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default RelatedPosts
