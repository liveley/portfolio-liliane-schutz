/** Author: Liliane Schutz */

import { notFound } from 'next/navigation';
import { fetchProjectBySlug, fetchProjects } from '@/lib/api';
import PageShell from '@/components/layout/PageShell';
import ProjectDetail from '@/components/projects/ProjectDetail';
import ProjectMeta from '@/components/projects/ProjectMeta';
import styles from './page.module.css';

// Force dynamic rendering (no static generation at build time)
export const dynamic = 'force-dynamic';

// Page component
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await fetchProjectBySlug(slug);

  // Show 404 if project not found
  if (!project) {
    notFound();
  }

  // Get all projects for prev/next navigation
  const allProjects = await fetchProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : undefined;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : undefined;

  return (
    <PageShell>
      <div className={styles.container}>
        <main className={styles.main}>
          <ProjectDetail
            project={project}
            prevProject={prevProject}
            nextProject={nextProject}
          />
        </main>
        <aside className={styles.sidebar}>
          <ProjectMeta project={project} />
        </aside>
      </div>
    </PageShell>
  );
}
