"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Check, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { type Locale, localeFlags, localeNames, getLocaleFromPathname, getPathWithLocale } from "@/lib/i18n"

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = getLocaleFromPathname(pathname)
  const [isOpen, setIsOpen] = useState(false)

  const handleLocaleChange = (locale: Locale) => {
    const newPath = getPathWithLocale(pathname, locale)
    router.push(newPath)
    setIsOpen(false)
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={`flex items-center gap-2 rounded-full border-2 px-3 py-1 ${
            isOpen ? "border-amber-500 bg-amber-50" : "border-gray-300"
          }`}
        >
          <Globe className="h-4 w-4" />
          <span>
            {localeFlags[currentLocale]} {localeNames[currentLocale]}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(localeNames).map(([locale, name]) => (
          <DropdownMenuItem
            key={locale}
            className="flex cursor-pointer items-center justify-between"
            onClick={() => handleLocaleChange(locale as Locale)}
          >
            <span>
              {localeFlags[locale as Locale]} {name}
            </span>
            {currentLocale === locale && <Check className="ml-2 h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
