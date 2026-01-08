/** Author: Liliane Schutz */

import { Project } from "../types";

/**
 * Real Project Data
 * 
 * Content sourced from:
 * - PORTFOLIO_CONTENT-life-threads.md
 * - PORTFOLIO_CONTENT-ressource-realms.md
 * - PORTFOLIO_CONTENT-studyid-chatbot.md
 * - PORTFOLIO-CONTENT-walkable-memory.md
 * 
 * Images: One main screenshot per project + placeholders for additional images
 */

export const projects: Project[] = [
  {
    id: "proj-001",
    slug: "life-threads-data-vis",
    title: "Life Threads – Interaktive Datenvisualisierung",
    year: 2025,
    featured: true,
    category: "data",
    status: "in-progress",
    shortDescription: "Scrollytelling-Visualisierung meines Jahres: Schlaf, Sport, Lesen und Uni – in interaktiven Datengeschichten.",
    tags: ["SvelteKit", "TypeScript", "D3.js", "Canvas API", "Scrollytelling", "Data Visualization"],
    image: "/projects/life-threads.png",
    links: {
      github: undefined, // auf Anfrage
      demo: undefined, // auf Anfrage
    },
    detail: {
      context: "Universitätsprojekt im Rahmen des Kurses 'Information Design'. Ziel war es, persönliche Daten nicht nur zu visualisieren, sondern eine nachvollziehbare Geschichte zu erzählen: Wie sieht ein Jahr aus, wenn man versucht, passive Gewohnheiten in bewusste Routinen zu verwandeln?",
      problem: "Rohdaten aus verschiedenen Quellen (Samsung Health, StoryGraph, Unipläne) liegen als CSV-Dateien vor, aber die Geschichte dahinter bleibt unsichtbar. Klassische Dashboard-Visualisierungen zeigen Zahlen, aber nicht den Kontext: Warum gab es im August eine Sportpause? Wie hat sich der Schlafrhythmus verändert?",
      goals: [
        "Persönliche Daten aus drei Quellen in einer konsistenten Visualisierung zusammenführen",
        "Scroll-basiertes Storytelling-Format entwickeln, das durch drei Phasen des Jahres führt",
        "Canvas-basierte Visualisierungen für Performance bei großen Datensätzen (365 Tage)"
      ],
      role: "Solo-Entwicklerin und Information Designerin: Datenaufbereitung, CSV-Parser-Entwicklung, Scrollytelling-System mit Svelte, Canvas-Rendering für 5 interaktive Visualisierungen, Design-System und technische Dokumentation.",
      process: [
        {
          title: "Research & Datenanalyse",
          description: "Rohdaten runtergeladen und Data Wrangling durchgeführt. Samsung Health liefert Schlaf- und Aktivitätsdaten, StoryGraph trackt Lesedaten, Unipläne als CSV. Erste explorative Visualisierungen in Python/Pandas zeigten drei klare Phasen (First Attempts, Building Momentum, Finding Balance)."
        },
        {
          title: "Konzept & Wireframing",
          description: "Scrollytelling-Struktur definiert: Intro → Year at a Glance → A Day in My Life → Weekly Rhythm → Free Exploration → Outro. Skizzen für jede Visualisierung, Layout mit Sticky Charts und 'Invisible Triggers' für Scroll-Schritte."
        },
        {
          title: "Technische Architektur",
          description: "SvelteKit mit TypeScript. CSV-Parser in utils/, State Management mit Svelte Stores, Scrollytelling-Pattern mit IntersectionObserver. Entscheidung gegen externe Libraries für mehr Kontrolle."
        },
        {
          title: "Implementierung der Visualisierungen",
          description: "Start mit SVG-basierten Charts, Migration zu Canvas für Performance (365 Tage, 24h-Slots). Custom D3.js-inspirierte Utils für Skalen. Farbcodierung: Sleep = Indigo, Pilates = Purple, Running = Cyan, Reading = Bronze. Iterative Arbeit: statische Charts → Interaktivität (Hover-Tooltips, Phase-Filter)."
        },
        {
          title: "Scrollytelling-Feinschliff",
          description: "IntersectionObserver-Tuning für smooth Transitions, Sticky-Positioning für Charts während Scroll, responsive Breakpoints und Performance-Optimierung für mobile Devices."
        }
      ],
      outcomes: [
        "Funktionsfähige Scrollytelling-Visualisierung mit 5 interaktiven Charts",
        "Performance-optimiert: 365 Tage Daten in Canvas mit 60fps",
        "Drei klar erkennbare Phasen erzählen die Geschichte von Gewohnheitsbildung und Balance",
        "Custom Scrollytelling-System ohne externe Dependencies",
        "Responsive Design mit graceful degradation auf mobile"
      ]
    }
  },
  {
    id: "proj-002",
    slug: "ressource-realms-3d",
    title: "Ressource Realms – 3D-Strategiespiel",
    year: 2025,
    featured: true,
    category: "coding",
    status: "finished",
    shortDescription: "Browser-basiertes 3D-Strategiespiel mit WebGL-Rendering, interaktivem Spielbrett und komplexer Spiellogik.",
    tags: ["Three.js", "JavaScript", "WebGL", "Blender", "Vite", "Game Development"],
    image: "/projects/ressource-realms.png",
    links: {
      github: undefined, // auf Anfrage
      demo: undefined, // auf Anfrage
    },
    detail: {
      context: "Entwickelt im Rahmen des Projektmoduls 'Prozesse' (Hochschule München, Informatik und Design) als Teamprojekt über ein Semester. Ziel war es, moderne Webtechnologie und 3D-Grafik zu kombinieren, um klassische Brettspiele zugänglicher zu machen.",
      problem: "Brettspiele erfordern physisches Material, Platz und oft lange Setupzeiten. Zudem sind Regelkonflikte und manuelle Punkteberechnungen fehleranfällig. Es fehlte eine moderne, direkt im Browser zugängliche 3D-Umsetzung mit vollständiger Automatisierung der Spielregeln.",
      goals: [
        "Vollständig spielbare Implementierung mit automatisierter Regelverwaltung und Punkteberechnung",
        "3D-Visualisierung einer hexagonalen Spielwelt mit interaktiven Elementen",
        "Modulare, erweiterbare Code-Architektur für zukünftige Features"
      ],
      role: "Full-Stack Game Developer im 4-Personen-Team. Verantwortlich für automatische Siegpunktezählung (inkl. Längste-Straße-Logik), Räuber-Mechanik mit Spielfeld-Highlighting, UX-Features (Ressourcen-Zähler, Feld-Highlighting), Spielbrett-Dynamik (zufällige Feldanordnung), Bugfixing und Code-Reviews. Erste Schritte in Blender zur Erstellung von 3D-Assets.",
      process: [
        {
          title: "Konzeption & Technologie-Setup",
          description: "Analyse bestehender Brettspiel-Regeln und Übertragung in digitale Mechaniken. Modulare Architektur mit separaten Verantwortlichkeiten (Spiellogik, UI, 3D-Rendering). Setup von Vite als Build-Tool und Three.js als Rendering-Engine."
        },
        {
          title: "3D-Umgebung & Asset-Integration",
          description: "Erstellung der hexagonalen Spielwelt (Axial-Koordinatensystem). Integration von Blender-Modellen (.glb-Format) für Terrain-Tiles, Spielfiguren und Wächter. Implementierung von Skybox, Beleuchtung und Schatten."
        },
        {
          title: "Spiellogik-Implementierung",
          description: "Core-Mechaniken: Bauvalidierung (Mindestabstand, Straßenverbindungen), Ressourcenverwaltung (Würfel-System, Rohstoffproduktion), Handelssysteme (Bank 4:1, Häfen 3:1/2:1), Entwicklungskarten mit Spielregeln."
        },
        {
          title: "UI & Interaktionssysteme",
          description: "Benutzeroberfläche: Ressourcenanzeigen mit Echtzeit-Updates, Baumenü mit Kostenanzeige, Spielerwechsel, Entwicklungskarten-UI. Hover-Previews für Bauaktionen, visuelles Feedback (Highlighting, Halos). Main Menu mit Hexagon-Design."
        },
        {
          title: "Testing & Polish",
          description: "Umfangreiche QA-Phase mit User Story-basierten Tests. Bugfixing: Zahlenchip-Highlighting, Bau-Validierung am Wasser, Längste-Straße-Berechnung. Performance-Optimierung für WebGL-Rendering und Spiellogik."
        }
      ],
      outcomes: [
        "Vollständig spielbare 3D-Umsetzung für 2 Spieler im Browser",
        "Automatisierte Regelverwaltung reduziert Fehlerquellen auf Null",
        "Modulare Architektur ermöglicht einfache Erweiterungen (KI-Gegner, Online-Multiplayer)",
        "Graph-Algorithmen für Längste-Straße-Berechnung optimiert",
        "Erfolgreiche Integration von WebGL und komplexer Spiellogik"
      ]
    }
  },
  {
    id: "proj-003",
    slug: "studyid-lern-bot",
    title: "studyID Lern-Bot",
    year: 2024,
    featured: false,
    category: "coding",
    status: "finished",
    shortDescription: "KI-gestützter Chatbot für Informatik-und-Design-Studierende der HM mit RAG-basiertem Wissenszugriff.",
    tags: ["Python", "LlamaIndex", "OpenAI", "RAG", "Gradio", "LLM"],
    image: "/projects/studyid-chatbot.png",
    links: {
      github: undefined, // auf Anfrage
      demo: undefined, // auf Anfrage
    },
    detail: {
      context: "Entwickelt im Projektmodul Start (1. Semester Informatik und Design, Hochschule München) als Teamprojekt. Ziel war es, eine KI-Lösung zu schaffen, die Studierenden 24/7 Zugang zu fachspezifischem Wissen bietet und aktiv beim Lernen für Klausuren und bei Hausaufgaben hilft.",
      problem: "Erstsemester haben oft Schwierigkeiten, schnell Antworten auf fachspezifische Fragen zu finden. Professoren sind nicht immer verfügbar, Google liefert allgemeine Ergebnisse, und das Durchsuchen von Skripten kostet Zeit. Gleichzeitig besteht die Gefahr, dass Studierende bei KI-Tools wie ChatGPT direkte Lösungen bekommen, was den Lerneffekt mindert.",
      goals: [
        "Studierenden schnellen, kontextbezogenen Zugang zu fachspezifischem Wissen bieten",
        "Lernmotivation durch interaktive Übungsaufgaben und schrittweise Hilfestellungen erhöhen",
        "Möglichkeit für Studierende, eigene Materialien hochzuladen und in die Wissensbasis zu integrieren"
      ],
      role: "Full-Stack-Entwicklung und UI/UX-Design: Konzeption und Implementierung der Gradio-UI mit Chat-Verwaltung, Integration von LlamaIndex zur PDF-Indexierung, Entwicklung des RAG-Systems mit OpenAI GPT-4o-mini, Erstellung des System-Prompts mit Persona 'Joy', Implementierung der Chat-Speicher- und PDF-Upload-Funktionen, Styling und visuelles Design.",
      process: [
        {
          title: "Research & Anforderungsanalyse",
          description: "Analyse der Lernbedürfnisse von Erstsemestern durch Interviews. Identifikation der fünf Kernmodule und Sammlung relevanter Dokumente (Skripte, Modulhandbuch, Studienpläne). Recherche bestehender Lern-Chatbots (z. B. CS50.ai) und Definition von Scope."
        },
        {
          title: "Konzept & Architektur",
          description: "Entscheidung für RAG-System (Retrieval-Augmented Generation), um sicherzustellen, dass der Bot nur auf Basis der hochgeladenen Dokumente antwortet. LlamaIndex als Framework für PDF-Indexierung und Vektordatenbank. OpenAI GPT-4o-mini als LLM für schnelle und kostengünstige Antworten."
        },
        {
          title: "Design & Prototyping",
          description: "Entwurf der Gradio-UI: linke Sidebar für Chat-Verwaltung und PDF-Upload, rechts Chatbot mit Datumsanzeige und Steuerbuttons. Avatare (menschlicher Nutzer und Roboter 'Joy') für persönliche Atmosphäre."
        },
        {
          title: "Implementierung",
          description: "Gradio-UI mit Chat-Interface, Steuerbuttons (Pause, Fortsetzen, Stopp) und Chat-Verwaltung (Speichern, Laden, Neuer Chat). Backend mit LlamaIndex: PDF-Indexierung, JSON-Persistierung, Streaming-Antworten. System-Prompt definiert Persona 'Joy' als 30-jährige Mentorin mit empathischem Ton."
        },
        {
          title: "Testing & Optimierung",
          description: "Ausgiebiges Testing mit realen Fragen aus den Modulen. Optimierung der Prompt-Strategie: Keine direkten Lösungen, sondern schrittweise Hilfestellungen. Anpassung der Retrieval-Parameter für bessere Antwortqualität. Mehrsprachige Tests (Deutsch/Englisch)."
        }
      ],
      outcomes: [
        "Funktionsfähiger RAG-basierter Chatbot mit Gradio-UI",
        "Automatische PDF-Indexierung und Re-Indexierung bei neuen Uploads",
        "Chat-Historie-Verwaltung mit JSON-Persistierung",
        "Persona 'Joy' sorgt für motivierende, lernförderliche Interaktionen",
        "Erfolgreiche Antworten auf fachspezifische Fragen aus fünf Erstsemester-Modulen",
        "Positive Feedback von Testnutzern: 'Wie ein Tutor, der immer verfügbar ist'"
      ]
    }
  },
  {
    id: "proj-004",
    slug: "walkable-memory-moosburg",
    title: "Walkable Memory – Digitale Erinnerungstour",
    year: 2025,
    featured: false,
    category: "uiux",
    status: "in-progress",
    shortDescription: "App-Prototyp für eine selbstgeführte Walking-Tour zu 13 historischen Orten in Moosburg an der Isar.",
    tags: ["React", "TypeScript", "Figma", "Vite", "UX Design", "Prototyping"],
    image: "/projects/walkable-memory.png",
    links: {
      github: undefined, // auf Anfrage
      demo: undefined, // auf Anfrage
    },
    detail: {
      context: "Das Projekt entstand im 3. Semester im Kurs 'Research and Usability' an der Hochschule München. Ziel war es, ein UI/UX-Konzept für eine lokale Geschichts-App mit AR-Funktion zu entwickeln und als funktionsfähigen Prototyp umzusetzen. Der Fokus lag auf der Erkundung historischer Orte des ehemaligen Kriegsgefangenenlagers Stalag VII-A in Moosburg.",
      problem: "Die Geschichte des Stalag VII-A – eines der größten Kriegsgefangenenlager in Deutschland – ist in Moosburg heute kaum noch sichtbar. Originale Baracken wurden umgebaut, Gedenkstätten sind schwer auffindbar, und vielen Bewohnern ist die Historie ihres Stadtviertels unbekannt. Traditionelle Geschichtsvermittlung über Tafeln erreicht vor allem jüngere Zielgruppen nicht.",
      goals: [
        "Historische Orte digital kartieren und mit Geschichten, Fotos und AR-Features verknüpfen",
        "Eine benutzerfreundliche, selbsterklärende App-Oberfläche entwickeln, die keine Einweisung benötigt",
        "Ein flexibles Erkundungskonzept schaffen: Nutzer können an jedem Ort starten und in beliebiger Reihenfolge erkunden"
      ],
      role: "UI/UX-Designer und Frontend-Developer: Übersetzung des Figma-Designs in React-Code, Implementierung der Navigation und State-Management, Entwicklung wiederverwendbarer Komponenten (Header, Karten, Modals), Integration einer Leaflet-Karte mit Custom Markers für 13 Orte, Aufbau der Bildergalerien und AR-Modal-Platzhalter, Responsive Anpassung.",
      process: [
        {
          title: "Research und Problemanalyse",
          description: "Recherche zur Geschichte des Stalag VII-A und Analyse bestehender Geschichtsvermittlung in Moosburg. Identifikation von Zielgruppen (Touristen, Schulklassen, Geschichtsinteressierte, lokale Bewohner). Feststellung: Viele historische Orte sind heute unmarkiert und unbekannt."
        },
        {
          title: "Konzeptentwicklung und Interviews",
          description: "Fahrt nach Moosburg und Interviews mit Anwohnern, Museumsbesuchern und Passanten. Herausfinden, wie Menschen mit lokaler Geschichte interagieren. Ergebnis: Nutzer wünschen sich Flexibilität (eigenes Tempo, freie Reihenfolge) und visuelle Unterstützung."
        },
        {
          title: "Wireframes und Entscheidung für App + AR",
          description: "Low-Fidelity-Wireframes für verschiedene Szenarien. Entscheidung für mobile Web-App mit AR-Simulation: niedrigschwellig nutzbar (kein App-Store-Download), vor Ort funktionsfähig. AR-Funktion als Simulation (kein echtes WebXR), um technische Komplexität zu reduzieren."
        },
        {
          title: "Hi-Fi-Design in Figma",
          description: "Übersetzung der Wireframes in vollständigen Figma-Prototyp mit 7+ Screens (Landing, Map, Memory Moment, Discover, Location List, Completion, About). Dark-Theme mit türkisen und rosafarbenen Akzenten. Fokus auf Lesbarkeit von Story-Texten und Intuitivität der Karten-Navigation."
        },
        {
          title: "Technische Umsetzung",
          description: "React/TypeScript mit Vite. Leaflet-Integration für interaktive Karte. State-Management ohne Redux (React Context + useState). Responsive Design mit Mobile-First-Ansatz. AR-Modal als Platzhalter (zukünftige WebXR-Integration möglich)."
        }
      ],
      outcomes: [
        "Funktionsfähiger Hi-Fi-Prototyp mit 13 interaktiven Orten",
        "Leaflet-Karte mit Custom Markers und Clustering",
        "Flexible Navigation: Nutzer können an jedem Ort starten",
        "Bildergalerien mit historischen Fotos und modernen Vergleichsbildern",
        "AR-Simulation als Platzhalter für zukünftige WebXR-Integration",
        "Responsive Design für Smartphone-Nutzung vor Ort",
        "Positive Resonanz bei Präsentation: 'Macht Lust, nach Moosburg zu fahren'"
      ]
    }
  }
];

/**
 * Helper function to get featured projects (for Home page)
 */
export function getFeaturedProjects(): Project[] {
  return projects
    .filter(p => p.featured)
    .sort((a, b) => b.year - a.year);
}

/**
 * Helper function to get project by slug (for dynamic route)
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

/**
 * Helper function to filter projects by category
 */
export function getProjectsByCategory(category: ProjectCategory | "all"): Project[] {
  if (category === "all") {
    return projects;
  }
  return projects.filter(p => p.category === category);
}

/**
 * Helper function to get all projects
 * Centralized access point for all project data
 */
export function getAllProjects(): Project[] {
  return projects;
}

/**
 * Helper function to get previous and next projects for navigation
 * Returns prev/next projects relative to given slug
 */
export function getPrevNextProjects(slug: string): {
  prevProject: Project | undefined;
  nextProject: Project | undefined;
} {
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  
  return {
    prevProject: currentIndex > 0 ? projects[currentIndex - 1] : undefined,
    nextProject: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : undefined,
  };
}

// Type import for filter function
type ProjectCategory = "coding" | "uiux" | "data" | "experiment";
