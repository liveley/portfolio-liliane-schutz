/** Author: Liliane Schutz */

import { AboutContent, Language, SoftSkill } from "../types";

/**
 * Mock About Content Data (Placeholder)
 * 
 * WICHTIG: Dies sind Placeholder-Texte für die Entwicklung.
 * Finale Inhalte werden später ergänzt.
 * 
 * Used in:
 * - About page (/ueber-mich)
 */

export const aboutContent: AboutContent = {
  bio: "Hallo! Ich bin Liliane Schutz und studiere Informatik und Design an der Hochschule München (aktueller Schnitt 1,6). Ich verbinde technisches Know-how mit gestalterischer Expertise, um intuitive, datengetriebene digitale Produkte zu entwickeln. Mein Fokus liegt an der Schnittstelle zwischen Design und Code – und langfristig möchte ich an der Schnittstelle von AI, Business und Design arbeiten, in einem Umfeld, in dem Künstliche Intelligenz nicht nur entwickelt, sondern strategisch eingesetzt wird.",
  
  focusAreas: [
    "Automation & Workflow-Optimierung",
    "Datenvisualisierung & interaktive Grafiken",
    "UI/UX Design & Prototyping",
    "Webarchitekturen & Best Practices",
    "Full-Stack Webentwicklung mit modernen Frameworks",
  ],
  
  timeline: [
    {
      period: "2024 – heute",
      title: "B.Sc Studium Informatik & Design",
      description: "Fokus auf Interaction Design, Data Visualization und Web Technologies"
    },
    {
      period: "2010 – 2023",
      title: "Städtisches Käthe-Kollwitz-Gymnasium München ",
      description: "Abschluss: Allgemeine Hochschulreife (Abitur) mit Note 2,2"
    }
  ],

  languages: [
    { name: "Deutsch", level: "Native" },
    { name: "English", level: "C1" },
    { name: "Spanish", level: "B2" },
    { name: "Französisch", level: "A2" }
  ],

  softSkills: [
    { 
      name: "Kommunikation", 
      description: "Klare Vermittlung komplexer technischer Konzepte an verschiedene Zielgruppen" 
    },
    { 
      name: "Problemlösung", 
      description: "Analytisches Denken und kreative Lösungsansätze für technische Herausforderungen" 
    },
    { 
      name: "Struktur & Priorisierung", 
      description: "Effektive Organisation von Tasks und Projekten mit klaren Zeitplänen" 
    },
    { 
      name: "Kollaboration", 
      description: "Teamarbeit und interdisziplinäre Zusammenarbeit in agilen Projekten" 
    },
    { 
      name: "Ownership", 
      description: "Eigenverantwortliches Arbeiten und Commitment zu Projektzielen" 
    },
    { 
      name: "Feedbackfähigkeit", 
      description: "Konstruktiver Umgang mit Feedback und kontinuierliche Verbesserung" 
    }
  ]
};

/**
 * Helper function to get about content
 */
export function getAboutContent(): AboutContent {
  return aboutContent;
}

/**
 * Helper function to get bio only
 */
export function getBio(): string {
  return aboutContent.bio;
}

/**
 * Helper function to get focus areas only
 */
export function getFocusAreas(): string[] {
  return aboutContent.focusAreas;
}

/**
 * Helper function to get timeline only
 */
export function getTimeline() {
  return aboutContent.timeline;
}
