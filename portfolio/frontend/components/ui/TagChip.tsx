/** Author: Liliane Schutz */

import styles from "./TagChip.module.css";

interface TagChipProps {
  label: string;
}

/**
 * TagChip Component
 * Simple tag display for technologies/categories
 * Reusable across project cards and other contexts
 */
export default function TagChip({ label }: TagChipProps) {
  return (
    <span className={styles.tagChip}>
      {label}
    </span>
  );
}
