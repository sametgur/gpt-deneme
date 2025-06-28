"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronLeft, Calendar, User, Tag, Clock, ArrowUp } from "lucide-react"
import { formatDate } from "@/lib/utils"
import { Markdown } from "@/components/markdown"
import { TableOfContents } from "@/components/blog/table-of-contents"
import { RelatedPosts } from "@/components/blog/related-posts"
import { ShareButtons } from "@/components/blog/share-buttons"
import { AuthorCard } from "@/components/blog/author-card"
import { BlogJsonLd } from "@/components/blog/blog-json-ld"
import { NewsletterSignup } from "@/components/blog/newsletter-signup"
import { ReadingProgressBar } from "@/components/blog/reading-progress-bar"
import type { BlogPost } from "@/lib/blog-data"
import { motion } from "framer-motion"
import SafeImage from "@/components/safe-image"

interface BlogPostClientPageProps {
  post: BlogPost
  relatedPosts: BlogPost[]
}

export default function BlogPostClientPage({ post, relatedPosts }: BlogPostClientPageProps) {
  const [mounted, setMounted] = useState(false)
  const [readingTime, setReadingTime] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const pathname = usePathname()
  const locale = post?.locale || "tr"

  useEffect(() => {
    setMounted(true)

    // Okuma süresini hesapla
    if (post?.content) {
      const words =
        typeof post.content === "object"
          ? (post.content[locale] || "").trim().split(/\s+/).length
          : post.content.trim().split(/\s+/).length
      const time = Math.ceil(words / 200) // Dakika olarak (ortalama 200 kelime/dakika)
      setReadingTime(time)
    }

    // Scroll olayını dinle
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [post?.content, locale])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!mounted) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-12"></div>
          <div className="h-64 bg-gray-200 rounded mb-8"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
        </div>
      </div>
    )
  }

  // Post içindeki title ve diğer alanlar için güvenlik kontrolü
  const title = typeof post?.title === "object" ? post?.title[locale] || "Blog Yazısı" : post?.title || "Blog Yazısı"
  const content = typeof post?.content === "object" ? post?.content[locale] || "" : post?.content || ""
  const date = post?.date || new Date().toISOString()
  const author = post?.author || "Cennet Restaurant"
  const authorName = typeof author === "string" ? author : author?.name || "Cennet Restaurant"
  const image = post?.image || "/blog-concept.png"
  const categories = post?.categories || []
  const excerpt = typeof post?.excerpt === "object" ? post?.excerpt[locale] || "" : post?.excerpt || ""
  const tags = post?.tags || []

  return (
    <div className="bg-gradient-to-b from-amber-50/30 to-white">
      <ReadingProgressBar />
      <BlogJsonLd post={post} />

      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <SafeImage
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
          fallbackSrc="/cozy-italian-restaurant.png"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {excerpt}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Geri butonu ve meta bilgiler */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center text-gray-600 hover:text-amber-600 transition-colors mb-4 md:mb-0"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              <span>{locale === "tr" ? "Tüm Yazılar" : locale === "de" ? "Alle Artikel" : "All Articles"}</span>
            </Link>

            <div className="flex flex-wrap items-center text-gray-600 gap-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <time dateTime={date}>{formatDate(date, locale)}</time>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{authorName}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>
                  {readingTime} {locale === "tr" ? "dk okuma" : locale === "de" ? "Min. Lesezeit" : "min read"}
                </span>
              </div>
              {categories && categories.length > 0 && categories[0] && (
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-2" />
                  <Link
                    href={`/${locale}/blog/category/${categories[0].id}`}
                    className="hover:underline hover:text-amber-600"
                  >
                    {categories[0].name}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* İçindekiler */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
                <TableOfContents content={content} />
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-medium text-gray-900 mb-4">Bu yazıyı paylaş</h3>
                <ShareButtons title={title} url={`https://cennetrestaurant.com${pathname}`} />
              </div>
            </div>
          </div>

          {/* Blog içeriği */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-10">
              <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-a:text-amber-600 prose-img:rounded-lg prose-img:shadow-md">
                <Markdown content={content} />
              </article>

              {/* Etiketler */}
              {tags && tags.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-amber-50 text-amber-800 text-sm rounded-full border border-amber-100"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Yazar bilgisi */}
            <div className="mt-8">
              <AuthorCard author={author} locale={locale} />
            </div>

            {/* İlgili yazılar */}
            {relatedPosts && relatedPosts.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-6 font-serif">
                  {locale === "tr" ? "İlgili Yazılar" : locale === "de" ? "Ähnliche Artikel" : "Related Articles"}
                </h2>
                <RelatedPosts posts={relatedPosts} />
              </div>
            )}

            {/* Bülten kaydı */}
            <div className="mt-16">
              <NewsletterSignup locale={locale} />
            </div>
          </div>
        </div>
      </div>

      {/* Yukarı çık butonu */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-amber-500 text-white rounded-full shadow-lg hover:bg-amber-600 transition-all z-50"
          aria-label="Yukarı çık"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}
