import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MenuSection() {
  const menuCategories = [
    {
      id: "seafood",
      name: "Deniz Ürünleri",
      items: [
        {
          name: "Izgara Çipura",
          description: "Taze çipura, mevsim yeşillikleri ve limon ile servis edilir",
          price: "400 TL",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8728_baliklar.jpg-TVWfUlRPXePZPxvJMg61jhNMzhvF0U.jpeg",
        },
        {
          name: "Karides Güveç",
          description: "Taze karides, sarımsak, domates ve özel sosumuz ile hazırlanır",
          price: "750 TL",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6217_deniz_sicak.jpg-0MumAmT23XzdXMrNQ0d4bcuBTwBAat.jpeg",
        },
        {
          name: "Kalamar Tava",
          description: "Çıtır kalamar, tartar sos ile servis edilir",
          price: "700 TL",
          image: "/golden-crispy-calamari.png",
        },
      ],
    },
    {
      id: "mains",
      name: "Ana Yemekler",
      items: [
        {
          name: "Kuzu Tandır",
          description: "Özel baharatlarla marine edilmiş, fırında pişirilmiş kuzu eti",
          price: "850 TL",
          image: "/sizzling-lamb-tandoori.png",
        },
        {
          name: "Köfte",
          description: "El yapımı köfte, pilav ve ızgara sebzeler ile servis edilir",
          price: "500 TL",
          image: "/spiced-turkish-meatballs.png",
        },
        {
          name: "Patlıcan Kebabı",
          description: "Közlenmiş patlıcan üzerinde kuzu eti, özel sos ile",
          price: "850 TL",
          image: "/smoky-eggplant-kebab.png",
        },
      ],
    },
    {
      id: "breakfast",
      name: "Kahvaltı",
      items: [
        {
          name: "Serpme Kahvaltı",
          description: "Zengin içerikli geleneksel Türk kahvaltısı",
          price: "650 TL / kişi başı",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/82_slide2.jpg-HuQ196HBptu7yEXQo7UoaqYPiohpHc.jpeg",
        },
        {
          name: "Menemen",
          description: "Domates, biber ve yumurta ile hazırlanan geleneksel kahvaltı yemeği",
          price: "350 TL",
          image: "/hearty-turkish-menemen.png",
        },
        {
          name: "Simit Tabağı",
          description: "Taze simit, beyaz peynir, domates, salatalık ve zeytin ile",
          price: "280 TL",
          image: "/simit-spread.png",
        },
      ],
    },
  ]

  return (
    <section className="bg-gray-50 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Menümüz</h2>
          <div className="mx-auto mt-2 h-1 w-20 bg-amber-600"></div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Taze malzemelerle hazırlanan özel lezzetlerimiz
          </p>
        </div>

        <div className="mt-12">
          <Tabs defaultValue="seafood" className="w-full">
            <TabsList className="mx-auto mb-8 grid w-full max-w-md grid-cols-3">
              {menuCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-sm">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {menuCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
                    >
                      <div className="relative h-48 w-full">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                          <span className="font-medium text-amber-600">{item.price}</span>
                        </div>
                        <p className="mt-2 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-12 text-center">
            <Button className="bg-amber-600 hover:bg-amber-700">
              Tüm Menüyü Gör <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
