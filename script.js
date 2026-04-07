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

function normalizeText(value) {
  return (value || "")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function escapeHtml(text) {
  return (text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getLevelCards(level) {
  return cards.filter(card => Array.isArray(card.levels) && card.levels.includes(level));
}

function getCurrentCard() {
  const levelCards = getLevelCards(currentLevel);
  if (!levelCards.length) return null;
  return levelCards[shuffledIndices[currentIndex]];
}

function getCardById(cardId) {
  return cards.find(card => card.id === cardId) || null;
}

function uniqueNormalizedValues(values) {
  const seen = new Set();
  const result = [];
  (values || []).forEach(value => {
    const clean = (value || "").toString().trim();
    const key = normalizeText(clean);
    if (!clean || !key || seen.has(key)) return;
    seen.add(key);
    result.push(clean);
  });
  return result;
}

function arraysEqualAsSets(a, b) {
  if (a.length !== b.length) return false;
  const setB = new Set(b);
  return a.every(item => setB.has(item));
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

  if (!landing || !app) return;

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

  function updateIngredientProgress() {
    const progress = document.getElementById("ingredientProgress");
    const progressLabel = document.getElementById("ingredientProgressLabel");

    if (!progress || !progressLabel) return;

    if (!ingredientQuestions.length) {
      progress.max = 1;
      progress.value = 0;
      progressLabel.textContent = "";
      return;
    }

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
    appTitle.textContent = "Inhaltsstoffe und Wirkungen – Multiple-Choice-Quiz";
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

    if (checkBtn) {
      checkBtn.classList.remove("hidden");
      checkBtn.textContent = "Überprüfen";
    }

    if (optionsContainer) optionsContainer.classList.remove("hidden");
    if (optionsList) optionsList.innerHTML = "";
    if (cardContainer) cardContainer.innerHTML = "";
    if (cardCounter) cardCounter.textContent = "";

    clearFeedback();
  }

  function initLevel() {
    const levelCards = getLevelCards(currentLevel);
    shuffledIndices = shuffleArray(levelCards.map((_, index) => index));
    currentIndex = 0;
    renderCurrentCard();
  }

  function createDropzones(group, values, freeMode = false, specialKey = "") {
    if (!values.length) {
      return `<div class="field small">—</div>`;
    }

    if (freeMode) {
      return values.map((_, index) => {
        const key = specialKey || `${group}${index}`;
        return `<input class="input-field" data-key="${escapeHtml(key)}" type="text" />`;
      }).join("");
    }

    return values.map(() => `<div class="dropzone" data-group="${escapeHtml(group)}"></div>`).join("");
  }

  function buildCardHTML(card, level) {
    const isFree = level === "schwer";

    const drogenFull = (card.drogenParts || []).filter(Boolean).join(" ");
    const familieFull =
      (card.familieParts && card.familieParts.length >= 2)
        ? `${card.familieParts[0]} - ${card.familieParts[1]}`
        : (card.familieParts || []).join(" - ");

    return `
      <div class="card">
        <h2>${escapeHtml(card.germanName || "Unbekannte Karte")}</h2>
        <div class="row">
          <div class="cell">
            <h3>Droge</h3>
            <div class="field">
              ${
                isFree
                  ? `<input class="input-field" data-key="drogenfull" type="text" />`
                  : createDropzones("drogen", card.drogenParts || [])
              }
            </div>
          </div>

          <div class="cell">
            <h3>Stammpflanze</h3>
            <div class="field">${escapeHtml(card.stammpflanze1 || "—")}</div>
          </div>

          <div class="cell">
            <h3>Familie</h3>
            <div class="field">
              ${
                isFree
                  ? `<input class="input-field" data-key="familiefull" type="text" />`
                  : createDropzones("familie", card.familieParts || [])
              }
            </div>
          </div>

          <div class="cell">
            <h3>Inhaltsstoffe</h3>
            <div class="field">
              ${createDropzones("inhaltsstoffe", card.inhaltsstoffe || [], isFree)}
            </div>
          </div>

          <div class="cell">
            <h3>Wirkung</h3>
            <div class="field">
              ${createDropzones("wirkung", card.wirkung || [], isFree)}
            </div>
          </div>

          <div class="cell">
            <h3>Anwendung</h3>
            <div class="field">
              ${createDropzones("anwendung", card.anwendung || [], isFree)}
            </div>
          </div>

          <div class="cell">
            <h3>Warnhinweise / Beispiele</h3>
            <div class="field">
              ${createDropzones("warnhinweise", card.warnhinweise || [], isFree)}
            </div>
          </div>

          ${
            isFree
              ? `
                <div class="cell">
                  <h3 class="small">Hinweis</h3>
                  <div class="field small">
                    Schreibe bei Droge und Familie jeweils den kompletten Begriff.
                  </div>
                </div>
              `
              : ""
          }
        </div>
      </div>
    `;
  }

  function renderCurrentCard() {
    const card = getCurrentCard();

    clearFeedback();

    if (!card) {
      cardContainer.innerHTML = `<div class="card"><h2>Keine Karten für diese Stufe vorhanden.</h2></div>`;
      if (cardCounter) cardCounter.textContent = "";
      if (optionsContainer) optionsContainer.classList.add("hidden");
      if (checkBtn) checkBtn.classList.remove("hidden");
      if (nextBtn) nextBtn.disabled = true;
      return;
    }

    cardContainer.innerHTML = buildCardHTML(card, currentLevel);
    updateCardCounter();

    if (checkBtn) {
      checkBtn.classList.remove("hidden");
      if (currentLevel === "einfach") {
        checkBtn.classList.add("hidden");
      }
    }

    if (nextBtn) nextBtn.disabled = true;

    if (optionsContainer) {
      if (currentLevel === "schwer") {
        optionsContainer.classList.add("hidden");
      } else {
        optionsContainer.classList.remove("hidden");
      }
    }

    if (currentLevel === "einfach" || currentLevel === "mittel") {
      setupDragDrop(card, currentLevel);
    } else if (optionsList) {
      optionsList.innerHTML = "";
    }
  }

  function buildOptionsFromCard(card) {
    return shuffleArray(
      [
        ...(card.drogenParts || []),
        ...(card.familieParts || []),
        ...(card.inhaltsstoffe || []),
        ...(card.wirkung || []),
        ...(card.anwendung || []),
        ...(card.warnhinweise || [])
      ].filter(Boolean)
    );
  }

  function setupDragDrop(card, level) {
    if (!optionsList) return;

    const allOptions = buildOptionsFromCard(card);
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
      zone.addEventListener("dragover", event => {
        event.preventDefault();
        zone.classList.add("over");
      });

      zone.addEventListener("dragleave", () => {
        zone.classList.remove("over");
      });

      zone.addEventListener("drop", event => {
        event.preventDefault();
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
          if (allCorrect) {
            setFeedback("Richtig! Alle Felder korrekt zugeordnet.", true);
            if (nextBtn) nextBtn.disabled = false;
          } else {
            clearFeedback();
            if (nextBtn) nextBtn.disabled = true;
          }
        }
      });
    });

    optionsList.addEventListener("dragover", event => {
      event.preventDefault();
      optionsList.classList.add("over");
    });

    optionsList.addEventListener("dragleave", () => {
      optionsList.classList.remove("over");
    });

    optionsList.addEventListener("drop", event => {
      event.preventDefault();
      optionsList.classList.remove("over");

      const dragging = document.querySelector(".option-item.dragging");
      if (!dragging) return;

      optionsList.appendChild(dragging);

      if (level === "einfach") {
        clearFeedback();
        if (nextBtn) nextBtn.disabled = true;
      }
    });
  }

  function checkAllDropzonesCorrect(card) {
    const dropzones = Array.from(document.querySelectorAll(".dropzone"));

    const expectedGroups = {
      drogen: (card.drogenParts || []).map(normalizeText).filter(Boolean),
      familie: (card.familieParts || []).map(normalizeText).filter(Boolean),
      inhaltsstoffe: (card.inhaltsstoffe || []).map(normalizeText).filter(Boolean),
      wirkung: (card.wirkung || []).map(normalizeText).filter(Boolean),
      anwendung: (card.anwendung || []).map(normalizeText).filter(Boolean),
      warnhinweise: (card.warnhinweise || []).map(normalizeText).filter(Boolean)
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
    const filledDropzones = dropzones.filter(zone => zone.querySelector(".option-item")).length;

    if (filledDropzones < totalDropzones) return false;

    for (const zone of dropzones) {
      const group = zone.dataset.group;
      const item = zone.querySelector(".option-item");
      if (!group || !item) return false;

      const text = normalizeText(item.textContent || "");
      if (!givenGroups[group]) return false;
      givenGroups[group].push(text);
    }

    return Object.keys(expectedGroups).every(group =>
      arraysEqualAsSets(expectedGroups[group], givenGroups[group])
    );
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
        drogenfull: [normalizeText((card.drogenParts || []).join(" "))],
        familiefull: [normalizeText(
          (card.familieParts && card.familieParts.length >= 2)
            ? `${card.familieParts[0]} - ${card.familieParts[1]}`
            : (card.familieParts || []).join(" - ")
        )],
        inhaltsstoffe: (card.inhaltsstoffe || []).map(normalizeText),
        wirkung: (card.wirkung || []).map(normalizeText),
        anwendung: (card.anwendung || []).map(normalizeText),
        warnhinweise: (card.warnhinweise || []).map(normalizeText)
      };

      inputs.forEach(input => {
        input.classList.remove("correct", "incorrect");

        const key = input.dataset.key;
        const given = normalizeText(input.value);
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
        drogen: (card.drogenParts || []).map(normalizeText).filter(Boolean),
        familie: (card.familieParts || []).map(normalizeText).filter(Boolean),
        inhaltsstoffe: (card.inhaltsstoffe || []).map(normalizeText).filter(Boolean),
        wirkung: (card.wirkung || []).map(normalizeText).filter(Boolean),
        anwendung: (card.anwendung || []).map(normalizeText).filter(Boolean),
        warnhinweise: (card.warnhinweise || []).map(normalizeText).filter(Boolean)
      };

      dropzones.forEach(zone => {
        zone.classList.remove("correct", "incorrect");

        const group = zone.dataset.group;
        const item = zone.querySelector(".option-item");

        if (!group || !item) {
          allCorrect = false;
          return;
        }

        const text = normalizeText(item.textContent || "");
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
      setFeedback("Richtig! Gut gemacht.", true);
      if (nextBtn) nextBtn.disabled = false;
    } else {
      setFeedback("Einige Angaben sind noch nicht korrekt.", false);
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
      if (nextBtn) nextBtn.disabled = true;
      return;
    }

    const levelCards = getLevelCards(currentLevel);
    if (!levelCards.length) return;

    if (currentIndex >= levelCards.length - 1) {
      cardContainer.innerHTML = `
        <div class="card">
          <h2>Du hast alle Karten dieser Stufe geschafft.</h2>
          <p>Starte die Stufe gerne noch einmal in neuer Reihenfolge.</p>
        </div>
      `;
      if (cardCounter) cardCounter.textContent = "";
      if (checkBtn) checkBtn.classList.add("hidden");
      if (nextBtn) nextBtn.disabled = true;
      if (optionsContainer) optionsContainer.classList.add("hidden");
      return;
    }

    currentIndex += 1;
    renderCurrentCard();
  }

  // ===================
  // Inhaltsstoff-/Wirkungs-Quiz
  // ===================

  function buildQuestionPoolForType(type) {
    const map = new Map();

    cards.forEach(card => {
      const values = type === "ingredient" ? (card.inhaltsstoffe || []) : (card.wirkung || []);
      values.forEach(value => {
        const clean = (value || "").trim();
        const key = normalizeText(clean);
        if (!clean || !key) return;

        if (!map.has(key)) {
          map.set(key, {
            type,
            label: clean,
            correctCardIds: []
          });
        }

        const existing = map.get(key);
        if (!existing.correctCardIds.includes(card.id)) {
          existing.correctCardIds.push(card.id);
        }
      });
    });

    return Array.from(map.values()).filter(entry => entry.correctCardIds.length > 0);
  }

  function pickQuizOptions(correctIds, total = 4) {
    const allIds = cards.map(card => card.id);
    const correct = shuffleArray([...correctIds]);
    const result = [...correct];

    const wrongPool = shuffleArray(allIds.filter(id => !correctIds.includes(id)));

    for (const wrongId of wrongPool) {
      if (result.length >= total) break;
      result.push(wrongId);
    }

    return shuffleArray(result).slice(0, Math.max(total, correct.length));
  }

  function buildIngredientQuestionPool() {
    const ingredientQuestionsOnly = buildQuestionPoolForType("ingredient");
    const wirkungQuestionsOnly = buildQuestionPoolForType("effect");

    ingredientQuestions = shuffleArray([
      ...ingredientQuestionsOnly,
      ...wirkungQuestionsOnly
    ]);

    currentIngredientQuestionIndex = 0;
    updateIngredientProgress();
    updateCardCounter();
  }

  function renderIngredientQuestion() {
    clearFeedback();

    if (optionsContainer) optionsContainer.classList.add("hidden");
    if (checkBtn) {
      checkBtn.classList.remove("hidden");
      checkBtn.textContent = "Überprüfen";
    }
    if (nextBtn) {
      nextBtn.classList.remove("hidden");
      nextBtn.textContent = "Nächste Frage";
      nextBtn.disabled = true;
    }

    if (!ingredientQuestions.length) {
      cardContainer.innerHTML = `
        <div class="card">
          <h2>Keine Inhaltsstoff-/Wirkungsdaten vorhanden.</h2>
        </div>
      `;
      updateIngredientProgress();
      updateCardCounter();
      return;
    }

    const q = ingredientQuestions[currentIngredientQuestionIndex];
    if (!q) return;

    const optionIds = pickQuizOptions(q.correctCardIds, 4);

    const questionTitle = q.type === "ingredient" ? "Inhaltsstoff-Quiz" : "Wirkungs-Quiz";
    const questionText =
      q.type === "ingredient"
        ? `Welche Pflanzen haben den Inhaltsstoff „${escapeHtml(q.label)}“?`
        : `Welche Pflanzen wirken „${escapeHtml(q.label)}“?`;

    const checkboxHtml = optionIds.map(cardId => {
      const card = getCardById(cardId);
      return `
        <label class="quiz-option">
          <input type="checkbox" value="${escapeHtml(cardId)}">
          <span>${escapeHtml(card ? card.germanName : cardId)}</span>
        </label>
      `;
    }).join("");

    cardContainer.innerHTML = `
      <div class="card ingredient-quiz-card">
        <h2>${questionTitle}</h2>
        <p class="quiz-question">${questionText}</p>

        <div class="quiz-options" data-quiz-options>
          ${checkboxHtml}
        </div>

        <p class="small">
          Es können eine oder mehrere Antworten richtig sein.
        </p>
      </div>
    `;

    updateIngredientProgress();
    updateCardCounter();

    const checkboxes = Array.from(cardContainer.querySelectorAll('input[type="checkbox"]'));
    checkboxes.forEach(box => {
      box.addEventListener("change", () => {
        if (nextBtn) nextBtn.disabled = true;
        clearFeedback();
      });
    });
  }

  function checkIngredientQuestion() {
    const q = ingredientQuestions[currentIngredientQuestionIndex];
    if (!q) return;

    const checkboxes = Array.from(cardContainer.querySelectorAll('input[type="checkbox"]'));
    const selectedIds = checkboxes
      .filter(box => box.checked)
      .map(box => box.value);

    const normalizedSelected = [...selectedIds].sort();
    const normalizedCorrect = [...q.correctCardIds].sort();

    checkboxes.forEach(box => {
      const label = box.closest(".quiz-option");
      if (label) {
        label.classList.remove("correct", "incorrect");
      }

      const isCorrect = q.correctCardIds.includes(box.value);

      if (label) {
        if (isCorrect) {
          label.classList.add("correct");
        } else if (box.checked && !isCorrect) {
          label.classList.add("incorrect");
        }
      }

      box.disabled = true;
    });

    const isAllCorrect = arraysEqualAsSets(normalizedSelected, normalizedCorrect);

    if (isAllCorrect) {
      setFeedback("Richtig! Sehr gut.", true);
      if (nextBtn) nextBtn.disabled = false;
    } else {
      setFeedback("Noch nicht ganz richtig. Die korrekten Antworten sind markiert.", false);
      if (nextBtn) nextBtn.disabled = false;
    }
  }

  function nextIngredientQuestion() {
    if (!ingredientQuestions.length) return;

    if (currentIngredientQuestionIndex >= ingredientQuestions.length - 1) {
      cardContainer.innerHTML = `
        <div class="card">
          <h2>Du hast alle Inhaltsstoff- und Wirkungsfragen durchgearbeitet.</h2>
          <p>Du kannst das Quiz jederzeit neu starten.</p>
        </div>
      `;
      updateIngredientProgress();
      if (cardCounter) cardCounter.textContent = "";
      if (checkBtn) checkBtn.classList.add("hidden");
      if (nextBtn) nextBtn.disabled = true;
      return;
    }

    currentIngredientQuestionIndex += 1;
    renderIngredientQuestion();
  }

  // ===================
  // Suchmodus
  // ===================

  function renderCustomSearchResults(results, rawTerm) {
    if (!customSearchResults) return;

    if (!results.length) {
      customSearchResults.innerHTML = `
        <div class="card">
          <h2>Keine Treffer</h2>
          <p>Keine Treffer für „${escapeHtml(rawTerm)}“ gefunden.</p>
        </div>
      `;
      return;
    }

    customSearchResults.innerHTML = `
      <div class="card">
        <h2>Treffer (${results.length})</h2>
        <div class="search-result-list">
          ${results.map(([name, id]) => `
            <button class="search-result-btn" data-card-id="${escapeHtml(id)}">
              ${escapeHtml(name)}
            </button>
          `).join("")}
        </div>
      </div>
    `;

    const resultButtons = customSearchResults.querySelectorAll(".search-result-btn");
    resultButtons.forEach(button => {
      button.addEventListener("click", () => {
        const cardId = button.dataset.cardId;
        if (cardId) {
          openSingleCardQuizFromSearch(cardId);
        }
      });
    });
  }

  function runCustomSearch() {
    if (!customSearchInput || !customSearchResults) return;

    const termRaw = customSearchInput.value.trim();
    if (!termRaw) {
      customSearchResults.innerHTML = `
        <div class="card">
          <h2>Suche</h2>
          <p>Bitte ein Suchwort eingeben.</p>
        </div>
      `;
      return;
    }

    const term = normalizeText(termRaw);
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

      const hasMatch = fields.some(value => normalizeText(value).includes(term));
      if (hasMatch) {
        matches.set(card.germanName || card.id, card.id);
      }
    });

    const results = Array.from(matches.entries()).sort((a, b) =>
      a[0].localeCompare(b[0], "de")
    );

    renderCustomSearchResults(results, termRaw);
  }

  function openSingleCardQuizFromSearch(cardId) {
    const card = getCardById(cardId);
    if (!card) {
      if (customSearchResults) {
        customSearchResults.innerHTML = `
          <div class="card">
            <h2>Fehler</h2>
            <p>Diese Karte wurde nicht gefunden.</p>
          </div>
        `;
      }
      return;
    }

    showQuizLayout();

    fromSearchMode = true;
    searchCardId = card.id;
    currentMode = "cards";
    currentLevel = "mittel";

    if (levelSelect) levelSelect.value = currentLevel;
    if (backToSearchBtn) backToSearchBtn.classList.remove("hidden");
    if (nextBtn) {
      nextBtn.classList.remove("hidden");
      nextBtn.textContent = "Nächste Karte";
      nextBtn.disabled = true;
    }
    if (checkBtn) {
      checkBtn.classList.remove("hidden");
      checkBtn.textContent = "Überprüfen";
    }
    if (optionsContainer) optionsContainer.classList.remove("hidden");

    const levelCards = getLevelCards(currentLevel);
    const idx = levelCards.findIndex(entry => entry.id === card.id);

    if (idx === -1) {
      cardContainer.innerHTML = `
        <div class="card">
          <h2>${escapeHtml(card.germanName)}</h2>
          <p>Diese Karte ist in der aktuellen Stufe nicht verfügbar.</p>
        </div>
      `;
      if (cardCounter) cardCounter.textContent = "";
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

    if (checkBtn) {
      checkBtn.classList.remove("hidden");
      checkBtn.textContent = "Überprüfen";
    }

    currentLevel = ["einfach", "mittel", "schwer"].includes(mode) ? mode : "einfach";
    if (levelSelect) levelSelect.value = currentLevel;
    initLevel();
  }

  // ===================
  // Event-Listener
  // ===================

  modeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;
      startMode(mode);
    });
  });

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
      if (checkBtn) {
        checkBtn.classList.remove("hidden");
        checkBtn.textContent = "Überprüfen";
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
    customSearchInput.addEventListener("keydown", event => {
      if (event.key === "Enter") {
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