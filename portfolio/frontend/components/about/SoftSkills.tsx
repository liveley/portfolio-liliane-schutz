/** Author: Liliane Schutz */

import { SoftSkill } from '@/lib/types';
import styles from './SoftSkills.module.css';

interface SoftSkillsProps {
  skills: SoftSkill[];
}

/**
 * SoftSkills Component
 * Displays soft skills with optional descriptions
 */
export default function SoftSkills({ skills }: SoftSkillsProps) {
  return (
    <div className={styles.skills}>
      {skills.map((skill, index) => (
        <div key={index} className={styles.skill}>
          <h3 className={styles.name}>{skill.name}</h3>
          {skill.description && (
            <p className={styles.description}>{skill.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}
