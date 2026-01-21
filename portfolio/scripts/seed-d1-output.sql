-- ============================================================================
-- D1 Seed Data
-- Generated from projects-data.json
-- Date: 2026-01-21T22:14:32.586Z
-- Projects: 6
-- ============================================================================

-- Clear existing data
DELETE FROM project_process_steps;
DELETE FROM project_links;
DELETE FROM projects;

-- Insert projects
INSERT INTO projects (
      id, slug, title, year, category, featured, status, 
      short_description, role, cover_image,
      tags, tech_stack,
      detail_context, detail_problem, detail_goals, detail_role,
      detail_challenges, detail_results, detail_learnings, detail_images
    ) VALUES (
      1,
      'life-threads-data-vis',
      'Life Threads – Interaktive Datenvisualisierung',
      2025,
      'data',
      1,
      'in-progress',
      'Scrollytelling-Visualisierung meines Jahres: Schlaf, Sport, Lesen und Uni – in interaktiven Datengeschichten.',
      'Solo-Entwicklerin und Information Designerin',
      '/projects/life-threads.png',
      '["SvelteKit","TypeScript","D3.js","Canvas API","Scrollytelling","Data Visualization"]',
      '["SvelteKit","TypeScript","D3.js","Canvas API","IntersectionObserver"]',
      'Universitätsprojekt im Rahmen des Kurses ''Information Design''. Ziel war es, persönliche Daten nicht nur zu visualisieren, sondern eine nachvollziehbare Geschichte zu erzählen.',
      'Rohdaten aus verschiedenen Quellen liegen als CSV-Dateien vor, aber die Geschichte dahinter bleibt unsichtbar.',
      '["Persönliche Daten aus drei Quellen in einer konsistenten Visualisierung zusammenführen","Scroll-basiertes Storytelling-Format entwickeln","Canvas-basierte Visualisierungen für Performance bei großen Datensätzen"]',
      'Solo-Entwicklerin und Information Designerin: Datenaufbereitung, CSV-Parser-Entwicklung, Scrollytelling-System mit Svelte, Canvas-Rendering.',
      NULL,
      '["Funktionsfähige Scrollytelling-Visualisierung mit 4 interaktiven Charts","Performance-optimiert: 365 Tage Daten in Canvas mit 60fps","Custom Scrollytelling-System ohne externe Dependencies"]',
      NULL,
      NULL
    );

INSERT INTO project_links (project_id, type, url) VALUES (1, 'note', 'auf Anfrage');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (1, 0, 'Research & Datenanalyse', 'Rohdaten runtergeladen und Data Wrangling durchgeführt. Erste explorative Visualisierungen in Python/Pandas.');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (1, 1, 'Konzept & Wireframing', 'Scrollytelling-Struktur definiert: Intro → Year at a Glance → A Day in My Life → Weekly Rhythm.');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (1, 2, 'Technische Architektur', 'SvelteKit mit TypeScript. CSV-Parser in utils/, State Management mit Svelte Stores.');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (1, 3, 'Implementierung der Visualisierungen', 'Start mit SVG-basierten Charts, Migration zu Canvas für Performance.');

INSERT INTO projects (
      id, slug, title, year, category, featured, status, 
      short_description, role, cover_image,
      tags, tech_stack,
      detail_context, detail_problem, detail_goals, detail_role,
      detail_challenges, detail_results, detail_learnings, detail_images
    ) VALUES (
      2,
      'ressource-realms-3d',
      'Ressource Realms – 3D-Strategiespiel',
      2025,
      'coding',
      1,
      'finished',
      'Browser-basiertes 3D-Strategiespiel mit WebGL-Rendering, interaktivem Spielbrett und komplexer Spiellogik.',
      'Full-Stack Game Developer im 4-Personen-Team',
      '/projects/ressource-realms.png',
      '["Three.js","JavaScript","WebGL","Blender","Vite","Game Development"]',
      '["Three.js","JavaScript","Vite","Blender","WebGL"]',
      'Entwickelt im Rahmen des Projektmoduls ''Prozesse'' (Hochschule München) als Teamprojekt über ein Semester.',
      'Brettspiele erfordern physisches Material, Platz und oft lange Setupzeiten.',
      '["Vollständig spielbare Implementierung mit automatisierter Regelverwaltung","3D-Visualisierung einer hexagonalen Spielwelt","Modulare, erweiterbare Code-Architektur"]',
      'Full-Stack Game Developer: Siegpunktezählung, Räuber-Mechanik, UX-Features, Spielbrett-Dynamik, Bugfixing.',
      NULL,
      '["Vollständig spielbare 3D-Umsetzung für 2 Spieler im Browser","Automatisierte Regelverwaltung reduziert Fehlerquellen","Modulare Architektur ermöglicht einfache Erweiterungen"]',
      NULL,
      NULL
    );

INSERT INTO project_links (project_id, type, url) VALUES (2, 'note', 'auf Anfrage');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (2, 0, 'Konzeption & Technologie-Setup', 'Analyse bestehender Brettspiel-Regeln. Setup von Vite und Three.js.');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (2, 1, '3D-Umgebung & Asset-Integration', 'Erstellung der hexagonalen Spielwelt. Integration von Blender-Modellen.');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (2, 2, 'Spiellogik-Implementierung', 'Core-Mechaniken: Bauvalidierung, Ressourcenverwaltung, Handelssysteme.');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (2, 3, 'UI & Interaktionssysteme', 'Benutzeroberfläche mit Ressourcenanzeigen, Baumenü, Hover-Previews.');

INSERT INTO projects (
      id, slug, title, year, category, featured, status, 
      short_description, role, cover_image,
      tags, tech_stack,
      detail_context, detail_problem, detail_goals, detail_role,
      detail_challenges, detail_results, detail_learnings, detail_images
    ) VALUES (
      3,
      'studyid-lern-bot',
      'studyID Lern-Bot',
      2024,
      'coding',
      0,
      'finished',
      'KI-gestützter Chatbot für Informatik-und-Design-Studierende mit RAG-basiertem Wissenszugriff.',
      'Full-Stack-Entwicklung und UI/UX-Design',
      '/projects/studyid-chatbot.png',
      '["Python","LlamaIndex","OpenAI","RAG","Gradio","LLM"]',
      '["Python","LlamaIndex","OpenAI GPT-4o-mini","Gradio"]',
      'Entwickelt im Projektmodul Start (1. Semester) als Teamprojekt. Ziel: KI-Lösung für 24/7 Wissenszugriff.',
      'Erstsemester haben Schwierigkeiten, schnell Antworten auf fachspezifische Fragen zu finden.',
      '["Schnellen, kontextbezogenen Zugang zu fachspezifischem Wissen bieten","Lernmotivation durch interaktive Übungsaufgaben erhöhen","Eigene Materialien hochladen und integrieren"]',
      'Full-Stack: Gradio-UI, LlamaIndex-Integration, RAG-System, System-Prompt, Chat-Speicher.',
      NULL,
      '["Funktionsfähiger RAG-basierter Chatbot mit Gradio-UI","Automatische PDF-Indexierung","Chat-Historie-Verwaltung mit JSON-Persistierung"]',
      NULL,
      NULL
    );

INSERT INTO project_links (project_id, type, url) VALUES (3, 'note', 'auf Anfrage');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (3, 0, 'Research & Anforderungsanalyse', 'Analyse der Lernbedürfnisse durch Interviews. Recherche bestehender Lern-Chatbots.');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (3, 1, 'Konzept & Architektur', 'Entscheidung für RAG-System. LlamaIndex als Framework für PDF-Indexierung.');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (3, 2, 'Implementierung', 'Gradio-UI mit Chat-Interface. Backend mit LlamaIndex: PDF-Indexierung, Streaming-Antworten.');

INSERT INTO projects (
      id, slug, title, year, category, featured, status, 
      short_description, role, cover_image,
      tags, tech_stack,
      detail_context, detail_problem, detail_goals, detail_role,
      detail_challenges, detail_results, detail_learnings, detail_images
    ) VALUES (
      4,
      'walkable-memory-moosburg',
      'Walkable Memory – Digitale Erinnerungstour',
      2025,
      'uiux',
      0,
      'in-progress',
      'App-Prototyp für eine selbstgeführte Walking-Tour zu 13 historischen Orten in Moosburg.',
      'UI/UX-Designer und Frontend-Developer',
      '/projects/walkable-memory.png',
      '["React","TypeScript","Figma","Vite","UX Design","Prototyping"]',
      '["React","TypeScript","Vite","Leaflet","Figma"]',
      'Projekt im 3. Semester im Kurs ''Research and Usability''. UI/UX-Konzept für eine lokale Geschichts-App.',
      'Die Geschichte des Stalag VII-A ist in Moosburg heute kaum noch sichtbar.',
      '["Historische Orte digital kartieren und mit Geschichten verknüpfen","Benutzerfreundliche, selbsterklärende App-Oberfläche entwickeln","Flexibles Erkundungskonzept schaffen"]',
      'UI/UX-Designer und Frontend-Developer: Figma-Design in React umsetzen, Navigation, Komponenten, Leaflet-Karte.',
      NULL,
      '["Voll funktionsfähiger Hi-Fi-Prototyp mit 13 interaktiven Stationen","Leaflet-Karte mit individuellen Markern","Flexible Navigation: Nutzer können an beliebiger Station starten","Bildergalerien mit historischen Fotos für jede Station","AR-Overlay-Simulation für historischen Kontext","Mehrsprachige Unterstützung (Deutsch/Englisch)","Responsive Design optimiert für mobile Nutzung vor Ort"]',
      NULL,
      NULL
    );

INSERT INTO project_links (project_id, type, url) VALUES (4, 'note', 'auf Anfrage');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (4, 0, 'Research und Problemanalyse', 'Recherche zur Geschichte des Stalag VII-A. Interviews mit Anwohnern.');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (4, 1, 'Wireframes und Entscheidung für App + AR', 'Low-Fidelity-Wireframes. Entscheidung für mobile Web-App mit AR-Simulation.');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (4, 2, 'Technische Umsetzung', 'React/TypeScript mit Vite. Leaflet-Integration. Responsive Design.');

INSERT INTO projects (
      id, slug, title, year, category, featured, status, 
      short_description, role, cover_image,
      tags, tech_stack,
      detail_context, detail_problem, detail_goals, detail_role,
      detail_challenges, detail_results, detail_learnings, detail_images
    ) VALUES (
      5,
      'readera-vocabulary-learning',
      'ReadEra Vocabulary Learning System',
      2025,
      'coding',
      0,
      'finished',
      'Persönliches Vokabeltraining aus E-Book-Lesehistorie mit Spaced-Repetition-Algorithmus.',
      'Solo Developer (Workflow Automation & Backend)',
      '/projects/readera-vocabulary.png',
      '["n8n","Docker","spaCy","AnkiConnect","API-Integration","NLP"]',
      '["n8n","Docker","spaCy","Flask","LibreTranslate","AnkiConnect"]',
      'Privates Lernprojekt: Automatisierte ETL-Pipeline, die Vokabular aus ReadEra E-Reader-Backups extrahiert und direkt in Anki importiert.',
      'ReadEra speichert markiertes Vokabular nur als JSON in .bak-Backup-Dateien. Manuelle Extraktion und Duplikatbehandlung waren ineffizient.',
      '["Vollautomatische Pipeline: ReadEra .bak → Anki ohne manuelle Schritte","Lemmatisierung mit spaCy zur Reduzierung von Wortformen auf Grundformen","Multi-API-Anreicherung: Definitionen, Übersetzungen, Beispiele aus verschiedenen Quellen","Kontexterhaltung: Zitate aus E-Books als Karteninhalt für besseres kontextuelles Lernen"]',
      'Solo-Entwickler: n8n-Workflow-Design, Docker-Setup für spaCy und LibreTranslate-Services, AnkiConnect-Integration, Python-Service-Entwicklung.',
      NULL,
      '["Produktions-n8n-Workflow verarbeitet über 2000 Vokabeleinträge aus ReadEra-Backups","Unterstützung für 4 Sprachen (Deutsch, Englisch, Spanisch, Französisch)","Lemmatisierung via spaCy reduziert Duplikate erheblich","Multi-API-Integration liefert hochwertige Definitionen mit Fallback-Logik","Docker-Services ermöglichen vollständige Offline-Fähigkeit","Pivot von Flask zu n8n reduzierte Wartungsaufwand"]',
      NULL,
      NULL
    );

INSERT INTO project_links (project_id, type, url) VALUES (5, 'note', 'auf Anfrage');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (5, 0, 'Initialer Flask-Prototyp', 'Ursprüngliche Architektur: Flask-App mit SQLite-Datenbank und individuellem Web-Interface. Pivot zu n8n nach Erkenntnis, dass Anki das primäre Lerntool ist.');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (5, 1, 'Migration zu n8n-Workflow', 'Modulare Pipeline: Trigger (Google Drive) → Extraktion (Python) → Transformation (JSON) → Anreicherung (Multi-API) → Lemmatisierung (spaCy) → Export (AnkiConnect).');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (5, 2, 'Docker-Services (Offline-Infrastruktur)', 'Zwei Docker-Container: spaCy-Service (Flask-API für Lemmatisierung) und LibreTranslate (selbst gehostete Übersetzungs-API).');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (5, 3, 'Lemmatisierung als Kernfunktion', 'spaCy-Integration reduziert Wortformen auf Lemmas. Duplikaterkennung basierend auf Lemmas, nicht auf Originalformen.');

INSERT INTO projects (
      id, slug, title, year, category, featured, status, 
      short_description, role, cover_image,
      tags, tech_stack,
      detail_context, detail_problem, detail_goals, detail_role,
      detail_challenges, detail_results, detail_learnings, detail_images
    ) VALUES (
      6,
      'swm-change-management-automation',
      'SWM Change Management – KI-gestützte Changebegleitung',
      2025,
      'coding',
      1,
      'in-progress',
      'Automatisierte Change-Anfragen mit hybridem Form/Chat-System und n8n-Workflow-Ökosystem',
      'Full-Stack Developer (Frontend + Backend Workflows)',
      '/projects/swm-change-management.png',
      '["Next.js","n8n","TypeScript","OpenAI GPT-4","Workflow-Automation","LLM-Integration"]',
      '["Next.js","n8n","TypeScript","OpenAI GPT-4","Tailwind CSS"]',
      'Universitätsprojekt-Modul für Stadtwerke München (SWM): Ein hybrides System zur strukturierten Erfassung von Change-Anfragen.',
      'Change Management in großen Organisationen erfordert strukturierte Informationserfassung (bis zu 20 Felder). Bisherige Praxis umfasste E-Mail-Anfragen und manuelle Meetings mit hohem administrativem Aufwand.',
      '["Strukturierte, vollständige Erfassung von Change-Anfragen mit dynamischer Feldkonfiguration","Flexible Interaktion: Formular als Hauptkanal, Chat-Assistent als optionale Hilfe","Automatisierte Dokumentengenerierung (Word-Export, Markdown-Berichte) nach Abschluss","Workflow-Ökosystem: Datenübergabe an nachgelagerte Use Cases"]',
      'Full-Stack-Developer verantwortlich für ~95% von UC1 (Hybrid-System): Frontend-Implementierung, n8n-Workflows, Session-Management, LLM-Integration, dynamische Formularregeln.',
      NULL,
      '["Funktionsfähiger Proof-of-Concept für UC1 (Hybrid-System) weitgehend implementiert","Formularbasierte Eingabe mit dynamischer Feldkonfiguration läuft stabil","Chat-Widget funktioniert als optionale Hilfe","Session-basierte Persistenz via n8n Data Tables","Integration mit nachgelagerten Use Cases (UC3 Kommunikationsplanung, UC4 Partnerauswahl)","Aktuell in Testphase mit iterativen Bugfixes"]',
      NULL,
      NULL
    );

INSERT INTO project_links (project_id, type, url) VALUES (6, 'note', 'auf Anfrage');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (6, 0, 'Anforderungsanalyse & Use-Case-Definition', 'Kick-off mit SWM-Change-Management-Team: 4 vordefinierte Use Cases basierend auf echten Prozessen. Entscheidung für n8n als zentrale Workflow-Engine.');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (6, 1, 'Prototyp UC1 – Chat-basierte Anfragenerfassung', 'Initialer Prototyp: reine Chat-Lösung. Problem: unstrukturiert, keine klare Navigation. Entscheidung zum Pivot: Formular als Hauptkanal.');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (6, 2, 'Hybrid-System-Konzept (Formular + Chat)', 'Formular mit 8 Sektionen als Primärkanal, Chat als optionales Hilfe-Widget. Regel-Engine: 4 Meta-Fragen bestimmen Projektklasse → dynamische Feldkonfiguration.');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (6, 3, 'Frontend- & Backend-Implementierung', 'Next.js-Frontend mit TypeScript und Tailwind CSS. n8n-Haupt-Workflow: Session-Management, Switch-Node-Architektur, LLM-Integration.');
