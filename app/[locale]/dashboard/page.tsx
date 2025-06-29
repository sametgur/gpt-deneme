"use client"

import React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { updateMenuPrices, getMenuItems } from "@/actions/menu"
import { useToast } from "@/hooks/use-toast"
import type { MenuItem } from "@/lib/menu-data"

export default function DashboardPage() {
  const [currentMenuData, setCurrentMenuData] = useState<MenuItem[]>([])
  const { toast } = useToast()

  const [state, formAction, isPending] = React.useActionState(async (previousState: any, formData: FormData) => {
    const updatedPrices: { id: string; price: number }[] = []
    formData.forEach((value, key) => {
      if (key.startsWith("price_")) {
        const id = key.replace("price_", "")
        const price = Number.parseFloat(value as string)
        if (!isNaN(price)) {
          updatedPrices.push({ id, price })
        }
      }
    })

    const result = await updateMenuPrices(updatedPrices)
    if (result.success) {
      toast({
        title: "Başarılı!",
        description: result.message,
        variant: "default",
      })
      fetchMenuData() // Fiyatlar güncellendikten sonra menü öğelerini yeniden çek
    } else {
      toast({
        title: "Hata!",
        description: result.message,
        variant: "destructive",
      })
    }
    return result
  }, null)

  const fetchMenuData = async () => {
    try {
      const items = await getMenuItems()
      setCurrentMenuData(items)
    } catch (error) {
      console.error("Menü verileri çekilirken hata oluştu:", error)
      toast({
        title: "Hata!",
        description: "Menü verileri yüklenirken bir sorun oluştu.",
        variant: "destructive",
      })
    }
  }

  useEffect(() => {
    fetchMenuData()
  }, [])

  return (
    <form action={formAction} className="space-y-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Kategori</TableHead>
            <TableHead className="w-[250px]">Ürün Adı (TR)</TableHead>
            <TableHead className="w-[100px]">Mevcut Fiyat (₺)</TableHead>
            <TableHead className="text-right w-[120px]">Yeni Fiyat (₺)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentMenuData.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">
                {item.category.charAt(0).toUpperCase() + item.category.slice(1).replace(/-/g, " ")}
              </TableCell>
              <TableCell>{item.name.tr}</TableCell>
              <TableCell>{item.price.toFixed(2)}</TableCell>
              <TableCell className="text-right">
                <Label htmlFor={`price-${item.id}`} className="sr-only">
                  {`Yeni Fiyat ${item.name.tr}`}
                </Label>
                <Input
                  id={`price-${item.id}`}
                  name={`price_${item.id}`}
                  type="number"
                  step="0.01"
                  defaultValue={item.price}
                  className="w-24 text-right"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-end">
        <Button type="submit" disabled={isPending}>
          {isPending ? "Kaydediliyor..." : "Fiyatları Kaydet"}
        </Button>
      </div>
    </form>
  )
}
