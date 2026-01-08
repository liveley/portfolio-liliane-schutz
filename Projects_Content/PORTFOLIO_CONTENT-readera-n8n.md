# Portfolio Content: ReadEra Vocabulary Learning System

---

## A) PROJECT CARD (für Overview)

**Titel:**  
ReadEra Vocabulary Learning System

**Slug-Vorschlag:**  
readera-vocabulary-learning

**Jahr (oder Zeitraum):**  
2025

**Status:**  
In Arbeit

**Kategorie:**  
coding

**1-Satz-Teaser (max 120 Zeichen):**  
Persönliches Vokabeltraining aus E-Book-Lesehistorie mit Spaced-Repetition-Algorithmus.

**Kurzbeschreibung (2–3 Sätze, sachlich):**  
Ein automatisierter n8n-Workflow, der Vokabeln aus ReadEra E-Reader Backup-Dateien extrahiert, lemmatisiert und direkt in Anki importiert. Docker-Container für spaCy-Lemmatisierung und LibreTranslate ermöglichen Sprachverarbeitung. Das System reichert Vokabeln automatisch mit Definitionen und Übersetzungen aus mehreren APIs an und erstellt kontextbasierte Anki-Karten mit Zitaten aus der Lesehistorie.

**Tags (max 6, aus Tech/Methoden):**  
n8n, Docker, spaCy, AnkiConnect, API-Integration, NLP

**Links:**
- **GitHub:** auf Anfrage
- **Demo/Live:** auf Anfrage
- **Optional:** —

---

## B) CASE STUDY (für Detailseite)

### B1) Intro

**One-liner:**  
Eine automatisierte ETL-Pipeline mit n8n, die E-Book-Vokabeln extrahiert, lemmatisiert und direkt in Anki importiert – ohne manuelle Zwischenschritte.

**Kontext:**  
Privates Lernprojekt, entstanden aus dem Bedarf, beim E-Book-Lesen markierte Vokabeln vollautomatisch zu verarbeiten. Initial als Flask-App mit eigener Datenbank entwickelt, dann auf n8n-Workflow umgestellt für bessere Automatisierung und direkte Anki-Integration ohne eigenes Frontend.

---

### B2) Problem & Ziele

**Ausgangssituation:**  
ReadEra E-Reader speichert markierte Vokabeln nur als JSON in .bak-Backup-Dateien. Initial entwickelte ich eine Flask-App mit SQLite-Datenbank und eigenem Lerninterface, stellte jedoch fest, dass ich ohnehin Anki als Lernsystem nutze. Die manuelle Extraktion und der Umweg über ein weiteres Tool waren ineffizient. Existierende Anki-Import-Tools unterstützen weder ReadEra-Backups noch automatische Lemmatisierung oder Kontext-Erhalt.

**Ziele:**
- Vollautomatische Pipeline: ReadEra .bak → Anki ohne manuelle Schritte
- Lemmatisierung mit spaCy: Wortformen auf Grundformen reduzieren (z.B. "running" → "run")
- Multi-API-Anreicherung: Definitionen, Übersetzungen, Beispiele aus verschiedenen Quellen
- Kontext-Erhalt: Zitate aus E-Books als Karteninhalt für besseres Kontextlernen

**Constraints/Requirements:**
- Idempotenz: Duplikate vermeiden, neue Beispiele zu existierenden Karten hinzufügen
- Multi-Language: EN/DE/ES/FR mit automatischer Spracherkennung und Subdeck-Mapping
- Erweiterbar: Modulare n8n-Nodes ermöglichen einfaches Hinzufügen neuer APIs oder Services

---

### B3) Meine Rolle

**Rolle:**  
Alleiniger Entwickler (Workflow-Automation & Backend)

**Verantwortung:**
- Reverse Engineering der ReadEra .bak-Dateistruktur (ZIP-Container mit JSON)
- Design und Implementierung des n8n-ETL-Workflows (20+ Nodes mit komplexer Datenlogik)
- Docker-Setup: spaCy-Service für Lemmatisierung, LibreTranslate für Offline-Übersetzungen
- Integration multipler APIs: Dictionary API, Merriam-Webster, LibreTranslate
- Python-Service-Entwicklung: spaCy-Flask-API für Lemmatisierung und POS-Tagging
- AnkiConnect-Integration: Custom Note Types, Deck-Mapping, Duplicate-Handling
- Migration von Flask-SQLite-Architektur zu n8n-Workflow-System (Architektur-Refactoring)
- Dokumentation: Workflow-Spezifikation, Docker-Setup, API-Payloads, Datenmodelle

**Zusammenarbeit:**  
Einzelprojekt.

---

### B4) Prozess

**1. Initial: Flask-Prototyp (MVP-Phase)**  
Ursprüngliche Architektur: Flask-App mit SQLite-Datenbank und eigenem Web-Interface für Spaced-Repetition-Learning. Entwicklung von Extraktions-Scripts (Python), Datenbank-Schema (4 Tabellen), Phase6-Algorithmus und Flashcard-UI. Nach Fertigstellung stellte ich fest: Ich nutze ohnehin Anki als primäres Lerntool – ein weiteres Frontend ist redundant.

**2. Pivot: Migration zu n8n-Workflow (Architektur-Refactoring)**  
Entscheidung für n8n als Automatisierungs-Layer: Bessere Visualisierung komplexer Datenflüsse, einfachere API-Integration, keine Duplikation von Anki-Features. Zerlegung der Pipeline in modulare Nodes: Trigger (Google Drive) → Extraktion (Python) → Transformation (JSON-Parsing) → Anreicherung (Multi-API) → Lemmatisierung (spaCy) → Export (AnkiConnect).

**3. Docker-Services (Offline-Infrastruktur)**  
Aufbau von zwei Docker-Containern: spaCy-Service (Flask-API für Lemmatisierung und POS-Tagging mit mehreren Sprachmodellen) und LibreTranslate (self-hosted Übersetzungs-API). Vorteil: Keine externe API-Limits, vollständig offline-fähig, konsistente Ergebnisse. Docker Compose für One-Command-Setup mit persistenten Volumes.

**4. Lemmatisierung als Kern-Feature (NLP-Integration)**  
Integration von spaCy über Custom-Service: Wortformen werden auf Lemmas reduziert (z.B. "running" → "run", "better" → "good"). Duplicate-Detection in Anki basiert auf Lemmas, nicht Originalformen. POS-Tagging für Worttyp-Klassifikation (Noun/Verb/Adjective). Multiple Sprachmodelle: en_core_web_sm, de_core_news_sm, es_core_news_sm, fr_core_news_sm.

**5. Multi-API-Orchestration (Anreicherungs-Layer)**  
n8n-Workflow orchestriert 4+ APIs parallel: Dictionary API (englische Definitionen), Merriam-Webster (erweiterte Definitionen mit Beispielen), MyMemory (Übersetzungen), LibreTranslate (Fallback für Offline). Merge-Strategie: Beste Definition pro Wort auswählen, mehrere Übersetzungen kombinieren. Error-Handling mit Fallback-Ketten und Retry-Logik.

**6. AnkiConnect-Integration (Export-Layer)**  
Custom Anki Note Type mit Feldern: Word, Lemma, Definition, Translation, Example, Quote, Book, Author. Subdeck-Mapping nach Sprache (ReadEra::en, ReadEra::de, etc.). Duplicate-Handling: Merge-Logik fügt neue Beispiele zu existierenden Karten hinzu statt Duplikate zu erstellen. Tags für Metadaten (Buch, Worttyp, Quelle).

---

### B5) Umsetzung / Lösung

**Kernfeatures:**
- **Vollautomatische Pipeline**: Google Drive Trigger → .bak-Extraktion → Lemmatisierung → Anki-Import ohne manuelle Schritte
- **spaCy-Lemmatisierung**: Wortformen auf Grundformen reduzieren (running → run) mit POS-Tagging für Worttyp-Klassifikation
- **Multi-API-Orchestration**: Parallele Abfrage von Dictionary API, Merriam-Webster, MyMemory, LibreTranslate mit Fallback-Logik
- **Docker-Services**: spaCy-Flask-API und LibreTranslate als self-hosted Container für Offline-Betrieb
- **Intelligente Deduplication**: Lemma-basierte Duplikaterkennung, neue Beispiele werden zu existierenden Anki-Karten hinzugefügt
- **Kontext-Erhalt**: Zitate aus E-Books als Karteninhalt mit Buch/Autor-Metadaten
- **Multi-Language-Subdecks**: Automatisches Mapping zu ReadEra::en, ReadEra::de, ReadEra::es, ReadEra::fr basierend auf Spracherkennung

**Wichtige technische Entscheidungen:**
- **n8n statt Flask**: Workflow-Automation bietet bessere Visualisierung komplexer Datenflüsse und erleichtert API-Integration. Kein eigenes Frontend nötig – Anki übernimmt Spaced-Repetition.
- **Docker für NLP-Services**: spaCy und LibreTranslate als Container statt Cloud-APIs ermöglichen vollständige Offline-Fähigkeit und keine Rate-Limits.
- **Lemma-basierte Deduplication**: Verhindert, dass "run", "running", "ran" als separate Karten angelegt werden. Lemmas als Unique-Identifier in AnkiConnect.
- **Multi-API-Strategie**: Verschiedene Quellen (Dictionary API für Schnelligkeit, Merriam-Webster für Qualität, LibreTranslate für Offline) erhöhen Robustheit bei API-Ausfällen.
- **Stateless Workflow**: Keine eigene Datenbank – Anki ist Single Source of Truth. Optional für Future: Zwischenspeicher-DB für Performance-Optimierung.

**Architektur:**  
n8n-Workflow mit 20+ Nodes: Google Drive Trigger → Python-Node (ZIP-Extraktion) → JSON-Parsing → Spracherkennung → spaCy-Service (Lemmatisierung) → Multi-API-Calls (parallel) → Data-Merge → AnkiConnect-Upsert. Docker Compose orchestriert spaCy-Flask-Service (Port 5001) und LibreTranslate (Port 5000). Python-Scripts im Ordner `n8n-readera-vocab/scripts/` für komplexe Transformationen außerhalb von n8n-JavaScript-Nodes.

**Code-Snippet-Idee:**  
[spacy-service/app.py](n8n-readera-vocab/spacy-service/app.py) – Zeigt spaCy-Flask-API: Lemmatisierung, POS-Tagging und Multi-Language-Modell-Handling. Demonstriert, wie Wortformen auf Lemmas reduziert werden und welche Metadaten (POS, Dependency) extrahiert werden.

---

### B6) Design & Screens (mit Bildplan)
n8n-Workflow-Übersicht**
- **Dateiname:** `screen-01-n8n-workflow-overview.png`
- **Woher nehmen:** n8n-Interface mit komplettem Workflow (alle Nodes sichtbar)
- **Caption:** Vollständiger n8n-ETL-Workflow von Google Drive Trigger bis AnkiConnect-Export mit 20+ Nodes.
- **Alt-Text:** n8n-Workflow-Editor zeigt komplette Pipeline: Trigger, Extraktion, spaCy-Lemmatisierung, Multi-API-Calls, Merge-Logic, AnkiConnect.

**Screen 2: spaCy-Service Docker-Container**
- **Dateiname:** `screen-02-docker-containers.png`
- **Woher nehmen:** Docker Desktop oder `docker ps` Terminal-Output mit laufenden Containern
- **Caption:** Docker-Container für spaCy-Lemmatisierung und LibreTranslate im laufenden Betrieb.
- **Alt-Text:** Docker-Container-Übersicht zeigt spacy-service (Port 5001) und libretranslate (Port 5000) mit Status "Running".

**Screen 3: Anki-Karte mit Kontext (Front)**
- **Dateiname:** `screen-03-anki-card-front.png`
- **Woher nehmen:** Anki Desktop mit importierter Karte, Vorderseite (nur Wort + Lemma)
- **Caption:** Anki-Kartenvorderseite zeigt Zielwort mit Lemma-Annotation.
- **Alt-Text:** Anki-Karte zeigt englisches Wort "running" mit Lemma-Hinweis "(run)" auf weißem Hintergrund.

**Screen 4: Anki-Karte mit Kontext (Back)**
- **Dateiname:** `screen-04-anki-card-back.png`
- **Woher nehmen:** Anki Desktop, Rückseite mit Definition, Übersetzung, Zitat, Buch/Autor
- **Caption:** Anki-Kartenrückseite mit Definition, Übersetzung, Original-Zitat aus E-Book und Quellenangabe.
- **Alt-Text:** Anki-Karte zeigt englische Definition, deutsche Übersetzung, Zitat im Kontext, Buchtitel und Autor.

**Screen 5: n8n-Node-Detail (Lemmatisierung)**
- **Dateiname:** `screen-05-n8n-lemmatization-node.png`
- **Woher nehmen:** n8n-Interface, geöffneter spaCy-HTTP-Request-Node mit Payload/Response
- **Caption:** n8n-Node für spaCy-Lemmatisierung zeigt API-Request mit Wortliste und Response mit Lemmas + POS-Tags.
- **Alt-Text:** n8n-Node-Editor zeigt HTTP-Request an spaCy-Service mit JSON-Payload (Wörter) und Response (Lemmas, POS, Dependencies).

**Screen 6: Anki-Browser mit ReadEra-Subdecks**
- **Dateiname:** `screen-06-anki-browser-subdecks.png`
- **Woher nehmen:** Anki-Browser-Ansicht mit ReadEra::en, ReadEra::de, etc. Subdecks und Kartenliste
- **Caption:** Anki-Browser zeigt automatisch erstellte Subdecks nach Sprache mit importierten Vokabeln.
- **Alt-Text:** Anki-Browser-Interface mit Deck-Struktur ReadEra::en, ReadEra::de, ReadEra::es und gefilterte Kartenliste mit Tags
- **Alt-Text:** Session-Complete-Screen mit Erfolgsmeldung, Statistiken (15 von 15 Wörtern bearbeitet, 8 neu beherrscht) und Button für neue Session.

---

### B7) Ergebnisse / Outcome


Der n8n-Workflow läuft produktiv und verarbeitet über 2000 Vokabeln aus ReadEra-Backups – jede Vokabel wird mit dem Originalsatz aus dem Buch, Buchtitel und Autor gespeichert. Unterstützt werden vier Sprachen (Deutsch, Englisch, Spanisch, Französisch), wobei die meisten Einträge aus Spanisch und Englisch stammen. Die Lemmatisierung über spaCy reduziert Duplikate erheblich, da Wortformen korrekt auf Grundformen gemappt werden. Multi-API-Integration liefert hochwertige Definitionen und Übersetzungen mit Fallback-Logik bei API-Ausfällen. Docker-Services ermöglichen vollständige Offline-Fähigkeit ohne externe Abhängigkeiten. Der Pivot von Flask zu n8n reduzierte Maintenance-Last deutlich, da kein eigenes Frontend gewartet werden muss.

**Impact (ohne Daten, gefühlt):**  
Das Projekt löst das ursprüngliche Problem elegant: Statt manueller Extraktion und Eingabe landen Vokabeln automatisch in Anki mit vollständigem Kontext. Die Lemmatisierung macht das System deutlich intelligenter als einfache String-Vergleiche – "running", "ran", "runs" werden korrekt als "run" erkannt. Die Docker-Architektur fühlt sich robust an und läuft stabil im Hintergrund. Der modulare n8n-Aufbau ermöglicht schnelle Anpassungen (neue APIs hinzufügen, Workflow-Schritte ändern) ohne Code-Refactoring.
---

### B8) Learnings

**Technische/produktbezogene Learnings:**
- **n8n für Daten-Pipelines ist mächtig**: Workflow-Visualisierung macht komplexe ETL-Logik nachvollziehbar. Debugging ist einfacher als in reinem Python-Code, da jede Node-Output inspizierbar ist.
- **Lemmatisierung ist essentiell für NLP**: Ohne Lemmatisierung entstehen massive Duplikate (run/running/ran). spaCy liefert präzise Ergebnisse und POS-Tagging als Bonus für Worttyp-Klassifikation.
- **Docker reduziert Komplexität**: Self-hosted Services (spaCy, LibreTranslate) in Containern sind reproduzierbar und offline-fähig. Kein Dependency-Hell, kein API-Key-Management.
- **Multi-API-Strategie erhöht Robustheit**: Eine einzige API ist Single Point of Failure. Parallele Calls mit Fallback-Logik und Merge-Strategie liefern höhere Verfügbarkeit und Qualität.
- **Don't build what exists**: Die Flask-App war technisch solide, aber redundant. Pivot zu Anki als Frontend spart Wartung und nutzt Ankis ausgereiftes SRS-System.
- **Idempotenz ist nicht trivial**: Lemma-basierte Deduplication mit "Merge-on-Conflict"-Logik erfordert sorgfältiges Design. AnkiConnect's Duplicate-Handling musste durch Custom-Logic ergänzt werden.

**Nächstes sinnvolles Improvement:**  
Eigene SQLite-Zwischendatenbank als Cache-Layer zwischen n8n und AnkiConnect. Würde Performance verbessern (schnellere Duplicate-Checks), Workflow-Logs persistieren und Statistiken ermöglichen (z.B. "Wörter pro Buch", "API-Erfolgsrate"). Optional: Web-Dashboard für Statistiken ohne Anki-Abhängigkeit.

---

## D) QUELLENHINWEISE (Repo-Belege)

**Hauptquellen (n8n-Workflow-Fokus):**
- **n8n-readera-vocab/README.md**: Workflow-Übersicht, Architektur-Diagramm, Deck-Struktur, Dateien-Übersicht
- **n8n-readera-vocab/md_data/N8N_WORKFLOW.md**: Detaillierte Node-by-Node-Spezifikation des Workflows
- **n8n-readera-vocab/md_data/DATA_MODEL.md**: Datenmodelle, Transformationen, Merge-Strategie
- **n8n-readera-vocab/md_data/ANKI_MODEL.md**: AnkiConnect Note Type, Payloads, Tags, Deck-Mapping
- **n8n-readera-vocab/md_data/REPO_ANALYSIS.md**: Analyse wiederverwendbarer Python-Module aus alter Flask-App
- **n8n-readera-vocab/spacy-service/app.py**: Flask-API für spaCy-Lemmatisierung und POS-Tagging
- **n8n-readera-vocab/md_data/docker-compose.yml**: Docker-Setup für spaCy-Service und LibreTranslate
- **n8n-readera-vocab/n8n-readera-vocab.json**: Exportierter n8n-Workflow (vollständige Node-Konfiguration)

**Legacy-Quellen (Flask-Prototyp, vor Pivot):**
- **README.md**: Ursprüngliche Projektübersicht (Flask/SQLite-Architektur)
- **src/web/app/app.py**: Flask-Routen, Session-Management (nicht mehr aktiv genutzt)
- **docs/CARD_INDEX_SYSTEM.md**: Phase6-Algorithmus-Dokumentation (Konzept, in Anki übernommen)
- **src/database/sqlite_processor.py**: Alte Datenbank-CRUD-Operationen (als Basis für n8n-Logik wiederverwendet)
