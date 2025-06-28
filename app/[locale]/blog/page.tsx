import { getAllPosts, getCategories } from "@/lib/blog-data"
import type { Locale } from "@/lib/i18n"
import { getDictionary } from "@/lib/dictionary"
import BlogClientPage from "./BlogClientPage"
import MainHeader from "@/components/main-header"
import Footer from "@/components/footer"

interface BlogPageProps {
  params: {
    locale: Locale
  }
}

interface Props {
  params: {
    locale: Locale
  }
}

export async function generateMetadata({ params }: BlogPageProps) {
  const dict = await getDictionary(params.locale)

  return {
    title: `${dict.blog.title} | Cennet Restaurant Akyaka`,
    description: dict.blog.description,
  }
}

export default async function BlogPage({ params }: Props) {
  const posts = await getAllPosts(params.locale)
  const categories = await getCategories(params.locale)

  return (
    <>
      <MainHeader locale={params.locale} />
      <BlogClientPage posts={posts} categories={categories} locale={params.locale} />
      <Footer locale={params.locale} />
    </>
  )
}
