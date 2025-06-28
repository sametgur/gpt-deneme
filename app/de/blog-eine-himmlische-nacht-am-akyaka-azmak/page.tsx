import type { Metadata } from "next"
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/blog-data"
import BlogPostClientPage from "@/app/[locale]/blog/[slug]/BlogPostClientPage"

export const metadata: Metadata = {
  title: "Eine Himmlische Nacht am Akyaka Azmak | Cennet Restaurant",
  description:
    "Erleben Sie ein unvergessliches Abendessen am Akyaka Azmak. Genießen Sie eine romantische Nacht unter den Sternen im Cennet Restaurant.",
}

export default async function BlogPostPage() {
  const post = await getBlogPostBySlug("eine-himmlische-nacht-am-akyaka-azmak")
  const relatedPosts = await getRelatedPosts(post, 3)

  return <BlogPostClientPage post={post} relatedPosts={relatedPosts} />
}
