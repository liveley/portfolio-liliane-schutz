/** Author: Liliane Schutz */
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

/**
 * LIVELEY Intro Page
 * Standalone route showing "LI · VE · LEY → LIVELEY" animation
 * Redirects to home after animation completes
 * Only shown once per session via middleware + cookie
 */
export default function IntroPage() {
  const router = useRouter();
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'segments' | 'morph' | 'hold' | 'fadeout'>('idle');

  useEffect(() => {
    // Set cookie immediately to mark intro as seen
    document.cookie = 'intro_seen=1; path=/; SameSite=Lax';

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Reduced motion: show static LIVELEY briefly, then redirect
      setAnimationPhase('hold');
      setTimeout(() => {
        router.replace('/');
      }, 800);
    } else {
      // Full animation with 3× longer timing + hold phase
      setAnimationPhase('segments');
      
      // Sequence: segments (4.5s) → morph (2s) → hold (2.5s) → fadeout (1s)
      setTimeout(() => setAnimationPhase('morph'), 4500);    // LI·VE·LEY stagger
      setTimeout(() => setAnimationPhase('hold'), 6500);     // Morph to LIVELEY
      setTimeout(() => setAnimationPhase('fadeout'), 9000);  // Hold readable
      setTimeout(() => {
        router.replace('/');
      }, 10000); // Fadeout + redirect
    }
  }, [router]);

  const handleSkip = () => {
    setAnimationPhase('fadeout');
    setTimeout(() => {
      router.replace('/');
    }, 300);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSkip();
    }
  };

  return (
    <div 
      className={`${styles.container} ${styles[animationPhase]}`}
      onClick={handleSkip}
      role="dialog"
      aria-label="LIVELEY Intro"
    >
      <div className={styles.content}>
        {/* Full name hint (small, faded) */}
        <p className={styles.nameHint}>
          <span className={styles.li}>Li</span>liane{' '}
          <span className={styles.ve}>Ve</span>ronica{' '}
          <span className={styles.ley}>Ley</span>la
        </p>

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
      </div>

      {/* Skip button */}
      <button
        className={styles.skipButton}
        onClick={(e) => { e.stopPropagation(); handleSkip(); }}
        onKeyDown={handleKeyDown}
        aria-label="Skip intro"
      >
        Skip
      </button>
    </div>
  );
}
