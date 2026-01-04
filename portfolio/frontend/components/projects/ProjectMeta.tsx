/** Author: Liliane Schutz */

import { Project } from "@/lib/types";
import TagChip from "@/components/ui/TagChip";
import Button from "@/components/ui/Button";
import styles from "./ProjectMeta.module.css";

interface ProjectMetaProps {
  project: Project;
}

/**
 * ProjectMeta Component (Sidebar)
 * Displays metadata about a project: role, tools, tech stack, links
 * Used on project detail pages
 */
export default function ProjectMeta({ project }: ProjectMetaProps) {
  return (
    <aside className={styles.meta}>
      <div className={styles.section}>
        <h4 className={styles.label}>Rolle</h4>
        <p className={styles.value}>Konzeption & Entwicklung</p>
      </div>

      <div className={styles.section}>
        <h4 className={styles.label}>Jahr</h4>
        <p className={styles.value}>{project.year}</p>
      </div>

      <div className={styles.section}>
        <h4 className={styles.label}>Kategorie</h4>
        <p className={styles.value}>
          {project.category === "coding" && "Coding"}
          {project.category === "uiux" && "UI/UX Design"}
          {project.category === "data" && "Datenvisualisierung"}
          {project.category === "experiment" && "Experiment"}
        </p>
      </div>

      <div className={styles.section}>
        <h4 className={styles.label}>Tech Stack & Tools</h4>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <TagChip key={tag} label={tag} />
          ))}
        </div>
      </div>

      {project.links && (
        <div className={styles.section}>
          <h4 className={styles.label}>Links</h4>
          <div className={styles.buttons}>
            {project.links.github && (
              <Button href={project.links.github} variant="secondary">
                GitHub
              </Button>
            )}
            {project.links.demo && (
              <Button href={project.links.demo} variant="primary">
                Live Demo
              </Button>
            )}
          </div>
        </div>
      )}
    </aside>
  );
}
