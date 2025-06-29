import type React from "react"
import Link from "next/link"
import { Home, Utensils } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r bg-background sm:flex">
        <div className="flex h-16 items-center border-b px-4 lg:px-6">
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
            <Utensils className="h-6 w-6" />
            <span>Cennet Admin</span>
          </Link>
        </div>
        <nav className="flex flex-col gap-2 p-4 lg:p-6">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <Home className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
          >
            <Utensils className="h-4 w-4" />
            Menü Fiyatları
          </Link>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-64">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 lg:px-6">
          <h1 className="text-xl font-semibold">Menü Fiyatları Yönetimi</h1>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Yönetici Paneli</CardTitle>
            </CardHeader>
            <CardContent>{children}</CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
