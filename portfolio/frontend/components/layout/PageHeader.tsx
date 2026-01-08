/** Author: Liliane Schutz */

import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  title: string;
  lead?: string; // Optional intro text
  eyebrow?: string; // Optional small label above title
}

/**
 * PageHeader - Konsistente Header-Struktur für alle Seiten
 * H1 + Lead-Text mit einheitlichem Baseline und linker Kante
 */
export default function PageHeader({ title, lead, eyebrow }: PageHeaderProps) {
  return (
    <header className={styles.header}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h1 className={`${styles.title} heading-colorful`} data-text={title}>{title}</h1>
      {lead && <p className={styles.lead}>{lead}</p>}
    </header>
  );
}
