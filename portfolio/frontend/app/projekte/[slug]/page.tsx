/** Author: Liliane Schutz */

import { notFound } from 'next/navigation';
import { projects } from '@/lib/data/projects';
import PageShell from '@/components/layout/PageShell';
import ProjectDetail from '@/components/projects/ProjectDetail';
import ProjectMeta from '@/components/projects/ProjectMeta';
import styles from './page.module.css';

// Generate static paths for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Helper to find project by slug
function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

// Page component
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  // Show 404 if project not found
  if (!project) {
    notFound();
  }

  // Find prev/next projects in the array
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : undefined;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : undefined;

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
