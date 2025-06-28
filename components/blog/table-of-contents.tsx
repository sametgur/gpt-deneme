"use client"

import { useState, useEffect } from "react"
import { List } from "lucide-react"

interface TableOfContentsProps {
  content: string
}

interface TocItem {
  id: string
  text: string
  level: number
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [toc, setToc] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    if (!content) return

    // İçerikten başlıkları çıkar
    const headingRegex = /^(#{1,6})\s+(.+)$/gm
    const headings: TocItem[] = []
    let match

    while ((match = headingRegex.exec(content)) !== null) {
      const fullMatch = match[0]
      const level = match[1].length
      const text = match[2]

      // ID oluştur - başlık metninden türetilir
      const id = text
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, "-")

      headings.push({
        id,
        text,
        level,
      })
    }

    setToc(headings)

    // Scroll olayını dinle
    const handleScroll = () => {
      const headingElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6")

      if (headingElements.length === 0) return

      // Viewport'un üst kısmına en yakın başlığı bul
      let closestHeading = null
      let closestDistance = Number.POSITIVE_INFINITY

      headingElements.forEach((heading) => {
        const distance = Math.abs(heading.getBoundingClientRect().top)
        if (distance < closestDistance) {
          closestDistance = distance
          closestHeading = heading
        }
      })

      if (closestHeading && closestHeading.id) {
        setActiveId(closestHeading.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [content])

  if (toc.length === 0) {
    return null
  }

  return (
    <div>
      <h3 className="flex items-center text-lg font-medium mb-4 text-gray-900">
        <List className="mr-2 h-5 w-5 text-amber-500" />
        İçindekiler
      </h3>
      <nav className="overflow-hidden">
        <ul className="space-y-2 max-h-[60vh] overflow-y-auto pr-2 -mr-2">
          {toc.map((item) => (
            <li
              key={item.id}
              style={{ paddingLeft: `${(item.level - 1) * 12}px` }}
              className={`text-sm border-l-2 transition-all duration-200 ${
                activeId === item.id
                  ? "border-amber-500 text-amber-700 font-medium"
                  : "border-gray-200 text-gray-600 hover:border-amber-300 hover:text-amber-600"
              }`}
            >
              <a
                href={`#${item.id}`}
                className="block py-1 pl-3"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById(item.id)
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 100,
                      behavior: "smooth",
                    })
                    setActiveId(item.id)
                  }
                }}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default TableOfContents
