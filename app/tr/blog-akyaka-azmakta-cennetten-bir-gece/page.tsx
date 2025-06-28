import type { Metadata } from "next"
import { getPostBySlug, getRelatedPosts } from "@/lib/blog-data"
import BlogPostClientPage from "@/app/[locale]/blog/[slug]/BlogPostClientPage"

export const metadata: Metadata = {
  title: "Akyaka Azmak'ta Cennetten Bir Gece | Cennet Restaurant",
  description:
    "Akyaka Azmak'ta unutulmaz bir akşam yemeği deneyimi. Cennet Restaurant'ta yıldızların altında romantik bir gece geçirin.",
  openGraph: {
    title: "Akyaka Azmak'ta Cennetten Bir Gece | Cennet Restaurant",
    description:
      "Akyaka Azmak'ta unutulmaz bir akşam yemeği deneyimi. Cennet Restaurant'ta yıldızların altında romantik bir gece geçirin.",
    images: [
      {
        url: "/outdoor-restaurant-sea-view.png",
        width: 1200,
        height: 630,
        alt: "Akyaka Azmak'ta Cennetten Bir Gece",
      },
    ],
  },
}

export default async function BlogPostPage() {
  const post = await getPostBySlug("akyaka-azmakta-cennetten-bir-gece", "tr")
  const relatedPosts = await getRelatedPosts(post, 3)

  return <BlogPostClientPage post={post} relatedPosts={relatedPosts} />
}
