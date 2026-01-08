/** Author: Liliane Schutz */

import { AboutContent } from '@/lib/types';
import Image from 'next/image';
import styles from './AboutHero.module.css';

interface AboutHeroProps {
  content: AboutContent;
}

export default function AboutHero({ content }: AboutHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={`${styles.title} heading-colorful`} data-text="Über mich">Über mich</h1>
        
        <p className={styles.bio}>
          {content.bio}
        </p>

        <div className={styles.focusAreas}>
          <h2 className={styles.focusTitle}>Meine Schwerpunkte</h2>
          <ul className={styles.focusList}>
            {content.focusAreas.map((area, index) => (
              <li key={index} className={styles.focusItem}>
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.portrait}>
        <Image 
          src="/liliane.jpg" 
          alt="Liliane Schutz"
          width={400}
          height={400}
          className={styles.portraitImage}
          priority
        />
      </div>
    </section>
  );
}
