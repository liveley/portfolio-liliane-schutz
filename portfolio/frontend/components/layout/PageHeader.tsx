/** Author: Liliane Schutz */

import AuroraHeading from '@/components/ui/AuroraHeading';
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
      <AuroraHeading as="h1" size="large" className={styles.title}>{title}</AuroraHeading>
      {lead && <p className={styles.lead}>{lead}</p>}
    </header>
  );
}
