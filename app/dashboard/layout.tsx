"use client"

import type React from "react"

import { useAuth } from "@/components/auth/auth-provider"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { signOut } from "firebase/auth"
import { auth } from "@/lib/firebase/client"
import Link from "next/link"
import { HomeIcon, SettingsIcon, UsersIcon, LogOutIcon } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { currentUser, loading } = useAuth()

  const handleLogout = async () => {
    try {
      await signOut(auth)
      toast({
        title: "Çıkış Yapıldı",
        description: "Başarıyla çıkış yaptınız.",
      })
    } catch (error: any) {
      toast({
        title: "Çıkış Hatası",
        description: error.message,
        variant: "destructive",
      })
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Yükleniyor...</p>
      </div>
    )
  }

  if (!currentUser) {
    // AuthProvider handles redirection, but this prevents content from flashing
    return null
  }

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="/dashboard">
              <span className="text-lg">Admin Paneli</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50"
                href="/dashboard"
              >
                <HomeIcon className="h-4 w-4" />
                Ana Sayfa
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/dashboard/users"
              >
                <UsersIcon className="h-4 w-4" />
                Kullanıcılar
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/dashboard/settings"
              >
                <SettingsIcon className="h-4 w-4" />
                Ayarlar
              </Link>
              <Button
                onClick={handleLogout}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                variant="ghost"
              >
                <LogOutIcon className="h-4 w-4" />
                Çıkış Yap
              </Button>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 lg:h-[60px]">
          <Link className="lg:hidden" href="#">
            <span className="sr-only">Home</span>
          </Link>
          <h1 className="text-lg font-semibold">Yönetici Paneli</h1>
          <div className="ml-auto flex items-center gap-2">
            <Card className="p-2 text-sm">Hoş Geldiniz, {currentUser.email || "Yönetici"}</Card>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">{children}</main>
      </div>
    </div>
  )
}
