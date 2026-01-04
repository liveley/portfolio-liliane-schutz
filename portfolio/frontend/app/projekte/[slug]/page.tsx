/** Author: Liliane Schutz */

import { notFound } from 'next/navigation';
import { projects } from '@/lib/data/projects';
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
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  // Show 404 if project not found
  if (!project) {
    notFound();
  }

  // Find prev/next projects in the array
  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : undefined;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : undefined;

  return (
    <div className={styles.page}>
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
    </div>
  );
}
