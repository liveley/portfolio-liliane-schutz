/** Author: Liliane Schutz */
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './intro-layout.css';
import styles from './page.module.css';

/**
 * LIVELEY Intro Page - Optimized for fast loading
 * Uses Root Layout (SPA navigation, no full page reload)
 * Hides Header/Footer via intro-layout.css
 * Animation starts immediately (no hydration wait)
 */
export default function IntroPage() {
  const router = useRouter();
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'segments' | 'morph' | 'hold' | 'fadeout'>('segments'); // Start immediately!

  useEffect(() => {
    // Set cookie immediately
    document.cookie = 'intro_seen=1; path=/; SameSite=Lax';

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setAnimationPhase('hold');
      setTimeout(() => router.replace('/'), 800);
      return;
    }

    // Animation sequence (already started at 'segments')
    setTimeout(() => setAnimationPhase('morph'), 4500);
    setTimeout(() => setAnimationPhase('hold'), 6500);
    setTimeout(() => setAnimationPhase('fadeout'), 9000);
    setTimeout(() => router.replace('/'), 10000);
  }, [router]);

  return (
    <div 
      className={`intro-page ${styles.container} ${styles[animationPhase]}`}
      role="dialog"
      aria-label="LIVELEY Intro"
      translate="no"
    >
      <div className={styles.content}>
        {/* Segmented version: LI · VE · LEY */}
        <div className={styles.segments}>
          <span className={styles.segment1}>LI</span>
          <span className={styles.dot}>·</span>
          <span className={styles.segment2}>VE</span>
          <span className={styles.dot}>·</span>
          <span className={styles.segment3}>LEY</span>
        </div>

        {/* Morphed version: LIVELEY */}
        <div className={styles.morphed}>
          <span className={styles.morphLi}>LI</span>
          <span className={styles.morphVe}>VE</span>
          <span className={styles.morphLey}>LEY</span>
        </div>

        {/* Full name hint */}
        <p className={styles.nameHint}>
          <span className={styles.li}>Li</span>liane{' '}
          <span className={styles.ve}>Ve</span>ronica{' '}
          <span className={styles.ley}>Ley</span>la
        </p>
      </div>
    </div>
  );
}
