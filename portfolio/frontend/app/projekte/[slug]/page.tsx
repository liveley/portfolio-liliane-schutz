/** Author: Liliane Schutz */

import ProjectDetailPageClient from '@/components/projects/ProjectDetailPageClient';

// Required for static export - generates no pages at build time
// Client-side routing via _redirects handles navigation
export function generateStaticParams() {
  return [];
}

// Allow dynamic params at runtime
export const dynamicParams = true;

export default function ProjectPage() {
  return <ProjectDetailPageClient />;
}
