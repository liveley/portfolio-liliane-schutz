/** Author: Liliane Schutz */

import { Project } from "@/lib/types";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectGrid.module.css";

interface ProjectGridProps {
  projects: Project[];
}

/**
 * ProjectGrid Component
 * Grid layout for project cards
 * Responsive: 3 columns on desktop, adapts for smaller screens
 */
export default function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className={styles.empty}>
        <p>Keine Projekte in dieser Kategorie gefunden.</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
