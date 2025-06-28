import { redirect } from "next/navigation"

export default function BlogPage() {
  // Doğrudan /blog yoluna erişildiğinde varsayılan locale'a yönlendir
  redirect("/tr/blog")
}
