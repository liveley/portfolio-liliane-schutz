/**
 * Author: Liliane Schutz
 * Header mit Logo und Navigation
 */
import Link from 'next/link';
import NavigationBar from './NavigationBar';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/intro?force=1" className={styles.logo} aria-label="LIVELEY Intro abspielen">
          Liliane Schutz
        </Link>
        <NavigationBar />
      </div>
    </header>
  );
}
