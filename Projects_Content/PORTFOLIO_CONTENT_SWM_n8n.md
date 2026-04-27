# Portfolio-Content: SWM Change Management Automation

---

## A) PROJECT CARD (für Overview)

**Titel:**  
SWM Change Management Portal

**Slug-Vorschlag:**  
swm-change-management-portal

**Jahr (oder Zeitraum):**  
Wintersemester 2025/26

**Status:**  
Abgeschlossen

**Kategorie:**  
coding

**Projektart:**  
Uni-Projekt

**1-Satz-Teaser (max 120 Zeichen):**  
Hybrides Change-Intake-Portal mit dynamischem Formular, Chat-Unterstützung und n8n-Workflow-Anbindung

**Kurzbeschreibung (2–3 Sätze, sachlich):**  
Modulprojekt für Stadtwerke München (SWM): Ein hybrides System zur strukturierten Erfassung von Change-Anfragen. Kombiniert ein Next.js-Frontend (Klassifizierung, dynamisches Formular, Auto-Save, Review/Submit) mit n8n-Workflows für Session-Management und Folgeprozesse. Neben UC1 wurden Schnittstellen zu UC3/UC4 sowie ein Dashboard zur Session-Übersicht, Workflow-Auslösung und PDF-Export umgesetzt.

**Tags (max 6):**  
Next.js, n8n, TypeScript, React, OpenAI, Workflow-Automation

**Meine Rolle:**  
Umsetzung von UC1 (Frontend + n8n-Workflow) im Teamkontext

**Links:**
- GitHub: auf Anfrage
- Demo/Live: auf Anfrage
- Optional: Figma/Case-Study-Doc: —

---

## B) CASE STUDY (für Detailseite)

### B1) Intro

**One-liner:**  
Ein webbasiertes Portal für strukturierte Change-Anfragen mit Formular-Flow, Chat-Hilfe und n8n-gestützter Weiterverarbeitung.

**Kontext:**  
Abgeschlossenes Universitätsprojekt im "Projektmodul Web". Entwickelt für Praxispartner SWM. Ziel war die operative Digitalisierung der Auftragsklärung für Change-Begleitung: strukturierte Datenerfassung für Anfragende bei gleichzeitig nutzbaren, weiterverarbeitbaren Session-Daten für das Change-Team. Teamarbeit über 4 Monate mit wöchentlichem Austausch und iterativem Aufbau von vier Use Cases.

**Kurzfazit:**  
Das Projekt liefert einen funktionsfähigen End-to-End-Flow für Intake, Session-Handling und nachgelagerte Workflow-Trigger.

---

### B2) Problem & Ziele

**Ausgangssituation:**  
Change-Anfragen sollten konsistent und vollständig erfasst werden statt ad hoc über unstrukturierte Kommunikation. Gleichzeitig musste der Einstieg niedrigschwellig bleiben. Gesucht war daher ein Hybrid-Ansatz aus strukturierter Dateneingabe und optionaler Assistenz.

**Ziele:**
- Standardisierte Erfassung von Change-Anfragen mit klaren Pflicht- und Optionalfeldern
- Unterstützung beim Ausfüllen über kontextbezogene Chat-Interaktionen
- Wiederverwendbare Session-Daten für Folgeprozesse (u. a. UC3/UC4, Dashboard)

**Constraints/Requirements:**
- Next.js (App Router), React und TypeScript im Frontend
- n8n-Webhooks und Data-Table-basierte Session-Persistenz
- Proof-of-Concept-Rahmen ohne vollwertiges Auth-System

---

### B3) Meine Rolle

**Rolle:**  
Full-Stack-Entwicklung für Use Case 1 (Frontend und n8n-Workflow)  + Systemarchitektur
**Verantwortung:**
- Implementierung des UC1-Frontend-Flows in Next.js (E-Mail-Schritt, Klassifizierung, dynamisches Formular, Review/Submit)
- Umsetzung der UC1-Workflow-Logik in n8n inkl. Routing für `form_submit`, `form_autosave` und Chat-Pfade
- Integration von Session-Handling zwischen Frontend und n8n (Auto-Save, Restore, Status-Handling)
- Definition und technische Umsetzung der Feld- und Mapping-Logik zwischen UI und n8n-Schema

**Zusammenarbeit:**  
Teamarbeit mit Moritz Finkel, Simon Klick, Chiara Arth (hauptverantwortlich für UC3 Kommunikationsplanung, UC4 Partner-Auswahl, Dashboard). Regelmäßige Abstimmung über n8n-Workflow-Interfaces (Webhooks, Data Table Schema). Wöchentlicher Austausch mit SWM-Team.

---

### B4) Prozess

**Schritt 1: Scope und Use-Case-Struktur**  
Kick-off mit SWM Change-Management-Team: 4 vordefinierte Use Cases basierend auf realen Prozessen (UC1: Anfragenerfassung, UC3: Kommunikationsplanung, UC4: Partner-Auswahl). Entscheidung für n8n als zentrale Workflow-Engine, Next.js für Frontend.

**Schritt 2: ototyp UC1 – Chat-basierte Anfragenerfassung**  
Erster Prototyp: Reine Chat-Lösung. Next.js-Frontend mit Chat-UI, n8n-Workflow mit LLM-Agent (GPT-4o-mini). Agent führt Dialog, stellt strukturierte Fragen, speichert Antworten in Session-Objekt (Data Table). Problem erkannt: Nutzer ohne klare Navigation, unstrukturiert. Entscheidung für Pivot: Formular als Hauptkanal.

**Schritt 3: Konzept Hybrid-System (Formular + Chat)**    
Konzeptphase: Formular mit 8 Sektionen soll primärer Kanal werden, Chat als optionales Hilfe-Widget. Regel-Engine entwickelt: 4 Meta-Fragen bestimmen Projektklasse → dynamische Feld-Konfiguration (required/optional/hidden). Festlegung von 20 Pflichtfeldern und Projektklassen (Mini/Standard/Strategisch). Technisches Design: Formular sendet vollständige Daten, Chat-Widget nutzt separate Auto-Save-Route für einzelne Felder.

**Schritt 4: Integration mit n8n**  
Das Frontend übermittelt Submit, Auto-Save, Session-Laden sowie UC3/UC4-Trigger über Webhooks. Session-Daten werden robust geladen und in die UI zurückgeführt.

**Schritt 5: Dashboard und operative Nutzung**  
Eine Dashboard-Ansicht ermöglicht Session-Übersicht, Detailansicht, Folge-Workflow-Trigger und PDF-Export via `jsPDF`.

---

### B5) Umsetzung / Lösung

**Kernfeatures:**
- Multi-Step-Flow: E-Mail-Eingabe, Klassifizierung, dynamisches Formular, Review, Submission
- Projektklassifizierung über 4 Fragen mit automatischer Feldkonfiguration
- Feldweises Auto-Save über `source: "form_autosave"`
- Session-Restore über `session`-URL-Parameter und `get-session`-Webhook
- Kontextueller Chat-Assistent als Floating Widget innerhalb des Formulars
- Dashboard für Session-Management, UC3/UC4-Trigger und PDF-Export

**Wichtige technische Entscheidungen:**
- Hybrid-Ansatz (Formular als Primärpfad, Chat als optionale Assistenz)
- Regelbasierte Klassifizierung statt rein modellgetriebener Einordnung
- Direkte n8n-Webhook-Aufrufe in zentralen Flows statt API-Proxy als Laufzeitstandard
- Mapping-Layer zwischen Frontend-Feldern und n8n-Keys zur Entkopplung von UI und Backend-Schema

**Architektur in 5–8 Sätzen:**  
Das Frontend basiert auf Next.js App Router mit Routen für Landing, Hybrid-Flow und Dashboard; `/form` wird auf `/chat` umgeleitet. State für Step, Formwerte, Validierung und Session-Kontext wird clientseitig geführt. Der Datenfluss läuft primär vom Browser zu definierten n8n-Endpunkten (`change-chat`, `get-session`, `list-sessions`, `change-communication`, `change-partner-selection`). `lib/formRules.ts` kapselt die zentrale Business-Logik für Sichtbarkeit, Pflichtgrad und Validierung der Felder. `lib/config.ts` und `lib/n8n.ts` bündeln Endpunkte, Payload-Mapping und Fehlerbehandlung. Im Dashboard werden Sessions gesichtet und Folge-Workflows ausgelöst, inklusive exportierbarer Ergebnisaufbereitung.

**Technische Herausforderungen:**
- Robustes Parsing von JSON-Feldern aus n8n-Antworten (String vs. Objekt)
- Konsistenz zwischen Formularfeldnamen und n8n-Data-Table-Struktur
- UX-Schutz bei bereits eingereichten Sessions (keine erneute Einreichung)

**Code-Snippet-Idee:**  
`change-chat-app/lib/formRules.ts` (`determineProjectClass`, `updateFieldStatuses`, `validateForm`) als Kern der fachlichen Logik.

---

### B6) Design & Screens (mit Bildplan)

1. **Landing Page**  
   - Dateiname-Vorschlag: `screen-01-landing.png`  
   - Woher nehmen: Route `/`  
   - Caption: Landing-Ansicht mit klarem Startpunkt für neue Anfragen  
   - Alt-Text: Startseite des SWM Change Portals mit CTA zur Antragserstellung

2. **Projektklassifizierung (4 Fragen)**  
   - Dateiname-Vorschlag: `screen-02-classification.png`  
   - Woher nehmen: Route `/chat`, Schritt Klassifizierung  
   - Caption: Regelbasierte Projektklassifizierung als Gate zum dynamischen Formular  
   - Alt-Text: Klassifizierungsfrage mit Auswahloptionen und Fortschrittsanzeige

3. **Dynamisches Formular**  
   - Dateiname-Vorschlag: `screen-03-dynamic-form.png`  
   - Woher nehmen: Route `/chat`, Formularschritt  
   - Caption: Dynamisches 8-Sektionen-Formular mit projektklassenabhängigen Feldern  
   - Alt-Text: Mehrstufiges Formular mit Seitennavigation und Pflichtfeldmarkierungen

4. **Chat-Assistent (geöffnet)**  
   - Dateiname-Vorschlag: `screen-04-chat-assistant.png`  
   - Woher nehmen: Route `/chat`, geöffnetes Chat-Widget  
   - Caption: Integrierter Assistent für Formulierungs- und Verständnishilfe pro Feld  
   - Alt-Text: Geöffnetes Chat-Fenster mit Nutzerfrage und Antwort

5. **Dashboard (Session-Übersicht)**  
   - Dateiname-Vorschlag: `screen-05-dashboard.png`  
   - Woher nehmen: Route `/dashboard`  
   - Caption: Operative Dashboard-Ansicht zur Weiterverarbeitung von Sessions  
   - Alt-Text: Dashboard mit Session-Übersicht und Schaltflächen für Workflow-Ausführung

---

### B7) Ergebnisse / Outcome

**Ergebnis:**  
Das Projekt ist abgeschlossen und liefert einen stabilen Proof-of-Concept für strukturierte Change-Anfragen mit Session-Wiederaufnahme und operativer Weiterverarbeitung. Gleichzeitig bleibt der Charakter eines Uni-Projekts sichtbar (z. B. Security/Authentifizierung nicht auf Produktivniveau, UC2 konzeptionell).

**Impact nicht über Produktivbetrieb gemessen:**  
Keine belastbaren Live-Kennzahlen aus Realbetrieb; Bewertung basiert auf Funktionsumfang, Integrationsgrad und Testbetrieb im Projektkontext.

---

### B8) Learnings & Reflexion

- Regelbasierte Formularlogik ist für fachliche Nachvollziehbarkeit oft robuster als ein rein freier Chat-Flow.
- Früh definiertes Feld-Mapping zwischen UI und Workflow-Schema reduziert Integrationsfehler.
- Bei n8n-Integrationen ist defensives JSON-Handling zentral.
- Ein Dashboard als Arbeitsoberfläche erhöht den praktischen Nutzen über reine Datenerfassung hinaus.
---

## C) QUELLENHINWEISE (Repo-Belege)

- `change-chat-app/README.md` – Projektzweck, Flow, Setup, Komponentenübersicht
- `change-chat-app/package.json` – Tech-Stack/Dependencies
- `change-chat-app/app/chat/page.tsx` – Hybrid-Flow, Session-Restore, Submit-Logik
- `change-chat-app/components/DynamicForm.tsx` – 8 Sektionen, Auto-Save, Formular-UX
- `change-chat-app/components/ProjectClassification.tsx` – 4-Fragen-Klassifizierung
- `change-chat-app/components/ChatAssistant.tsx` – Kontext-Chat im Formular
- `change-chat-app/app/dashboard/page.tsx` – Session-Management, UC3/UC4-Trigger, PDF-Export
- `change-chat-app/lib/formRules.ts` – Regel-Engine, Mapping, Validierung
- `change-chat-app/lib/config.ts` – Endpunkte/Integrationspunkte
- `README_FILES/docs/IMPLEMENTATION_STATUS.md` – dokumentierte Implementierungsstände

---

**Erstellt am:** 27.04.2026  
**Basis:** Repository-Stand inkl. aktuellem Arbeitsstand und vorherigem Commit-Stand
