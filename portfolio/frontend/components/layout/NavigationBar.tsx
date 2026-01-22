/**
 * Author: Liliane Schutz
 * Navigation Bar mit Active State + Mobile Burger Menu
 */
'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import TransitionLink from './TransitionLink';
import styles from './NavigationBar.module.css';

export default function NavigationBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projekte', label: 'Projekte' },
    { href: '/ueber-mich', label: 'Über mich' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  // Close menu when pathname changes (after navigation)
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const handleMenuKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setMenuOpen(false);
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // 1. Check modifiers (standard browser behavior)
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) {
      return;
    }

    e.preventDefault();

    // 2. Determine if we need to close the menu and wait
    const isMobileMenuOpen = menuOpen;
    setMenuOpen(false);

    // 3. Logic: Delay navigation if menu was open to allow closing animation
    const delay = isMobileMenuOpen ? 300 : 0;

    setTimeout(() => {
      // 4. Perform Navigation
      const performNavigation = () => {
        window.location.assign(href);
      };

      // @ts-ignore - ViewTransition API
      if ('startViewTransition' in document) {
        // @ts-ignore
        document.startViewTransition(() => {
          performNavigation();
        });
      } else {
        performNavigation();
      }
    }, delay);
  };

  return (
    <>
      {/* Burger Button - visible on mobile */}
      <button
        className={styles.burgerButton}
        aria-label="Navigation Menu"
        aria-expanded={menuOpen}
        aria-controls="nav-menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
      </button>

      {/* Navigation - hidden on mobile unless menu open */}
      <nav 
        className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
        id="nav-menu"
        onKeyDown={handleMenuKeyDown}
      >
        <ul className={styles.navList}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            
            return (
              <li key={link.href}>
                <a 
                  href={link.href}
                  className={isActive ? styles.navLinkActive : styles.navLink}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Menu Overlay - close on click outside */}
      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
