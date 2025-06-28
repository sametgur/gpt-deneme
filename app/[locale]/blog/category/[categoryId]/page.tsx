import { notFound } from "next/navigation"
import { getPostsByCategory, getCategoryById } from "@/lib/blog-data"
import CategoryClientPage from "./CategoryClientPage"

interface CategoryPageProps {
  params: {
    categoryId: string
    locale: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { categoryId, locale } = params
  const category = await getCategoryById(categoryId, locale)

  // Eğer kategori bulunamazsa, varsayılan meta verileri döndür
  if (!category) {
    return {
      title: "Kategori Bulunamadı | Cennet Restaurant Blog",
      description: "Aradığınız blog kategorisi bulunamadı.",
    }
  }

  return {
    title: `${category.name} | Cennet Restaurant Blog`,
    description: category.description,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId, locale } = params
  const category = await getCategoryById(categoryId, locale)

  // Eğer kategori bulunamazsa, 404 sayfasına yönlendir
  if (!category) {
    notFound()
  }

  const posts = await getPostsByCategory(categoryId, locale)

  return <CategoryClientPage posts={posts} category={category} locale={locale} />
}
