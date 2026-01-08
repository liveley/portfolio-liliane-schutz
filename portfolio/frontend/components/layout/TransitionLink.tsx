/**
 * Author: Liliane Schutz
 * Transition Link – Wrapper für Next.js Link mit View Transition API
 * 
 * Implementiert sanfte Page Transitions mit automatischem Fallback.
 * Respektiert Modifier-Keys (Ctrl/Meta/Shift) und Middle-Click für natürliches Link-Verhalten.
 */
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MouseEvent, ReactNode } from 'react';

interface TransitionLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

/**
 * Feature-Detection für View Transition API
 */
function supportsViewTransitions(): boolean {
  return 'startViewTransition' in document;
}

/**
 * Prüft ob Modifier-Key aktiv ist (sollte natürliches Link-Verhalten auslösen)
 */
function hasModifierKey(event: MouseEvent): boolean {
  return event.ctrlKey || event.metaKey || event.shiftKey || event.button !== 0;
}

export default function TransitionLink({ href, className, children }: TransitionLinkProps) {
  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    // Natürliches Link-Verhalten bei Modifier-Keys oder Middle-Click
    if (hasModifierKey(event)) {
      return; // Lässt Browser die Navigation übernehmen (neuer Tab, etc.)
    }

    // Verhindere Default nur wenn wir selbst navigieren
    event.preventDefault();

    // Fallback: Keine View Transition API → normale Navigation
    if (!supportsViewTransitions()) {
      router.push(href);
      return;
    }

    // View Transition API vorhanden → Transition starten
    // @ts-ignore – startViewTransition ist noch nicht in allen TS-Definitionen
    document.startViewTransition(() => {
      router.push(href);
    });
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
