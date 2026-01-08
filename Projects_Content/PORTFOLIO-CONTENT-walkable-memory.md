# Portfolio-Content: Walkable Memory

---

## A) PROJECT CARD (für Overview)

**Titel:**  
Walkable Memory – Digitale Erinnerungstour Stalag VII-A

**Slug-Vorschlag:**  
walkable-memory-moosburg

**Jahr (oder Zeitraum):**  
WiSe 2025/2026

**Status:**  
In Arbeit

**Kategorie:**  
uiux

**1-Satz-Teaser (max 120 Zeichen):**  
App-Prototyp für eine selbstgeführte Walking-Tour zu 13 historischen Orten in Moosburg an der Isar.

**Kurzbeschreibung (2–3 Sätze, sachlich):**  
Walkable Memory ist ein interaktiver Hi-Fi-Prototyp für eine selbstgeführte Stadttour durch Moosburg, die an die Geschichte des Kriegsgefangenenlagers Stalag VII-A erinnert. Nutzer können 13 authentische Orte auf einer Karte auswählen, vor Ort Geschichten lesen, historische Fotos betrachten und AR-Overlays aktivieren. Das Projekt entstand im Rahmen eines Universitätsprojekts zur digitalen Erinnerungskultur und wurde aus einem Figma-Design in einen funktionsfähigen React-Prototyp übersetzt.

**Tags (max 6):**  
React, TypeScript, Figma, Vite, UX Design, Prototyping

**Links:**  
- GitHub: auf Anfrage  
- Demo/Live: auf Anfrage  
- Figma: [Walkable Memory Hi-Fi Prototype 5](https://www.figma.com/design/JRH47zvltUhwvxAj2QCLEF/Walkable-Memory-Hi-Fi-Prototype-5)

---

## B) CASE STUDY (für Detailseite)

### B1) Intro

**One-liner:**  
Eine digitale Walking-Tour-App, die vergessene Geschichte an authentischen Orten in Moosburg erlebbar macht.

**Kontext:**  
Das Projekt entstand im 3. Semester im Kurs "Research and Usability" an der Hochschule München. Ziel war es, ein UI/UX-Konzept für eine lokale Geschichts-App mit AR-Funktion zu entwickeln und als funktionsfähigen Prototyp umzusetzen. Der Fokus lag auf der Erkundung historischer Orte des ehemaligen Kriegsgefangenenlagers Stalag VII-A in Moosburg, die heute unter Wohnhäusern und Gewerbeflächen verborgen sind.

---

### B2) Problem & Ziele

**Ausgangssituation:**  
Die Geschichte des Stalag VII-A – eines der größten Kriegsgefangenenlager in Deutschland – ist in Moosburg heute kaum noch sichtbar. Originale Baracken wurden umgebaut, Gedenkstätten sind schwer auffindbar, und vielen Bewohnern ist die Historie ihres Stadtviertels unbekannt. Traditionelle Geschichtsvermittlung über Tafeln oder Museen erreicht vor allem jüngere Zielgruppen nicht, die an ihren Smartphones gewöhnt sind. Es fehlte ein niedrigschwelliges, mobiles Angebot, das vor Ort nutzbar ist und Geschichte mit modernen Mitteln erlebbar macht.

**Ziele:**  
- Historische Orte digital kartieren und mit Geschichten, Fotos und AR-Features verknüpfen  
- Eine benutzerfreundliche, selbsterklärende App-Oberfläche entwickeln, die keine Einweisung benötigt  
- Ein flexibles Erkundungskonzept schaffen: Nutzer können an jedem Ort starten und in beliebiger Reihenfolge erkunden  

**Constraints/Requirements:**  
- Funktionsfähiger Hi-Fi-Prototyp auf Basis eines Figma-Designs (keine Backend-Anbindung)  
- Responsive für Mobile (primär Smartphone-Nutzung vor Ort)  
- Mehrsprachigkeit (Deutsch/Englisch) für internationale Besucher  
- Technische Umsetzung mit React/TypeScript, ohne externe Datenbanken oder Server-Logik  

---

### B3) Meine Rolle

**Rolle:**  
UI/UX-Designer und Frontend-Developer

**Verantwortung:**  
- Übersetzung des Figma-Designs in funktionsfähigen React-Code  
- Implementierung der Navigation und State-Management-Logik (ohne externe Libraries wie Redux)  
- Entwicklung wiederverwendbarer Komponenten (Header, Karten, Modals, Navigation)  
- Integration einer Leaflet-Karte mit Custom Markers für alle 13 Orte  
- Aufbau der Bildergalerien, AR-Modal-Platzhalter und Audio-Feature-Interfaces  
- Responsive Anpassung und Polishing der Interaktionen  

**Zusammenarbeit:**  
Teamprojekt im Rahmen eines Uni-Kurses. Zusammenarbeit mit einem Mitarbeiter des Stalag-Museums in Moosburg, der historische Bilder und Archivmaterial bereitstellte. Innerhalb des Teams wurden Aufgaben in Research, Konzept, Design und Entwicklung aufgeteilt. Zusätzliche Fotos wurden vor Ort in Moosburg selbst aufgenommen.

---

### B4) Prozess

**1. Research und Problemanalyse**  
Zu Beginn recherchierten wir die Geschichte des Stalag VII-A und analysierten bestehende Geschichtsvermittlung in Moosburg. Die zentrale Frage war: Wie lässt sich vergessene Geschichte digital sichtbar machen? Wir identifizierten Zielgruppen (Touristen, Schulklassen, Geschichtsinteressierte, lokale Bewohner) und stellten fest, dass viele historische Orte heute unmarkiert und unbekannt sind.

**2. Konzeptentwicklung und Interviews**  
Wir fuhren nach Moosburg und führten Interviews mit Anwohnern, Museumsbesuchern und Passanten durch. Ziel war es, herauszufinden, wie Menschen mit lokaler Geschichte interagieren und welche Formate sie ansprechen. Parallel entwickelten wir verschiedene Konzeptideen: klassische Audio-Guides, interaktive Karten, AR-Overlays. Die Interviews zeigten: Nutzer wünschen sich Flexibilität (eigenes Tempo, freie Reihenfolge) und visuelle Unterstützung.

**3. Wireframes und Entscheidung für App + AR**  
Auf Basis der Interviews erstellten wir Low-Fidelity-Wireframes für verschiedene Szenarien. Wir entschieden uns für eine mobile Web-App mit AR-Simulation, da sie niedrigschwellig nutzbar ist (kein App-Store-Download), vor Ort funktioniert und historische Ebenen visuell überlagern kann. Die AR-Funktion sollte als Simulation bleiben (kein echtes WebXR), um technische Komplexität zu reduzieren.

**4. Hi-Fi-Design in Figma**  
Wir übersetzten die Wireframes in einen vollständigen Figma-Prototyp mit 7+ Screens (Landing, Map, Memory Moment, Discover, Location List, Completion, About). Das Design folgt einem Dark-Theme-Ansatz mit türkisen und rosafarbenen Akzenten. Besonderes Augenmerk lag auf der Lesbarkeit von Story-Texten, der Intuitivität der Karten-Navigation und der visuellen Hervorhebung von AR-Features.

**5. Technische Umsetzung**  
Anschließend übersetzten wir das Figma-Design in einen funktionsfähigen React-Prototyp (Vite, TypeScript, Radix UI). Die 13 historischen Orte wurden mit GPS-Koordinaten, Bildern (bereitgestellt vom Stalag-Museum und selbst aufgenommen) und Geschichten modelliert. Die Leaflet-Karte integriert Custom Markers, der AR-Modal simuliert Kamera-Overlays. State Management erfolgt über React Hooks ohne externe Libraries.

**6. Peer Testing und Iteration (laufend)**  
Aktuell führen wir Peer-Testing mit Kommilitonen durch, um Usability-Probleme zu identifizieren. Getestet werden Navigation, Verständlichkeit der Inhalte und AR-Interaktion. Die Ergebnisse werden genutzt, um den Prototyp iterativ zu verbessern. Das Projekt ist noch in Arbeit.

---

### B5) Umsetzung / Lösung

**Kernfeatures:**  
- **Interaktive Karte:** Leaflet-basierte Übersichtskarte mit 13 Markern, Dark Theme, Custom Icons und User-Position-Simulation  
- **13 historische Orte:** Jeder Ort hat Titel, Teaser, Story, historischen Kontext, Bilder, GPS-Koordinaten und AR-Instruktionen  
- **Memory Moment Screens:** Detailseiten mit Bildergalerien, scrollbarem Storytelling, AR-Button und Audio-Feature-Integration  
- **Flexibles Entdecken:** Nutzer können an jedem Ort starten, in beliebiger Reihenfolge erkunden, Fortschritt wird angezeigt  
- **Mehrsprachigkeit:** Deutsch/Englisch toggle im Header (translations.ts mit zentralen Übersetzungen)  
- **AR-Modal-Platzhalter:** Simuliert AR-Ansicht mit Kamera-Mock und historischen Overlays (echte AR würde native App/WebXR erfordern)  
- **Completion-Screen:** Nach Besuch mehrerer Orte kann die Tour abgeschlossen und neu gestartet werden  

**Wichtige technische Entscheidungen:**  
- **Vite statt Create-React-App:** Schnelleres Build-Tool, bessere Developer Experience, kleinere Bundle-Größe  
- **TypeScript:** Typsicherheit für Location-Objekte, Page-States und Component-Props reduziert Fehler im Prototyp  
- **Radix UI:** Barrierefreie, ungestylte Komponenten (Dialog, Accordion, etc.) als Basis – schneller als alles von Grund auf zu bauen  
- **Leaflet für Karten:** Open-Source-Alternative zu Google Maps, keine API-Keys nötig für Prototyp, einfache Integration  
- **Kein Backend/Database:** Alle Daten in App.tsx hardcoded – für einen Prototyp ausreichend, produktionsreif wäre eine CMS-Integration nötig  

**Architektur:**  
Die App folgt einem einfachen Single-Page-Ansatz: App.tsx ist die zentrale Orchestrierungsebene, die per State den aktuellen Screen steuert (landing → map → memory → discover). Jeder Screen ist eine eigenständige Komponente, die Props für Daten (locations, currentLocation) und Callbacks (onSelectLocation, onContinue) erhält. Das translations.ts-Modul exportiert alle Texte in DE/EN als Objekt-Lookup. Custom Hooks (wie useMobile aus components/ui/) ermöglichen responsive Anpassungen. Das Design-System basiert auf Tailwind-Klassen mit Custom-Colors (#7BA8A3 für Türkis, #E8B4A8 für Salmon). Animationen sind per CSS @keyframes und Tailwind-Animation-Utilities realisiert. Die Ordnerstruktur ist flach (src/components/, src/utils/), da der Prototyp nicht auf Skalierung ausgelegt ist, sondern auf Demonstration und User-Testing.

**Optional: Code-Snippet-Idee**  
Die MapPage-Komponente ([MapPage.tsx](src/components/MapPage.tsx), Zeilen 40-95) zeigt die Leaflet-Integration: dynamisches Laden der Library, Custom Marker mit divIcon, Event-Handler für Marker-Clicks. Das demonstriert den Hybrid-Ansatz zwischen React und externen Libraries.

---

### B6) Design & Screens (mit Bildplan)

**Screens zur Dokumentation (vorgeschlagene Reihenfolge):**

1. **screen-01-landing.png**  
   - **Woher:** Landing-Screen beim ersten Laden (App.tsx state: "landing")  
   - **Caption:** Einstiegsscreen mit animierten Feature-Tags und CTA-Button  
   - **Alt-Text:** Dunkler Screen mit großem Titel "Ein Ort. Eine Geschichte. Eine Minute." und scrollenden Tags wie "AR-Ansichten" und "Audio-Geschichten"

2. **screen-02-map-overview.png**  
   - **Woher:** Map-Screen nach Klick auf "Geschichte starten" (App.tsx state: "map")  
   - **Caption:** Interaktive Karte mit 13 Orten und User-Position, Dark Theme  
   - **Alt-Text:** Leaflet-Karte von Moosburg mit weißen Marker-Pins und türkisem User-Standort-Punkt

3. **screen-03-location-selection.png**  
   - **Woher:** Map-Screen, nachdem ein Marker angeklickt wurde (selectedLocationIndex !== null)  
   - **Caption:** Bottom-Sheet mit Ort-Details und "Ort ansehen"-Button  
   - **Alt-Text:** Karte mit aufgeklappter Karte am unteren Bildschirmrand, zeigt Titel, Teaser und Gehzeit

4. **screen-04-memory-moment.png**  
   - **Woher:** Memory Moment Screen nach Ort-Auswahl (App.tsx state: "memory")  
   - **Caption:** Detailseite mit Bildergalerie, Story-Text und AR-Button im Header  
   - **Alt-Text:** Scrollbare Seite mit historischem Foto, Story-Text und türkisem AR-Button oben rechts

5. **screen-05-ar-modal.png**  
   - **Woher:** Memory Moment Screen, nach Klick auf AR-Button (showAR: true)  
   - **Caption:** AR-Modal mit Kamera-Simulation und historischem Overlay  
   - **Alt-Text:** Vollbild-Modal mit Kamera-Platzhalter und eingeblendeten historischen Gebäudestrukturen

6. **screen-06-discover.png**  
   - **Woher:** Discover-Screen nach "Weiter erkunden" (App.tsx state: "discover")  
   - **Caption:** Übersicht der nächsten Orte mit Fortschrittsanzeige  
   - **Alt-Text:** Liste von Ortskarten mit Thumbnails, Teaser und "Ort ansehen"-Buttons, oben Badge mit "3 von 13 erkundet"

7. **screen-07-completion.png**  
   - **Woher:** Completion-Screen nach "Rundgang abschließen" (App.tsx state: "completion")  
   - **Caption:** Abschlussscreen mit Zusammenfassung und Option zum Neustart  
   - **Alt-Text:** Zentrierter Screen mit "Glückwunsch"-Titel, Fortschrittsanzeige und "Tour neu starten"-Button

---

### B7) Ergebnisse / Outcome

**Ergebnis:**  
Der Prototyp ist funktionsfähig und demonstriert alle wesentlichen User Flows: Onboarding, Karten-Navigation, Ort-Details, AR-Simulation und Tour-Abschluss. Die App ist responsive und auf Smartphones nutzbar, die Sprache kann per Toggle umgeschaltet werden. Das laufende Peer-Testing mit Kommilitonen liefert erste Eindrücke: Die Verbindung von historischem Content und modernen UX-Patterns (Karten, AR-Modals, scrollende Tags) wird als gelungen wahrgenommen. Die technische Umsetzung zeigt, wie ein komplexes Figma-Design systematisch in React übersetzt werden kann.

**Impact:**  
Das Projekt zeigt den vollständigen UX-Research-Prozess: von Interviews und Konzeptentwicklung über Wireframes bis zum funktionsfähigen Hi-Fi-Prototyp. Die Zusammenarbeit mit dem Stalag-Museum ermöglichte authentische historische Inhalte. Die modulare Struktur und Verwendung von TypeScript machen den Code wartbar und erweiterbar – etwa für Backend-Anbindung (CMS für Ort-Daten) oder erweiterte AR-Features. Aus UX-Sicht entstand ein niedrigschwelliges Konzept, das verschiedene Zielgruppen (Touristen, Schulklassen, lokale Bewohner) anspricht und ohne Tutorial nutzbar ist.

---

### B8) Learnings

**Learnings:**

1. **State Management für Multi-Screen-Apps:** Der Page-State-Ansatz (string enum: "landing" | "map" | ...) funktioniert gut für Prototypen, stößt aber bei komplexeren Navigationsmustern an Grenzen. Für eine produktionsreife App wäre ein Router (React Router) sinnvoller.

2. **Leaflet in React:** Das dynamische Nachladen von Leaflet (Script-Tag im useEffect) ist eine pragmatische Lösung für Prototypen, aber fehleranfällig. Eine dedizierte React-Leaflet-Bibliothek (react-leaflet) wäre stabiler.

3. **AR-Simulation vs. echtes AR:** Der AR-Modal ist ein Mock – echtes AR würde WebXR oder native Apps (ARKit/ARCore) erfordern. Für User-Testing war der Mock ausreichend, aber Nutzer erwarten echte Kamera-Overlays.

4. **Hardcodierte Daten:** Alle 13 Orte sind in App.tsx hardcoded. Das macht Änderungen mühsam. Ein JSON-File oder CMS-Integration wäre flexibler und würde Content-Updates ohne Code-Changes ermöglichen.

5. **Barrierefreiheit:** Radix UI bringt gute Accessibility-Basics mit (Keyboard-Navigation, ARIA-Attribute), aber Bilder brauchen Alt-Texte und die Karte braucht Screenreader-Unterstützung. Das wurde im Prototyp vernachlässigt.

6. **Performance:** Das gleichzeitige Laden aller Bilder (13 Orte × mehrere Fotos) verlangsamt den initialen Load. Lazy Loading oder progressive Image-Loading wären für eine Live-App essenziell.

**Nächstes sinnvolles Improvement:**  
Eine Backend-Integration mit CMS (z.B. Strapi oder Contentful), um Orte, Bilder und Texte redaktionell zu pflegen. Außerdem echte GPS-Tracking-Logik, um Nutzer automatisch zum nächsten Ort zu navigieren, und Offline-Support via Service Worker für Nutzung ohne Mobilfunknetz vor Ort.

---

## D) QUELLENHINWEISE (Repo-Belege)

**README.md:**  
- Projekttitel: "Walkable Memory Hi-Fi Prototype 5"  
- Referenz auf Figma-Design: [Link](https://www.figma.com/design/JRH47zvltUhwvxAj2QCLEF/Walkable-Memory-Hi-Fi-Prototype-5)  
- Setup-Anleitung: npm install, npm run dev  

**package.json:**  
- Tech-Stack: React 18.3.1, TypeScript, Vite 6.3.5  
- UI-Libraries: Radix UI (diverse Komponenten), Tailwind (via tailwind-merge/clsx)  
- Weitere Dependencies: Leaflet (Karten), Lucide (Icons), Embla Carousel (Bildergalerien)  

**src/App.tsx (Zeilen 1-200):**  
- Zentrale State-Management-Logik (currentPage, currentLocationIndex, visitedLocations, language)  
- Location-Datenmodell mit 13 Orten (Titel, Teaser, Story, GPS, Bilder, AR-Instruktionen)  
- Beispiel-Orte: Heimatmuseum, Stalag-Gedenkplatz, Franzosenfriedhof, Sabathielbaracke  

**src/components/LandingPage.tsx:**  
- Animierter Einstiegsscreen mit scrollenden Feature-Tags (CSS Keyframes)  
- Mehrsprachigkeit (DE/EN toggle)  
- CTA-Button "Geschichte starten"  

**src/components/MapPage.tsx:**  
- Leaflet-Integration mit Custom Markers  
- Dark Theme (CartoDB)  
- User-Position-Simulation  

**src/components/MemoryMomentPage.tsx:**  
- Detailseiten mit Bildergalerien, Story-Text, AR-Button  
- Audio-Modal und AR-Modal-Integration  

**src/components/DiscoverPage.tsx:**  
- Übersicht der nächsten Orte  
- Fortschrittsanzeige ("3 von 13 erkundet")  
- "Rundgang abschließen"-Button  

**src/components/AboutPage.tsx:**  
- Projektbeschreibung: "Geschichte vor Ort erleben"  
- Features: Vor Ort erleben, Digital entdecken, Erinnerung bewahren  

**src/utils/translations.ts:**  
- Zentrales Übersetzungs-Objekt für DE/EN  
- Übersetzungen für Header, Navigation, Screens  

**src/Attributions.md:**  
- Credits für shadcn/ui (MIT License)  
- Credits für Unsplash-Fotos  

**Externe Quellen:**  
- Historische Bilder: Stalag-Museum Moosburg (Mitarbeiter-Kooperation)  
- Zusätzliche Fotos: Eigene Aufnahmen vor Ort in Moosburg  
- Texte: Recherche basierend auf Museum-Material und historischen Quellen  

**Ordnerstruktur:**  
- src/components/: Alle Screen-Komponenten + wiederverwendbare UI-Elemente (components/ui/)  
- src/utils/: Hilfsfunktionen (translations.ts)  
- src/styles/: globals.css  
- src/guidelines/: Guidelines.md (Leitfaden für AI-generierte Komponenten)  