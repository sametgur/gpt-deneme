import Link from "next/link"
import type { BlogCategory } from "@/lib/blog-data"

interface BlogCategoriesProps {
  categories: BlogCategory[]
  activeCategory?: string
  locale: string
}

export default function BlogCategories({ categories, activeCategory, locale }: BlogCategoriesProps) {
  if (!categories || categories.length === 0) {
    return null
  }

  const allCategoriesText = locale === "tr" ? "Tüm Yazılar" : locale === "de" ? "Alle Beiträge" : "All Posts"

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-3">
        {locale === "tr" ? "Kategoriler" : locale === "de" ? "Kategorien" : "Categories"}
      </h2>
      <div className="flex flex-wrap gap-2">
        <Link
          href={`/${locale}/blog`}
          className={`px-3 py-1 rounded-full text-sm ${
            !activeCategory ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
          }`}
        >
          {allCategoriesText}
        </Link>
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/${locale}/blog/category/${category.id}`}
            className={`px-3 py-1 rounded-full text-sm ${
              activeCategory === category.id ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
            }`}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
