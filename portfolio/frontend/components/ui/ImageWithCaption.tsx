/** Author: Liliane Schutz */

import styles from "./ImageWithCaption.module.css";

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
  return (
    <figure className={styles.figure}>
      {src ? (
        <img src={src} alt={alt} className={styles.image} />
      ) : (
        <div className={styles.placeholder}>
          <span className={styles.placeholderText}>{alt}</span>
        </div>
      )}
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
