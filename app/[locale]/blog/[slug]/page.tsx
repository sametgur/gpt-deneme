import type { Metadata } from "next"
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/blog-data"
import BlogPostClientPage from "./BlogPostClientPage"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: {
    slug: string
    locale: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  const title =
    typeof post.title === "object" ? post.title[params.locale] || post.title.en || post.title.tr : post.title
  const excerpt =
    typeof post.excerpt === "object" ? post.excerpt[params.locale] || post.excerpt.en || post.excerpt.tr : post.excerpt

  return {
    title: `${title} | Cennet Restaurant`,
    description: excerpt,
    openGraph: {
      title: `${title} | Cennet Restaurant`,
      description: excerpt,
      images: [
        {
          url: post.image || "/blog-concept.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(post, 3)

  return <BlogPostClientPage post={post} relatedPosts={relatedPosts} />
}
