"use client"

import type React from "react"
import Link from "next/link"
import { HomeIcon, SettingsIcon, UsersIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth/auth-provider"
import { useRouter } from "next/navigation"
import { signOut } from "firebase/auth"
import { auth } from "@/lib/firebase/client"
import { useToast } from "@/hooks/use-toast"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { currentUser, loading } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Yükleniyor...</p>
      </div>
    )
  }

  if (!currentUser) {
    router.push("/login")
    return null
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
      toast({
        title: "Çıkış Başarılı",
        description: "Başarıyla çıkış yaptınız.",
      })
      router.push("/login")
    } catch (error: any) {
      toast({
        title: "Çıkış Hatası",
        description: error.message,
        variant: "destructive",
      })
    }
  }

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="/dashboard">
              <Package2Icon className="h-6 w-6" />
              <span className="">Admin Paneli</span>
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
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Button onClick={handleLogout} className="w-full bg-transparent" variant="outline">
              Çıkış Yap
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Ana Sayfa</span>
          </Link>
          <h1 className="font-semibold text-lg">Yönetici Paneli</h1>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">{children}</main>
      </div>
    </div>
  )
}

function Package2Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z" />
      <path d="M12 3v4" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" />
    </svg>
  )
}
