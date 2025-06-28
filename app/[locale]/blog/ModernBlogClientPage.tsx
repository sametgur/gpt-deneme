"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "@/hooks/use-translations"
import type { BlogPost, BlogCategory } from "@/lib/blog-data"
import { ChevronRight, Search, Calendar, Tag, Clock, ArrowRight } from "lucide-react"

interface ModernBlogClientPageProps {
  locale: string
  posts: BlogPost[]
  categories: BlogCategory[]
}

export default function ModernBlogClientPage({ locale, posts, categories }: ModernBlogClientPageProps) {
  const t = useTranslations(locale)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(posts)
  const [featuredPost, ...remainingPosts] = posts

  useEffect(() => {
    let result = posts

    if (searchTerm) {
      result = result.filter(
        (post) =>
          post.title[locale].toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt[locale].toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedCategory) {
      result = result.filter((post) => post.categories.some((cat) => cat.id === selectedCategory))
    }

    setFilteredPosts(result)
  }, [searchTerm, selectedCategory, posts, locale])

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory(null)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : locale === "de" ? "de-DE" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date)
  }

  const getReadTime = (content: string) => {
    const wordsPerMinute = 200
    const words = content.split(/\s+/).length
    return Math.ceil(words / wordsPerMinute)
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-700 to-amber-900 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/turkish-restaurant-wooden-interior.png')] bg-cover bg-center" />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("blog.title")}</h1>
            <p className="text-xl opacity-90 mb-8">{t("blog.subtitle")}</p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t("blog.searchPlaceholder")}
                className="w-full px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-white/70" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === null ? "bg-amber-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {t("blog.allCategories")}
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? "bg-amber-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name[locale]}
            </button>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">{t("blog.noResults")}</p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
            >
              {t("blog.clearFilters")}
            </button>
          </div>
        )}

        {filteredPosts.length > 0 && (
          <>
            {/* Featured Post */}
            {!searchTerm && !selectedCategory && featuredPost && (
              <div className="mb-16">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:shadow-xl">
                  <div className="md:flex">
                    <div className="md:w-1/2 relative h-64 md:h-auto">
                      <Image
                        src={featuredPost.coverImage || "/turkish-restaurant-wooden-interior.png"}
                        alt={featuredPost.title[locale]}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {t("blog.featured")}
                      </div>
                    </div>
                    <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{formatDate(featuredPost.date)}</span>
                          <span className="mx-2">•</span>
                          <Clock className="h-4 w-4 mr-1" />
                          <span>
                            {getReadTime(featuredPost.content[locale])} {t("blog.minRead")}
                          </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                          {featuredPost.title[locale]}
                        </h2>
                        <p className="text-gray-600 mb-6 line-clamp-3">{featuredPost.excerpt[locale]}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {featuredPost.categories.slice(0, 2).map((category) => (
                            <span
                              key={category.id}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800"
                            >
                              <Tag className="h-3 w-3 mr-1" />
                              {category.name[locale]}
                            </span>
                          ))}
                        </div>
                        <Link
                          href={`/${locale}/blog/${featuredPost.slug}`}
                          className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700"
                        >
                          {t("blog.readMore")}
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Grid of Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(searchTerm || selectedCategory ? filteredPosts : remainingPosts).map((post) => (
                <Link
                  key={post.slug}
                  href={`/${locale}/blog/${post.slug}`}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.coverImage || "/turkish-restaurant-wooden-interior.png"}
                      alt={post.title[locale]}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{formatDate(post.date)}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>
                        {getReadTime(post.content[locale])} {t("blog.minRead")}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2">{post.title[locale]}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt[locale]}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.categories.slice(0, 2).map((category) => (
                        <span
                          key={category.id}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800"
                        >
                          {category.name[locale]}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-amber-600 font-medium">
                      {t("blog.readMore")}
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Newsletter Section */}
      <div className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t("blog.newsletterTitle")}</h2>
            <p className="text-gray-600 mb-6">{t("blog.newsletterDescription")}</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder={t("blog.emailPlaceholder")}
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors"
              >
                {t("blog.subscribe")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
