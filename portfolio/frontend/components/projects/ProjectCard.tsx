/** Author: Liliane Schutz */
'use client';

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/types";
import TagChip from "@/components/ui/TagChip";
import StatusBadge from "@/components/ui/StatusBadge";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

/**
 * ProjectCard Component
 * Displays project preview with image, title, description, tags, status
 * Used in ProjectGrid on projects overview page
 */
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projekte/${project.slug}`} className={styles.cardLink}>
      <article className={styles.card}>
        {/* Thumbnail */}
        <div className={styles.thumbnail}>
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={project.title}
              width={400}
              height={250}
              className={styles.image}
            />
          ) : (
            <div className={styles.thumbnailPlaceholder}>
              {project.title.substring(0, 2).toUpperCase()}
            </div>
          )}
        </div>

        {/* Content */}
        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          
          <p className={styles.description}>
            {project.shortDescription}
          </p>

          {/* Meta: Year + Category + Status */}
          <div className={styles.meta}>
            <span className={styles.year}>{project.year}</span>
            <span className={styles.category}>
              {project.category === "coding" && "Coding"}
              {project.category === "uiux" && "UI/UX"}
              {project.category === "data" && "Daten"}
              {project.category === "experiment" && "Experiment"}
            </span>
            <StatusBadge status={project.status} />
          </div>

          {/* Tags */}
          <div className={styles.tags}>
            {project.tags.slice(0, 4).map((tag) => (
              <TagChip key={tag} label={tag} />
            ))}
            {project.tags.length > 4 && (
              <span className={styles.moreTags}>+{project.tags.length - 4}</span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
