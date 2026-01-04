/**
 * Author: Liliane Schutz
 * Kontakt Seite - Skeleton
 */
import Link from 'next/link';
import styles from './page.module.css';

export default function KontaktPage() {
  return (
    <div className={styles.page}>
      <h1>Kontakt</h1>
      <p className={styles.intro}>
        Du hast ein Projekt, eine Frage oder möchtest einfach Hallo sagen? 
        Ich freue mich von dir zu hören!
      </p>

      <section className={styles.section}>
        <h2>Direkt erreichen</h2>
        <div className={styles.directContact}>
          <Link href="mailto:kontakt@example.com" className={styles.contactLink}>
            E-Mail: kontakt@example.com
          </Link>
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            GitHub
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            LinkedIn
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Kontaktformular</h2>
        <p className={styles.placeholder}>
          [Platzhalter für ContactForm mit Validierung – wird in Step 8 implementiert]
        </p>
      </section>
    </div>
  );
}
