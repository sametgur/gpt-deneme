"use client"

import { useTranslations } from "@/hooks/use-translations"
import type { BlogPost } from "@/lib/blog-data"
import { Facebook, Twitter, Linkedin, LinkIcon } from "lucide-react"
import { useState } from "react"

interface SocialShareProps {
  post: BlogPost
}

export function SocialShare({ post }: SocialShareProps) {
  const t = useTranslations()
  const [copied, setCopied] = useState(false)

  // Get the current URL
  const getShareUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.href
    }
    return ""
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(getShareUrl())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-lg font-semibold">{t.blog?.share || "Share this post"}</h3>
      <div className="flex space-x-4">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl())}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          aria-label="Share on Facebook"
        >
          <Facebook size={20} />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(getShareUrl())}&text=${encodeURIComponent(post.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors"
          aria-label="Share on Twitter"
        >
          <Twitter size={20} />
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(getShareUrl())}&title=${encodeURIComponent(post.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-colors"
          aria-label="Share on LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <button
          onClick={handleCopyLink}
          className="p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors relative"
          aria-label="Copy link"
        >
          <LinkIcon size={20} />
          {copied && (
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded">
              {t.blog?.copied || "Copied!"}
            </span>
          )}
        </button>
      </div>
    </div>
  )
}
