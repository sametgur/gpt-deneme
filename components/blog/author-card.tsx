"use client"

import SafeImage from "@/components/safe-image"
import type { Author } from "@/lib/blog-data"
import type { Locale } from "@/lib/i18n"

interface AuthorCardProps {
  author: string | Author
  locale: Locale
}

export function AuthorCard({ author, locale }: AuthorCardProps) {
  // Eğer author bir string ise, varsayılan bir yazar objesi oluştur
  const authorObj =
    typeof author === "string"
      ? {
          name: author,
          bio:
            locale === "tr"
              ? "Cennet Restaurant ekibi"
              : locale === "de"
                ? "Cennet Restaurant Team"
                : "Cennet Restaurant Team",
          image: "/turkish-chef-portrait.png",
        }
      : author

  // Çoklu dil desteği için name ve bio alanlarını kontrol et
  const name =
    typeof authorObj.name === "object"
      ? authorObj.name[locale] || authorObj.name.tr || "Cennet Restaurant"
      : authorObj.name
  const bio =
    typeof authorObj.bio === "object"
      ? authorObj.bio[locale] ||
        authorObj.bio.tr ||
        (locale === "tr"
          ? "Cennet Restaurant ekibi"
          : locale === "de"
            ? "Cennet Restaurant Team"
            : "Cennet Restaurant Team")
      : authorObj.bio ||
        (locale === "tr"
          ? "Cennet Restaurant ekibi"
          : locale === "de"
            ? "Cennet Restaurant Team"
            : "Cennet Restaurant Team")

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-amber-100">
          <SafeImage
            src={authorObj.image || "/turkish-chef-portrait.png"}
            alt={name}
            fill
            className="object-cover"
            fallbackSrc="/diverse-chef-preparing-food.png"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
          <p className="text-gray-600">{bio}</p>
        </div>
      </div>
    </div>
  )
}

export default AuthorCard
