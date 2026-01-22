/**
 * Author: Liliane Schutz
 * Project Detail Page - Static Export with generateStaticParams
 * 
 * This page generates static HTML for all project detail routes
 * Required for Cloudflare Pages static export compatibility
 */

import { notFound } from 'next/navigation';
import ProjectDetailPageClient from '@/components/projects/ProjectDetailPageClient';
import { readFileSync } from 'fs';
import { join } from 'path';

export const dynamic = 'error'; // Ensure this only generates static pages

/**
 * Generate static params for all project slugs
 * Loads from JSON file at build-time to generate routes
 * Runtime data comes from D1 via Cloudflare Pages Functions
 */
export async function generateStaticParams() {
  try {
    // Load projects from JSON file (for route generation at build time)
    const projectsPath = join(process.cwd(), '..', 'backend', 'src', 'data', 'projects-data.json');
    const projectsData = JSON.parse(readFileSync(projectsPath, 'utf-8'));
    
    if (!Array.isArray(projectsData) || projectsData.length === 0) {
      console.warn('⚠️  No projects found in projects-data.json');
      return [];
    }
    
    const params = projectsData.map((project: any) => ({
      slug: project.slug,
    }));
    
    console.log(`✓ Generated static params for ${params.length} project routes`);
    return params;
  } catch (error) {
    console.error('Failed to generate static params for projects:', error);
    return [];
  }
}

export const dynamicParams = false; // Disable dynamic route generation for unknown slugs

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Server component that validates slug and renders client component
 * This ensures proper hydration with Next.js static export
 */
export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;

  // Validate slug format (basic check)
  if (!slug || typeof slug !== 'string' || slug.trim().length === 0) {
    notFound();
  }

  // Return client component - it will fetch and render the project
  // This approach keeps the page static while allowing client-side data fetching
  return <ProjectDetailPageClient />;
}
