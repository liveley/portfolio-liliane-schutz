/**
 * Author: Liliane Schutz
 * Header mit Logo und Navigation
 */
import TransitionLink from './TransitionLink';
import NavigationBar from './NavigationBar';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <TransitionLink href="/intro?force=1" className={styles.logo}>
          Liliane Schutz
        </TransitionLink>
        <NavigationBar />
      </div>
    </header>
  );
}
