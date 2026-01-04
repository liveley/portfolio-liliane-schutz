/**
 * Author: Liliane Schutz
 * Projekte Übersichtsseite - Skeleton
 */
import styles from './page.module.css';

export default function ProjektePage() {
  return (
    <div className={styles.page}>
      <h1>Projekte</h1>
      <p className={styles.intro}>
        Hier findest du eine Auswahl meiner Projekte aus den Bereichen Coding, UX/UI Design 
        und Datenvisualisierung.
      </p>

      <section className={styles.section}>
        <h3>Filter</h3>
        <p className={styles.placeholder}>
          [Platzhalter für FilterChips – wird in Step 5 implementiert]
        </p>
      </section>

      <section className={styles.section}>
        <h3>Projekt-Grid</h3>
        <p className={styles.placeholder}>
          [Platzhalter für ProjectGrid und ProjectCards – wird in Step 5 implementiert]
        </p>
      </section>
    </div>
  );
}
