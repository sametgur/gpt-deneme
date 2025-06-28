"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Locale } from "@/lib/i18n"
import { translations } from "@/lib/i18n/translations"
import ErrorBoundary from "@/components/error-boundary"

interface MenuClientPageProps {
  locale: Locale
}

export default function MenuClientPage({ locale }: MenuClientPageProps) {
  // Güvenli çeviri fonksiyonu
  const t = (key: keyof (typeof translations)[typeof locale]) => {
    // Locale veya translations[locale] tanımsızsa, key'i döndür
    if (!locale || !translations[locale]) return key
    // Çeviri varsa döndür, yoksa key'i döndür
    return translations[locale][key] || key
  }

  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: t("allCategories") },
    {
      id: "hot-appetizers",
      name: locale === "tr" ? "Ara Sıcaklar" : locale === "de" ? "Warme Vorspeisen" : "Hot Appetizers",
    },
    {
      id: "breakfast",
      name:
        locale === "tr"
          ? "Kahvaltı & Başlangıçlar"
          : locale === "de"
            ? "Frühstück & Vorspeisen"
            : "Breakfast & Starters",
    },
    {
      id: "cold-appetizers",
      name: locale === "tr" ? "Soğuk Mezeler" : locale === "de" ? "Kalte Vorspeisen" : "Cold Appetizers",
    },
    {
      id: "seafood-cold",
      name:
        locale === "tr" ? "Deniz Soğuk Mezeler" : locale === "de" ? "Kalte Meeresfrüchte" : "Seafood Cold Appetizers",
    },
    {
      id: "seafood-hot",
      name: locale === "tr" ? "Deniz Ara Sıcaklar" : locale === "de" ? "Warme Meeresfrüchte" : "Seafood Hot Appetizers",
    },
    { id: "salads", name: locale === "tr" ? "Salatalar" : locale === "de" ? "Salate" : "Salads" },
    { id: "meat", name: locale === "tr" ? "Etler" : locale === "de" ? "Fleischgerichte" : "Meat Dishes" },
    { id: "fish", name: locale === "tr" ? "Balıklar" : locale === "de" ? "Fischgerichte" : "Fish" },
    { id: "desserts", name: locale === "tr" ? "Tatlılar" : locale === "de" ? "Desserts" : "Desserts" },
    { id: "fruits", name: locale === "tr" ? "Meyveler" : locale === "de" ? "Früchte" : "Fruits" },
    {
      id: "alcoholic",
      name: locale === "tr" ? "Alkollü İçecekler" : locale === "de" ? "Alkoholische Getränke" : "Alcoholic Beverages",
    },
    { id: "wines", name: locale === "tr" ? "Şaraplar" : locale === "de" ? "Weine" : "Wines" },
    { id: "drinks", name: locale === "tr" ? "İçecekler" : locale === "de" ? "Getränke" : "Drinks" },
  ]

  // Ara Sıcaklar (Hot Appetizers)
  const hotAppetizers = [
    {
      id: "hot-app-1",
      name: locale === "tr" ? "Cips" : locale === "de" ? "Chips" : "Chips",
      description:
        locale === "tr" ? "Taze patates cipsleri" : locale === "de" ? "Frische Kartoffelchips" : "Fresh potato chips",
      price: "300 TL",
      image: "/crispy-potato-chips.png",
      category: "hot-appetizers",
    },
    {
      id: "hot-app-2",
      name: locale === "tr" ? "Duble Cips" : locale === "de" ? "Doppelte Chips" : "Double Chips",
      description:
        locale === "tr"
          ? "Büyük boy patates cipsleri"
          : locale === "de"
            ? "Große Portion Kartoffelchips"
            : "Large portion of potato chips",
      price: "350 TL",
      image: "/crispy-potato-chips.png",
      category: "hot-appetizers",
    },
    {
      id: "hot-app-3",
      name: locale === "tr" ? "Patates Kroket" : locale === "de" ? "Kartoffelkroketten" : "Potato Croquettes",
      description:
        locale === "tr"
          ? "Çıtır patates kroketleri"
          : locale === "de"
            ? "Knusprige Kartoffelkroketten"
            : "Crispy potato croquettes",
      price: "300 TL",
      image: "/potato-croquettes.png",
      category: "hot-appetizers",
    },
    {
      id: "hot-app-4",
      name: locale === "tr" ? "Kaşarlı Mantar" : locale === "de" ? "Pilze mit Käse" : "Mushrooms with Cheese",
      description:
        locale === "tr"
          ? "Kaşar peyniri ile fırınlanmış mantarlar"
          : locale === "de"
            ? "Gebackene Pilze mit Käse"
            : "Baked mushrooms with cheese",
      price: "300 TL",
      image: "/mushrooms-with-cheese.png",
      category: "hot-app-appetizers",
    },
    {
      id: "hot-app-5",
      name: locale === "tr" ? "Paçanga Böreği" : locale === "de" ? "Paçanga Börek" : "Paçanga Pastry",
      description:
        locale === "tr"
          ? "Pastırma ve kaşar peyniri ile hazırlanan börek"
          : locale === "de"
            ? "Teigröllchen mit Pastırma ve Käse"
            : "Pastry rolls with pastırma and cheese",
      price: "350 TL",
      image: "/turkish-pacanga-pastirma-borek.png",
      category: "hot-appetizers",
    },
  ]

  // Kahvaltı & Başlangıçlar (Breakfast & Starters)
  const breakfastItems = [
    {
      id: "breakfast-1",
      name: locale === "tr" ? "Serpme Kahvaltı" : locale === "de" ? "Türkisches Frühstück" : "Turkish Breakfast Spread",
      description:
        locale === "tr"
          ? "Zengin içerikli geleneksel Türk kahvaltısı"
          : locale === "de"
            ? "Reichhaltiges traditionelles türkisches Frühstück"
            : "Rich traditional Turkish breakfast spread",
      price: "650 TL",
      image: "/turkish-breakfast-plate.png",
      category: "breakfast",
      featured: true,
    },
    {
      id: "breakfast-2",
      name: locale === "tr" ? "Omlet" : locale === "de" ? "Omelett" : "Omelette",
      description: locale === "tr" ? "Sade omlet" : locale === "de" ? "Einfaches Omelett" : "Plain omelette",
      price: "300 TL",
      image: "/plain-omelette.png",
      category: "breakfast",
    },
    {
      id: "breakfast-3",
      name: locale === "tr" ? "Sucuklu Omlet" : locale === "de" ? "Omelett mit Sucuk" : "Omelette with Sucuk",
      description:
        locale === "tr"
          ? "Türk sucuğu ile hazırlanan omlet"
          : locale === "de"
            ? "Omelett mit türkischer Wurst"
            : "Omelette with Turkish sausage",
      price: "350 TL",
      image: "/sucuk-omelette.png",
      category: "breakfast",
    },
    {
      id: "breakfast-4",
      name: locale === "tr" ? "Menemen" : locale === "de" ? "Menemen" : "Menemen",
      description:
        locale === "tr"
          ? "Domates, biber ve yumurta ile hazırlanan geleneksel kahvaltı yemeği"
          : locale === "de"
            ? "Traditionelles Frühstücksgericht mit Tomaten, Paprika ve Eiern"
            : "Traditional breakfast dish with tomatoes, peppers and eggs",
      price: "350 TL",
      image: "/hearty-turkish-menemen.png",
      category: "breakfast",
    },
    {
      id: "breakfast-5",
      name: locale === "tr" ? "Kaşarlı Omlet" : locale === "de" ? "Omelett mit Käse" : "Cheese Omelette",
      description:
        locale === "tr"
          ? "Kaşar peyniri ile hazırlanan omlet"
          : locale === "de"
            ? "Omelett mit Käse"
            : "Omelette with cheese",
      price: "300 TL",
      image: "/turkish-cheese-omelette.png",
      category: "breakfast",
    },
    {
      id: "breakfast-6",
      name: locale === "tr" ? "Kaşarlı Yumurta" : locale === "de" ? "Eier mit Käse" : "Eggs with Cheese",
      description:
        locale === "tr"
          ? "Kaşar peyniri ile pişirilmiş yumurta"
          : locale === "de"
            ? "Eier mit Käse"
            : "Eggs cooked with cheese",
      price: "300 TL",
      image: "/eggs-with-cheese.png",
      category: "breakfast",
    },
    {
      id: "breakfast-7",
      name: locale === "tr" ? "Kızartma" : locale === "de" ? "Gebratenes Gemüse" : "Fried Vegetables",
      description:
        locale === "tr"
          ? "Çeşitli sebzelerden hazırlanan kızartma"
          : locale === "de"
            ? "Gebratenes Gemüse"
            : "Fried vegetables",
      price: "400 TL",
      image: "/fried-vegetables.png",
      category: "breakfast",
    },
    {
      id: "breakfast-8",
      name: locale === "tr" ? "Patatesli Yumurta" : locale === "de" ? "Eier mit Kartoffeln" : "Eggs with Potatoes",
      description:
        locale === "tr"
          ? "Patates ile pişirilmiş yumurta"
          : locale === "de"
            ? "Eier mit Kartoffeln"
            : "Eggs cooked with potatoes",
      price: "300 TL",
      image: "/eggs-with-potatoes.png",
      category: "breakfast",
    },
    {
      id: "breakfast-9",
      name:
        locale === "tr"
          ? "Peynirli Sahanda Yumurta"
          : locale === "de"
            ? "Spiegeleier mit Käse"
            : "Fried Eggs with Cheese",
      description:
        locale === "tr"
          ? "Peynir ile pişirilmiş sahanda yumurta"
          : locale === "de"
            ? "Spiegeleier mit Käse"
            : "Fried eggs with cheese",
      price: "280 TL",
      image: "/fried-eggs-with-cheese.png",
      category: "breakfast",
    },
    {
      id: "breakfast-10",
      name: locale === "tr" ? "Sahanda Yumurta" : locale === "de" ? "Spiegeleier" : "Fried Eggs",
      description:
        locale === "tr" ? "Klasik sahanda yumurta" : locale === "de" ? "Klassische Spiegeleier" : "Classic fried eggs",
      price: "350 TL",
      image: "/turkish-fried-eggs.png",
      category: "breakfast",
    },
    {
      id: "breakfast-11",
      name: locale === "tr" ? "Sigara Böreği" : locale === "de" ? "Zigarrenbörek" : "Cigarette Pastry",
      description:
        locale === "tr"
          ? "İnce yufkaya sarılmış peynirli börek"
          : locale === "de"
            ? "Käseröllchen aus dünnem Teig"
            : "Cheese rolls in thin pastry",
      price: "280 TL",
      image: "/turkish-cheese-rolls.png",
      category: "breakfast",
    },
    {
      id: "breakfast-12",
      name: locale === "tr" ? "Sucuk" : locale === "de" ? "Türkische Wurst" : "Turkish Sausage",
      description:
        locale === "tr"
          ? "Izgara Türk sucuğu"
          : locale === "de"
            ? "Gegrillte türkische Wurst"
            : "Grilled Turkish sausage",
      price: "400 TL",
      image: "/turkish-sausage.png",
      category: "breakfast",
    },
    {
      id: "breakfast-13",
      name: locale === "tr" ? "Sucuklu Yumurta" : locale === "de" ? "Eier mit Wurst" : "Eggs with Sausage",
      description:
        locale === "tr"
          ? "Sucuk ile pişirilmiş yumurta"
          : locale === "de"
            ? "Eier mit türkischer Wurst"
            : "Eggs cooked with Turkish sausage",
      price: "450 TL",
      image: "/eggs-with-sausage.png",
      category: "breakfast",
    },
    {
      id: "breakfast-14",
      name: locale === "tr" ? "Yumurta Haşlanmış" : locale === "de" ? "Gekochte Eier" : "Boiled Eggs",
      description: locale === "tr" ? "Haşlanmış yumurta" : locale === "de" ? "Gekochte Eier" : "Boiled eggs",
      price: "50 TL",
      image: "/boiled-eggs.png",
      category: "breakfast",
    },
  ]

  // Soğuk Mezeler (Cold Appetizers)
  const coldAppetizers = [
    {
      id: "cold-app-1",
      name: locale === "tr" ? "Acılı Ezme" : locale === "de" ? "Scharfe Paste" : "Spicy Paste",
      description:
        locale === "tr"
          ? "Acı biber, domates ve baharatlarla hazırlanan ezme"
          : locale === "de"
            ? "Scharfe Paste aus Paprika, Tomaten und Gewürzen"
            : "Spicy paste made with peppers, tomatoes and spices",
      price: "200 TL",
      image: "/turkish-spicy-ezme.png",
      category: "cold-appetizers",
    },
    {
      id: "cold-app-2",
      name: locale === "tr" ? "Cacık" : locale === "de" ? "Cacık" : "Tzatziki",
      description:
        locale === "tr"
          ? "Yoğurt, salatalık, sarımsak ve nane ile hazırlanan soğuk meze"
          : locale === "de"
            ? "Kalte Vorspeise aus Joghurt, Gurke, Knoblauch ve Minze"
            : "Cold appetizer made with yogurt, cucumber, garlic and mint",
      price: "250 TL",
      image: "/turkish-cacik.png",
      category: "cold-appetizers",
    },
    {
      id: "cold-app-3",
      name: locale === "tr" ? "Humus" : locale === "de" ? "Hummus" : "Hummus",
      description:
        locale === "tr"
          ? "Nohut, tahin, zeytinyağı ve baharatlarla hazırlanan meze"
          : locale === "de"
            ? "Vorspeise aus Kichererbsen, Tahini, Olivenöl und Gewürzen"
            : "Appetizer made with chickpeas, tahini, olive oil and spices",
      price: "280 TL",
      image: "/turkish-hummus.png",
      category: "cold-appetizers",
    },
    {
      id: "cold-app-4",
      name: locale === "tr" ? "Atom" : locale === "de" ? "Atom" : "Atom",
      description:
        locale === "tr"
          ? "Yoğurt ve acı biber ile hazırlanan meze"
          : locale === "de"
            ? "Vorspeise aus Joghurt und scharfem Paprika"
            : "Appetizer made with yogurt and hot peppers",
      price: "290 TL",
      image: "/atom-meze.png",
      category: "cold-appetizers",
    },
    {
      id: "cold-app-5",
      name: locale === "tr" ? "Biber Tarator" : locale === "de" ? "Paprika-Tarator" : "Pepper Tarator",
      description:
        locale === "tr"
          ? "Kırmızı biber, ceviz ve sarımsak ile hazırlanan meze"
          : locale === "de"
            ? "Vorspeise aus rotem Paprika, Walnüssen und Knoblauch"
            : "Appetizer made with red peppers, walnuts and garlic",
      price: "290 TL",
      image: "/pepper-tarator.png",
      category: "cold-appetizers",
    },
    {
      id: "cold-app-6",
      name: locale === "tr" ? "Borani" : locale === "de" ? "Borani" : "Borani",
      description:
        locale === "tr"
          ? "Ispanak ve yoğurt ile hazırlanan meze"
          : locale === "de"
            ? "Vorspeise aus Spinat und Joghurt"
            : "Appetizer made with spinach and yogurt",
      price: "280 TL",
      image: "/borani-meze.png",
      category: "cold-appetizers",
    },
    {
      id: "cold-app-7",
      name: locale === "tr" ? "Brokoli" : locale === "de" ? "Brokkoli" : "Broccoli",
      description:
        locale === "tr"
          ? "Zeytinyağlı brokoli mezesi"
          : locale === "de"
            ? "Brokkoli-Vorspeise mit Olivenöl"
            : "Broccoli appetizer with olive oil",
      price: "290 TL",
      image: "/broccoli-meze.png",
      category: "cold-appetizers",
    },
    {
      id: "cold-app-8",
      name: locale === "tr" ? "Börülce" : locale === "de" ? "Schwarzaugenbohnen" : "Black-eyed Peas",
      description:
        locale === "tr"
          ? "Zeytinyağlı börülce mezesi"
          : locale === "de"
            ? "Schwarzaugenbohnen-Vorspeise mit Olivenöl"
            : "Black-eyed peas appetizer with olive oil",
      price: "280 TL",
      image: "/black-eyed-peas-meze.png",
      category: "cold-appetizers",
    },
    {
      id: "cold-app-9",
      name: locale === "tr" ? "Cennet Ezmesi" : locale === "de" ? "Cennet-Paste" : "Cennet Paste",
      description:
        locale === "tr"
          ? "Özel baharatlarla hazırlanan ev yapımı ezme"
          : locale === "de"
            ? "Hausgemachte Paste mit speziellen Gewürzen"
            : "Homemade paste with special spices",
      price: "280 TL",
      image: "/cennet-ezmesi.png",
      category: "cold-appetizers",
    },
    {
      id: "cold-app-10",
      name: locale === "tr" ? "Çingen Pilavı" : locale === "de" ? "Zigeunerpilav" : "Gypsy Rice",
      description:
        locale === "tr"
          ? "Özel baharatlarla hazırlanan pilav"
          : locale === "de"
            ? "Reis mit speziellen Gewürzen"
            : "Rice with special spices",
      price: "280 TL",
      image: "/gypsy-rice.png",
      category: "cold-appetizers",
    },
  ]

  // Deniz Soğuk Mezeler (Seafood Cold Appetizers)
  const seafoodColdAppetizers = [
    {
      id: "seafood-cold-1",
      name: locale === "tr" ? "Ahtapot" : locale === "de" ? "Oktopus" : "Octopus",
      description:
        locale === "tr"
          ? "Zeytinyağlı ahtapot salatası"
          : locale === "de"
            ? "Oktopussalat mit Olivenöl"
            : "Octopus salad with olive oil",
      price: "850 TL",
      image: "/char-grilled-octopus.png",
      category: "seafood-cold",
    },
    {
      id: "seafood-cold-2",
      name: locale === "tr" ? "Levrek Marina" : locale === "de" ? "Marinierter Wolfsbarsch" : "Marinated Sea Bass",
      description:
        locale === "tr"
          ? "Limon ve zeytinyağı ile marine edilmiş levrek"
          : locale === "de"
            ? "Mit Zitrone und Olivenöl marinierter Wolfsbarsch"
            : "Sea bass marinated with lemon and olive oil",
      price: "550 TL",
      image: "/marinated-sea-bass.png",
      category: "seafood-cold",
    },
    {
      id: "seafood-cold-3",
      name: locale === "tr" ? "Çiroz" : locale === "de" ? "Getrocknete Makrele" : "Dried Mackerel",
      description:
        locale === "tr" ? "Kurutulmuş uskumru balığı" : locale === "de" ? "Getrocknete Makrele" : "Dried mackerel fish",
      price: "500 TL",
      image: "/dried-mackerel.png",
      category: "seafood-cold",
    },
    {
      id: "seafood-cold-4",
      name: locale === "tr" ? "Deniz Ordövr" : locale === "de" ? "Meeresfrüchte-Vorspeisen" : "Seafood Appetizers",
      description:
        locale === "tr"
          ? "Çeşitli deniz ürünlerinden oluşan tabak"
          : locale === "de"
            ? "Teller mit verschiedenen Meeresfrüchten"
            : "Plate of various seafood items",
      price: "850 TL",
      image: "/seafood-appetizer-platter.png",
      category: "seafood-cold",
    },
    {
      id: "seafood-cold-5",
      name: locale === "tr" ? "Hamsi Soslu" : locale === "de" ? "Sardellen mit Sauce" : "Anchovies with Sauce",
      description:
        locale === "tr"
          ? "Özel sos ile hazırlanan hamsi"
          : locale === "de"
            ? "Sardellen mit spezieller Sauce"
            : "Anchovies prepared with special sauce",
      price: "500 TL",
      image: "/anchovies-with-sauce.png",
      category: "seafood-cold",
    },
    {
      id: "seafood-cold-6",
      name: locale === "tr" ? "Karides Söğüş" : locale === "de" ? "Garnelen mit Gemüse" : "Shrimp with Vegetables",
      description:
        locale === "tr"
          ? "Doğranmış sebzeler ile hazırlanan karides"
          : locale === "de"
            ? "Garnelen mit geschnittenem Gemüse"
            : "Shrimp prepared with chopped vegetables",
      price: "700 TL",
      image: "/pan-fried-shrimp.png",
      category: "seafood-cold",
    },
  ]

  // Deniz Ara Sıcaklar (Seafood Hot Appetizers)
  const seafoodHotAppetizers = [
    {
      id: "seafood-hot-1",
      name: locale === "tr" ? "Kalamar" : locale === "de" ? "Tintenfisch" : "Calamari",
      description:
        locale === "tr"
          ? "Çıtır kalamar, tartar sos ile servis edilir"
          : locale === "de"
            ? "Knuspriger Tintenfisch, serviert mit Tartarsauce"
            : "Crispy calamari, served with tartar sauce",
      price: "700 TL",
      image: "/golden-crispy-calamari.png",
      category: "seafood-hot",
    },
    {
      id: "seafood-hot-2",
      name: locale === "tr" ? "Karides Tava" : locale === "de" ? "Gebratene Garnelen" : "Pan-fried Shrimp",
      description:
        locale === "tr"
          ? "Tereyağında pişirilmiş karides"
          : locale === "de"
            ? "In Butter gebratene Garnelen"
            : "Shrimp cooked in butter",
      price: "750 TL",
      image: "/pan-fried-shrimp.png",
      category: "seafood-hot",
    },
    {
      id: "seafood-hot-3",
      name: locale === "tr" ? "Ahtapot Izgara" : locale === "de" ? "Gegrillter Oktopus" : "Grilled Octopus",
      description:
        locale === "tr"
          ? "Izgara ahtapot, zeytinyağı ve limon ile"
          : locale === "de"
            ? "Gegrillter Oktopus mit Olivenöl und Zitrone"
            : "Grilled octopus with olive oil and lemon",
      price: "900 TL",
      image: "/char-grilled-octopus.png",
      category: "seafood-hot",
      featured: true,
    },
    {
      id: "seafood-hot-4",
      name: locale === "tr" ? "Kalamar (D)" : locale === "de" ? "Tintenfisch (D)" : "Calamari (D)",
      description:
        locale === "tr"
          ? "Büyük boy çıtır kalamar"
          : locale === "de"
            ? "Großer knuspriger Tintenfisch"
            : "Large crispy calamari",
      price: "1400 TL",
      image: "/golden-crispy-calamari.png",
      category: "seafood-hot",
    },
    {
      id: "seafood-hot-5",
      name: locale === "tr" ? "Kalamar Izgara" : locale === "de" ? "Gegrillter Tintenfisch" : "Grilled Calamari",
      description:
        locale === "tr"
          ? "Izgara kalamar, zeytinyağı ve limon ile"
          : locale === "de"
            ? "Gegrillter Tintenfisch mit Olivenöl und Zitrone"
            : "Grilled calamari with olive oil and lemon",
      price: "750 TL",
      image: "/golden-crispy-calamari.png",
      category: "seafood-hot",
    },
    {
      id: "seafood-hot-6",
      name: locale === "tr" ? "Karides Izgara" : locale === "de" ? "Gegrillte Garnelen" : "Grilled Shrimp",
      description:
        locale === "tr"
          ? "Izgara karides, zeytinyağı ve limon ile"
          : locale === "de"
            ? "Gegrillte Garnelen mit Olivenöl ve Zitrone"
            : "Grilled shrimp with olive oil and lemon",
      price: "750 TL",
      image: "/pan-fried-shrimp.png",
      category: "seafood-hot",
    },
    {
      id: "seafood-hot-7",
      name: locale === "tr" ? "Deniz Ürünleri Güveç" : locale === "de" ? "Meeresfrüchte-Eintopf" : "Seafood Casserole",
      description:
        locale === "tr"
          ? "Çeşitli deniz ürünleri ile hazırlanan güveç"
          : locale === "de"
            ? "Eintopf mit verschiedenen Meeresfrüchten"
            : "Casserole prepared with various seafood",
      price: "900 TL",
      image: "/seafood-casserole.png",
      category: "seafood-hot",
    },
    {
      id: "seafood-hot-8",
      name: locale === "tr" ? "Levrek Cipsi" : locale === "de" ? "Wolfsbarsch-Chips" : "Sea Bass Chips",
      description:
        locale === "tr"
          ? "Çıtır levrek cipsleri"
          : locale === "de"
            ? "Knusprige Wolfsbarsch-Chips"
            : "Crispy sea bass chips",
      price: "900 TL",
      image: "/sea-bass-chips.png",
      category: "seafood-hot",
    },
    {
      id: "seafood-hot-9",
      name: locale === "tr" ? "Okyanus Lokumu" : locale === "de" ? "Meeresdelikatesse" : "Ocean Delight",
      description:
        locale === "tr"
          ? "Özel deniz ürünleri karışımı"
          : locale === "de"
            ? "Spezielle Meeresfrüchtemischung"
            : "Special seafood mix",
      price: "500 TL",
      image: "/ocean-delight.png",
      category: "seafood-hot",
    },
  ]

  // Salatalar (Salads)
  const salads = [
    {
      id: "salad-1",
      name: locale === "tr" ? "Çoban Salatası" : locale === "de" ? "Hirtensalat" : "Shepherd's Salad",
      description:
        locale === "tr"
          ? "Domates, salatalık, biber ve soğan ile hazırlanan geleneksel Türk salatası"
          : locale === "de"
            ? "Traditioneller türkischer Salat mit Tomaten, Gurken, Paprika ve Zwiebeln"
            : "Traditional Turkish salad with tomatoes, cucumbers, peppers and onions",
      price: "300 TL",
      image: "/turkish-shepherd-salad.png",
      category: "salads",
    },
    {
      id: "salad-2",
      name:
        locale === "tr"
          ? "Gavurdağı Kekik Salata"
          : locale === "de"
            ? "Gavurdağı-Salat mit Thymian"
            : "Gavurdağı Thyme Salad",
      description:
        locale === "tr"
          ? "Kekik ile tatlandırılmış Gavurdağı salatası"
          : locale === "de"
            ? "Gavurdağı-Salat mit Thymian"
            : "Gavurdağı salad flavored with thyme",
      price: "280 TL",
      image: "/gavurdagi-thyme-salad.png",
      category: "salads",
    },
    {
      id: "salad-3",
      name: locale === "tr" ? "Karışık Salata" : locale === "de" ? "Gemischter Salat" : "Mixed Salad",
      description:
        locale === "tr"
          ? "Çeşitli sebzelerden oluşan karışık salata"
          : locale === "de"
            ? "Gemischter Salat aus verschiedenen Gemüsesorten"
            : "Mixed salad with various vegetables",
      price: "300 TL",
      image: "/turkish-fresh-salads.png",
      category: "salads",
    },
    {
      id: "salad-4",
      name: locale === "tr" ? "Mevsim Salata" : locale === "de" ? "Saisonsalat" : "Seasonal Salad",
      description:
        locale === "tr"
          ? "Mevsim sebzeleri ile hazırlanan salata"
          : locale === "de"
            ? "Salat mit saisonalem Gemüse"
            : "Salad prepared with seasonal vegetables",
      price: "300 TL",
      image: "/turkish-seasonal-salad.png",
      category: "salads",
    },
    {
      id: "salad-5",
      name:
        locale === "tr"
          ? "Peynirli Roka Salatası"
          : locale === "de"
            ? "Rucolasalat mit Käse"
            : "Arugula Salad with Cheese",
      description:
        locale === "tr"
          ? "Peynir ile hazırlanan roka salatası"
          : locale === "de"
            ? "Rucolasalat mit Käse"
            : "Arugula salad prepared with cheese",
      price: "325 TL",
      image: "/arugula-salad-with-cheese.png",
      category: "salads",
    },
    {
      id: "salad-6",
      name: locale === "tr" ? "Peynirli Salata" : locale === "de" ? "Salat mit Käse" : "Salad with Cheese",
      description:
        locale === "tr"
          ? "Peynir ile hazırlanan karışık salata"
          : locale === "de"
            ? "Gemischter Salat mit Käse"
            : "Mixed salad prepared with cheese",
      price: "325 TL",
      image: "/mediterranean-salad-olives.png",
      category: "salads",
    },
    {
      id: "salad-7",
      name: locale === "tr" ? "Roka Salatası" : locale === "de" ? "Rucolasalat" : "Arugula Salad",
      description:
        locale === "tr"
          ? "Taze roka ile hazırlanan salata"
          : locale === "de"
            ? "Salat mit frischer Rucola"
            : "Salad prepared with fresh arugula",
      price: "300 TL",
      image: "/arugula-salad.png",
      category: "salads",
    },
    {
      id: "salad-8",
      name: locale === "tr" ? "Salata" : locale === "de" ? "Salat" : "Salad",
      description:
        locale === "tr"
          ? "Klasik karışık salata"
          : locale === "de"
            ? "Klassischer gemischter Salat"
            : "Classic mixed salad",
      price: "300 TL",
      image: "/classic-mixed-salad.png",
      category: "salads",
    },
    {
      id: "salad-9",
      name: locale === "tr" ? "Salata Yeşil" : locale === "de" ? "Grüner Salat" : "Green Salad",
      description:
        locale === "tr"
          ? "Yeşil yapraklı sebzelerden oluşan salata"
          : locale === "de"
            ? "Salat aus grünem Blattgemüse"
            : "Salad made from green leafy vegetables",
      price: "300 TL",
      image: "/green-salad.png",
      category: "salads",
    },
    {
      id: "salad-10",
      name: locale === "tr" ? "Yeşillik" : locale === "de" ? "Grünes Gemüse" : "Greens",
      description:
        locale === "tr"
          ? "Çeşitli yeşil otlar ve sebzeler"
          : locale === "de"
            ? "Verschiedene grüne Kräuter und Gemüse"
            : "Various green herbs and vegetables",
      price: "200 TL",
      image: "/mixed-greens.png",
      category: "salads",
    },
  ]

  // Etler (Meat Dishes)
  const meatDishes = [
    {
      id: "meat-1",
      name: locale === "tr" ? "Kuzu Şiş" : locale === "de" ? "Lamm-Spieß" : "Lamb Skewer",
      description:
        locale === "tr"
          ? "Izgara kuzu eti şiş"
          : locale === "de"
            ? "Gegrillte Lammfleischspieße"
            : "Grilled lamb skewers",
      price: "750 TL",
      image: "/turkish-lamb-skewers.png",
      category: "meat",
    },
    {
      id: "meat-2",
      name: locale === "tr" ? "Köfte" : locale === "de" ? "Köfte" : "Meatballs",
      description:
        locale === "tr"
          ? "El yapımı ızgara köfte"
          : locale === "de"
            ? "Hausgemachte gegrillte Fleischbällchen"
            : "Homemade grilled meatballs",
      price: "500 TL",
      image: "/spiced-turkish-meatballs.png",
      category: "meat",
    },
    {
      id: "meat-3",
      name: locale === "tr" ? "Et Sote" : locale === "de" ? "Fleisch-Sauté" : "Meat Sauté",
      description:
        locale === "tr"
          ? "Doğranmış et ve sebzelerle hazırlanan sote"
          : locale === "de"
            ? "Sauté aus geschnittenem Fleisch und Gemüse"
            : "Sauté prepared with chopped meat and vegetables",
      price: "850 TL",
      image: "/turkish-meat-stew.png",
      category: "meat",
    },
    {
      id: "meat-4",
      name: locale === "tr" ? "Karışık Izgara" : locale === "de" ? "Gemischter Grill" : "Mixed Grill",
      description:
        locale === "tr"
          ? "Çeşitli et türlerinden oluşan ızgara tabağı"
          : locale === "de"
            ? "Grillteller mit verschiedenen Fleischsorten"
            : "Grilled plate with various types of meat",
      price: "850 TL",
      image: "/mixed-grill.png",
      category: "meat",
    },
    {
      id: "meat-5",
      name:
        locale === "tr"
          ? "Kiremitte Kaşarlı Köfte"
          : locale === "de"
            ? "Fleischbällchen mit Käse auf Ziegel"
            : "Meatballs with Cheese on Tile",
      description:
        locale === "tr"
          ? "Kiremit üzerinde kaşar peyniri ile servis edilen köfte"
          : locale === "de"
            ? "Fleischbällchen mit Käse, serviert auf einem Ziegel"
            : "Meatballs served with cheese on a tile",
      price: "400 TL",
      image: "/meatballs-with-cheese-on-tile.png",
      category: "meat",
    },
    {
      id: "meat-6",
      name: locale === "tr" ? "Tavuk Izgara" : locale === "de" ? "Gegrilltes Hähnchen" : "Grilled Chicken",
      description:
        locale === "tr" ? "Izgara tavuk göğsü" : locale === "de" ? "Gegrillte Hähnchenbrust" : "Grilled chicken breast",
      price: "500 TL",
      image: "/turkish-chicken-shish-kebab.png",
      category: "meat",
    },
    {
      id: "meat-7",
      name: locale === "tr" ? "Tavuk Sote" : locale === "de" ? "Hähnchen-Sauté" : "Chicken Sauté",
      description:
        locale === "tr"
          ? "Doğranmış tavuk ve sebzelerle hazırlanan sote"
          : locale === "de"
            ? "Sauté aus geschnittenem Hähnchen und Gemüse"
            : "Sauté prepared with chopped chicken and vegetables",
      price: "650 TL",
      image: "/chicken-saute.png",
      category: "meat",
    },
  ]

  // Balıklar (Fish) - Fiyatlar kaldırıldı
  const fishDishes = [
    {
      id: "fish-1",
      name: locale === "tr" ? "Çipura" : locale === "de" ? "Dorade" : "Sea Bream",
      description:
        locale === "tr"
          ? "Izgara çipura, mevsim yeşillikleri ile"
          : locale === "de"
            ? "Gegrillte Dorade mit Saisongemüse"
            : "Grilled sea bream with seasonal greens",
      price: locale === "tr" ? "Fiyat için sorunuz" : locale === "de" ? "Preis auf Anfrage" : "Ask for price",
      image: "/grilled-sea-bream.png",
      category: "fish",
      featured: true,
    },
    {
      id: "fish-2",
      name: locale === "tr" ? "Akya" : locale === "de" ? "Bernsteinmakrele" : "Greater Amberjack",
      description:
        locale === "tr" ? "Günün taze balığı" : locale === "de" ? "Frischer Fisch des Tages" : "Fresh fish of the day",
      price: locale === "tr" ? "Fiyat için sorunuz" : locale === "de" ? "Preis auf Anfrage" : "Ask for price",
      image: "/greater-amberjack.png",
      category: "fish",
    },
    {
      id: "fish-3",
      name: locale === "tr" ? "Barbun" : locale === "de" ? "Rotbarbe" : "Red Mullet",
      description:
        locale === "tr" ? "Taze barbun balığı" : locale === "de" ? "Frische Rotbarbe" : "Fresh red mullet fish",
      price: locale === "tr" ? "Fiyat için sorunuz" : locale === "de" ? "Preis auf Anfrage" : "Ask for price",
      image: "/red-mullet-fish.png",
      category: "fish",
    },
    {
      id: "fish-4",
      name: locale === "tr" ? "Deniz Çuprası" : locale === "de" ? "Meer-Dorade" : "Sea Bream",
      description:
        locale === "tr" ? "Günün taze balığı" : locale === "de" ? "Frischer Fisch des Tages" : "Fresh fish of the day",
      price: locale === "tr" ? "Fiyat için sorunuz" : locale === "de" ? "Preis auf Anfrage" : "Ask for price",
      image: "/sea-bream-fish.png",
      category: "fish",
    },
    {
      id: "fish-5",
      name: locale === "tr" ? "Dil Balığı" : locale === "de" ? "Seezunge" : "Sole Fish",
      description:
        locale === "tr" ? "Günün taze balığı" : locale === "de" ? "Frischer Fisch des Tages" : "Fresh fish of the day",
      price: locale === "tr" ? "Fiyat için sorunuz" : locale === "de" ? "Preis auf Anfrage" : "Ask for price",
      image: "/sole-fish.png",
      category: "fish",
    },
    {
      id: "fish-6",
      name: locale === "tr" ? "Karagöz" : locale === "de" ? "Brasse" : "Sea Bream",
      description:
        locale === "tr" ? "Günün taze balığı" : locale === "de" ? "Frischer Fisch des Tages" : "Fresh fish of the day",
      price: locale === "tr" ? "Fiyat için sorunuz" : locale === "de" ? "Preis auf Anfrage" : "Ask for price",
      image: "/karagoz-fish.png",
      category: "fish",
    },
    {
      id: "fish-7",
      name: locale === "tr" ? "Lahos" : locale === "de" ? "Zackenbarsch" : "Grouper",
      description:
        locale === "tr" ? "Günün taze balığı" : locale === "de" ? "Frischer Fisch des Tages" : "Fresh fish of the day",
      price: locale === "tr" ? "Fiyat için sorunuz" : locale === "de" ? "Preis auf Anfrage" : "Ask for price",
      image: "/grouper-fish.png",
      category: "fish",
    },
    {
      id: "fish-8",
      name: locale === "tr" ? "Levrek" : locale === "de" ? "Wolfsbarsch" : "Sea Bass",
      description:
        locale === "tr" ? "Günün taze balığı" : locale === "de" ? "Frischer Fisch des Tages" : "Fresh fish of the day",
      price: locale === "tr" ? "Fiyat için sorunuz" : locale === "de" ? "Preis auf Anfrage" : "Ask for price",
      image: "/grilled-sea-bass.png",
      category: "fish",
    },
    {
      id: "fish-9",
      name: locale === "tr" ? "Mercan" : locale === "de" ? "Rotbrasse" : "Pandora",
      description:
        locale === "tr" ? "Günün taze balığı" : locale === "de" ? "Frischer Fisch des Tages" : "Fresh fish of the day",
      price: locale === "tr" ? "Fiyat için sorunuz" : locale === "de" ? "Preis auf Anfrage" : "Ask for price",
      image: "/pandora-fish.png",
      category: "fish",
    },
    {
      id: "fish-10",
      name: locale === "tr" ? "Porsiyonluk Çupra" : locale === "de" ? "Dorade-Portion" : "Sea Bream Portion",
      description:
        locale === "tr"
          ? "Tek kişilik porsiyon çipura"
          : locale === "de"
            ? "Dorade-Portion für eine Person"
            : "Sea bream portion for one person",
      price: locale === "tr" ? "Fiyat için sorunuz" : locale === "de" ? "Preis auf Anfrage" : "Ask for price",
      image: "/sea-bream-portion.png",
      category: "fish",
    },
    {
      id: "fish-11",
      name: locale === "tr" ? "Sinarit" : locale === "de" ? "Zahnbrasse" : "Dentex",
      description:
        locale === "tr" ? "Günün taze balığı" : locale === "de" ? "Frischer Fisch des Tages" : "Fresh fish of the day",
      price: locale === "tr" ? "Fiyat için sorunuz" : locale === "de" ? "Preis auf Anfrage" : "Ask for price",
      image: "/dentex-fish.png",
      category: "fish",
    },
  ]

  // Tatlılar (Desserts)
  const desserts = [
    {
      id: "dessert-1",
      name: locale === "tr" ? "Kabak Tatlısı" : locale === "de" ? "Kürbisdessert" : "Pumpkin Dessert",
      description:
        locale === "tr"
          ? "Bal, ceviz ve kaymak ile servis edilen kabak tatlısı"
          : locale === "de"
            ? "Kürbisdessert serviert mit Honig, Walnüssen und Sahne"
            : "Pumpkin dessert served with honey, walnuts and cream",
      price: "220 TL",
      image: "/turkish-pumpkin-dessert.png",
      category: "desserts",
    },
    {
      id: "dessert-2",
      name: locale === "tr" ? "Katmer Tatlısı" : locale === "de" ? "Katmer" : "Katmer",
      description:
        locale === "tr"
          ? "İnce yufka, fıstık ve kaymak ile hazırlanan geleneksel Türk tatlısı"
          : locale === "de"
            ? "Traditionelles türkisches Dessert mit dünnem Teig, Pistazien ve Sahne"
            : "Traditional Turkish dessert made with thin phyllo dough, pistachios and cream",
      price: "300 TL",
      image: "/turkish-katmer-dessert.png",
      category: "desserts",
    },
    {
      id: "dessert-3",
      name: locale === "tr" ? "Ayva Tatlısı" : locale === "de" ? "Quittendessert" : "Quince Dessert",
      description:
        locale === "tr"
          ? "Kaymak ile servis edilen ayva tatlısı"
          : locale === "de"
            ? "Quittendessert serviert mit Sahne"
            : "Quince dessert served with cream",
      price: "220 TL",
      image: "/quince-dessert.png",
      category: "desserts",
    },
    {
      id: "dessert-4",
      name: locale === "tr" ? "Dilim Helva" : locale === "de" ? "Helva-Scheibe" : "Slice of Halva",
      description:
        locale === "tr" ? "Tahin helvası dilimi" : locale === "de" ? "Scheibe Tahini-Helva" : "Slice of tahini halva",
      price: "100 TL",
      image: "/slice-of-halva.png",
      category: "desserts",
    },
    {
      id: "dessert-5",
      name: locale === "tr" ? "Fırında Helva" : locale === "de" ? "Gebackenes Helva" : "Baked Halva",
      description:
        locale === "tr"
          ? "Fırında pişirilmiş helva"
          : locale === "de"
            ? "Im Ofen gebackenes Helva"
            : "Halva baked in the oven",
      price: "250 TL",
      image: "/baked-halva.png",
      category: "desserts",
    },
    {
      id: "dessert-6",
      name: locale === "tr" ? "İncir Tatlısı" : locale === "de" ? "Feigendessert" : "Fig Dessert",
      description:
        locale === "tr"
          ? "Kaymak ile servis edilen incir tatlısı"
          : locale === "de"
            ? "Feigendessert serviert mit Sahne"
            : "Fig dessert served with cream",
      price: "220 TL",
      image: "/fig-dessert.png",
      category: "desserts",
    },
    {
      id: "dessert-7",
      name: locale === "tr" ? "Krep" : locale === "de" ? "Crêpe" : "Crepe",
      description:
        locale === "tr"
          ? "Çikolata veya bal ile servis edilen krep"
          : locale === "de"
            ? "Crêpe serviert mit Schokolade veya Honig"
            : "Crepe served with chocolate or honey",
      price: "250 TL",
      image: "/crepe-dessert.png",
      category: "desserts",
    },
    {
      id: "dessert-8",
      name: locale === "tr" ? "Tatlı" : locale === "de" ? "Dessert" : "Dessert",
      description: locale === "tr" ? "Günün tatlısı" : locale === "de" ? "Dessert des Tages" : "Dessert of the day",
      price: "220 TL",
      image: "/turkish-desserts.png",
      category: "desserts",
    },
    {
      id: "dessert-9",
      name: locale === "tr" ? "Tatlı (D)" : locale === "de" ? "Dessert (D)" : "Dessert (D)",
      description:
        locale === "tr"
          ? "Büyük boy tatlı porsiyonu"
          : locale === "de"
            ? "Große Dessertportion"
            : "Large dessert portion",
      price: "400 TL",
      image: "/turkish-desserts.png",
      category: "desserts",
    },
    {
      id: "dessert-10",
      name: locale === "tr" ? "Yaş Pasta" : locale === "de" ? "Frischer Kuchen" : "Fresh Cake",
      description:
        locale === "tr"
          ? "Günlük taze pasta dilimi"
          : locale === "de"
            ? "Tagesfrische Kuchenscheibe"
            : "Daily fresh cake slice",
      price: "450 TL",
      image: "/fresh-cake.png",
      category: "desserts",
    },
  ]

  // Meyveler (Fruits)
  const fruits = [
    {
      id: "fruit-1",
      name: locale === "tr" ? "Meyve Tabağı" : locale === "de" ? "Obstteller" : "Fruit Plate",
      description: locale === "tr" ? "Mevsim meyveleri" : locale === "de" ? "Saisonale Früchte" : "Seasonal fruits",
      price: "350 TL",
      image: "/turkish-seasonal-fruit-plate.png",
      category: "fruits",
    },
    {
      id: "fruit-2",
      name: locale === "tr" ? "Bal Muz" : locale === "de" ? "Honigbanane" : "Honey Banana",
      description:
        locale === "tr"
          ? "Bal ile servis edilen muz"
          : locale === "de"
            ? "Banane serviert mit Honig"
            : "Banana served with honey",
      price: "300 TL",
      image: "/honey-banana.png",
      category: "fruits",
    },
    {
      id: "fruit-3",
      name: locale === "tr" ? "Kızık Ayva" : locale === "de" ? "Gebratene Quitte" : "Roasted Quince",
      description: locale === "tr" ? "Kızartılmış ayva" : locale === "de" ? "Gebratene Quitte" : "Roasted quince",
      price: "300 TL",
      image: "/roasted-quince.png",
      category: "fruits",
    },
    {
      id: "fruit-4",
      name: locale === "tr" ? "Meyve (D)" : locale === "de" ? "Obst (D)" : "Fruit (D)",
      description:
        locale === "tr" ? "Büyük boy meyve porsiyonu" : locale === "de" ? "Große Obstportion" : "Large fruit portion",
      price: "450 TL",
      image: "/large-fruit-portion.png",
      category: "fruits",
    },
  ]

  // Alkollü İçecekler (Alcoholic Beverages)
  const alcoholicBeverages = [
    {
      id: "alcoholic-1",
      name: locale === "tr" ? "Rakı (T)" : locale === "de" ? "Rakı (T)" : "Raki (T)",
      description: locale === "tr" ? "Tek kadeh rakı" : locale === "de" ? "Ein Glas Rakı" : "Single glass of raki",
      price: "350 TL",
      image: "/turkish-raki-meze.png",
      category: "alcoholic",
    },
    {
      id: "alcoholic-2",
      name: locale === "tr" ? "Rakı (D)" : locale === "de" ? "Rakı (D)" : "Raki (D)",
      description:
        locale === "tr" ? "Duble kadeh rakı" : locale === "de" ? "Doppeltes Glas Rakı" : "Double glass of raki",
      price: "450 TL",
      image: "/turkish-raki-meze.png",
      category: "alcoholic",
    },
    {
      id: "alcoholic-3",
      name: locale === "tr" ? "Yeni Rakı 20 Cl" : locale === "de" ? "Yeni Rakı 20 Cl" : "Yeni Raki 20 Cl",
      description:
        locale === "tr"
          ? "20 Cl Yeni Rakı şişesi"
          : locale === "de"
            ? "20 Cl Flasche Yeni Rakı"
            : "20 Cl bottle of Yeni Raki",
      price: "700 TL",
      image: "/yeni-raki-20cl.png",
      category: "alcoholic",
    },
    {
      id: "alcoholic-4",
      name: locale === "tr" ? "Yeni Rakı 35 Cl" : locale === "de" ? "Yeni Rakı 35 Cl" : "Yeni Raki 35 Cl",
      description:
        locale === "tr"
          ? "35 Cl Yeni Rakı şişesi"
          : locale === "de"
            ? "35 Cl Flasche Yeni Rakı"
            : "35 Cl bottle of Yeni Raki",
      price: "1000 TL",
      image: "/yeni-raki-35cl.png",
      category: "alcoholic",
    },
    {
      id: "alcoholic-5",
      name: locale === "tr" ? "Yeni Rakı 50 Cl" : locale === "de" ? "Yeni Rakı 50 Cl" : "Yeni Raki 50 Cl",
      description:
        locale === "tr"
          ? "50 Cl Yeni Rakı şişesi"
          : locale === "de"
            ? "50 Cl Flasche Yeni Rakı"
            : "50 Cl bottle of Yeni Raki",
      price: "1400 TL",
      image: "/yeni-raki-50cl.png",
      category: "alcoholic",
    },
    {
      id: "alcoholic-6",
      name: locale === "tr" ? "Yeni Rakı 70 Cl" : locale === "de" ? "Yeni Rakı 70 Cl" : "Yeni Raki 70 Cl",
      description:
        locale === "tr"
          ? "70 Cl Yeni Rakı şişesi"
          : locale === "de"
            ? "70 Cl Flasche Yeni Rakı"
            : "70 Cl bottle of Yeni Raki",
      price: "1700 TL",
      image: "/yeni-raki-70cl.png",
      category: "alcoholic",
    },
    {
      id: "alcoholic-7",
      name: locale === "tr" ? "Yeni Rakı 100 Cl" : locale === "de" ? "Yeni Rakı 100 Cl" : "Yeni Raki 100 Cl",
      description:
        locale === "tr"
          ? "100 Cl Yeni Rakı şişesi"
          : locale === "de"
            ? "100 Cl Flasche Yeni Rakı"
            : "100 Cl bottle of Yeni Raki",
      price: "2400 TL",
      image: "/yeni-raki-100cl.png",
      category: "alcoholic",
    },
    {
      id: "alcoholic-8",
      name: locale === "tr" ? "Bira ve Çeşitleri" : locale === "de" ? "Bier und Sorten" : "Beer and Varieties",
      description:
        locale === "tr"
          ? "Çeşitli bira markaları"
          : locale === "de"
            ? "Verschiedene Biersorten"
            : "Various beer brands",
      price: "250 TL",
      image: "/beer-varieties.png",
      category: "alcoholic",
    },
  ]

  // Şaraplar (Wines)
  const wines = [
    {
      id: "wine-1",
      name: locale === "tr" ? "Şarap" : locale === "de" ? "Wein" : "Wine",
      description: locale === "tr" ? "Kadeh şarap" : locale === "de" ? "Glas Wein" : "Glass of wine",
      price: "300 TL",
      image: "/glass-of-wine.png",
      category: "wines",
    },
    {
      id: "wine-2",
      name: locale === "tr" ? "V.Doluca" : locale === "de" ? "V.Doluca" : "V.Doluca",
      description:
        locale === "tr" ? "Doluca şarap şişesi" : locale === "de" ? "Flasche Doluca Wein" : "Bottle of Doluca wine",
      price: "350 TL",
      image: "/v-doluca-wine.png",
      category: "wines",
    },
    {
      id: "wine-3",
      name: locale === "tr" ? "V.Doluca 70" : locale === "de" ? "V.Doluca 70" : "V.Doluca 70",
      description:
        locale === "tr"
          ? "70 Cl Doluca şarap şişesi"
          : locale === "de"
            ? "70 Cl Flasche Doluca Wein"
            : "70 Cl bottle of Doluca wine",
      price: "700 TL",
      image: "/v-doluca-70cl-wine.png",
      category: "wines",
    },
    {
      id: "wine-4",
      name: locale === "tr" ? "Yakut 70" : locale === "de" ? "Yakut 70" : "Yakut 70",
      description:
        locale === "tr"
          ? "70 Cl Yakut şarap şişesi"
          : locale === "de"
            ? "70 Cl Flasche Yakut Wein"
            : "70 Cl bottle of Yakut wine",
      price: "700 TL",
      image: "/yakut-70cl-wine.png",
      category: "wines",
    },
  ]

  // İçecekler (Drinks)
  const drinks = [
    {
      id: "drink-1",
      name: locale === "tr" ? "Türk Çayı" : locale === "de" ? "Türkischer Tee" : "Turkish Tea",
      description:
        locale === "tr"
          ? "Geleneksel demlenmiş Türk çayı"
          : locale === "de"
            ? "Traditionell gebrühter türkischer Tee"
            : "Traditional brewed Turkish tea",
      price: "15 TL",
      image: "/turkish-tea-glass.png",
      category: "drinks",
    },
    {
      id: "drink-2",
      name: locale === "tr" ? "Türk Kahvesi" : locale === "de" ? "Türkischer Kahve" : "Turkish Coffee",
      description:
        locale === "tr"
          ? "Geleneksel Türk kahvesi, lokum ile servis edilir"
          : locale === "de"
            ? "Traditioneller türkischer Kahve, serviert mit Lokum"
            : "Traditional Turkish coffee, served with Turkish delight",
      price: "30 TL",
      image: "/turkish-coffee-delight.png",
      category: "drinks",
    },
    {
      id: "drink-3",
      name: locale === "tr" ? "Ayran" : locale === "de" ? "Ayran" : "Ayran",
      description:
        locale === "tr"
          ? "Geleneksel Türk yoğurt içeceği"
          : locale === "de"
            ? "Traditionelles türkisches Joghurtgetränk"
            : "Traditional Turkish yogurt drink",
      price: "20 TL",
      image: "/turkish-ayran.png",
      category: "drinks",
    },
  ]

  // Tüm menü öğelerini birleştir
  const menuItems = [
    ...hotAppetizers,
    ...breakfastItems,
    ...coldAppetizers,
    ...seafoodColdAppetizers,
    ...seafoodHotAppetizers,
    ...salads,
    ...meatDishes,
    ...fishDishes,
    ...desserts,
    ...fruits,
    ...alcoholicBeverages,
    ...wines,
    ...drinks,
  ]

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <ErrorBoundary>
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="font-serif text-4xl font-bold text-gray-900 sm:text-5xl">{t("menuCategories")}</h1>
          <div className="mx-auto mt-2 h-1 w-20 bg-amber-500 md:h-2 md:w-32"></div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">{t("menuCategoriesSubtitle")}</p>
        </motion.div>

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder={
                locale === "tr" ? "Menüde ara..." : locale === "de" ? "Speisekarte durchsuchen..." : "Search menu..."
              }
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">
                {locale === "tr" ? "Filtrele:" : locale === "de" ? "Filter:" : "Filter:"}
              </span>
            </div>
            <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
              <TabsList className="bg-amber-50 flex flex-wrap h-auto">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-amber-500 data-[state=active]:text-white mb-1"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl border border-transparent hover:border-turquoise-500 h-[320px] flex flex-col">
                  <div className="relative h-28 overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg?height=300&width=300&query=turkish food"}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {item.featured && (
                      <div className="absolute left-0 top-0 m-2">
                        <Badge className="bg-amber-500 text-white hover:bg-amber-600">
                          {locale === "tr" ? "Öne Çıkan" : locale === "de" ? "Empfohlen" : "Featured"}
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-3 flex flex-col justify-between flex-grow">
                    <div className="mb-1 flex items-center justify-between">
                      <h3 className="text-base font-bold text-gray-900">{item.name}</h3>
                      <span className="font-medium text-amber-600 text-base">{item.price}</span>
                    </div>
                    <p className="mb-3 text-xs text-gray-600 line-clamp-2">{item.description}</p>
                    <Button size="sm" className="w-full bg-turquoise-500 hover:bg-turquoise-600 mt-auto">
                      {locale === "tr" ? "Detaylar" : locale === "de" ? "Details" : "Details"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full flex min-h-[200px] items-center justify-center rounded-lg border border-dashed border-gray-300 p-8 text-center">
              <div>
                <p className="mb-2 text-lg font-medium text-gray-900">
                  {locale === "tr"
                    ? "Sonuç bulunamadı"
                    : locale === "de"
                      ? "Keine Ergebnisse gefunden"
                      : "No results found"}
                </p>
                <p className="text-gray-600">
                  {locale === "tr"
                    ? "Lütfen farklı bir arama terimi deneyin veya filtreleri değiştirin."
                    : locale === "de"
                      ? "Bitte versuchen Sie einen anderen Suchbegriff veya ändern Sie die Filter."
                      : "Please try a different search term or change the filters."}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </ErrorBoundary>
  )
}
