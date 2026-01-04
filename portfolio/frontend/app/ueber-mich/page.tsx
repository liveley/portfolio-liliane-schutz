/** Author: Liliane Schutz */

import { aboutContent } from '@/lib/data/about';
import { getSkillsGrouped } from '@/lib/data/skills';
import AboutHero from '@/components/about/AboutHero';
import Timeline from '@/components/about/Timeline';
import SkillGroup from '@/components/about/SkillGroup';
import styles from './page.module.css';

export default function UeberMichPage() {
  const skillGroups = getSkillsGrouped();

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <AboutHero content={aboutContent} />

      {/* Timeline Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Werdegang</h2>
        <Timeline items={aboutContent.timeline} />
      </section>

      {/* Skills Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills & Tools</h2>
        <p className={styles.legend}>
          Bewertungsskala: 1 = Grundkenntnisse, 5 = Expertin
        </p>
        <div className={styles.skillsGrid}>
          {skillGroups.map((group, index) => (
            <SkillGroup
              key={index}
              title={group.category}
              skills={group.skills}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
