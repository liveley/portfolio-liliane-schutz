// Author: Liliane Schutz

/**
 * API Client für Portfolio Backend
 * Zentrale Fetch-Funktionen für Projects und Contact
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

// Error Handling for API Requests
class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public details?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

/**
 * Generic Fetch Wrapper mit Error Handling
 */
async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new ApiError(
        data.error?.message || 'API Request fehlgeschlagen',
        response.status,
        data.error?.details
      );
    }

    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    // Network errors
    throw new ApiError('Netzwerk-Fehler: Backend nicht erreichbar', 503);
  }
}

// ============================================================================
// PROJECTS API
// ============================================================================

export interface ProjectApiResponse {
  success: boolean;
  count: number;
  data: Project[];
}

export interface SingleProjectApiResponse {
  success: boolean;
  data: Project;
}

/**
 * Alle Projekte abrufen
 * Optional gefiltert nach featured oder category
 */
export async function fetchProjects(params?: {
  featured?: boolean;
  category?: string;
}): Promise<Project[]> {
  const queryParams = new URLSearchParams();
  if (params?.featured) queryParams.set('featured', 'true');
  if (params?.category) queryParams.set('category', params.category);

  const query = queryParams.toString();
  const endpoint = `/api/projects${query ? `?${query}` : ''}`;

  const response = await apiFetch<ProjectApiResponse>(endpoint);
  return response.data;
}

/**
 * Einzelnes Projekt nach Slug abrufen
 */
export async function fetchProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const response = await apiFetch<SingleProjectApiResponse>(`/api/projects/${slug}`);
    return response.data;
  } catch (error) {
    if (error instanceof ApiError && error.statusCode === 404) {
      return null;
    }
    throw error;
  }
}

// ============================================================================
// CONTACT API
// ============================================================================

export interface ContactSubmissionData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
  data: {
    id: string;
    createdAt: string;
  };
}

/**
 * Kontaktformular-Submission absenden
 */
export async function submitContactForm(
  data: ContactSubmissionData
): Promise<ContactApiResponse> {
  return apiFetch<ContactApiResponse>('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}

// ============================================================================
// TYPE IMPORTS (aus lib/types.ts)
// ============================================================================

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Project } from './types';
