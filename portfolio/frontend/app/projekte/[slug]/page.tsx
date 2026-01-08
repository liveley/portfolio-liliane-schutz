/** Author: Liliane Schutz */

import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllProjects, getPrevNextProjects } from '@/lib/data/projects';
import PageShell from '@/components/layout/PageShell';
import ProjectDetail from '@/components/projects/ProjectDetail';
import ProjectMeta from '@/components/projects/ProjectMeta';
import styles from './page.module.css';

// Generate static paths for all projects
export function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Page component
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  // Show 404 if project not found
  if (!project) {
    notFound();
  }

  // Get prev/next projects from data layer
  const { prevProject, nextProject } = getPrevNextProjects(slug);

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
