import { type NextRequest, NextResponse } from "next/server"
import { defaultLocale, locales } from "@/lib/i18n"

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) return NextResponse.next()

  // Redirect if there is no locale
  const locale = defaultLocale

  // e.g. incoming request is /products
  // The new URL is now /en/products
  return NextResponse.redirect(
    new URL(`/${locale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`, request.url),
  )
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc.)
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.svg$|.*\\.mp4$).*)",
  ],
}
