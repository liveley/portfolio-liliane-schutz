/**
 * Author: Liliane Schutz
 * Footer mit Copyright und Social Links
 */
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copyright}>
          © 2026 Liliane Schutz. Alle Rechte vorbehalten.
        </div>
        <div className={styles.socials}>
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            GitHub
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            LinkedIn
          </Link>
          <Link href="mailto:kontakt@example.com" className={styles.socialLink}>
            E-Mail
          </Link>
        </div>
      </div>
    </footer>
  );
}
