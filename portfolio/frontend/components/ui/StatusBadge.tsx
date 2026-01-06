/** Author: Liliane Schutz */

import { ProjectStatus } from "@/lib/types";
import styles from "./StatusBadge.module.css";

interface StatusBadgeProps {
  status: ProjectStatus;
}

const statusLabels: Record<ProjectStatus, string> = {
  "in-progress": "In Arbeit",
  "finished": "Abgeschlossen"
};

/**
 * StatusBadge - Zeigt Projektstatus als dezenten Badge
 * Styling: outline + farbiger left border als Indicator
 */
export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[status]}`}>
      {statusLabels[status]}
    </span>
  );
}
