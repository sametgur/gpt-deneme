"use server"

import { menuData } from "@/lib/menu-data"

export async function updateMenuPrices(formData: FormData) {
  // Simulate a delay for network request
  await new Promise((resolve) => setTimeout(resolve, 500))

  const updatedPrices: { id: string; price: number }[] = []

  for (const [key, value] of formData.entries()) {
    if (key.startsWith("price-")) {
      const itemId = key.replace("price-", "")
      const price = Number.parseFloat(value as string)
      if (!isNaN(price)) {
        updatedPrices.push({ id: itemId, price })
      }
    }
  }

  // In a real application, you would update your database here.
  // For this example, we'll just log the updates.
  console.log("Updating menu prices:", updatedPrices)

  // Find and update prices in the in-memory menuData (for demonstration purposes)
  updatedPrices.forEach((updatedItem) => {
    for (const category of menuData) {
      const item = category.items.find((item) => item.id === updatedItem.id)
      if (item) {
        item.price = updatedItem.price
        break // Found the item, move to the next updatedItem
      }
    }
  })

  return { success: true, message: "Menü fiyatları başarıyla güncellendi!" }
}
