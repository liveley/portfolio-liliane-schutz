/** Author: Liliane Schutz */
'use client';

import { useEffect, useState } from 'react';
import { fetchProjects } from '@/lib/api';
import FilterChips from '@/components/projects/FilterChips';

export default function ProjectsListClient() {
  const [projects, setProjects] = useState<any[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await fetchProjects();
        if (!cancelled) setProjects(data);
      } catch (e) {
        if (!cancelled) setError('Konnte Projekte nicht laden.');
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return null;
  }

  if (!projects) {
    return null;
  }

  return <FilterChips projects={projects} />;
}
