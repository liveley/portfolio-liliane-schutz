// Author: Liliane Schutz

/**
 * API Client für Portfolio - Cloudflare Pages Functions with D1
 * Calls Cloudflare Pages Functions that query D1 database
 */

// Helper to get the correct API base URL
function getApiBaseUrl(): string {
  // In browser (client-side), use relative URLs
  if (typeof window !== 'undefined') {
    return '';
  }
  
  // In server-side rendering (development)
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000';
  }
  
  // In production (Cloudflare Pages)
  return process.env.NEXT_PUBLIC_API_URL || '';
}

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
    const baseUrl = getApiBaseUrl();
    const url = `${baseUrl}${endpoint}`;
    
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers
      }
    });

    const data = await response.json() as any;

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
    // Better error handling for network and JSON errors
    if (error instanceof TypeError || error instanceof SyntaxError) {
      console.error('Network or parsing error:', error);
      throw new ApiError('Netzwerk-Fehler: Backend nicht erreichbar', 503);
    }
    throw new ApiError('Unbekannter Fehler', 500);
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
 * Alle Projekte abrufen (from D1 via Cloudflare Pages Functions)
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
 * Einzelnes Projekt nach Slug abrufen (from D1 via Cloudflare Pages Functions)
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
// TYPE IMPORTS
// ============================================================================

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Project } from './types';
