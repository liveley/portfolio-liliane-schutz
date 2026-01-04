/** Author: Liliane Schutz */

import { Project } from "../types";

/**
 * Mock Project Data (Placeholder)
 * 
 * WICHTIG: Dies sind Placeholder-Daten für die Entwicklung.
 * Finale Projektinhalte werden später ergänzt.
 * 
 * Requirements:
 * - Mind. 4 Projekte
 * - Davon 3 featured (für Home page Featured Projects)
 * - Verschiedene Kategorien (coding, uiux, data, experiment)
 */

export const projects: Project[] = [
  {
    id: "proj-001",
    slug: "projekt-alpha",
    title: "Projekt Alpha",
    year: 2025,
    featured: true,
    category: "coding",
    shortDescription: "Eine moderne Web-Applikation mit React und TypeScript. Placeholder-Beschreibung für Entwicklung.",
    tags: ["React", "TypeScript", "Next.js", "CSS"],
    links: {
      github: "https://github.com/placeholder/projekt-alpha",
      demo: "https://demo.example.com/projekt-alpha"
    }
  },
  {
    id: "proj-002",
    slug: "projekt-beta",
    title: "Projekt Beta",
    year: 2024,
    featured: true,
    category: "uiux",
    shortDescription: "UI/UX Design Case Study mit Prototyping in Figma. Placeholder für Designprojekt.",
    tags: ["Figma", "Prototyping", "UI Design", "User Research"],
    links: {
      demo: "https://figma.com/placeholder/projekt-beta"
    }
  },
  {
    id: "proj-003",
    slug: "projekt-gamma",
    title: "Projekt Gamma",
    year: 2024,
    featured: true,
    category: "data",
    shortDescription: "Datenvisualisierung mit D3.js und interaktiven Charts. Placeholder für Data-Viz-Projekt.",
    tags: ["D3.js", "Data Visualization", "JavaScript", "SVG"],
    links: {
      github: "https://github.com/placeholder/projekt-gamma",
      demo: "https://demo.example.com/projekt-gamma"
    }
  },
  {
    id: "proj-004",
    slug: "projekt-delta",
    title: "Projekt Delta",
    year: 2023,
    featured: false,
    category: "experiment",
    shortDescription: "Experimentelles Projekt mit generativer Kunst und Code. Placeholder für Experiment.",
    tags: ["p5.js", "Generative Art", "Creative Coding"],
    links: {
      demo: "https://demo.example.com/projekt-delta"
    }
  },
  {
    id: "proj-005",
    slug: "projekt-epsilon",
    title: "Projekt Epsilon",
    year: 2023,
    featured: false,
    category: "coding",
    shortDescription: "Backend-API mit Node.js und Express. Placeholder für Backend-Projekt.",
    tags: ["Node.js", "Express", "REST API", "MongoDB"],
    links: {
      github: "https://github.com/placeholder/projekt-epsilon"
    }
  }
];

/**
 * Helper function to get featured projects (for Home page)
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured);
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

// Type import for filter function
type ProjectCategory = "coding" | "uiux" | "data" | "experiment";
