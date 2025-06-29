export interface MenuItem {
  id: string
  name: {
    tr: string
    en: string
    de: string
  }
  description?: {
    tr: string
    en: string
    de: string
  }
  price: number
  image?: string
  category: string
}

export interface MenuCategory {
  id: number
  name: {
    tr: string
    en: string
    de: string
  }
  items: MenuItem[]
}

export const menuData: MenuCategory[] = [
  {
    id: 1,
    name: { tr: "Kahvaltılıklar", en: "Breakfast", de: "Frühstück" },
    items: [
      {
        id: "plain-omelette",
        name: { tr: "Sade Omlet", en: "Plain Omelette", de: "Einfaches Omelett" },
        description: {
          tr: "Üç yumurta ile hazırlanan sade omlet.",
          en: "Plain omelette made with three eggs.",
          de: "Einfaches Omelett aus drei Eiern.",
        },
        price: 120,
        image: "/plain-omelette.png",
        category: "breakfast",
      },
      {
        id: "sucuk-omelette",
        name: { tr: "Sucuklu Omlet", en: "Sausage Omelette", de: "Wurst-Omelett" },
        description: {
          tr: "Türk sucuğu ile hazırlanan lezzetli omlet.",
          en: "Delicious omelette made with Turkish sausage.",
          de: "Leckeres Omelett mit türkischer Wurst.",
        },
        price: 150,
        image: "/sucuk-omelette.png",
        category: "breakfast",
      },
      {
        id: "eggs-with-cheese",
        name: { tr: "Peynirli Yumurta", en: "Eggs with Cheese", de: "Eier mit Käse" },
        description: {
          tr: "Beyaz peynir ile hazırlanan yumurta.",
          en: "Eggs prepared with white cheese.",
          de: "Eier mit Weißkäse zubereitet.",
        },
        price: 130,
        image: "/eggs-with-cheese.png",
        category: "breakfast",
      },
      {
        id: "fried-vegetables",
        name: { tr: "Kızarmış Sebzeler", en: "Fried Vegetables", de: "Gebratenes Gemüse" },
        description: {
          tr: "Mevsim sebzeleri ile hazırlanan kızartma.",
          en: "Fried vegetables prepared with seasonal vegetables.",
          de: "Gebratenes Gemüse mit saisonalem Gemüse zubereitet.",
        },
        price: 110,
        image: "/fried-vegetables.png",
        category: "breakfast",
      },
      {
        id: "eggs-with-potatoes",
        name: { tr: "Patatesli Yumurta", en: "Eggs with Potatoes", de: "Eier mit Kartoffeln" },
        description: {
          tr: "Küp patates ve yumurta ile hazırlanan doyurucu lezzet.",
          en: "Filling dish made with diced potatoes and eggs.",
          de: "Sättigendes Gericht aus gewürfelten Kartoffeln und Eiern.",
        },
        price: 140,
        image: "/eggs-with-potatoes.png",
        category: "breakfast",
      },
      {
        id: "fried-eggs-with-cheese",
        name: { tr: "Peynirli Sahanda Yumurta", en: "Fried Eggs with Cheese", de: "Spiegeleier mit Käse" },
        description: {
          tr: "Sahanda kızarmış yumurta ve erimiş peynir.",
          en: "Fried eggs with melted cheese.",
          de: "Spiegeleier mit geschmolzenem Käse.",
        },
        price: 145,
        image: "/fried-eggs-with-cheese.png",
        category: "breakfast",
      },
      {
        id: "turkish-sausage",
        name: { tr: "Türk Sucuğu", en: "Turkish Sausage", de: "Türkische Wurst" },
        description: {
          tr: "Geleneksel Türk sucuğu, baharatlı ve lezzetli.",
          en: "Traditional Turkish sausage, spicy and delicious.",
          de: "Traditionelle türkische Wurst, würzig und lecker.",
        },
        price: 160,
        image: "/turkish-sausage.png",
        category: "breakfast",
      },
      {
        id: "eggs-with-sausage",
        name: { tr: "Sucuklu Yumurta", en: "Eggs with Sausage", de: "Eier mit Wurst" },
        description: {
          tr: "Sucuk ve yumurtanın mükemmel uyumu.",
          en: "Perfect harmony of sausage and eggs.",
          de: "Perfekte Harmonie von Wurst und Eiern.",
        },
        price: 155,
        image: "/eggs-with-sausage.png",
        category: "breakfast",
      },
      {
        id: "boiled-eggs",
        name: { tr: "Haşlanmış Yumurta", en: "Boiled Eggs", de: "Gekochte Eier" },
        description: {
          tr: "İsteğe göre haşlanmış yumurta.",
          en: "Boiled eggs as desired.",
          de: "Gekochte Eier nach Wunsch.",
        },
        price: 90,
        image: "/boiled-eggs.png",
        category: "breakfast",
      },
      {
        id: "hearty-turkish-menemen",
        name: { tr: "Menemen", en: "Menemen", de: "Menemen" },
        description: {
          tr: "Domates, biber ve yumurta ile hazırlanan geleneksel Türk kahvaltısı.",
          en: "Traditional Turkish breakfast made with tomatoes, peppers, and eggs.",
          de: "Traditionelles türkisches Frühstück mit Tomaten, Paprika und Eiern.",
        },
        price: 140,
        image: "/hearty-turkish-menemen.png",
        category: "breakfast",
      },
      {
        id: "simit-spread",
        name: { tr: "Simit Tabağı", en: "Simit Plate", de: "Simit-Teller" },
        description: {
          tr: "Taze simit, peynir çeşitleri ve zeytin ile.",
          en: "Fresh simit with assorted cheeses and olives.",
          de: "Frischer Simit mit verschiedenen Käsesorten und Oliven.",
        },
        price: 110,
        image: "/simit-spread.png",
        category: "breakfast",
      },
    ],
  },
  {
    id: 2,
    name: { tr: "Soğuk Mezeler", en: "Cold Appetizers", de: "Kalte Vorspeisen" },
    items: [
      {
        id: "atom-meze",
        name: { tr: "Atom Meze", en: "Atom Meze", de: "Atom Meze" },
        description: {
          tr: "Acı sevenler için özel, yoğurtlu ve baharatlı meze.",
          en: "Special spicy, yogurt-based appetizer for chili lovers.",
          de: "Besondere scharfe Vorspeise auf Joghurtbasis für Liebhaber von scharfem Essen.",
        },
        price: 120,
        image: "/atom-meze.png",
        category: "cold-appetizers",
      },
      {
        id: "pepper-tarator",
        name: { tr: "Biber Tarator", en: "Pepper Tarator", de: "Paprika-Tarator" },
        description: {
          tr: "Közlenmiş biber ve cevizli yoğurtlu meze.",
          en: "Roasted pepper and walnut yogurt appetizer.",
          de: "Vorspeise aus gerösteter Paprika und Walnussjoghurt.",
        },
        price: 110,
        image: "/pepper-tarator.png",
        category: "cold-appetizers",
      },
      {
        id: "borani-meze",
        name: { tr: "Borani Meze", en: "Borani Meze", de: "Borani Meze" },
        description: {
          tr: "Ispanak ve yoğurt ile hazırlanan geleneksel lezzet.",
          en: "Traditional dish made with spinach and yogurt.",
          de: "Traditionelles Gericht aus Spinat und Joghurt.",
        },
        price: 100,
        image: "/borani-meze.png",
        category: "cold-appetizers",
      },
      {
        id: "broccoli-meze",
        name: { tr: "Brokoli Meze", en: "Broccoli Meze", de: "Brokkoli-Meze" },
        description: {
          tr: "Zeytinyağlı ve sarımsaklı brokoli salatası.",
          en: "Broccoli salad with olive oil and garlic.",
          de: "Brokkolisalat mit Olivenöl und Knoblauch.",
        },
        price: 95,
        image: "/broccoli-meze.png",
        category: "cold-appetizers",
      },
      {
        id: "black-eyed-peas-meze",
        name: { tr: "Börülce Meze", en: "Black-Eyed Peas Meze", de: "Schwarzaugenbohnen-Meze" },
        description: {
          tr: "Zeytinyağlı ve limonlu börülce salatası.",
          en: "Black-eyed peas salad with olive oil and lemon.",
          de: "Schwarzaugenbohnensalat mit Olivenöl und Zitrone.",
        },
        price: 90,
        image: "/black-eyed-peas-meze.png",
        category: "cold-appetizers",
      },
      {
        id: "cennet-ezmesi",
        name: { tr: "Cennet Ezmesi", en: "Cennet Ezmesi", de: "Cennet Ezmesi" },
        description: {
          tr: "Özel baharatlarla hazırlanan acılı domates ezmesi.",
          en: "Spicy tomato paste prepared with special spices.",
          de: "Scharfe Tomatenpaste mit speziellen Gewürzen zubereitet.",
        },
        price: 115,
        image: "/cennet-ezmesi.png",
        category: "cold-appetizers",
      },
      {
        id: "gypsy-rice",
        name: { tr: "Çingene Pilavı", en: "Gypsy Rice", de: "Zigeunerreis" },
        description: {
          tr: "Bulgur, sebzeler ve baharatlarla hazırlanan özel pilav.",
          en: "Special rice dish made with bulgur, vegetables, and spices.",
          de: "Spezialreisgericht aus Bulgur, Gemüse und Gewürzen.",
        },
        price: 105,
        image: "/gypsy-rice.png",
        category: "cold-appetizers",
      },
      {
        id: "dried-mackerel",
        name: { tr: "Çiroz", en: "Dried Mackerel", de: "Getrocknete Makrele" },
        description: {
          tr: "Kurutulmuş uskumru, zeytinyağı ve limon ile.",
          en: "Dried mackerel with olive oil and lemon.",
          de: "Getrocknete Makrele mit Olivenöl und Zitrone.",
        },
        price: 130,
        image: "/dried-mackerel.png",
        category: "cold-appetizers",
      },
      {
        id: "seafood-appetizer-platter",
        name: {
          tr: "Deniz Mahsulleri Meze Tabağı",
          en: "Seafood Appetizer Platter",
          de: "Meeresfrüchte-Vorspeisenplatte",
        },
        description: {
          tr: "Karışık deniz mahsulleri mezeleri.",
          en: "Assorted seafood appetizers.",
          de: "Verschiedene Meeresfrüchte-Vorspeisen.",
        },
        price: 250,
        image: "/seafood-appetizer-platter.png",
        category: "cold-appetizers",
      },
      {
        id: "anchovies-with-sauce",
        name: { tr: "Soslu Hamsi", en: "Anchovies with Sauce", de: "Sardellen mit Sauce" },
        description: {
          tr: "Özel sos ile marine edilmiş taze hamsi.",
          en: "Fresh anchovies marinated in special sauce.",
          de: "Frische Sardellen in spezieller Sauce mariniert.",
        },
        price: 140,
        image: "/anchovies-with-sauce.png",
        category: "cold-appetizers",
      },
      {
        id: "seafood-casserole",
        name: { tr: "Güveçte Deniz Mahsulleri", en: "Seafood Casserole", de: "Meeresfrüchte-Auflauf" },
        description: {
          tr: "Güveçte pişirilmiş karışık deniz mahsulleri.",
          en: "Mixed seafood cooked in a casserole.",
          de: "Gemischte Meeresfrüchte im Auflauf gekocht.",
        },
        price: 280,
        image: "/seafood-casserole.png",
        category: "cold-appetizers",
      },
      {
        id: "sea-bass-chips",
        name: { tr: "Levrek Cips", en: "Sea Bass Chips", de: "Seebarsch-Chips" },
        description: {
          tr: "İnce dilimlenmiş levrek cipsleri.",
          en: "Thinly sliced sea bass chips.",
          de: "Dünn geschnittene Seebarsch-Chips.",
        },
        price: 160,
        image: "/sea-bass-chips.png",
        category: "cold-appetizers",
      },
      {
        id: "ocean-delight",
        name: { tr: "Okyanus Lezzeti", en: "Ocean Delight", de: "Ozean-Genuss" },
        description: {
          tr: "Denizden gelen özel lezzetler tabağı.",
          en: "Special platter of ocean delights.",
          de: "Besondere Platte mit Köstlichkeiten aus dem Meer.",
        },
        price: 220,
        image: "/ocean-delight.png",
        category: "cold-appetizers",
      },
      {
        id: "turkish-spicy-ezme",
        name: { tr: "Acılı Ezme", en: "Spicy Ezme", de: "Scharfes Ezme" },
        description: {
          tr: "Domates, biber ve baharatlarla hazırlanan acılı meze.",
          en: "Spicy appetizer made with tomatoes, peppers, and spices.",
          de: "Scharfe Vorspeise aus Tomaten, Paprika und Gewürzen.",
        },
        price: 100,
        image: "/turkish-spicy-ezme.png",
        category: "cold-appetizers",
      },
      {
        id: "marinated-sea-bass",
        name: { tr: "Levrek Marine", en: "Marinated Sea Bass", de: "Marinierter Seebarsch" },
        description: {
          tr: "Özel soslarla marine edilmiş taze levrek dilimleri.",
          en: "Fresh sea bass slices marinated with special sauces.",
          de: "Frische Seebarschscheiben, mariniert mit speziellen Saucen.",
        },
        price: 180,
        image: "/marinated-sea-bass.png",
        category: "cold-appetizers",
      },
      {
        id: "pan-fried-shrimp",
        name: { tr: "Tava Karides", en: "Pan-Fried Shrimp", de: "Gebratene Garnelen" },
        description: {
          tr: "Tereyağında sotelenmiş taze karidesler.",
          en: "Fresh shrimp sautéed in butter.",
          de: "Frische Garnelen in Butter gebraten.",
        },
        price: 190,
        image: "/pan-fried-shrimp.png",
        category: "cold-appetizers",
      },
    ],
  },
  {
    id: 3,
    name: { tr: "Sıcak Mezeler", en: "Hot Appetizers", de: "Warme Vorspeisen" },
    items: [
      {
        id: "potato-croquettes",
        name: { tr: "Patates Kroket", en: "Potato Croquettes", de: "Kartoffelkroketten" },
        description: {
          tr: "Kızarmış çıtır patates kroketler.",
          en: "Crispy fried potato croquettes.",
          de: "Knusprig gebratene Kartoffelkroketten.",
        },
        price: 90,
        image: "/potato-croquettes.png",
        category: "hot-appetizers",
      },
      {
        id: "mushrooms-with-cheese",
        name: { tr: "Peynirli Mantar", en: "Mushrooms with Cheese", de: "Pilze mit Käse" },
        description: {
          tr: "Fırında kaşar peynirli mantar.",
          en: "Mushrooms with melted cheese baked in the oven.",
          de: "Pilze mit geschmolzenem Käse im Ofen gebacken.",
        },
        price: 110,
        image: "/mushrooms-with-cheese.png",
        category: "hot-appetizers",
      },
      {
        id: "golden-crispy-calamari",
        name: { tr: "Kalamar Tava", en: "Golden Crispy Calamari", de: "Goldbrauner knuspriger Tintenfisch" },
        description: {
          tr: "Çıtır çıtır kızarmış taze kalamar.",
          en: "Crispy fried fresh calamari.",
          de: "Knusprig gebratener frischer Tintenfisch.",
        },
        price: 180,
        image: "/golden-crispy-calamari.png",
        category: "hot-appetizers",
      },
      {
        id: "turkish-cheese-rolls",
        name: { tr: "Sigara Böreği", en: "Cheese Rolls", de: "Käsebrötchen" },
        description: {
          tr: "İncecik yufka içinde peynirli çıtır börekler.",
          en: "Crispy pastries with cheese filling in thin phyllo dough.",
          de: "Knusprige Gebäckstücke mit Käsefüllung in dünnem Filoteig.",
        },
        price: 80,
        image: "/turkish-cheese-rolls.png",
        category: "hot-appetizers",
      },
      {
        id: "turkish-pacanga-pastirma-borek",
        name: { tr: "Paçanga Böreği", en: "Pastrami Pastry", de: "Pastrami-Gebäck" },
        description: {
          tr: "Pastırma, kaşar peyniri ve sebzelerle hazırlanan özel börek.",
          en: "Special pastry made with pastrami, kashar cheese, and vegetables.",
          de: "Spezialgebäck mit Pastrami, Kashar-Käse und Gemüse.",
        },
        price: 120,
        image: "/turkish-pacanga-pastirma-borek.png",
        category: "hot-appetizers",
      },
    ],
  },
  {
    id: 4,
    name: { tr: "Ana Yemekler", en: "Main Courses", de: "Hauptgerichte" },
    items: [
      {
        id: "mixed-grill",
        name: { tr: "Karışık Izgara", en: "Mixed Grill", de: "Gemischter Grillteller" },
        description: {
          tr: "Çeşitli etlerin ızgarada harmanlanmış lezzeti.",
          en: "A delicious blend of various grilled meats.",
          de: "Eine köstliche Mischung aus verschiedenen gegrillten Fleischsorten.",
        },
        price: 350,
        image: "/mixed-grill.png",
        category: "main-courses",
      },
      {
        id: "meatballs-with-cheese-on-tile",
        name: { tr: "Kaşarlı Köfte", en: "Meatballs with Cheese on Tile", de: "Frikadellen mit Käse auf der Platte" },
        description: {
          tr: "Kaşar peyniri ile doldurulmuş ızgara köfteler.",
          en: "Grilled meatballs stuffed with kashar cheese.",
          de: "Gegrillte Frikadellen gefüllt mit Kashar-Käse.",
        },
        price: 280,
        image: "/meatballs-with-cheese-on-tile.png",
        category: "main-courses",
      },
      {
        id: "chicken-saute",
        name: { tr: "Tavuk Sote", en: "Chicken Sauté", de: "Hähnchen-Sauté" },
        description: {
          tr: "Mantar ve sebzelerle sotelenmiş tavuk parçaları.",
          en: "Chicken pieces sautéed with mushrooms and vegetables.",
          de: "Hähnchenstücke mit Pilzen und Gemüse gebraten.",
        },
        price: 260,
        image: "/chicken-saute.png",
        category: "main-courses",
      },
      {
        id: "sizzling-lamb-tandoori",
        name: { tr: "Kuzu Tandır", en: "Sizzling Lamb Tandoori", de: "Zischendes Lamm-Tandoori" },
        description: {
          tr: "Fırında yavaşça pişirilmiş kuzu tandır, pilav ile servis edilir.",
          en: "Slow-cooked lamb tandoori, served with rice.",
          de: "Langsam gegartes Lamm-Tandoori, serviert mit Reis.",
        },
        price: 420,
        image: "/sizzling-lamb-tandoori.png",
        category: "main-courses",
      },
      {
        id: "spiced-turkish-meatballs",
        name: { tr: "İnegöl Köfte", en: "Spiced Turkish Meatballs", de: "Gewürzte türkische Frikadellen" },
        description: {
          tr: "Özel baharatlarla hazırlanan geleneksel İnegöl köftesi.",
          en: "Traditional İnegöl meatballs prepared with special spices.",
          de: "Traditionelle İnegöl-Frikadellen mit speziellen Gewürzen zubereitet.",
        },
        price: 290,
        image: "/spiced-turkish-meatballs.png",
        category: "main-courses",
      },
      {
        id: "smoky-eggplant-kebab",
        name: { tr: "Patlıcan Kebabı", en: "Smoky Eggplant Kebab", de: "Rauchiger Auberginen-Kebab" },
        description: {
          tr: "Közlenmiş patlıcan ve kıyma ile hazırlanan lezzetli kebap.",
          en: "Delicious kebab made with roasted eggplant and minced meat.",
          de: "Leckerer Kebab aus gerösteter Aubergine und Hackfleisch.",
        },
        price: 310,
        image: "/smoky-eggplant-kebab.png",
        category: "main-courses",
      },
      {
        id: "turkish-lamb-skewers",
        name: { tr: "Kuzu Şiş", en: "Lamb Skewers", de: "Lammspieße" },
        description: {
          tr: "Marine edilmiş kuzu etinden şiş kebap, pirinç pilavı ile.",
          en: "Marinated lamb shish kebab, served with rice pilaf.",
          de: "Marinierter Lamm-Schisch-Kebab, serviert mit Reis-Pilaw.",
        },
        price: 380,
        image: "/turkish-lamb-skewers.png",
        category: "main-courses",
      },
      {
        id: "turkish-chicken-shish-kebab",
        name: { tr: "Tavuk Şiş", en: "Chicken Shish Kebab", de: "Hähnchen-Schisch-Kebab" },
        description: {
          tr: "Marine edilmiş tavuk göğsü şiş kebap, pirinç pilavı ile.",
          en: "Marinated chicken breast shish kebab, served with rice pilaf.",
          de: "Marinierter Hähnchenbrust-Schisch-Kebab, serviert mit Reis-Pilaw.",
        },
        price: 290,
        image: "/turkish-chicken-shish-kebab.png",
        category: "main-courses",
      },
    ],
  },
  {
    id: 5,
    name: { tr: "Deniz Mahsulleri", en: "Seafood", de: "Meeresfrüchte" },
    items: [
      {
        id: "greater-amberjack",
        name: { tr: "Grida", en: "Greater Amberjack", de: "Gelbschwanzmakrele" },
        description: {
          tr: "Izgarada pişirilmiş taze grida balığı.",
          en: "Fresh greater amberjack grilled.",
          de: "Frische Gelbschwanzmakrele gegrillt.",
        },
        price: 450,
        image: "/greater-amberjack.png",
        category: "seafood",
      },
      {
        id: "sea-bream-fish",
        name: { tr: "Çipura", en: "Sea Bream Fish", de: "Dorade" },
        description: {
          tr: "Izgarada veya tavada pişirilmiş taze çipura.",
          en: "Fresh sea bream grilled or pan-fried.",
          de: "Frische Dorade gegrillt oder gebraten.",
        },
        price: 380,
        image: "/sea-bream-fish.png",
        category: "seafood",
      },
      {
        id: "karagoz-fish",
        name: { tr: "Karagöz", en: "Karagoz Fish", de: "Karagöz-Fisch" },
        description: {
          tr: "Akdeniz'in lezzetli balığı karagöz.",
          en: "Delicious Mediterranean fish, karagoz.",
          de: "Leckerer Mittelmeerfisch, Karagöz.",
        },
        price: 390,
        image: "/karagoz-fish.png",
        category: "seafood",
      },
      {
        id: "pandora-fish",
        name: { tr: "Mercan", en: "Pandora Fish", de: "Pandora-Fisch" },
        description: {
          tr: "Fırında veya ızgarada pişirilmiş taze mercan balığı.",
          en: "Fresh pandora fish baked or grilled.",
          de: "Frischer Pandora-Fisch gebacken oder gegrillt.",
        },
        price: 410,
        image: "/pandora-fish.png",
        category: "seafood",
      },
      {
        id: "sea-bream-portion",
        name: { tr: "Porsiyon Çipura", en: "Sea Bream Portion", de: "Doradenportion" },
        description: {
          tr: "Tek kişilik ızgara çipura porsiyonu.",
          en: "Single portion of grilled sea bream.",
          de: "Einzelportion gegrillte Dorade.",
        },
        price: 390,
        image: "/sea-bream-portion.png",
        category: "seafood",
      },
      {
        id: "dentex-fish",
        name: { tr: "Sinarit", en: "Dentex Fish", de: "Zahnbrasse" },
        description: {
          tr: "Akdeniz'in en lezzetli balıklarından sinarit.",
          en: "One of the most delicious Mediterranean fish, dentex.",
          de: "Einer der leckersten Mittelmeerfische, Zahnbrasse.",
        },
        price: 480,
        image: "/dentex-fish.png",
        category: "seafood",
      },
      {
        id: "grilled-sea-bream",
        name: { tr: "Izgara Çipura", en: "Grilled Sea Bream", de: "Gegrillte Dorade" },
        description: {
          tr: "Taze çipura, ızgarada mükemmel pişirilmiş.",
          en: "Fresh sea bream, perfectly grilled.",
          de: "Frische Dorade, perfekt gegrillt.",
        },
        price: 380,
        image: "/grilled-sea-bream.png",
        category: "seafood",
      },
      {
        id: "grilled-sea-bass",
        name: { tr: "Izgara Levrek", en: "Grilled Sea Bass", de: "Gegrillter Seebarsch" },
        description: {
          tr: "Taze levrek, ızgarada enfes lezzet.",
          en: "Fresh sea bass, exquisite flavor grilled.",
          de: "Frischer Seebarsch, exquisiter Geschmack gegrillt.",
        },
        price: 400,
        image: "/grilled-sea-bass.png",
        category: "seafood",
      },
      {
        id: "red-mullet-fish",
        name: { tr: "Barbun", en: "Red Mullet Fish", de: "Meerbarbe" },
        description: {
          tr: "Kızarmış veya ızgara taze barbun.",
          en: "Fried or grilled fresh red mullet.",
          de: "Gebratene oder gegrillte frische Meerbarbe.",
        },
        price: 370,
        image: "/red-mullet-fish.png",
        category: "seafood",
      },
      {
        id: "sole-fish",
        name: { tr: "Dil Balığı", en: "Sole Fish", de: "Seezunge" },
        description: {
          tr: "Tavada veya fırında pişirilmiş dil balığı.",
          en: "Pan-fried or baked sole fish.",
          de: "In der Pfanne gebratener oder gebackener Seezungenfisch.",
        },
        price: 420,
        image: "/sole-fish.png",
        category: "seafood",
      },
      {
        id: "grouper-fish",
        name: { tr: "Orfoz", en: "Grouper Fish", de: "Zackenbarsch" },
        description: {
          tr: "Büyük ve lezzetli orfoz balığı.",
          en: "Large and delicious grouper fish.",
          de: "Großer und leckerer Zackenbarsch.",
        },
        price: 550,
        image: "/grouper-fish.png",
        category: "seafood",
      },
      {
        id: "levrek-lokum",
        name: { tr: "Levrek Lokum", en: "Sea Bass Delight", de: "Seebarsch-Delikatesse" },
        description: {
          tr: "Özel marine edilmiş ve ızgarada pişirilmiş levrek fileto.",
          en: "Specially marinated and grilled sea bass fillet.",
          de: "Besonders mariniertes und gegrilltes Seebarschfilet.",
        },
        price: 430,
        image: "/levrek-lokum.png",
        category: "seafood",
      },
    ],
  },
  {
    id: 6,
    name: { tr: "Salatalar", en: "Salads", de: "Salate" },
    items: [
      {
        id: "gavurdagi-thyme-salad",
        name: { tr: "Gavurdağı Kekikli Salata", en: "Gavurdağı Thyme Salad", de: "Gavurdağı Thymian-Salat" },
        description: {
          tr: "Domates, salatalık, soğan, ceviz ve nar ekşili özel salata.",
          en: "Special salad with tomatoes, cucumbers, onions, walnuts, and pomegranate molasses.",
          de: "Besonderer Salat mit Tomaten, Gurken, Zwiebeln, Walnüssen und Granatapfelsirup.",
        },
        price: 100,
        image: "/gavurdagi-thyme-salad.png",
        category: "salads",
      },
      {
        id: "arugula-salad-with-cheese",
        name: { tr: "Peynirli Roka Salata", en: "Arugula Salad with Cheese", de: "Rucola-Salat mit Käse" },
        description: {
          tr: "Roka, domates, ceviz ve beyaz peynir ile.",
          en: "Arugula, tomatoes, walnuts, and white cheese.",
          de: "Rucola, Tomaten, Walnüsse und Weißkäse.",
        },
        price: 95,
        image: "/arugula-salad-with-cheese.png",
        category: "salads",
      },
      {
        id: "arugula-salad",
        name: { tr: "Roka Salata", en: "Arugula Salad", de: "Rucola-Salat" },
        description: {
          tr: "Taze roka, domates ve soğan ile.",
          en: "Fresh arugula, tomatoes, and onions.",
          de: "Frischer Rucola, Tomaten und Zwiebeln.",
        },
        price: 85,
        image: "/arugula-salad.png",
        category: "salads",
      },
      {
        id: "classic-mixed-salad",
        name: { tr: "Klasik Karışık Salata", en: "Classic Mixed Salad", de: "Klassischer gemischter Salat" },
        description: {
          tr: "Mevsim yeşillikleri, domates, salatalık ve özel sos.",
          en: "Seasonal greens, tomatoes, cucumbers, and special dressing.",
          de: "Saisonale Salate, Tomaten, Gurken und spezielles Dressing.",
        },
        price: 90,
        image: "/classic-mixed-salad.png",
        category: "salads",
      },
      {
        id: "green-salad",
        name: { tr: "Yeşil Salata", en: "Green Salad", de: "Grüner Salat" },
        description: {
          tr: "Sadece yeşilliklerden oluşan hafif salata.",
          en: "Light salad consisting only of greens.",
          de: "Leichter Salat, der nur aus Grünzeug besteht.",
        },
        price: 75,
        image: "/green-salad.png",
        category: "salads",
      },
      {
        id: "mixed-greens",
        name: { tr: "Karışık Yeşillikler", en: "Mixed Greens", de: "Gemischte Blattsalate" },
        description: {
          tr: "Çeşitli taze yeşilliklerin harmanı.",
          en: "A mix of various fresh greens.",
          de: "Eine Mischung aus verschiedenen frischen Blattsalaten.",
        },
        price: 80,
        image: "/mixed-greens.png",
        category: "salads",
      },
      {
        id: "turkish-eggplant-salad",
        name: { tr: "Patlıcan Salatası", en: "Eggplant Salad", de: "Auberginensalat" },
        description: {
          tr: "Közlenmiş patlıcan, domates, biber ve maydanoz ile.",
          en: "Roasted eggplant with tomatoes, peppers, and parsley.",
          de: "Geröstete Aubergine mit Tomaten, Paprika und Petersilie.",
        },
        price: 95,
        image: "/turkish-eggplant-salad.png",
        category: "salads",
      },
      {
        id: "turkish-shepherd-salad",
        name: { tr: "Çoban Salata", en: "Shepherd's Salad", de: "Hirten-Salat" },
        description: {
          tr: "Domates, salatalık, biber, soğan ve maydanoz ile.",
          en: "Tomatoes, cucumbers, peppers, onions, and parsley.",
          de: "Tomaten, Gurken, Paprika, Zwiebeln und Petersilie.",
        },
        price: 85,
        image: "/turkish-shepherd-salad.png",
        category: "salads",
      },
      {
        id: "turkish-seasonal-salad",
        name: { tr: "Mevsim Salata", en: "Seasonal Salad", de: "Saisonaler Salat" },
        description: {
          tr: "Mevsimin en taze sebzeleriyle hazırlanan salata.",
          en: "Salad prepared with the freshest seasonal vegetables.",
          de: "Salat zubereitet mit dem frischesten saisonalen Gemüse.",
        },
        price: 90,
        image: "/turkish-seasonal-salad.png",
        category: "salads",
      },
      {
        id: "mediterranean-salad-olives",
        name: { tr: "Akdeniz Salata", en: "Mediterranean Salad", de: "Mittelmeer-Salat" },
        description: {
          tr: "Akdeniz yeşillikleri, zeytin, beyaz peynir ve domates.",
          en: "Mediterranean greens, olives, feta cheese, and tomatoes.",
          de: "Mittelmeergrün, Oliven, Feta-Käse und Tomaten.",
        },
        price: 110,
        image: "/mediterranean-salad-olives.png",
        category: "salads",
      },
      {
        id: "chicken-caesar-salad",
        name: { tr: "Tavuklu Sezar Salata", en: "Chicken Caesar Salad", de: "Hähnchen-Caesar-Salat" },
        description: {
          tr: "Izgara tavuk, marul, kruton ve Sezar sosu.",
          en: "Grilled chicken, lettuce, croutons, and Caesar dressing.",
          de: "Gegrilltes Hähnchen, Salat, Croutons und Caesar-Dressing.",
        },
        price: 130,
        image: "/chicken-caesar-salad.png",
        category: "salads",
      },
    ],
  },
  {
    id: 7,
    name: { tr: "Çorbalar", en: "Soups", de: "Suppen" },
    items: [
      {
        id: "lentil-soup",
        name: { tr: "Mercimek Çorbası", en: "Lentil Soup", de: "Linsensuppe" },
        description: {
          tr: "Geleneksel Türk mercimek çorbası.",
          en: "Traditional Turkish lentil soup.",
          de: "Traditionelle türkische Linsensuppe.",
        },
        price: 70,
        image: "/turkish-soups.png", // Placeholder, specific image not provided
        category: "soups",
      },
      {
        id: "tomato-soup",
        name: { tr: "Domates Çorbası", en: "Tomato Soup", de: "Tomatensuppe" },
        description: {
          tr: "Taze domateslerden hazırlanan lezzetli çorba.",
          en: "Delicious soup made from fresh tomatoes.",
          de: "Leckere Suppe aus frischen Tomaten.",
        },
        price: 75,
        image: "/turkish-soups.png", // Placeholder
        category: "soups",
      },
    ],
  },
  {
    id: 8,
    name: { tr: "Makarnalar", en: "Pasta", de: "Pasta" },
    items: [
      {
        id: "spaghetti-bolognese",
        name: { tr: "Spagetti Bolonez", en: "Spaghetti Bolognese", de: "Spaghetti Bolognese" },
        description: {
          tr: "Kıyma soslu spagetti.",
          en: "Spaghetti with minced meat sauce.",
          de: "Spaghetti mit Hackfleischsauce.",
        },
        price: 160,
        image: "/turkish-pasta-dishes.png", // Placeholder
        category: "pasta",
      },
      {
        id: "fettuccine-alfredo",
        name: { tr: "Fettuccine Alfredo", en: "Fettuccine Alfredo", de: "Fettuccine Alfredo" },
        description: {
          tr: "Kremalı mantar soslu fettuccine.",
          en: "Fettuccine with creamy mushroom sauce.",
          de: "Fettuccine mit cremiger Pilzsauce.",
        },
        price: 170,
        image: "/turkish-pasta-dishes.png", // Placeholder
        category: "pasta",
      },
      {
        id: "turkish-manti-dumplings",
        name: { tr: "Mantı", en: "Manti (Turkish Dumplings)", de: "Mantı (Türkische Teigtaschen)" },
        description: {
          tr: "Yoğurt ve sarımsaklı özel sos ile servis edilen Türk mantısı.",
          en: "Turkish dumplings served with yogurt and special garlic sauce.",
          de: "Türkische Teigtaschen, serviert mit Joghurt und spezieller Knoblauchsauce.",
        },
        price: 180,
        image: "/turkish-manti-dumplings.png",
        category: "pasta",
      },
    ],
  },
  {
    id: 9,
    name: { tr: "Pizzalar", en: "Pizza", de: "Pizza" },
    items: [
      {
        id: "margherita-pizza",
        name: { tr: "Pizza Margherita", en: "Margherita Pizza", de: "Pizza Margherita" },
        description: {
          tr: "Domates sosu, mozzarella ve fesleğen.",
          en: "Tomato sauce, mozzarella, and basil.",
          de: "Tomatensauce, Mozzarella und Basilikum.",
        },
        price: 180,
        image: "/turkish-style-pizzas.png", // Placeholder
        category: "pizza",
      },
      {
        id: "mixed-pizza",
        name: { tr: "Karışık Pizza", en: "Mixed Pizza", de: "Gemischte Pizza" },
        description: {
          tr: "Sucuk, sosis, mantar, biber ve zeytin.",
          en: "Sausage, salami, mushrooms, peppers, and olives.",
          de: "Wurst, Salami, Pilze, Paprika und Oliven.",
        },
        price: 200,
        image: "/turkish-style-pizzas.png", // Placeholder
        category: "pizza",
      },
    ],
  },
  {
    id: 10,
    name: { tr: "Tatlılar", en: "Desserts", de: "Desserts" },
    items: [
      {
        id: "quince-dessert",
        name: { tr: "Ayva Tatlısı", en: "Quince Dessert", de: "Quitten-Dessert" },
        description: {
          tr: "Kaymaklı ve cevizli ayva tatlısı.",
          en: "Quince dessert with clotted cream and walnuts.",
          de: "Quitten-Dessert mit Sahne und Walnüssen.",
        },
        price: 100,
        image: "/quince-dessert.png",
        category: "desserts",
      },
      {
        id: "slice-of-halva",
        name: { tr: "Dilim Helva", en: "Slice of Halva", de: "Scheibe Halva" },
        description: {
          tr: "Fıstıklı veya sade dilim helva.",
          en: "Pistachio or plain slice of halva.",
          de: "Pistazien- oder einfache Scheibe Halva.",
        },
        price: 80,
        image: "/slice-of-halva.png",
        category: "desserts",
      },
      {
        id: "baked-halva",
        name: { tr: "Fırında Helva", en: "Baked Halva", de: "Gebackener Halva" },
        description: {
          tr: "Sıcak servis edilen fırında tahin helvası.",
          en: "Warm baked tahini halva.",
          de: "Warm servierter gebackener Tahini-Halva.",
        },
        price: 90,
        image: "/baked-halva.png",
        category: "desserts",
      },
      {
        id: "fig-dessert",
        name: { tr: "İncir Tatlısı", en: "Fig Dessert", de: "Feigen-Dessert" },
        description: {
          tr: "Cevizli ve kaymaklı incir tatlısı.",
          en: "Fig dessert with walnuts and clotted cream.",
          de: "Feigen-Dessert mit Walnüssen und Sahne.",
        },
        price: 105,
        image: "/fig-dessert.png",
        category: "desserts",
      },
      {
        id: "crepe-dessert",
        name: { tr: "Krep Tatlısı", en: "Crepe Dessert", de: "Crêpe-Dessert" },
        description: {
          tr: "Meyve ve çikolata soslu krep.",
          en: "Crepe with fruit and chocolate sauce.",
          de: "Crêpe mit Frucht- und Schokoladensauce.",
        },
        price: 95,
        image: "/crepe-dessert.png",
        category: "desserts",
      },
      {
        id: "fresh-cake",
        name: { tr: "Yaş Pasta", en: "Fresh Cake", de: "Frischer Kuchen" },
        description: {
          tr: "Günlük taze pasta çeşitleri.",
          en: "Daily fresh cake varieties.",
          de: "Täglich frische Kuchenvariationen.",
        },
        price: 110,
        image: "/fresh-cake.png",
        category: "desserts",
      },
      {
        id: "honey-banana",
        name: { tr: "Ballı Muz", en: "Honey Banana", de: "Honig-Banane" },
        description: {
          tr: "Bal ve ceviz ile servis edilen muz.",
          en: "Banana served with honey and walnuts.",
          de: "Banane mit Honig und Walnüssen serviert.",
        },
        price: 85,
        image: "/honey-banana.png",
        category: "desserts",
      },
      {
        id: "roasted-quince",
        name: { tr: "Közlenmiş Ayva", en: "Roasted Quince", de: "Geröstete Quitte" },
        description: {
          tr: "Közlenmiş ayva, tarçın ve kaymak ile.",
          en: "Roasted quince with cinnamon and clotted cream.",
          de: "Geröstete Quitte mit Zimt und Sahne.",
        },
        price: 100,
        image: "/roasted-quince.png",
        category: "desserts",
      },
      {
        id: "large-fruit-portion",
        name: { tr: "Meyve Tabağı (Büyük)", en: "Large Fruit Portion", de: "Große Obstportion" },
        description: {
          tr: "Mevsimin taze meyvelerinden oluşan büyük porsiyon.",
          en: "Large portion of fresh seasonal fruits.",
          de: "Große Portion frischer saisonaler Früchte.",
        },
        price: 150,
        image: "/large-fruit-portion.png",
        category: "desserts",
      },
      {
        id: "turkish-pumpkin-dessert",
        name: { tr: "Kabak Tatlısı", en: "Pumpkin Dessert", de: "Kürbis-Dessert" },
        description: {
          tr: "Cevizli ve kaymaklı geleneksel kabak tatlısı.",
          en: "Traditional pumpkin dessert with walnuts and clotted cream.",
          de: "Traditionelles Kürbis-Dessert mit Walnüssen und Sahne.",
        },
        price: 95,
        image: "/turkish-pumpkin-dessert.png",
        category: "desserts",
      },
      {
        id: "turkish-katmer-dessert",
        name: { tr: "Katmer", en: "Katmer Dessert", de: "Katmer-Dessert" },
        description: {
          tr: "İncecik hamurdan yapılan, fıstık ve kaymaklı tatlı.",
          en: "Thin pastry dessert with pistachios and clotted cream.",
          de: "Dünnes Gebäckdessert mit Pistazien und Sahne.",
        },
        price: 120,
        image: "/turkish-katmer-dessert.png",
        category: "desserts",
      },
      {
        id: "turkish-seasonal-fruit-plate",
        name: { tr: "Mevsim Meyve Tabağı", en: "Seasonal Fruit Plate", de: "Saisonale Obstplatte" },
        description: {
          tr: "Mevsimin en taze meyvelerinden oluşan bir tabak.",
          en: "A plate of the freshest seasonal fruits.",
          de: "Eine Platte mit den frischesten saisonalen Früchten.",
        },
        price: 130,
        image: "/turkish-seasonal-fruit-plate.png",
        category: "desserts",
      },
    ],
  },
  {
    id: 11,
    name: { tr: "İçecekler", en: "Drinks", de: "Getränke" },
    items: [
      {
        id: "yeni-raki-20cl",
        name: { tr: "Yeni Rakı 20cl", en: "Yeni Raki 20cl", de: "Yeni Raki 20cl" },
        description: { tr: "20cl Yeni Rakı.", en: "20cl Yeni Raki.", de: "20cl Yeni Raki." },
        price: 200,
        image: "/yeni-raki-20cl.png",
        category: "drinks",
      },
      {
        id: "yeni-raki-35cl",
        name: { tr: "Yeni Rakı 35cl", en: "Yeni Raki 35cl", de: "Yeni Raki 35cl" },
        description: { tr: "35cl Yeni Rakı.", en: "35cl Yeni Raki.", de: "35cl Yeni Raki." },
        price: 300,
        image: "/yeni-raki-35cl.png",
        category: "drinks",
      },
      {
        id: "yeni-raki-50cl",
        name: { tr: "Yeni Rakı 50cl", en: "Yeni Raki 50cl", de: "Yeni Raki 50cl" },
        description: { tr: "50cl Yeni Rakı.", en: "50cl Yeni Raki.", de: "50cl Yeni Raki." },
        price: 400,
        image: "/yeni-raki-50cl.png",
        category: "drinks",
      },
      {
        id: "yeni-raki-70cl",
        name: { tr: "Yeni Rakı 70cl", en: "Yeni Raki 70cl", de: "Yeni Raki 70cl" },
        description: { tr: "70cl Yeni Rakı.", en: "70cl Yeni Raki.", de: "70cl Yeni Raki." },
        price: 500,
        image: "/yeni-raki-70cl.png",
        category: "drinks",
      },
      {
        id: "yeni-raki-100cl",
        name: { tr: "Yeni Rakı 100cl", en: "Yeni Raki 100cl", de: "Yeni Raki 100cl" },
        description: { tr: "100cl Yeni Rakı.", en: "100cl Yeni Raki.", de: "100cl Yeni Raki." },
        price: 650,
        image: "/yeni-raki-100cl.png",
        category: "drinks",
      },
      {
        id: "beer-varieties",
        name: { tr: "Bira Çeşitleri", en: "Beer Varieties", de: "Biersorten" },
        description: {
          tr: "Çeşitli yerli ve yabancı biralar.",
          en: "Various local and foreign beers.",
          de: "Verschiedene lokale und ausländische Biere.",
        },
        price: 120,
        image: "/beer-varieties.png",
        category: "drinks",
      },
      {
        id: "glass-of-wine",
        name: { tr: "Kadeh Şarap", en: "Glass of Wine", de: "Glas Wein" },
        description: { tr: "Kırmızı veya beyaz şarap.", en: "Red or white wine.", de: "Rot- oder Weißwein." },
        price: 150,
        image: "/glass-of-wine.png",
        category: "drinks",
      },
      {
        id: "v-doluca-wine",
        name: { tr: "V. Doluca Şarap", en: "V. Doluca Wine", de: "V. Doluca Wein" },
        description: { tr: "V. Doluca marka şarap.", en: "V. Doluca brand wine.", de: "V. Doluca Markenwein." },
        price: 300,
        image: "/v-doluca-wine.png",
        category: "drinks",
      },
      {
        id: "v-doluca-70cl-wine",
        name: { tr: "V. Doluca 70cl Şarap", en: "V. Doluca 70cl Wine", de: "V. Doluca 70cl Wein" },
        description: {
          tr: "70cl V. Doluca marka şarap.",
          en: "70cl V. Doluca brand wine.",
          de: "70cl V. Doluca Markenwein.",
        },
        price: 450,
        image: "/v-doluca-70cl-wine.png",
        category: "drinks",
      },
      {
        id: "yakut-70cl-wine",
        name: { tr: "Yakut 70cl Şarap", en: "Yakut 70cl Wine", de: "Yakut 70cl Wein" },
        description: { tr: "70cl Yakut marka şarap.", en: "70cl Yakut brand wine.", de: "70cl Yakut Markenwein." },
        price: 420,
        image: "/yakut-70cl-wine.png",
        category: "drinks",
      },
      {
        id: "turkish-salgam-turnip-juice",
        name: { tr: "Şalgam Suyu", en: "Turnip Juice", de: "Rübensaft" },
        description: {
          tr: "Acılı veya acısız geleneksel şalgam suyu.",
          en: "Traditional turnip juice, spicy or plain.",
          de: "Traditioneller Rübensaft, scharf oder mild.",
        },
        price: 50,
        image: "/turkish-salgam-turnip-juice.png",
        category: "drinks",
      },
    ],
  },
]

export function getMenuData(locale: "tr" | "en" | "de"): MenuCategory[] {
  return menuData.map((category) => ({
    ...category,
    name: category.name[locale] as any, // Type assertion for simplicity
    items: category.items.map((item) => ({
      ...item,
      name: item.name[locale] as any,
      description: item.description ? (item.description[locale] as any) : undefined,
    })),
  }))
}
