/** Author: Liliane Schutz */

import styles from "./PageShell.module.css";

interface PageShellProps {
  children: React.ReactNode;
}

/**
 * PageShell - Konsistenter Container für alle Seiten
 * Definiert max-width, padding und vertikale Abstände
 * Nicht verwendet auf Home (eigenes Layout)
 */
export default function PageShell({ children }: PageShellProps) {
  return (
    <div className={styles.shell}>
      {children}
    </div>
  );
}
