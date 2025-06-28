"use client"

import { useState, useEffect } from "react"
import { QRCodeSVG } from "qrcode.react"
import { Download, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface QRMenuProps {
  locale?: string
  translations?: {
    title?: string
    subtitle?: string
    downloadQrCode?: string
    copyMenuLink?: string
    copied?: string
  }
}

export default function QRMenu({
  locale = "tr",
  translations = {
    title: "Menümüzü Telefonunuzda Görüntüleyin",
    subtitle: "QR kodu tarayarak menümüze hızlıca erişebilirsiniz",
    downloadQrCode: "QR Kodu İndir",
    copyMenuLink: "Menü Linkini Kopyala",
    copied: "Kopyalandı!",
  },
}: QRMenuProps) {
  const [copied, setCopied] = useState(false)
  const [menuUrl, setMenuUrl] = useState("https://example.com/menu")

  // Only render fully on the client side
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    if (typeof window !== "undefined") {
      // Add locale to the URL if it's not the default
      const localePath = locale && locale !== "tr" ? `/${locale}` : ""
      setMenuUrl(`${window.location.origin}${localePath}/menu`)
    }
  }, [locale])

  if (!isClient) {
    return <div className="h-64 w-full animate-pulse rounded-lg bg-gray-200"></div>
  }

  const handleDownload = () => {
    const svg = document.getElementById("qr-code-svg")
    if (!svg) return

    // Create a canvas element
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 200
    canvas.height = 200

    // Create an image from the SVG
    const img = new Image()
    const svgData = new XMLSerializer().serializeToString(svg)
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" })
    const url = URL.createObjectURL(svgBlob)

    img.onload = () => {
      // Draw the image on the canvas
      ctx.drawImage(img, 0, 0)

      // Convert canvas to PNG
      const pngUrl = canvas.toDataURL("image/png")

      // Create download link
      const downloadLink = document.createElement("a")
      downloadLink.href = pngUrl
      downloadLink.download = "cennet-restaurant-menu-qr.png"
      document.body.appendChild(downloadLink)
      downloadLink.click()
      document.body.removeChild(downloadLink)

      // Clean up
      URL.revokeObjectURL(url)
    }

    img.crossOrigin = "anonymous" // Add this to avoid CORS issues
    img.src = url
  }

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(menuUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Menü linki kopyalanamadı:", err)
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="flex flex-col items-center p-6">
        <div className="mb-4 text-center">
          <h3 className="text-xl font-bold text-gray-900">{translations.title}</h3>
          <p className="mt-1 text-sm text-gray-600">{translations.subtitle}</p>
        </div>

        <div className="relative mb-6 rounded-lg bg-white p-4 shadow-md">
          <QRCodeSVG
            id="qr-code-svg"
            value={menuUrl}
            size={200}
            level="H"
            includeMargin={true}
            imageSettings={{
              src: "/cennet-logo-small.png",
              x: undefined,
              y: undefined,
              height: 40,
              width: 40,
              excavate: true,
            }}
          />
        </div>

        <div className="flex w-full flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
          <Button onClick={handleDownload} className="flex items-center justify-center bg-amber-500 hover:bg-amber-600">
            <Download className="mr-2 h-4 w-4" />
            {translations.downloadQrCode}
          </Button>
          <Button
            onClick={handleShare}
            variant="outline"
            className="flex items-center justify-center border-amber-500 text-amber-500 hover:bg-amber-50"
          >
            <Share2 className="mr-2 h-4 w-4" />
            {copied ? translations.copied : translations.copyMenuLink}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
