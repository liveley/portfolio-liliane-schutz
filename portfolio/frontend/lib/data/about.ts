/** Author: Liliane Schutz */

import { AboutContent } from "../types";

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
  bio: "Ich bin Studentin im Bereich Informatik & Design mit Fokus auf digitale Produkte und Interfaces. Meine Leidenschaft liegt an der Schnittstelle von Code und Design – ich liebe es, Ideen in funktionale und ästhetische Lösungen zu verwandeln. Dieser Text ist ein Platzhalter für die Entwicklung.",
  
  focusAreas: [
    "Frontend Development mit React & TypeScript",
    "UI/UX Design & Prototyping",
    "Datenvisualisierung & interaktive Grafiken",
    "Webarchitekturen & Best Practices",
    "Design Systems & Component Libraries"
  ],
  
  timeline: [
    {
      period: "2023 – heute",
      title: "Studium Informatik & Design",
      description: "Bachelor-Studium mit Schwerpunkt auf Web-Technologien und User Interface Design. Praktikum in Webtechnologien (Next.js, React, TypeScript). Placeholder-Text für Entwicklung."
    },
    {
      period: "2021 – 2023",
      title: "Grundlagen & Orientierung",
      description: "Erste Erfahrungen mit Programmierung (Python, JavaScript) und Design-Tools (Figma, Adobe Creative Suite). Verschiedene Projekte im Bereich Webdesign und Frontend-Entwicklung. Placeholder-Text."
    },
    {
      period: "2020",
      title: "Einstieg in Coding",
      description: "Erste Schritte in HTML, CSS und JavaScript durch Online-Kurse und Tutorials. Entdeckung der Leidenschaft für Web-Development. Placeholder-Text für Timeline-Item."
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
