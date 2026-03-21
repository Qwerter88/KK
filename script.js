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
      "Lamiaceengerbstoffe",
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
// Karten + LocalStorage
// ===================

function loadCardsFromLocal() {
  const raw = localStorage.getItem("customCards_v1");
  if (!raw) return [];
  try {
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return [];
    return arr;
  } catch {
    return [];
  }
}

function saveCardsToLocal(allCards) {
  localStorage.setItem("customCards_v1", JSON.stringify(allCards));
}

let cards = (() => {
  const local = loadCardsFromLocal();
  if (!local.length) return baseCards.slice();
  const map = new Map(baseCards.map(c => [c.id, c]));
  local.forEach(c => map.set(c.id, c));
  return Array.from(map.values());
})();

// ===================
// Gemeinsame Variablen
// ===================

let currentLevel = "einfach";
let currentIndex = 0;
let shuffledIndices = [];

let fromSearchMode = false;
let searchCardId = null;

// Utility: Array mischen
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

// ===================
// Initialisierung (index.html)
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

  const quizMain = document.getElementById("quizMain");
  const customMain = document.getElementById("customMain");
  const appTitle = document.getElementById("appTitle");
  const quizTopBar = document.getElementById("quizTopBar");
  const customSearchInput = document.getElementById("customSearchInput");
  const customSearchBtn = document.getElementById("customSearchBtn");
  const customSearchResults = document.getElementById("customSearchResults");
  const customBackBtn = document.getElementById("customBackBtn");

  // Lehrerzugang
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

  // auf edit.html gibt es landing/app nicht
  if (!landing && !app) return;

  // Landing-Buttons mit Modus verknüpfen
  modeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;
      startMode(mode);
    });
  });

  function clearFeedback() {
    if (!feedback) return;
    feedback.textContent = "";
    feedback.className = "";
  }

  function getCurrentCard() {
    const levelCards = getLevelCards(currentLevel);
    if (levelCards.length === 0) return null;
    return levelCards[shuffledIndices[currentIndex]];
  }

  function updateCounter() {
    if (!cardCounter) return;
    const levelCards = getLevelCards(currentLevel);
    if (levelCards.length === 0) {
      cardCounter.textContent = "";
      return;
    }
    cardCounter.textContent = `Karte ${currentIndex + 1} von ${levelCards.length}`;
  }

  function initLevel() {
    const levelCards = getLevelCards(currentLevel);
    shuffledIndices = shuffleArray(levelCards.map((_, i) => i));
    currentIndex = 0;
    renderCurrentCard();
  }

  function buildCardHTML(card, level) {
    const isFree = level === "schwer";

    function makeDrogenBlock() {
      let html = `<div class="cell">
        <h3>Drogenbezeichnung</h3>
        <div class="field">`;

      if (isFree) {
        html += `<input class="input-field" type="text" data-key="drogen_full" placeholder="z.B. Thymian – Thymi herba">`;
      } else {
        html += `
          <div class="dropzone" data-key="drogen_part_0" data-group="drogen"></div>
          <span> – </span>
          <div class="dropzone" data-key="drogen_part_1" data-group="drogen"></div>
          <span> </span>
          <div class="dropzone" data-key="drogen_part_2" data-group="drogen"></div>
        `;
      }

      html += `</div></div>`;
      return html;
    }

    function makeStammpflanzeBlock() {
      let html = `<div class="cell">
        <h3>Stammpflanze und Familie</h3>
        <div class="field">${card.stammpflanze1 || ""}</div>`;

      if (isFree) {
        html += `
          <input class="input-field" type="text" data-key="familie_full" placeholder="z.B. Lippenblütler - Lamiaceae">
        `;
      } else {
        html += `
          <div class="field">
            <div class="dropzone" data-key="familie_part_0" data-group="familie"></div>
            <span> - </span>
            <div class="dropzone" data-key="familie_part_1" data-group="familie"></div>
          </div>
        `;
      }

      html += `</div>`;
      return html;
    }

    function makeBlock(title, key) {
      let values = [];
      if (key === "inhaltsstoffe") values = card.inhaltsstoffe || [];
      if (key === "wirkung") values = card.wirkung || [];
      if (key === "anwendung") values = card.anwendung || [];
      if (key === "warnhinweise") values = card.warnhinweise || [];

      const cleaned = values.map(v => (v || "").trim()).filter(Boolean);

      let html = `<div class="cell">
        <h3>${title}</h3>`;

      if (isFree) {
        cleaned.forEach((_, index) => {
          const dataKey = `${key}_${index}`;
          html += `<input class="input-field" type="text" data-key="${dataKey}" placeholder="Antwort eingeben...">`;
        });
      } else {
        cleaned.forEach((_, index) => {
          const dataKey = `${key}_${index}`;
          html += `<div class="dropzone" data-key="${dataKey}" data-group="${key}"></div>`;
        });
      }

      html += `</div>`;
      return html;
    }

    const html = `
      <div class="card">
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
          ${makeBlock("Warnhinweise, Zusatzinformation", "warnhinweise")}
        </div>
      </div>
    `;
    return html;
  }

  function renderCurrentCard() {
    clearFeedback();
    if (nextBtn) nextBtn.disabled = true;

    const optionsList = document.getElementById("optionsList");
    if (optionsList) optionsList.innerHTML = "";

    const card = getCurrentCard();
    if (!card) {
      cardContainer.innerHTML = "<p>Keine Karten für diese Stufe vorhanden.</p>";
      if (optionsContainer) optionsContainer.classList.add("hidden");
      return;
    }

    cardContainer.innerHTML = buildCardHTML(card, currentLevel);
    updateCounter();

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

  function setBodyLevelClass() {
    document.body.classList.remove("level-einfach", "level-mittel", "level-schwer");
    document.body.classList.add("level-" + currentLevel);
  }

  function showQuizLayout() {
    if (quizMain) quizMain.classList.remove("hidden");
    if (customMain) customMain.classList.add("hidden");
    if (quizTopBar) quizTopBar.classList.remove("hidden");
    if (appTitle) appTitle.textContent = "Pflanzen-Lernkarten – Kartenset";
  }

  function showCustomLayout() {
    if (quizMain) quizMain.classList.add("hidden");
    if (customMain) customMain.classList.remove("hidden");
    if (quizTopBar) quizTopBar.classList.add("hidden");
    if (appTitle) appTitle.textContent = "Eigenes Lernen – Suchfunktion";
  }

  function startMode(mode) {
    fromSearchMode = false;
    searchCardId = null;

    if (landing) landing.classList.add("hidden");
    if (app) app.classList.remove("hidden");
    window.scrollTo(0, 0);

    if (mode === "custom") {
      showCustomLayout();
      if (backToSearchBtn) backToSearchBtn.classList.add("hidden");
      if (nextBtn) nextBtn.classList.remove("hidden");
      return;
    }

    showQuizLayout();
    if (backToSearchBtn) backToSearchBtn.classList.add("hidden");
    if (nextBtn) {
      nextBtn.classList.remove("hidden");
      nextBtn.disabled = true;
    }

    if (!levelSelect || !cardContainer) return;

    if (mode === "einfach" || mode === "mittel" || mode === "schwer") {
      levelSelect.value = mode;
      currentLevel = mode;
    } else {
      levelSelect.value = "einfach";
      currentLevel = "einfach";
    }

    setBodyLevelClass();
    initLevel();
  }

  window.startMode = startMode;

  function checkAnswers() {
    const card = getCurrentCard();
    if (!card) return;
    clearFeedback();

    let allCorrect = true;

    if (currentLevel === "schwer") {
      const inputs = Array.from(document.querySelectorAll(".input-field"));

      const expectedGroups = {
        drogen_full: [`${card.drogenParts[0]} – ${card.drogenParts[1]} ${card.drogenParts[2]}`],
        familie_full: [`${card.familieParts[0]} - ${card.familieParts[1]}`],
        inhaltsstoffe: (card.inhaltsstoffe || []).filter(Boolean),
        wirkung: (card.wirkung || []).filter(Boolean),
        anwendung: (card.anwendung || []).filter(Boolean),
        warnhinweise: (card.warnhinweise || []).filter(Boolean)
      };

      inputs.forEach(input => {
        const key = input.dataset.key || "";
        const group =
          key.includes("drogen") ? "drogen_full" :
          key.includes("familie") ? "familie_full" :
          key.split("_")[0];

        const expectedArr = (expectedGroups[group] || []).map(t => t.trim().toLowerCase());
        const given = (input.value || "").trim().toLowerCase();

        if (expectedArr.includes(given) && given !== "") {
          input.classList.remove("incorrect");
          input.classList.add("correct");
        } else {
          input.classList.remove("correct");
          input.classList.add("incorrect");
          allCorrect = false;
        }
      });

      if (feedback) {
        if (allCorrect) {
          feedback.textContent = "Richtig! Gut gemacht.";
          feedback.className = "feedback-ok";
        } else {
          feedback.textContent = "Einige Angaben sind noch nicht korrekt.";
          feedback.className = "feedback-error";
        }
      }
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

      const givenGroups = {
        drogen: [],
        familie: [],
        inhaltsstoffe: [],
        wirkung: [],
        anwendung: [],
        warnhinweise: []
      };

      dropzones.forEach(zone => {
        const group = zone.dataset.group;
        const item = zone.querySelector(".option-item");
        if (group && item) {
          const text = (item.textContent || "").trim().toLowerCase();
          if (text) givenGroups[group].push(text);
        }
      });

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

      Object.keys(expectedGroups).forEach(group => {
        const expected = expectedGroups[group];
        const given = givenGroups[group];
        if (given.length !== expected.length) {
          allCorrect = false;
        } else {
          expected.forEach(val => {
            if (!given.includes(val)) {
              allCorrect = false;
            }
          });
        }
      });

      if (feedback) {
        if (allCorrect) {
          feedback.textContent = "Richtig! Alle Felder korrekt zugeordnet.";
          feedback.className = "feedback-ok";
        } else {
          feedback.textContent = "Einige Zuordnungen oder Mengen sind noch falsch.";
          feedback.className = "feedback-error";
        }
      }
    }

    if (nextBtn && !fromSearchMode) {
      nextBtn.disabled = !allCorrect;
    }
  }

  function showSuccessScreen() {
    const levelCards = getLevelCards(currentLevel);
    const total = levelCards.length;
    let message = "";
    let hint = "";

    if (currentLevel === "einfach") {
      message = "Super, du hast alle Karten auf Stufe EINFACH geschafft!";
      hint = "Wenn du bereit bist, probiere jetzt die Stufe MITTEL aus.";
    } else if (currentLevel === "mittel") {
      message = "Sehr gut, alle Karten auf Stufe MITTEL sind geschafft!";
      hint = "Stell dich jetzt der Stufe SCHWER – ohne Vorgaben.";
    } else {
      message = "Großartig, du hast alle Karten auf der SCHWEREN Stufe gemeistert!";
      hint = "Du beherrschst dieses Kartenset – Wiederholung zur Festigung ist jederzeit möglich.";
    }

    const levelLabel =
      currentLevel === "einfach" ? "Einfach" :
      currentLevel === "mittel" ? "Mittel" : "Schwer";

    const html = `
      <div class="card">
        <h2>Glückwunsch!</h2>
        <p><strong>${message}</strong></p>
        <p>${hint}</p>
        <p>Stufe: <strong>${levelLabel}</strong> – Karten insgesamt: ${total}</p>
        <button id="restartRunBtn">Noch einmal in zufälliger Reihenfolge starten</button>
      </div>
    `;
    if (cardContainer) cardContainer.innerHTML = html;
    if (feedback) {
      feedback.textContent = "";
      feedback.className = "";
    }
    if (cardCounter) cardCounter.textContent = "";

    const restartRunBtn = document.getElementById("restartRunBtn");
    if (restartRunBtn) {
      restartRunBtn.addEventListener("click", () => {
        const levelCards = getLevelCards(currentLevel);
        shuffledIndices = shuffleArray(levelCards.map((_, i) => i));
        currentIndex = 0;
        renderCurrentCard();
      });
    }
  }

  function nextCard() {
    if (fromSearchMode) return; // im Such-Single-Card-Modus keine nächste Karte

    const levelCards = getLevelCards(currentLevel);
    if (levelCards.length === 0) return;

    if (currentIndex >= levelCards.length - 1) {
      showSuccessScreen();
    } else {
      currentIndex += 1;
      renderCurrentCard();
    }
  }

  // Custom-Suche: exakt wortgleiche, case-insensitive Suche
  function runCustomSearch() {
    if (!customSearchInput || !customSearchResults) return;
    const termRaw = customSearchInput.value.trim();
    if (!termRaw) {
      customSearchResults.innerHTML = "<p>Bitte ein Suchwort eingeben.</p>";
      return;
    }
    const term = termRaw.toLowerCase();

    const matches = new Map();

    cards.forEach(card => {
      const fields = [];

      fields.push(card.germanName || "");
      (card.drogenParts || []).forEach(t => fields.push(t || ""));
      fields.push(card.stammpflanze1 || "");
      (card.familieParts || []).forEach(t => fields.push(t || ""));
      (card.inhaltsstoffe || []).forEach(t => fields.push(t || ""));
      (card.wirkung || []).forEach(t => fields.push(t || ""));
      (card.anwendung || []).forEach(t => fields.push(t || ""));
      (card.warnhinweise || []).forEach(t => fields.push(t || ""));

      const hasMatch = fields.some(txt => {
        const clean = (txt || "").trim().toLowerCase();
        return clean === term;
      });

      if (hasMatch) {
        const displayName = card.germanName || card.id;
        matches.set(displayName, card.id);
      }
    });

    const arr = Array.from(matches.entries()).sort((a, b) =>
      a[0].localeCompare(b[0], "de")
    );

    if (!arr.length) {
      customSearchResults.innerHTML = `<p>Keine Treffer für „${termRaw}“ gefunden.</p>`;
      return;
    }

    const items = arr.map(([displayName, id]) =>
      `<li><button class="custom-result-btn" data-card-id="${id}">${displayName}</button></li>`
    ).join("");

    customSearchResults.innerHTML = `
      <p>Treffer (${arr.length}):</p>
      <ul class="custom-results-list">
        ${items}
      </ul>
    `;

    customSearchResults.querySelectorAll(".custom-result-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const cardId = btn.dataset.cardId;
        openSingleCardQuizFromSearch(cardId);
      });
    });
  }

  function openSingleCardQuizFromSearch(cardId) {
    fromSearchMode = true;
    searchCardId = cardId;
    currentLevel = "mittel";
    if (levelSelect) levelSelect.value = "mittel";

    if (landing) landing.classList.add("hidden");
    if (app) app.classList.remove("hidden");

    if (quizMain) quizMain.classList.remove("hidden");
    if (customMain) customMain.classList.add("hidden");
    if (quizTopBar) quizTopBar.classList.remove("hidden");
    if (appTitle) appTitle.textContent = "Lernkarte – " + cardId;

    if (backToSearchBtn) backToSearchBtn.classList.remove("hidden");
    if (nextBtn) {
      nextBtn.classList.add("hidden");
      nextBtn.disabled = true;
    }

    setBodyLevelClass();

    const levelCards = getLevelCards(currentLevel);
    let idx = levelCards.findIndex(c => c.id === cardId);
    if (idx === -1) {
      idx = 0;
    }

    shuffledIndices = [idx];
    currentIndex = 0;
    renderCurrentCard();
  }

  window.openSingleCardQuizFromSearch = openSingleCardQuizFromSearch;

  if (levelSelect) {
    levelSelect.addEventListener("change", () => {
      fromSearchMode = false;
      searchCardId = null;
      if (backToSearchBtn) backToSearchBtn.classList.add("hidden");
      if (nextBtn) {
        nextBtn.classList.remove("hidden");
        nextBtn.disabled = true;
      }
      currentLevel = levelSelect.value;
      setBodyLevelClass();
      initLevel();
    });
  }

  if (checkBtn) checkBtn.addEventListener("click", checkAnswers);
  if (nextBtn) {
    nextBtn.addEventListener("click", nextCard);
    nextBtn.disabled = true;
  }

  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      if (fromSearchMode && searchCardId) {
        openSingleCardQuizFromSearch(searchCardId);
      } else {
        initLevel();
      }
    });
  }

  if (backToLandingBtn) {
    backToLandingBtn.addEventListener("click", () => {
      fromSearchMode = false;
      searchCardId = null;
      if (app) app.classList.add("hidden");
      if (landing) landing.classList.remove("hidden");
      window.scrollTo(0, 0);
    });
  }

  if (customSearchBtn) customSearchBtn.addEventListener("click", runCustomSearch);
  if (customSearchInput) {
    customSearchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        runCustomSearch();
      }
    });
  }
  if (customBackBtn) {
    customBackBtn.addEventListener("click", () => {
      fromSearchMode = false;
      searchCardId = null;
      if (app) app.classList.add("hidden");
      if (landing) landing.classList.remove("hidden");
      window.scrollTo(0, 0);
    });
  }

  if (backToSearchBtn) {
    backToSearchBtn.addEventListener("click", () => {
      fromSearchMode = false;
      searchCardId = null;

      if (quizMain) quizMain.classList.add("hidden");
      if (customMain) customMain.classList.remove("hidden");
      if (quizTopBar) quizTopBar.classList.add("hidden");
      if (appTitle) appTitle.textContent = "Eigenes Lernen – Suchfunktion";

      if (backToSearchBtn) backToSearchBtn.classList.add("hidden");
      if (nextBtn) {
        nextBtn.classList.remove("hidden");
        nextBtn.disabled = true;
      }
      clearFeedback();
    });
  }
});

// =============== Drag & Drop + Touch ===============

function setupDragDrop(card, level) {
  const dropzones = Array.from(document.querySelectorAll(".dropzone"));
  const optionsList = document.getElementById("optionsList");

  const isTouch =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;

  let options = [];

  (card.drogenParts || []).forEach(text => {
    const t = (text || "").trim();
    if (t) options.push({ text: t, group: "drogen", correct: true });
  });
  (card.familieParts || []).forEach(text => {
    const t = (text || "").trim();
    if (t) options.push({ text: t, group: "familie", correct: true });
  });

  function pushCorrect(arr, groupName) {
    (arr || []).forEach(text => {
      const t = (text || "").trim();
      if (t) options.push({ text: t, group: groupName, correct: true });
    });
  }
  pushCorrect(card.inhaltsstoffe, "inhaltsstoffe");
  pushCorrect(card.wirkung, "wirkung");
  pushCorrect(card.anwendung, "anwendung");
  pushCorrect(card.warnhinweise, "warnhinweise");

  if (level === "mittel") {
    const otherCards = cards.filter(c => c.id !== card.id);

    function collectOther(extractor) {
      const all = [];
      otherCards.forEach(c => {
        const arr = extractor(c) || [];
        arr.forEach(txt => {
          const t = (txt || "").trim();
          if (t) all.push(t);
        });
      });
      return all;
    }

    const otherByGroup = {
      drogen: collectOther(c => c.drogenParts),
      familie: collectOther(c => c.familieParts),
      inhaltsstoffe: collectOther(c => c.inhaltsstoffe),
      wirkung: collectOther(c => c.wirkung),
      anwendung: collectOther(c => c.anwendung),
      warnhinweise: collectOther(c => c.warnhinweise)
    };

    function addDistractorsFor(groupName, correctArrayRaw) {
      const correctArray = (correctArrayRaw || []).map(t => (t || "").trim()).filter(Boolean);
      const pool = shuffleArray(otherByGroup[groupName] || []);
      const correctLower = correctArray.map(t => t.toLowerCase());

      const needed = Math.floor(correctArray.length / 2);

      let count = 0;
      for (let i = 0; i < pool.length && count < needed; i++) {
        const txt = pool[i];
        if (!correctLower.includes(txt.toLowerCase())) {
          options.push({ text: txt, group: groupName, correct: false });
          count++;
        }
      }
    }

    addDistractorsFor("drogen", card.drogenParts);
    addDistractorsFor("familie", card.familieParts);
    addDistractorsFor("inhaltsstoffe", card.inhaltsstoffe);
    addDistractorsFor("wirkung", card.wirkung);
    addDistractorsFor("anwendung", card.anwendung);
    addDistractorsFor("warnhinweise", card.warnhinweise);
  }

  const shuffledOptions = shuffleArray(options);

  function createOptionElementDesktop(opt) {
    const el = document.createElement("div");
    el.className = "option-item";
    el.textContent = opt.text;
    el.draggable = true;
    el.dataset.group = opt.group || "";
    addDragHandlers(el);
    return el;
  }

  function addDragHandlers(elem) {
    elem.addEventListener("dragstart", (e) => {
      elem.classList.add("dragging");
      e.dataTransfer.setData("text/plain", JSON.stringify({
        text: elem.textContent,
        group: elem.dataset.group || ""
      }));
    });
    elem.addEventListener("dragend", () => {
      elem.classList.remove("dragging");
    });
  }

  let selectedOption = null;

  function createOptionElementTouch(opt) {
    const el = document.createElement("div");
    el.className = "option-item";
    el.textContent = opt.text;
    el.dataset.group = opt.group || "";
    el.addEventListener("click", () => {
      if (selectedOption === el) {
        el.classList.remove("selected");
        selectedOption = null;
      } else {
        if (selectedOption) selectedOption.classList.remove("selected");
        selectedOption = el;
        el.classList.add("selected");
      }
    });
    return el;
  }

  function setupDropzonesTouch() {
    dropzones.forEach(zone => {
      zone.addEventListener("click", () => {
        const existing = zone.querySelector(".option-item");
        if (!selectedOption && existing) {
          optionsList.appendChild(existing);
          zone.innerHTML = "";
          zone.classList.remove("correct", "incorrect");
          delete zone.dataset.chosenGroup;
          return;
        }

        if (selectedOption && !existing) {
          zone.innerHTML = "";
          zone.appendChild(selectedOption);
          zone.dataset.chosenGroup = selectedOption.dataset.group || "";
          selectedOption.classList.remove("selected");
          selectedOption = null;
        }
      });
    });
  }

  if (isTouch) {
    shuffledOptions.forEach(opt => {
      optionsList.appendChild(createOptionElementTouch(opt));
    });
    setupDropzonesTouch();
  } else {
    shuffledOptions.forEach(opt => {
      optionsList.appendChild(createOptionElementDesktop(opt));
    });

    dropzones.forEach(zone => {
      zone.addEventListener("dragover", (e) => {
        e.preventDefault();
        zone.classList.add("over");
      });
      zone.addEventListener("dragleave", () => {
        zone.classList.remove("over");
      });
      zone.addEventListener("drop", (e) => {
        e.preventDefault();
        zone.classList.remove("over");

        const dragging = document.querySelector(".option-item.dragging");
        if (!dragging) return;

        const existing = zone.querySelector(".option-item");
        if (existing && existing !== dragging) {
          optionsList.appendChild(existing);
        }

        zone.innerHTML = "";
        zone.appendChild(dragging);
        dragging.classList.remove("dragging");

        zone.dataset.chosenGroup = dragging.dataset.group || "";
      });
    });

    optionsList.addEventListener("dragover", (e) => {
      e.preventDefault();
      optionsList.classList.add("over");
    });
    optionsList.addEventListener("dragleave", () => {
      optionsList.classList.remove("over");
    });
    optionsList.addEventListener("drop", (e) => {
      e.preventDefault();
      optionsList.classList.remove("over");

      const dragging = document.querySelector(".option-item.dragging");
      if (!dragging) return;

      const parent = dragging.parentElement;
      if (parent && parent.classList.contains("dropzone")) {
        parent.innerHTML = "";
        parent.classList.remove("correct", "incorrect");
        delete parent.dataset.chosenGroup;
      }

      optionsList.appendChild(dragging);
      dragging.classList.remove("dragging");
    });
  }
}

// ======================
// Edit-Funktionen (edit.html)
// ======================

function clearEditForm() {
  const form = document.getElementById("editForm");
  if (!form) return;
  form.reset();
  ["inhaltsstoffe", "wirkung", "anwendung", "warnhinweise"].forEach(cls => {
    document.querySelectorAll(`input.multi.${cls}`).forEach(inp => inp.value = "");
  });
}

function initEditPage() {
  const form = document.getElementById("editForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const id = (document.getElementById("cardId").value || "").trim() || "neue_pflanze";
    const germanName = (document.getElementById("germanName").value || "").trim();

    const drogen1 = (document.getElementById("drogen1").value || "").trim();
    const drogen2 = (document.getElementById("drogen2").value || "").trim();
    const drogen3 = (document.getElementById("drogen3").value || "").trim();
    const drogenParts = [drogen1, drogen2, drogen3].filter(Boolean);

    const stammpflanze1 = (document.getElementById("stammpflanze1").value || "").trim();
    const familie1 = (document.getElementById("familie1").value || "").trim();
    const familie2 = (document.getElementById("familie2").value || "").trim();
    const familieParts = [familie1, familie2].filter(Boolean);

    function collectMulti(cls) {
      return Array.from(document.querySelectorAll(`input.multi.${cls}`))
        .map(i => (i.value || "").trim())
        .filter(Boolean);
    }

    const inhaltsstoffe = collectMulti("inhaltsstoffe");
    const wirkung = collectMulti("wirkung");
    const anwendung = collectMulti("anwendung");
    const warnhinweise = collectMulti("warnhinweise");

    const levels = [];
    if (document.getElementById("levelEinfach").checked) levels.push("einfach");
    if (document.getElementById("levelMittel").checked) levels.push("mittel");
    if (document.getElementById("levelSchwer").checked) levels.push("schwer");

    const newCard = {
      id,
      germanName,
      levels,
      drogenParts,
      stammpflanze1,
      familieParts,
      inhaltsstoffe,
      wirkung,
      anwendung,
      warnhinweise
    };

    const existingIndex = cards.findIndex(c => c.id === id);
    if (existingIndex >= 0) {
      cards[existingIndex] = newCard;
    } else {
      cards.push(newCard);
    }

    saveCardsToLocal(cards);
    alert("Karteikarte gespeichert.");
  });
}

function populateExistingCards() {
  const container = document.getElementById("cardsList");
  if (!container) return;
  container.innerHTML = "";

  cards.forEach(card => {
    const div = document.createElement("div");
    div.className = "cards-list-item";
    div.textContent = `${card.germanName} (${card.id})`;
    div.addEventListener("click", () => {
      loadCardIntoForm(card);
    });
    container.appendChild(div);
  });
}

function loadCardIntoForm(card) {
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || "";
  };

  setVal("cardId", card.id);
  setVal("germanName", card.germanName);
  setVal("drogen1", (card.drogenParts || [])[0] || "");
  setVal("drogen2", (card.drogenParts || [])[1] || "");
  setVal("drogen3", (card.drogenParts || [])[2] || "");
  setVal("stammpflanze1", card.stammpflanze1 || "");
  setVal("familie1", (card.familieParts || [])[0] || "");
  setVal("familie2", (card.familieParts || [])[1] || "");

  function fillMulti(cls, arr) {
    const inputs = Array.from(document.querySelectorAll(`input.multi.${cls}`));
    inputs.forEach((inp, idx) => {
      inp.value = arr[idx] || "";
    });
  }

  fillMulti("inhaltsstoffe", card.inhaltsstoffe || []);
  fillMulti("wirkung", card.wirkung || []);
  fillMulti("anwendung", card.anwendung || []);
  fillMulti("warnhinweise", card.warnhinweise || []);

  const levels = card.levels || [];
  document.getElementById("levelEinfach").checked = levels.includes("einfach");
  document.getElementById("levelMittel").checked = levels.includes("mittel");
  document.getElementById("levelSchwer").checked = levels.includes("schwer");
}

window.initEditPage = initEditPage;
window.populateExistingCards = populateExistingCards;
window.clearEditForm = clearEditForm;