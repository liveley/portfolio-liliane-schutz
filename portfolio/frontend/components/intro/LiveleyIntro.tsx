/** Author: Liliane Schutz */
'use client';

import { useState, useEffect } from 'react';
import styles from './LiveleyIntro.module.css';

/**
 * LIVELEY Intro Overlay
 * Shows "LI · VE · LEY → LIVELEY" animation once per session
 * Respects prefers-reduced-motion
 */
export default function LiveleyIntro() {
  const [show, setShow] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'segments' | 'morph' | 'fadeout'>('idle');

  useEffect(() => {
    // Check if intro was already shown in this session
    const hasSeenIntro = sessionStorage.getItem('intro_seen');
    
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!hasSeenIntro) {
      if (prefersReducedMotion) {
        // For reduced motion: show static briefly then skip
        setShow(true);
        setAnimationPhase('morph');
        setTimeout(() => {
          handleComplete();
        }, 800);
      } else {
        // Normal animation
        setShow(true);
        setAnimationPhase('segments');
        
        // Sequence: segments → morph → fadeout
        setTimeout(() => setAnimationPhase('morph'), 1500);
        setTimeout(() => setAnimationPhase('fadeout'), 2800);
        setTimeout(() => handleComplete(), 3500);
      }
    }
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem('intro_seen', '1');
    setShow(false);
  };

  const handleSkip = () => {
    setAnimationPhase('fadeout');
    setTimeout(() => handleComplete(), 300);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSkip();
    }
  };

  if (!show) return null;

  return (
    <div 
      className={`${styles.overlay} ${styles[animationPhase]}`}
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
