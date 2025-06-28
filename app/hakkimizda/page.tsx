import type { Metadata } from "next"
import Image from "next/image"

import MainHeader from "@/components/main-header"
import Footer from "@/components/footer"
import { defaultLocale } from "@/lib/i18n"

export const metadata: Metadata = {
  title: "Hakkımızda | Cennet Restaurant Akyaka",
  description:
    "Cennet Restaurant'ın hikayesi, değerleri ve misyonu. Akyaka'nın kalbinde, suyun üzerinde konumlanmış restoranımızı tanıyın.",
  keywords: "Cennet Restaurant hakkında, Akyaka restoran, Cennet Restaurant hikaye, Akyaka yemek",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <MainHeader />

      {/* Page Header */}
      <section className="relative pt-24">
        <div className="relative h-[40vh] w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6268_2b1cd5e4-5d47-4ff3-9f84-6f21acb084eb.jpg-UGrMufDqeFK2GfoBbgM1s91i42cmZD.jpeg"
            alt="Cennet Restaurant Hakkında"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="mb-4 font-serif text-5xl font-bold tracking-tight md:text-6xl">Hakkımızda</h1>
            <p className="max-w-2xl text-lg md:text-xl">Cennet Restaurant'ın hikayesi ve değerlerimiz</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hikayemiz</h2>
              <div className="mt-2 h-1 w-20 bg-amber-500"></div>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                2005 yılından bu yana, Cennet Restaurant olarak misafirlerimize en taze deniz ürünleri ve geleneksel
                Türk mutfağının eşsiz lezzetlerini sunuyoruz. Akyaka'nın doğal güzellikleri içerisinde, suyun üzerinde
                konumlanmış restoranımızda, unutulmaz bir yemek deneyimi yaşamanız için sizi bekliyoruz.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Kurucumuz Ahmet Bey, Ege mutfağına olan tutkusu ve deniz ürünlerine olan sevgisiyle bu yolculuğa
                başladı. Akyaka'nın eşsiz doğasından ilham alarak, misafirlerimize hem göze hem damağa hitap eden bir
                deneyim sunmayı hedefledi.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Bugün, aile işletmesi olarak devam eden Cennet Restaurant, geleneksel tatları modern sunumlarla
                buluşturarak, her yaştan misafirimize unutulmaz anlar yaşatmaya devam ediyor.
              </p>
            </div>
            <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6268_2b1cd5e4-5d47-4ff3-9f84-6f21acb084eb.jpg-UGrMufDqeFK2GfoBbgM1s91i42cmZD.jpeg"
                alt="Cennet Restaurant waterside view"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-24 grid gap-12 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8728_baliklar.jpg-TVWfUlRPXePZPxvJMg61jhNMzhvF0U.jpeg"
                      alt="Taze balık"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-40 overflow-hidden rounded-lg shadow-lg">
                    <Image src="/turkish-chef-cooking.png" alt="Şefimiz" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-40 overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6217_deniz_sicak.jpg-0MumAmT23XzdXMrNQ0d4bcuBTwBAat.jpeg"
                      alt="Deniz ürünleri"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/82_slide2.jpg-HuQ196HBptu7yEXQo7UoaqYPiohpHc.jpeg"
                      alt="Kahvaltı"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Değerlerimiz</h2>
              <div className="mt-2 h-1 w-20 bg-amber-500"></div>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Taze ve Kaliteli Malzemeler</h3>
                  <p className="mt-2 text-gray-600">
                    Her gün taze deniz ürünleri ve yerel üreticilerden temin ettiğimiz en kaliteli malzemelerle
                    yemeklerimizi hazırlıyoruz. Mevsiminde ve taze olmayan hiçbir ürünü mutfağımızda kullanmıyoruz.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Geleneksel Lezzetler</h3>
                  <p className="mt-2 text-gray-600">
                    Ege ve Türk mutfağının geleneksel tariflerini koruyarak, nesilden nesile aktarılan lezzetleri
                    sizlere sunuyoruz. Her bir yemeğimizde, yüzyıllardır süregelen mutfak kültürümüzün izlerini
                    bulabilirsiniz.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Misafirperverlik</h3>
                  <p className="mt-2 text-gray-600">
                    Biz sadece yemek servisi yapmıyoruz, misafirlerimize unutulmaz bir deneyim yaşatıyoruz. Her bir
                    misafirimizi ailemizin bir parçası olarak görüyor ve en iyi şekilde ağırlamak için çalışıyoruz.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Doğaya Saygı</h3>
                  <p className="mt-2 text-gray-600">
                    Akyaka'nın eşsiz doğasının bir parçası olarak, çevreye saygılı bir işletme olmayı önemsiyoruz.
                    Sürdürülebilir balıkçılık uygulamalarını destekliyor ve atık yönetimine özen gösteriyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ekibimiz</h2>
              <div className="mx-auto mt-2 h-1 w-20 bg-amber-500"></div>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
                Deneyimli şeflerimiz ve güler yüzlü ekibimizle sizlere en iyi hizmeti sunmak için buradayız
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="relative h-80">
                  <Image src="/turkish-chef-portrait.png" alt="Baş Şef Mehmet Usta" fill className="object-cover" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">Mehmet Usta</h3>
                  <p className="text-gray-500">Baş Şef</p>
                  <p className="mt-2 text-gray-600">
                    20 yıllık deneyimiyle Ege ve deniz ürünleri mutfağının ustası. Özel tarifleriyle misafirlerimize
                    unutulmaz lezzetler sunuyor.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="relative h-80">
                  <Image
                    src="/turkish-restaurant-manager.png"
                    alt="Restoran Müdürü Ayşe Hanım"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">Ayşe Hanım</h3>
                  <p className="text-gray-500">Restoran Müdürü</p>
                  <p className="mt-2 text-gray-600">
                    15 yıldır Cennet Restaurant ailesinin bir parçası. Misafirlerimizin memnuniyeti için titizlikle
                    çalışıyor.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="relative h-80">
                  <Image src="/turkish-sous-chef.png" alt="Şef Yardımcısı Ali Usta" fill className="object-cover" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">Ali Usta</h3>
                  <p className="text-gray-500">Şef Yardımcısı</p>
                  <p className="mt-2 text-gray-600">
                    Genç ve yetenekli şefimiz, modern tekniklerle geleneksel lezzetleri buluşturuyor. Yaratıcı
                    sunumlarıyla tanınıyor.
                  </p>
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
