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
// Karten-Array (ohne dauerhafte Lehrer-Speicherung)
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
// Stilles Prüfen für einfachen Modus (Drag & Drop)
// ===================

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

  const quizMain = document.getElementById("quizMain");
  const customMain = document.getElementById("customMain");
  const appTitle = document.getElementById("appTitle");
  const quizTopBar = document.getElementById("quizTopBar");
  const customSearchInput = document.getElementById("customSearchInput");
  const customSearchBtn = document.getElementById("customSearchBtn");
  const customSearchResults = document.getElementById("customSearchResults");
  const customBackBtn = document.getElementById("customBackBtn");

  // Lehrerlogin wie bisher
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

  if (!landing && !app) return;

modeButtons.forEach(btn => {
  let touchHandled = false;

  const startSelectedMode = (e) => {
    if (e) {
      e.preventDefault();
    }

    const mode = (btn.dataset.mode || "").trim().toLowerCase();

    if (mode === "ingredient") {
      startMode("ingredient");
      return;
    }

    if (mode === "custom") {
      startMode("custom");
      return;
    }

    if (mode === "mittel") {
      startMode("mittel");
      return;
    }

    if (mode === "schwer") {
      startMode("schwer");
      return;
    }

    startMode("einfach");
  };

  btn.addEventListener("touchend", (e) => {
    touchHandled = true;
    startSelectedMode(e);

    window.setTimeout(() => {
      touchHandled = false;
    }, 400);
  }, { passive: false });

  btn.addEventListener("click", (e) => {
    if (touchHandled) return;
    startSelectedMode(e);
  });
});

  function clearFeedback() {
    if (!feedback) return;
    feedback.textContent = "";
    feedback.className = "";
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
      let html = `<div class="cell"><h3>Drogenbezeichnung</h3><div class="field">`;
      if (isFree) {
        html += `<input class="input-field" type="text" data-key="drogen_full" placeholder="z.B. Thymian – Thymi herba">`;
      } else {
        html += `
          <div class="dropzone" data-key="drogen_part_0" data-group="drogen"></div>
          <span> – </span>
          <div class="dropzone" data-key="drogen_part_1" data-group="drogen"></div>
          <span> </span>
          <div class="dropzone" data-key="drogen_part_2" data-group="drogen"></div>`;
      }
      html += `</div></div>`;
      return html;
    }

    function makeStammpflanzeBlock() {
      let html = `<div class="cell"><h3>Stammpflanze und Familie</h3><div class="field">${card.stammpflanze1 || ""}</div>`;
      if (isFree) {
        html += `<input class="input-field" type="text" data-key="familie_full" placeholder="z.B. Lippenblütler - Lamiaceae">`;
      } else {
        html += `<div class="field">
          <div class="dropzone" data-key="familie_part_0" data-group="familie"></div>
          <span> - </span>
          <div class="dropzone" data-key="familie_part_1" data-group="familie"></div>
        </div>`;
      }
      html += `</div>`;
      return html;
    }

    function makeBlock(title, key) {
      const values = (card[key] || []).map(v => (v || "").trim()).filter(Boolean);
      let html = `<div class="cell"><h3>${title}</h3>`;
      if (isFree) {
        values.forEach((_, index) => {
          html += `<input class="input-field" type="text" data-key="${key}_${index}" placeholder="Antwort eingeben...">`;
        });
      } else {
        values.forEach((_, index) => {
          html += `<div class="dropzone" data-key="${key}_${index}" data-group="${key}"></div>`;
        });
      }
      html += `</div>`;
      return html;
    }

    return `
      <div class="card">
        <div class="row">${makeDrogenBlock()}${makeStammpflanzeBlock()}</div>
        <div class="row">${makeBlock("Inhaltsstoffe", "inhaltsstoffe")}${makeBlock("Wirkung", "wirkung")}</div>
        <div class="row">${makeBlock("Anwendung", "anwendung")}${makeBlock("Warnhinweise, Zusatzinformation", "warnhinweise")}</div>
      </div>`;
  }

  function renderCurrentCard() {
    clearFeedback();
    const optionsList = document.getElementById("optionsList");
    if (optionsList) optionsList.innerHTML = "";
    if (nextBtn) nextBtn.disabled = true;

    const card = getCurrentCard();
    if (!card) {
      cardContainer.innerHTML = "<p>Keine Karten für diese Stufe vorhanden.</p>";
      if (optionsContainer) optionsContainer.classList.add("hidden");
      return;
    }

    cardContainer.innerHTML = buildCardHTML(card, currentLevel);
    updateCounter();

    // Check-Button nur bei mittel / schwer anzeigen
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

  function setBodyLevelClass() {
    document.body.classList.remove("level-einfach", "level-mittel", "level-schwer", "mode-ingredient");
    if (currentLevel === "einfach" || currentLevel === "mittel" || currentLevel === "schwer") {
      document.body.classList.add("level-" + currentLevel);
    }
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

  function showIngredientLayout() {
    if (quizMain) quizMain.classList.remove("hidden");
    if (customMain) customMain.classList.add("hidden");
    if (quizTopBar) quizTopBar.classList.add("hidden");
    if (appTitle) appTitle.textContent = "Inhaltsstoff-Lernen – Multiple-Choice-Quiz";
  }

  // ===================
  // Inhaltsstoff-/Wirkungs-Quiz: Fragenpool erzeugen
  // ===================

  function buildIngredientQuestionPool() {
    const ingredientMap = new Map(); // key: normalisierter Inhaltsstoff → {label, plantIds}
    const effectMap = new Map(); // key: normalisierte Wirkung → {label, plantIds}

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
      if (val.plantIds.size >= 1) {
        questions.push({
          type: "ingredient",
          label: val.label,
          correctPlantIds: Array.from(val.plantIds)
        });
      }
    });

    effectMap.forEach(val => {
      if (val.plantIds.size >= 1) {
        questions.push({
          type: "effect",
          label: val.label,
          correctPlantIds: Array.from(val.plantIds)
        });
      }
    });

    ingredientQuestions = shuffleArray(questions);
    currentIngredientQuestionIndex = 0;
  }

  function renderIngredientQuestion() {
    clearFeedback();
    if (!ingredientQuestions.length) {
      cardContainer.innerHTML = "<p>Keine Inhaltsstoff-/Wirkungsdaten vorhanden.</p>";
      if (optionsContainer) optionsContainer.classList.add("hidden");
      if (cardCounter) cardCounter.textContent = "";
      if (checkBtn) checkBtn.classList.add("hidden");
      if (nextBtn) nextBtn.disabled = true;
      return;
    }

    const q = ingredientQuestions[currentIngredientQuestionIndex];

    // Frage formulieren
    const quizTitel = q.type === "ingredient"
      ? "Inhaltsstoff-Quiz"
      : "Wirkungs-Quiz";

    const frageText = q.type === "ingredient"
      ? `Welche Pflanzen haben den Inhaltsstoff „${q.label}“?`
      : `Welche Pflanzen wirken „${q.label}“?`;

    cardContainer.innerHTML = `
     <div class="card">
       <h2>${quizTitel}</h2>
       <p>${frageText}</p>
       <div id="ingredientOptions"></div>
     </div>
    `;

    if (cardCounter) {
      cardCounter.textContent = `Frage ${currentIngredientQuestionIndex + 1}`;
    }

    if (optionsContainer) optionsContainer.classList.add("hidden"); // rechte Bausteinspalte ausblenden
    if (checkBtn) checkBtn.classList.remove("hidden");
    if (nextBtn) {
      nextBtn.textContent = "Nächste Frage";
      nextBtn.disabled = true;
    }

    renderIngredientOptions(q);
  }

 function renderIngredientOptions(question) {
  const container = document.getElementById("ingredientOptions");
  if (!container) return;

  const correctSet = new Set(question.correctPlantIds);
  const allPlantIds = cards.map(c => c.id);
  const wrongCandidates = shuffleArray(allPlantIds.filter(id => !correctSet.has(id)));

  const numCorrect = question.correctPlantIds.length;
  let numWrong = Math.round(numCorrect * 0.5);
  if (numWrong < 1 && wrongCandidates.length > 0) numWrong = 1;
  if (numWrong > wrongCandidates.length) numWrong = wrongCandidates.length;

  const wrongIds = wrongCandidates.slice(0, numWrong);

  const optionIds = shuffleArray([...question.correctPlantIds, ...wrongIds]);

  container.innerHTML = "";
  optionIds.forEach(pid => {
    const card = cards.find(c => c.id === pid);
    const label = card ? (card.germanName || card.id) : pid;
    const isCorrect = correctSet.has(pid);

    const idAttr = `opt_${pid}_${Math.random().toString(36).slice(2, 8)}`;

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
  const checkboxes = wrappers.map(w => w.querySelector("input[type='checkbox']"));

  let allCorrect = true;

  wrappers.forEach((wrapper, idx) => {
    const cb = checkboxes[idx];
    if (!cb) return;
    const pid = cb.dataset.plantId;
    const isCorrectPlant = correctSet.has(pid);
    const isChecked = cb.checked;

    // alte Klassen entfernen
    wrapper.classList.remove("correct", "incorrect");

    if (isChecked && isCorrectPlant) {
      // richtig markiert → grün
      wrapper.classList.add("correct");
    } else if (isChecked && !isCorrectPlant) {
      // falsch markiert → rot
      wrapper.classList.add("incorrect");
      allCorrect = false;
    } else if (!isChecked && isCorrectPlant) {
      // richtige, aber nicht angeklickte Pflanze → Fehler, aber nicht rot
      allCorrect = false;
    }
  });

  if (feedback) {
    if (allCorrect) {
      feedback.textContent = "Richtig! Alle passenden Pflanzen ausgewählt.";
      feedback.className = "feedback-ok";
    } else {
      feedback.textContent = "Noch nicht ganz richtig. Überprüfe deine Auswahl.";
      feedback.className = "feedback-error";
    }
  }

  const nextBtn = document.getElementById("nextBtn");
  if (nextBtn) nextBtn.disabled = !allCorrect;
 }

  function nextIngredientQuestion() {
    if (!ingredientQuestions.length) return;
    if (currentIngredientQuestionIndex >= ingredientQuestions.length - 1) {
      cardContainer.innerHTML = `
        <div class="card">
          <h2>Glückwunsch!</h2>
          <p><strong>Du hast alle Inhaltsstoff-/Wirkungsfragen durchgearbeitet.</strong></p>
          <p>Du kannst das Quiz jederzeit neu starten.</p>
          <button id="restartIngredientBtn">Quiz neu starten</button>
        </div>
      `;
      if (feedback) {
        feedback.textContent = "";
        feedback.className = "";
      }
      if (cardCounter) cardCounter.textContent = "";

      const restartBtnLocal = document.getElementById("restartIngredientBtn");
      if (restartBtnLocal) {
        restartBtnLocal.addEventListener("click", () => {
          buildIngredientQuestionPool();
          renderIngredientQuestion();
        });
      }
      return;
    }

    currentIngredientQuestionIndex += 1;
    renderIngredientQuestion();
  }

  // ===================
  // Moduswechsel
  // ===================

  function startMode(mode) {
    fromSearchMode = false;
    searchCardId = null;

    if (landing) landing.classList.add("hidden");
    if (app) app.classList.remove("hidden");
    window.scrollTo(0, 0);

    if (mode === "custom") {
      showCustomLayout();
      if (backToSearchBtn) backToSearchBtn.classList.add("hidden");
      if (nextBtn) {
        nextBtn.textContent = "Nächste Karte";
        nextBtn.classList.remove("hidden");
        nextBtn.disabled = true;
      }
      return;
    }

    if (mode === "ingredient") {
      if (quizTopBar) quizTopBar.classList.add("hidden");
      showIngredientLayout();
      setBodyLevelClass();
      buildIngredientQuestionPool();
      if (backToSearchBtn) backToSearchBtn.classList.add("hidden");
      if (levelSelect) levelSelect.value = "einfach";
      if (nextBtn) {
        nextBtn.textContent = "Nächste Frage";
        nextBtn.disabled = true;
      }
      renderIngredientQuestion();
      window.currentMode = "ingredient";
      return;
    }

    // Klassische Karten-Quiz-Modi
    showQuizLayout();
    window.currentMode = "cards";

    if (backToSearchBtn) backToSearchBtn.classList.add("hidden");
    if (nextBtn) {
      nextBtn.textContent = "Nächste Karte";
      nextBtn.classList.remove("hidden");
      nextBtn.disabled = true;
    }

    if (!levelSelect || !cardContainer) return;

    if (["einfach", "mittel", "schwer"].includes(mode)) {
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

  // ===================
  // Klassisches Prüfen (Check-Button)
  // ===================

  function checkAnswers() {
    if (window.currentMode === "ingredient") {
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
        drogen_full: [`${card.drogenParts[0]} – ${card.drogenParts[1]} ${card.drogenParts[2]}`],
        familie_full: [`${card.familieParts[0]} - ${card.familieParts[1]}`],
        inhaltsstoffe: (card.inhaltsstoffe || []).filter(Boolean),
        wirkung: (card.wirkung || []).filter(Boolean),
        anwendung: (card.anwendung || []).filter(Boolean),
        warnhinweise: (card.warnhinweise || []).filter(Boolean)
      };

      inputs.forEach(input => {
        const key = input.dataset.key || "";
        const group = key.includes("drogen")
          ? "drogen_full"
          : key.includes("familie")
          ? "familie_full"
          : key.split("_")[0];

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
        feedback.textContent = allCorrect ? "Richtig! Gut gemacht." : "Einige Angaben sind noch nicht korrekt.";
        feedback.className = allCorrect ? "feedback-ok" : "feedback-error";
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

      const givenGroups = { drogen: [], familie: [], inhaltsstoffe: [], wirkung: [], anwendung: [], warnhinweise: [] };

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
          return;
        }
        expected.forEach(val => {
          if (!given.includes(val)) allCorrect = false;
        });
      });

      if (feedback) {
        feedback.textContent = allCorrect
          ? "Richtig! Alle Felder korrekt zugeordnet."
          : "Einige Zuordnungen oder Mengen sind noch falsch.";
        feedback.className = allCorrect ? "feedback-ok" : "feedback-error";
      }
    }

    if (nextBtn && !fromSearchMode && window.currentMode !== "ingredient") {
      nextBtn.disabled = !allCorrect;
    }
  }

  function showSuccessScreen() {
    const levelCards = getLevelCards(currentLevel);
    const total = levelCards.length;
    let message = "", hint = "";
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
    const levelLabel = currentLevel === "einfach" ? "Einfach" : currentLevel === "mittel" ? "Mittel" : "Schwer";
    cardContainer.innerHTML = `
      <div class="card">
        <h2>Glückwunsch!</h2>
        <p><strong>${message}</strong></p>
        <p>${hint}</p>
        <p>Stufe: <strong>${levelLabel}</strong> – Karten insgesamt: ${total}</p>
        <button id="restartRunBtn">Noch einmal in zufälliger Reihenfolge starten</button>
      </div>`;
    if (feedback) {
      feedback.textContent = "";
      feedback.className = "";
    }
    if (cardCounter) cardCounter.textContent = "";
    document.getElementById("restartRunBtn")?.addEventListener("click", () => {
      const lc = getLevelCards(currentLevel);
      shuffledIndices = shuffleArray(lc.map((_, i) => i));
      currentIndex = 0;
      renderCurrentCard();
    });
  }

  function nextCard() {
    if (window.currentMode === "ingredient") {
      nextIngredientQuestion();
      return;
    }

    if (fromSearchMode) return;
    const levelCards = getLevelCards(currentLevel);
    if (levelCards.length === 0) return;
    if (currentIndex >= levelCards.length - 1) {
      showSuccessScreen();
    } else {
      currentIndex += 1;
      renderCurrentCard();
    }
  }

  // ===================
  // Eigenes Lernen – Suchlogik (unverändert)
  // ===================

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
      if (fields.some(txt => (txt || "").trim().toLowerCase() === term)) {
        matches.set(card.germanName || card.id, card.id);
      }
    });

    const arr = Array.from(matches.entries()).sort((a, b) => a[0].localeCompare(b[0], "de"));

    if (!arr.length) {
      customSearchResults.innerHTML = `<p>Keine Treffer für „${termRaw}" gefunden.</p>`;
      return;
    }

    customSearchResults.innerHTML = `
      <p>Treffer (${arr.length}):</p>
      <ul class="custom-results-list">
        ${arr.map(([displayName, id]) =>
          `<li><button class="custom-result-btn" data-card-id="${id}">${displayName}</button></li>`
        ).join("")}
      </ul>`;

    customSearchResults.querySelectorAll(".custom-result-btn").forEach(btn => {
      btn.addEventListener("click", () => openSingleCardQuizFromSearch(btn.dataset.cardId));
    });
  }

  function openSingleCardQuizFromSearch(cardId) {
    fromSearchMode = true;
    searchCardId = cardId;
    currentLevel = "mittel";
    window.currentMode = "cards";
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
    if (idx === -1) idx = 0;
    shuffledIndices = [idx];
    currentIndex = 0;
    renderCurrentCard();
  }

  window.openSingleCardQuizFromSearch = openSingleCardQuizFromSearch;

  // ===================
  // Event-Listener
  // ===================

  if (levelSelect) {
    levelSelect.addEventListener("change", () => {
      fromSearchMode = false;
      searchCardId = null;
      window.currentMode = "cards";
      if (backToSearchBtn) backToSearchBtn.classList.add("hidden");
      if (nextBtn) {
        nextBtn.classList.remove("hidden");
        nextBtn.textContent = "Nächste Karte";
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
      if (window.currentMode === "ingredient") {
        buildIngredientQuestionPool();
        renderIngredientQuestion();
      } else {
        if (fromSearchMode && searchCardId) {
          openSingleCardQuizFromSearch(searchCardId);
        } else {
          initLevel();
        }
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
    customSearchInput.addEventListener("keypress", e => {
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
        nextBtn.textContent = "Nächste Karte";
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
  const nextBtnGlobal = document.getElementById("nextBtn");
  const feedbackEl = document.getElementById("feedback");

  const isTouch =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;

  let options = [];

  (card.drogenParts || []).forEach(text => {
    const t = (text || "").trim();
    if (t) options.push({ text: t, group: "drogen" });
  });
  (card.familieParts || []).forEach(text => {
    const t = (text || "").trim();
    if (t) options.push({ text: t, group: "familie" });
  });

  function pushCorrect(arr, groupName) {
    (arr || []).forEach(text => {
      const t = (text || "").trim();
      if (t) options.push({ text: t, group: groupName });
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
      otherCards.forEach(c => (extractor(c) || []).forEach(txt => {
        const t = (txt || "").trim();
        if (t) all.push(t);
      }));
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
        if (!correctLower.includes(pool[i].toLowerCase())) {
          options.push({ text: pool[i], group: groupName });
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

  function autoCheckEinfach() {
    if (level !== "einfach") return;
    if (!nextBtnGlobal) return;
    const allOk = checkAllDropzonesCorrect(card);
    nextBtnGlobal.disabled = !allOk;
    if (feedbackEl) {
      if (allOk) {
        feedbackEl.textContent = "Richtig! Alle Felder korrekt zugeordnet.";
        feedbackEl.className = "feedback-ok";
      } else {
        feedbackEl.textContent = "";
        feedbackEl.className = "";
      }
    }
  }

  function createOptionElementDesktop(opt) {
    const el = document.createElement("div");
    el.className = "option-item";
    el.textContent = opt.text;
    el.draggable = true;
    el.dataset.group = opt.group || "";
    el.addEventListener("dragstart", e => {
      el.classList.add("dragging");
      e.dataTransfer.setData("text/plain", JSON.stringify({
        text: el.textContent, group: el.dataset.group || ""
      }));
    });
    el.addEventListener("dragend", () => el.classList.remove("dragging"));
    return el;
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
          autoCheckEinfach();
          return;
        }
        if (selectedOption && !existing) {
          zone.innerHTML = "";
          zone.appendChild(selectedOption);
          zone.dataset.chosenGroup = selectedOption.dataset.group || "";
          selectedOption.classList.remove("selected");
          selectedOption = null;
          autoCheckEinfach();
        }
      });
    });
  }

  if (isTouch) {
    shuffledOptions.forEach(opt => optionsList.appendChild(createOptionElementTouch(opt)));
    setupDropzonesTouch();
  } else {
    shuffledOptions.forEach(opt => optionsList.appendChild(createOptionElementDesktop(opt)));

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
        if (existing && existing !== dragging) {
          optionsList.appendChild(existing);
        }
        zone.innerHTML = "";
        zone.appendChild(dragging);
        dragging.classList.remove("dragging");
        zone.dataset.chosenGroup = dragging.dataset.group || "";
        autoCheckEinfach();
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
      const parent = dragging.parentElement;
      if (parent && parent.classList.contains("dropzone")) {
        parent.innerHTML = "";
        parent.classList.remove("correct", "incorrect");
        delete parent.dataset.chosenGroup;
      }
      optionsList.appendChild(dragging);
      dragging.classList.remove("dragging");
      autoCheckEinfach();
    });
  }
}