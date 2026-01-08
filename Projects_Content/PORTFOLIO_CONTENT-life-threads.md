# Portfolio Content: Life Threads

---

## A) PROJECT CARD (für Overview)

**Titel:**  
Life Threads – Interaktive Datenvisualisierung persönlicher Lebensdaten

**Slug-Vorschlag:**  
life-threads-data-vis

**Jahr:**  
WiSe 2025/26

**Status:**  
In Arbeit

**Kategorie:**  
data

**1-Satz-Teaser (max 120 Zeichen):**  
Scrollytelling-Visualisierung meines Jahres: Schlaf, Sport, Lesen und Uni – in interaktiven Datengeschichten.

**Kurzbeschreibung (2–3 Sätze, sachlich):**  
Life Threads visualisiert ein Jahr meiner persönlichen Gesundheits- und Aktivitätsdaten durch eine interaktive Scrollytelling-Erfahrung. Das Projekt verbindet Schlafdaten, Sportaktivitäten, Lesegewohnheiten und Unipläne zu einer narrativen Datenvisualisierung. Mit Canvas-basierten Charts, Svelte-Stores und einem selbstgebauten Scrollytelling-System zeigt es die Geschichte von Gewohnheitsbildung, Überlastung und der Suche nach Balance.

**Tags (max 6):**  
SvelteKit, TypeScript, Data Visualization, D3.js, Canvas API, Scrollytelling

**Links:**
- GitHub: auf Anfrage
- Demo/Live: auf Anfrage
- Optional: Figma/Case-Study-Doc: —

---

## B) CASE STUDY (für Detailseite)

### B1) Intro

**One-liner:**  
Eine interaktive Datenvisualisierung, die ein Jahr persönlicher Gesundheits-, Sport-, Lese- und Unidaten in eine scroll-basierte visuelle Erzählung verwandelt.

**Kontext:**  
Universitätsprojekt im Rahmen des Kurses "Information Design". Ziel war es, persönliche Daten nicht nur zu visualisieren, sondern eine nachvollziehbare Geschichte zu erzählen: Wie sieht ein Jahr aus, wenn man versucht, passive Gewohnheiten in bewusste Routinen zu verwandeln?

---

### B2) Problem & Ziele

**Ausgangssituation:**  
Rohdaten aus verschiedenen Quellen (Samsung Health, StoryGraph, Unipläne) liegen als CSV-Dateien vor, aber die Geschichte dahinter bleibt unsichtbar. Klassische Dashboard-Visualisierungen der jeweiligen Apps zeigen Zahlen und typische Graphen, aber nicht den Kontext: Warum gab es im August eine Sportpause? Wie hat sich der Schlafrhythmus über Phasen verändert? Die Herausforderung war, aus fragmentierten Datenpunkten eine kohärente, explorative Erzählung zu schaffen, die sowohl präzise als auch emotional zugänglich ist.

**Ziele:**
- Persönliche Daten aus drei verschiedenen Quellen in einer konsistenten Visualisierung zusammenführen
- Ein scroll-basiertes Storytelling-Format entwickeln, das den Nutzer durch drei Phasen des Jahres führt
- Technisch: Canvas-basierte Visualisierungen für Performance bei großen Datensätzen (365 Tage, mehrere Metriken pro Tag)

**Constraints/Requirements:**
- Datenquellen liegen als CSV vor (keine API-Integration)
- Kein externes Scrollytelling-Framework (z.B. Scrollama) – alles selbst gebaut
- Responsive Design mit graceful degradation auf mobilen Geräten
- Statisches Deployment (keine Server-Side-Logik, SvelteKit adapter-static)

---

### B3) Meine Rolle

**Rolle:**  
Solo-Entwicklerin und Information Designerin

**Verantwortung:**
- Datenaufbereitung: CSV-Parser für Samsung Health, StoryGraph und Unipläne schreiben (inklusive Mapping von Activity-IDs, Schlafphasen, Buchstatus)
- Konzeption und Implementierung des Scrollytelling-Systems mit Svelte (IntersectionObserver, custom Stores, Context API)
- Entwicklung von 5 interaktiven Visualisierungen (Year-at-a-Glance, Day Clock, Weekly Flow, Phase Explorer, Sport Breakdown)
- Canvas-Rendering für performante Darstellung großer Datensätze
- Design-System: Farbpalette, Typografie, Responsive Breakpoints
- Technische Dokumentation (DATA_CALCULATIONS.md, PROJECT_STATE.md, MASK_CONFIGURATION.md)

**Zusammenarbeit:**  
Einzelprojekt. Feedback durch Dozierenden und Peer-Reviews im Kurs.

---

### B4) Prozess

**Schritt 1: Research & Datenanalyse**  
Rohdaten runtergeladen und Data Wrangling durchgeführt: Samsung Health liefert Schlaf- und Aktivitätsdaten (7 verschiedene Sportarten), StoryGraph trackt Lesedaten mit Zeitstempeln, Unipläne als CSV mit Recurring/Date-specific-Events. Erste explorative Visualisierungen in Python/Pandas, um Muster zu erkennen: Drei klare Phasen (First Attempts, Building Momentum, Finding Balance) zeichneten sich ab. Entscheidung: Die Story folgt diesen Phasen.

**Schritt 2: Konzept & Wireframing**  
Scrollytelling-Struktur: Intro (KPI-Übersicht) → Year at a Glance (365-Tage-Kalender) → A Day in My Life (24h-Radial-Clock) → Weekly Rhythm (Stacked Area Chart) → Free Exploration (Phase Comparison Dashboard) → Outro. Skizzen für jede Visualisierung, um das Layout festzulegen: Sticky Charts links/rechts, Text in Karten rechts/links, "Invisible Triggers" für Scroll-Schritte.

**Schritt 3: Technische Architektur**  
SvelteKit mit TypeScript als Framework. CSV-Parser in `utils/parsers.ts`, Datenladen in `utils/dataLoader.ts`, State Management mit Svelte Stores (`health.ts`, `phase.ts`, `annotations.ts`). Scrollytelling-Pattern: `ScrollySection` als Wrapper, `ScrollyStep` als Cards + Triggers, IntersectionObserver mit `rootMargin: '-30% 0px -50% 0px'` für smooth Transitions. Entscheidung gegen externe Libraries (Scrollama, D3-Charts), um mehr Kontrolle zu behalten.

**Schritt 4: Implementierung der Visualisierungen**  
Start mit SVG-basierten Charts, dann Migration zu Canvas für Performance (insbesondere bei `ThreadOfYearFlow` mit 365 Tagen und `DayClockAtlasCanvas` mit 24h-Slots). Custom D3.js-inspirierte Utils für Skalen, aber manuelles Canvas-Drawing. Farbcodierung: Sleep = Indigo (#5A5DFF), Pilates = Soft Purple (#B18AFF), Stretching = Warm Yellow (#FFD85E), Strength = Orange (#FF8A2B), Running = Cyan (#2EDCFF), Cycling = Medium Green (#39D98A), University = Soft Pink (#E65BB7), Reading = Warm Bronze (#D9A86C). Iterative Arbeit: Erst statische Charts, dann Interaktivität (Hover-Tooltips, Phase-Filter, Monatsscrubber).

**Schritt 5: Scrollytelling-Feinschliff**  
Problem: Text-Cards überlagern Header. Lösung: `updateClip()` misst Header-Höhe dynamisch, setzt CSS-Variable `--clip-top`, `mask-image` blendet Karten unter dem Header aus. Problem: Mehrere Visualisierungen erscheinen gleichzeitig beim Scrollen. Lösung: `min-height: 400vh` pro Sektion, um klare Trennung zu schaffen. Vertical Centering mit `top: 50vh; transform: translateY(-50%)` für ausgewogene Komposition.

**Schritt 6: Testing & Dokumentation**  
Cross-Browser-Tests (Chrome, Firefox, Safari), Responsive Testing (Desktop, Tablet, Mobile – Mobile: gestacktes Layout ohne Sticky). Bugs gefixt: Uni-Stunden doppelt gezählt (Recurring vs. Date-specific), Walking-Daten entfernt (nur Cycling tracken), Phase-Explorer Sleep-Histogramme spacing. Dokumentation geschrieben: `DATA_SOURCES_AND_METRICS.md` erklärt alle Berechnungen, `PROJECT_STATE.md` beschreibt Architektur, `MASK_CONFIGURATION.md` für Tuning-Parameter.

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
- **Canvas statt SVG:** Initial war alles SVG, aber bei 365 Tagen × mehrere Metriken wurde das DOM zu groß → Performance-Probleme. Canvas lieferte deutlich bessere Performance bei großen Datensätzen.
- **Kein Scrollama:** Entscheidung gegen externes Framework, um mehr Kontrolle über IntersectionObserver, Root Margin und Step-Logik zu haben. Erlaubt custom "trigger"-Mode (unsichtbare Spacer) + "card"-Mode (sichtbare Text-Panels).
- **Phase-basierter State:** Ein globaler `phaseStore` (Svelte writable), auf den alle Visualisierungen reagieren. Ermöglicht synchronisierte Filter-Übergänge (z.B. Day Clock + Weekly Flow zeigen beide Phase 2, wenn Nutzer Phase 2 auswählt).
- **Static Deployment:** SvelteKit adapter-static, da Daten lokal als CSV vorliegen. Kein Backend nötig, aber auch keine Echtzeit-Updates möglich.

**Architektur in 5 Sätzen:**  
Das Projekt folgt einer Store-basierten Architektur: Alle Daten (Sleep, Activities, Reading, Uni) werden beim App-Start von CSV in Svelte Stores geladen (`dataLoader.ts` + `parsers.ts`). Jede Visualisierung ist ein Svelte-Component in `src/lib/views/`, die auf diese Stores reagiert. Das Scrollytelling funktioniert über ein Context-API-Pattern: `ScrollySection` registriert Child-`ScrollyStep`-Components und trackt, welcher Step aktiv ist (IntersectionObserver). Text-Cards werden per `opacity`-Transition ein-/ausgeblendet, Charts reagieren auf `activeStep`-Changes. CSS-Variablen (`--clip-top`, `--fade-length`) steuern dynamische Masking-Effekte.

**Optional: 1 Code-Snippet-Idee**  
`src/lib/components/ScrollySection.svelte`, Zeilen 80-110: Der `updateClip()`-Code, der Header-Höhe misst und CSS-Variablen setzt. Zeigt, wie dynamisches DOM-Measurement mit Svelte reaktivem System kombiniert wird.

---

### B6) Design & Screens

**Welche 3–6 Screens soll ich zeigen?**

**Screen 1: Intro Hero**  
- **Dateiname:** `screen-01-intro-hero.png`
- **Woher:** Route `/`, scrolle ganz nach oben, Viewport Desktop (1920×1080)
- **Caption:** Einstiegsseite mit KPI-Karten (Nights Tracked, Workouts, Semesters, Books Read) und Projekt-Intro.
- **Alt-Text:** Screenshot der Life Threads Hero-Section mit vier Icon-KPI-Karten auf dunklem Hintergrund.

**Screen 2: Year at a Glance (Thread View, Phase 2 Highlight)**  
- **Dateiname:** `screen-02-thread-view-phase2.png`
- **Woher:** Route `/`, scrolle zu "Year at a Glance", scroll bis Step 2 (May-Aug Highlight), Desktop
- **Caption:** Scrollytelling: 365-Tage-Kalender-Heatmap mit Phase-2-Highlight ("Building Momentum") und Narrative-Text-Card rechts.
- **Alt-Text:** Kalender-Visualisierung mit 365 farbigen Quadraten, Phase 2 (Mai-August) hervorgehoben, Textpanel erklärt Sport-Intensität.

**Screen 3: Day Clock Atlas (Radial View, Phase 1)**  
- **Dateiname:** `screen-03-dayclock-phase1.png`
- **Woher:** Route `/`, scrolle zu "A Day in My Life", Step 1 (Phase 1), Desktop
- **Caption:** 24-Stunden-Radial-Clock visualisiert typische Tagesabläufe: Sleep (Indigo), Sport (Orange/Gelb), Uni (Cyan).
- **Alt-Text:** Kreisförmige 24-Stunden-Visualisierung mit farbigen Segmenten für Schlaf, Sport und Uni, Phase 1 gefiltert.

**Screen 4: Weekly Activity Flow (Stacked Area)**  
- **Dateiname:** `screen-04-weekly-flow.png`
- **Woher:** Route `/`, scrolle zu "The Weekly Rhythm", Desktop, Step mit Annotation (z.B. "Injury Break")
- **Caption:** Stacked Area Chart zeigt wöchentliche Sport-Intensität über das Jahr, mit Annotations-Marker für Verletzungspause im August.
- **Alt-Text:** Gestapeltes Flächendiagramm mit Wochen auf X-Achse und Sport-Stunden auf Y-Achse, Annotation "Injury Break" markiert.

**Screen 5: Phase Explorer Dashboard**  
- **Dateiname:** `screen-05-phase-explorer.png`
- **Woher:** Route `/`, scrolle zu "Compare the Phases", Phase 2 ausgewählt, Desktop
- **Caption:** Interaktives Dashboard für Phase-Vergleich: Sleep-Statistiken (Histogramme), Sport-Mix (Lollipop-Chart), Activity-Breakdown.
- **Alt-Text:** Dashboard mit drei Panels: Sleep-Histogramme (Bedtime, Wake, Duration), Sport-Mix nach Aktivität, Workout-Anzahl pro Phase.

**Screen 6: Mobile View (Optional)**  
- **Dateiname:** `screen-06-mobile-thread.png`
- **Woher:** Route `/`, "Year at a Glance", Mobile Viewport (375×812)
- **Caption:** Mobile Ansicht: Gestacktes Layout ohne Sticky, Chart und Text untereinander.
- **Alt-Text:** Mobile Screenshot mit vertikal gestapelter Visualisierung und Text, kein Sticky Scrollytelling.

---

### B7) Ergebnisse / Outcome

**Ergebnis:**  
Das Projekt ist aktuell in aktiver Entwicklung als Universitätsprojekt. Die Scrollytelling-Erfahrung funktioniert smooth über alle Sektionen, Canvas-Rendering liefert Performance auch bei großen Datensätzen, und die narrative Struktur macht abstrakte Daten nachvollziehbar. Die technische Dokumentation (über 1000 Zeilen in Markdown) ermöglicht es, die Architektur zu verstehen und weiterzuentwickeln. Das Projekt zeigt, dass persönliche Daten nicht nur "Dashboard-Material" sind, sondern eine Geschichte erzählen können – in diesem Fall die Geschichte von Gewohnheitsbildung, Überlastung und der Suche nach Balance.

---

### B8) Learnings

**Technisch/Methodisch:**
- **Canvas vs. SVG:** Für große Datensätze (> 200 Elemente) ist Canvas performanter, aber SVG ist besser für Interaktivität (Hover, Click). Die Lösung war, Canvas für statische Layers zu nutzen und SVG-Overlays für Tooltips.
- **Scrollytelling ohne Framework:** Selbstgebautes Scrollytelling gibt mehr Kontrolle, aber auch mehr Debugging. IntersectionObserver ist mächtig, aber `rootMargin` und `threshold` müssen präzise getunt werden – sonst flackern Steps.
- **Dynamic Clipping:** `mask-image` + CSS-Variablen + ResizeObserver ermöglichen responsive Fade-Effekte, aber Browser-Support ist nicht perfekt (Safari hatte Rendering-Bugs bei initial load).
- **CSV-Parsing:** Date-specific vs. Recurring Events (Uni-Pläne) waren tricky – ursprünglich wurden alle Events als recurring behandelt, was zu doppelten Stunden führte. Lesson: Immer die Datenlogik dokumentieren und testen.
- **Svelte 5 Migration:** Projekt startete mit Svelte 4, mitten im Prozess kam Svelte 5 raus. Die reactive Statements (`$:`) funktionierten noch, aber neue runes (z.B. `$derived`) wären eleganter gewesen. Lesson: Bei langen Projekten entweder auf Stable warten oder früh migrieren.

**Design/Storytelling:**
- **Phase-Struktur:** Die Einteilung in drei Phasen (anstatt monats- oder quartalsweise) funktioniert narrativ besser, weil sie thematisch kohärent sind. Nutzer verstehen "Building Momentum" schneller als "Q2 2025".
- **Text-Balance:** Erste Entwürfe hatten zu viel Text pro Step → Nutzer übersprangen Karten. Kürzere, prägnantere Texte (2–4 Sätze pro Card) erhöhten die Leserate (informelles Peer-Feedback).

**Nächstes sinnvolles Improvement:**  
Ein **"Guided Tour"-Modus** mit animierten Auto-Scroll-Übergängen zwischen Steps (z.B. "Play"-Button, der automatisch durch die Story scrollt). Oder: **Export-Feature** für einzelne Charts als PNG/SVG, damit Nutzer Visualisierungen teilen können.

---

## C) HINWEISE ZUR VERWENDUNG

**Angepasst basierend auf Projektkontext:**
- **Links:** GitHub und Demo auf Anfrage verfügbar (noch nicht öffentlich deployed)
- **Zeitraum:** WiSe 2025/26
- **Projektart:** Solo-Projekt
- **Performance:** Vage formuliert, da keine exakten Metriken gemessen
- **Browser-Kompatibilität:** Chrome Rendering-Bugs bei `mask-image` erwähnt (Teil der technischen Realität)
- **Status:** In Arbeit
- **Zielgruppe:** Universal (Tech, Design, Data Science) – Balance zwischen technischen Details und Design-/Story-Aspekten

---

## D) QUELLENHINWEISE (Repo-Belege)

**README.md:**
- Abschnitt "Concept" (Zeilen 6–13): Projektbeschreibung, Metapher "weaving threads"
- Abschnitt "Project Structure" (Zeilen 44–79): Ordnerstruktur, Component-Übersicht
- Abschnitt "Data Sources" (Zeilen 81–94): CSV-Quellen (Samsung Health, StoryGraph, Uni)

**PROJECT_STATE.md:**
- Zeilen 1–19: "Project Overview" – Zweck, Tech-Stack, Narrative
- Zeilen 50–106: "Current Page Sections" – Aufbau der 6 Sektionen (Intro, Thread, Day Clock, Weekly, Explorer, Outro)
- Zeilen 108–147: "Scrollytelling Implementation" – Technisches Pattern (IntersectionObserver, Root Margin, Sticky)
- Zeilen 150–175: "Visual Design System" – Farbpalette, Layout-Prinzipien
- Zeilen 277–300: "Recent Improvements" – Header-Driven Clipping, Vertical Centering, Navigation Removal

**package.json:**
- Zeilen 1–13: Dependencies (Svelte 4, SvelteKit, Vite, D3-Module)

**DATA_SOURCES_AND_METRICS.md:**
- Zeilen 1–52: Datenquellen (CSV-Dateien, Feldnamen, Activity-ID-Mapping)
- Zeilen 54–69: Phase System (3 Phasen mit Datumsbereichen)

**AUDIT_REPORT.md:**
- Zeilen 1–100: Legacy-Files (alte SVG-Versionen), Safe-to-Delete-Liste
- Belegt: Canvas-Migration ersetzte SVG (`ThreadOfYearFlow.svelte` vs. `ThreadOfYear.svelte`, `DayClockAtlasCanvas.svelte` vs. `DayClockAtlas.svelte`)

**docs/CHANGES_PHASE_EXPLORER.md:**
- Zeilen 1–50: Bugfixes (Sleep-Statistik-Layout, Walking-Daten entfernt, Uni-Stunden-Bug)

**moodboard/story-text-draft.md:**
- Zeilen 1–80: Narrative Text-Entwürfe für Scrollytelling-Steps

**moodboard/mein-text.md:**
- Zeilen 1–50: Persönliche Notizen zur Story-Entwicklung (Atomic Habits, Schlafexperiment, Injury im August)

**src/routes/+page.svelte:**
- Zeilen 1–100: Main Page Structure, Import aller Views, Scrollytelling-Setup

**src/lib/views/IntroHero.svelte:**
- Zeilen 1–100: Hero-Section mit KPI-Cards, Icon-Definitionen, Phase-Marker-Navigation

**svelte.config.js:**
- Zeilen 1–30: SvelteKit Config, adapter-static für statisches Deployment

---


**Nächste Schritte:**
1. Erstelle die 5–6 Screenshots (B6) – verwende die Anweisungen für genaue Scroll-Positionen und Viewports
2. Optional: Kürzere Version (300–400 Wörter) für Case Study, falls gewünscht (aktuelle Version: ~650 Wörter)
3. Copy-Paste Content in dein Portfolio-Projekt
