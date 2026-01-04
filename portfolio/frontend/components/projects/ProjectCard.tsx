/** Author: Liliane Schutz */

import { Project } from "@/lib/types";
import TagChip from "@/components/ui/TagChip";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

/**
 * ProjectCard Component
 * Displays project preview with title, description, tags
 * Used in ProjectGrid on projects overview page
 */
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      {/* Thumbnail Placeholder */}
      <div className={styles.thumbnail}>
        <div className={styles.thumbnailPlaceholder}>
          {project.title.substring(0, 2).toUpperCase()}
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        
        <p className={styles.description}>
          {project.shortDescription}
        </p>

        {/* Meta: Year + Category */}
        <div className={styles.meta}>
          <span className={styles.year}>{project.year}</span>
          <span className={styles.category}>
            {project.category === "coding" && "Coding"}
            {project.category === "uiux" && "UI/UX"}
            {project.category === "data" && "Daten"}
            {project.category === "experiment" && "Experiment"}
          </span>
        </div>

        {/* Tags */}
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <TagChip key={tag} label={tag} />
          ))}
        </div>

        {/* CTA - Disabled for now (Step 6) */}
        <div className={styles.cta}>
          <span className={styles.ctaDisabled}>Case Study folgt →</span>
        </div>
      </div>
    </article>
  );
}
