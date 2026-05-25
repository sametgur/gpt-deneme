"use client"

import Image, { type ImageProps } from "next/image"
import { useMemo, useState } from "react"
import { cn } from "@/lib/utils"

type SafeImageProps = Omit<ImageProps, "src" | "alt"> & {
  src?: string | null
  alt: string
  fallbackQuery?: string
  fallbackSrc?: string
}

/**
 * SafeImage wraps next/image and guarantees a visible image even if the source 404s.
 * - Uses local placeholder with a descriptive query on error or empty src
 * - Keeps layout by preserving given props (fill or width/height)
 */
export default function SafeImage({
  src,
  alt,
  className,
  fallbackQuery = "turkish cuisine dish photo",
  fallbackSrc,
  ...props
}: SafeImageProps) {
  const [error, setError] = useState(false)

  const finalSrc = useMemo(() => {
    if (error || !src) {
      if (fallbackSrc) return fallbackSrc
      const w =
        "width" in props && typeof props.width === "number" ? props.width : 600
      const h =
        "height" in props && typeof props.height === "number" ? props.height : 400
      return `/placeholder.svg?height=${h}&width=${w}&query=${encodeURIComponent(
        fallbackQuery
      )}`
    }
    return src
  }, [error, src, props, fallbackQuery, fallbackSrc])

  return (
    <Image
      {...props}
      src={finalSrc || "/placeholder.svg"}
      alt={alt}
      className={cn("object-cover", className)}
      onError={() => setError(true)}
    />
  )
}
