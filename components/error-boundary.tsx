"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { AlertTriangle } from "lucide-react"

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export default function ErrorBoundary({ children, fallback }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const errorHandler = (error: ErrorEvent) => {
      console.error("Error caught by ErrorBoundary:", error)
      setHasError(true)
    }

    window.addEventListener("error", errorHandler)

    return () => {
      window.removeEventListener("error", errorHandler)
    }
  }, [])

  if (hasError) {
    return (
      fallback || (
        <div className="flex min-h-[200px] w-full flex-col items-center justify-center rounded-lg border border-amber-200 bg-amber-50 p-6 text-center">
          <AlertTriangle className="mb-4 h-12 w-12 text-amber-500" />
          <h3 className="mb-2 text-lg font-semibold text-gray-900">Bir şeyler yanlış gitti</h3>
          <p className="text-gray-600">Sayfayı yenilemeyi deneyin veya daha sonra tekrar ziyaret edin.</p>
        </div>
      )
    )
  }

  return <>{children}</>
}
