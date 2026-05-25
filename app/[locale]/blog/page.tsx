import { getAllPosts, getCategories } from "@/lib/blog-data"
import type { Locale } from "@/lib/i18n"
import { getDictionary } from "@/lib/dictionary"
import BlogClientPage from "./BlogClientPage"
import MainHeader from "@/components/main-header"
import Footer from "@/components/footer"

interface BlogPageProps {
  params: Promise<{
    locale: Locale
  }>
}

interface Props {
  params: Promise<{
    locale: Locale
  }>
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return {
    title: `${dict.blog.title} | Cennet Restaurant Akyaka`,
    description: dict.blog.description,
  }
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params
  const posts = await getAllPosts(locale)
  const categories = await getCategories(locale)

  return (
    <>
      <MainHeader locale={locale} />
      <BlogClientPage posts={posts} categories={categories} locale={locale} />
      <Footer locale={locale} />
    </>
  )
}
