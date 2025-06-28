"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string
}

export default function SafeImage({ src, alt, fallbackSrc = "/placeholder.svg", ...props }: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc)
      setHasError(true)
    }
  }

  return (
    <Image
      {...props}
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      onError={handleError}
      className={`${props.className || ""} ${hasError ? "opacity-70" : ""}`}
    />
  )
}
