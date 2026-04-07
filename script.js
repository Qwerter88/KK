// ===================
// Lernkarten-Daten (Kartenset) – Basisdaten
// ===================

const baseCards = [
  {
    id: "thymian",
    germanName: "Thymian",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Thymian", "Thymi", "herba"],
    stammpflanze1: "Echter Thymian – Thymus vulgaris",
    familieParts: ["Lippenblütler", "Lamiaceae"],
    inhaltsstoffe: [
      "Ätherisches Öl (Thymol)",
      "Flavonoide",
      "Gerbstoffe"
    ],
    wirkung: [
      "bronchospasmolytisch",
      "expektorierend"
    ],
    anwendung: [
      "Katarrhen der oberen Atemwege"
    ],
    warnhinweise: [
      "Thymiansirup"
    ]
  },

  // ----- Süßholz, Primel, Anis, Fenchel -----
  {
    id: "suessholz",
    germanName: "Süßholz",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Süßholzwurzel", "Liquiritiae", "radix"],
    stammpflanze1: "Süßholz – Glycyrrhiza glabra",
    familieParts: ["Hülsenfrüchtler", "Fabaceae"],
    inhaltsstoffe: [
      "Saponine",
      "Flavonoide"
    ],
    wirkung: [
      "expektorierend",
      "antiphlogistisch",
      "antiulcerogen",
      "spasmolytisch"
    ],
    anwendung: [
      "Katarrhen der oberen Atemwege",
      "Gastritis",
      "Magengeschwüre"
    ],
    warnhinweise: [
      "Aufguss",
      "Mazerat"
    ]
  },
  {
    id: "primel",
    germanName: "Primel",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Primelblüte / Primelwurzel", "Primulae", "flos / radix"],
    stammpflanze1: "Frühlings-Schlüsselblume – Primula veris / Hohe Schlüsselblume – Primula elatior",
    familieParts: ["Primelgewächse", "Primulaceae"],
    inhaltsstoffe: [
      "Flavonoide (Blüte)",
      "Saponine",
      "Carotinoide",
      "Ätherisches Öl (Wurzel)"
    ],
    wirkung: [
      "expektorierend"
    ],
    anwendung: [
      "Katarrhen der Atemwege",
      "Verflüssigung des Schleims"
    ],
    warnhinweise: [
      "Primelsirup",
      "Primeltinktur"
    ]
  },
  {
    id: "anis",
    germanName: "Anis",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Anis", "Anisi", "fructus"],
    stammpflanze1: "Anis – Pimpinella anisum",
    familieParts: ["Doldenblütler", "Apiaceae"],
    inhaltsstoffe: [
      "Ätherisches Öl"
    ],
    wirkung: [
      "carminativ",
      "expektorierend",
      "schwach spasmolytisch"
    ],
    anwendung: [
      "Katarrhen der Atemwege",
      "Förderung des Schleims",
      "leichte krampfartige Magen-Darm-Beschwerden"
    ],
    warnhinweise: [
      "Spiritus Anisi compositus"
    ]
  },
  {
    id: "fenchel_bitter",
    germanName: "Bitterer Fenchel",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["bitterer Fenchel", "Foeniculi amari", "fructus"],
    stammpflanze1: "Gewöhnlicher Fenchel – Foeniculum vulgare",
    familieParts: ["Doldenblütler", "Apiaceae"],
    inhaltsstoffe: [
      "Ätherische Öle",
      "Phenolcarbonsäuren",
      "Flavonoide"
    ],
    wirkung: [
      "spasmolytisch",
      "carminativ",
      "sekretolytisch"
    ],
    anwendung: [
      "Katarrhen der Atemwege",
      "Schleimlösung",
      "Blähungen",
      "leichte krampfartige Magen-Darm-Beschwerden"
    ],
    warnhinweise: [
      "Aqua Foeniculi officinalis",
      "Aqua carminativa",
      "Aqua carminativa regia"
    ]
  },

  // ----- Eukalyptus, Efeu, Eibisch, Malve, Spitzwegerich, Königskerze -----
  {
    id: "eukalyptus",
    germanName: "Eukalyptus",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Eukalyptusblätter", "Eucalypti", "folium"],
    stammpflanze1: "Eukalyptus – Eucalyptus globulus",
    familieParts: ["Myrtengewächse", "Myrtaceae"],
    inhaltsstoffe: [
      "Ätherisches Öl",
      "Flavonoide",
      "Gerbstoffe"
    ],
    wirkung: [
      "entzündungshemmend",
      "antibakteriell",
      "schleimlösend"
    ],
    anwendung: [
      "Inhalation bei Katarrhen der oberen Atemwege"
    ],
    warnhinweise: [
      "Nicht bei Säuglingen anwenden",
      "Nicht unter 2 Jahren"
    ]
  },
  {
    id: "efeu",
    germanName: "Efeu",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Efeublätter", "Hederae", "folium"],
    stammpflanze1: "Gemeiner Efeu – Hedera helix",
    familieParts: ["Araliengewächse", "Araliaceae"],
    inhaltsstoffe: [
      "Saponine"
    ],
    wirkung: [
      "schleimlösend",
      "auswurffördernd",
      "spasmolytisch"
    ],
    anwendung: [
      "schleimiger Husten",
      "Entzündung der Bronchien"
    ],
    warnhinweise: []
  },
  {
    id: "eibisch",
    germanName: "Eibisch",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Eibischblätter/-blüten/-wurzel", "Althaeae", "folium/flos/radix"],
    stammpflanze1: "Echter Eibisch – Althaea officinalis",
    familieParts: ["Malvengewächse", "Malvaceae"],
    inhaltsstoffe: [
      "Polysaccharide",
      "Stärke (Wurzel)"
    ],
    wirkung: [
      "reizlindernd"
    ],
    anwendung: [
      "Katarrhen der oberen Atemwege",
      "leichte Verdauungsbeschwerden"
    ],
    warnhinweise: [
      "Eibischwurzel als Mazerat",
      "Species Althaeae",
      "Sirupus Althaeae"
    ]
  },
  {
    id: "malve",
    germanName: "Malve",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Malvenblätter/-blüten", "Malvae", "folium/flos"],
    stammpflanze1: "Gewöhnliche Malve – Malva sylvestris / Wegmalve – Malva neglecta",
    familieParts: ["Malvengewächse", "Malvaceae"],
    inhaltsstoffe: [
      "Polysaccharide",
      "Flavonoide",
      "Gerbstoffe (Blätter)"
    ],
    wirkung: [
      "reizlindernd"
    ],
    anwendung: [
      "Katarrhen der oberen Atemwege",
      "Verdauungsbeschwerden",
      "Gastritis (Malvae folium)",
      "Bäder zur Wundheilung",
      "Schleimhautentzündungen im Mund- und Rachenraum"
    ],
    warnhinweise: [
      "Malvae flos als Schönungsdroge",
      "Malvae folium = Käspappel"
    ]
  },
  {
    id: "spitzwegerich",
    germanName: "Spitzwegerich",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Spitzwegerichblätter", "Plantaginis", "folium"],
    stammpflanze1: "Spitzwegerich – Plantago lanceolata",
    familieParts: ["Spitzwegerichgewächse", "Plantaginaceae"],
    inhaltsstoffe: [
      "Polysaccharide",
      "Gerbstoffe",
      "Bitterstoffe"
    ],
    wirkung: [
      "reizlindernd",
      "antiphlogistisch",
      "adstringierend"
    ],
    anwendung: [
      "Katarrhen der oberen Atemwege",
      "Entzündungen der Mund- und Rachenschleimhaut",
      "Wunden und Insektenstiche (frische Blätter, volksmedizinisch)"
    ],
    warnhinweise: [
      "Sirupus Plantaginis"
    ]
  },
  {
    id: "koenigskerze",
    germanName: "Königskerze",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Königskerzenblüten", "Verbasci", "flos"],
    stammpflanze1: "Gewöhnliche / Großblütige / Kleinblütige Königskerze – Verbascum phlomoides / densiflorum / thapsus",
    familieParts: ["Braunwurzgewächse", "Scrophulariaceae"],
    inhaltsstoffe: [
      "Polysaccharide",
      "Saponine",
      "Flavonoide"
    ],
    wirkung: [
      "reizlindernd",
      "expektorierend",
      "antiphlogistisch"
    ],
    anwendung: [
      "Katarrhen der Atemwege"
    ],
    warnhinweise: [
      "Schmuckdroge",
      "volksmedizinisch als Blutreinigungstee"
    ]
  },

  // ----- Arnika, Ringelblume, Kamille, Hamamelis, Eichenrinde -----
  {
    id: "arnika",
    germanName: "Arnika",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Arnikablüten", "Arnicae", "flos"],
    stammpflanze1: "Arnika – Arnica montana",
    familieParts: ["Korbblütler", "Asteraceae"],
    inhaltsstoffe: [
      "Bitterstoffe",
      "Ätherisches Öl",
      "Flavonoide"
    ],
    wirkung: [
      "antiphlogistisch",
      "antiseptisch",
      "wundheilungsfördernd"
    ],
    anwendung: [
      "Kompresse bei Zerrungen und Prellungen",
      "Salbe oder Tinktur bei Hämatomen",
      "Quetschungen",
      "rheumatische Muskel- und Gelenksschmerzen",
      "nach Insektenstichen"
    ],
    warnhinweise: [
      "häufig Allergien",
      "nicht innerlich anwenden",
      "eventuell toxisch"
    ]
  },
  {
    id: "ringelblume",
    germanName: "Ringelblume",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Ringelblumenblüten", "Calendulae", "flos"],
    stammpflanze1: "Ringelblume – Calendula officinalis",
    familieParts: ["Korbblütler", "Asteraceae"],
    inhaltsstoffe: [
      "Saponine",
      "Flavonoide"
    ],
    wirkung: [
      "antiphlogistisch",
      "wundheilungsfördernd"
    ],
    anwendung: [
      "Aufguss bei Wunden aller Art",
      "Hautentzündungen",
      "Venenentzündungen",
      "Schrunden",
      "Akne",
      "Salbe",
      "Tinktur"
    ],
    warnhinweise: []
  },
  {
    id: "kamille",
    germanName: "Kamille",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Kamillenblüten", "Matricariae", "flos"],
    stammpflanze1: "Echte Kamille – Matricaria chamomilla",
    familieParts: ["Korbblütler", "Asteraceae"],
    inhaltsstoffe: [
      "Ätherisches Öl (Bisabolol)",
      "Ätherisches Öl (Chamazulen)",
      "Ätherisches Öl (Matricin)",
      "Flavonoide",
      "Cumarine"
    ],
    wirkung: [
      "antiphlogistisch",
      "spasmolytisch",
      "wundheilungsfördernd",
      "fungizid",
      "antibakteriell",
      "sedativ"
    ],
    anwendung: [
      "Völlegefühl",
      "Blähungen",
      "krampfartige Magen-Darm-Beschwerden",
      "Entzündungen im Mund-Rachenraum",
      "Katarrhen der oberen Atemwege",
      "Hautprobleme als Salben",
      "Hautprobleme als Bäder",
      "Hautprobleme als Tinkturen"
    ],
    warnhinweise: []
  },
  {
    id: "hamamelis",
    germanName: "Hamamelis",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Hamamelisblätter", "Hamamelidis", "folium"],
    stammpflanze1: "Virginische Zaubernuss – Hamamelis virginiana",
    familieParts: ["Zaubernussgewächse", "Hamamelidaceae"],
    inhaltsstoffe: [
      "Gerbstoffe",
      "Flavonoide",
      "wenig ätherisches Öl"
    ],
    wirkung: [
      "adstringierend",
      "wundheilungsfördernd",
      "entzündungshemmend",
      "antibakteriell",
      "antiviral"
    ],
    anwendung: [
      "leichte Hautverletzungen",
      "Entzündungen von Zahnfleisch",
      "Entzündungen der Mundschleimhaut",
      "kosmetische Produkte"
    ],
    warnhinweise: []
  },
  {
    id: "eichenrinde",
    germanName: "Eichenrinde",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Eichenrinde", "Quercus", "cortex"],
    stammpflanze1: "Stiel-, Trauben- oder Flaumeiche – Quercus robur / petraea / pubescens",
    familieParts: ["Buchengewächse", "Fagaceae"],
    inhaltsstoffe: [
      "Gerbstoffe"
    ],
    wirkung: [
      "adstringierend",
      "antiphlogistisch",
      "schweißsekretionshemmend"
    ],
    anwendung: [
      "Entzündungen von Zahnfleisch",
      "Entzündungen der Mundschleimhaut",
      "Frostbeulen",
      "Hämorrhoiden",
      "vermehrte Fußschweißsekretion"
    ],
    warnhinweise: []
  },

  // ----- Birke, Brennnessel, Schachtelhalm, Liebstöckel, Wacholder -----
  {
    id: "birke",
    germanName: "Birke",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Birkenblätter", "Betulae", "folium"],
    stammpflanze1: "Hängebirke – Betula pendula / Moorbirke – Betula pubescens",
    familieParts: ["Birkengewächse", "Betulaceae"],
    inhaltsstoffe: [
      "Flavonoide",
      "Gerbstoffe",
      "wenig ätherisches Öl"
    ],
    wirkung: [
      "diuretisch"
    ],
    anwendung: [
      "Erhöhung der Harnmenge bei Katarrhen der Harnwege",
      "Harngrieß",
      "Vorbeugung von Harnsteinen"
    ],
    warnhinweise: [
      "Nicht bei Wassereinlagerungen durch Herzprobleme"
    ]
  },
  {
    id: "brennessel",
    germanName: "Brennnessel",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Brennnesselblätter/-wurzel", "Urticae", "folium/radix"],
    stammpflanze1: "Große Brennnessel – Urtica dioica / Kleine Brennnessel – Urtica urens",
    familieParts: ["Brennnesselgewächse", "Urticaceae"],
    inhaltsstoffe: [
      "Flavonoide (Blätter)",
      "Kieselsäure (Blätter)",
      "Phenolcarbonsäuren (Blätter)",
      "Phytosterole (Wurzel)",
      "Polysaccharide (Wurzel)",
      "Isolektine (Wurzel)"
    ],
    wirkung: [
      "diuretisch"
    ],
    anwendung: [
      "Erhöhung der Harnmenge bei Katarrhen der Harnwege",
      "Harngrieß",
      "Vorbeugung von Harnsteinen",
      "äußerlich bei fettigen Haaren und Schuppen",
      "Wurzel: leichte Beschwerden beim Harnlassen",
      "Wurzel: gutartige Prostatavergrößerung (BPH)"
    ],
    warnhinweise: [
      "Nicht bei Wassereinlagerungen durch Herzprobleme"
    ]
  },
  {
    id: "schachtelhalm",
    germanName: "Schachtelhalm",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Schachtelhalmkraut", "Equiseti", "herba"],
    stammpflanze1: "Acker-Schachtelhalm – Equisetum arvense",
    familieParts: ["Schachtelhalmgewächse", "Equisetaceae"],
    inhaltsstoffe: [
      "Flavonoide",
      "Kieselsäure",
      "Silikate",
      "Kaliumsalze"
    ],
    wirkung: [
      "schwach diuretisch"
    ],
    anwendung: [
      "Erhöhung der Harnmenge bei Katarrhen der Harnwege",
      "Harngrieß",
      "Vorbeugung von Harnsteinen"
    ],
    warnhinweise: [
      "Nicht verwechseln mit Sumpfschachtelhalm",
      "Zubereitung als Abkochung",
      "auch Zinnkraut genannt",
      "Nicht bei Wassereinlagerungen durch Herzprobleme"
    ]
  },
  {
    id: "liebstoeckel",
    germanName: "Liebstöckel",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Liebstöckelwurzel", "Levistici", "radix"],
    stammpflanze1: "Liebstöckel – Levisticum officinale",
    familieParts: ["Doldenblütler", "Apiaceae"],
    inhaltsstoffe: [
      "Ätherische Öle",
      "Cumarine"
    ],
    wirkung: [
      "wassertreibend"
    ],
    anwendung: [
      "Verdauungsbeschwerden",
      "Erhöhung der Harnmenge",
      "Gewürz"
    ],
    warnhinweise: [
      "auch Maggikraut genannt",
      "nicht bei entzündlichen Nierenerkrankungen (hoher ÄÖ-Gehalt)"
    ]
  },
  {
    id: "wacholder",
    germanName: "Wacholder",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Wacholderbeeren", "Juniperi", "galbulus"],
    stammpflanze1: "Echter Wacholder – Juniperus communis",
    familieParts: ["Zypressengewächse", "Cupressaceae"],
    inhaltsstoffe: [
      "Ätherisches Öl",
      "Kohlenhydrate",
      "Gerbstoffe"
    ],
    wirkung: [
      "spasmolytisch",
      "diuretisch",
      "hyperämisierend"
    ],
    anwendung: [
      "Verdauungsbeschwerden",
      "äußerlich zur Einreibung"
    ],
    warnhinweise: [
      "Nicht bei Schwangerschaft",
      "Nicht bei Nierenerkrankungen"
    ]
  },

  // ----- Bärentraube, Cranberry, Preiselbeere, Kürbis, Sägepalme, Weidenröschen -----
  {
    id: "baerentraube",
    germanName: "Bärentraube",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Bärentraubenblätter", "Uvae ursi", "folium"],
    stammpflanze1: "Echte Bärentraube – Arctostaphylos uva-ursi",
    familieParts: ["Heidekrautgewächse", "Ericaceae"],
    inhaltsstoffe: [
      "Hydrochinone",
      "Gerbstoffe",
      "Bitterstoffe",
      "Flavonoide"
    ],
    wirkung: [
      "harndesinfizierend",
      "entzündungshemmend"
    ],
    anwendung: [
      "entzündliche Erkrankungen der Harnwege"
    ],
    warnhinweise: [
      "Nicht für Schwangere",
      "Nicht für Kinder unter 12 Jahren",
      "maximal 1 Woche",
      "nicht öfter als 5x pro Jahr",
      "Dekokt oder Mazerat, kein Infus"
    ]
  },
  {
    id: "cranberry",
    germanName: "Cranberry",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Cranberryfrüchte", "Macrocarponii", "fructus"],
    stammpflanze1: "Großfruchtige Moosbeere – Vaccinium macrocarpon",
    familieParts: ["Heidekrautgewächse", "Ericaceae"],
    inhaltsstoffe: [
      "Flavonoide (OPC)",
      "Gerbstoffe"
    ],
    wirkung: [
      "antiadhäsiv",
      "antioxidativ",
      "antimikrobiell"
    ],
    anwendung: [
      "Vorbeugung von Harnwegsinfektionen",
      "Behandlung von Harnwegsinfektionen"
    ],
    warnhinweise: []
  },
  {
    id: "preiselbeere",
    germanName: "Preiselbeere",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Preiselbeerblätter", "Vitis idaeae", "folium"],
    stammpflanze1: "Preiselbeere – Vaccinium vitis-idaea",
    familieParts: ["Heidekrautgewächse", "Ericaceae"],
    inhaltsstoffe: [
      "Flavonoide (OPC)",
      "Gerbstoffe",
      "Polyphenole"
    ],
    wirkung: [
      "antiadhäsiv",
      "adstringierend",
      "antimikrobiell",
      "antioxidativ"
    ],
    anwendung: [
      "vorbeugend bei Harnwegsinfekten",
      "unterstützend bei Harnwegsinfekten"
    ],
    warnhinweise: []
  },
  {
    id: "kuerbis",
    germanName: "Kürbis",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Kürbissamen", "Curcurbitae", "semen"],
    stammpflanze1: "Kürbis – Curcubita pepo",
    familieParts: ["Kürbisgewächse", "Curcurbitaceae"],
    inhaltsstoffe: [
      "Phytosterole",
      "Vitamin E",
      "Spurenelemente",
      "Fettes Öl",
      "Eiweiß"
    ],
    wirkung: [
      "positive Wirkung auf die Prostata",
      "antiandrogen",
      "antioxidativ"
    ],
    anwendung: [
      "gutartige Prostatavergrößerung (BPH)",
      "Reizblase"
    ],
    warnhinweise: [
      "als Samen (Kürbiskerne) zum Kauen",
      "in Fertigpräparaten"
    ]
  },
  {
    id: "saegepalme",
    germanName: "Sägepalme",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Sägepalmenfrüchte", "Sabalis serrulatae", "fructus"],
    stammpflanze1: "Sägepalme – Serenoa repens",
    familieParts: ["Palmengewächse", "Arecaceae"],
    inhaltsstoffe: [
      "Phytosterole",
      "Fettes Öl",
      "Flavonoide"
    ],
    wirkung: [
      "entzündungshemmend",
      "prostatastärkend",
      "antiandrogen"
    ],
    anwendung: [
      "gutartige Prostatavergrößerungen (BPH)",
      "Reizblase"
    ],
    warnhinweise: []
  },
  {
    id: "weidenroeschen",
    germanName: "Weidenröschen",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Weidenröschenkraut", "Epilobii", "herba"],
    stammpflanze1: "Weidenröschen – Epilobium parviflorum",
    familieParts: ["Nachtkerzengewächse", "Oenotheraceae"],
    inhaltsstoffe: [
      "Gerbstoffe",
      "Flavonoide"
    ],
    wirkung: [
      "prostatastärkend"
    ],
    anwendung: [
      "volksmedizinisch: Beschwerden beim Harnlassen",
      "volksmedizinisch: gutartige Prostatavergrößerung"
    ],
    warnhinweise: []
  },

  // ----- Salbei, Ratanhia, Tormentill, Myrrhe, Gewürznelke, Teebaumöl -----
  {
    id: "salbei",
    germanName: "Salbei",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Salbeiblätter", "Salviae", "folium"],
    stammpflanze1: "Echter Salbei – Salvia officinalis",
    familieParts: ["Lippenblütler", "Lamiaceae"],
    inhaltsstoffe: [
      "Ätherisches Öl",
      "Gerbstoffe",
      "Bitterstoffe"
    ],
    wirkung: [
      "antiphlogistisch",
      "adstringierend",
      "schweißhemmend"
    ],
    anwendung: [
      "Entzündungen von Zahnfleisch",
      "Entzündungen von Mund- und Rachenschleimhaut",
      "Verdauungsbeschwerden"
    ],
    warnhinweise: [
      "Tinctura Salviae"
    ]
  },
  {
    id: "ratanhia",
    germanName: "Ratanhia",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Ratanhiawurzel", "Radix Ratanhiae", ""],
    stammpflanze1: "Peru-Ratanhia – Krameria triandra",
    familieParts: ["Krameriengewächse", "Krameriaceae"],
    inhaltsstoffe: [
      "Gerbstoffe"
    ],
    wirkung: [
      "adstringierend",
      "antiphlogistisch",
      "antimikrobiell"
    ],
    anwendung: [
      "Entzündungen von Zahnfleisch",
      "Entzündungen der Mundschleimhaut",
      "innerlich selten bei Durchfall"
    ],
    warnhinweise: [
      "als Dekokt",
      "Tinctura Ratanhia",
      "Tinctura Ratanhia + Tinctura Myrrhae",
      "Weleda Ratanhiamundwasser / Zahncreme",
      "St. Severin Ratanhiatee"
    ]
  },
  {
    id: "tormentill",
    germanName: "Tormentill",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Tormentillwurzelstock", "Rhizoma Tormentillae", ""],
    stammpflanze1: "Fingerkraut – Potentilla erecta",
    familieParts: ["Rosengewächse", "Rosaceae"],
    inhaltsstoffe: [
      "Gerbstoffe"
    ],
    wirkung: [
      "adstringierend",
      "antiphlogistisch",
      "antimikrobiell",
      "antidiarrhoisch"
    ],
    anwendung: [
      "Entzündungen im Mund- und Rachenraum",
      "innerlich selten bei Durchfall"
    ],
    warnhinweise: [
      "als Dekokt",
      "Tinctura Tormentillae",
      "Tormentillöl"
    ]
  },
  {
    id: "myrrhe",
    germanName: "Myrrhe",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Myrrhe", "Myrrha", ""],
    stammpflanze1: "Myrrhenbaum – Commiphora myrrha",
    familieParts: ["Balsamstrauchgewächse", "Burseraceae"],
    inhaltsstoffe: [
      "Ätherisches Öl",
      "Harz",
      "Gummen"
    ],
    wirkung: [
      "adstringierend",
      "desinfizierend",
      "desodorierend: vertreibt schlechte Gerüche"
    ],
    anwendung: [
      "Entzündungen von Zahnfleisch",
      "Entzündungen der Mundschleimhaut"
    ],
    warnhinweise: [
      "Tinctura Myrrhae",
      "getrockneter Milchsaft des Myrrhenbaums"
    ]
  },
  {
    id: "gewuerznelke",
    germanName: "Gewürznelke",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Gewürznelken", "Flores Caryophylli", ""],
    stammpflanze1: "Gewürznelkenbaum – Syzygium aromaticum",
    familieParts: ["Myrtengewächse", "Myrtaceae"],
    inhaltsstoffe: [
      "Ätherisches Öl"
    ],
    wirkung: [
      "antimikrobiell",
      "entzündungshemmend",
      "spasmolytisch",
      "lokalanästhetisch"
    ],
    anwendung: [
      "Entzündungen im Mund- und Rachenraum",
      "zahnende Kinder",
      "Zahnschmerzen",
      "Verdauungsstörungen"
    ],
    warnhinweise: [
      "Arzneidroge = getrocknete Blütenknospen",
      "bei Erwachsenen unverdünnt lokal anwendbar"
    ]
  },
  {
    id: "teebaum",
    germanName: "Teebaumöl",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Teebaumöl", "Aetheroleum Melaleucae", ""],
    stammpflanze1: "Teebaum – Melaleuca alternifolia",
    familieParts: ["Myrtengewächse", "Myrtaceae"],
    inhaltsstoffe: [
      "Teebaumöl (ätherisches Öl)"
    ],
    wirkung: [
      "antimikrobiell",
      "bakterizid",
      "antiphlogistisch"
    ],
    anwendung: [
      "Entzündungen der Mundschleimhaut",
      "bakterielle Hautinfektionen (Akne, Abszess)",
      "Fieberblasen",
      "Pilzinfektionen"
    ],
    warnhinweise: [
      "bei oraler Einnahme toxisch",
      "nur lokale Anwendung",
      "Primavera Teebaumöl",
      "Tebodont Zahnpaste",
      "Teebaumöl Vaginalzäpfchen"
    ]
  },

  // ----- Weißdorn, Mistel, Rosmarin, Ginkgo, Knoblauch, Rosskastanie, Buchweizen -----
  {
    id: "weissdorn",
    germanName: "Weißdorn",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Weißdornblätter mit Blüten", "Crataegi", "folium cum flore"],
    stammpflanze1: "Eingriffeliger Weißdorn – Crataegus monogyna / Zweigriffeliger Weißdorn – Crataegus laevigata",
    familieParts: ["Rosengewächse", "Rosaceae"],
    inhaltsstoffe: [
      "Flavonoide",
      "OPC (oligomere Proanthocyanidine)"
    ],
    wirkung: [
      "kardioprotektiv",
      "Steigerung der Kontraktionskraft",
      "bessere Durchblutung des Herzmuskels",
      "Senkung des Gefäßwiderstands",
      "blutdrucksenkend"
    ],
    anwendung: [
      "leichte Herz-Kreislauf-Beschwerden",
      "Erhöhung der Herzleistung",
      "Beklemmungsgefühl in der Herzgegend"
    ],
    warnhinweise: []
  },
  {
    id: "mistel",
    germanName: "Mistel",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Mistelkraut", "Visci", "herba"],
    stammpflanze1: "Mistel – Viscum album",
    familieParts: ["Mistelgewächse", "Viscaceae"],
    inhaltsstoffe: [
      "Lektine",
      "Polypeptide (Viscotoxine)"
    ],
    wirkung: [
      "immunstimulierend",
      "zytotoxisch",
      "blutdrucksenkend (volksmedizinisch)"
    ],
    anwendung: [
      "unterstützend bei Krebserkrankungen",
      "unterstützend bei leichtem Bluthochdruck",
      "unterstützend bei Arteriosklerose",
      "entzündliche Gelenkserkrankungen"
    ],
    warnhinweise: [
      "laut AbVO nur als Bestandteil von Arzneispezialitäten",
      "Kaltansatz"
    ]
  },
  {
    id: "rosmarin",
    germanName: "Rosmarin",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Rosmarinblätter", "Rosmarini", "folium"],
    stammpflanze1: "Rosmarin – Rosmarinus officinalis",
    familieParts: ["Lippenblütler", "Lamiaceae"],
    inhaltsstoffe: [
      "Ätherische Öle",
      "Gerbstoffe",
      "Bitterstoffe"
    ],
    wirkung: [
      "durchblutungsfördernd",
      "spasmolytisch",
      "antiphlogistisch",
      "analgetisch"
    ],
    anwendung: [
      "Verdauungsbeschwerden",
      "Bäder bei rheumatischen Erkrankungen",
      "Einreibungen bei Erkältungen",
      "Einreibungen bei Kreislaufbeschwerden (niedriger Blutdruck)"
    ],
    warnhinweise: [
      "Vorsicht bei Hautverletzungen",
      "Vorsicht bei fieberhaften Erkrankungen",
      "Vorsicht bei Herzproblemen"
    ]
  },
  {
    id: "ginkgo",
    germanName: "Ginkgo",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Ginkgoblätter", "Ginkgo", "folium"],
    stammpflanze1: "Ginkgo – Ginkgo biloba",
    familieParts: ["Ginkgogewächse", "Ginkgoaceae"],
    inhaltsstoffe: [
      "Flavonoide",
      "Terpene"
    ],
    wirkung: [
      "durchblutungsfördernd",
      "Verbesserung der Sauerstoffversorgung im Gehirn",
      "antioxidativ"
    ],
    anwendung: [
      "Gedächtnisstörungen",
      "Konzentrationsstörungen",
      "Schwindel",
      "Tinnitus",
      "periphere arterielle Verschlusskrankheit"
    ],
    warnhinweise: [
      "Wechselwirkung mit blutverdünnenden Medikamenten"
    ]
  },
  {
    id: "knoblauch",
    germanName: "Knoblauch",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Knoblauchzwiebel", "Allii sativi", "bulbus"],
    stammpflanze1: "Knoblauch – Allium sativum",
    familieParts: ["Lauchgewächse", "Alliaceae"],
    inhaltsstoffe: [
      "schwefelhaltige Verbindungen",
      "Ätherisches Öl",
      "Flavonoide"
    ],
    wirkung: [
      "herz- und gefäßstärkend",
      "blutdrucksenkend",
      "cholesterinsenkend",
      "antimikrobiell"
    ],
    anwendung: [
      "unterstützend bei Herzerkrankungen",
      "Senkung des Cholesterinspiegels"
    ],
    warnhinweise: [
      "laut AbVO nur als Bestandteil von Arzneispezialitäten"
    ]
  },
  {
    id: "rosskastanie",
    germanName: "Rosskastanie",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Rosskastaniensamen", "Hippocastani", "semen"],
    stammpflanze1: "Rosskastanie – Aesculus hippocastanum",
    familieParts: ["Rosskastaniengewächse", "Hippocastanaceae"],
    inhaltsstoffe: [
      "Saponine (Aescin)",
      "Flavonoide"
    ],
    wirkung: [
      "gefäßstärkend",
      "gefäßabdichtend",
      "entzündungshemmend"
    ],
    anwendung: [
      "Venenleiden",
      "Krampfadern",
      "Hämorrhoiden",
      "geschwollene Beine",
      "müde Beine"
    ],
    warnhinweise: []
  },
  {
    id: "buchweizen",
    germanName: "Buchweizen",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Buchweizenkraut", "Fagopyri", "herba"],
    stammpflanze1: "Buchweizen – Fagopyrum esculentum",
    familieParts: ["Knöterichgewächse", "Polygonaceae"],
    inhaltsstoffe: [
      "Flavonoide"
    ],
    wirkung: [
      "gefäßstärkend",
      "durchblutungsfördernd"
    ],
    anwendung: [
      "Venenleiden",
      "Hämorrhoiden",
      "Frostbeulen",
      "schlechte Durchblutung"
    ],
    warnhinweise: [
      "laut AbVO nur als Bestandteil von Arzneispezialitäten"
    ]
  }
];

// ===================
// Karten-Array
// ===================
let cards = baseCards.slice();

// ===================
// Gemeinsame Variablen
// ===================

let currentLevel = "einfach";
let currentIndex = 0;
let shuffledIndices = [];
let fromSearchMode = false;
let searchCardId = null;
let currentMode = "cards";

// Inhaltsstoff-/Wirkungs-Quiz
let ingredientQuestions = [];
let currentIngredientQuestionIndex = 0;


// ===================
// Hilfsfunktionen
// ===================

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getLevelCards(level) {
  return cards.filter(c => c.levels && c.levels.includes(level));
}

function getCurrentCard() {
  const levelCards = getLevelCards(currentLevel);
  if (levelCards.length === 0) return null;
  return levelCards[shuffledIndices[currentIndex]];
}


// ===================
// DOM-Initialisierung
// ===================

document.addEventListener("DOMContentLoaded", () => {
  const landing = document.getElementById("landing");
  const app = document.getElementById("app");
  const modeButtons = document.querySelectorAll(".mode-btn");
  const teacherLoginBtn = document.getElementById("teacherLoginBtn");

  const cardContainer = document.getElementById("cardContainer");
  const levelSelect = document.getElementById("levelSelect");
  const checkBtn = document.getElementById("checkBtn");
  const nextBtn = document.getElementById("nextBtn");
  const restartBtn = document.getElementById("restartBtn");
  const backToLandingBtn = document.getElementById("backToLandingBtn");
  const backToSearchBtn = document.getElementById("backToSearchBtn");
  const feedback = document.getElementById("feedback");
  const cardCounter = document.getElementById("cardCounter");
  const optionsContainer = document.getElementById("optionsContainer");
  const optionsList = document.getElementById("optionsList");

  const quizMain = document.getElementById("quizMain");
  const customMain = document.getElementById("customMain");
  const appTitle = document.getElementById("appTitle");
  const quizTopBar = document.getElementById("quizTopBar");

  const customSearchInput = document.getElementById("customSearchInput");
  const customSearchBtn = document.getElementById("customSearchBtn");
  const customSearchResults = document.getElementById("customSearchResults");
  const customBackBtn = document.getElementById("customBackBtn");

  if (teacherLoginBtn) {
    teacherLoginBtn.addEventListener("click", () => {
      const pw = window.prompt("Passwort für Lehrerbereich eingeben:");
      if (!pw) return;

      if (pw === "Thymian01") {
        window.location.href = "edit.html";
      } else {
        alert("Falsches Passwort.");
      }
    });
  }

  if (!landing || !app) return;

  modeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;
      startMode(mode);
    });
  });

  function clearFeedback() {
    feedback.textContent = "";
    feedback.className = "";
  }

  function updateCardCounter() {
    if (currentMode === "ingredient") {
      if (!ingredientQuestions.length) {
        cardCounter.textContent = "";
        return;
      }
      cardCounter.textContent = `Frage ${currentIngredientQuestionIndex + 1} von ${ingredientQuestions.length}`;
      return;
    }

    const levelCards = getLevelCards(currentLevel);
    if (!levelCards.length) {
      cardCounter.textContent = "";
      return;
    }
    cardCounter.textContent = `Karte ${currentIndex + 1} von ${levelCards.length}`;
  }

  function updateIngredientProgress() {
    const progress = document.getElementById("ingredientProgress");
    const progressLabel = document.getElementById("ingredientProgressLabel");

    if (!progress || !progressLabel) return;
    if (!ingredientQuestions.length) return;

    const current = currentIngredientQuestionIndex + 1;
    const total = ingredientQuestions.length;

    progress.max = total;
    progress.value = current;
    progressLabel.textContent = `Lernfortschritt: ${current} von ${total}`;
  }

  function showLanding() {
    landing.classList.remove("hidden");
    app.classList.add("hidden");
    clearFeedback();
  }

  function showApp() {
    landing.classList.add("hidden");
    app.classList.remove("hidden");
    window.scrollTo(0, 0);
  }

  function showQuizLayout() {
    quizMain.classList.remove("hidden");
    customMain.classList.add("hidden");
    quizTopBar.classList.remove("hidden");
    appTitle.textContent = "Pflanzen-Lernkarten – Kartenset";
  }

  function showCustomLayout() {
    quizMain.classList.add("hidden");
    customMain.classList.remove("hidden");
    quizTopBar.classList.add("hidden");
    appTitle.textContent = "Eigenes Lernen – Suchfunktion";
  }

  function showIngredientLayout() {
    quizMain.classList.remove("hidden");
    customMain.classList.add("hidden");
    quizTopBar.classList.add("hidden");
    appTitle.textContent = "Inhaltsstoff-Lernen – Multiple-Choice-Quiz";
  }

  function resetToLandingState() {
    fromSearchMode = false;
    searchCardId = null;
    currentMode = "cards";
    currentLevel = "einfach";
    currentIndex = 0;
    shuffledIndices = [];
    ingredientQuestions = [];
    currentIngredientQuestionIndex = 0;

    if (levelSelect) levelSelect.value = "einfach";
    if (backToSearchBtn) backToSearchBtn.classList.add("hidden");
    if (nextBtn) {
      nextBtn.classList.remove("hidden");
      nextBtn.textContent = "Nächste Karte";
      nextBtn.disabled = true;
    }
    if (checkBtn) checkBtn.classList.remove("hidden");
    if (optionsContainer) optionsContainer.classList.remove("hidden");
    if (optionsList) optionsList.innerHTML = "";
    if (cardContainer) cardContainer.innerHTML = "";
    if (cardCounter) cardCounter.textContent = "";
    clearFeedback();
  }


  // ===================
  // Karten-Modus
  // ===================

  function initLevel() {
    const levelCards = getLevelCards(currentLevel);
    shuffledIndices = shuffleArray(levelCards.map((_, i) => i));
    currentIndex = 0;
    renderCurrentCard();
  }

  function buildCardHTML(card, level) {
    const isFree = level === "schwer";

    function makeDrogenBlock() {
      if (isFree) {
        return `
          <div class="cell">
            <h3>Drogenbezeichnung</h3>
            <div class="field">
              <input class="input-field" type="text" data-key="drogenfull" placeholder="z. B. Thymian / Thymi / herba" />
            </div>
          </div>
        `;
      }

      return `
        <div class="cell">
          <h3>Drogenbezeichnung</h3>
          <div class="field">
            <div class="dropzone" data-key="drogenpart0" data-group="drogen"></div>
            <span> </span>
            <div class="dropzone" data-key="drogenpart1" data-group="drogen"></div>
            <span> </span>
            <div class="dropzone" data-key="drogenpart2" data-group="drogen"></div>
          </div>
        </div>
      `;
    }

    function makeStammpflanzeBlock() {
      if (isFree) {
        return `
          <div class="cell">
            <h3>Stammpflanze und Familie</h3>
            <div class="field">${card.stammpflanze1 || ""}</div>
            <div class="field" style="margin-top:6px;">
              <input class="input-field" type="text" data-key="familiefull" placeholder="z. B. Lippenblütler - Lamiaceae" />
            </div>
          </div>
        `;
      }

      return `
        <div class="cell">
          <h3>Stammpflanze und Familie</h3>
          <div class="field">${card.stammpflanze1 || ""}</div>
          <div class="field" style="margin-top:6px;">
            <div class="dropzone" data-key="familiepart0" data-group="familie"></div>
            <span> - </span>
            <div class="dropzone" data-key="familiepart1" data-group="familie"></div>
          </div>
        </div>
      `;
    }

    function makeBlock(title, key) {
      const values = (card[key] || []).filter(Boolean);

      return `
        <div class="cell">
          <h3>${title}</h3>
          ${
            isFree
              ? values.map((_, index) => `
                  <input class="input-field" type="text" data-key="${key}${index}" placeholder="Antwort eingeben..." />
                `).join("")
              : values.map((_, index) => `
                  <div class="dropzone" data-key="${key}${index}" data-group="${key}"></div>
                `).join("")
          }
        </div>
      `;
    }

    return `
      <div class="card">
        <h2>${card.germanName || ""}</h2>

        <div class="row">
          ${makeDrogenBlock()}
          ${makeStammpflanzeBlock()}
        </div>

        <div class="row">
          ${makeBlock("Inhaltsstoffe", "inhaltsstoffe")}
          ${makeBlock("Wirkung", "wirkung")}
        </div>

        <div class="row">
          ${makeBlock("Anwendung", "anwendung")}
          ${makeBlock("Warnhinweise / Zusatzinformation", "warnhinweise")}
        </div>
      </div>
    `;
  }

  function renderCurrentCard() {
    clearFeedback();

    if (nextBtn) nextBtn.disabled = true;
    if (optionsList) optionsList.innerHTML = "";

    const card = getCurrentCard();
    if (!card) {
      cardContainer.innerHTML = "<p>Keine Karten für diese Stufe vorhanden.</p>";
      if (optionsContainer) optionsContainer.classList.add("hidden");
      return;
    }

    cardContainer.innerHTML = buildCardHTML(card, currentLevel);
    updateCardCounter();

    if (checkBtn) {
      if (currentLevel === "einfach") {
        checkBtn.classList.add("hidden");
      } else {
        checkBtn.classList.remove("hidden");
      }
    }

    if (optionsContainer) {
      if (currentLevel === "schwer") {
        optionsContainer.classList.add("hidden");
      } else {
        optionsContainer.classList.remove("hidden");
      }
    }

    if (currentLevel === "einfach" || currentLevel === "mittel") {
      setupDragDrop(card, currentLevel);
    }
  }

  function buildOptionsFromCard(card) {
    return shuffleArray([
      ...(card.drogenParts || []),
      ...(card.familieParts || []),
      ...(card.inhaltsstoffe || []),
      ...(card.wirkung || []),
      ...(card.anwendung || []),
      ...(card.warnhinweise || [])
    ].filter(Boolean));
  }

  function setupDragDrop(card, level) {
    const allOptions = buildOptionsFromCard(card);
    if (!optionsList) return;

    optionsList.innerHTML = "";

    allOptions.forEach(text => {
      const item = document.createElement("div");
      item.className = "option-item";
      item.textContent = text;
      item.draggable = true;

      item.addEventListener("dragstart", () => {
        item.classList.add("dragging");
      });

      item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
      });

      optionsList.appendChild(item);
    });

    const dropzones = Array.from(document.querySelectorAll(".dropzone"));

    dropzones.forEach(zone => {
      zone.addEventListener("dragover", e => {
        e.preventDefault();
        zone.classList.add("over");
      });

      zone.addEventListener("dragleave", () => {
        zone.classList.remove("over");
      });

      zone.addEventListener("drop", e => {
        e.preventDefault();
        zone.classList.remove("over");

        const dragging = document.querySelector(".option-item.dragging");
        if (!dragging) return;

        const existing = zone.querySelector(".option-item");
        if (existing) {
          optionsList.appendChild(existing);
        }

        zone.appendChild(dragging);

        if (level === "einfach") {
          const allCorrect = checkAllDropzonesCorrect(card);
          if (allCorrect && nextBtn) {
            feedback.textContent = "Richtig! Alle Felder korrekt zugeordnet.";
            feedback.className = "feedback-ok";
            nextBtn.disabled = false;
          } else {
            clearFeedback();
            nextBtn.disabled = true;
          }
        }
      });
    });

    optionsList.addEventListener("dragover", e => {
      e.preventDefault();
      optionsList.classList.add("over");
    });

    optionsList.addEventListener("dragleave", () => {
      optionsList.classList.remove("over");
    });

    optionsList.addEventListener("drop", e => {
      e.preventDefault();
      optionsList.classList.remove("over");

      const dragging = document.querySelector(".option-item.dragging");
      if (!dragging) return;
      optionsList.appendChild(dragging);

      if (level === "einfach") {
        clearFeedback();
        nextBtn.disabled = true;
      }
    });
  }

function checkAllDropzonesCorrect(card) {
  const dropzones = Array.from(document.querySelectorAll(".dropzone"));

  const expectedGroups = {
    drogen: (card.drogenParts || []).map(t => t.trim().toLowerCase()).filter(Boolean),
    familie: (card.familieParts || []).map(t => t.trim().toLowerCase()).filter(Boolean),
    inhaltsstoffe: (card.inhaltsstoffe || []).map(t => t.trim().toLowerCase()).filter(Boolean),
    wirkung: (card.wirkung || []).map(t => t.trim().toLowerCase()).filter(Boolean),
    anwendung: (card.anwendung || []).map(t => t.trim().toLowerCase()).filter(Boolean),
    warnhinweise: (card.warnhinweise || []).map(t => t.trim().toLowerCase()).filter(Boolean)
  };

  const givenGroups = {
    drogen: [],
    familie: [],
    inhaltsstoffe: [],
    wirkung: [],
    anwendung: [],
    warnhinweise: []
  };

  const totalDropzones = dropzones.length;
  const filledDropzones = dropzones.filter(z => z.querySelector(".option-item")).length;

  if (filledDropzones < totalDropzones) return false;

  for (const zone of dropzones) {
    const group = zone.dataset.group;
    const item = zone.querySelector(".option-item");

    if (!group || !item) return false;

    const text = (item.textContent || "").trim().toLowerCase();

    if (!givenGroups[group]) return false;
    givenGroups[group].push(text);
  }

  for (const group of Object.keys(expectedGroups)) {
    const expected = expectedGroups[group];
    const given = givenGroups[group];

    if (given.length !== expected.length) return false;

    for (const val of expected) {
      if (!given.includes(val)) return false;
    }
  }

  return true;
}

  function checkAnswers() {
    if (currentMode === "ingredient") {
      checkIngredientQuestion();
      return;
    }

    const card = getCurrentCard();
    if (!card) return;

    clearFeedback();
    let allCorrect = true;

    if (currentLevel === "schwer") {
      const inputs = Array.from(document.querySelectorAll(".input-field"));

      const expectedGroups = {
        drogenfull: [(card.drogenParts || []).join(" ").trim().toLowerCase()],
        familiefull: [`${(card.familieParts || [])[0] || ""} - ${(card.familieParts || [])[1] || ""}`.trim().toLowerCase()],
        inhaltsstoffe: (card.inhaltsstoffe || []).map(v => v.trim().toLowerCase()),
        wirkung: (card.wirkung || []).map(v => v.trim().toLowerCase()),
        anwendung: (card.anwendung || []).map(v => v.trim().toLowerCase()),
        warnhinweise: (card.warnhinweise || []).map(v => v.trim().toLowerCase())
      };

      inputs.forEach(input => {
        input.classList.remove("correct", "incorrect");

        const key = input.dataset.key;
        const given = input.value.trim().toLowerCase();

        let ok = false;

        if (key === "drogenfull") {
          ok = expectedGroups.drogenfull.includes(given);
        } else if (key === "familiefull") {
          ok = expectedGroups.familiefull.includes(given);
        } else {
          const baseKey = key.replace(/[0-9]+$/, "");
          const indexMatch = key.match(/([0-9]+)$/);
          const idx = indexMatch ? Number(indexMatch[1]) : 0;
          const expected = (expectedGroups[baseKey] || [])[idx] || "";
          ok = given === expected;
        }

        if (ok) {
          input.classList.add("correct");
        } else {
          input.classList.add("incorrect");
          allCorrect = false;
        }
      });

    } else {
      const dropzones = Array.from(document.querySelectorAll(".dropzone"));

      const expectedGroups = {
        drogen: (card.drogenParts || []).map(t => t.trim().toLowerCase()).filter(Boolean),
        familie: (card.familieParts || []).map(t => t.trim().toLowerCase()).filter(Boolean),
        inhaltsstoffe: (card.inhaltsstoffe || []).map(t => t.trim().toLowerCase()).filter(Boolean),
        wirkung: (card.wirkung || []).map(t => t.trim().toLowerCase()).filter(Boolean),
        anwendung: (card.anwendung || []).map(t => t.trim().toLowerCase()).filter(Boolean),
        warnhinweise: (card.warnhinweise || []).map(t => t.trim().toLowerCase()).filter(Boolean)
      };

      dropzones.forEach(zone => {
        zone.classList.remove("correct", "incorrect");

        const group = zone.dataset.group;
        const item = zone.querySelector(".option-item");

        if (!group || !item) {
          allCorrect = false;
          return;
        }

        const text = (item.textContent || "").trim().toLowerCase();
        const expectedArr = expectedGroups[group] || [];

        if (expectedArr.includes(text)) {
          zone.classList.add("correct");
        } else {
          zone.classList.add("incorrect");
          allCorrect = false;
        }
      });
    }

    if (allCorrect) {
      feedback.textContent = "Richtig! Gut gemacht.";
      feedback.className = "feedback-ok";
      if (nextBtn) nextBtn.disabled = false;
    } else {
      feedback.textContent = "Einige Angaben sind noch nicht korrekt.";
      feedback.className = "feedback-error";
      if (nextBtn) nextBtn.disabled = true;
    }
  }

  function nextCard() {
    if (currentMode === "ingredient") {
      nextIngredientQuestion();
      return;
    }

    if (fromSearchMode) {
      clearFeedback();
      return;
    }

    const levelCards = getLevelCards(currentLevel);
    if (!levelCards.length) return;

    if (currentIndex >= levelCards.length - 1) {
      cardContainer.innerHTML = `
        <div class="card">
          <h2>Glückwunsch!</h2>
          <p><strong>Du hast alle Karten dieser Stufe geschafft.</strong></p>
          <p>Starte die Stufe gerne noch einmal in neuer Reihenfolge.</p>
        </div>
      `;
      cardCounter.textContent = "";
      clearFeedback();
      nextBtn.disabled = true;
      return;
    }

    currentIndex += 1;
    renderCurrentCard();
  }


  // ===================
  // Inhaltsstoff-/Wirkungs-Quiz
  // ===================

  function buildIngredientQuestionPool() {
    const ingredientMap = new Map();
    const effectMap = new Map();

    cards.forEach(card => {
      const pid = card.id;

      (card.inhaltsstoffe || []).forEach(raw => {
        const txt = (raw || "").trim();
        if (!txt) return;

        const key = txt.toLowerCase();
        if (!ingredientMap.has(key)) {
          ingredientMap.set(key, { label: txt, plantIds: new Set() });
        }
        ingredientMap.get(key).plantIds.add(pid);
      });

      (card.wirkung || []).forEach(raw => {
        const txt = (raw || "").trim();
        if (!txt) return;

        const key = txt.toLowerCase();
        if (!effectMap.has(key)) {
          effectMap.set(key, { label: txt, plantIds: new Set() });
        }
        effectMap.get(key).plantIds.add(pid);
      });
    });

    const questions = [];

    ingredientMap.forEach(val => {
      questions.push({
        type: "ingredient",
        label: val.label,
        correctPlantIds: Array.from(val.plantIds)
      });
    });

    effectMap.forEach(val => {
      questions.push({
        type: "effect",
        label: val.label,
        correctPlantIds: Array.from(val.plantIds)
      });
    });

    ingredientQuestions = shuffleArray(questions);
    currentIngredientQuestionIndex = 0;
  }

  function renderIngredientQuestion() {
    clearFeedback();

    if (!ingredientQuestions.length) {
      cardContainer.innerHTML = `<p>Keine Inhaltsstoff-/Wirkungsdaten vorhanden.</p>`;
      if (cardCounter) cardCounter.textContent = "";
      if (checkBtn) checkBtn.classList.add("hidden");
      if (nextBtn) nextBtn.disabled = true;
      return;
    }

    const q = ingredientQuestions[currentIngredientQuestionIndex];
    const quizTitel = q.type === "ingredient" ? "Inhaltsstoff-Quiz" : "Wirkungs-Quiz";
    const frageText =
      q.type === "ingredient"
        ? `Welche Pflanzen haben den Inhaltsstoff „${q.label}“?`
        : `Welche Pflanzen wirken „${q.label}“?`;

    cardContainer.innerHTML = `
      <div class="card">
        <h2>${quizTitel}</h2>

        <div class="ingredient-progress-wrap">
          <div id="ingredientProgressLabel" class="ingredient-progress-label"></div>
          <progress
            id="ingredientProgress"
            class="ingredient-progress"
            value="0"
            max="100"
          ></progress>
        </div>

        <p>${frageText}</p>
        <div id="ingredientOptions"></div>
      </div>
    `;

    if (optionsContainer) optionsContainer.classList.add("hidden");
    if (checkBtn) checkBtn.classList.remove("hidden");
    if (nextBtn) {
      nextBtn.classList.remove("hidden");
      nextBtn.textContent = "Nächste Frage";
      nextBtn.disabled = true;
    }

    renderIngredientOptions(q);
    updateCardCounter();
    updateIngredientProgress();
  }

  function renderIngredientOptions(question) {
    const container = document.getElementById("ingredientOptions");
    if (!container) return;

    const correctSet = new Set(question.correctPlantIds);
    const allPlantIds = cards.map(c => c.id);
    const wrongCandidates = shuffleArray(allPlantIds.filter(id => !correctSet.has(id)));

    const numCorrect = question.correctPlantIds.length;
    let numWrong = Math.max(2, Math.round(numCorrect * 1.5));
    numWrong = Math.min(numWrong, wrongCandidates.length);

    const wrongIds = wrongCandidates.slice(0, numWrong);
    const optionIds = shuffleArray([...question.correctPlantIds, ...wrongIds]);

    container.innerHTML = "";

    optionIds.forEach(pid => {
      const card = cards.find(c => c.id === pid);
      const label = card ? card.germanName : pid;
      const isCorrect = correctSet.has(pid);
      const idAttr = `opt-${pid}-${Math.random().toString(36).slice(2, 8)}`;

      const wrapper = document.createElement("div");
      wrapper.className = "ingredient-option";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = idAttr;
      checkbox.dataset.plantId = pid;
      checkbox.dataset.correct = isCorrect ? "true" : "false";

      const labelEl = document.createElement("label");
      labelEl.setAttribute("for", idAttr);
      labelEl.textContent = label;

      wrapper.appendChild(checkbox);
      wrapper.appendChild(labelEl);
      container.appendChild(wrapper);
    });
  }

  function checkIngredientQuestion() {
    if (!ingredientQuestions.length) return;

    const q = ingredientQuestions[currentIngredientQuestionIndex];
    const correctSet = new Set(q.correctPlantIds);
    const wrappers = Array.from(document.querySelectorAll("#ingredientOptions .ingredient-option"));

    let allCorrect = true;

    wrappers.forEach(wrapper => {
      wrapper.classList.remove("correct", "incorrect");

      const cb = wrapper.querySelector('input[type="checkbox"]');
      if (!cb) return;

      const pid = cb.dataset.plantId;
      const isCorrectPlant = correctSet.has(pid);
      const isChecked = cb.checked;

      if (isChecked && isCorrectPlant) {
        wrapper.classList.add("correct");
      } else if (isChecked && !isCorrectPlant) {
        wrapper.classList.add("incorrect");
        allCorrect = false;
      } else if (!isChecked && isCorrectPlant) {
        allCorrect = false;
      }
    });

    if (allCorrect) {
      feedback.textContent = "Richtig! Alle passenden Pflanzen ausgewählt.";
      feedback.className = "feedback-ok";
      nextBtn.disabled = false;
    } else {
      feedback.textContent = "Noch nicht ganz richtig. Überprüfe deine Auswahl.";
      feedback.className = "feedback-error";
      nextBtn.disabled = true;
    }
  }

  function nextIngredientQuestion() {
    if (!ingredientQuestions.length) return;

    if (currentIngredientQuestionIndex >= ingredientQuestions.length - 1) {
      cardContainer.innerHTML = `
        <div class="card">
          <h2>Glückwunsch!</h2>
          <p><strong>Du hast alle Inhaltsstoff-/Wirkungsfragen durchgearbeitet.</strong></p>
          <p>Du kannst das Quiz jederzeit neu starten.</p>
        </div>
      `;
      cardCounter.textContent = "";
      clearFeedback();
      nextBtn.disabled = true;
      return;
    }

    currentIngredientQuestionIndex += 1;
    renderIngredientQuestion();
  }


  // ===================
  // Suche / Eigenes Lernen
  // ===================

  function runCustomSearch() {
    const termRaw = customSearchInput.value.trim();
    if (!termRaw) {
      customSearchResults.innerHTML = "<p>Bitte ein Suchwort eingeben.</p>";
      return;
    }

    const term = termRaw.toLowerCase();
    const matches = new Map();

    cards.forEach(card => {
      const fields = [
        card.germanName || "",
        ...(card.drogenParts || []),
        card.stammpflanze1 || "",
        ...(card.familieParts || []),
        ...(card.inhaltsstoffe || []),
        ...(card.wirkung || []),
        ...(card.anwendung || []),
        ...(card.warnhinweise || [])
      ];

      if (
        fields.some(txt =>
          (txt || "").trim().toLowerCase().includes(term)
        )
      ) {
        matches.set(card.germanName || card.id, card.id);
      }
    });

    const arr = Array.from(matches.entries()).sort((a, b) =>
      a[0].localeCompare(b[0], "de")
    );

    if (!arr.length) {
      customSearchResults.innerHTML = `<p>Keine Treffer für „${termRaw}“ gefunden.</p>`;
      return;
    }

    customSearchResults.innerHTML = `
      <p>Treffer (${arr.length}):</p>
      <ul class="custom-results-list">
        ${arr
          .map(
            ([displayName, id]) => `
              <li>
                <button class="custom-result-btn" data-card-id="${id}">
                  ${displayName}
                </button>
              </li>
            `
          )
          .join("")}
      </ul>
    `;

    customSearchResults.querySelectorAll(".custom-result-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        openSingleCardQuizFromSearch(btn.dataset.cardId);
      });
    });
  }

  function openSingleCardQuizFromSearch(cardId) {
    fromSearchMode = true;
    searchCardId = cardId;
    currentMode = "cards";
    currentLevel = "mittel";

    showApp();
    showQuizLayout();

    if (levelSelect) levelSelect.value = "mittel";
    if (backToSearchBtn) backToSearchBtn.classList.remove("hidden");
    if (nextBtn) nextBtn.classList.add("hidden");
    if (checkBtn) checkBtn.classList.remove("hidden");
    if (optionsContainer) optionsContainer.classList.remove("hidden");

    const levelCards = getLevelCards(currentLevel);
    const idx = levelCards.findIndex(c => c.id === cardId);

    if (idx < 0) {
      cardContainer.innerHTML = "<p>Diese Karte wurde nicht gefunden.</p>";
      return;
    }

    shuffledIndices = [idx];
    currentIndex = 0;
    renderCurrentCard();
  }


  // ===================
  // Moduswechsel
  // ===================

  function startMode(mode) {
    showApp();
    clearFeedback();

    fromSearchMode = false;
    searchCardId = null;
    currentMode = "cards";

    if (backToSearchBtn) backToSearchBtn.classList.add("hidden");

    if (mode === "custom") {
      showCustomLayout();
      if (customSearchResults) customSearchResults.innerHTML = "";
      if (customSearchInput) customSearchInput.value = "";
      return;
    }

    if (mode === "ingredient") {
      currentMode = "ingredient";
      showIngredientLayout();

      buildIngredientQuestionPool();
      renderIngredientQuestion();
      return;
    }

    showQuizLayout();

    if (nextBtn) {
      nextBtn.classList.remove("hidden");
      nextBtn.textContent = "Nächste Karte";
      nextBtn.disabled = true;
    }

    currentLevel = ["einfach", "mittel", "schwer"].includes(mode) ? mode : "einfach";
    if (levelSelect) levelSelect.value = currentLevel;

    initLevel();
  }


  // ===================
  // Event-Listener
  // ===================

  if (levelSelect) {
    levelSelect.addEventListener("change", () => {
      fromSearchMode = false;
      searchCardId = null;
      currentMode = "cards";

      if (backToSearchBtn) backToSearchBtn.classList.add("hidden");
      if (nextBtn) {
        nextBtn.classList.remove("hidden");
        nextBtn.textContent = "Nächste Karte";
        nextBtn.disabled = true;
      }

      showQuizLayout();
      currentLevel = levelSelect.value;
      initLevel();
    });
  }

  if (checkBtn) {
    checkBtn.addEventListener("click", checkAnswers);
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", nextCard);
  }

  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      clearFeedback();

      if (currentMode === "ingredient") {
        buildIngredientQuestionPool();
        renderIngredientQuestion();
        return;
      }

      if (fromSearchMode && searchCardId) {
        openSingleCardQuizFromSearch(searchCardId);
        return;
      }

      initLevel();
    });
  }

  if (backToLandingBtn) {
    backToLandingBtn.addEventListener("click", () => {
      resetToLandingState();
      showLanding();
    });
  }

  if (backToSearchBtn) {
    backToSearchBtn.addEventListener("click", () => {
      showCustomLayout();
      clearFeedback();
      if (backToSearchBtn) backToSearchBtn.classList.add("hidden");
    });
  }

  if (customSearchBtn) {
    customSearchBtn.addEventListener("click", runCustomSearch);
  }

  if (customSearchInput) {
    customSearchInput.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        runCustomSearch();
      }
    });
  }

  if (customBackBtn) {
    customBackBtn.addEventListener("click", () => {
      resetToLandingState();
      showLanding();
    });
  }

  showLanding();
});