/**
 * Next.js API Route: GET /api/projects
 * Development fallback for Cloudflare Pages Functions
 * In production, this is handled by /functions/api/projects/index.ts
 */

import { NextRequest, NextResponse } from 'next/server';

// Mock project data for local development
const mockProjects = [
  {
    id: "1",
    slug: "life-threads-data-vis",
    title: "Life Threads – Interaktive Datenvisualisierung",
    year: 2025,
    category: "data",
    featured: true,
    status: "in-progress",
    shortDescription: "Scrollytelling-Visualisierung meines Jahres: Schlaf, Sport, Lesen und Uni – in interaktiven Datengeschichten.",
    tags: ["SvelteKit", "TypeScript", "D3.js", "Canvas API"],
    techStack: ["SvelteKit", "TypeScript", "D3.js", "Canvas API"],
    role: "Solo-Entwicklerin und Information Designerin",
    coverImage: "/projects/life-threads.png",
  },
  {
    id: "2",
    slug: "ressource-realms-3d",
    title: "Ressource Realms – 3D-Strategiespiel",
    year: 2025,
    category: "coding",
    featured: true,
    status: "finished",
    shortDescription: "Browser-basiertes 3D-Strategiespiel mit WebGL-Rendering, interaktivem Spielbrett und komplexer Spiellogik.",
    tags: ["Three.js", "JavaScript", "WebGL", "Blender"],
    techStack: ["Three.js", "JavaScript", "Vite", "Blender"],
    role: "Full-Stack Game Developer im 4-Personen-Team",
    coverImage: "/projects/ressource-realms.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const featured = searchParams.get('featured');
  const category = searchParams.get('category');
  
  let filtered = mockProjects;
  
  if (featured === 'true') {
    filtered = filtered.filter(p => p.featured);
  }
  
  if (category) {
    filtered = filtered.filter(p => p.category === category);
  }
  
  return NextResponse.json({
    success: true,
    count: filtered.length,
    data: filtered,
  });
}
