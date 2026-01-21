-- ============================================================================
-- D1 Seed Data
-- Generated from projects-data.json
-- Date: 2026-01-21T19:36:23.353Z
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
      'Life Threads ÔÇô Interaktive Datenvisualisierung',
      2025,
      'data',
      1,
      'in-progress',
      'Scrollytelling-Visualisierung meines Jahres: Schlaf, Sport, Lesen und Uni ÔÇô in interaktiven Datengeschichten.',
      'Solo-Entwicklerin und Information Designerin',
      '/projects/life-threads.png',
      '["SvelteKit","TypeScript","D3.js","Canvas API","Scrollytelling","Data Visualization"]',
      '["SvelteKit","TypeScript","D3.js","Canvas API","IntersectionObserver"]',
      'Universit├ñtsprojekt im Rahmen des Kurses ''Information Design''. Ziel war es, pers├Ânliche Daten nicht nur zu visualisieren, sondern eine nachvollziehbare Geschichte zu erz├ñhlen.',
      'Rohdaten aus verschiedenen Quellen liegen als CSV-Dateien vor, aber die Geschichte dahinter bleibt unsichtbar.',
      '["Pers├Ânliche Daten aus drei Quellen in einer konsistenten Visualisierung zusammenf├╝hren","Scroll-basiertes Storytelling-Format entwickeln","Canvas-basierte Visualisierungen f├╝r Performance bei gro├ƒen Datens├ñtzen"]',
      'Solo-Entwicklerin und Information Designerin: Datenaufbereitung, CSV-Parser-Entwicklung, Scrollytelling-System mit Svelte, Canvas-Rendering.',
      NULL,
      '["Funktionsf├ñhige Scrollytelling-Visualisierung mit 4 interaktiven Charts","Performance-optimiert: 365 Tage Daten in Canvas mit 60fps","Custom Scrollytelling-System ohne externe Dependencies"]',
      NULL,
      NULL
    );

INSERT INTO project_links (project_id, type, url) VALUES (1, 'note', 'auf Anfrage');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (1, 0, 'Research & Datenanalyse', 'Rohdaten runtergeladen und Data Wrangling durchgef├╝hrt. Erste explorative Visualisierungen in Python/Pandas.');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (1, 1, 'Konzept & Wireframing', 'Scrollytelling-Struktur definiert: Intro ÔåÆ Year at a Glance ÔåÆ A Day in My Life ÔåÆ Weekly Rhythm.');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (1, 2, 'Technische Architektur', 'SvelteKit mit TypeScript. CSV-Parser in utils/, State Management mit Svelte Stores.');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (1, 3, 'Implementierung der Visualisierungen', 'Start mit SVG-basierten Charts, Migration zu Canvas f├╝r Performance.');

INSERT INTO projects (
      id, slug, title, year, category, featured, status, 
      short_description, role, cover_image,
      tags, tech_stack,
      detail_context, detail_problem, detail_goals, detail_role,
      detail_challenges, detail_results, detail_learnings, detail_images
    ) VALUES (
      2,
      'ressource-realms-3d',
      'Ressource Realms ÔÇô 3D-Strategiespiel',
      2025,
      'coding',
      1,
      'finished',
      'Browser-basiertes 3D-Strategiespiel mit WebGL-Rendering, interaktivem Spielbrett und komplexer Spiellogik.',
      'Full-Stack Game Developer im 4-Personen-Team',
      '/projects/ressource-realms.png',
      '["Three.js","JavaScript","WebGL","Blender","Vite","Game Development"]',
      '["Three.js","JavaScript","Vite","Blender","WebGL"]',
      'Entwickelt im Rahmen des Projektmoduls ''Prozesse'' (Hochschule M├╝nchen) als Teamprojekt ├╝ber ein Semester.',
      'Brettspiele erfordern physisches Material, Platz und oft lange Setupzeiten.',
      '["Vollst├ñndig spielbare Implementierung mit automatisierter Regelverwaltung","3D-Visualisierung einer hexagonalen Spielwelt","Modulare, erweiterbare Code-Architektur"]',
      'Full-Stack Game Developer: Siegpunktez├ñhlung, R├ñuber-Mechanik, UX-Features, Spielbrett-Dynamik, Bugfixing.',
      NULL,
      '["Vollst├ñndig spielbare 3D-Umsetzung f├╝r 2 Spieler im Browser","Automatisierte Regelverwaltung reduziert Fehlerquellen","Modulare Architektur erm├Âglicht einfache Erweiterungen"]',
      NULL,
      NULL
    );

INSERT INTO project_links (project_id, type, url) VALUES (2, 'note', 'auf Anfrage');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (2, 0, 'Konzeption & Technologie-Setup', 'Analyse bestehender Brettspiel-Regeln. Setup von Vite und Three.js.');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (2, 1, '3D-Umgebung & Asset-Integration', 'Erstellung der hexagonalen Spielwelt. Integration von Blender-Modellen.');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (2, 2, 'Spiellogik-Implementierung', 'Core-Mechaniken: Bauvalidierung, Ressourcenverwaltung, Handelssysteme.');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (2, 3, 'UI & Interaktionssysteme', 'Benutzeroberfl├ñche mit Ressourcenanzeigen, Baumen├╝, Hover-Previews.');

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
      'KI-gest├╝tzter Chatbot f├╝r Informatik-und-Design-Studierende mit RAG-basiertem Wissenszugriff.',
      'Full-Stack-Entwicklung und UI/UX-Design',
      '/projects/studyid-chatbot.png',
      '["Python","LlamaIndex","OpenAI","RAG","Gradio","LLM"]',
      '["Python","LlamaIndex","OpenAI GPT-4o-mini","Gradio"]',
      'Entwickelt im Projektmodul Start (1. Semester) als Teamprojekt. Ziel: KI-L├Âsung f├╝r 24/7 Wissenszugriff.',
      'Erstsemester haben Schwierigkeiten, schnell Antworten auf fachspezifische Fragen zu finden.',
      '["Schnellen, kontextbezogenen Zugang zu fachspezifischem Wissen bieten","Lernmotivation durch interaktive ├£bungsaufgaben erh├Âhen","Eigene Materialien hochladen und integrieren"]',
      'Full-Stack: Gradio-UI, LlamaIndex-Integration, RAG-System, System-Prompt, Chat-Speicher.',
      NULL,
      '["Funktionsf├ñhiger RAG-basierter Chatbot mit Gradio-UI","Automatische PDF-Indexierung","Chat-Historie-Verwaltung mit JSON-Persistierung"]',
      NULL,
      NULL
    );

INSERT INTO project_links (project_id, type, url) VALUES (3, 'note', 'auf Anfrage');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (3, 0, 'Research & Anforderungsanalyse', 'Analyse der Lernbed├╝rfnisse durch Interviews. Recherche bestehender Lern-Chatbots.');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (3, 1, 'Konzept & Architektur', 'Entscheidung f├╝r RAG-System. LlamaIndex als Framework f├╝r PDF-Indexierung.');
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
      'Walkable Memory ÔÇô Digitale Erinnerungstour',
      2025,
      'uiux',
      0,
      'in-progress',
      'App-Prototyp f├╝r eine selbstgef├╝hrte Walking-Tour zu 13 historischen Orten in Moosburg.',
      'UI/UX-Designer und Frontend-Developer',
      '/projects/walkable-memory.png',
      '["React","TypeScript","Figma","Vite","UX Design","Prototyping"]',
      '["React","TypeScript","Vite","Leaflet","Figma"]',
      'Projekt im 3. Semester im Kurs ''Research and Usability''. UI/UX-Konzept f├╝r eine lokale Geschichts-App.',
      'Die Geschichte des Stalag VII-A ist in Moosburg heute kaum noch sichtbar.',
      '["Historische Orte digital kartieren und mit Geschichten verkn├╝pfen","Benutzerfreundliche, selbsterkl├ñrende App-Oberfl├ñche entwickeln","Flexibles Erkundungskonzept schaffen"]',
      'UI/UX-Designer und Frontend-Developer: Figma-Design in React umsetzen, Navigation, Komponenten, Leaflet-Karte.',
      NULL,
      '["Voll funktionsf├ñhiger Hi-Fi-Prototyp mit 13 interaktiven Stationen","Leaflet-Karte mit individuellen Markern","Flexible Navigation: Nutzer k├Ânnen an beliebiger Station starten","Bildergalerien mit historischen Fotos f├╝r jede Station","AR-Overlay-Simulation f├╝r historischen Kontext","Mehrsprachige Unterst├╝tzung (Deutsch/Englisch)","Responsive Design optimiert f├╝r mobile Nutzung vor Ort"]',
      NULL,
      NULL
    );

INSERT INTO project_links (project_id, type, url) VALUES (4, 'note', 'auf Anfrage');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (4, 0, 'Research und Problemanalyse', 'Recherche zur Geschichte des Stalag VII-A. Interviews mit Anwohnern.');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (4, 1, 'Wireframes und Entscheidung f├╝r App + AR', 'Low-Fidelity-Wireframes. Entscheidung f├╝r mobile Web-App mit AR-Simulation.');
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
      'Pers├Ânliches Vokabeltraining aus E-Book-Lesehistorie mit Spaced-Repetition-Algorithmus.',
      'Solo Developer (Workflow Automation & Backend)',
      '/projects/readera-vocabulary.png',
      '["n8n","Docker","spaCy","AnkiConnect","API-Integration","NLP"]',
      '["n8n","Docker","spaCy","Flask","LibreTranslate","AnkiConnect"]',
      'Privates Lernprojekt: Automatisierte ETL-Pipeline, die Vokabular aus ReadEra E-Reader-Backups extrahiert und direkt in Anki importiert.',
      'ReadEra speichert markiertes Vokabular nur als JSON in .bak-Backup-Dateien. Manuelle Extraktion und Duplikatbehandlung waren ineffizient.',
      '["Vollautomatische Pipeline: ReadEra .bak ÔåÆ Anki ohne manuelle Schritte","Lemmatisierung mit spaCy zur Reduzierung von Wortformen auf Grundformen","Multi-API-Anreicherung: Definitionen, ├£bersetzungen, Beispiele aus verschiedenen Quellen","Kontexterhaltung: Zitate aus E-Books als Karteninhalt f├╝r besseres kontextuelles Lernen"]',
      'Solo-Entwickler: n8n-Workflow-Design, Docker-Setup f├╝r spaCy und LibreTranslate-Services, AnkiConnect-Integration, Python-Service-Entwicklung.',
      NULL,
      '["Produktions-n8n-Workflow verarbeitet ├╝ber 2000 Vokabeleintr├ñge aus ReadEra-Backups","Unterst├╝tzung f├╝r 4 Sprachen (Deutsch, Englisch, Spanisch, Franz├Âsisch)","Lemmatisierung via spaCy reduziert Duplikate erheblich","Multi-API-Integration liefert hochwertige Definitionen mit Fallback-Logik","Docker-Services erm├Âglichen vollst├ñndige Offline-F├ñhigkeit","Pivot von Flask zu n8n reduzierte Wartungsaufwand"]',
      NULL,
      NULL
    );

INSERT INTO project_links (project_id, type, url) VALUES (5, 'note', 'auf Anfrage');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (5, 0, 'Initialer Flask-Prototyp', 'Urspr├╝ngliche Architektur: Flask-App mit SQLite-Datenbank und individuellem Web-Interface. Pivot zu n8n nach Erkenntnis, dass Anki das prim├ñre Lerntool ist.');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (5, 1, 'Migration zu n8n-Workflow', 'Modulare Pipeline: Trigger (Google Drive) ÔåÆ Extraktion (Python) ÔåÆ Transformation (JSON) ÔåÆ Anreicherung (Multi-API) ÔåÆ Lemmatisierung (spaCy) ÔåÆ Export (AnkiConnect).');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (5, 2, 'Docker-Services (Offline-Infrastruktur)', 'Zwei Docker-Container: spaCy-Service (Flask-API f├╝r Lemmatisierung) und LibreTranslate (selbst gehostete ├£bersetzungs-API).');
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
      'SWM Change Management ÔÇô KI-gest├╝tzte Changebegleitung',
      2025,
      'coding',
      1,
      'in-progress',
      'Automatisierte Change-Anfragen mit hybridem Form/Chat-System und n8n-Workflow-├ûkosystem',
      'Full-Stack Developer (Frontend + Backend Workflows)',
      '/projects/swm-change-management.png',
      '["Next.js","n8n","TypeScript","OpenAI GPT-4","Workflow-Automation","LLM-Integration"]',
      '["Next.js","n8n","TypeScript","OpenAI GPT-4","Tailwind CSS"]',
      'Universit├ñtsprojekt-Modul f├╝r Stadtwerke M├╝nchen (SWM): Ein hybrides System zur strukturierten Erfassung von Change-Anfragen.',
      'Change Management in gro├ƒen Organisationen erfordert strukturierte Informationserfassung (bis zu 20 Felder). Bisherige Praxis umfasste E-Mail-Anfragen und manuelle Meetings mit hohem administrativem Aufwand.',
      '["Strukturierte, vollst├ñndige Erfassung von Change-Anfragen mit dynamischer Feldkonfiguration","Flexible Interaktion: Formular als Hauptkanal, Chat-Assistent als optionale Hilfe","Automatisierte Dokumentengenerierung (Word-Export, Markdown-Berichte) nach Abschluss","Workflow-├ûkosystem: Daten├╝bergabe an nachgelagerte Use Cases"]',
      'Full-Stack-Developer verantwortlich f├╝r ~95% von UC1 (Hybrid-System): Frontend-Implementierung, n8n-Workflows, Session-Management, LLM-Integration, dynamische Formularregeln.',
      NULL,
      '["Funktionsf├ñhiger Proof-of-Concept f├╝r UC1 (Hybrid-System) weitgehend implementiert","Formularbasierte Eingabe mit dynamischer Feldkonfiguration l├ñuft stabil","Chat-Widget funktioniert als optionale Hilfe","Session-basierte Persistenz via n8n Data Tables","Integration mit nachgelagerten Use Cases (UC3 Kommunikationsplanung, UC4 Partnerauswahl)","Aktuell in Testphase mit iterativen Bugfixes"]',
      NULL,
      NULL
    );

INSERT INTO project_links (project_id, type, url) VALUES (6, 'note', 'auf Anfrage');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (6, 0, 'Anforderungsanalyse & Use-Case-Definition', 'Kick-off mit SWM-Change-Management-Team: 4 vordefinierte Use Cases basierend auf echten Prozessen. Entscheidung f├╝r n8n als zentrale Workflow-Engine.');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (6, 1, 'Prototyp UC1 ÔÇô Chat-basierte Anfragenerfassung', 'Initialer Prototyp: reine Chat-L├Âsung. Problem: unstrukturiert, keine klare Navigation. Entscheidung zum Pivot: Formular als Hauptkanal.');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (6, 2, 'Hybrid-System-Konzept (Formular + Chat)', 'Formular mit 8 Sektionen als Prim├ñrkanal, Chat als optionales Hilfe-Widget. Regel-Engine: 4 Meta-Fragen bestimmen Projektklasse ÔåÆ dynamische Feldkonfiguration.');
INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (6, 3, 'Frontend- & Backend-Implementierung', 'Next.js-Frontend mit TypeScript und Tailwind CSS. n8n-Haupt-Workflow: Session-Management, Switch-Node-Architektur, LLM-Integration.');

