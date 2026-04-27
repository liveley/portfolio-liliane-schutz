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
Abgeschlossen

**Kategorie:**  
uiux

**Projektart:**  
Uni-Projekt

**1-Satz-Teaser (max 120 Zeichen):**  
Web-App-Prototyp für eine selbstgeführte Erinnerungstour zu 13 historischen Orten in Moosburg an der Isar.

**Kurzbeschreibung (2–3 Sätze, sachlich):**  
Walkable Memory ist ein interaktiver Hi-Fi-Prototyp für eine selbstgeführte Stadttour durch Moosburg, die an die Geschichte des Kriegsgefangenenlagers Stalag VII-A erinnert. Nutzer können 13 Orte auf einer Karte auswählen, vor Ort Geschichten lesen, historische Fotos ansehen sowie AR- und Audio-Ansichten aufrufen. Das Projekt wurde im Rahmen eines Uni-Projekts konzipiert, gestaltet und aus einem Figma-Design in einen funktionsfähigen React/Vite-Prototyp übersetzt.

**Tags (max 6):**  
React, TypeScript, Vite, Leaflet, Figma, UX Design

**Meine Rolle:**  
UI/UX-Design und Frontend-Entwicklung des funktionsfähigen Prototyps.

**Links:**  
- GitHub: nicht öffentlich  
- Demo/Live: keine öffentliche Demo  
- Figma: [Walkable Memory Hi-Fi Prototype 5](https://www.figma.com/design/JRH47zvltUhwvxAj2QCLEF/Walkable-Memory-Hi-Fi-Prototype-5)

---

## B) CASE STUDY (für Detailseite)

### B1) Intro

**One-liner:**  
Eine digitale Walking-Tour-App, die die Geschichte des Stalag VII-A an realen Orten in Moosburg zugänglich macht.

**Kontext:**  
Das Projekt entstand im 3. Semester im Kurs „Research and Usability“ an der Hochschule München. Ziel war es, Erinnerungskultur in ein mobiles, niedrigschwelliges Nutzungserlebnis zu übersetzen und als klickbaren Hi-Fi-Prototyp technisch umzusetzen. Denn die historischen Orte des ehemaligen Kriegsgefangenenlagers Stalag VII-A in Moosburg, sind heute unter Wohnhäusern und Gewerbeflächen verborgen.

**Kurzfazit:**  
Das Ergebnis ist ein abgeschlossener, funktionsfähiger Frontend-Prototyp mit vollständigem Tour-Flow, Kartenlogik und zweisprachiger Oberfläche.

---

### B2) Problem & Ziele

**Ausgangssituation:**  
Die Geschichte des Stalag VII-A – eines der größten Kriegsgefangenenlager in Deutschland – ist in Moosburg heute kaum noch sichtbar. Originale Baracken wurden umgebaut, Gedenkstätten sind schwer auffindbar, und vielen Bewohnern ist die Historie ihres Stadtviertels unbekannt. Traditionelle Geschichtsvermittlung über Tafeln oder Museen erreicht vor allem jüngere Zielgruppen nicht, die an ihren Smartphones gewöhnt sind. Es fehlte ein niedrigschwelliges, mobiles Angebot, das vor Ort nutzbar ist und Geschichte mit modernen Mitteln erlebbar macht.
**Ziele:**  
- 13 historische Orte in einer mobilen, selbsterklärenden Tour erfahrbar machen  
- Geschichten, Kontext, Bilder sowie AR-/Audio-Interaktion pro Ort bündeln  
- Flexible Nutzung ermöglichen: freier Einstieg oder geführte Route

**Constraints/Requirements:**  
- Funktionsfähiger Hi-Fi-Prototyp auf Basis eines Figma-Designs (keine Backend-Anbindung)  
- Mobile-first Nutzung vor Ort, responsive umgesetzt  
- Mehrsprachigkeit (Deutsch/Englisch)für internationale Besucher  
- Frontend-Realisierung mit React/TypeScript/Vite

---

### B3) Meine Rolle

**Rolle:**  
UI/UX-Designer und Frontend-Developer

**Verantwortung:**  
- Übersetzung des Figma-Designs in funktionsfähige React-Komponenten  
- Modellierung der Ortsdaten inkl. Story, Kontext, Koordinaten und Medien  
- Implementierung des Seitenflusses (Landing, Karte, Detail, Liste, Completion, About)  
- Integration der Karte mit Marker-Interaktion und optionaler Routenberechnung  
- Umsetzung von AR- und Audio-Modal als interaktive Prototyp-Features  
- Responsives UI-Polishing und Iteration entlang des Test-Feedbacks

**Zusammenarbeit:**  
Teamprojekt mit Aufteilung in Research, Konzept, Design und Entwicklung. Es fanden Interviews mit lokalen Personen und Museumsbezug statt; historische Materialien und Ortsbezüge wurden in die Inhalte überführt. Mein Schwerpunkt lag auf UX-Übersetzung in Interface-Logik und technischer Umsetzung des klickbaren Prototyps.

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

**6. Testing, Iteration und Abschluss**  
Feedback aus Testläufen floss in Struktur, Texte und Interaktionsdetails ein. Der Prototyp wurde funktional abgeschlossen und als Portfolio-fähige Projektarbeit konsolidiert. KI-Tools wurden punktuell zur Unterstützung bei Formulierung und Feinschliff genutzt; Konzeption und Umsetzung lagen im Projektteam.

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
- **React + Vite:** schneller Prototyping-Stack mit schlanker Build-Pipeline  
- **Zentraler App-State statt Router:** klare, direkte Steuerung des Tour-Flows  
- **Leaflet für Kartenfunktion:** flexible Marker-/Routenlogik ohne proprietäre Maps-Integration  
- **Statische Datenhaltung im Frontend:** hoher Iterationstempo im Prototypstadium

**Architektur:**  
Die Anwendung ist als Single-Page-App aufgebaut. In `App.tsx` werden Seitenzustand, aktuelle Ortsauswahl, Besuchsfortschritt und Sprache verwaltet. Die Hauptscreens (`LandingPage`, `MapPage`, `MemoryMomentPage`, `LocationListPage`, `CompletionPage`, `AboutPage`) sind als getrennte Komponenten organisiert und über Props/Callbacks verbunden. Ortsdaten liegen in einem zentralen Datenarray mit einheitlichem Typmodell (Titel, Story, Koordinaten, Medien, AR-/Audio-Texte). Die Leaflet-Map wird in der Kartenkomponente initialisiert, Marker dynamisch aus den Ortsdaten erzeugt und Interaktionen in den App-Flow zurückgespielt. Für Mehrsprachigkeit kommt ein translations-Objekt mit DE/EN-Keys zum Einsatz. Styling und UI-Verhalten basieren auf Utility-CSS, ergänzt durch Radix-UI-Bausteine.

**Technische Herausforderungen:**  
- Lifecycle-sichere Integration einer extern geladenen Kartenbibliothek  
- Konsistente State-Übergänge über mehrere Screens ohne Router-Stack  
- Balance zwischen historischer Informationsdichte und mobilem Lesefluss  
- Klare Kennzeichnung von Simulation (AR/Audio) im Prototypkontext

**Code-Snippet-Idee:**  
`src/components/MapPage.tsx` eignet sich gut als Portfolio-Ausschnitt, weil dort Kartenintegration, Marker-Interaktion und Route-Berechnung in einer zentralen UI-Logik zusammenkommen.

---

### B6) Design & Screens (mit Bildplan)

1. **Dateiname-Vorschlag:** `screen-01-landing.png`  
   **Wo aufnehmen / erstellen:** Startzustand (`landing`)  
   **Was zeigen:** Einstieg, Sprachumschaltung, klare Haupt-CTA  
   **Caption:** Einstieg in die Tour mit klarer Handlungsführung.  
   **Alt-Text:** Startscreen mit Titel und Button „Geschichte starten“.

2. **Dateiname-Vorschlag:** `screen-02-map-overview.png`  
   **Wo aufnehmen / erstellen:** Kartenansicht ohne selektierten Marker  
   **Was zeigen:** Gesamtüberblick über die 13 Orte  
   **Caption:** Karte als primäre Navigation für die historische Tour.  
   **Alt-Text:** Kartenansicht von Moosburg mit mehreren Ortsmarkern.

3. **Dateiname-Vorschlag:** `screen-03-route-mode.png`  
   **Wo aufnehmen / erstellen:** Routenmodus nach Startpunktwahl  
   **Was zeigen:** nummerierte Reihenfolge und Verbindungslogik  
   **Caption:** Optionaler geführter Modus mit automatisch berechneter Reihenfolge.  
   **Alt-Text:** Karte mit nummerierten Wegpunkten und Route.

4. **Dateiname-Vorschlag:** `screen-04-memory-moment.png`  
   **Wo aufnehmen / erstellen:** Detailseite eines Ortes (`memory`)  
   **Was zeigen:** Storytext, Kontextbereich, Medien und AR-Zugang  
   **Caption:** Ortsdetailseite mit inhaltlichem Fokus und Medienzugriff.  
   **Alt-Text:** Detailansicht eines historischen Ortes mit Text und AR-Button.

5. **Dateiname-Vorschlag:** `screen-05-list-progress.png`  
   **Wo aufnehmen / erstellen:** `LocationListPage` mit bereits besuchten Orten  
   **Was zeigen:** Fortschritt und alternative Navigation zur Karte  
   **Caption:** Listenansicht als schneller Zugriff mit Besuchsstatus.  
   **Alt-Text:** Ortsliste mit Vorschaubildern und markierten besuchten Orten.

6. **Dateiname-Vorschlag:** `screen-06-completion.png`  
   **Wo aufnehmen / erstellen:** `completion`-Screen  
   **Was zeigen:** Abschlusszustand und Neustartoption  
   **Caption:** Abschlussansicht nach Tourdurchlauf mit Restart-Funktion.  
   **Alt-Text:** Abschlussseite mit Anzahl erkundeter Orte und Neustart-Button.

---

### B7) Ergebnisse / Outcome

**Ergebnis:**  
Walkable Memory liegt als abgeschlossener, klickbarer Web-Prototyp mit vollständigem User-Flow vor. Die Anwendung bündelt historische Inhalte, Ortsbezug und Tour-Navigation in einer klaren mobilen Oberfläche. Das Projekt diente dazu, ein reales Erinnerungsthema von Research und Konzept bis zur funktionsfähigen UI-Implementierung praktisch umzusetzen.

---

### B8) Learnings

**Learnings:**

1. **State-Flow früh sauber definieren:** Bei Multi-Screen-Prototypen spart ein klarer Seitenzustand später viel Refactoring.  
2. **Kartenlogik ist UX-kritisch:** Markerzustände, Auswahlfeedback und Routing beeinflussen die Verständlichkeit der Tour stark.  
3. **Informationsdichte steuern:** Historische Inhalte brauchen Kontext, müssen mobil aber in gut lesbare Abschnitte übersetzt werden.  
4. **Simulation transparent machen:** AR-/Audio-Mocks sind für Prototyping sinnvoll, sollten aber klar von Produktfeatures abgegrenzt sein.  
5. **Struktur für spätere Skalierung mitdenken:** Statische Daten beschleunigen Prototyping, ein späterer Schritt Richtung CMS ist sinnvoll.
---
---

## D) QUELLENHINWEISE (Repo-Belege)

- `README.md`: Projektkontext, Setup, Figma-Referenz  
- `package.json`: Stack, Dependencies, Build-/Run-Skripte  
- `src/App.tsx`: zentrale App-Logik, Ortsdaten, Navigation, Statusverwaltung  
- `src/components/MapPage.tsx`: Kartenintegration, Markerlogik, Routenmodus  
- `src/components/MemoryMomentPage.tsx`: Detailansicht, AR-/Audio-Trigger  
- `src/components/ARModal.tsx`: AR-Interaktionsansicht  
- `src/components/AudioModal.tsx`: Audio-Interaktion  
- `src/components/LocationListPage.tsx`: Listenansicht und Fortschritt  
- `src/components/CompletionPage.tsx`: Abschluss-Flow  
- `src/utils/translations.ts`: DE/EN-Übersetzungsstruktur  
- `src/assets/`: visuelle Projektassets  
- `PORTFOLIO-CONTENT-walkable-memory.md`: bestehende Projekttextbasis

---

## E) OPTIONAL: COPY-PASTE-VERSION FÜR DATENSTRUKTUR

```ts
{
  title: "Walkable Memory – Digitale Erinnerungstour Stalag VII-A",
  slug: "walkable-memory-moosburg",
  year: "WiSe 2025/2026",
  status: "Abgeschlossen",
  category: "uiux",
  projectType: "Uni-Projekt",
  teaser: "Web-App-Prototyp für eine selbstgeführte Erinnerungstour zu 13 historischen Orten in Moosburg.",
  description: "Interaktiver React/Vite-Prototyp mit Kartenansicht, Ortsstories, AR-/Audio-Interaktionen und Tour-Fortschritt.",
  tags: ["React", "TypeScript", "Vite", "Leaflet", "Figma", "UX Design"],
  role: "UI/UX-Design und Frontend-Entwicklung des funktionsfähigen Prototyps.",
  links: {
    github: "nicht öffentlich",
    live: "keine öffentliche Demo",
    figma: "https://www.figma.com/design/JRH47zvltUhwvxAj2QCLEF/Walkable-Memory-Hi-Fi-Prototype-5"
  }
}
```
