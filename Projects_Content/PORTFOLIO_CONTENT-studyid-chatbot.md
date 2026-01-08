# Portfolio Content: studyID Lern-Bot

---

## A) PROJECT CARD (für Overview)

**Titel:**  
studyID Lern-Bot

**Slug-Vorschlag:**  
studyid-lern-bot

**Jahr (oder Zeitraum):**  
WiSe 2024/25

**Status:**  
Abgeschlossen

**Kategorie:**  
coding

**1-Satz-Teaser (max 120 Zeichen):**  
KI-gestützter Chatbot für Informatik-und-Design-Studierende der HM mit RAG-basiertem Wissenszugriff

**Kurzbeschreibung (2–3 Sätze, sachlich):**  
Ein Python-basierter Lern-Chatbot für Erstsemester im Studiengang Informatik und Design an der Hochschule München. Der Bot beantwortet fachspezifische Fragen zu fünf Modulen, erstellt Übungsaufgaben und gibt schrittweise Hilfestellungen ohne direkte Lösungen preiszugeben. Studierende können eigene PDFs hochladen und der Bot indexiert diese automatisch via RAG (Retrieval-Augmented Generation) in seine Wissensbasis.

**Tags (max 6, aus Tech/Methoden):**  
Python, LlamaIndex, OpenAI, RAG, Gradio, LLM

**Links:**  
- GitHub: auf Anfrage  
- Demo/Live: auf Anfrage  
- Optional: Figma/Case-Study-Doc: —

---

## B) CASE STUDY (für Detailseite)

### B1) Intro

**One-liner:**  
Ein RAG-basierter Chatbot, der Erstsemester-Studierende im Studiengang Informatik und Design beim Lernen unterstützt.

**Kontext:**  
Entwickelt im Projektmodul Start (1. Semester Informatik und Design, Hochschule München) als Teamprojekt. Ziel war es, eine KI-Lösung zu schaffen, die Studierenden 24/7 Zugang zu fachspezifischem Wissen bietet und aktiv beim Lernen für Klausuren und bei Hausaufgaben hilft.

---

### B2) Problem & Ziele

**Ausgangssituation:**  
Erstsemester im Studiengang Informatik und Design haben oft Schwierigkeiten, schnell Antworten auf fachspezifische Fragen zu finden. Professoren sind nicht immer verfügbar, Google liefert allgemeine Ergebnisse, und das Durchsuchen von Skripten und Altklausuren kostet Zeit. Gleichzeitig besteht die Gefahr, dass Studierende bei KI-Tools wie ChatGPT direkte Lösungen bekommen, was den Lerneffekt mindert. Es fehlte ein Tool, das gezielt auf die Lehrinhalte der fünf Erstsemester-Module (Computational Thinking, Gestaltung & Typographie, Interface & Interaktionsdesign, Projektmodul Start, Wissenschaftliches Arbeiten) zugeschnitten ist und gleichzeitig motivierend und lernfördernd agiert.

**Ziele:**  
- Studierenden schnellen, kontextbezogenen Zugang zu fachspezifischem Wissen bieten
- Lernmotivation durch interaktive Übungsaufgaben und schrittweise Hilfestellungen erhöhen
- Möglichkeit für Studierende, eigene Materialien hochzuladen und in die Wissensbasis zu integrieren

**Constraints/Requirements:**  
- Antworten nur auf Basis der hochgeladenen Dokumente (keine allgemeinen ChatGPT-Antworten)
- Keine direkten Lösungen für Aufgaben, sondern schrittweise Hilfestellungen
- Mehrsprachige Ausgabe (Deutsch bevorzugt, Englisch möglich)
- Einfache lokale Installation für Studierende ohne Server-Infrastruktur
- Chat-Historie speichern und zwischen mehreren Chats wechseln können

---

### B3) Meine Rolle

**Rolle:**  
Full-Stack-Entwicklung und UI/UX-Design

**Verantwortung:**  
- Konzeption und Implementierung der Gradio-Benutzeroberfläche mit Chat-Verwaltung
- Integration von LlamaIndex zur Indexierung und Abfrage von PDF-Dokumenten
- Entwicklung des RAG-Systems mit OpenAI GPT-4o-mini als LLM
- Erstellung des System-Prompts mit Persona "Joy" (motivierender Lern-Mentor)
- Implementierung der Chat-Speicher- und Ladefunktionen (JSON-basiert)
- Implementierung der PDF-Upload-Funktionalität mit automatischer Re-Indexierung
- Styling und visuelles Design der Benutzeroberfläche

**Zusammenarbeit:**  
Teamprojekt mit 4 Studierenden. Aufgabenverteilung erfolgte nach Modulen (UI, Backend, Prompts, Testing). Wöchentliche Meetings zur Synchronisation und Review.

---

### B4) Prozess

**Schritt 1: Research & Anforderungsanalyse**  
Zunächst analysierten wir die Lernbedürfnisse von Erstsemestern durch Interviews und eigene Erfahrungen. Wir identifizierten die fünf Kernmodule und sammelten relevante Dokumente (Skripte, Modulhandbuch, Studienpläne). Parallel recherchierten wir bestehende Lern-Chatbots (z. B. CS50.ai) und definierten Scope und Abgrenzungen.

**Schritt 2: Konzept & Architektur**  
Wir entschieden uns für ein RAG-System (Retrieval-Augmented Generation), um sicherzustellen, dass der Bot nur auf Basis der hochgeladenen Dokumente antwortet. LlamaIndex wurde als Framework gewählt, da es eine einfache Integration von PDF-Indexierung und Vektordatenbank bietet. Als LLM setzen wir auf OpenAI GPT-4o-mini für schnelle und kostengünstige Antworten.

**Schritt 3: Design & Prototyping**  
Ich entwarf die Benutzeroberfläche mit Gradio, da es eine schnelle Entwicklung ermöglicht und keine Frontend-Frameworks benötigt. Das Design orientiert sich an einem klaren Layout: linke Sidebar für Chat-Verwaltung und PDF-Upload, rechts der Chatbot mit Datumsanzeige und Steuerbuttons. Avatare (menschlicher Nutzer und Roboter "Joy") wurden hinzugefügt, um eine persönliche Atmosphäre zu schaffen.

**Schritt 4: Implementierung**  
Ich implementierte die Gradio-UI mit Chat-Interface, Steuerbuttons (Pause, Fortsetzen, Stopp) und Chat-Verwaltung (Speichern, Laden, Neuer Chat). Das Backend wurde mit LlamaIndex aufgebaut: PDF-Indexierung über `SimpleDirectoryReader`, Persistierung in JSON-Dateien, und Streaming-Antworten für flüssige Ausgabe. Der System-Prompt definiert die Persona "Joy" als 30-jährige Mentorin mit empathischem, motivierendem Ton.

**Schritt 5: Testing & Iteration**  
Wir testeten den Bot mit verschiedenen Fragen und PDFs. Probleme bei der Chat-Speicherung (doppelte Nachrichten) wurden durch Vergleich der neuen mit existierenden Nachrichten behoben. Die PDF-Upload-Funktion wurde mit Feedback-Button und automatischer Liste der hochgeladenen Dateien verbessert. Das Styling wurde iterativ angepasst, um Lesbarkeit und Nutzerfreundlichkeit zu erhöhen.

**Schritt 6: Deployment & Dokumentation**  
Der Bot läuft lokal über `main.py` und öffnet sich automatisch im Browser. Eine README-Datei dokumentiert Installation, Nutzung und Scope. Die Dokumentation erklärt, dass der Bot keine emotionale Unterstützung bietet und sich auf fachliche Fragen beschränkt.

---

### B5) Umsetzung / Lösung

**Kernfeatures:**  
- RAG-basierte Antworten nur auf Basis hochgeladener PDFs (kein externes Wissen)
- Chat-Verwaltung: Speichern, Laden und Wechseln zwischen bis zu 3 Chats
- PDF-Upload via nativer Dateiauswahl (macOS und Windows) mit automatischer Re-Indexierung
- Streaming-Antworten für flüssige Ausgabe
- Steuerbuttons: Pause, Fortsetzen und Stopp während der Antwortgenerierung
- System-Prompt mit Persona "Joy": motivierender, empathischer Lern-Mentor
- Avatare für Bot und Nutzer zur Personalisierung

**Wichtige technische Entscheidungen:**  
- **LlamaIndex + OpenAI GPT-4o-mini:** LlamaIndex erleichtert die Integration von Vektordatenbanken und PDF-Indexierung. GPT-4o-mini bietet ein gutes Preis-Leistungs-Verhältnis für Streaming-Antworten.
- **Gradio als UI-Framework:** Ermöglicht schnelle Entwicklung ohne React/Vue. Nachteil: Styling ist weniger flexibel, aber ausreichend für MVP.
- **JSON-basierte Chat-Persistierung:** Einfache Lösung ohne Datenbank. Chats werden als JSON-Dateien gespeichert, was die Installation vereinfacht.
- **Native Dateiauswahl statt Gradio-Upload:** Gradio-Upload war zu fehleranfällig. Wir implementierten native Dateiauswahl mit `tkinter` (Windows) und AppleScript (macOS) für bessere UX.

**Architektur:**  
Der Bot besteht aus drei Hauptkomponenten: UI, Indexierung und Chat-Engine. Die UI ist in `gradio_ui.py` implementiert und verwaltet Chat-Historie, Buttons und PDF-Upload. Die Indexierung erfolgt in `main.py`: Beim Start lädt LlamaIndex alle PDFs aus `./datenbank` und erstellt einen `VectorStoreIndex`, der in `./datenbank/persist` als JSON persistiert wird. Bei PDF-Upload wird der Index neu erstellt. Die Chat-Engine nutzt `ChatMode.CONDENSE_PLUS_CONTEXT`, um Kontext aus früheren Nachrichten zu berücksichtigen. Antworten werden gestreamt, sodass Nutzer sofort erste Tokens sehen. Steuerbuttons nutzen globale Flags (`is_paused`, `stop_response`), um die Ausgabe zu pausieren oder zu stoppen.

**Optional: Code-Snippet-Idee**  
[main.py](chatbot%20(studyID)/main.py#L58-L80): Die `response`-Funktion zeigt, wie Chat-Historie in LlamaIndex-Format konvertiert wird und wie Streaming mit Pause/Stopp-Logik implementiert ist.

---

### B6) Design & Screens

**Welche 3–6 Screens soll ich zeigen?**

1. **Screen 1: Startansicht mit Willkommensnachricht**  
   - Dateiname: `screen-01-welcome.png`  
   - Woher: Bot starten, keine Eingabe  
   - Caption: Startansicht mit Willkommensnachricht von Joy und leerem Chat-Interface  
   - Alt-Text: Screenshot des studyID Lern-Bots mit Willkommensnachricht "Hallo, mein Name ist Joy"

2. **Screen 2: Chat mit Antwort zu fachlicher Frage**  
   - Dateiname: `screen-02-chat-example.png`  
   - Woher: Frage eingeben (z. B. "Was ist Computational Thinking?"), Antwort anzeigen lassen  
   - Caption: Beispiel einer fachlichen Frage mit Antwort von Joy im Gesprächsverlauf  
   - Alt-Text: Chat-Interface mit Frage und Antwort zu Computational Thinking

3. **Screen 3: Linke Sidebar mit Chat-Verwaltung und PDF-Liste**  
   - Dateiname: `screen-03-sidebar.png`  
   - Woher: Mehrere Chats speichern, PDFs hochladen, dann Sidebar fokussieren  
   - Caption: Linke Sidebar mit gespeicherten Chats und hochgeladenen PDFs  
   - Alt-Text: Seitenleiste mit Buttons für Chat 1, Chat 2, Chat 3 und Liste hochgeladener PDFs

4. **Screen 4: PDF-Upload-Feedback**  
   - Dateiname: `screen-04-pdf-upload.png`  
   - Woher: PDF hochladen, Feedback-Button zeigt "✅ Successful"  
   - Caption: Erfolgreiches Hochladen eines PDFs mit visuellem Feedback  
   - Alt-Text: Button "✅ Successful" nach PDF-Upload

5. **Screen 5: Steuerbuttons (Pause, Fortsetzen, Stopp)**  
   - Dateiname: `screen-05-controls.png`  
   - Woher: Während einer langen Antwort Pause-Button klicken, dann Screenshot  
   - Caption: Steuerbuttons zum Pausieren, Fortsetzen und Stoppen von Antworten  
   - Alt-Text: Buttons "Chat speichern", "Pause", "Fortsetzen", "Stopp" unterhalb des Chat-Interface

6. **Screen 6: Gespeicherter Chat laden**  
   - Dateiname: `screen-06-load-chat.png`  
   - Woher: Chat speichern, dann anderen Chat öffnen, danach gespeicherten Chat laden  
   - Caption: Geladener Chat mit vorheriger Konversation  
   - Alt-Text: Chat-Interface mit geladenem Gesprächsverlauf aus vorheriger Sitzung

---

### B7) Ergebnisse / Outcome

**Ergebnis:**  
Der studyID Lern-Bot ist ein funktionsfähiger MVP, der Erstsemestern im Studiengang Informatik und Design schnellen Zugang zu fachspezifischem Wissen bietet. Der Bot beantwortet Fragen auf Basis der hochgeladenen Dokumente und gibt schrittweise Hilfestellungen, ohne direkte Lösungen zu nennen. Die Chat-Verwaltung und PDF-Upload-Funktionalität machen das Tool flexibel und erweiterbar. Studierende können eigene Materialien integrieren und zwischen mehreren Chats wechseln.

**Impact (subjektiv):**  
Das Feedback von Kommilitonen war positiv: Der Bot wurde als hilfreich empfunden, insbesondere beim Lernen für Klausuren und bei der Klärung von Fachbegriffen. Die Willkommensnachricht und Persona "Joy" schaffen eine angenehme Lernatmosphäre. Die Möglichkeit, eigene PDFs hochzuladen, wurde als besonders nützlich hervorgehoben. Allerdings ist der Bot auf lokale Nutzung beschränkt und erfordert eine OpenAI-API-Key, was die Verbreitung einschränkt.

---

### B8) Learnings

**Learnings:**  
- **RAG-Systeme sind mächtig, aber komplex:** Die Integration von LlamaIndex war einfacher als erwartet, aber das Tuning von Chunk-Größe und Top-K-Werten für präzise Antworten erfordert Zeit und Experimente.
- **Prompt-Engineering ist entscheidend:** Der System-Prompt musste mehrfach iteriert werden, um den Ton (motivierend, aber nicht übertrieben) und die Abgrenzung (keine direkten Lösungen) zu treffen.
- **Gradio-Limitierungen:** Styling in Gradio ist weniger flexibel als in React. Custom CSS hilft, aber einige UI-Elemente lassen sich nicht optimal anpassen.
- **Native Dateiauswahl > Gradio-Upload:** Der Gradio-Upload war zu fehleranfällig (Dateien wurden nicht korrekt gelesen). Native Dateiauswahl via `tkinter` und AppleScript bietet bessere UX.
- **Chat-Persistierung mit JSON ist ausreichend für MVP:** Für einen produktiven Einsatz wäre eine Datenbank (SQLite) besser, aber JSON reicht für lokale Nutzung.
- **Streaming verbessert UX massiv:** Nutzer sehen sofort erste Tokens und die Antwort wirkt flüssiger. Pause/Stopp-Funktionalität erhöht die Kontrolle.

**Nächstes sinnvolles Improvement:**  
Deployment als Web-App (z. B. via Hugging Face Spaces oder Railway) mit User-Authentifizierung, sodass Studierende den Bot ohne lokale Installation nutzen können. Alternativ: Integration in LMS (z. B. Moodle) als Plugin.

---

## C) QUELLENHINWEISE (Repo-Belege)

- **README.md:** Abschnitte 1–5 (Zweck, Scope, Installation, Fazit)
- **main.py:** Zeilen 1–233 (Indexierung, Chat-Engine, PDF-Upload, Response-Funktion)
- **ui/gradio_ui.py:** Zeilen 1–150 (UI-Komponenten, Chat-Verwaltung, Buttons)
- **utils/chat_management.py:** Zeilen 1–60 (Speichern, Laden, Chat-Nummern)
- **utils/prompts_joy.py:** Zeilen 1–50 (System-Prompt mit Persona "Joy")
- **utils/control_functions.py:** Zeilen 1–30 (Pause/Stopp-Logik)
- **datenbank/:** PDFs (CT-Buch, Modulhandbuch, Studienpläne, etc.)
- **ui/style.css:** Zeilen 1–200 (Custom CSS für Gradio-UI)