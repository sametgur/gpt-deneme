"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import type { BlogPost, BlogCategory } from "@/lib/blog-data"
import { CalendarDays, User, Tag } from "lucide-react"

interface BlogClientPageProps {
  posts: BlogPost[]
  categories: BlogCategory[]
  locale: string
}

export default function BlogClientPage({ posts, categories, locale }: BlogClientPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Kategoriye göre filtreleme
  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.categories?.some((cat) => cat.id === selectedCategory))
    : posts

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">Blog</h1>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Yan panel - Kategoriler */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <h2 className="text-xl font-bold mb-4">Kategoriler</h2>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left px-3 py-2 rounded ${
                      selectedCategory === null ? "bg-amber-100 text-amber-800 font-medium" : "hover:bg-gray-100"
                    }`}
                  >
                    Tüm Yazılar
                  </button>
                </li>
                {categories?.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded flex items-center justify-between ${
                        selectedCategory === category.id
                          ? "bg-amber-100 text-amber-800 font-medium"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <span>{category.name || "Kategori"}</span>
                      {category.count !== undefined && (
                        <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ana içerik - Blog yazıları */}
          <div className="md:col-span-3">
            {filteredPosts && filteredPosts.length > 0 ? (
              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <Link href={`/${locale}/blog/${post.slug}`} className="group">
                      <div className="md:flex">
                        <div className="md:w-1/3 relative h-48 md:h-auto">
                          <Image
                            src={post.image || "/blog-concept.png"}
                            alt={post.title || "Blog post"}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-2">
                            <div className="flex items-center mr-4">
                              <CalendarDays className="h-4 w-4 mr-1" />
                              <time dateTime={post.date || ""}>{formatDate(post.date || "", locale)}</time>
                            </div>
                            <div className="flex items-center mr-4">
                              <User className="h-4 w-4 mr-1" />
                              <span>
                                {typeof post.author === "string"
                                  ? post.author
                                  : typeof post.author?.name === "object"
                                    ? post.author?.name[locale] || "Cennet Restaurant"
                                    : post.author?.name || "Cennet Restaurant"}
                              </span>
                            </div>
                            {post.categories && post.categories.length > 0 && post.categories[0] && (
                              <div className="flex items-center">
                                <Tag className="h-4 w-4 mr-1" />
                                <span>
                                  {typeof post.categories[0] === "string"
                                    ? post.categories[0]
                                    : post.categories[0].name || "Kategori"}
                                </span>
                              </div>
                            )}
                          </div>
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-600 transition-colors duration-300">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <p>Henüz hiç yazı yok.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
