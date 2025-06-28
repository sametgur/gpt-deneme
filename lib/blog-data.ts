import { akyakaEnIyiRestorant } from "./blog-posts/akyaka-en-iyi-restorant"
import { turkMutfagininEssizLezzetleri } from "./blog-posts/turk-mutfaginin-essizLezzetleri"
import { akyakaGeziRehberi } from "./blog-posts/akyaka-gezi-rehberi"
import { denizUrunleriSezonu } from "./blog-posts/deniz-urunleri-sezonu"
import { akyakaMimarisi } from "./blog-posts/akyaka-mimarisi"
import { turkKahvaltisi } from "./blog-posts/turk-kahvaltisi"
import { akyakaYazAktiviteleri } from "./blog-posts/akyaka-yaz-aktiviteleri"
import { turkTatlilari } from "./blog-posts/turk-tatlilari"
import { akyakaAksamYemegi } from "./blog-posts/akyaka-aksam-yemegi"
import { turkIcecekleri } from "./blog-posts/turk-icecekleri"
import { akyakaKisAktiviteleri } from "./blog-posts/akyaka-kis-aktiviteleri"
import { vejetaryenTurkMutfagi } from "./blog-posts/vejetaryen-turk-mutfagi"
import { akyakaKonaklama } from "./blog-posts/akyaka-konaklama"
import { akyakaAzmaktaCennettenBirGece } from "./blog-posts/akyaka-azmakta-cennetten-bir-gece"
import { aHeavenlyNightAtAkyakaAzmak } from "./blog-posts/a-heavenly-night-at-akyaka-azmak"
import { eineHimmlischeNachtAmAkyakaAzmak } from "./blog-posts/eine-himmlische-nacht-am-akyaka-azmak"

export type Locale = "tr" | "en" | "de"

// Blog yazısı için tip tanımı
export interface BlogPost {
  id?: string
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  updatedAt?: string
  image?: string
  coverImage?: string
  author: string | Author
  categories: BlogCategory[]
  tags?: string[]
  locale: Locale
  category?: string // Geriye dönük uyumluluk için
  readingTime?: string
}

export interface Author {
  name: string
  bio?: string
  image?: string
}

// Blog kategorisi için tip tanımı
export interface BlogCategory {
  id: string
  name: string
  description?: string
  count?: number
  locale?: string
}

export const blogCategories: BlogCategory[] = [
  { id: "yemek-kulturu", name: "Yemek Kültürü", description: "Yemek kültürü ile ilgili yazılar", locale: "tr" },
  { id: "gezi", name: "Gezi", description: "Gezi ile ilgili yazılar", locale: "tr" },
  { id: "restoran", name: "Restoran", description: "Restoran ile ilgili yazılar", locale: "tr" },
  { id: "food-culture", name: "Food Culture", description: "Articles about food culture", locale: "en" },
  { id: "travel", name: "Travel", description: "Articles about travel", locale: "en" },
  { id: "restaurant", name: "Restaurant", description: "Articles about restaurant", locale: "en" },
  { id: "esskultur", name: "Esskultur", description: "Artikel über Esskultur", locale: "de" },
  { id: "reise", name: "Reise", description: "Artikel über Reisen", locale: "de" },
  { id: "restaurant-de", name: "Restaurant", description: "Artikel über Restaurant", locale: "de" },
]

export const blogPosts: BlogPost[] = [
  akyakaEnIyiRestorant,
  turkMutfagininEssizLezzetleri,
  akyakaGeziRehberi,
  denizUrunleriSezonu,
  akyakaMimarisi,
  turkKahvaltisi,
  akyakaYazAktiviteleri,
  turkTatlilari,
  akyakaAksamYemegi,
  turkIcecekleri,
  akyakaKisAktiviteleri,
  vejetaryenTurkMutfagi,
  akyakaKonaklama,
  akyakaAzmaktaCennettenBirGece,
  aHeavenlyNightAtAkyakaAzmak,
  eineHimmlischeNachtAmAkyakaAzmak,
]

// Tüm blog yazılarını getir
export function getAllPosts(locale: string): BlogPost[] {
  try {
    return blogPosts.filter((post) => post.locale === locale)
  } catch (error) {
    console.error("Error in getAllPosts:", error)
    return []
  }
}

// Slug'a göre blog yazısını getir
export function getPostBySlug(slug: string, locale: string): BlogPost | undefined {
  try {
    return blogPosts.find((post) => post.slug === slug && post.locale === locale)
  } catch (error) {
    console.error(`Error in getPostBySlug for slug ${slug}:`, error)
    return undefined
  }
}

// For backward compatibility if needed
export function getBlogPostBySlug(slug: string, locale: string): BlogPost | undefined {
  return getPostBySlug(slug, locale)
}

// Kategoriye göre blog yazılarını getir
export function getPostsByCategory(categoryId: string, locale: string): BlogPost[] {
  try {
    return blogPosts.filter((post) => {
      // Eski yapı için kontrol
      if (post.category === categoryId && post.locale === locale) {
        return true
      }

      // Yeni yapı için kontrol
      return (
        post.categories?.some((cat) => (typeof cat === "string" ? cat === categoryId : cat.id === categoryId)) &&
        post.locale === locale
      )
    })
  } catch (error) {
    console.error(`Error in getPostsByCategory for category ${categoryId}:`, error)
    return []
  }
}

// Kategori ID'sine göre kategoriyi getir
export function getCategoryById(categoryId: string, locale: string): BlogCategory | undefined {
  try {
    return blogCategories.find((category) => category.id === categoryId && category.locale === locale)
  } catch (error) {
    console.error(`Error in getCategoryById for category ${categoryId}:`, error)
    return undefined
  }
}

// Tüm kategorileri getir
export async function getAllCategories(locale: string): Promise<BlogCategory[]> {
  try {
    return blogCategories.filter((category) => category.locale === locale)
  } catch (error) {
    console.error("Error in getAllCategories:", error)
    return []
  }
}

// Kategorileri sayılarıyla birlikte getir
export async function getCategories(locale: string): Promise<BlogCategory[]> {
  try {
    return blogCategories
      .filter((category) => category.locale === locale)
      .map((category) => ({
        ...category,
        count: blogPosts.filter((post) => {
          // Eski yapı için kontrol
          if (post.category === category.id && post.locale === locale) {
            return true
          }

          // Yeni yapı için kontrol
          return (
            post.categories?.some((cat) => (typeof cat === "string" ? cat === category.id : cat.id === category.id)) &&
            post.locale === locale
          )
        }).length,
      }))
  } catch (error) {
    console.error("Error in getCategories:", error)
    return []
  }
}

// İlgili yazıları getir
export function getRelatedPosts(currentPost: BlogPost, locale: string, limit = 3): BlogPost[] {
  try {
    if (!currentPost || !currentPost.categories || currentPost.categories.length === 0) {
      return blogPosts.filter((post) => post.slug !== currentPost?.slug && post.locale === locale).slice(0, limit)
    }

    // Mevcut yazının ilk kategorisini al
    const currentCategory =
      typeof currentPost.categories[0] === "string" ? currentPost.categories[0] : currentPost.categories[0]?.id

    // Aynı kategorideki diğer yazıları bul
    const sameCategoryPosts = blogPosts.filter((post) => {
      const hasCategory = post.categories?.some((cat) => {
        const catId = typeof cat === "string" ? cat : cat.id
        return catId === currentCategory
      })

      return hasCategory && post.slug !== currentPost.slug && post.locale === locale
    })

    // Eğer aynı kategoride yeterli yazı yoksa, diğer kategorilerden de ekle
    if (sameCategoryPosts.length < limit) {
      const otherPosts = blogPosts.filter((post) => {
        const hasCategory = post.categories?.some((cat) => {
          const catId = typeof cat === "string" ? cat : cat.id
          return catId === currentCategory
        })

        return !hasCategory && post.slug !== currentPost.slug && post.locale === locale
      })

      return [...sameCategoryPosts, ...otherPosts].slice(0, limit)
    }

    return sameCategoryPosts.slice(0, limit)
  } catch (error) {
    console.error("Error in getRelatedPosts:", error)
    return []
  }
}
