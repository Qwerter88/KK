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
    inhaltsstoffe: ["Ätherisches Öl (Thymol)", "Flavonoide", "Gerbstoffe"],
    wirkung: ["bronchospasmolytisch", "expektorierend"],
    anwendung: ["Katarrhen der oberen Atemwege"],
    warnhinweise: ["Thymiansirup"]
  },
  {
    id: "suessholz",
    germanName: "Süßholz",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Süßholzwurzel", "Liquiritiae", "radix"],
    stammpflanze1: "Süßholz – Glycyrrhiza glabra",
    familieParts: ["Hülsenfrüchtler", "Fabaceae"],
    inhaltsstoffe: ["Saponine", "Flavonoide"],
    wirkung: ["expektorierend", "antiphlogistisch", "antiulcerogen", "spasmolytisch"],
    anwendung: ["Katarrhen der oberen Atemwege", "Gastritis", "Magengeschwüre"],
    warnhinweise: ["Aufguss", "Mazerat"]
  },
  {
    id: "primel",
    germanName: "Primel",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Primelblüte / Primelwurzel", "Primulae", "flos / radix"],
    stammpflanze1: "Frühlings-Schlüsselblume – Primula veris / Hohe Schlüsselblume – Primula elatior",
    familieParts: ["Primelgewächse", "Primulaceae"],
    inhaltsstoffe: ["Flavonoide (Blüte)", "Saponine", "Carotinoide", "Ätherisches Öl (Wurzel)"],
    wirkung: ["expektorierend"],
    anwendung: ["Katarrhen der Atemwege", "Verflüssigung des Schleims"],
    warnhinweise: ["Primelsirup", "Primeltinktur"]
  },
  {
    id: "anis",
    germanName: "Anis",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Anis", "Anisi", "fructus"],
    stammpflanze1: "Anis – Pimpinella anisum",
    familieParts: ["Doldenblütler", "Apiaceae"],
    inhaltsstoffe: ["Ätherisches Öl"],
    wirkung: ["carminativ", "expektorierend", "schwach spasmolytisch"],
    anwendung: ["Katarrhen der Atemwege", "Förderung des Schleims", "leichte krampfartige Magen-Darm-Beschwerden"],
    warnhinweise: ["Spiritus Anisi compositus"]
  },
  {
    id: "fenchel_bitter",
    germanName: "Bitterer Fenchel",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["bitterer Fenchel", "Foeniculi amari", "fructus"],
    stammpflanze1: "Gewöhnlicher Fenchel – Foeniculum vulgare",
    familieParts: ["Doldenblütler", "Apiaceae"],
    inhaltsstoffe: ["Ätherische Öle", "Phenolcarbonsäuren", "Flavonoide"],
    wirkung: ["spasmolytisch", "carminativ", "sekretolytisch"],
    anwendung: ["Katarrhen der Atemwege", "Schleimlösung", "Blähungen", "leichte krampfartige Magen-Darm-Beschwerden"],
    warnhinweise: ["Aqua Foeniculi officinalis", "Aqua carminativa", "Aqua carminativa regia"]
  },
  {
    id: "eukalyptus",
    germanName: "Eukalyptus",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Eukalyptusblätter", "Eucalypti", "folium"],
    stammpflanze1: "Eukalyptus – Eucalyptus globulus",
    familieParts: ["Myrtengewächse", "Myrtaceae"],
    inhaltsstoffe: ["Ätherisches Öl", "Flavonoide", "Gerbstoffe"],
    wirkung: ["entzündungshemmend", "antibakteriell", "schleimlösend"],
    anwendung: ["Inhalation bei Katarrhen der oberen Atemwege"],
    warnhinweise: ["Nicht bei Säuglingen anwenden", "Nicht unter 2 Jahren"]
  },
  {
    id: "efeu",
    germanName: "Efeu",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Efeublätter", "Hederae", "folium"],
    stammpflanze1: "Gemeiner Efeu – Hedera helix",
    familieParts: ["Araliengewächse", "Araliaceae"],
    inhaltsstoffe: ["Saponine"],
    wirkung: ["schleimlösend", "auswurffördernd", "spasmolytisch"],
    anwendung: ["schleimiger Husten", "Entzündung der Bronchien"],
    warnhinweise: []
  },
  {
    id: "eibisch",
    germanName: "Eibisch",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Eibischblätter/-blüten/-wurzel", "Althaeae", "folium/flos/radix"],
    stammpflanze1: "Echter Eibisch – Althaea officinalis",
    familieParts: ["Malvengewächse", "Malvaceae"],
    inhaltsstoffe: ["Polysaccharide", "Stärke (Wurzel)"],
    wirkung: ["reizlindernd"],
    anwendung: ["Katarrhen der oberen Atemwege", "leichte Verdauungsbeschwerden"],
    warnhinweise: ["Eibischwurzel als Mazerat", "Species Althaeae", "Sirupus Althaeae"]
  },
  {
    id: "malve",
    germanName: "Malve",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Malvenblätter/-blüten", "Malvae", "folium/flos"],
    stammpflanze1: "Gewöhnliche Malve – Malva sylvestris / Wegmalve – Malva neglecta",
    familieParts: ["Malvengewächse", "Malvaceae"],
    inhaltsstoffe: ["Polysaccharide", "Flavonoide", "Gerbstoffe (Blätter)"],
    wirkung: ["reizlindernd"],
    anwendung: ["Katarrhen der oberen Atemwege", "Verdauungsbeschwerden", "Gastritis (Malvae folium)", "Bäder zur Wundheilung", "Schleimhautentzündungen im Mund- und Rachenraum"],
    warnhinweise: ["Malvae flos als Schönungsdroge", "Malvae folium = Käspappel"]
  },
  {
    id: "spitzwegerich",
    germanName: "Spitzwegerich",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Spitzwegerichblätter", "Plantaginis", "folium"],
    stammpflanze1: "Spitzwegerich – Plantago lanceolata",
    familieParts: ["Spitzwegerichgewächse", "Plantaginaceae"],
    inhaltsstoffe: ["Polysaccharide", "Gerbstoffe", "Bitterstoffe"],
    wirkung: ["reizlindernd", "antiphlogistisch", "adstringierend"],
    anwendung: ["Katarrhen der oberen Atemwege", "Entzündungen der Mund- und Rachenschleimhaut", "Wunden und Insektenstiche (frische Blätter, volksmedizinisch)"],
    warnhinweise: ["Sirupus Plantaginis"]
  },
  {
    id: "koenigskerze",
    germanName: "Königskerze",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Königskerzenblüten", "Verbasci", "flos"],
    stammpflanze1: "Gewöhnliche / Großblütige / Kleinblütige Königskerze – Verbascum phlomoides / densiflorum / thapsus",
    familieParts: ["Braunwurzgewächse", "Scrophulariaceae"],
    inhaltsstoffe: ["Polysaccharide", "Saponine", "Flavonoide"],
    wirkung: ["reizlindernd", "expektorierend", "antiphlogistisch"],
    anwendung: ["Katarrhen der Atemwege"],
    warnhinweise: ["Schmuckdroge", "volksmedizinisch als Blutreinigungstee"]
  },
  {
    id: "arnika",
    germanName: "Arnika",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Arnikablüten", "Arnicae", "flos"],
    stammpflanze1: "Arnika – Arnica montana",
    familieParts: ["Korbblütler", "Asteraceae"],
    inhaltsstoffe: ["Bitterstoffe", "Ätherisches Öl", "Flavonoide"],
    wirkung: ["antiphlogistisch", "antiseptisch", "wundheilungsfördernd"],
    anwendung: ["Kompresse bei Zerrungen und Prellungen", "Salbe oder Tinktur bei Hämatomen", "Quetschungen", "rheumatische Muskel- und Gelenksschmerzen", "nach Insektenstichen"],
    warnhinweise: ["häufig Allergien", "nicht innerlich anwenden", "eventuell toxisch"]
  },
  {
    id: "ringelblume",
    germanName: "Ringelblume",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Ringelblumenblüten", "Calendulae", "flos"],
    stammpflanze1: "Ringelblume – Calendula officinalis",
    familieParts: ["Korbblütler", "Asteraceae"],
    inhaltsstoffe: ["Saponine", "Flavonoide"],
    wirkung: ["antiphlogistisch", "wundheilungsfördernd"],
    anwendung: ["Aufguss bei Wunden aller Art", "Hautentzündungen", "Venenentzündungen", "Schrunden", "Akne", "Salbe", "Tinktur"],
    warnhinweise: []
  },
  {
    id: "kamille",
    germanName: "Kamille",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Kamillenblüten", "Matricariae", "flos"],
    stammpflanze1: "Echte Kamille – Matricaria chamomilla",
    familieParts: ["Korbblütler", "Asteraceae"],
    inhaltsstoffe: ["Ätherisches Öl (Bisabolol)", "Ätherisches Öl (Chamazulen)", "Ätherisches Öl (Matricin)", "Flavonoide", "Cumarine"],
    wirkung: ["antiphlogistisch", "spasmolytisch", "wundheilungsfördernd", "fungizid", "antibakteriell", "sedativ"],
    anwendung: ["Völlegefühl", "Blähungen", "krampfartige Magen-Darm-Beschwerden", "Entzündungen im Mund-Rachenraum", "Katarrhen der oberen Atemwege", "Hautprobleme als Salben", "Hautprobleme als Bäder", "Hautprobleme als Tinkturen"],
    warnhinweise: []
  },
  {
    id: "hamamelis",
    germanName: "Hamamelis",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Hamamelisblätter", "Hamamelidis", "folium"],
    stammpflanze1: "Virginische Zaubernuss – Hamamelis virginiana",
    familieParts: ["Zaubernussgewächse", "Hamamelidaceae"],
    inhaltsstoffe: ["Gerbstoffe", "Flavonoide", "wenig ätherisches Öl"],
    wirkung: ["adstringierend", "wundheilungsfördernd", "entzündungshemmend", "antibakteriell", "antiviral"],
    anwendung: ["leichte Hautverletzungen", "Entzündungen von Zahnfleisch", "Entzündungen der Mundschleimhaut", "kosmetische Produkte"],
    warnhinweise: []
  },
  {
    id: "eichenrinde",
    germanName: "Eichenrinde",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Eichenrinde", "Quercus", "cortex"],
    stammpflanze1: "Stiel-, Trauben- oder Flaumeiche – Quercus robur / petraea / pubescens",
    familieParts: ["Buchengewächse", "Fagaceae"],
    inhaltsstoffe: ["Gerbstoffe"],
    wirkung: ["adstringierend", "antiphlogistisch", "schweißsekretionshemmend"],
    anwendung: ["Entzündungen von Zahnfleisch", "Entzündungen der Mundschleimhaut", "Frostbeulen", "Hämorrhoiden", "vermehrte Fußschweißsekretion"],
    warnhinweise: []
  },
  {
    id: "birke",
    germanName: "Birke",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Birkenblätter", "Betulae", "folium"],
    stammpflanze1: "Hängebirke – Betula pendula / Moorbirke – Betula pubescens",
    familieParts: ["Birkengewächse", "Betulaceae"],
    inhaltsstoffe: ["Flavonoide", "Gerbstoffe", "wenig ätherisches Öl"],
    wirkung: ["diuretisch"],
    anwendung: ["Erhöhung der Harnmenge bei Katarrhen der Harnwege", "Harngrieß", "Vorbeugung von Harnsteinen"],
    warnhinweise: ["Nicht bei Wassereinlagerungen durch Herzprobleme"]
  },
  {
    id: "brennessel",
    germanName: "Brennnessel",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Brennnesselblätter/-wurzel", "Urticae", "folium/radix"],
    stammpflanze1: "Große Brennnessel – Urtica dioica / Kleine Brennnessel – Urtica urens",
    familieParts: ["Brennnesselgewächse", "Urticaceae"],
    inhaltsstoffe: ["Flavonoide (Blätter)", "Kieselsäure (Blätter)", "Phenolcarbonsäuren (Blätter)", "Phytosterole (Wurzel)", "Polysaccharide (Wurzel)", "Isolektine (Wurzel)"],
    wirkung: ["diuretisch"],
    anwendung: ["Erhöhung der Harnmenge bei Katarrhen der Harnwege", "Harngrieß", "Vorbeugung von Harnsteinen", "äußerlich bei fettigen Haaren und Schuppen", "Wurzel: leichte Beschwerden beim Harnlassen", "Wurzel: gutartige Prostatavergrößerung (BPH)"],
    warnhinweise: ["Nicht bei Wassereinlagerungen durch Herzprobleme"]
  },
  {
    id: "schachtelhalm",
    germanName: "Schachtelhalm",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Schachtelhalmkraut", "Equiseti", "herba"],
    stammpflanze1: "Acker-Schachtelhalm – Equisetum arvense",
    familieParts: ["Schachtelhalmgewächse", "Equisetaceae"],
    inhaltsstoffe: ["Flavonoide", "Kieselsäure", "Silikate", "Kaliumsalze"],
    wirkung: ["schwach diuretisch"],
    anwendung: ["Erhöhung der Harnmenge bei Katarrhen der Harnwege", "Harngrieß", "Vorbeugung von Harnsteinen"],
    warnhinweise: ["Nicht verwechseln mit Sumpfschachtelhalm", "Zubereitung als Abkochung", "auch Zinnkraut genannt", "Nicht bei Wassereinlagerungen durch Herzprobleme"]
  },
  {
    id: "liebstoeckel",
    germanName: "Liebstöckel",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Liebstöckelwurzel", "Levistici", "radix"],
    stammpflanze1: "Liebstöckel – Levisticum officinale",
    familieParts: ["Doldenblütler", "Apiaceae"],
    inhaltsstoffe: ["Ätherische Öle", "Cumarine"],
    wirkung: ["wassertreibend"],
    anwendung: ["Verdauungsbeschwerden", "Erhöhung der Harnmenge", "Gewürz"],
    warnhinweise: ["auch Maggikraut genannt", "nicht bei entzündlichen Nierenerkrankungen (hoher ÄÖ-Gehalt)"]
  },
  {
    id: "wacholder",
    germanName: "Wacholder",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Wacholderbeeren", "Juniperi", "galbulus"],
    stammpflanze1: "Echter Wacholder – Juniperus communis",
    familieParts: ["Zypressengewächse", "Cupressaceae"],
    inhaltsstoffe: ["Ätherisches Öl", "Kohlenhydrate", "Gerbstoffe"],
    wirkung: ["spasmolytisch", "diuretisch", "hyperämisierend"],
    anwendung: ["Verdauungsbeschwerden", "äußerlich zur Einreibung"],
    warnhinweise: ["Nicht bei Schwangerschaft", "Nicht bei Nierenerkrankungen"]
  },
  {
    id: "baerentraube",
    germanName: "Bärentraube",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Bärentraubenblätter", "Uvae ursi", "folium"],
    stammpflanze1: "Echte Bärentraube – Arctostaphylos uva-ursi",
    familieParts: ["Heidekrautgewächse", "Ericaceae"],
    inhaltsstoffe: ["Hydrochinone", "Gerbstoffe", "Bitterstoffe", "Flavonoide"],
    wirkung: ["harndesinfizierend", "entzündungshemmend"],
    anwendung: ["entzündliche Erkrankungen der Harnwege"],
    warnhinweise: ["Nicht für Schwangere", "Nicht für Kinder unter 12 Jahren", "maximal 1 Woche", "nicht öfter als 5x pro Jahr", "Dekokt oder Mazerat, kein Infus"]
  },
  {
    id: "cranberry",
    germanName: "Cranberry",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Cranberryfrüchte", "Macrocarponii", "fructus"],
    stammpflanze1: "Großfruchtige Moosbeere – Vaccinium macrocarpon",
    familieParts: ["Heidekrautgewächse", "Ericaceae"],
    inhaltsstoffe: ["Flavonoide (OPC)", "Gerbstoffe"],
    wirkung: ["antiadhäsiv", "antioxidativ", "antimikrobiell"],
    anwendung: ["Vorbeugung von Harnwegsinfektionen", "Behandlung von Harnwegsinfektionen"],
    warnhinweise: []
  },
  {
    id: "preiselbeere",
    germanName: "Preiselbeere",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Preiselbeerblätter", "Vitis idaeae", "folium"],
    stammpflanze1: "Preiselbeere – Vaccinium vitis-idaea",
    familieParts: ["Heidekrautgewächse", "Ericaceae"],
    inhaltsstoffe: ["Flavonoide (OPC)", "Gerbstoffe", "Polyphenole"],
    wirkung: ["antiadhäsiv", "adstringierend", "antimikrobiell", "antioxidativ"],
    anwendung: ["vorbeugend bei Harnwegsinfekten", "unterstützend bei Harnwegsinfekten"],
    warnhinweise: []
  },
  {
    id: "kuerbis",
    germanName: "Kürbis",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Kürbissamen", "Curcurbitae", "semen"],
    stammpflanze1: "Kürbis – Curcubita pepo",
    familieParts: ["Kürbisgewächse", "Curcurbitaceae"],
    inhaltsstoffe: ["Phytosterole", "Vitamin E", "Spurenelemente", "Fettes Öl", "Eiweiß"],
    wirkung: ["positive Wirkung auf die Prostata", "antiandrogen", "antioxidativ"],
    anwendung: ["gutartige Prostatavergrößerung (BPH)", "Reizblase"],
    warnhinweise: ["als Samen (Kürbiskerne) zum Kauen", "in Fertigpräparaten"]
  },
  {
    id: "saegepalme",
    germanName: "Sägepalme",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Sägepalmenfrüchte", "Sabalis serrulatae", "fructus"],
    stammpflanze1: "Sägepalme – Serenoa repens",
    familieParts: ["Palmengewächse", "Arecaceae"],
    inhaltsstoffe: ["Phytosterole", "Fettes Öl", "Flavonoide"],
    wirkung: ["entzündungshemmend", "prostatastärkend", "antiandrogen"],
    anwendung: ["gutartige Prostatavergrößerungen (BPH)", "Reizblase"],
    warnhinweise: []
  },
  {
    id: "weidenroeschen",
    germanName: "Weidenröschen",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Weidenröschenkraut", "Epilobii", "herba"],
    stammpflanze1: "Weidenröschen – Epilobium parviflorum",
    familieParts: ["Nachtkerzengewächse", "Oenotheraceae"],
    inhaltsstoffe: ["Gerbstoffe", "Flavonoide"],
    wirkung: ["prostatastärkend"],
    anwendung: ["volksmedizinisch: Beschwerden beim Harnlassen", "volksmedizinisch: gutartige Prostatavergrößerung"],
    warnhinweise: []
  },
  {
    id: "salbei",
    germanName: "Salbei",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Salbeiblätter", "Salviae", "folium"],
    stammpflanze1: "Echter Salbei – Salvia officinalis",
    familieParts: ["Lippenblütler", "Lamiaceae"],
    inhaltsstoffe: ["Ätherisches Öl", "Gerbstoffe", "Bitterstoffe"],
    wirkung: ["antiphlogistisch", "adstringierend", "schweißhemmend"],
    anwendung: ["Entzündungen von Zahnfleisch", "Entzündungen von Mund- und Rachenschleimhaut", "Verdauungsbeschwerden"],
    warnhinweise: ["Tinctura Salviae"]
  },
  {
    id: "ratanhia",
    germanName: "Ratanhia",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Ratanhiawurzel", "Radix Ratanhiae", ""],
    stammpflanze1: "Peru-Ratanhia – Krameria triandra",
    familieParts: ["Krameriengewächse", "Krameriaceae"],
    inhaltsstoffe: ["Gerbstoffe"],
    wirkung: ["adstringierend", "antiphlogistisch", "antimikrobiell"],
    anwendung: ["Entzündungen von Zahnfleisch", "Entzündungen der Mundschleimhaut", "innerlich selten bei Durchfall"],
    warnhinweise: ["als Dekokt", "Tinctura Ratanhia", "Tinctura Ratanhia + Tinctura Myrrhae", "Weleda Ratanhiamundwasser / Zahncreme", "St. Severin Ratanhiatee"]
  },
  {
    id: "tormentill",
    germanName: "Tormentill",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Tormentillwurzelstock", "Rhizoma Tormentillae", ""],
    stammpflanze1: "Fingerkraut – Potentilla erecta",
    familieParts: ["Rosengewächse", "Rosaceae"],
    inhaltsstoffe: ["Gerbstoffe"],
    wirkung: ["adstringierend", "antiphlogistisch", "antimikrobiell", "antidiarrhoisch"],
    anwendung: ["Entzündungen im Mund- und Rachenraum", "innerlich selten bei Durchfall"],
    warnhinweise: ["als Dekokt", "Tinctura Tormentillae", "Tormentillöl"]
  },
  {
    id: "myrrhe",
    germanName: "Myrrhe",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Myrrhe", "Myrrha", ""],
    stammpflanze1: "Myrrhenbaum – Commiphora myrrha",
    familieParts: ["Balsamstrauchgewächse", "Burseraceae"],
    inhaltsstoffe: ["Ätherisches Öl", "Harz", "Gummen"],
    wirkung: ["adstringierend", "desinfizierend", "desodorierend: vertreibt schlechte Gerüche"],
    anwendung: ["Entzündungen von Zahnfleisch", "Entzündungen der Mundschleimhaut"],
    warnhinweise: ["Tinctura Myrrhae", "getrockneter Milchsaft des Myrrhenbaums"]
  },
  {
    id: "gewuerznelke",
    germanName: "Gewürznelke",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Gewürznelken", "Flores Caryophylli", ""],
    stammpflanze1: "Gewürznelkenbaum – Syzygium aromaticum",
    familieParts: ["Myrtengewächse", "Myrtaceae"],
    inhaltsstoffe: ["Ätherisches Öl"],
    wirkung: ["antimikrobiell", "entzündungshemmend", "spasmolytisch", "lokalanästhetisch"],
    anwendung: ["Entzündungen im Mund- und Rachenraum", "zahnende Kinder", "Zahnschmerzen", "Verdauungsstörungen"],
    warnhinweise: ["Arzneidroge = getrocknete Blütenknospen", "bei Erwachsenen unverdünnt lokal anwendbar"]
  },
  {
    id: "teebaum",
    germanName: "Teebaumöl",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Teebaumöl", "Aetheroleum Melaleucae", ""],
    stammpflanze1: "Teebaum – Melaleuca alternifolia",
    familieParts: ["Myrtengewächse", "Myrtaceae"],
    inhaltsstoffe: ["Teebaumöl (ätherisches Öl)"],
    wirkung: ["antimikrobiell", "bakterizid", "antiphlogistisch"],
    anwendung: ["Entzündungen der Mundschleimhaut", "bakterielle Hautinfektionen (Akne, Abszess)", "Fieberblasen", "Pilzinfektionen"],
    warnhinweise: ["bei oraler Einnahme toxisch", "nur lokale Anwendung", "Primavera Teebaumöl", "Tebodont Zahnpaste", "Teebaumöl Vaginalzäpfchen"]
  },
  {
    id: "weissdorn",
    germanName: "Weißdorn",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Weißdornblätter mit Blüten", "Crataegi", "folium cum flore"],
    stammpflanze1: "Eingriffeliger Weißdorn – Crataegus monogyna / Zweigriffeliger Weißdorn – Crataegus laevigata",
    familieParts: ["Rosengewächse", "Rosaceae"],
    inhaltsstoffe: ["Flavonoide", "OPC (oligomere Proanthocyanidine)"],
    wirkung: ["kardioprotektiv", "Steigerung der Kontraktionskraft", "bessere Durchblutung des Herzmuskels", "Senkung des Gefäßwiderstands", "blutdrucksenkend"],
    anwendung: ["leichte Herz-Kreislauf-Beschwerden", "Erhöhung der Herzleistung", "Beklemmungsgefühl in der Herzgegend"],
    warnhinweise: []
  },
  {
    id: "mistel",
    germanName: "Mistel",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Mistelkraut", "Visci", "herba"],
    stammpflanze1: "Mistel – Viscum album",
    familieParts: ["Mistelgewächse", "Viscaceae"],
    inhaltsstoffe: ["Lektine", "Polypeptide (Viscotoxine)"],
    wirkung: ["immunstimulierend", "zytotoxisch", "blutdrucksenkend (volksmedizinisch)"],
    anwendung: ["unterstützend bei Krebserkrankungen", "unterstützend bei leichtem Bluthochdruck", "unterstützend bei Arteriosklerose", "entzündliche Gelenkserkrankungen"],
    warnhinweise: ["laut AbVO nur als Bestandteil von Arzneispezialitäten", "Kaltansatz"]
  },
  {
    id: "rosmarin",
    germanName: "Rosmarin",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Rosmarinblätter", "Rosmarini", "folium"],
    stammpflanze1: "Rosmarin – Rosmarinus officinalis",
    familieParts: ["Lippenblütler", "Lamiaceae"],
    inhaltsstoffe: ["Ätherische Öle", "Gerbstoffe", "Bitterstoffe"],
    wirkung: ["durchblutungsfördernd", "spasmolytisch", "antiphlogistisch", "analgetisch"],
    anwendung: ["Verdauungsbeschwerden", "Bäder bei rheumatischen Erkrankungen", "Einreibungen bei Erkältungen", "Einreibungen bei Kreislaufbeschwerden (niedriger Blutdruck)"],
    warnhinweise: ["Vorsicht bei Hautverletzungen", "Vorsicht bei fieberhaften Erkrankungen", "Vorsicht bei Herzproblemen"]
  },
  {
    id: "ginkgo",
    germanName: "Ginkgo",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Ginkgoblätter", "Ginkgo", "folium"],
    stammpflanze1: "Ginkgo – Ginkgo biloba",
    familieParts: ["Ginkgogewächse", "Ginkgoaceae"],
    inhaltsstoffe: ["Flavonoide", "Terpene"],
    wirkung: ["durchblutungsfördernd", "Verbesserung der Sauerstoffversorgung im Gehirn", "antioxidativ"],
    anwendung: ["Gedächtnisstörungen", "Konzentrationsstörungen", "Schwindel", "Tinnitus", "periphere arterielle Verschlusskrankheit"],
    warnhinweise: ["Wechselwirkung mit blutverdünnenden Medikamenten"]
  },
  {
    id: "knoblauch",
    germanName: "Knoblauch",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Knoblauchzwiebel", "Allii sativi", "bulbus"],
    stammpflanze1: "Knoblauch – Allium sativum",
    familieParts: ["Lauchgewächse", "Alliaceae"],
    inhaltsstoffe: ["schwefelhaltige Verbindungen", "Ätherisches Öl", "Flavonoide"],
    wirkung: ["herz- und gefäßstärkend", "blutdrucksenkend", "cholesterinsenkend", "antimikrobiell"],
    anwendung: ["unterstützend bei Herzerkrankungen", "Senkung des Cholesterinspiegels"],
    warnhinweise: ["laut AbVO nur als Bestandteil von Arzneispezialitäten"]
  },
  {
    id: "rosskastanie",
    germanName: "Rosskastanie",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Rosskastaniensamen", "Hippocastani", "semen"],
    stammpflanze1: "Rosskastanie – Aesculus hippocastanum",
    familieParts: ["Rosskastaniengewächse", "Hippocastanaceae"],
    inhaltsstoffe: ["Saponine (Aescin)", "Flavonoide"],
    wirkung: ["gefäßstärkend", "gefäßabdichtend", "entzündungshemmend"],
    anwendung: ["Venenleiden", "Krampfadern", "Hämorrhoiden", "geschwollene Beine", "müde Beine"],
    warnhinweise: []
  },
  {
    id: "buchweizen",
    germanName: "Buchweizen",
    levels: ["einfach", "mittel", "schwer"],
    drogenParts: ["Buchweizenkraut", "Fagopyri", "herba"],
    stammpflanze1: "Buchweizen – Fagopyrum esculentum",
    familieParts: ["Knöterichgewächse", "Polygonaceae"],
    inhaltsstoffe: ["Flavonoide"],
    wirkung: ["gefäßstärkend", "durchblutungsfördernd"],
    anwendung: ["Venenleiden", "Hämorrhoiden", "Frostbeulen", "schlechte Durchblutung"],
    warnhinweise: ["laut AbVO nur als Bestandteil von Arzneispezialitäten"]
  }
];

// ===================
// Globale Zustände
// ===================

let currentLevel = "einfach";
let currentIndex = 0;
let shuffledIndices = [];
let currentMode = "cards";
let fromSearchMode = false;
let searchCardId = null;

let ingredientQuestions = [];
let currentIngredientQuestionIndex = 0;
let ingredientChecked = false;

// ===================
// DOM-Elemente
// ===================

const landing = document.getElementById("landing");
const app = document.getElementById("app");
const appTitle = document.getElementById("appTitle");

const quizMain = document.getElementById("quizMain");
const customMain = document.getElementById("customMain");
const quizTopBar = document.getElementById("quizTopBar");

const levelSelect = document.getElementById("levelSelect");
const cardContainer = document.getElementById("cardContainer");
const optionsContainer = document.getElementById("optionsContainer");
const optionsList = document.getElementById("optionsList");
const feedback = document.getElementById("feedback");
const cardCounter = document.getElementById("cardCounter");
const checkBtn = document.getElementById("checkBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const backToLandingBtn = document.getElementById("backToLandingBtn");
const backToSearchBtn = document.getElementById("backToSearchBtn");

const customSearchInput = document.getElementById("customSearchInput");
const customSearchBtn = document.getElementById("customSearchBtn");
const customSearchResults = document.getElementById("customSearchResults");

const customBackBtn = document.getElementById("customBackBtn");
const teacherLoginBtn = document.getElementById("teacherLoginBtn");
const modeButtons = document.querySelectorAll(".mode-btn");

// ===================
// Initialisierung
// ===================

if (teacherLoginBtn) {
  teacherLoginBtn.addEventListener("click", () => {
    const pw = window.prompt("Passwort für Lehrerbereich eingeben:");
    if (!pw) return;

    if (pw === "Thymian01") {
      window.location.href = "edit.html";
    } else {
      window.alert("Falsches Passwort.");
    }
  });
}

modeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const mode = btn.dataset.mode;

    if (mode === "custom") {
      currentMode = "custom";
      showApp();
      showCustomLayout();
      clearFeedback();
      return;
    }

    if (mode === "ingredient") {
      currentMode = "ingredient";
      showApp();
      showIngredientLayout();
      startIngredientQuiz();
      return;
    }

    currentMode = "cards";
    currentLevel = mode;
    levelSelect.value = mode;
    showApp();
    showQuizLayout();
    initLevel();
  });
});

if (levelSelect) {
  levelSelect.addEventListener("change", () => {
    currentLevel = levelSelect.value;
    currentMode = "cards";
    fromSearchMode = false;
    searchCardId = null;

    if (backToSearchBtn) backToSearchBtn.classList.add("hidden");

    showQuizLayout();
    initLevel();
  });
}

if (checkBtn) {
  checkBtn.addEventListener("click", () => {
    if (currentMode === "ingredient") {
      checkIngredientAnswer();
      return;
    }

    checkCurrentCard();
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    if (currentMode === "ingredient") {
      goToNextIngredientQuestion();
      return;
    }

    goToNextCard();
  });
}

if (restartBtn) {
  restartBtn.addEventListener("click", () => {
    if (currentMode === "ingredient") {
      startIngredientQuiz();
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
    currentMode = "custom";
    showCustomLayout();
  });
}

if (customSearchBtn) {
  customSearchBtn.addEventListener("click", runCustomSearch);
}

if (customSearchInput) {
  customSearchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") runCustomSearch();
  });
}

if (customBackBtn) {
  customBackBtn.addEventListener("click", () => {
    resetToLandingState();
    showLanding();
  });
}

// ===================
// Hilfsfunktionen
// ===================

function clearFeedback() {
  if (!feedback) return;
  feedback.textContent = "";
  feedback.className = "";
}

function setFeedback(message, ok = true) {
  if (!feedback) return;
  feedback.textContent = message;
  feedback.className = ok ? "feedback-ok" : "feedback-error";
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

  if (backToLandingBtn) backToLandingBtn.classList.remove("hidden");
  if (restartBtn) restartBtn.classList.remove("hidden");
  if (checkBtn) checkBtn.classList.remove("hidden");
  if (nextBtn) nextBtn.classList.remove("hidden");
}

function showCustomLayout() {
  quizMain.classList.add("hidden");
  customMain.classList.remove("hidden");
  quizTopBar.classList.add("hidden");
  appTitle.textContent = "Eigenes Lernen – Suchfunktion";

  if (backToLandingBtn) backToLandingBtn.classList.add("hidden");
}

function showIngredientLayout() {
  quizMain.classList.remove("hidden");
  customMain.classList.add("hidden");
  quizTopBar.classList.add("hidden");
  appTitle.textContent = "Inhaltsstoff-Lernen – Multiple-Choice-Quiz";

  if (backToLandingBtn) backToLandingBtn.classList.remove("hidden");
  if (checkBtn) checkBtn.classList.remove("hidden");
  if (nextBtn) nextBtn.classList.remove("hidden");
  if (restartBtn) restartBtn.classList.remove("hidden");
  if (optionsContainer) optionsContainer.classList.add("hidden");
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
  ingredientChecked = false;

  if (backToSearchBtn) backToSearchBtn.classList.add("hidden");
  if (backToLandingBtn) backToLandingBtn.classList.add("hidden");

  if (nextBtn) {
    nextBtn.classList.remove("hidden");
    nextBtn.textContent = "Nächste Karte";
    nextBtn.disabled = true;
  }

  if (checkBtn) {
    checkBtn.classList.remove("hidden");
    checkBtn.textContent = "Überprüfen";
  }

  if (restartBtn) {
    restartBtn.classList.remove("hidden");
    restartBtn.textContent = "Neu starten";
  }

  if (optionsContainer) optionsContainer.classList.remove("hidden");
  if (optionsList) optionsList.innerHTML = "";
  if (cardContainer) cardContainer.innerHTML = "";
  if (cardCounter) cardCounter.textContent = "";
  clearFeedback();
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeText(value) {
  return (value || "")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function uniqueNormalizedValues(values) {
  const seen = new Set();
  const result = [];

  (values || []).forEach((value) => {
    const clean = (value || "").toString().trim();
    const key = normalizeText(clean);

    if (!clean || !key || seen.has(key)) return;

    seen.add(key);
    result.push(clean);
  });

  return result;
}

function getLevelCards(level) {
  return baseCards.filter((card) => card.levels.includes(level));
}

function getCurrentCard() {
  const levelCards = getLevelCards(currentLevel);
  if (!levelCards.length) return null;
  const safeIndex = shuffledIndices[currentIndex];
  return levelCards[safeIndex] || null;
}

function updateCardCounter() {
  if (!cardCounter) return;

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

// ===================
// Kartenmodus
// ===================

function initLevel() {
  const levelCards = getLevelCards(currentLevel);
  shuffledIndices = shuffleArray(levelCards.map((_, index) => index));
  currentIndex = 0;
  renderCurrentCard();
}

function renderCurrentCard() {
  clearFeedback();

  const card = getCurrentCard();
  if (!card) {
    cardContainer.innerHTML = "<p>Keine Karten vorhanden.</p>";
    if (optionsList) optionsList.innerHTML = "";
    return;
  }

  if (nextBtn) nextBtn.disabled = true;
  if (checkBtn) {
    checkBtn.classList.remove("hidden");
    checkBtn.textContent = "Überprüfen";
  }
  if (restartBtn) restartBtn.classList.remove("hidden");
  if (backToLandingBtn) backToLandingBtn.classList.remove("hidden");

  updateCardCounter();

  if (currentLevel === "einfach" || currentLevel === "mittel") {
    if (optionsContainer) optionsContainer.classList.remove("hidden");
    renderCardWithDropzones(card);
    renderOptionsForCard(card);
  } else {
    if (optionsContainer) optionsContainer.classList.add("hidden");
    renderCardWithInputs(card);
  }
}

function renderCardWithDropzones(card) {
  if (!cardContainer) return;

  const drugPartsValues = uniqueNormalizedValues(card.drogenParts || []);
  const familyValues = uniqueNormalizedValues(card.familieParts || []);
  const inhaltsstoffeValues = uniqueNormalizedValues(card.inhaltsstoffe || []);
  const wirkungValues = uniqueNormalizedValues(card.wirkung || []);
  const anwendungValues = uniqueNormalizedValues(card.anwendung || []);
  const warnhinweiseValues = uniqueNormalizedValues(card.warnhinweise || []);

  const drugMarkup = drugPartsValues.length
    ? drugPartsValues
        .map((value, index) => {
          const separator = index < drugPartsValues.length - 1 ? " <span>-</span> " : "";
          return `${createDropzones("drogenParts", [value])}${separator}`;
        })
        .join("")
    : "<em class='small'>—</em>";

  const familyMarkup = familyValues.length
    ? familyValues
        .map((value, index) => {
          const separator = index < familyValues.length - 1 ? " <span>-</span> " : "";
          return `${createDropzones("familieParts", [value])}${separator}`;
        })
        .join("")
    : "<em class='small'>—</em>";

  cardContainer.innerHTML = `
    <div class="card">
      <div class="row">
        <div class="cell">
          <h3>Drogenbezeichnung</h3>
          <div class="field">
            ${drugMarkup}
          </div>
        </div>

        <div class="cell">
          <h3>Stammpflanze und Familie</h3>
          <div class="field">${escapeHtml(card.stammpflanze1 || "")}</div>
          <div class="field" style="margin-top: 6px;">
            ${familyMarkup}
          </div>
        </div>
      </div>

      <div class="row">
        <div class="cell">
          <h3>Inhaltsstoffe</h3>
          <div class="field">
            ${createDropzones("inhaltsstoffe", inhaltsstoffeValues)}
          </div>
        </div>

        <div class="cell">
          <h3>Wirkung</h3>
          <div class="field">
            ${createDropzones("wirkung", wirkungValues)}
          </div>
        </div>
      </div>

      <div class="row">
        <div class="cell">
          <h3>Anwendung</h3>
          <div class="field">
            ${createDropzones("anwendung", anwendungValues)}
          </div>
        </div>

        <div class="cell">
          <h3>Warnhinweise, Zusatzinformation</h3>
          <div class="field">
            ${createDropzones("warnhinweise", warnhinweiseValues)}
          </div>
        </div>
      </div>
    </div>
  `;

  enableDropzones();
}

function createDropzones(group, values, freeMode = false) {
  if (!values.length) return "<em class='small'>—</em>";

  return values
    .map((value, index) => {
      const content = freeMode
        ? `<span class="filled-answer">${escapeHtml(value)}</span>`
        : "";
      return `<div class="dropzone" data-group="${group}" data-answer="${escapeHtml(value)}" data-index="${index}">${content}</div>`;
    })
    .join("");
}

function renderOptionsForCard(card) {
  const allOptions = [
    ...(card.drogenParts || []),
    ...(card.familieParts || []),
    ...(card.inhaltsstoffe || []),
    ...(card.wirkung || []),
    ...(card.anwendung || []),
    ...(card.warnhinweise || [])
  ].filter(Boolean);

  const uniqueOptions = uniqueNormalizedValues(allOptions);
  const shuffled = shuffleArray(uniqueOptions);

  optionsList.innerHTML = shuffled
    .map((item, index) => `
      <div class="option-item" draggable="true" data-value="${escapeHtml(item)}" data-id="${index}">
        ${escapeHtml(item)}
      </div>
    `)
    .join("");

  enableDragItems();
  enableOptionsDropback();
}

function renderCardWithInputs(card) {
  const groups = [
    { key: "drogenParts", label: "Droge" },
    { key: "stammpflanze1", label: "Stammpflanze" },
    { key: "familieParts", label: "Familie" },
    { key: "inhaltsstoffe", label: "Inhaltsstoffe" },
    { key: "wirkung", label: "Wirkung" },
    { key: "anwendung", label: "Anwendung" },
    { key: "warnhinweise", label: "Hinweise" }
  ];

  const html = `
    <div class="card">
      <h2>${escapeHtml(card.germanName)}</h2>
      <div class="row">
        ${groups
          .map(
            (group) => `
          <div class="cell">
            <h3>${escapeHtml(group.label)}</h3>
            <div class="field">
              ${createInputs(group.key, getValues(card, group.key))}
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;

  cardContainer.innerHTML = html;
}

function createInputs(group, values) {
  if (!values.length) return "<em class='small'>—</em>";

  return values
    .map(
      (value, index) => `
      <input
        type="text"
        class="input-field"
        data-group="${group}"
        data-answer="${escapeHtml(value)}"
        data-index="${index}"
      >
    `
    )
    .join("");
}

function getValues(card, key) {
  const value = card[key];
  if (Array.isArray(value)) return value;
  if (typeof value === "string" && value.trim()) return [value];
  return [];
}

function enableDragItems() {
  const items = optionsList.querySelectorAll(".option-item");

  items.forEach((item) => {
    item.addEventListener("dragstart", () => {
      item.classList.add("dragging");
    });

    item.addEventListener("dragend", () => {
      item.classList.remove("dragging");
    });

    item.addEventListener("click", () => {
      document.querySelectorAll(".option-item").forEach((el) => el.classList.remove("selected"));
      item.classList.add("selected");
    });
  });
}

function enableDropzones() {
  const dropzones = cardContainer.querySelectorAll(".dropzone");

  dropzones.forEach((zone) => {
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

      const dragged = document.querySelector(".option-item.dragging");
      const selected = document.querySelector(".option-item.selected");
      const item = dragged || selected;

      if (!item) return;

      const existing = zone.querySelector(".option-item");
      if (existing && existing !== item) {
        optionsList.appendChild(existing);
      }

      zone.innerHTML = "";
      zone.appendChild(item);
      item.classList.remove("selected");
    });

    zone.addEventListener("click", () => {
      const selected = document.querySelector(".option-item.selected");
      if (!selected) return;

      const existing = zone.querySelector(".option-item");
      if (existing && existing !== selected) {
        optionsList.appendChild(existing);
      }

      zone.innerHTML = "";
      zone.appendChild(selected);
      selected.classList.remove("selected");
    });
  });
}

function enableOptionsDropback() {
  if (!optionsList) return;

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

    const dragged = document.querySelector(".option-item.dragging");
    if (dragged) {
      optionsList.appendChild(dragged);
      dragged.classList.remove("selected");
    }
  });
}

function checkCurrentCard() {
  if (currentLevel === "schwer") {
    checkInputFields();
    return;
  }

  checkDropzones();
}

function checkDropzones() {
  const zones = Array.from(cardContainer.querySelectorAll(".dropzone"));
  let allCorrect = true;

  zones.forEach((zone) => zone.classList.remove("correct", "incorrect"));

  const strictGroups = ["drogenParts", "familieParts"];
  const freeOrderGroups = ["inhaltsstoffe", "wirkung", "anwendung", "warnhinweise"];

  strictGroups.forEach((groupName) => {
    const groupZones = zones.filter((zone) => zone.dataset.group === groupName);

    groupZones.forEach((zone) => {
      const expected = (zone.dataset.answer || "").trim().toLowerCase();
      const placedItem = zone.querySelector(".option-item");
      const value = placedItem ? placedItem.textContent.trim().toLowerCase() : "";

      if (value === expected) {
        zone.classList.add("correct");
      } else {
        zone.classList.add("incorrect");
        allCorrect = false;
      }
    });
  });

  freeOrderGroups.forEach((groupName) => {
    const groupZones = zones.filter((zone) => zone.dataset.group === groupName);
    const expectedValues = groupZones
      .map((zone) => (zone.dataset.answer || "").trim().toLowerCase())
      .filter(Boolean);

    const placedValues = groupZones
      .map((zone) => {
        const placedItem = zone.querySelector(".option-item");
        return placedItem ? placedItem.textContent.trim().toLowerCase() : "";
      })
      .filter(Boolean);

    const expectedSorted = [...expectedValues].sort();
    const placedSorted = [...placedValues].sort();

    const sameLength = expectedSorted.length === placedSorted.length;
    const sameValues = sameLength && expectedSorted.every((value, index) => value === placedSorted[index]);

    if (sameValues) {
      groupZones.forEach((zone) => zone.classList.add("correct"));
    } else {
      groupZones.forEach((zone) => zone.classList.add("incorrect"));
      allCorrect = false;
    }
  });

  if (allCorrect) {
    setFeedback("Richtig! Gut gemacht.", true);
    if (nextBtn) nextBtn.disabled = false;
  } else {
    setFeedback("Einige Antworten stimmen noch nicht.", false);
    if (nextBtn) nextBtn.disabled = true;
  }
}

function checkInputFields() {
  const inputs = cardContainer.querySelectorAll(".input-field");
  let allCorrect = true;

  inputs.forEach((input) => {
    const expected = normalizeText(input.dataset.answer || "");
    const value = normalizeText(input.value || "");

    input.classList.remove("correct", "incorrect");

    if (value === expected) {
      input.classList.add("correct");
    } else {
      input.classList.add("incorrect");
      allCorrect = false;
    }
  });

  if (allCorrect) {
    setFeedback("Richtig! Gut gemacht.", true);
    if (nextBtn) nextBtn.disabled = false;
  } else {
    setFeedback("Einige Antworten stimmen noch nicht.", false);
    if (nextBtn) nextBtn.disabled = true;
  }
}

function goToNextCard() {
  const levelCards = getLevelCards(currentLevel);
  if (!levelCards.length) return;

  currentIndex += 1;

  if (currentIndex >= levelCards.length) {
    setFeedback("Du bist am Ende des Kartensets angekommen. Starte gerne neu.", true);
    currentIndex = 0;
    shuffledIndices = shuffleArray(levelCards.map((_, index) => index));
  }

  renderCurrentCard();
}

// ===================
// Inhaltsstoff-Quiz
// ===================

function buildIngredientQuestions() {
  return baseCards.map((card) => {
    const correctAnswers = [...new Set([...(card.inhaltsstoffe || []), ...(card.wirkung || [])])];
    const allPool = [...new Set(baseCards.flatMap((c) => [...(c.inhaltsstoffe || []), ...(c.wirkung || [])]))];
    const wrongAnswers = shuffleArray(allPool.filter((item) => !correctAnswers.includes(item))).slice(0, 6);
    const options = shuffleArray([...correctAnswers, ...wrongAnswers]);

    return {
      id: card.id,
      plant: card.germanName,
      questionText: `Welche Inhaltsstoffe und Wirkungen passen zu ${card.germanName}?`,
      correctAnswers,
      options
    };
  });
}

function startIngredientQuiz() {
  ingredientQuestions = shuffleArray(buildIngredientQuestions());
  currentIngredientQuestionIndex = 0;
  ingredientChecked = false;
  renderIngredientQuestion();
}

function renderIngredientQuestion() {
  clearFeedback();

  const q = ingredientQuestions[currentIngredientQuestionIndex];
  if (!q) {
    cardContainer.innerHTML = "<p>Keine Fragen vorhanden.</p>";
    return;
  }

  if (optionsContainer) optionsContainer.classList.add("hidden");
  if (checkBtn) {
    checkBtn.classList.remove("hidden");
    checkBtn.textContent = "Überprüfen";
  }
  if (nextBtn) {
    nextBtn.classList.remove("hidden");
    nextBtn.textContent = "Nächste Karte";
    nextBtn.disabled = true;
  }
  if (restartBtn) {
    restartBtn.classList.remove("hidden");
    restartBtn.textContent = "Neu starten";
  }
  if (backToLandingBtn) backToLandingBtn.classList.remove("hidden");

  updateCardCounter();

  cardContainer.innerHTML = `
    <div class="card">
      <h2>${escapeHtml(q.plant)}</h2>
      <p>${escapeHtml(q.questionText)}</p>
      <div id="ingredientOptions">
        ${q.options
          .map(
            (option, index) => `
          <label class="ingredient-option" data-option="${index}">
            <input type="checkbox" value="${escapeHtml(option)}">
            <span>${escapeHtml(option)}</span>
          </label>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}

function checkIngredientAnswer() {
  const q = ingredientQuestions[currentIngredientQuestionIndex];
  if (!q) return;

  const labels = cardContainer.querySelectorAll(".ingredient-option");
  let allCorrect = true;
  let somethingSelected = false;

  labels.forEach((label) => {
    const checkbox = label.querySelector("input");
    const value = checkbox.value;
    const shouldBeChecked = q.correctAnswers.includes(value);
    const isChecked = checkbox.checked;

    label.classList.remove("correct", "incorrect");

    if (isChecked) somethingSelected = true;

    if (shouldBeChecked && isChecked) {
      label.classList.add("correct");
    } else if (!shouldBeChecked && isChecked) {
      label.classList.add("incorrect");
      allCorrect = false;
    } else if (shouldBeChecked && !isChecked) {
      label.classList.add("incorrect");
      allCorrect = false;
    }
  });

  if (!somethingSelected) {
    setFeedback("Bitte wähle mindestens eine Antwort aus.", false);
    return;
  }

  ingredientChecked = true;

  if (allCorrect) {
    setFeedback("Richtig! Gut gemacht.", true);
  } else {
    setFeedback("Noch nicht ganz richtig.", false);
  }

  if (nextBtn) nextBtn.disabled = false;
}

function goToNextIngredientQuestion() {
  currentIngredientQuestionIndex += 1;

  if (currentIngredientQuestionIndex >= ingredientQuestions.length) {
    setFeedback("Du bist am Ende des Quiz angekommen. Starte gerne neu.", true);
    startIngredientQuiz();
    return;
  }

  ingredientChecked = false;
  renderIngredientQuestion();
}

// ===================
// Suchmodus
// ===================

function runCustomSearch() {
  const rawTerm = customSearchInput.value.trim();
  customSearchResults.innerHTML = "";

  if (!rawTerm) {
    customSearchResults.innerHTML = "<p>Bitte ein Suchwort eingeben.</p>";
    return;
  }

  const term = rawTerm.toLowerCase();

  const matches = baseCards.filter((card) => {
    const haystack = [
      card.germanName,
      ...(card.drogenParts || []),
      card.stammpflanze1,
      ...(card.familieParts || []),
      ...(card.inhaltsstoffe || []),
      ...(card.wirkung || []),
      ...(card.anwendung || []),
      ...(card.warnhinweise || [])
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return haystack.includes(term);
  });

  if (!matches.length) {
    customSearchResults.innerHTML = `<p>Keine Treffer für „${escapeHtml(rawTerm)}“ gefunden.</p>`;
    return;
  }

  customSearchResults.innerHTML = `
    <ul class="custom-results-list">
      ${matches
        .map(
          (card) => `
        <li>
          <button class="custom-result-btn" data-card-id="${card.id}">
            ${escapeHtml(card.germanName)}
          </button>
        </li>
      `
        )
        .join("")}
    </ul>
  `;

  customSearchResults.querySelectorAll(".custom-result-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cardId = btn.dataset.cardId;
      openCardFromSearch(cardId);
    });
  });
}

function openCardFromSearch(cardId) {
  const card = baseCards.find((item) => item.id === cardId);
  if (!card) {
    customSearchResults.innerHTML = "<p>Diese Karte wurde nicht gefunden.</p>";
    return;
  }

  fromSearchMode = true;
  searchCardId = cardId;
  currentMode = "cards";
  currentLevel = "einfach";
  levelSelect.value = "einfach";

  showQuizLayout();

  if (backToSearchBtn) backToSearchBtn.classList.remove("hidden");

  shuffledIndices = [getLevelCards(currentLevel).findIndex((item) => item.id === cardId)].filter((n) => n >= 0);
  currentIndex = 0;

  if (!shuffledIndices.length) {
    setFeedback("Diese Karte ist in der aktuellen Stufe nicht verfügbar.", false);
    return;
  }

  renderCurrentCard();
}