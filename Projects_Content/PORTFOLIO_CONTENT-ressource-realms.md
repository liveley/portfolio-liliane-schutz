# Portfolio-Content: Ressource Realms

---

## A) PROJECT CARD (für Overview)

**Titel:**  
Ressource Realms – 3D-Strategiespiel im Browser

**Slug-Vorschlag (kebab-case):**  
ressource-realms-3d

**Jahr (oder Zeitraum):**  
Sommersemester 2025

**Status:**  
Abgeschlossen

**Kategorie:**  
coding

**1-Satz-Teaser (max 120 Zeichen):**  
Browser-basiertes 3D-Strategiespiel mit WebGL-Rendering, interaktivem Spielbrett und komplexer Spiellogik.

**Kurzbeschreibung (2–3 Sätze, sachlich):**  
Ressource Realms ist eine vollständig im Browser spielbare 3D-Umsetzung eines rundenbasierten Strategiespiels. Spieler bauen Siedlungen und Straßen auf einer hexagonalen Insel, handeln mit Rohstoffen und sammeln Siegpunkte. Das Projekt kombiniert Three.js-basiertes 3D-Rendering mit modularer Spiellogik für lokalen Multiplayer (2 Spieler).

**Tags (max 6, aus Tech/Methoden):**  
Three.js, JavaScript, WebGL, Blender, Vite, Game Development

**Links:**
- **GitHub:** auf Anfrage
- **Demo/Live:** auf Anfrage
- **Optional:** —

---

## B) CASE STUDY (für Detailseite)

### B1) Intro

**One-liner:**  
Ein browser-basiertes 3D-Strategiespiel mit vollständiger Spielmechanik, 3D-Modellen und modularer Architektur.

**Kontext:**  
Entwickelt im Rahmen des Projektmoduls Prozesse (Hochschule München, Informatik und Design) als Teamprojekt über ein Semester. Ziel war es, moderne Webtechnologie und 3D-Grafik zu kombinieren, um klassische Brettspiele zugänglicher zu machen.

---

### B2) Problem & Ziele

**Ausgangssituation:**  
Brettspiele erfordern physisches Material, Platz und oft lange Setupzeiten. Zudem sind Regelkonflikte und manuelle Punkteberechnungen fehleranfällig. Es fehlte eine moderne, direkt im Browser zugängliche 3D-Umsetzung mit vollständiger Automatisierung der Spielregeln und visuell ansprechender Darstellung.

**Ziele:**
- Vollständig spielbare Implementierung mit automatisierter Regelverwaltung und Punkteberechnung
- 3D-Visualisierung einer hexagonalen Spielwelt mit interaktiven Elementen
- Modulare, erweiterbare Code-Architektur für zukünftige Features

**Constraints/Requirements:**
- Browser-basiert, ohne Installation spielbar (lokaler Multiplayer für 2 Spieler)
- Three.js als vorgegebene Technologie für 3D-Rendering
- Vollständige Spiellogik: Bauphasen, Ressourcenmanagement, Handelssysteme, Entwicklungskarten
- Agile Entwicklung mit GitLab, Node.js, Vite als Build-Tool

---

### B3) Meine Rolle

**Rolle:**  
Full-Stack Game Developer im 4-Personen-Team (3 Full-Stack Developer, 1 3D Artist)

**Verantwortung:**
- Automatische Siegpunktezählung: Implementierung des Victory-Points-Systems inkl. Längste-Straße-Logik und Win-Condition-Detection
- Räuber-Mechanik: Platzierung, Bewegung und Interaktion mit Spielfeld-Highlighting
- UX-Features: Ressourcen-Zähler mit visuellen Updates, Spielfeld-Vorladen, Highlighting gewürfelter Felder mit Halos
- Spielbrett-Dynamik: Zufällige Anordnung der Ressourcenfelder beim Spielstart für mehr Variabilität
- Bugfixing: Zahlenchip-Highlighting, Bau-Validierung am Wasser, diverse Spiellogik-Fehler
- Code-Reviews: Regelmäßige Reviews zugewiesener Branches und Feedback im Team
- 3D-Assets: Erste Schritte in Blender zur Erstellung von Wald- und Weidefeldern
- Quality Assurance: Eigenständiges Erstellen von User Stories und Issues beim Testing

**Zusammenarbeit:**  
Intensiver Austausch besonders mit einem Teammitglied bei komplexen Spiellogik-Features (z.B. Längste-Straße-Berechnung mit Graph-Algorithmen). GitLab für Versionskontrolle mit Branch-basiertem Workflow. Wöchentliche Sprint-Meetings zur Abstimmung. Pair Programming bei herausfordernden Algorithmen. 

---

### B4) Prozess

**Schritt 1: Konzeption & Technologie-Setup**  
Analyse bestehender Brettspiel-Regeln und Übertragung in digitale Mechaniken. Entscheidung für modulare Architektur mit separaten Verantwortlichkeiten (Spiellogik, UI, 3D-Rendering). Setup von Vite als Build-Tool und Three.js als Rendering-Engine. Erste Prototypen mit Hex-Grid-Generierung und Kamera-Controls.

**Schritt 2: 3D-Umgebung & Asset-Integration**  
Erstellung der Spielwelt mit hexagonalem Gitter (Axial-Koordinatensystem). Integration von Blender-Modellen (.glb-Format) für Terrain-Tiles (Wald, Erz, Wüste etc.), Spielfiguren (Siedlungen, Städte, Straßen) und den Wächter. Implementierung der Skybox, Beleuchtung und Schatten für atmosphärische Darstellung.

**Schritt 3: Spiellogik-Implementierung**  
Aufbau der Core-Mechaniken: Bauvalidierung (Mindestabstand zwischen Siedlungen, Straßenverbindungen), Ressourcenverwaltung (Würfel-System, Rohstoffproduktion), Handelssysteme (Bank 4:1, Häfen 3:1/2:1). Implementierung der Entwicklungskarten (Wächter, Fortschritt, Siegpunkte) mit Kartenlimit und Spielregeln.

**Schritt 4: UI & Interaktionssysteme**  
Entwicklung der Benutzeroberfläche: Ressourcenanzeigen mit Echtzeit-Updates, Baumenü mit Kostenanzeige, Spielerwechsel-Button, Entwicklungskarten-UI. Implementierung von Hover-Previews für Bauaktionen und visuellen Feedback-Systemen (Highlighting, Halos um Tiles). Main Menu mit Hexagon-basiertem Design.

**Schritt 5: Erweiterte Features & Polishing**  
Implementierung komplexer Algorithmen: Längste-Straße-Berechnung (DFS-basierter Graph-Traversal), Siegbedingungsprüfung mit automatischem Win-Screen. Debugging-Tools für Entwicklung. Optimierung der Performance, Bugfixing und Testing verschiedener Spielszenarien. Feintuning der Physik-Engine (Cannon-es) für Würfelwürfe.

**Schritt 6: Testing & Deployment**  
Systematisches Testing der Spiellogik mit Test-Scripts (Victory Points, Longest Road). Dokumentation in README und SPIELREGELN.md. Setup für lokales Deployment via Vite Dev Server. Code-Cleanup und Refactoring für bessere Wartbarkeit.

---

### B5) Umsetzung / Lösung

**Kernfeatures:**
- Vollständiges 3D-Spielbrett mit 19 Terrain-Tiles (Wald, Lehm, Erz, Wolle, Getreide, Wüste) und Wasser-Tiles mit Häfen
- Interaktive Bauaktionen: Siedlungen, Städte, Straßen mit Echtzeit-Validierung und Kostenabzug
- Würfel-System mit 3D-Physik (Cannon-es) und automatischer Rohstoffverteilung
- Handelssysteme: Bank-Tausch (4:1), Hafen-Tausch (2:1/3:1 je nach Hafentyp)
- Entwicklungskarten-Deck: Wächter, Fortschritt-Karten (Straßenbau, Monopol, Erfindung), Siegpunktkarten
- Automatische Siegpunktberechnung inkl. Längste Straße (Min. 5 Straßen) und Größte Wächtermacht (Min. 3 Wächter)
- Win-Condition-Detection mit Overlay und Spielende bei 10 Siegpunkten

**Wichtige technische Entscheidungen:**
- **Modulare Architektur:** Trennung in 38+ Module (Spiellogik, UI, Rendering, Debugging) für bessere Wartbarkeit und parallele Entwicklung im Team
- **Axial-Koordinatensystem:** Nutzung von Cube-Coordinates für präzise hexagonale Grid-Berechnungen, vereinfacht Nachbar-Erkennung und Platzierungslogik
- **Kanonische Ecken/Kanten:** Vermeidung von Duplikaten bei Bauobjekten durch Normalisierung auf kanonische Repräsentationen (3 physisch identische Ecken → 1 kanonische Ecke)
- **Graph-basierte Straßen-Logik:** DFS-Algorithmus für Längste-Straße-Berechnung mit Edge-basiertem Traversal statt Vertex-basiert (verhindert Doppelzählung)

**Architektur in 5–8 Sätzen:**  
Das Projekt folgt einer modularen Architektur mit klarer Trennung von Verantwortlichkeiten. Der Kern besteht aus `main.js` als Orchestrator, der Three.js-Renderer, Szene und Game Loop verwaltet. Spiellogik-Module (`buildLogic.js`, `victoryPoints.js`, `developmentCards.js`) sind rein funktional und UI-unabhängig. UI-Module (`uiResources.js`, `uiBuild.js`, `developmentCardsUI.js`) kapseln DOM-Manipulation und Events. Die 3D-Welt wird durch `game_board.js` (Hex-Grid) und `gamePieces.js` (Siedlungen, Straßen) aufgebaut, mit `loader.js` für GLB-Modelle. Ein zentrales `window.players`-Array hält den Spielzustand. Debugging-Tools sind in eigenem Ordner isoliert und optional aktivierbar.

**Optional: 1 Code-Snippet-Idee:**  
[victoryPoints.js](code/modules/victoryPoints.js), Zeile 154-283: Die `calculateLongestRoad`-Funktion zeigt die komplexe Graph-Traversal-Logik für die Längste-Straße-Berechnung mit DFS und Edge-Tracking.

---

### B6) Design & Screens (mit Bildplan)

**Welche 3–6 Screens soll ich zeigen?**

1. **screen-01-main-menu.png**
   - Woher nehmen: Startseite beim Laden (Main Menu mit Hexagon-Layout)
   - Caption: Startmenü mit hexagonalem Design und Terrain-Farben als visuelle Anker
   - Alt-Text: Hauptmenü von Ressource Realms mit sechseckigen Buttons in Terrain-Farben

2. **screen-02-game-board-overview.png**
   - Woher nehmen: Spielbrett nach Initialisierung (Vogelperspektive, alle Tiles sichtbar)
   - Caption: Vollständiges 3D-Spielbrett mit hexagonalen Terrain-Tiles, Zahlenmarkern und Skybox
   - Alt-Text: Isometrische Ansicht des hexagonalen Spielbretts mit verschiedenen Terrain-Typen und umgebendem Wasser

3. **screen-03-gameplay-building.png**
   - Woher nehmen: Während des Spiels mit gebauten Siedlungen, Straßen und geöffnetem Baumenü
   - Caption: Aktive Spielsituation mit Bauoptionen, Ressourcenanzeige und Spieler-Overview
   - Alt-Text: Spielansicht mit platzierter roter Siedlung, Baumenü im Vordergrund und Ressourcen-UI

4. **screen-04-resource-ui.png**
   - Woher nehmen: Close-up der rechten unteren UI-Ecke (Ressourcenanzeige)
   - Caption: Ressourcen-Management-Interface mit Echtzeit-Updates nach Würfelwurf
   - Alt-Text: UI-Element zeigt Rohstoffkarten für Holz, Lehm, Erz, Wolle und Getreide mit Anzahl

5. **screen-05-development-cards.png**
   - Woher nehmen: Entwicklungskarten-UI geöffnet (Development Cards Panel)
   - Caption: Entwicklungskarten-System mit Wächter-, Fortschritt- und Siegpunktkarten
   - Alt-Text: Interface für Entwicklungskarten mit Kartentypen und Kaufoption

6. **screen-06-victory-screen.png**
   - Woher nehmen: Nach Erreichen von 10 Siegpunkten (Win Overlay)
   - Caption: Siegbildschirm mit Punkteaufschlüsselung und Glückwunsch-Animation
   - Alt-Text: Gewinn-Overlay zeigt Sieger mit 10 Siegpunkten und Konfetti-Animation

---

### B7) Ergebnisse / Outcome

**Ergebnis:**  
Das Projekt resultierte in einer voll funktionsfähigen, browser-basierten 3D-Umsetzung des Strategiespiels. Alle Kernmechaniken (Bau, Handel, Entwicklungskarten, Siegbedingungen) sind implementiert und spielbar. Das Spiel ist auf 2 Spieler ausgelegt und wurde mit der Note 1,0 abgeschlossen. Die modulare Architektur ermöglicht grundsätzlich Erweiterungen, der aktuelle Scope ist jedoch bewusst auf lokalen 2-Spieler-Modus beschränkt.

**Impact:**  
Das Spiel wurde erfolgreich im Rahmen des Moduls präsentiert und beim Deutschen Multimediapreis eingereicht. Die technische Umsetzung und visuelle Qualität erhielten positives Feedback. Das Projekt diente als intensive Lernerfahrung für 3D-Webentwicklung, komplexe Zustandsverwaltung und agile Teamarbeit. Besonders wertvoll war die Erkenntnis, wie wichtig frühe Prototypen und kleine, übersichtliche Issues für erfolgreiche Zusammenarbeit sind.

---

### B8) Learnings

**3–6 Learnings (konkret, technisch/produktbezogen):**

1. **Frühe Prototypen sind Gold wert:** Rückblickend hätte ich deutlich früher mit Three.js-Platzhaltern (simple Geometrien für Tiles und Spielsteine) starten sollen, um das Spielfeld schneller testbar zu machen und frühzeitig Feedback zu bekommen.

2. **Issue-Granularität:** Kleinere, übersichtlichere Issues von Anfang an hätten Merge-Konflikte reduziert und die Aufgabenverteilung im Team erleichtert. Große Features sollten in mehrere kleinere Tasks aufgeteilt werden.

3. **Graph-Algorithmen sind komplex:** Die Längste-Straße-Berechnung war extrem herausfordernd wegen des komplexen Hex-Koordinatensystems (Vertices, Adjacency, q/r-Werte, Edges).

4. **KI-Einsatz gezielt nutzen:** Claude Sonnet 4 analysiert vorhandenen Code gut und baut darauf auf, ist aber manchmal zu ausführlich. ChatGPT 4.1 ist oft oberflächlich. Bei komplexen Algorithmen und UI-Themen war selbstständiges Debugging effizienter.

5. **Kommunikation im Team:** Regelmäßiger Abgleich des Verständnisses über nächste Schritte hätte Missverständnisse vermieden. Approval-Regeln in GitLab hätten unkontrolliertes Mergen verhindert.

6. **3D-Asset-Pipeline:** Blender-Einarbeitung ist zeitintensiv, aber lohnenswert. Mix aus selbst erstellten und zusammengebauten Assets aus verschiedenen Quellen war pragmatisch und effizient.

---

## D) QUELLENHINWEISE (Repo-Belege)

**README.md:**
- Abschnitt "Projektübersicht": Ziel (3D-Visualisierung, Spielmechanik), Kontext (Projektmodul Prozesse, Hochschule München), Team (Gruppe 4)
- Abschnitt "Features": Rohstoffmanagement, Wächter, Sonderkarten, 3D-Spielwelt, Skybox
- Abschnitt "Technologien": Three.js, Blender, JavaScript, Cannon-es, Node.js, Vite, Figma, GitLab, GitHub Copilot

**SPIELREGELN.md:**
- Vollständige Spielregeln: Baukosten, Entwicklungskarten, Siegbedingungen (10 Punkte), Handelsmechaniken, Wächter-Logik

**package.json:**
- Dependencies: Three.js (0.176.0), Cannon-es (0.20.0)
- DevDependencies: Vite (6.3.5)
- Type: Module (ES6-Module)

**code/main.js:**
- Zeile 1-45: Imports aller Module (Szene, Kamera, Lichter, Hex-Grid, Würfel, UI-Systeme, Spiellogik)
- Zeile 47-70: Player-Array mit 2 Spielern, Ressourcen, Siegpunkten, Straßenlänge
- Zeile 72-73: Initialisierung Victory Points und Initial Placement Phase

**code/modules/game_board.js:**
- Zeile 5-9: Import von Three.js, Tile-Loader, Highlighting-System, Port-System
- Zeile 22-25: Definition Terrain-Tiles (Lehm, Erz, Wolle, Weizen, Holz) mit Axial-Koordinaten
- Zeile 44-50: `axialToWorld`-Funktion für Koordinaten-Konvertierung

**code/modules/victoryPoints.js:**
- Zeile 34-60: `initializeVictoryPoints` – Initialisierung für alle Spieler
- Zeile 154-283: `calculateLongestRoad` – DFS-Algorithmus für Längste Straße
- Zeile 564-640: `updateLongestRoad` – Vergleich aller Spieler, Award-Vergabe
- Zeile 717-740: `checkWinCondition` – Prüfung auf 10 Siegpunkte

**code/modules/buildLogic.js:**
- Zeile 1-80: Kanonische Ecken-Utilities, Bauvalidierung (Siedlung, Stadt, Straße)

**code/modules/developmentCards.js:**
- Zeile 6-12: Kartentypen-Definition (Wächter, Straßenbau, Monopol, Erfindung, Siegpunkt)
- Zeile 14-28: `createDevelopmentDeck` – Fisher-Yates-Shuffle

**code/modules/bankTrade.js, portTrade.js:**
- Bank-Tausch (4:1) und Hafen-Tausch (2:1/3:1) Implementierung

**code/modules/ (diverse UI-Module):**
- `uiResources.js`, `uiBuild.js`, `developmentCardsUI.js`, `uiMainMenu.js`: UI-Komponenten

**code/models/:**
- GLB-Dateien: bandit.glb, clay.glb, ore.glb, sheep.glb, water.glb, wheat.glb, wood.glb, harbor.glb, road.glb, dice.glb

**code/modules/debugging/:**
- Debug-Tools: longestRoadDebug.js, victoryPointsDebug.js, roadTestingUtils.js

**code/test/:**
- Test-Scripts: testLongestRoad.js, testVictoryPoints.js, undoRebuildTest.js

**reflexionsbericht.md:**
- Detaillierte Beschreibung meiner Beiträge: Ressourcen-Zähler (#57), Spielbrett-Vorladen (#54), Siegpunkte-Automatisierung (#67), Räuber-Mechanik (#49), zufällige Ressourcenfelder (#50), Tile-Highlighting (#48)
- Team-Zusammenarbeit und Rollenverteilung
- Learnings zu KI-Einsatz, Kommunikation und Projektmanagement