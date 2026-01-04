/**
 * Author: Liliane Schutz
 * Navigation Bar mit Active State
 */
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './NavigationBar.module.css';

export default function NavigationBar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projekte', label: 'Projekte' },
    { href: '/ueber-mich', label: 'Über mich' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          
          return (
            <li key={link.href}>
              <Link 
                href={link.href}
                className={isActive ? styles.navLinkActive : styles.navLink}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
