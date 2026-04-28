/** Author: Liliane Schutz */

/** Author: Liliane Schutz */
'use client';

import styles from "./ImageWithCaption.module.css";
import { useState } from "react";
import type { SyntheticEvent } from "react";

interface ImageWithCaptionProps {
  src?: string;
  alt: string;
  caption?: string;
}

/**
 * ImageWithCaption Component
 * Displays image with optional caption
 * Shows placeholder box if src is not provided (for development)
 */
export default function ImageWithCaption({ src, alt, caption }: ImageWithCaptionProps) {
  const [isPortrait, setIsPortrait] = useState(false);

  const handleLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    setIsPortrait(img.naturalHeight > img.naturalWidth);
  };

  return (
    <figure className={styles.figure}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`${styles.image} ${isPortrait ? styles.imagePortrait : ""}`}
          onLoad={handleLoad}
        />
      ) : (
        <div className={styles.placeholder}>
          <span className={styles.placeholderText}>{alt}</span>
        </div>
      )}
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
