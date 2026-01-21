/**
 * Next.js API Route: GET /api/projects/[slug]
 * Development fallback for Cloudflare Pages Functions
 * In production, this is handled by /functions/api/projects/[slug].ts
 */

import { NextRequest, NextResponse } from 'next/server';

const mockProjectDetails: Record<string, any> = {
  "life-threads-data-vis": {
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
    links: { note: "auf Anfrage" },
    detail: {
      context: "Universitätsprojekt im Rahmen des Kurses 'Information Design'.",
      problem: "Rohdaten liegen als CSV-Dateien vor, aber die Geschichte dahinter bleibt unsichtbar.",
      goals: ["Daten visualisieren", "Scrollytelling entwickeln"],
      results: ["Funktionsfähige Scrollytelling-Visualisierung", "Performance-optimiert"],
    },
  },
  "ressource-realms-3d": {
    id: "2",
    slug: "ressource-realms-3d",
    title: "Ressource Realms – 3D-Strategiespiel",
    year: 2025,
    category: "coding",
    featured: true,
    status: "finished",
    shortDescription: "Browser-basiertes 3D-Strategiespiel mit WebGL-Rendering.",
    tags: ["Three.js", "JavaScript", "WebGL"],
    techStack: ["Three.js", "JavaScript", "Vite"],
    role: "Full-Stack Game Developer",
    coverImage: "/projects/ressource-realms.png",
    links: { note: "auf Anfrage" },
    detail: {
      context: "Teamprojekt über ein Semester.",
      results: ["Vollständig spielbare 3D-Umsetzung"],
    },
  },
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  
  const project = mockProjectDetails[slug];
  
  if (!project) {
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'NOT_FOUND',
          message: `Project with slug "${slug}" not found`,
        },
      },
      { status: 404 }
    );
  }
  
  return NextResponse.json({
    success: true,
    data: project,
  });
}
