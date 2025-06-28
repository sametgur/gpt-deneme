"use client"

import type { BlogPost } from "@/lib/blog-data"

interface BlogJsonLdProps {
  post: BlogPost
}

export function BlogJsonLd({ post }: BlogJsonLdProps) {
  // Eğer post undefined ise veya gerekli alanlar yoksa, boş bir div döndür
  if (!post || !post.title || !post.excerpt || !post.slug) {
    console.error("BlogJsonLd: Missing required post data")
    return null
  }

  const locale = post.locale || "tr"
  const title = typeof post.title === "object" ? post.title[locale] || "" : post.title
  const excerpt = typeof post.excerpt === "object" ? post.excerpt[locale] || "" : post.excerpt
  const authorName = typeof post.author === "string" ? post.author : post.author?.name || "Cennet Restaurant"
  const authorImage = typeof post.author === "object" && post.author?.image ? post.author.image : null
  const tags = post.tags || []

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: excerpt,
    image: post.image || "/blog-concept.png",
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    author: {
      "@type": "Person",
      name: authorName,
      image: authorImage,
    },
    publisher: {
      "@type": "Organization",
      name: "Cennet Restaurant",
      logo: {
        "@type": "ImageObject",
        url: "https://cennetrestaurant.com/cennet-logo-small.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://cennetrestaurant.com/blog/${post.slug}`,
    },
    keywords: tags.join(", ") || "türk mutfağı, akyaka restoran",
    articleSection: post.categories?.[0]?.name || "Blog",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export default BlogJsonLd
