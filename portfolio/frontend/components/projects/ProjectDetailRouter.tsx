/** Author: Liliane Schutz - Client-Side Router */
'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { fetchProjectBySlug, fetchProjects } from '@/lib/api';
import PageShell from '@/components/layout/PageShell';
import ProjectDetail from '@/components/projects/ProjectDetail';
import ProjectMeta from '@/components/projects/ProjectMeta';

const styles = {
  container: 'project-detail-wrapper',
  main: 'project-detail-main-content',
  sidebar: 'project-detail-sidebar-content'
};

/**
 * Client-side project detail renderer
 * Checks URL path and renders project if on /projekte/[slug]
 */
export default function ProjectDetailRouter() {
  const pathname = usePathname();
  const [project, setProject] = useState<any>(null);
  const [allProjects, setAllProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Only render on /projekte/[slug] paths
    if (!pathname || !pathname.startsWith('/projekte/') || pathname === '/projekte' || pathname === '/projekte/') {
      return;
    }

    const slug = pathname.split('/').pop();
    if (!slug) return;

    let cancelled = false;
    setLoading(true);

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
        console.error('Failed to load project:', e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  // Don't render if not on a project detail page
  if (!pathname || !pathname.startsWith('/projekte/') || pathname === '/projekte' || pathname === '/projekte/') {
    return null;
  }

  if (loading || !project) {
    return null;
  }

  const currentIndex = allProjects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : undefined;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : undefined;

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
