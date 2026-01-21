/** Author: Liliane Schutz */

import { aboutContent } from '@/lib/data/about';
import { getSkillsGrouped } from '@/lib/data/skills';
import PageShell from '@/components/layout/PageShell';
import AboutHero from '@/components/about/AboutHero';
import Timeline from '@/components/about/Timeline';
import SkillGroup from '@/components/about/SkillGroup';
import Languages from '@/components/about/Languages';
import SoftSkills from '@/components/about/SoftSkills';
import AuroraHeading from '@/components/ui/AuroraHeading';
import styles from './page.module.css';

export default function UeberMichPage() {
  const skillGroups = getSkillsGrouped();

  return (
    <PageShell>
      {/* Hero Section */}
      <AboutHero content={aboutContent} />

      {/* Timeline Section */}
      <section className={styles.section}>
        <AuroraHeading as="h2" className={styles.sectionTitle}>Werdegang</AuroraHeading>
        <Timeline items={aboutContent.timeline} />
      </section>

      {/* Skills Section */}
      <section className={styles.section}>
        <AuroraHeading as="h2" className={styles.sectionTitle}>Skills & Tools</AuroraHeading>
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

      {/* Languages Section */}
      {aboutContent.languages && aboutContent.languages.length > 0 && (
        <section className={styles.section}>
          <AuroraHeading as="h2" className={styles.sectionTitle}>Sprachen</AuroraHeading>
          <Languages languages={aboutContent.languages} />
        </section>
      )}

      {/* Soft Skills Section */}
      {aboutContent.softSkills && aboutContent.softSkills.length > 0 && (
        <section className={styles.section}>
          <AuroraHeading as="h2" className={styles.sectionTitle}>Soft Skills</AuroraHeading>
          <SoftSkills skills={aboutContent.softSkills} />
        </section>
      )}
    </PageShell>
  );
}
