# Portfolio-Content: SWM Change Management Automation

---

## A) PROJECT CARD (für Overview)

**Titel:**  
SWM Change Management – KI-gestützte Changebegleitung

**Slug-Vorschlag:**  
swm-change-management-automation

**Jahr (oder Zeitraum):**  
Wintersemester 2025/26

**Status:**  
In Arbeit

**Kategorie:**  
coding

**1-Satz-Teaser (max 120 Zeichen):**  
Automatisierte Change-Anfragen mit hybridem Form/Chat-System und n8n-Workflow-Ökosystem

**Kurzbeschreibung (2–3 Sätze, sachlich):**  
Modulprojekt für Stadtwerke München (SWM): Ein hybrides System zur strukturierten Erfassung von Change-Anfragen. Kombiniert Next.js-Frontend (dynamisches Formular + Chat-Assistent) mit n8n-Backend (KI-Agent, Session-Management, automatische Dokumentengenerierung). Vier Use Cases: Anfragenerfassung, Kommunikationsplanung, Partner-Auswahl, Monitoring-Dashboard.

**Tags (max 6):**  
Next.js, n8n, TypeScript, OpenAI GPT-4, Workflow-Automation, LLM-Integration

**Links:**
- GitHub: auf Anfrage
- Demo/Live: auf Anfrage
- Optional: Figma/Case-Study-Doc: —

---

## B) CASE STUDY (für Detailseite)

### B1) Intro

**One-liner:**  
Ein KI-gestütztes Automatisierungssystem für Change-Management-Prozesse bei Stadtwerke München.

**Kontext:**  
Laufendes Universitätsprojekt im Modul "Web-Projektmodul". Entwickelt für Praxispartner SWM, um Change-Anfragen strukturiert zu erfassen und automatisiert weiterzuverarbeiten. Teamarbeit über 4 Monate mit wöchentlichem Austausch und iterativem Aufbau von vier Use Cases.

---

### B2) Problem & Ziele

**Ausgangssituation:**  
Change-Begleitungen bei großen Organisationen wie SWM erfordern strukturierte Informationssammlung (bis zu 20 Felder): Projektziele, betroffene Bereiche, Zeitrahmen, Risiken etc. Bisherige Praxis: E-Mail-Anfrage → manuelles Meeting vereinbaren → Change-Management-Mitarbeiter füllt Formular während des Gesprächs aus. Hoher administrativer Aufwand, keine Self-Service-Option für Anfragende. Ziel war ein intelligentes System, das sowohl strukturierte Formulareingaben als auch dialogbasierte Erfassung (Chat) ermöglicht, Informationen persistent speichert und Folge-Use-Cases (Kommunikationsplanung, Partner-RFPs) automatisch beliefert.

**Ziele:**
- Strukturierte, vollständige Erfassung von Change-Anfragen mit dynamischer Feldkonfiguration (abhängig von Projektgröße)
- Flexible Interaktion: Formular als Hauptkanal, Chat-Assistent als optionale Hilfe
- Automatisierte Dokumentengenerierung (Word-Export, Markdown-Reports) nach Abschluss
- Workflow-Ecosystem: Datenübergabe an nachgelagerte Use Cases (Kommunikationsplanung UC3, Partner-Auswahl UC4)

**Constraints/Requirements:**
- Tech-Stack vorgegeben: n8n als Workflow-Engine, Next.js für Frontend, OpenAI GPT-4 als LLM
- Session-basierte Persistenz über n8n Data Tables (keine externe Datenbank)
- Hybrid-Ansatz: Formular mit Chat-Widget
- 20 Pflichtfelder definiert (von SWM-Dokumentation vorgegeben)
- Keine Authentifizierung notwendig (Proof-of-Concept)

---

### B3) Meine Rolle

**Rolle:**  
Full-Stack-Entwicklung (Frontend + Backend-Workflows) für UC1 (Hybrid-System) + Systemarchitektur

**Verantwortung:**
- **Use Case 1 (Hybrid-System):** Eigenständige Entwicklung von ~95% (Frontend + Backend-Workflows)
- Konzeption und Implementierung des Next.js-Frontends (TypeScript, Tailwind CSS)
- Entwicklung des n8n-Hauptworkflows: Session-Management, Switch-Node-Architektur, LLM-Integration
- Design der Regellogik für dynamische Formulare (Projektklassen: Mini/Standard/Strategisch)
- Implementierung des Hybrid-Systems: Formular mit integriertem Chat-Widget (Floating Button)
- Debugging komplexer Datenpersistenz-Probleme (JSON-Parsing, Auto-Save, Session-Updates)
- Dokumentation (README, Architektur-Diagramme, Workflow-Guides)

**Zusammenarbeit:**  
Teamarbeit mit Moritz Finkel, Simon Klick, Chiara Arth (hauptverantwortlich für UC3 Kommunikationsplanung, UC4 Partner-Auswahl, Dashboard). Regelmäßige Abstimmung über n8n-Workflow-Interfaces (Webhooks, Data Table Schema). Wöchentlicher Austausch mit SWM-Team. Zeitaufwand: ~8 Stunden pro Woche über 4 Monate.

---

### B4) Prozess

**Schritt 1: Anforderungsanalyse & Use-Case-Definition**  
Kick-off mit SWM Change-Management-Team: 4 vordefinierte Use Cases basierend auf realen Prozessen (UC1: Anfragenerfassung, UC3: Kommunikationsplanung, UC4: Partner-Auswahl). Entscheidung für n8n als zentrale Workflow-Engine, Next.js für Frontend.

**Schritt 2: Prototyp UC1 – Chat-basierte Anfragenerfassung**  
Erster Prototyp: Reine Chat-Lösung. Next.js-Frontend mit Chat-UI, n8n-Workflow mit LLM-Agent (GPT-4o-mini). Agent führt Dialog, stellt strukturierte Fragen, speichert Antworten in Session-Objekt (Data Table). Problem erkannt: Nutzer ohne klare Navigation, unstrukturiert. Entscheidung für Pivot: Formular als Hauptkanal.

**Schritt 3: Konzept Hybrid-System (Formular + Chat)**  
Konzeptphase: Formular mit 8 Sektionen soll primärer Kanal werden, Chat als optionales Hilfe-Widget. Regel-Engine entwickelt: 4 Meta-Fragen bestimmen Projektklasse → dynamische Feld-Konfiguration (required/optional/hidden). Festlegung von 20 Pflichtfeldern und Projektklassen (Mini/Standard/Strategisch). Technisches Design: Formular sendet vollständige Daten, Chat-Widget nutzt separate Auto-Save-Route für einzelne Felder.

**Schritt 4: Implementierung Frontend & Backend**  
Frontend: `ProjectClassification.tsx` (4 Fragen) → `DynamicForm.tsx` (8 Sektionen, dynamische Felder). `formRules.ts` enthält Regellogik. Chat-Widget als `ChatAssistant.tsx` (Floating Button). Backend: n8n-Workflow mit Switch-Node (3 Branches: form_submit, form_autosave, chat). LLM-Integration für Chat-Branch, direktes Session-Update für Form-Submit. Herausforderungen: JSON-Parsing-Bugs, Auto-Save-Fehler (leere Response von n8n), komplexe State-Synchronisation.

**Schritt 5: Use Cases 3 & 4 – Downstream-Workflows**  
UC3 (Kommunikationsplanung): Workflow liest Session aus Data Table, generiert via GPT-4o: Change Story, Kommunikationsplan, 5 Text-Entwürfe (E-Mail, FAQ, PPT-Skript, Intranet, Manager-Brief). Output als Markdown. UC4 (Partner-Auswahl): Generiert Anforderungsprofil, RFP-Dokument, Bewertungsmatrix. Beide Workflows nutzen session_id als Input → vollständige Trennung von UC1.

**Schritt 6: Dashboard & Testing**  
Dashboard (`dashboard.html`): Standalone HTML-Seite mit Workflow-Übersicht, Session-Listing (via n8n Webhook), Trigger-Buttons für UC3/UC4. Lokales Testing mit ngrok für n8n-Webhooks. Iterative Bug-Fixes: Auto-Save-Errors, Classification-Speicherung, Validierungslogik.

---

### B5) Umsetzung / Lösung

**Kernfeatures:**
- **Projektklassifizierung:** 4 Meta-Fragen → Regel-Engine bestimmt Projektklasse (Mini/Standard/Strategisch) → dynamische Feldkonfiguration (8–17 Pflichtfelder)
- **Dynamisches Formular:** 8 Sektionen, conditional Felder, Validierung (Pflicht/Optional), Hilfe-Texte, Min-Length-Warnings
- **Chat-Assistent (Floating Widget):** Kontextsensitive Hilfe beim Ausfüllen, nutzt LLM für intelligente Antworten, separates Session-Management
- **Auto-Save:** Jedes Feld speichert automatisch bei Änderung via n8n Webhook (debounced, 500ms)
- **Session-Management:** Persistenz über n8n Data Tables (`agent_sessions`), 14 Spalten inkl. JSON-Felder (answers, metadata, classification)
- **n8n Workflow-Ökosystem:** 4 Use Cases, Switch-Node für 3 Branches (form/autosave/chat), LLM-Integration, Dokumentengenerierung (Word/Markdown)
- **Monitoring Dashboard:** HTML/Vanilla JS, Session-Übersicht, Trigger-Interface für UC3/UC4

**Wichtige technische Entscheidungen:**
- **Hybrid-Ansatz:** Kombination Formular + Chat statt Entweder-Oder → Nutzer haben strukturierten Hauptpfad (Formular), optionale Unterstützung (Chat). Formular-Submit setzt Status direkt auf "submitted_request", Chat-Modus durchläuft Validierung mit Status "open"
- **n8n Data Tables statt SQL-DB:** Einfachere Einrichtung für Proof-of-Concept, ausreichend für <1000 Sessions. Nachteil: Limitierte Query-Funktionen, kein Relational Schema. Entscheidung getroffen wegen Zeitbeschränkung und fehlender Server-Infrastruktur.
- **Switch-Node statt Filter-Kaskade:** Ursprünglich mehrere IF-Nodes → Code-Debt. Refactoring auf Switch-Node (`source` als Basis) → klarere Architektur, einfacheres Debugging, schnellere Execution.
- **GPT-4o-mini vs. GPT-4o:** Mini für Chat-Branch (schneller, günstiger), GPT-4o für UC3/UC4 (komplexe Textgenerierung). Trade-off: Antwortqualität vs. Latenz/Kosten.

**Architektur in 5–8 Sätzen:**  
Das System folgt einer Client-Server-Architektur. Next.js-Frontend (App Router, TypeScript, Tailwind) hostet drei Routes: Landing (`/`), Formular-Workflow (`/form`), Legacy-Chat (`/chat`). API-Routes (`/api/n8n/*`) fungieren als Proxy zu n8n-Webhooks. n8n-Backend besteht aus vier Workflows: UC1 (Hauptworkflow mit Switch-Node für form/autosave/chat), UC3 (Kommunikation), UC4 (Partner), UC-List (Session-Listing für Dashboard). Data Tables speichern Sessions persistent (14 Spalten, JSON-Felder). LLM-Integration via OpenAI-Node (GPT-4o-mini für Chat, GPT-4o für Generierung). Datenfluss: Frontend → Next.js API → n8n Webhook → Switch-Node → Branch-spezifische Verarbeitung → Data Table Update → Response zurück.

**Code-Snippet-Idee:**  
`change-chat-app/lib/formRules.ts`, Funktion `determineProjectClass()` – zeigt Regellogik für Projektklassen-Bestimmung (if-else-Baum basierend auf 4 Klassifizierungsfragen). Illustriert Business Logic im Frontend.

---

### B6) Design & Screens (mit Bildplan)

**Welche 3–6 Screens soll ich zeigen?**

1. **Landing Page**  
   - Dateiname-Vorschlag: `screen-01-landing.png`  
   - Woher nehmen: Route `/` im Browser (`localhost:3000/`)  
   - Caption: Landing Page mit Call-to-Action für Formular-Start  
   - Alt-Text: Startseite mit Titel "SWM Change Management", Untertitel und Button "Change-Anfrage starten"

2. **Projektklassifizierung (4 Fragen)**  
   - Dateiname-Vorschlag: `screen-02-classification.png`  
   - Woher nehmen: Route `/form`, Schritt 1 (vor Auswahl der ersten Frage)  
   - Caption: Initiale Klassifizierung: 4 Meta-Fragen zur Bestimmung der Projektgröße  
   - Alt-Text: Fragebogen mit Progress-Bar, Frage "Dauer des Vorhabens" mit 4 Buttons (bis 2 Wochen, 1-3 Monate, 3-12 Monate, über 1 Jahr)

3. **Dynamisches Formular (Hauptansicht)**  
   - Dateiname-Vorschlag: `screen-03-form-main.png`  
   - Woher nehmen: Route `/form`, Schritt 2, Sektion 1-2 sichtbar  
   - Caption: Formular mit 8 Sektionen, dynamische Felder basierend auf Projektklasse  
   - Alt-Text: Formular-Interface mit Accordion-Sektionen ("Basisdaten", "Ziele & Nutzen"), Eingabefelder für Titel, Beschreibung, Ansprechpartner, Pflichtfeld-Markierungen

4. **Chat-Assistent (geöffnet)**  
   - Dateiname-Vorschlag: `screen-04-chat-widget.png`  
   - Woher nehmen: Route `/form`, Chat-Widget per Floating Button öffnen, Test-Nachricht senden  
   - Caption: Chat-Assistent als Floating Widget zur kontextsensitiven Hilfe beim Ausfüllen  
   - Alt-Text: Geöffnetes Chat-Fenster mit Konversation ("Wie formuliere ich die Zielsetzung?"), LLM-Antwort sichtbar

5. **n8n Workflow (UC1 – Hauptworkflow)**  
   - Dateiname-Vorschlag: `screen-05-n8n-workflow.png`  
   - Woher nehmen: n8n UI, Workflow `SWM-Change-Combined.json` öffnen, Zoom auf Switch-Node + 3 Branches  
   - Caption: n8n-Workflow mit Switch-Node: 3 Branches für form_submit, form_autosave, chat  
   - Alt-Text: n8n Canvas mit Nodes (Webhook, Normalize, Switch, 3 verzweigte Pfade mit LLM-Nodes, Data-Table-Updates)

6. **Dashboard (Session-Übersicht)**  
   - Dateiname-Vorschlag: `screen-06-dashboard.png`  
   - Woher nehmen: `SWM_DASHBOARD/dashboard.html` im Browser öffnen (mit n8n-Webhook konfiguriert)  
   - Caption: Master Dashboard für Workflow-Monitoring und Session-Management  
   - Alt-Text: Dashboard mit Session-Liste (Session-ID, E-Mail, Status, Erstelldatum), Trigger-Buttons für UC3/UC4

---

### B7) Aktueller Stand & nächste Schritte

**Entwicklungsstand (Januar 2026):**  
Funktionsfähiges Proof-of-Concept für UC1 (Hybrid-System) weitgehend implementiert. Formular-basierte Eingabe mit dynamischer Feldkonfiguration läuft stabil, Chat-Widget funktioniert als optionale Hilfe. UC3 und UC4 (Kommunikationsplanung, Partner-Auswahl) sind von Teammitgliedern in Entwicklung, nutzen UC1-Sessions als Input. Dashboard zeigt Session-Übersicht. Aktuell in Testing-Phase: Iterative Bug-Fixes für Auto-Save-Stabilität, Session-Persistence, Frontend-Validierung.

**Offene Arbeiten:**
- **Frontend-Polish:** UX-Verbesserungen im Formular-Flow (z.B. Progress-Indicator zwischen Sektionen)
- ...

**Impact nicht gemessen:**  
Keine Produktivdaten oder Nutzertests. Projekt blieb im universitären Kontext.

---

### B8) Bisherige Learnings & Reflexion

**Technische Erkenntnisse:**
- **Hybrid-Systeme erfordern klare Mental Models:** Nutzer müssen verstehen, wann Formular vs. Chat sinnvoll ist. Floating-Widget-Design half, Chat als "optionale Hilfe" zu framen statt als Hauptkanal. Lesson: UX muss Hierarchie deutlich machen.
- **n8n Data Tables sind nicht für komplexe Queries geeignet:** Fehlende Joins, keine Aggregationen, langsame Updates bei großen Tabellen. Nächstes Projekt: PostgreSQL + n8n Connector für relationale Daten.
- **JSON-Parsing in n8n ist fehleranfällig:** Viele Bugs durch `JSON.parse()` auf bereits geparsten Objekten. Lesson: Immer `typeof` prüfen, defensive Programming. n8n-interne Nodes (Set, Code) haben unterschiedliche Parsing-Regeln → viel Debugging.
- **LLM-Prompts für strukturierte Outputs brauchen strenge Schemata:** Initiale Prompts gaben zu freie Texte → JSON-Output unzuverlässig. Lösung: JSON-Schema + `response_format: json_object` in OpenAI-API. Lesson: LLM-Outputs müssen validiert werden, nicht vertraut.
- **Scope Creep vermeiden:** Ursprünglich 2 Use Cases geplant, 4 implementiert. Lesson: Klare Priorisierung mit Stakeholdern essentiell. 80/20-Regel anwenden: Lieber weniger Features vollständig implementiert als viele halbfertige Baustellen.
- **Dokumentation parallel schreiben spart Zeit:** README/Diagramme während Implementation → leichter nachzuvollziehen als Post-hoc. n8n-Workflows sind visuell, aber Node-Logik (Code-Nodes) benötigt Inline-Kommentare.

**Nächste geplante Improvements (vor Projektabschluss):**
- **Direkte Anmeldung:** Nutzer sollen sich direkt anmelden können, ohne dass vorher eine E-Mail-Anfrage mit Session-ID notwendig ist.

---

## C) QUELLENHINWEISE (Repo-Belege)

- **README (Change-Chat-App):** [change-chat-app/README.md](change-chat-app/README.md) – Übersicht Hybrid-System, Architektur, Installation, 8 Sektionen, Deployment-Anleitung (Zeilen 1-397)
- **Workflow-Ökosystem:** [README_FILES/docs/Workflow_Ecosystem_Overview.md](README_FILES/docs/Workflow_Ecosystem_Overview.md) – Executive Summary, 4 Use Cases, Datenflüsse, Status-Matrix (Zeilen 1-973)
- **Implementierungsstatus:** [README_FILES/docs/IMPLEMENTATION_STATUS.md](README_FILES/docs/IMPLEMENTATION_STATUS.md) – Bug-Fixes (DynamicForm "0"-Bug), n8n-Workflow-Details, Migration (Zeilen 1-420)
- **Use Cases 3 & 4:** [README_FILES/docs/UC3_UC4_Documentation.md](README_FILES/docs/UC3_UC4_Documentation.md) – Workflow-Architektur, Node-Übersicht, Aktivitätsdiagramme (Zeilen 1-762)
- **Data Table Schema:** [README_FILES/docs/DATA_TABLE_SCHEMA.md](README_FILES/docs/DATA_TABLE_SCHEMA.md) – 14 Spalten, JSON-Felder, project_classification (Zeilen 1-103)
- **Tech-Stack:** [change-chat-app/package.json](change-chat-app/package.json) – Dependencies (Next.js 14, React 18, TypeScript 5, Tailwind 3)
- **Regellogik:** [change-chat-app/lib/formRules.ts](change-chat-app/lib/formRules.ts) – Projektklassen-Bestimmung, FORM_SECTIONS, Validierung (Zeilen 1-610)
- **Komponenten:** [change-chat-app/components/ProjectClassification.tsx](change-chat-app/components/ProjectClassification.tsx) – 4 Meta-Fragen, determineProjectClass() (Zeilen 1-284)
- **Dashboard:** [SWM_DASHBOARD/dashboard.html](SWM_DASHBOARD/dashboard.html) – Master Dashboard HTML/CSS/Vanilla JS (Zeilen 1-763)
- **GitHub-Submission:** [data/github-repo.md](data/github-repo.md) – Projekt-Abgabe-Instructions, Team-Ordner-Info
- **Debug-Notes:** [data/prompt-and-answers-chat-app.md](data/prompt-and-answers-chat-app.md) – Entwicklungs-Log, Bug-Fixes, Auto-Save-Errors

---

**Erstellt am:** 08.01.2026  
**Basis:** Repository `n8n-workflows-website`, Commit-Stand Januar 2026