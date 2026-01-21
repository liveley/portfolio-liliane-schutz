/** Author: Liliane Schutz */
'use client';

import { useEffect, useState } from 'react';
import { fetchProjects } from '@/lib/api';
import AuroraHeading from '@/components/ui/AuroraHeading';
import ProjectCard from '@/components/projects/ProjectCard';
import styles from '@/app/page.module.css';

export default function FeaturedProjectsClient() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [projects, setProjects] = useState<Array<ReturnType<typeof Object>>>();

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await fetchProjects({ featured: true });
        if (!cancelled) {
          setProjects(data);
        }
      } catch (e) {
        if (!cancelled) setError('Konnte Projekte nicht laden.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return null;
  }

  if (error || !projects || projects.length === 0) {
    return null;
  }

  return (
    <section className={styles.featuredSection}>
      <AuroraHeading as="h2" size="large" className={styles.featuredTitle}>Featured Projects</AuroraHeading>
      <div className={styles.featuredGrid}>
        {projects.map((project: any) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
