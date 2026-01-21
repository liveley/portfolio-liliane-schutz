/** Author: Liliane Schutz */

import ProjectDetailPageClient from '@/components/projects/ProjectDetailPageClient';

// Ensure no server-side data fetching/prerender
export const dynamic = 'force-static';

export default function ProjectPage() {
  return <ProjectDetailPageClient />;
}
