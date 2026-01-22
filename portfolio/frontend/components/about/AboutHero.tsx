/** Author: Liliane Schutz */

import { AboutContent } from '@/lib/types';
import Image from 'next/image';
import AuroraHeading from '@/components/ui/AuroraHeading';
import styles from './AboutHero.module.css';

interface AboutHeroProps {
  content: AboutContent;
}

export default function AboutHero({ content }: AboutHeroProps) {
  return (
    <section className={styles.hero}>
      {/* Mobile Title Wrapper to allow ordering */}
      <div className={styles.mobileTitleWrapper}>
        <AuroraHeading as="h1" size="large" className={styles.title}>Über mich</AuroraHeading>
      </div>

      <div className={styles.mobileSplitContent}>
        <div className={styles.textContent}>
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
      </div>
    </section>
  );
}
