/**
 * Author: Liliane Schutz
 * Project Detail Page - Dynamic with D1 Database
 * 
 * This page fetches project data from Cloudflare Pages Functions (D1 database)
 */

import { notFound } from 'next/navigation';
import ProjectDetailPageClient from '@/components/projects/ProjectDetailPageClient';

// Allow dynamic params (runtime data fetching from D1)
export const dynamic = 'force-dynamic';
export const dynamicParams = true;

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
