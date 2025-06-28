import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Clock, User } from "lucide-react"

import MainHeader from "@/components/main-header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { defaultLocale } from "@/lib/i18n"
import { getDictionary } from "@/lib/i18n"
import { getLocaleFromParams } from "@/lib/i18n"

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = getLocaleFromParams(params)
  const dict = await getDictionary(locale)

  return {
    title: "Akyaka'da En İyi Restoran - Cennet Restaurant",
    description:
      "Akyaka'da en iyi yemek deneyimi için Cennet Restaurant'ı keşfedin. Taze deniz ürünleri, otantik Türk mutfağı ve muhteşem manzara.",
  }
}

export default async function AkyakaEnIyiRestorantBlog({ params }: { params: { locale: string } }) {
  const locale = getLocaleFromParams(params)

  return (
    <div className="min-h-screen bg-white">
      <MainHeader locale={defaultLocale} />

      {/* Blog Header */}
      <section className="relative pt-24">
        <div className="relative h-[50vh] w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6268_2b1cd5e4-5d47-4ff3-9f84-6f21acb084eb.jpg-UGrMufDqeFK2GfoBbgM1s91i42cmZD.jpeg"
            alt="Akyaka'nın En İyi Restoranı: Cennet Restaurant"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Akyaka'nın En İyi Restoranı: Cennet Restaurant
            </h1>
            <p className="max-w-2xl text-lg md:text-xl">Eşsiz lezzetler, muhteşem manzara ve unutulmaz bir deneyim</p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Blog Meta */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center text-gray-600">
                <User className="mr-2 h-4 w-4" />
                <span className="text-sm">Cennet Restaurant</span>
              </div>
              <div className="flex items-center text-gray-600">
                <CalendarDays className="mr-2 h-4 w-4" />
                <span className="text-sm">15 Haziran 2023</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="mr-2 h-4 w-4" />
                <span className="text-sm">5 dk okuma</span>
              </div>
            </div>
            <div className="flex gap-2">
              <a
                href="#"
                className="rounded-full bg-blue-500 p-2 text-white transition-colors hover:bg-blue-600"
                aria-label="Facebook'ta Paylaş"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="rounded-full bg-sky-500 p-2 text-white transition-colors hover:bg-sky-600"
                aria-label="Twitter'da Paylaş"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="rounded-full bg-green-500 p-2 text-white transition-colors hover:bg-green-600"
                aria-label="WhatsApp'ta Paylaş"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Blog Article */}
          <article className="prose prose-lg max-w-none">
            <h2>Akyaka'da Gastronomi Deneyiminin Zirvesi</h2>
            <p>
              <strong>Akyaka'nın en iyi restoranı</strong> olarak, misafirlerimize sadece bir yemek değil, tüm
              duyularınıza hitap eden eşsiz bir deneyim sunuyoruz. Cennet Restaurant, Azmak Nehri'nin berrak sularının
              üzerinde konumlanmış, Akyaka'nın doğal güzelliklerini ve geleneksel mimarisini yansıtan özel bir mekândır.
            </p>

            <div className="my-8 grid grid-cols-2 gap-4">
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8728_baliklar.jpg-TVWfUlRPXePZPxvJMg61jhNMzhvF0U.jpeg"
                  alt="Cennet Restaurant'ın taze deniz ürünleri"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6217_deniz_sicak.jpg-0MumAmT23XzdXMrNQ0d4bcuBTwBAat.jpeg"
                  alt="Cennet Restaurant'ın özel lezzetleri"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2>Neden Cennet Restaurant Akyaka'nın En İyi Restoranıdır?</h2>
            <p>
              Akyaka'da birçok restoran bulunmasına rağmen, Cennet Restaurant'ı diğerlerinden ayıran ve{" "}
              <strong>Akyaka'nın en iyi restoranı</strong> yapan birçok özellik vardır:
            </p>

            <h3>1. Eşsiz Konum ve Manzara</h3>
            <p>
              Cennet Restaurant, Azmak Nehri'nin denizle buluştuğu noktada, suyun üzerinde konumlanmıştır. Yemek yerken
              Azmak'ın berrak sularını, çevredeki yeşil doğayı ve Gökova Körfezi'nin muhteşem manzarasını
              seyredebilirsiniz. Bu eşsiz konum, yemeğinizi sadece bir öğün olmaktan çıkarıp, unutulmaz bir deneyime
              dönüştürür.
            </p>

            <h3>2. Taze ve Kaliteli Malzemeler</h3>
            <p>
              <strong>Akyaka'nın en iyi restoranı</strong> olarak, mutfağımızda sadece en taze ve kaliteli malzemeleri
              kullanıyoruz. Deniz ürünlerimiz günlük olarak yerel balıkçılardan temin edilirken, sebze ve meyvelerimiz
              bölgedeki çiftçilerden geliyor. Bu, hem yerel ekonomiyi desteklememizi hem de misafirlerimize en taze
              lezzetleri sunmamızı sağlıyor.
            </p>

            <div className="my-8 relative h-80 overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/82_slide2.jpg-HuQ196HBptu7yEXQo7UoaqYPiohpHc.jpeg"
                alt="Cennet Restaurant'ın zengin kahvaltı tabağı"
                fill
                className="object-cover"
              />
            </div>

            <h3>3. Geleneksel Lezzetler ve Modern Sunumlar</h3>
            <p>
              Cennet Restaurant'ta, Ege ve Türk mutfağının geleneksel tariflerini modern sunumlarla buluşturuyoruz.
              Şeflerimiz, yöresel lezzetleri korurken, yaratıcı dokunuşlarla her tabağı bir sanat eserine dönüştürüyor.
              Izgara çipura, karides güveç, ahtapot ızgara gibi deniz ürünleri ve kuzu tandır, patlıcan kebabı gibi et
              yemekleri en çok tercih edilen spesiyallerimiz arasında.
            </p>

            <h3>4. Misafirperverlik ve Kaliteli Hizmet</h3>
            <p>
              <strong>Akyaka'nın en iyi restoranı</strong> olmak sadece lezzetli yemekler sunmakla değil, aynı zamanda
              üstün hizmet kalitesiyle de mümkündür. Cennet Restaurant'ta, her misafirimizi ailemizin bir parçası olarak
              görüyor ve en iyi şekilde ağırlamak için çalışıyoruz. Profesyonel ve güler yüzlü ekibimiz, sizin rahat ve
              keyifli bir yemek deneyimi yaşamanız için her detayı düşünüyor.
            </p>

            <h2>Cennet Restaurant'ın Öne Çıkan Lezzetleri</h2>
            <p>
              <strong>Akyaka'nın en iyi restoranı</strong> olarak, menümüzde birbirinden lezzetli seçenekler
              bulunmaktadır. İşte misafirlerimizin en çok tercih ettiği ve mutlaka denemenizi önerdiğimiz lezzetler:
            </p>

            <h3>Deniz Ürünleri</h3>
            <ul>
              <li>
                <strong>Izgara Çipura:</strong> Akyaka'nın taze çipurası, mevsim yeşillikleri ve limon ile servis edilir
              </li>
              <li>
                <strong>Karides Güveç:</strong> Taze karides, sarımsak, domates ve özel sosumuz ile hazırlanır
              </li>
              <li>
                <strong>Ahtapot Izgara:</strong> Marine edilmiş ahtapot, zeytinyağlı patates püresi üzerinde servis
                edilir
              </li>
            </ul>

            <h3>Ana Yemekler</h3>
            <ul>
              <li>
                <strong>Kuzu Tandır:</strong> Özel baharatlarla marine edilmiş, fırında pişirilmiş kuzu eti
              </li>
              <li>
                <strong>Patlıcan Kebabı:</strong> Közlenmiş patlıcan üzerinde kuzu eti, özel sos ile
              </li>
              <li>
                <strong>Akyaka Güveç:</strong> Yöresel otlar, sebzeler ve et ile hazırlanan özel güveç
              </li>
            </ul>

            <h3>Kahvaltı</h3>
            <p>
              Cennet Restaurant'ın <strong>serpme kahvaltısı</strong>, Akyaka'nın en iyisi olarak bilinir. Beyaz peynir,
              kaşar peyniri, çeçil peyniri, lor peyniri, zeytin çeşitleri, domates, salatalık, yeşil biber, tereyağı,
              bal, kaymak, reçel çeşitleri, tahin pekmez, simit, ekmek çeşitleri, sigara böreği, menemen, sahanda
              yumurta ve sınırsız çay ile zengin bir kahvaltı deneyimi yaşayabilirsiniz.
            </p>

            <div className="my-8 p-6 bg-amber-50 rounded-lg">
              <h3 className="text-xl font-bold text-amber-800 mb-4">Misafirlerimizin Yorumları</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-amber-500 pl-4">
                  <p className="italic text-gray-700">
                    "Akyaka'da denediğim en iyi restoran! Manzara muhteşem, yemekler taze ve lezzetli. Özellikle karides
                    güveç favorim oldu. Kesinlikle tekrar geleceğim."
                  </p>
                  <p className="mt-2 font-medium">- Ahmet Y., İstanbul</p>
                </div>
                <div className="border-l-4 border-amber-500 pl-4">
                  <p className="italic text-gray-700">
                    "Akyaka'ya her geldiğimizde mutlaka uğradığımız bir mekan. Serpme kahvaltısı çok zengin ve lezzetli.
                    Personel çok ilgili ve güler yüzlü. Herkese tavsiye ederim."
                  </p>
                  <p className="mt-2 font-medium">- Ayşe K., Ankara</p>
                </div>
              </div>
            </div>

            <h2>Akyaka'da Nerede Yemek Yenir?</h2>
            <p>
              Akyaka'da yemek yemek için en iyi adres şüphesiz Cennet Restaurant'tır. Azmak Nehri üzerindeki konumu,
              taze deniz ürünleri, geleneksel Türk mutfağı ve profesyonel hizmet anlayışıyla{" "}
              <strong>Akyaka'nın en iyi restoranı</strong> olarak öne çıkmaktadır.
            </p>

            <p>
              Akyaka'ya geldiğinizde, sadece doğal güzellikleri değil, aynı zamanda zengin gastronomi kültürünü de
              deneyimlemek istiyorsanız, Cennet Restaurant tam size göre. Rezervasyon yaptırmayı unutmayın, özellikle
              yaz aylarında ve hafta sonları restoran oldukça yoğun olabilir.
            </p>

            <h2>Nasıl Rezervasyon Yapabilirsiniz?</h2>
            <p>
              <strong>Akyaka'nın en iyi restoranı</strong> Cennet Restaurant'ta unutulmaz bir yemek deneyimi yaşamak
              için hemen rezervasyon yapın. Rezervasyon için aşağıdaki iletişim kanallarını kullanabilirsiniz:
            </p>
            <ul>
              <li>Telefon: +90 252 123 45 67</li>
              <li>E-posta: info@cennetrestaurant.com.tr</li>
              <li>Web sitesi üzerinden online rezervasyon</li>
            </ul>

            <div className="my-8 bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Cennet Restaurant Bilgileri</h3>
              <p>
                <strong>Adres:</strong> Akyaka Mah. Cennet Cad. No:123, Muğla, Türkiye
              </p>
              <p>
                <strong>Çalışma Saatleri:</strong>
              </p>
              <ul>
                <li>Pazartesi - Cuma: 09:00 - 23:00</li>
                <li>Cumartesi - Pazar: 10:00 - 00:00</li>
              </ul>
              <p className="mt-4">
                <strong>Not:</strong> Rezervasyon tavsiye edilir, özellikle yaz aylarında ve hafta sonları.
              </p>
            </div>

            <h2>Sonuç</h2>
            <p>
              Akyaka'nın eşsiz doğal güzellikleri içinde, Azmak Nehri'nin berrak sularının üzerinde konumlanmış Cennet
              Restaurant, sadece bir yemek mekanı değil, aynı zamanda unutulmaz bir deneyim sunuyor.{" "}
              <strong>Akyaka'nın en iyi restoranı</strong> olarak, taze malzemelerle hazırlanan lezzetli yemekleri,
              profesyonel hizmeti ve muhteşem manzarasıyla misafirlerine eşsiz anlar yaşatıyor.
            </p>

            <p>
              Akyaka'ya yolunuz düşerse, bu eşsiz deneyimi kaçırmayın. Cennet Restaurant'ta sizi ağırlamaktan mutluluk
              duyarız.
            </p>
          </article>

          {/* Call to Action */}
          <div className="mt-12 rounded-lg bg-amber-50 p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">Rezervasyon Yapın</h3>
            <p className="mb-6 text-lg text-gray-700">
              Akyaka'nın en iyi restoranında unutulmaz bir yemek deneyimi için hemen rezervasyon yapın.
            </p>
            <Link href="/iletisim">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600">
                Rezervasyon Yap
              </Button>
            </Link>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="mb-6 text-2xl font-bold">İlgili Yazılar</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
                <div className="relative h-48">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8728_baliklar.jpg-TVWfUlRPXePZPxvJMg61jhNMzhvF0U.jpeg"
                    alt="Akyaka'da Deniz Ürünleri Rehberi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="mb-2 text-xl font-bold">Akyaka'da Deniz Ürünleri Rehberi</h4>
                  <p className="mb-4 text-gray-600">
                    Akyaka'nın taze deniz ürünleri ve en lezzetli balık çeşitleri hakkında bilmeniz gereken her şey...
                  </p>
                  <Link href="#" className="text-amber-600 hover:underline">
                    Devamını Oku
                  </Link>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
                <div className="relative h-48">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/82_slide2.jpg-HuQ196HBptu7yEXQo7UoaqYPiohpHc.jpeg"
                    alt="Akyaka'da Kahvaltı Keyfi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="mb-2 text-xl font-bold">Akyaka'da Kahvaltı Keyfi</h4>
                  <p className="mb-4 text-gray-600">
                    Akyaka'da güne güzel bir başlangıç yapmak için en iyi kahvaltı mekanları ve öneriler...
                  </p>
                  <Link href="#" className="text-amber-600 hover:underline">
                    Devamını Oku
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer locale={defaultLocale} />
    </div>
  )
}
