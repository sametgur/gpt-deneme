export type MenuItem = {
  id: string
  name: {
    tr: string
    en: string
    de: string
  }
  description: {
    tr: string
    en: string
    de: string
  }
  price: number
  image: string
}

export type MenuCategory = {
  id: string
  name: {
    tr: string
    en: string
    de: string
  }
  items: MenuItem[]
}

export const menuData: MenuCategory[] = [
  {
    id: "breakfast",
    name: {
      tr: "Kahvaltı",
      en: "Breakfast",
      de: "Frühstück",
    },
    items: [
      {
        id: "plain-omelette",
        name: {
          tr: "Sade Omlet",
          en: "Plain Omelette",
          de: "Einfaches Omelett",
        },
        description: {
          tr: "Üç yumurta ile hazırlanan sade omlet.",
          en: "Plain omelette made with three eggs.",
          de: "Einfaches Omelett aus drei Eiern.",
        },
        price: 120,
        image: "/plain-omelette.png",
      },
      {
        id: "sucuk-omelette",
        name: {
          tr: "Sucuklu Omlet",
          en: "Sausage Omelette",
          de: "Wurst-Omelett",
        },
        description: {
          tr: "Türk sucuğu ile hazırlanan omlet.",
          en: "Omelette made with Turkish sausage.",
          de: "Omelett mit türkischer Wurst.",
        },
        price: 140,
        image: "/sucuk-omelette.png",
      },
      {
        id: "eggs-with-cheese",
        name: {
          tr: "Peynirli Yumurta",
          en: "Eggs with Cheese",
          de: "Eier mit Käse",
        },
        description: {
          tr: "Beyaz peynir ile hazırlanan yumurta.",
          en: "Eggs prepared with white cheese.",
          de: "Eier mit Weißkäse zubereitet.",
        },
        price: 130,
        image: "/eggs-with-cheese.png",
      },
      {
        id: "fried-vegetables",
        name: {
          tr: "Kavurmalı Yumurta",
          en: "Eggs with Fried Vegetables",
          de: "Eier mit gebratenem Gemüse",
        },
        description: {
          tr: "Mevsim sebzeleri ile kavrulmuş yumurta.",
          en: "Eggs scrambled with seasonal vegetables.",
          de: "Rührei mit saisonalem Gemüse.",
        },
        price: 150,
        image: "/fried-vegetables.png",
      },
      {
        id: "eggs-with-potatoes",
        name: {
          tr: "Patatesli Yumurta",
          en: "Eggs with Potatoes",
          de: "Eier mit Kartoffeln",
        },
        description: {
          tr: "Küp doğranmış patateslerle hazırlanan yumurta.",
          en: "Eggs prepared with diced potatoes.",
          de: "Eier mit gewürfelten Kartoffeln zubereitet.",
        },
        price: 135,
        image: "/eggs-with-potatoes.png",
      },
      {
        id: "fried-eggs-with-cheese",
        name: {
          tr: "Sahanda Peynirli Yumurta",
          en: "Fried Eggs with Cheese",
          de: "Spiegeleier mit Käse",
        },
        description: {
          tr: "Sahanda eritilmiş peynirle servis edilen yumurta.",
          en: "Eggs served fried with melted cheese.",
          de: "Spiegeleier mit geschmolzenem Käse serviert.",
        },
        price: 145,
        image: "/fried-eggs-with-cheese.png",
      },
      {
        id: "turkish-sausage",
        name: {
          tr: "Türk Sucuğu",
          en: "Turkish Sausage",
          de: "Türkische Wurst",
        },
        description: {
          tr: "Geleneksel Türk sucuğu, baharatlı ve lezzetli.",
          en: "Traditional Turkish sausage, spicy and delicious.",
          de: "Traditionelle türkische Wurst, würzig und lecker.",
        },
        price: 110,
        image: "/turkish-sausage.png",
      },
      {
        id: "eggs-with-sausage",
        name: {
          tr: "Sucuklu Yumurta",
          en: "Eggs with Sausage",
          de: "Eier mit Wurst",
        },
        description: {
          tr: "Sucuk dilimleri ile hazırlanan yumurta.",
          en: "Eggs prepared with sausage slices.",
          de: "Eier mit Wurstscheiben zubereitet.",
        },
        price: 155,
        image: "/eggs-with-sausage.png",
      },
      {
        id: "boiled-eggs",
        name: {
          tr: "Haşlanmış Yumurta",
          en: "Boiled Eggs",
          de: "Gekochte Eier",
        },
        description: {
          tr: "İsteğe göre haşlanmış yumurta.",
          en: "Boiled eggs as per your preference.",
          de: "Gekochte Eier nach Wunsch.",
        },
        price: 80,
        image: "/boiled-eggs.png",
      },
      {
        id: "hearty-turkish-menemen",
        name: {
          tr: "Menemen",
          en: "Menemen",
          de: "Menemen",
        },
        description: {
          tr: "Domates, biber ve yumurta ile hazırlanan geleneksel Türk kahvaltısı.",
          en: "Traditional Turkish breakfast made with tomatoes, peppers, and eggs.",
          de: "Traditionelles türkisches Frühstück mit Tomaten, Paprika und Eiern.",
        },
        price: 130,
        image: "/hearty-turkish-menemen.png",
      },
      {
        id: "simit-spread",
        name: {
          tr: "Simit Tabağı",
          en: "Simit Plate",
          de: "Simit-Teller",
        },
        description: {
          tr: "Simit, peynir, zeytin ve domates ile.",
          en: "Simit with cheese, olives, and tomatoes.",
          de: "Simit mit Käse, Oliven und Tomaten.",
        },
        price: 110,
        image: "/simit-spread.png",
      },
    ],
  },
  {
    id: "cold-appetizers",
    name: {
      tr: "Soğuk Mezeler",
      en: "Cold Appetizers",
      de: "Kalte Vorspeisen",
    },
    items: [
      {
        id: "atom-meze",
        name: {
          tr: "Atom Meze",
          en: "Atom Meze",
          de: "Atom Meze",
        },
        description: {
          tr: "Acı sevenler için özel atom meze.",
          en: "Special atom meze for spice lovers.",
          de: "Spezielles Atom Meze für Liebhaber von Schärfe.",
        },
        price: 90,
        image: "/atom-meze.png",
      },
      {
        id: "pepper-tarator",
        name: {
          tr: "Biber Tarator",
          en: "Pepper Tarator",
          de: "Paprika Tarator",
        },
        description: {
          tr: "Közlenmiş biber ve yoğurt ile hazırlanan tarator.",
          en: "Tarator made with roasted peppers and yogurt.",
          de: "Tarator aus gerösteten Paprika und Joghurt.",
        },
        price: 85,
        image: "/pepper-tarator.png",
      },
      {
        id: "borani-meze",
        name: {
          tr: "Borani Meze",
          en: "Borani Meze",
          de: "Borani Meze",
        },
        description: {
          tr: "Ispanak ve yoğurt ile hazırlanan geleneksel borani.",
          en: "Traditional borani made with spinach and yogurt.",
          de: "Traditionelles Borani aus Spinat und Joghurt.",
        },
        price: 80,
        image: "/borani-meze.png",
      },
      {
        id: "broccoli-meze",
        name: {
          tr: "Brokoli Meze",
          en: "Broccoli Meze",
          de: "Brokkoli Meze",
        },
        description: {
          tr: "Zeytinyağlı brokoli salatası.",
          en: "Broccoli salad with olive oil.",
          de: "Brokkolisalat mit Olivenöl.",
        },
        price: 75,
        image: "/broccoli-meze.png",
      },
      {
        id: "black-eyed-peas-meze",
        name: {
          tr: "Börülce Meze",
          en: "Black-Eyed Peas Meze",
          de: "Schwarzaugenbohnen Meze",
        },
        description: {
          tr: "Zeytinyağlı börülce salatası.",
          en: "Black-eyed peas salad with olive oil.",
          de: "Schwarzaugenbohnensalat mit Olivenöl.",
        },
        price: 70,
        image: "/black-eyed-peas-meze.png",
      },
      {
        id: "cennet-ezmesi",
        name: {
          tr: "Cennet Ezmesi",
          en: "Cennet Ezmesi",
          de: "Cennet Ezmesi",
        },
        description: {
          tr: "Cennet Restaurant'a özel acılı ezme.",
          en: "Spicy paste special to Cennet Restaurant.",
          de: "Scharfe Paste, speziell für das Cennet Restaurant.",
        },
        price: 95,
        image: "/cennet-ezmesi.png",
      },
      {
        id: "gypsy-rice",
        name: {
          tr: "Çingene Pilavı",
          en: "Gypsy Rice",
          de: "Zigeunerreis",
        },
        description: {
          tr: "Pirinç, sebzeler ve baharatlarla hazırlanan özel pilav.",
          en: "Special rice prepared with rice, vegetables, and spices.",
          de: "Spezialreis mit Reis, Gemüse und Gewürzen zubereitet.",
        },
        price: 100,
        image: "/gypsy-rice.png",
      },
      {
        id: "dried-mackerel",
        name: {
          tr: "Çiroz",
          en: "Dried Mackerel",
          de: "Getrocknete Makrele",
        },
        description: {
          tr: "Kurutulmuş uskumru, meze olarak servis edilir.",
          en: "Dried mackerel, served as an appetizer.",
          de: "Getrocknete Makrele, als Vorspeise serviert.",
        },
        price: 110,
        image: "/dried-mackerel.png",
      },
      {
        id: "seafood-appetizer-platter",
        name: {
          tr: "Deniz Mahsulleri Meze Tabağı",
          en: "Seafood Appetizer Platter",
          de: "Meeresfrüchte-Vorspeisenplatte",
        },
        description: {
          tr: "Çeşitli deniz mahsulleri ile hazırlanan meze tabağı.",
          en: "Appetizer platter prepared with various seafood.",
          de: "Vorspeisenplatte mit verschiedenen Meeresfrüchten zubereitet.",
        },
        price: 220,
        image: "/seafood-appetizer-platter.png",
      },
      {
        id: "anchovies-with-sauce",
        name: {
          tr: "Soslu Hamsi",
          en: "Anchovies with Sauce",
          de: "Sardellen mit Sauce",
        },
        description: {
          tr: "Özel sos ile marine edilmiş hamsi.",
          en: "Anchovies marinated with special sauce.",
          de: "Sardellen mariniert mit spezieller Sauce.",
        },
        price: 120,
        image: "/anchovies-with-sauce.png",
      },
      {
        id: "seafood-casserole",
        name: {
          tr: "Deniz Mahsulleri Güveç",
          en: "Seafood Casserole",
          de: "Meeresfrüchte-Auflauf",
        },
        description: {
          tr: "Fırında pişirilmiş çeşitli deniz mahsulleri güveci.",
          en: "Various seafood casserole baked in the oven.",
          de: "Verschiedene Meeresfrüchte-Auflauf im Ofen gebacken.",
        },
        price: 250,
        image: "/seafood-casserole.png",
      },
      {
        id: "sea-bass-chips",
        name: {
          tr: "Levrek Cips",
          en: "Sea Bass Chips",
          de: "Seebarsch-Chips",
        },
        description: {
          tr: "İnce dilimlenmiş levrek cipsleri.",
          en: "Thinly sliced sea bass chips.",
          de: "Dünn geschnittene Seebarsch-Chips.",
        },
        price: 130,
        image: "/sea-bass-chips.png",
      },
      {
        id: "ocean-delight",
        name: {
          tr: "Okyanus Salatası",
          en: "Ocean Delight Salad",
          de: "Ozean-Salat",
        },
        description: {
          tr: "Deniz mahsulleri ve taze yeşilliklerle hazırlanan ferahlatıcı salata.",
          en: "Refreshing salad made with seafood and fresh greens.",
          de: "Erfrischender Salat mit Meeresfrüchten und frischen Salaten.",
        },
        price: 140,
        image: "/ocean-delight.png",
      },
      {
        id: "turkish-spicy-ezme",
        name: {
          tr: "Acılı Ezme",
          en: "Spicy Ezme",
          de: "Scharfe Ezme",
        },
        description: {
          tr: "Domates, biber ve baharatlarla hazırlanan acılı meze.",
          en: "Spicy appetizer made with tomatoes, peppers, and spices.",
          de: "Scharfe Vorspeise aus Tomaten, Paprika und Gewürzen.",
        },
        price: 85,
        image: "/turkish-spicy-ezme.png",
      },
      {
        id: "marinated-sea-bass",
        name: {
          tr: "Levrek Marine",
          en: "Marinated Sea Bass",
          de: "Marinierter Seebarsch",
        },
        description: {
          tr: "Özel soslarla marine edilmiş taze levrek dilimleri.",
          en: "Fresh sea bass slices marinated with special sauces.",
          de: "Frische Seebarschscheiben, mariniert mit speziellen Saucen.",
        },
        price: 160,
        image: "/marinated-sea-bass.png",
      },
      {
        id: "pan-fried-shrimp",
        name: {
          tr: "Tereyağlı Karides",
          en: "Pan-Fried Shrimp with Butter",
          de: "Garnelen in Butter gebraten",
        },
        description: {
          tr: "Tereyağında sotelenmiş taze karidesler.",
          en: "Fresh shrimp sautéed in butter.",
          de: "Frische Garnelen in Butter gebraten.",
        },
        price: 180,
        image: "/pan-fried-shrimp.png",
      },
      {
        id: "char-grilled-octopus",
        name: {
          tr: "Izgara Ahtapot",
          en: "Char-Grilled Octopus",
          de: "Gegrillter Oktopus",
        },
        description: {
          tr: "Odun ateşinde ızgara edilmiş taze ahtapot.",
          en: "Fresh octopus grilled over wood fire.",
          de: "Frischer Oktopus über Holzfeuer gegrillt.",
        },
        price: 280,
        image: "/char-grilled-octopus.png",
      },
      {
        id: "turkish-cold-meze",
        name: {
          tr: "Karışık Soğuk Meze Tabağı",
          en: "Mixed Cold Meze Platter",
          de: "Gemischte kalte Meze-Platte",
        },
        description: {
          tr: "Çeşitli soğuk mezelerden oluşan zengin bir tabak.",
          en: "A rich platter consisting of various cold appetizers.",
          de: "Eine reichhaltige Platte mit verschiedenen kalten Vorspeisen.",
        },
        price: 190,
        image: "/turkish-cold-meze.png",
      },
      {
        id: "turkish-eggplant-salad",
        name: {
          tr: "Patlıcan Salatası",
          en: "Eggplant Salad",
          de: "Auberginensalat",
        },
        description: {
          tr: "Közlenmiş patlıcan, domates ve biberle hazırlanan salata.",
          en: "Salad made with roasted eggplant, tomatoes, and peppers.",
          de: "Salat aus gerösteter Aubergine, Tomaten und Paprika.",
        },
        price: 90,
        image: "/turkish-eggplant-salad.png",
      },
      {
        id: "turkish-shepherd-salad",
        name: {
          tr: "Çoban Salata",
          en: "Shepherd's Salad",
          de: "Hirten Salat",
        },
        description: {
          tr: "Domates, salatalık, biber ve soğanla hazırlanan taze salata.",
          en: "Fresh salad made with tomatoes, cucumbers, peppers, and onions.",
          de: "Frischer Salat aus Tomaten, Gurken, Paprika und Zwiebeln.",
        },
        price: 75,
        image: "/turkish-shepherd-salad.png",
      },
      {
        id: "turkish-cacik",
        name: {
          tr: "Cacık",
          en: "Cacık",
          de: "Cacık",
        },
        description: {
          tr: "Yoğurt, salatalık ve sarımsakla hazırlanan ferahlatıcı meze.",
          en: "Refreshing appetizer made with yogurt, cucumber, and garlic.",
          de: "Erfrischende Vorspeise aus Joghurt, Gurke und Knoblauch.",
        },
        price: 60,
        image: "/turkish-cacik.png",
      },
      {
        id: "turkish-hummus",
        name: {
          tr: "Humus",
          en: "Hummus",
          de: "Hummus",
        },
        description: {
          tr: "Nohut, tahin, limon suyu ve zeytinyağı ile hazırlanan geleneksel humus.",
          en: "Traditional hummus made with chickpeas, tahini, lemon juice, and olive oil.",
          de: "Traditioneller Hummus aus Kichererbsen, Tahini, Zitronensaft und Olivenöl.",
        },
        price: 80,
        image: "/turkish-hummus.png",
      },
      {
        id: "turkish-meze-platter",
        name: {
          tr: "Meze Tabağı",
          en: "Meze Platter",
          de: "Meze-Platte",
        },
        description: {
          tr: "Çeşitli geleneksel Türk mezelerinden oluşan bir seçki.",
          en: "A selection of various traditional Turkish appetizers.",
          de: "Eine Auswahl verschiedener traditioneller türkischer Vorspeisen.",
        },
        price: 180,
        image: "/turkish-meze-platter.png",
      },
      {
        id: "turkish-stuffed-vine-leaves",
        name: {
          tr: "Zeytinyağlı Yaprak Sarma",
          en: "Olive Oil Stuffed Vine Leaves",
          de: "Weinblätter mit Olivenöl",
        },
        description: {
          tr: "Pirinç ve baharatlarla doldurulmuş zeytinyağlı asma yaprakları.",
          en: "Vine leaves stuffed with rice and spices, cooked with olive oil.",
          de: "Mit Reis und Gewürzen gefüllte Weinblätter, mit Olivenöl gekocht.",
        },
        price: 95,
        image: "/turkish-stuffed-vine-leaves.png",
      },
    ],
  },
  {
    id: "hot-appetizers",
    name: {
      tr: "Sıcak Mezeler",
      en: "Hot Appetizers",
      de: "Warme Vorspeisen",
    },
    items: [
      {
        id: "potato-croquettes",
        name: {
          tr: "Patates Kroket",
          en: "Potato Croquettes",
          de: "Kartoffelkroketten",
        },
        description: {
          tr: "Kızarmış çıtır patates kroketler.",
          en: "Crispy fried potato croquettes.",
          de: "Knusprig frittierte Kartoffelkroketten.",
        },
        price: 70,
        image: "/potato-croquettes.png",
      },
      {
        id: "mushrooms-with-cheese",
        name: {
          tr: "Peynirli Mantar",
          en: "Mushrooms with Cheese",
          de: "Pilze mit Käse",
        },
        description: {
          tr: "Fırında kaşar peynirli mantar.",
          en: "Mushrooms with melted cheddar cheese, baked in the oven.",
          de: "Pilze mit geschmolzenem Cheddar-Käse, im Ofen gebacken.",
        },
        price: 90,
        image: "/mushrooms-with-cheese.png",
      },
      {
        id: "golden-crispy-calamari",
        name: {
          tr: "Kalamar Tava",
          en: "Fried Calamari",
          de: "Gebratener Tintenfisch",
        },
        description: {
          tr: "Çıtır çıtır kızarmış kalamar halkaları.",
          en: "Crispy fried calamari rings.",
          de: "Knusprig frittierte Tintenfischringe.",
        },
        price: 180,
        image: "/golden-crispy-calamari.png",
      },
      {
        id: "turkish-cheese-rolls",
        name: {
          tr: "Sigara Böreği",
          en: "Cigar Borek",
          de: "Zigarren-Börek",
        },
        description: {
          tr: "Peynirle doldurulmuş çıtır çıtır börekler.",
          en: "Crispy pastries filled with cheese.",
          de: "Knusprige Teigrollen mit Käsefüllung.",
        },
        price: 70,
        image: "/turkish-cheese-rolls.png",
      },
      {
        id: "turkish-manti-dumplings",
        name: {
          tr: "Mantı",
          en: "Manti (Turkish Dumplings)",
          de: "Mantı (Türkische Teigtaschen)",
        },
        description: {
          tr: "Yoğurt ve sarımsak sosu ile servis edilen geleneksel Türk mantısı.",
          en: "Traditional Turkish dumplings served with yogurt and garlic sauce.",
          de: "Traditionelle türkische Teigtaschen mit Joghurt-Knoblauch-Sauce serviert.",
        },
        price: 150,
        image: "/turkish-manti-dumplings.png",
      },
      {
        id: "turkish-pacanga-pastirma-borek",
        name: {
          tr: "Paçanga Böreği",
          en: "Pacanga Borek",
          de: "Paçanga Börek",
        },
        description: {
          tr: "Pastırma ve kaşar peyniri ile doldurulmuş çıtır börek.",
          en: "Crispy pastry filled with pastrami and cheddar cheese.",
          de: "Knuspriges Gebäck gefüllt mit Pastrami und Cheddar-Käse.",
        },
        price: 95,
        image: "/turkish-pacanga-pastirma-borek.png",
      },
      {
        id: "crispy-potato-chips",
        name: {
          tr: "Patates Cipsi",
          en: "Crispy Potato Chips",
          de: "Knusprige Kartoffelchips",
        },
        description: {
          tr: "Ev yapımı çıtır patates cipsi.",
          en: "Homemade crispy potato chips.",
          de: "Hausgemachte knusprige Kartoffelchips.",
        },
        price: 60,
        image: "/crispy-potato-chips.png",
      },
    ],
  },
  {
    id: "main-courses",
    name: {
      tr: "Ana Yemekler",
      en: "Main Courses",
      de: "Hauptgerichte",
    },
    items: [
      {
        id: "mixed-grill",
        name: {
          tr: "Karışık Izgara",
          en: "Mixed Grill",
          de: "Gemischter Grillteller",
        },
        description: {
          tr: "Çeşitli ızgara etlerden oluşan ana yemek.",
          en: "Main course consisting of various grilled meats.",
          de: "Hauptgericht bestehend aus verschiedenen gegrillten Fleischsorten.",
        },
        price: 350,
        image: "/mixed-grill.png",
      },
      {
        id: "meatballs-with-cheese-on-tile",
        name: {
          tr: "Kaşarlı Köfte",
          en: "Meatballs with Cheese",
          de: "Frikadellen mit Käse",
        },
        description: {
          tr: "İçerisinde kaşar peyniri bulunan köfteler.",
          en: "Meatballs filled with cheddar cheese.",
          de: "Frikadellen gefüllt mit Cheddar-Käse.",
        },
        price: 280,
        image: "/meatballs-with-cheese-on-tile.png",
      },
      {
        id: "chicken-saute",
        name: {
          tr: "Tavuk Sote",
          en: "Chicken Sauté",
          de: "Hähnchen-Sauté",
        },
        description: {
          tr: "Sebzelerle sotelenmiş tavuk parçaları.",
          en: "Chicken pieces sautéed with vegetables.",
          de: "Hähnchenstücke mit Gemüse gebraten.",
        },
        price: 260,
        image: "/chicken-saute.png",
      },
      {
        id: "sizzling-lamb-tandoori",
        name: {
          tr: "Kuzu Tandır",
          en: "Lamb Tandoori",
          de: "Lamm-Tandoori",
        },
        description: {
          tr: "Fırında yavaşça pişirilmiş kuzu tandır.",
          en: "Slow-cooked lamb tandoori in the oven.",
          de: "Langsam gegartes Lamm-Tandoori im Ofen.",
        },
        price: 420,
        image: "/sizzling-lamb-tandoori.png",
      },
      {
        id: "spiced-turkish-meatballs",
        name: {
          tr: "İnegöl Köfte",
          en: "İnegöl Meatballs",
          de: "İnegöl Frikadellen",
        },
        description: {
          tr: "Özel baharatlarla hazırlanan geleneksel İnegöl köftesi.",
          en: "Traditional İnegöl meatballs prepared with special spices.",
          de: "Traditionelle İnegöl-Frikadellen mit speziellen Gewürzen zubereitet.",
        },
        price: 270,
        image: "/spiced-turkish-meatballs.png",
      },
      {
        id: "smoky-eggplant-kebab",
        name: {
          tr: "Patlıcan Kebabı",
          en: "Eggplant Kebab",
          de: "Auberginen-Kebab",
        },
        description: {
          tr: "Közlenmiş patlıcan ve kıyma ile hazırlanan lezzetli kebap.",
          en: "Delicious kebab made with roasted eggplant and minced meat.",
          de: "Leckerer Kebab aus gerösteter Aubergine und Hackfleisch.",
        },
        price: 310,
        image: "/smoky-eggplant-kebab.png",
      },
      {
        id: "turkish-lamb-skewers",
        name: {
          tr: "Kuzu Şiş",
          en: "Lamb Skewers",
          de: "Lammspieße",
        },
        description: {
          tr: "Marine edilmiş kuzu etinden şiş kebap.",
          en: "Shish kebab made from marinated lamb.",
          de: "Schisch Kebab aus mariniertem Lammfleisch.",
        },
        price: 380,
        image: "/turkish-lamb-skewers.png",
      },
      {
        id: "turkish-chicken-shish-kebab",
        name: {
          tr: "Tavuk Şiş",
          en: "Chicken Shish Kebab",
          de: "Hähnchen-Schisch Kebab",
        },
        description: {
          tr: "Marine edilmiş tavuk göğsünden şiş kebap.",
          en: "Shish kebab made from marinated chicken breast.",
          de: "Schisch Kebab aus mariniertem Hähnchenbrustfilet.",
        },
        price: 290,
        image: "/turkish-chicken-shish-kebab.png",
      },
      {
        id: "turkish-meat-stew",
        name: {
          tr: "Et Güveç",
          en: "Meat Stew",
          de: "Fleischtopf",
        },
        description: {
          tr: "Sebzelerle birlikte fırında pişirilmiş et güveci.",
          en: "Meat stew baked in the oven with vegetables.",
          de: "Fleischeintopf mit Gemüse im Ofen gebacken.",
        },
        price: 320,
        image: "/turkish-meat-stew.png",
      },
      {
        id: "turkish-main-dishes",
        name: {
          tr: "Karışık Ana Yemek Tabağı",
          en: "Mixed Main Course Platter",
          de: "Gemischte Hauptgerichtsplatte",
        },
        description: {
          tr: "Çeşitli ana yemeklerden oluşan zengin bir tabak.",
          en: "A rich platter consisting of various main courses.",
          de: "Eine reichhaltige Platte mit verschiedenen Hauptgerichten.",
        },
        price: 390,
        image: "/turkish-main-dishes.png",
      },
    ],
  },
  {
    id: "drinks",
    name: {
      tr: "İçecekler",
      en: "Drinks",
      de: "Getränke",
    },
    items: [
      {
        id: "beer-varieties",
        name: {
          tr: "Bira Çeşitleri",
          en: "Beer Varieties",
          de: "Biersorten",
        },
        description: {
          tr: "Yerli ve yabancı bira çeşitleri.",
          en: "Local and international beer varieties.",
          de: "Lokale und internationale Biersorten.",
        },
        price: 90,
        image: "/beer-varieties.png",
      },
      {
        id: "glass-of-wine",
        name: {
          tr: "Kadeh Şarap",
          en: "Glass of Wine",
          de: "Glas Wein",
        },
        description: {
          tr: "Kırmızı veya beyaz şarap seçenekleri.",
          en: "Red or white wine options.",
          de: "Rot- oder Weißweinoptionen.",
        },
        price: 110,
        image: "/glass-of-wine.png",
      },
      {
        id: "turkish-coffee-delight",
        name: {
          tr: "Türk Kahvesi",
          en: "Turkish Coffee",
          de: "Türkischer Kaffee",
        },
        description: {
          tr: "Geleneksel Türk kahvesi, köpüklü ve lezzetli.",
          en: "Traditional Turkish coffee, frothy and delicious.",
          de: "Traditioneller türkischer Kaffee, schaumig und lecker.",
        },
        price: 50,
        image: "/turkish-coffee-delight.png",
      },
      {
        id: "turkish-tea-glass",
        name: {
          tr: "Çay",
          en: "Tea",
          de: "Tee",
        },
        description: {
          tr: "Sıcak ve taze demlenmiş Türk çayı.",
          en: "Hot and freshly brewed Turkish tea.",
          de: "Heißer und frisch gebrühter türkischer Tee.",
        },
        price: 30,
        image: "/turkish-tea-glass.png",
      },
      {
        id: "turkish-ayran",
        name: {
          tr: "Ayran",
          en: "Ayran",
          de: "Ayran",
        },
        description: {
          tr: "Yoğurt bazlı geleneksel Türk içeceği.",
          en: "Traditional Turkish yogurt-based drink.",
          de: "Traditionelles türkisches Joghurtgetränk.",
        },
        price: 40,
        image: "/turkish-ayran.png",
      },
      {
        id: "turkish-salgam-turnip-juice",
        name: {
          tr: "Şalgam Suyu",
          en: "Turnip Juice",
          de: "Rübensaft",
        },
        description: {
          tr: "Acılı veya acısız şalgam suyu.",
          en: "Spicy or non-spicy turnip juice.",
          de: "Scharfer oder nicht scharfer Rübensaft.",
        },
        price: 45,
        image: "/turkish-salgam-turnip-juice.png",
      },
      {
        id: "turkish-drinks-trio",
        name: {
          tr: "Karışık İçecekler",
          en: "Mixed Drinks",
          de: "Gemischte Getränke",
        },
        description: {
          tr: "Çeşitli alkolsüz içecek seçenekleri.",
          en: "Various non-alcoholic drink options.",
          de: "Verschiedene alkoholfreie Getränkeoptionen.",
        },
        price: 60,
        image: "/turkish-drinks-trio.png",
      },
    ],
  },
  {
    id: "salads",
    name: {
      tr: "Salatalar",
      en: "Salads",
      de: "Salate",
    },
    items: [
      {
        id: "gavurdagi-thyme-salad",
        name: {
          tr: "Gavurdağı Salata",
          en: "Gavurdağı Salad",
          de: "Gavurdağı Salat",
        },
        description: {
          tr: "Domates, salatalık, ceviz ve nar ekşisi ile.",
          en: "With tomatoes, cucumbers, walnuts, and pomegranate molasses.",
          de: "Mit Tomaten, Gurken, Walnüssen und Granatapfelsirup.",
        },
        price: 90,
        image: "/gavurdagi-thyme-salad.png",
      },
      {
        id: "arugula-salad-with-cheese",
        name: {
          tr: "Rokalı Peynirli Salata",
          en: "Arugula Salad with Cheese",
          de: "Rucola-Salat mit Käse",
        },
        description: {
          tr: "Roka, beyaz peynir ve domates ile.",
          en: "With arugula, white cheese, and tomatoes.",
          de: "Mit Rucola, Weißkäse und Tomaten.",
        },
        price: 85,
        image: "/arugula-salad-with-cheese.png",
      },
      {
        id: "arugula-salad",
        name: {
          tr: "Roka Salata",
          en: "Arugula Salad",
          de: "Rucola-Salat",
        },
        description: {
          tr: "Taze roka, domates ve limon sosu ile.",
          en: "Fresh arugula with tomatoes and lemon dressing.",
          de: "Frischer Rucola mit Tomaten und Zitronendressing.",
        },
        price: 75,
        image: "/arugula-salad.png",
      },
      {
        id: "classic-mixed-salad",
        name: {
          tr: "Mevsim Salata",
          en: "Seasonal Salad",
          de: "Saisonaler Salat",
        },
        description: {
          tr: "Mevsim yeşillikleri ve taze sebzelerle.",
          en: "With seasonal greens and fresh vegetables.",
          de: "Mit saisonalen Salaten und frischem Gemüse.",
        },
        price: 80,
        image: "/classic-mixed-salad.png",
      },
      {
        id: "green-salad",
        name: {
          tr: "Yeşil Salata",
          en: "Green Salad",
          de: "Grüner Salat",
        },
        description: {
          tr: "Sadece yeşilliklerden oluşan hafif salata.",
          en: "Light salad consisting only of greens.",
          de: "Leichter Salat, der nur aus Grünzeug besteht.",
        },
        price: 65,
        image: "/green-salad.png",
      },
      {
        id: "mixed-greens",
        name: {
          tr: "Karışık Yeşillik Salata",
          en: "Mixed Greens Salad",
          de: "Gemischter Blattsalat",
        },
        description: {
          tr: "Çeşitli taze yeşilliklerle hazırlanan salata.",
          en: "Salad prepared with various fresh greens.",
          de: "Salat aus verschiedenen frischen Blattsalaten.",
        },
        price: 70,
        image: "/mixed-greens.png",
      },
      {
        id: "turkish-fresh-salads",
        name: {
          tr: "Akdeniz Salata",
          en: "Mediterranean Salad",
          de: "Mittelmeer-Salat",
        },
        description: {
          tr: "Akdeniz yeşillikleri, zeytin ve peynirle.",
          en: "Mediterranean greens, olives, and cheese.",
          de: "Mittelmeer-Salate, Oliven und Käse.",
        },
        price: 95,
        image: "/turkish-fresh-salads.png",
      },
      {
        id: "turkish-seasonal-salad",
        name: {
          tr: "Roka Salata",
          en: "Arugula Salad",
          de: "Rucola-Salat",
        },
        description: {
          tr: "Taze roka, domates ve limon sosu ile.",
          en: "Fresh arugula with tomatoes and lemon dressing.",
          de: "Frischer Rucola mit Tomaten und Zitronendressing.",
        },
        price: 75,
        image: "/turkish-seasonal-salad.png",
      },
      {
        id: "mediterranean-salad-olives",
        name: {
          tr: "Akdeniz Salata",
          en: "Mediterranean Salad",
          de: "Mittelmeer-Salat",
        },
        description: {
          tr: "Akdeniz yeşillikleri, zeytin ve peynirle.",
          en: "Mediterranean greens, olives, and cheese.",
          de: "Mittelmeer-Salate, Oliven und Käse.",
        },
        price: 95,
        image: "/mediterranean-salad-olives.png",
      },
      {
        id: "chicken-caesar-salad",
        name: {
          tr: "Tavuklu Sezar Salata",
          en: "Chicken Caesar Salad",
          de: "Hähnchen-Caesar-Salat",
        },
        description: {
          tr: "Izgara tavuk, marul, kruton ve Sezar sosu ile.",
          en: "Grilled chicken, lettuce, croutons, and Caesar dressing.",
          de: "Gegrilltes Hähnchen, Salat, Croutons und Caesar-Dressing.",
        },
        price: 120,
        image: "/chicken-caesar-salad.png",
      },
    ],
  },
  {
    id: "soups",
    name: {
      tr: "Çorbalar",
      en: "Soups",
      de: "Suppen",
    },
    items: [
      {
        id: "lentil-soup",
        name: {
          tr: "Mercimek Çorbası",
          en: "Lentil Soup",
          de: "Linsensuppe",
        },
        description: {
          tr: "Geleneksel kırmızı mercimek çorbası.",
          en: "Traditional red lentil soup.",
          de: "Traditionelle rote Linsensuppe.",
        },
        price: 60,
        image: "/turkish-soups.png",
      },
      {
        id: "tomato-soup",
        name: {
          tr: "Domates Çorbası",
          en: "Tomato Soup",
          de: "Tomatensuppe",
        },
        description: {
          tr: "Taze domateslerle hazırlanan kremalı domates çorbası.",
          en: "Creamy tomato soup made with fresh tomatoes.",
          de: "Cremige Tomatensuppe aus frischen Tomaten.",
        },
        price: 65,
        image: "/turkish-soups.png",
      },
      {
        id: "chicken-soup",
        name: {
          tr: "Tavuk Suyu Çorbası",
          en: "Chicken Broth Soup",
          de: "Hühnerbrühe-Suppe",
        },
        description: {
          tr: "Şehriyeli ve tavuklu besleyici çorba.",
          en: "Nutritious soup with vermicelli and chicken.",
          de: "Nahrhafte Suppe mit Fadennudeln und Huhn.",
        },
        price: 70,
        image: "/turkish-soups.png",
      },
    ],
  },
  {
    id: "pasta",
    name: {
      tr: "Makarnalar",
      en: "Pasta",
      de: "Nudeln",
    },
    items: [
      {
        id: "spaghetti-bolognese",
        name: {
          tr: "Spagetti Bolonez",
          en: "Spaghetti Bolognese",
          de: "Spaghetti Bolognese",
        },
        description: {
          tr: "Kıyma soslu spagetti.",
          en: "Spaghetti with minced meat sauce.",
          de: "Spaghetti mit Hackfleischsauce.",
        },
        price: 160,
        image: "/turkish-pasta-dishes.png",
      },
      {
        id: "fettuccine-alfredo",
        name: {
          tr: "Fettuccine Alfredo",
          en: "Fettuccine Alfredo",
          de: "Fettuccine Alfredo",
        },
        description: {
          tr: "Kremalı mantar soslu fettuccine.",
          en: "Fettuccine with creamy mushroom sauce.",
          de: "Fettuccine mit cremiger Pilzsauce.",
        },
        price: 170,
        image: "/turkish-pasta-dishes.png",
      },
      {
        id: "penne-arrabbiata",
        name: {
          tr: "Penne Arabiata",
          en: "Penne Arrabbiata",
          de: "Penne Arrabbiata",
        },
        description: {
          tr: "Acı domates soslu penne makarna.",
          en: "Penne pasta with spicy tomato sauce.",
          de: "Penne-Nudeln mit scharfer Tomatensauce.",
        },
        price: 155,
        image: "/turkish-pasta-dishes.png",
      },
    ],
  },
  {
    id: "pizza",
    name: {
      tr: "Pizzalar",
      en: "Pizza",
      de: "Pizzen",
    },
    items: [
      {
        id: "margherita-pizza",
        name: {
          tr: "Margarita Pizza",
          en: "Margherita Pizza",
          de: "Pizza Margherita",
        },
        description: {
          tr: "Domates sosu, mozzarella ve fesleğen.",
          en: "Tomato sauce, mozzarella, and basil.",
          de: "Tomatensauce, Mozzarella und Basilikum.",
        },
        price: 180,
        image: "/turkish-style-pizzas.png",
      },
      {
        id: "mixed-pizza",
        name: {
          tr: "Karışık Pizza",
          en: "Mixed Pizza",
          de: "Gemischte Pizza",
        },
        description: {
          tr: "Sucuk, sosis, mantar, biber ve zeytin.",
          en: "Sausage, salami, mushrooms, peppers, and olives.",
          de: "Wurst, Salami, Pilze, Paprika und Oliven.",
        },
        price: 200,
        image: "/turkish-style-pizzas.png",
      },
      {
        id: "vegetarian-pizza",
        name: {
          tr: "Vejetaryen Pizza",
          en: "Vegetarian Pizza",
          de: "Vegetarische Pizza",
        },
        description: {
          tr: "Mevsim sebzeleri ve mantar.",
          en: "Seasonal vegetables and mushrooms.",
          de: "Saisonales Gemüse und Pilze.",
        },
        price: 190,
        image: "/turkish-style-pizzas.png",
      },
    ],
  },
  {
    id: "desserts",
    name: {
      tr: "Tatlılar",
      en: "Desserts",
      de: "Desserts",
    },
    items: [
      {
        id: "quince-dessert",
        name: {
          tr: "Ayva Tatlısı",
          en: "Quince Dessert",
          de: "Quitten-Dessert",
        },
        description: {
          tr: "Kaymaklı ayva tatlısı.",
          en: "Quince dessert with clotted cream.",
          de: "Quitten-Dessert mit Sahne.",
        },
        price: 90,
        image: "/quince-dessert.png",
      },
      {
        id: "slice-of-halva",
        name: {
          tr: "Dilim Helva",
          en: "Slice of Halva",
          de: "Scheibe Halva",
        },
        description: {
          tr: "Fıstıklı dilim helva.",
          en: "Pistachio slice halva.",
          de: "Pistazien-Halva-Scheibe.",
        },
        price: 70,
        image: "/slice-of-halva.png",
      },
      {
        id: "baked-halva",
        name: {
          tr: "Fırında Helva",
          en: "Baked Halva",
          de: "Gebackenes Halva",
        },
        description: {
          tr: "Sıcak servis edilen fırında helva.",
          en: "Baked halva served warm.",
          de: "Warm serviertes gebackenes Halva.",
        },
        price: 80,
        image: "/baked-halva.png",
      },
      {
        id: "fig-dessert",
        name: {
          tr: "İncir Tatlısı",
          en: "Fig Dessert",
          de: "Feigen-Dessert",
        },
        description: {
          tr: "Cevizli incir tatlısı.",
          en: "Fig dessert with walnuts.",
          de: "Feigen-Dessert mit Walnüssen.",
        },
        price: 95,
        image: "/fig-dessert.png",
      },
      {
        id: "crepe-dessert",
        name: {
          tr: "Krep Tatlısı",
          en: "Crepe Dessert",
          de: "Crêpe-Dessert",
        },
        description: {
          tr: "Meyveli ve çikolatalı krep.",
          en: "Crepe with fruits and chocolate.",
          de: "Crêpe mit Früchten und Schokolade.",
        },
        price: 100,
        image: "/crepe-dessert.png",
      },
      {
        id: "fresh-cake",
        name: {
          tr: "Yaş Pasta",
          en: "Fresh Cake",
          de: "Frischer Kuchen",
        },
        description: {
          tr: "Günlük taze pasta çeşitleri.",
          en: "Daily fresh cake varieties.",
          de: "Täglich frische Kuchenvariationen.",
        },
        price: 85,
        image: "/fresh-cake.png",
      },
      {
        id: "honey-banana",
        name: {
          tr: "Ballı Muz",
          en: "Honey Banana",
          de: "Honig-Banane",
        },
        description: {
          tr: "Ballı ve cevizli muz dilimleri.",
          en: "Banana slices with honey and walnuts.",
          de: "Bananenscheiben mit Honig und Walnüssen.",
        },
        price: 75,
        image: "/honey-banana.png",
      },
      {
        id: "roasted-quince",
        name: {
          tr: "Kabak Tatlısı",
          en: "Pumpkin Dessert",
          de: "Kürbis-Dessert",
        },
        description: {
          tr: "Cevizli kabak tatlısı.",
          en: "Pumpkin dessert with walnuts.",
          de: "Kürbis-Dessert mit Walnüssen.",
        },
        price: 88,
        image: "/roasted-quince.png",
      },
      {
        id: "large-fruit-portion",
        name: {
          tr: "Meyve Tabağı",
          en: "Fruit Platter",
          de: "Obstplatte",
        },
        description: {
          tr: "Mevsim meyvelerinden oluşan büyük porsiyon.",
          en: "Large portion of seasonal fruits.",
          de: "Große Portion saisonaler Früchte.",
        },
        price: 120,
        image: "/large-fruit-portion.png",
      },
      {
        id: "turkish-pumpkin-dessert",
        name: {
          tr: "Kabak Tatlısı",
          en: "Pumpkin Dessert",
          de: "Kürbis-Dessert",
        },
        description: {
          tr: "Cevizli kabak tatlısı.",
          en: "Pumpkin dessert with walnuts.",
          de: "Kürbis-Dessert mit Walnüssen.",
        },
        price: 88,
        image: "/turkish-pumpkin-dessert.png",
      },
      {
        id: "turkish-katmer-dessert",
        name: {
          tr: "Katmer",
          en: "Katmer",
          de: "Katmer",
        },
        description: {
          tr: "Antep fıstığı ve kaymakla servis edilen ince hamur tatlısı.",
          en: "Thin pastry dessert served with pistachios and clotted cream.",
          de: "Dünnes Gebäckdessert mit Pistazien und Sahne serviert.",
        },
        price: 110,
        image: "/turkish-katmer-dessert.png",
      },
      {
        id: "turkish-seasonal-fruit-plate",
        name: {
          tr: "Meyve Tabağı",
          en: "Fruit Platter",
          de: "Obstplatte",
        },
        description: {
          tr: "Mevsim meyvelerinden oluşan büyük porsiyon.",
          en: "Large portion of seasonal fruits.",
          de: "Große Portion saisonaler Früchte.",
        },
        price: 120,
        image: "/turkish-seasonal-fruit-plate.png",
      },
      {
        id: "turkish-desserts-baklava-kunefe",
        name: {
          tr: "Karışık Tatlı Tabağı",
          en: "Mixed Dessert Platter",
          de: "Gemischte Dessertplatte",
        },
        description: {
          tr: "Çeşitli geleneksel Türk tatlılarından oluşan bir seçki.",
          en: "A selection of various traditional Turkish desserts.",
          de: "Eine Auswahl verschiedener traditioneller türkischer Desserts.",
        },
        price: 150,
        image: "/turkish-desserts-baklava-kunefe.png",
      },
      {
        id: "turkish-desserts",
        name: {
          tr: "Sütlaç",
          en: "Rice Pudding",
          de: "Milchreis",
        },
        description: {
          tr: "Fırında sütlaç, tarçın ile servis edilir.",
          en: "Baked rice pudding, served with cinnamon.",
          de: "Gebackener Milchreis, mit Zimt serviert.",
        },
        price: 70,
        image: "/turkish-desserts.png",
      },
    ],
  },
  {
    id: "seafood",
    name: {
      tr: "Deniz Mahsulleri",
      en: "Seafood",
      de: "Meeresfrüchte",
    },
    items: [
      {
        id: "greater-amberjack",
        name: {
          tr: "Akya",
          en: "Greater Amberjack",
          de: "Großer Bernsteinmakrele",
        },
        description: {
          tr: "Izgara veya tava akya.",
          en: "Grilled or pan-fried greater amberjack.",
          de: "Gegrillter oder gebratener großer Bernsteinmakrele.",
        },
        price: 450,
        image: "/greater-amberjack.png",
      },
      {
        id: "sea-bream-fish",
        name: {
          tr: "Çipura",
          en: "Sea Bream",
          de: "Dorade",
        },
        description: {
          tr: "Taze ızgara çipura.",
          en: "Fresh grilled sea bream.",
          de: "Frische gegrillte Dorade.",
        },
        price: 380,
        image: "/sea-bream-fish.png",
      },
      {
        id: "karagoz-fish",
        name: {
          tr: "Karagöz",
          en: "Karagoz Fish",
          de: "Karagöz Fisch",
        },
        description: {
          tr: "Izgara veya tava karagöz.",
          en: "Grilled or pan-fried karagoz fish.",
          de: "Gegrillter oder gebratener Karagöz Fisch.",
        },
        price: 390,
        image: "/karagoz-fish.png",
      },
      {
        id: "pandora-fish",
        name: {
          tr: "Mercan",
          en: "Pandora Fish",
          de: "Pandora Fisch",
        },
        description: {
          tr: "Izgara veya tava mercan.",
          en: "Grilled or pan-fried pandora fish.",
          de: "Gegrillter oder gebratener Pandora Fisch.",
        },
        price: 400,
        image: "/pandora-fish.png",
      },
      {
        id: "sea-bream-portion",
        name: {
          tr: "Porsiyon Çipura",
          en: "Portion Sea Bream",
          de: "Portion Dorade",
        },
        description: {
          tr: "Tek kişilik ızgara çipura porsiyonu.",
          en: "Single portion of grilled sea bream.",
          de: "Einzelportion gegrillte Dorade.",
        },
        price: 280,
        image: "/sea-bream-portion.png",
      },
      {
        id: "dentex-fish",
        name: {
          tr: "Sinarit",
          en: "Dentex Fish",
          de: "Zahnbrasse",
        },
        description: {
          tr: "Izgara veya tava sinarit.",
          en: "Grilled or pan-fried dentex fish.",
          de: "Gegrillter oder gebratener Zahnbrasse.",
        },
        price: 480,
        image: "/dentex-fish.png",
      },
      {
        id: "grilled-sea-bream",
        name: {
          tr: "Izgara Çipura",
          en: "Grilled Sea Bream",
          de: "Gegrillte Dorade",
        },
        description: {
          tr: "Taze ızgara çipura, yanında salata ile.",
          en: "Fresh grilled sea bream, served with salad.",
          de: "Frische gegrillte Dorade, mit Salat serviert.",
        },
        price: 380,
        image: "/grilled-sea-bream.png",
      },
      {
        id: "grilled-sea-bass",
        name: {
          tr: "Izgara Levrek",
          en: "Grilled Sea Bass",
          de: "Gegrillter Seebarsch",
        },
        description: {
          tr: "Taze ızgara levrek, yanında yeşilliklerle.",
          en: "Fresh grilled sea bass, served with greens.",
          de: "Frischer gegrillter Seebarsch, mit Grünzeug serviert.",
        },
        price: 390,
        image: "/grilled-sea-bass.png",
      },
      {
        id: "red-mullet-fish",
        name: {
          tr: "Barbun",
          en: "Red Mullet",
          de: "Meerbarbe",
        },
        description: {
          tr: "Tava veya ızgara barbun.",
          en: "Pan-fried or grilled red mullet.",
          de: "Gebratene oder gegrillte Meerbarbe.",
        },
        price: 360,
        image: "/red-mullet-fish.png",
      },
      {
        id: "sole-fish",
        name: {
          tr: "Dil Balığı",
          en: "Sole Fish",
          de: "Seezunge",
        },
        description: {
          tr: "Tava dil balığı.",
          en: "Pan-fried sole fish.",
          de: "Gebratene Seezunge.",
        },
        price: 410,
        image: "/sole-fish.png",
      },
      {
        id: "grouper-fish",
        name: {
          tr: "Grida",
          en: "Grouper Fish",
          de: "Zackenbarsch",
        },
        description: {
          tr: "Izgara veya buğulama grida.",
          en: "Grilled or steamed grouper fish.",
          de: "Gegrillter oder gedämpfter Zackenbarsch.",
        },
        price: 500,
        image: "/grouper-fish.png",
      },
      {
        id: "levrek-lokum",
        name: {
          tr: "Levrek Lokum",
          en: "Sea Bass Delight",
          de: "Seebarsch-Delikatesse",
        },
        description: {
          tr: "Özel marine edilmiş ve ızgara edilmiş levrek lokumları.",
          en: "Specially marinated and grilled sea bass delights.",
          de: "Speziell marinierte und gegrillte Seebarsch-Delikatessen.",
        },
        price: 420,
        image: "/levrek-lokum.png",
      },
      {
        id: "fresh-fish-ice",
        name: {
          tr: "Günlük Balık",
          en: "Daily Fish",
          de: "Täglicher Fisch",
        },
        description: {
          tr: "Günlük taze avlanan balık çeşitleri.",
          en: "Daily fresh caught fish varieties.",
          de: "Täglich frisch gefangene Fischsorten.",
        },
        price: 400,
        image: "/fresh-fish-ice.png",
      },
      {
        id: "grilled-sea-bass-new",
        name: {
          tr: "Izgara Levrek",
          en: "Grilled Sea Bass",
          de: "Gegrillter Seebarsch",
        },
        description: {
          tr: "Taze ızgara levrek, yanında yeşilliklerle.",
          en: "Fresh grilled sea bass, served with greens.",
          de: "Frischer gegrillter Seebarsch, mit Grünzeug serviert.",
        },
        price: 390,
        image: "/grilled-sea-bass-new.webp",
      },
      {
        id: "grilled-sea-bass-for-main-courses",
        name: {
          tr: "Izgara Levrek",
          en: "Grilled Sea Bass",
          de: "Gegrillter Seebarsch",
        },
        description: {
          tr: "Taze ızgara levrek, yanında yeşilliklerle.",
          en: "Fresh grilled sea bass, served with greens.",
          de: "Frischer gegrillter Seebarsch, mit Grünzeug serviert.",
        },
        price: 390,
        image: "/grilled-sea-bass-for-main-courses.webp",
      },
      {
        id: "levrek",
        name: {
          tr: "Levrek",
          en: "Sea Bass",
          de: "Seebarsch",
        },
        description: {
          tr: "Taze levrek, ızgara veya tava.",
          en: "Fresh sea bass, grilled or pan-fried.",
          de: "Frischer Seebarsch, gegrillt oder gebraten.",
        },
        price: 390,
        image: "/levrek.webp",
      },
    ],
  },
  {
    id: "special-menus",
    name: {
      tr: "Özel Menüler",
      en: "Special Menus",
      de: "Spezialmenüs",
    },
    items: [
      {
        id: "cennet-special-platter",
        name: {
          tr: "Cennet Özel Tabağı",
          en: "Cennet Special Platter",
          de: "Cennet Spezialplatte",
        },
        description: {
          tr: "Şefin özel seçimi, çeşitli lezzetler bir arada.",
          en: "Chef's special selection, various flavors combined.",
          de: "Spezialauswahl des Küchenchefs, verschiedene Geschmacksrichtungen kombiniert.",
        },
        price: 500,
        image: "/turkish-special-menus.png",
      },
      {
        id: "family-feast",
        name: {
          tr: "Aile Ziyafeti",
          en: "Family Feast",
          de: "Familienfest",
        },
        description: {
          tr: "Tüm aile için doyurucu ve lezzetli seçenekler.",
          en: "Hearty and delicious options for the whole family.",
          de: "Herzhafte und leckere Optionen für die ganze Familie.",
        },
        price: 750,
        image: "/turkish-special-menus.png",
      },
    ],
  },
  {
    id: "raki",
    name: {
      tr: "Rakı",
      en: "Raki",
      de: "Rakı",
    },
    items: [
      {
        id: "yeni-raki-20cl",
        name: {
          tr: "Yeni Rakı 20cl",
          en: "Yeni Raki 20cl",
          de: "Yeni Rakı 20cl",
        },
        description: {
          tr: "20cl Yeni Rakı.",
          en: "20cl Yeni Raki.",
          de: "20cl Yeni Rakı.",
        },
        price: 180,
        image: "/yeni-raki-20cl.png",
      },
      {
        id: "yeni-raki-35cl",
        name: {
          tr: "Yeni Rakı 35cl",
          en: "Yeni Raki 35cl",
          de: "Yeni Rakı 35cl",
        },
        description: {
          tr: "35cl Yeni Rakı.",
          en: "35cl Yeni Raki.",
          de: "35cl Yeni Rakı.",
        },
        price: 280,
        image: "/yeni-raki-35cl.png",
      },
      {
        id: "yeni-raki-50cl",
        name: {
          tr: "Yeni Rakı 50cl",
          en: "Yeni Raki 50cl",
          de: "Yeni Rakı 50cl",
        },
        description: {
          tr: "50cl Yeni Rakı.",
          en: "50cl Yeni Raki.",
          de: "50cl Yeni Rakı.",
        },
        price: 380,
        image: "/yeni-raki-50cl.png",
      },
      {
        id: "yeni-raki-70cl",
        name: {
          tr: "Yeni Rakı 70cl",
          en: "Yeni Raki 70cl",
          de: "Yeni Rakı 70cl",
        },
        description: {
          tr: "70cl Yeni Rakı.",
          en: "70cl Yeni Raki.",
          de: "70cl Yeni Rakı.",
        },
        price: 480,
        image: "/yeni-raki-70cl.png",
      },
      {
        id: "yeni-raki-100cl",
        name: {
          tr: "Yeni Rakı 100cl",
          en: "Yeni Raki 100cl",
          de: "Yeni Rakı 100cl",
        },
        description: {
          tr: "100cl Yeni Rakı.",
          en: "100cl Yeni Raki.",
          de: "100cl Yeni Rakı.",
        },
        price: 650,
        image: "/yeni-raki-100cl.png",
      },
      {
        id: "turkish-raki-meze",
        name: {
          tr: "Rakı Masası",
          en: "Raki Table",
          de: "Rakı-Tisch",
        },
        description: {
          tr: "Rakı ve çeşitli mezelerle hazırlanan özel masa.",
          en: "Special table prepared with raki and various appetizers.",
          de: "Spezieller Tisch mit Rakı und verschiedenen Vorspeisen.",
        },
        price: 550,
        image: "/turkish-raki-meze.png",
      },
    ],
  },
  {
    id: "wines",
    name: {
      tr: "Şaraplar",
      en: "Wines",
      de: "Weine",
    },
    items: [
      {
        id: "v-doluca-wine",
        name: {
          tr: "V. Doluca",
          en: "V. Doluca",
          de: "V. Doluca",
        },
        description: {
          tr: "V. Doluca kırmızı şarap.",
          en: "V. Doluca red wine.",
          de: "V. Doluca Rotwein.",
        },
        price: 250,
        image: "/v-doluca-wine.png",
      },
      {
        id: "v-doluca-70cl-wine",
        name: {
          tr: "V. Doluca 70cl",
          en: "V. Doluca 70cl",
          de: "V. Doluca 70cl",
        },
        description: {
          tr: "70cl V. Doluca kırmızı şarap.",
          en: "70cl V. Doluca red wine.",
          de: "70cl V. Doluca Rotwein.",
        },
        price: 350,
        image: "/v-doluca-70cl-wine.png",
      },
      {
        id: "yakut-70cl-wine",
        name: {
          tr: "Yakut 70cl",
          en: "Yakut 70cl",
          de: "Yakut 70cl",
        },
        description: {
          tr: "70cl Yakut kırmızı şarap.",
          en: "70cl Yakut red wine.",
          de: "70cl Yakut Rotwein.",
        },
        price: 320,
        image: "/yakut-70cl-wine.png",
      },
      {
        id: "rose-wine",
        name: {
          tr: "Roze Şarap",
          en: "Rosé Wine",
          de: "Roséwein",
        },
        description: {
          tr: "Hafif ve ferahlatıcı roze şarap.",
          en: "Light and refreshing rosé wine.",
          de: "Leichter und erfrischender Roséwein.",
        },
        price: 280,
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        id: "white-wine",
        name: {
          tr: "Beyaz Şarap",
          en: "White Wine",
          de: "Weißwein",
        },
        description: {
          tr: "Çeşitli beyaz şarap seçenekleri.",
          en: "Various white wine options.",
          de: "Verschiedene Weißweinoptionen.",
        },
        price: 270,
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
]
