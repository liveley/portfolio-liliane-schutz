/** Author: Liliane Schutz */
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchProjectBySlug, fetchProjects } from '@/lib/api';
import PageShell from '@/components/layout/PageShell';
import ProjectDetail from '@/components/projects/ProjectDetail';
import ProjectMeta from '@/components/projects/ProjectMeta';
import styles from './ProjectDetailPageClient.module.css';

export default function ProjectDetailPageClient() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : '';

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [project, setProject] = useState<any | null>(null);
  const [allProjects, setAllProjects] = useState<any[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    if (!slug) return;
    (async () => {
      try {
        const [p, list] = await Promise.all([
          fetchProjectBySlug(slug),
          fetchProjects()
        ]);
        if (!cancelled) {
          setProject(p);
          setAllProjects(list);
        }
      } catch (e) {
        if (!cancelled) setError('Projekt konnte nicht geladen werden.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (loading) return null;
  if (error || !project) return null;

  const currentIndex = allProjects?.findIndex((p) => p.slug === slug) ?? -1;
  const prevProject = currentIndex > 0 && allProjects ? allProjects[currentIndex - 1] : undefined;
  const nextProject = allProjects && currentIndex > -1 && currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : undefined;

  return (
    <PageShell>
      <div className={styles.container}>
        <main className={styles.main}>
          <ProjectDetail project={project} prevProject={prevProject} nextProject={nextProject} />
        </main>
      </div>
    </PageShell>
  );
}
