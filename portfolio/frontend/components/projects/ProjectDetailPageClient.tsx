/** Author: Liliane Schutz */
'use client';

import { useEffect, useMemo, useState } from 'react';
import { fetchProjectBySlug, fetchProjects } from '@/lib/api';
import PageShell from '@/components/layout/PageShell';
import ProjectDetail from '@/components/projects/ProjectDetail';
import ProjectMeta from '@/components/projects/ProjectMeta';

export default function ProjectDetailPageClient() {
  // Extract slug from URL pathname
  const slug = useMemo(() => {
    if (typeof window === 'undefined') return '';
    const parts = window.location.pathname.split('/');
    return parts[parts.length - 1] || '';
  }, []);

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
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem', padding: '2rem 0' }}>
        <main>
          <ProjectDetail project={project} prevProject={prevProject} nextProject={nextProject} />
        </main>
        <aside style={{ position: 'sticky', top: '100px', alignSelf: 'start' }}>
          <ProjectMeta project={project} />
        </aside>
      </div>
    </PageShell>
  );
}
