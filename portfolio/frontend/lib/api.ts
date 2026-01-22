// Author: Liliane Schutz

/**
 * API Client für Portfolio - Static Data
 * Direkt aus JSON-Datei laden (kein Backend/API benötigt)
 */

import projectsData from '@/data/projects-data.json';

// ============================================================================
// PROJECTS DATA ACCESS
// ============================================================================

/**
 * Alle Projekte abrufen
 * Optional gefiltert nach featured oder category
 */
export async function fetchProjects(params?: {
  featured?: boolean;
  category?: string;
}): Promise<Project[]> {
  let projects = projectsData as Project[];

  // Filter by featured
  if (params?.featured) {
    projects = projects.filter(p => p.featured);
  }

  // Filter by category
  if (params?.category) {
    projects = projects.filter(p => p.category === params.category);
  }

  return projects;
}

/**
 * Einzelnes Projekt nach Slug abrufen
 */
export async function fetchProjectBySlug(slug: string): Promise<Project | null> {
  const projects = projectsData as Project[];
  const project = projects.find(p => p.slug === slug);
  return project || null;
}

// ============================================================================
// TYPE IMPORTS
// ============================================================================

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Project } from './types';
