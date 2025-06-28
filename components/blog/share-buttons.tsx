"use client"

import { useState, useEffect } from "react"
import { Facebook, Twitter, Linkedin, Link } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"

interface ShareButtonsProps {
  title?: string
  url?: string
}

export function ShareButtons({ title = "", url = "" }: ShareButtonsProps) {
  const [currentUrl, setCurrentUrl] = useState<string>(url)
  const [pageTitle, setPageTitle] = useState<string>(title)

  useEffect(() => {
    // Client tarafında URL ve başlık bilgisini al
    if (!url) {
      setCurrentUrl(window.location.href)
    }
    if (!title && document.title) {
      setPageTitle(document.title)
    }
  }, [title, url])

  const handleShare = (platform: string) => {
    if (!currentUrl) {
      console.error("Share URL is not available")
      return
    }

    let shareUrl = ""
    const encodedUrl = encodeURIComponent(currentUrl)
    const encodedTitle = encodeURIComponent(pageTitle || "Cennet Restaurant Blog")

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
        break
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
        break
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
        break
      case "copy":
        navigator.clipboard
          .writeText(currentUrl)
          .then(() =>
            toast({
              title: "Bağlantı kopyalandı",
              description: "Bağlantı panoya kopyalandı.",
            }),
          )
          .catch((err) => console.error("Kopyalama hatası:", err))
        return
      default:
        return
    }

    window.open(shareUrl, "_blank", "width=600,height=400")
  }

  return (
    <div className="flex flex-wrap gap-2 mt-6">
      <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={() => handleShare("facebook")}>
        <Facebook size={16} />
        <span className="hidden sm:inline">Facebook</span>
      </Button>
      <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={() => handleShare("twitter")}>
        <Twitter size={16} />
        <span className="hidden sm:inline">Twitter</span>
      </Button>
      <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={() => handleShare("linkedin")}>
        <Linkedin size={16} />
        <span className="hidden sm:inline">LinkedIn</span>
      </Button>
      <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={() => handleShare("copy")}>
        <Link size={16} />
        <span className="hidden sm:inline">Bağlantıyı Kopyala</span>
      </Button>
    </div>
  )
}

export default ShareButtons
