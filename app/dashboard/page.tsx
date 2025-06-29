"use client"

import React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { menuData, type MenuCategory } from "@/lib/menu-data"
import { updateMenuPrices } from "@/actions/menu"
import { useToast } from "@/hooks/use-toast" // Import useToast hook

export default function DashboardPage() {
  const [currentMenuData, setCurrentMenuData] = useState<MenuCategory[]>(menuData)
  const { toast } = useToast() // Get the toast function from the hook

  useEffect(() => {
    // In a real app, you might fetch the latest menu data here
    // For this example, we're using the in-memory menuData
    setCurrentMenuData(menuData)
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const result = await updateMenuPrices(formData)

    if (result.success) {
      toast({
        title: "Başarılı!",
        description: result.message,
        variant: "default",
      })
      // Optionally, re-fetch or update local state if prices were persisted
      // For this example, menuData is updated directly in the action for demo purposes
      setCurrentMenuData([...menuData]) // Force re-render with updated prices
    } else {
      toast({
        title: "Hata!",
        description: result.message,
        variant: "destructive",
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Kategori</TableHead>
            <TableHead className="w-[300px]">Ürün Adı (TR)</TableHead>
            <TableHead>Mevcut Fiyat</TableHead>
            <TableHead className="text-right">Yeni Fiyat</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentMenuData.map((category) => (
            <React.Fragment key={category.id}>
              <TableRow className="bg-gray-50">
                <TableCell colSpan={4} className="font-semibold text-lg">
                  {category.name.tr}
                </TableCell>
              </TableRow>
              {category.items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{""}</TableCell> {/* Empty cell for alignment */}
                  <TableCell className="font-medium">{item.name.tr}</TableCell>
                  <TableCell>{item.price} TL</TableCell>
                  <TableCell className="text-right">
                    <Label htmlFor={`price-${item.id}`} className="sr-only">
                      {`Yeni Fiyat ${item.name.tr}`}
                    </Label>
                    <Input
                      id={`price-${item.id}`}
                      name={`price-${item.id}`}
                      type="number"
                      step="0.01"
                      defaultValue={item.price}
                      className="w-24 text-right"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-end">
        <Button type="submit">Fiyatları Kaydet</Button>
      </div>
    </form>
  )
}
