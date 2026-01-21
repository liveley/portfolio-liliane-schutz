/** Author: Liliane Schutz */
'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './AuroraHeading.module.css';

/**
 * AuroraHeading Component
 * 
 * Premium heading with localized "blur bubble splash" effect around cursor.
 * Base text stays white; aurora colors only appear in a radius around pointer.
 * 
 * Features:
 * - Pure CSS mask-image for localized effect (no full-heading color)
 * - Soft blurred circles via radial gradients (paint bubble look)
 * - Cursor tracking via CSS variables (--mx, --my)
 * - rAF throttle for smooth performance
 * - Respects prefers-reduced-motion
 * 
 * Usage:
 * <AuroraHeading as="h2">Werdegang</AuroraHeading>
 * <AuroraHeading as="h3" size="small">Skills & Tools</AuroraHeading>
 */

interface AuroraHeadingProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'large' | 'medium' | 'small';
  className?: string;
}

export default function AuroraHeading({ 
  children, 
  as: Tag = 'h2', 
  size = 'medium',
  className = '' 
}: AuroraHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLHeadingElement>) => {
    if (!headingRef.current || prefersReducedMotion) return;

    // Cancel previous rAF to throttle
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      if (!headingRef.current) return;

      const rect = headingRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Set CSS variables for cursor position (relative to heading)
      headingRef.current.style.setProperty('--mx', `${x}px`);
      headingRef.current.style.setProperty('--my', `${y}px`);
    });
  };

  const handlePointerEnter = () => {
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  };

  const sizeClass = styles[`size-${size}`];
  const hoverClass = isHovered && !prefersReducedMotion ? styles.hovered : '';
  const reducedMotionClass = prefersReducedMotion ? styles.reducedMotion : '';

  return (
    <Tag
      ref={headingRef as any}
      className={`${styles.heading} ${sizeClass} ${hoverClass} ${reducedMotionClass} ${className}`.trim()}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      {/* Base layer: always white */}
      <span className={styles.baseText}>{children}</span>
      
      {/* Aura layer: aurora colors, masked to cursor radius */}
      <span className={styles.auraText} aria-hidden="true">{children}</span>
    </Tag>
  );
}
