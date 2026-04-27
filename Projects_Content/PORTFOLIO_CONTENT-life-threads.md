# Portfolio Content: Life Threads

---

## A) PROJECT CARD (für Overview)

**Titel:**  
Life Threads – Persönliche Daten als Scrollytelling-Visualisierung

**Slug-Vorschlag:**  
life-threads-data-vis

**Jahr:**  
WiSe 2025/26

**Status:**  
Abgeschlossen

**Kategorie:**  
data

**Projektart:**  
Uni-Projekt

**1-Satz-Teaser (max 120 Zeichen):**  
Interaktive Datenstory über Schlaf, Bewegung, Lesen und Uni-Routinen im Jahr 2025.

**Kurzbeschreibung (2–3 Sätze, sachlich):**  
Life Threads visualisiert ein Jahr persönlicher Gesundheits- und Aktivitätsdaten als interaktive Scrollytelling-Erfahrung. Das Projekt verbindet Schlaf, Sport, Lesen und Studienalltag in einer zusammenhängenden Erzählung aus Jahresmustern, Tagesrhythmen und Phasenvergleichen. Technisch basiert die Umsetzung auf SvelteKit, TypeScript, D3-Utilities sowie Canvas/SVG-Visualisierungen und zeigt es die Geschichte von Gewohnheitsbildung, Überlastung und der Suche nach Balance.

**Tags (max 6):**  
SvelteKit, TypeScript, D3, Scrollytelling, Data Visualization, Canvas

**Meine Rolle:**  
Konzeption, Datenaufbereitung, Visual Design und Implementierung (Einzelprojekt)

**Links:**
- GitHub: auf Anfrage
- Demo/Live: auf Anfrage
- Optional: Figma/Case-Study-Doc: —

---

## B) CASE STUDY (für Detailseite)

### B1) Intro

**One-liner:**  
Eine interaktive Datenvisualisierung, die persönliche Routinen aus 2025 in eine scroll-basierte visuelle Erzählung übersetzt.

**Kontext:**  
Universitätsprojekt im Rahmen des Kurses "Information Design". Ziel war, heterogene Alltagsdaten nicht als isoliertes Dashboard, sondern als nachvollziehbare Geschichte aus Mustern, Brüchen und Anpassungen darzustellen.

**Kurzfazit:**  
Die Anwendung ist im Abgabe-Stand abgeschlossen und zeigt mehrere Perspektiven auf dieselben Daten: Jahr, Tagesstruktur, Sport-Mix und Phasenvergleich.

---

### B2) Problem & Ziele

**Ausgangssituation:**  
Die Ausgangsdaten lagen als getrennte CSV-Exporte vor (Health, Reading, Uni) und beantworteten primär Einzelfragen pro Quelle. Was fehlte, war eine konsistente Sicht auf Zusammenhänge zwischen Schlaf, Aktivität, Lesen und Studienalltag. Klassische Dashboard-Visualisierungen der jeweiligen Apps zeigen Zahlen und typische Graphen, aber nicht den Kontext: Warum gab es im August eine Sportpause? Wie hat sich der Schlafrhythmus über Phasen verändert? Die Herausforderung war, aus fragmentierten Datenpunkten eine kohärente, explorative Erzählung zu schaffen, die sowohl präzise als auch emotional zugänglich ist.

**Ziele:**
- Mehrere persönliche Datenquellen in ein konsistentes Datenmodell und eine gemeinsame Story überführen
- Ein scrollgesteuertes Format entwickeln, das vom Überblick bis zur Detailanalyse führt
- Muster über Zeiträume und Phasen visuell klar vergleichbar machen

**Constraints/Requirements:**
- CSV-basierte Datenquellen ohne API-Backend
- Statisches Deployment mit SvelteKit (`adapter-static`)
- Saubere Zeitlogik für lokale Tagesgrenzen und Mitternachtsübergänge
- Kein externes Scrollytelling-Framework (z.B. Scrollama) – alles selbst gebaut

---

### B3) Meine Rolle

**Rolle:**  
Solo-Entwicklung (Konzeption bis Umsetzung)

**Verantwortung:**
- Datenlade- und Parsing-Logik für Aktivitäten, Schlaf, Lesen und Semesterpläne
- Modellierung von Phasen- und Step-State über Svelte Stores
- Implementierung und Integration von `ScrollySection` / `ScrollyStep`
- Entwicklung zentraler Views (Year-at-a-Glance, Day Clock, Sunburst, Phase Explorer)
- Pflege von Styling-System und Responsive-Verhalten
- Erstellung technischer Dokumentation und Projekt-Write-up
- KI-Tools punktuell als Entwicklungsunterstützung genutzt

**Zusammenarbeit:**  
Einzelprojekt. Feedback durch Dozierenden und Peer-Reviews im Kurs.

---

### B4) Prozess

**Schritt 1: Datenbasis strukturieren**  
CSV-Quellen wurden über Parser normalisiert und in typsichere Strukturen überführt. Dabei wurden unterschiedliche Formate, Kategorien und Datenqualität konsistent behandelt.

**Schritt 2: Narrative Phasen definieren**  
Für 2025 wurden drei Zeitphasen als wiederkehrende Erzähl- und Filterlogik festgelegt. Diese Phasen steuern sowohl Texte als auch Visualisierungszustände.

**Schritt 3: Scrollytelling-Architektur aufbauen**  
Ein wiederverwendbares Pattern aus Sticky-Bereich, Triggern und aktivem Step wurde umgesetzt. `IntersectionObserver` steuert den aktiven Zustand, den die Views reaktiv übernehmen.

**Schritt 4: Visualisierungen je Fragestellung entwickeln**  
Jahresansicht, Day-Clock, Sunburst und Explorer wurden auf unterschiedliche Analyseperspektiven ausgerichtet und über Stores miteinander synchronisiert.

**Schritt 5: Responsive Feinschliff und Stabilisierung**  
Für kleinere Viewports wurde auf gestapelte Darstellung umgestellt. Spacing-, Masking- und Sticky-Details wurden iterativ angepasst, um Lesbarkeit und Scrollfluss zu verbessern.

---

### B5) Umsetzung / Lösung

**Kernfeatures:**
- **Scrollytelling-Engine:** Selbstgebautes System mit `ScrollySection` + `ScrollyStep`, IntersectionObserver-basiert, sticky Charts mit fließenden Text-Transitions (280ms cross-fade)
- **Year at a Glance:** 365-Tage-Kalender-Heatmap (Canvas), zeigt dominante Aktivität pro Tag (Sleep/Sport/Reading), 4 narrative Schritte durch drei Phasen
- **Day Clock Atlas:** 24-Stunden-Radial-Clock (Canvas), visualisiert typische Tagesabläufe (Sleep, Sport, Uni) pro Phase, 4 Schritte mit Phase-Vergleich
- **Weekly Activity Flow:** Stacked Area Chart, zeigt wöchentliche Sport-Intensität über das Jahr, 4 Schritte mit Annotations-Overlay (z.B. "Injury Break")
- **Phase Explorer:** Interaktive Dashboard-Sektion mit Phase-Vergleich (Sleep-Statistiken, Sport-Breakdown, Activity Mix), freie Exploration ohne Scrollytelling
- **Responsive Design:** Desktop (> 1200px) mit Sticky, Tablet (900-1200px) mit adjustiertem Spacing, Mobile (< 900px) gestackt
- **Data Pipeline:** CSV-Parser für Samsung Health (Activity-ID-Mapping: Running, Cycling, Strength, Pilates, Stretching, Swimming), StoryGraph (nur "read"-Status + valid finish date), Uni (Recurring vs. Date-specific)

**Wichtige technische Entscheidungen:**
- Zentrale Svelte Stores für Phasen-, Step- und Datenzustände
- Eigene Scrollytelling-Komponenten statt externer Framework-Abhängigkeit
- Statischer Build mit lokal ausgelieferten Datenfiles
- Kombination aus D3-Hilfsfunktionen und Canvas/SVG je nach View-Anforderung

**Architektur in 5–8 Sätzen:**  
Die Anwendung ist als SvelteKit-Seite mit klar getrennten Story-Views organisiert. Daten werden beim Start aus `static/data/...` geladen, geparst und in Domain-Stores geschrieben. Daraus werden abgeleitete Daten für die einzelnen Visualisierungen bereitgestellt. Pro Scrolly-Sektion liefert die Interaktionslogik einen aktiven Step, auf den Text und Chart reaktiv reagieren. Zusätzlich existieren dedizierte Zustände für Phase-, Year- und Day-Clock-Ansichten. Styling und Layoutlogik liegen in globalem CSS sowie komponentenspezifischen Styles. Deployment erfolgt vollständig statisch.

**Technische Herausforderungen:**
- Vereinheitlichung uneinheitlicher CSV-Formate und Zeitangaben
- Korrekte Behandlung von Ereignissen über Mitternacht
- Synchronisierung mehrerer Visualisierungen über gemeinsame Zustände
- Balance aus Detailtiefe und Lesbarkeit in langen Scroll-Sequenzen

**Code-Snippet-Idee:**  
`src/lib/components/ScrollySection.svelte` (Trigger + `IntersectionObserver` + aktiver Step) als Kern der Scrollytelling-Mechanik.

---

### B6) Design & Screens

1. **Intro Hero**  
   - Dateiname: `screen-01-intro-hero.png`  
   - Woher: Route `/`, Seitenanfang (Desktop)  
   - Caption: Einstieg in die Datenstory mit Kennzahlen und Kontext  
   - Alt-Text: Startansicht mit Titel, Introtext und KPI-Karten

2. **Year at a Glance**  
   - Dateiname: `screen-02-year-at-a-glance.png`  
   - Woher: Sektion „The Year at a Glance“, früher Step  
   - Caption: Jahresübersicht als Ausgangspunkt der Story  
   - Alt-Text: Rasterartige Jahresvisualisierung mit farbcodierten Tagen

3. **Day Clock**  
   - Dateiname: `screen-03-day-clock-phase.png`  
   - Woher: Sektion „A Day in My Life“, mittlerer Phase-Step  
   - Caption: Tagesrhythmus mit zeitlich kodierten Aktivitätssegmenten  
   - Alt-Text: Kreisförmige Tagesdiagramme mit farbigen Zeitsegmenten

4. **Sunburst Sport-Mix**  
   - Dateiname: `screen-04-sunburst-sportmix.png`  
   - Woher: Sektion „Reading the Sunburst“, aktiver Vergleichs-Step  
   - Caption: Aktivitätsmix über die drei Jahresphasen  
   - Alt-Text: Sunburst-Diagramm mit Phasenringen und Sportkategorien

5. **Phase Explorer**  
   - Dateiname: `screen-05-phase-explorer.png`  
   - Woher: Abschnitt „Compare the Phases“  
   - Caption: Freie Vergleichsansicht für Kennzahlen und Verteilungen  
   - Alt-Text: Dashboard-Ansicht mit Vergleichsgrafiken pro Phase

---

### B7) Ergebnisse / Outcome

**Ergebnis:**  
Das Projekt ist abgeschlossen und bündelt persönliche Jahresdaten in einer konsistenten, interaktiven Erzählstruktur. Wechselwirkungen zwischen Alltag, Routinen und zeitlichen Phasen werden nachvollziehbar, ohne auf isolierte Einzelmetriken reduziert zu sein. Gleichzeitig bleibt es ein Uni-Projekt mit Fokus auf Konzeptqualität, Umsetzungsgrad und dokumentierter Methodik.

---

### B8) Learnings & Reflexion

**Technisch/Methodisch:**
- **Canvas vs. SVG:** Für große Datensätze (> 200 Elemente) ist Canvas performanter, aber SVG ist besser für Interaktivität (Hover, Click). Die Lösung war, Canvas für statische Layers zu nutzen und SVG-Overlays für Tooltips.
- **Scrollytelling ohne Framework:** Selbstgebautes Scrollytelling gibt mehr Kontrolle, aber auch mehr Debugging. IntersectionObserver ist mächtig, aber `rootMargin` und `threshold` müssen präzise getunt werden – sonst flackern Steps.
- **Dynamic Clipping:** `mask-image` + CSS-Variablen + ResizeObserver ermöglichen responsive Fade-Effekte, aber Browser-Support ist nicht perfekt (Safari hatte Rendering-Bugs bei initial load).
- **CSV-Parsing:** Date-specific vs. Recurring Events (Uni-Pläne) waren tricky – ursprünglich wurden alle Events als recurring behandelt, was zu doppelten Stunden führte. Lesson: Immer die Datenlogik dokumentieren und testen.
- **Svelte 5 Migration:** Projekt startete mit Svelte 4, mitten im Prozess kam Svelte 5 raus. Die reactive Statements (`$:`) funktionierten noch, aber neue runes (z.B. `$derived`) wären eleganter gewesen. Lesson: Bei langen Projekten entweder auf Stable warten oder früh migrieren.

**Design/Storytelling:**
- **Phase-Struktur:** Die Einteilung in drei Phasen (anstatt monats- oder quartalsweise) funktioniert narrativ besser, weil sie thematisch kohärent sind. Nutzer verstehen "Building Momentum" schneller als "Q2 2025".
- **Text-Balance:** Erste Entwürfe hatten zu viel Text pro Step → Nutzer übersprangen Karten. Kürzere, prägnantere Texte (2–4 Sätze pro Card) erhöhten die Leserate (informelles Peer-Feedback).

---

## C) QUELLENHINWEISE (Repo-Belege)

- `README.md` – Projektzweck, Narrative-Phasen, Setup, Build/Deployment
- `package.json` – Tech-Stack, Scripts, Dependency-Versionen
- `src/routes/+page.svelte` – Seitenaufbau und Story-Reihenfolge
- `src/lib/components/ScrollySection.svelte` – Scrollytelling-Pattern
- `src/lib/stores/phase.ts` – Phasenmodell und Step-Mappings
- `src/lib/stores/health.ts` – abgeleitete Datenmodelle für Views/KPIs
- `src/lib/utils/dataLoader.ts` – Datenquellenpfade und Ladefluss
- `src/lib/utils/parsers.ts` – CSV-Parsing und Normalisierung
- `src/lib/views/*` – Visualisierungsviews (Intro, Year, Day Clock, Sunburst, Explorer, Outro)
- `svelte.config.js` – Adapter-Konfiguration für statisches Deployment
- `Info Design Write Up Life Threads (Liliane Schutz).docx` – Projektkontext, Entscheidungen, Reflexion

---

**Erstellt am:** 27.04.2026  
**Basis:** Repository-Stand inkl. aktuellem Arbeitsstand und vorherigem Commit-Stand
