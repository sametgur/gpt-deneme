import { notFound } from "next/navigation"
import type { Locale } from "@/lib/i18n"
import { getPostBySlug, getRelatedPosts } from "@/lib/blog-data"
import BlogPostClientPage from "../[slug]/BlogPostClientPage"
import MainHeader from "@/components/main-header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

type Props = {
  params: { locale: Locale }
}

// Metadata oluşturma fonksiyonu
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const slug = "akyaka-azmak-basinda-bir-cennet"
  const post = await getPostBySlug(slug, locale)

  // Eğer post bulunamazsa, varsayılan meta verileri döndür
  if (!post) {
    return {
      title: "Blog Post Not Found | Cennet Restaurant",
      description: "Aradığınız blog yazısı bulunamadı.",
    }
  }

  return {
    title: `${post.title} | Cennet Restaurant Blog`,
    description: post.excerpt,
    keywords: post.tags?.join(", ") || "türk mutfağı, akyaka restoran, cennet restaurant, azmak nehri",
    authors: [{ name: typeof post.author === "string" ? post.author : post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedAt,
      authors: [typeof post.author === "string" ? post.author : post.author.name],
      tags: post.tags,
      images: [
        {
          url: post.image || "/akyaka-river-serenity.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image || "/akyaka-river-serenity.png"],
    },
    alternates: {
      canonical: `https://cennetrestaurant.com/${locale}/blog/akyaka-azmak-basinda-bir-cennet`,
      languages: {
        tr: `https://cennetrestaurant.com/tr/blog/akyaka-azmak-basinda-bir-cennet`,
        en: `https://cennetrestaurant.com/en/blog/akyaka-azmak-basinda-bir-cennet`,
        de: `https://cennetrestaurant.com/de/blog/akyaka-azmak-basinda-bir-cennet`,
      },
    },
  }
}

export default async function AkyakaAzmakBasindaBirCennetPage({ params }: Props) {
  const { locale } = params
  const slug = "akyaka-azmak-basinda-bir-cennet"
  const post = await getPostBySlug(slug, locale)

  // Eğer post bulunamazsa, 404 sayfasına yönlendir
  if (!post) {
    notFound()
  }

  // İlgili yazıları getir
  const relatedPosts = await getRelatedPosts(post, locale)

  return (
    <>
      <MainHeader locale={locale} />
      <BlogPostClientPage post={post} relatedPosts={relatedPosts || []} />
      <Footer locale={locale} />
    </>
  )
}
