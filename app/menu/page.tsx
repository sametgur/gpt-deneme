import { redirect } from "next/navigation"

export default function MenuRedirectPage() {
  // Doğrudan /menu yoluna erişildiğinde /tr/menu'ye yönlendir
  redirect("/tr/menu")
}
