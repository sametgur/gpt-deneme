"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import dynamic from "next/dynamic"
import type { Locale } from "@/lib/i18n"
import { getPathWithLocale } from "@/lib/i18n"

// Import QRMenu component dynamically to avoid SSR issues
const QRMenu = dynamic(() => import("@/components/qr-menu"), {
  ssr: false,
  loading: () => <div className="h-64 w-full animate-pulse rounded-lg bg-gray-200"></div>,
})

interface MenuClientPageProps {
  locale: Locale
}

export default function MenuClientPage({ locale }: MenuClientPageProps) {
  // Define translations directly in the component to avoid issues
  const translations = {
    tr: {
      menu: "Menümüz",
      menuSubtitle: "Akyaka'nın taze malzemeleriyle hazırlanan özel lezzetlerimiz",
      mobileMenu: "Mobil Menümüz",
      mobileMenuSubtitle: "QR kodu tarayarak menümüze hızlıca erişebilirsiniz",
      mobileMenuText1:
        "QR kodu telefonunuzla tarayarak menümüze hızlıca erişebilirsiniz. Masanızda veya evde, menümüzü her zaman yanınızda taşıyın.",
      mobileMenuText2:
        "Menümüzü arkadaşlarınızla paylaşmak için QR kodu indirebilir veya menü linkini kopyalayabilirsiniz.",
      menuCategories: "Menü Kategorileri",
      menuCategoriesSubtitle: "Lezzetli yemeklerimizi kategorilere göre keşfedin",
      viewDetails: "Detayları Gör",
      makeReservation: "Rezervasyon Yap",
      breakfast: "Kahvaltı",
      coldAppetizers: "Soğuk Başlangıçlar",
      hotAppetizers: "Sıcak Başlangıçlar",
      mainCourses: "Ana Yemekler",
      drinks: "İçecekler",
      salads: "Salatalar",
      soups: "Çorbalar",
      pasta: "Makarnalar",
      pizza: "Pizzalar",
      desserts: "Tatlılar",
      seafood: "Deniz Ürünleri",
      specialMenus: "Özel Menüler",
      qrTitle: "Menümüzü Telefonunuzda Görüntüleyin",
      qrSubtitle: "QR kodu tarayarak menümüze hızlıca erişebilirsiniz",
      downloadQrCode: "QR Kodu İndir",
      copyMenuLink: "Menü Linkini Kopyala",
      copied: "Kopyalandı!",
      raki: "Rakı", // Yeni eklendi
      wines: "Şaraplar", // Yeni eklendi
    },
    en: {
      menu: "Our Menu",
      menuSubtitle: "Special flavors prepared with fresh ingredients from Akyaka",
      mobileMenu: "Mobile Menu",
      mobileMenuSubtitle: "Scan the QR code to quickly access our menu",
      mobileMenuText1:
        "Scan the QR code with your phone to quickly access our menu. At the table or at home, always have our menu with you.",
      mobileMenuText2: "You can download the QR code or copy the menu link to share our menu with your friends.",
      menuCategories: "Menu Categories",
      menuCategoriesSubtitle: "Discover our delicious dishes by categories",
      viewDetails: "View Details",
      makeReservation: "Make Reservation",
      breakfast: "Breakfast",
      coldAppetizers: "Cold Appetizers",
      hotAppetizers: "Hot Appetizers",
      mainCourses: "Main Courses",
      drinks: "Drinks",
      salads: "Salads",
      soups: "Soups",
      pasta: "Pasta",
      pizza: "Pizza",
      desserts: "Desserts",
      seafood: "Seafood",
      specialMenus: "Special Menus",
      qrTitle: "View Our Menu on Your Phone",
      qrSubtitle: "Scan the QR code to quickly access our menu",
      downloadQrCode: "Download QR Code",
      copyMenuLink: "Copy Menu Link",
      copied: "Copied!",
      raki: "Raki", // Yeni eklendi
      wines: "Wines", // Yeni eklendi
    },
    de: {
      menu: "Unsere Speisekarte",
      menuSubtitle: "Besondere Aromen, zubereitet mit frischen Zutaten aus Akyaka",
      mobileMenu: "Mobile Speisekarte",
      mobileMenuSubtitle: "Scannen Sie den QR-Code, um schnell auf unsere Speisekarte zuzugreifen",
      mobileMenuText1:
        "Scannen Sie den QR-Code mit Ihrem Telefon, um schnell auf unser Menü zuzugreifen. Am Tisch oder zu Hause, haben Sie unser Menü immer dabei.",
      mobileMenuText2:
        "Sie können den QR-Code herunterladen oder den Menülink kopieren, um unser Menü mit Ihren Freunden zu teilen.",
      menuCategories: "Menükategorien",
      menuCategoriesSubtitle: "Entdecken Sie unsere köstlichen Gerichte nach Kategorien",
      viewDetails: "Details anzeigen",
      makeReservation: "Reservierung vornehmen",
      breakfast: "Frühstück",
      coldAppetizers: "Kalte Vorspeisen",
      hotAppetizers: "Warme Vorspeisen",
      mainCourses: "Hauptgerichte",
      drinks: "Getränke",
      salads: "Salate",
      soups: "Suppen",
      pasta: "Pasta",
      pizza: "Pizza",
      desserts: "Desserts",
      seafood: "Meeresfrüchte",
      specialMenus: "Spezialmenüs",
      qrTitle: "Sehen Sie unsere Speisekarte auf Ihrem Telefon",
      qrSubtitle: "Scannen Sie den QR-Code, um schnell auf unsere Speisekarte zuzugreifen",
      downloadQrCode: "QR-Code herunterladen",
      copyMenuLink: "Menülink kopieren",
      copied: "Kopiert!",
      raki: "Rakı", // Yeni eklendi
      wines: "Weine", // Yeni eklendi
    },
  }

  const t = (key: string) => translations[locale]?.[key as keyof (typeof translations)[typeof locale]] || key

  const menuCategories = [
    {
      id: 2,
      name: t("breakfast"),
      description: "Zengin içerikli geleneksel Türk kahvaltısı ve özel kahvaltı tabakları",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/82_slide2.jpg-HuQ196HBptu7yEXQo7UoaqYPiohpHc.jpeg",
    },
    {
      id: 3,
      name: t("coldAppetizers"),
      description: "Taze ve lezzetli mezeler, salatalar ve soğuk başlangıçlar",
      image: "/turkish-cold-meze.png",
    },
    {
      id: 4,
      name: t("hotAppetizers"),
      description: "Özenle hazırlanmış sıcak başlangıçlar ve ara sıcaklar",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6217_deniz_sicak.jpg-0MumAmT23XzdXMrNQ0d4bcuBTwBAat.jpeg",
    },
    {
      id: 5,
      name: t("mainCourses"),
      description: "Geleneksel Türk mutfağından özel tariflerle hazırlanan ana yemekler",
      image: "/turkish-main-dishes.png",
    },
    {
      id: 6,
      name: t("drinks"),
      description: "Sıcak ve soğuk içecekler, özel kokteyllerimiz",
      image: "/turkish-drinks-trio.png",
    },
    {
      id: 7,
      name: t("salads"),
      description: "Taze mevsim sebzeleriyle hazırlanan sağlıklı salatalar",
      image: "/turkish-fresh-salads.png",
    },
    {
      id: 8,
      name: t("soups"),
      description: "Geleneksel Türk mutfağından özel tariflerle hazırlanan çorbalar",
      image: "/turkish-soups.png",
    },
    {
      id: 9,
      name: t("pasta"),
      description: "El yapımı makarnalar ve özel soslarla hazırlanan makarna çeşitleri",
      image: "/turkish-pasta-dishes.png",
    },
    {
      id: 10,
      name: t("pizza"),
      description: "Taş fırında pişirilen, özel malzemelerle hazırlanan pizza çeşitleri",
      image: "/turkish-style-pizzas.png",
    },
    {
      id: 11,
      name: t("desserts"),
      description: "Geleneksel ve özel tariflerle hazırlanan tatlılar",
      image: "/turkish-desserts-baklava-kunefe.png",
    },
    {
      id: 12,
      name: t("seafood"),
      description: "Akyaka'nın taze deniz ürünleri, özel soslarla hazırlanmış balık çeşitleri",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8728_baliklar.jpg-TVWfUlRPXePZPxvJMg61jhNMzhvF0U.jpeg",
    },
    {
      id: 13,
      name: t("specialMenus"),
      description: "Özel günler ve kutlamalar için hazırlanan menüler",
      image: "/turkish-special-menus.png",
    },
    {
      id: 14, // Yeni Rakı Kategorisi
      name: t("raki"),
      description: "Geleneksel Türk içkisi rakı çeşitleri",
      image: "/turkish-raki-meze.png",
    },
    {
      id: 15, // Yeni Şaraplar Kategorisi
      name: t("wines"),
      description: "Yerel ve uluslararası şarap seçenekleri",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="relative pt-24">
        <div className="relative h-[40vh] w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6268_2b1cd5e4-5d47-4ff3-9f84-6f21acb084eb.jpg-UGrMufDqeFK2GfoBbgM1s91i42cmZD.jpeg"
            alt={t("menu")}
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="mb-4 font-serif text-5xl font-bold tracking-tight md:text-6xl">{t("menu")}</h1>
            <p className="max-w-2xl text-lg md:text-xl">{t("menuSubtitle")}</p>
          </div>
        </div>
      </section>

      {/* QR Menu Section */}
      <section className="bg-amber-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900">{t("mobileMenu")}</h2>
              <div className="mt-2 h-1 w-20 bg-amber-500"></div>
              <p className="mt-6 text-lg text-gray-600">{t("mobileMenuText1")}</p>
              <p className="mt-4 text-lg text-gray-600">{t("mobileMenuText2")}</p>
            </div>
            <div>
              <QRMenu
                locale={locale}
                translations={{
                  title: t("qrTitle"),
                  subtitle: t("qrSubtitle"),
                  downloadQrCode: t("downloadQrCode"),
                  copyMenuLink: t("copyMenuLink"),
                  copied: t("copied"),
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900">{t("menuCategories")}</h2>
            <div className="mx-auto mt-2 h-1 w-20 bg-amber-500"></div>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">{t("menuCategoriesSubtitle")}</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {menuCategories.map((category) => (
              <Link
                key={category.id}
                href={getPathWithLocale(`/menu/${category.id}`, locale)}
                className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                  <p className="mt-2 text-gray-600">{category.description}</p>
                  <div className="mt-4 flex items-center text-amber-600">
                    <span className="font-medium">{t("viewDetails")}</span>
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
