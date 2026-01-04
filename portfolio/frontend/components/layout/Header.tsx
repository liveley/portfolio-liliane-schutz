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
        <Link href="/" className={styles.logo}>
          Liliane Schutz
        </Link>
        <NavigationBar />
      </div>
    </header>
  );
}
