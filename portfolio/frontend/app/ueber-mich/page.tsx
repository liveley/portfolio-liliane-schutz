/**
 * Author: Liliane Schutz
 * Über mich Seite - Skeleton
 */
import styles from './page.module.css';

export default function UeberMichPage() {
  return (
    <div className={styles.page}>
      <h1>Über mich</h1>

      <section className={styles.section}>
        <h2>Hero</h2>
        <div className={styles.twoColumn}>
          <div>
            <p>
              Platzhalter für Portrait/Illustration (links)
            </p>
          </div>
          <div>
            <p>
              Platzhalter für Bio-Text und Focus Areas (rechts)
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Werdegang</h2>
        <p className={styles.placeholder}>
          [Platzhalter für Timeline – wird in Step 7 implementiert]
        </p>
      </section>

      <section className={styles.section}>
        <h2>Skills & Tools</h2>
        <p className={styles.placeholder}>
          [Platzhalter für SkillGroups mit Level 1-5 – wird in Step 7 implementiert]
        </p>
      </section>

      <section className={styles.section}>
        <h2>Wie ich arbeite</h2>
        <p className={styles.placeholder}>
          [Platzhalter für ValueCards – wird in Step 7 implementiert]
        </p>
      </section>
    </div>
  );
}
