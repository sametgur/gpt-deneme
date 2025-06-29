"use server"

import { menuData, type MenuItem } from "@/lib/menu-data"

interface UpdatePricePayload {
  id: string
  price: number
}

export async function updateMenuPrices(
  updatedItems: UpdatePricePayload[],
): Promise<{ success: boolean; message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate network delay

  try {
    updatedItems.forEach((updatedItem) => {
      let found = false
      for (const category of menuData) {
        const itemIndex = category.items.findIndex((item) => item.id === updatedItem.id)
        if (itemIndex !== -1) {
          category.items[itemIndex].price = updatedItem.price
          found = true
          break
        }
      }
      if (!found) {
        console.warn(`Menü öğesi bulunamadı: ${updatedItem.id}`)
      }
    })

    console.log("Menü fiyatları başarıyla güncellendi (simüle edildi).")
    // In a real application, you would save this to a database.
    // For example: await db.saveMenuData(menuData);
    return { success: true, message: "Menü fiyatları başarıyla güncellendi!" }
  } catch (error) {
    console.error("Menü fiyatları güncellenirken hata oluştu:", error)
    return { success: false, message: "Menü fiyatları güncellenirken bir hata oluştu." }
  }
}

export async function getMenuItems(): Promise<MenuItem[]> {
  await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate network delay

  const allItems: MenuItem[] = []
  menuData.forEach((category) => {
    category.items.forEach((item) => {
      allItems.push({
        ...item,
        category: category.name.tr, // Use Turkish category name for display in dashboard
      })
    })
  })
  return allItems
}
