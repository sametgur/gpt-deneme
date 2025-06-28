import type { Metadata } from "next"
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/blog-data"
import BlogPostClientPage from "@/app/[locale]/blog/[slug]/BlogPostClientPage"

export const metadata: Metadata = {
  title: "A Heavenly Night at Akyaka Azmak | Cennet Restaurant",
  description:
    "Experience an unforgettable dinner at Akyaka Azmak. Enjoy a romantic night under the stars at Cennet Restaurant.",
}

export default async function BlogPostPage() {
  const post = await getBlogPostBySlug("a-heavenly-night-at-akyaka-azmak")
  const relatedPosts = await getRelatedPosts(post, 3)

  return <BlogPostClientPage post={post} relatedPosts={relatedPosts} />
}
