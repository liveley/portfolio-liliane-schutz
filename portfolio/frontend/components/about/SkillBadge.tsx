/** Author: Liliane Schutz */

import { Skill } from '@/lib/types';
import styles from './SkillBadge.module.css';

interface SkillBadgeProps {
  skill: Skill;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className={styles.badge}>
      <div className={styles.info}>
        <span className={styles.name}>{skill.name}</span>
      </div>
      <div className={styles.level}>
        {[1, 2, 3, 4, 5].map((dot) => (
          <span
            key={dot}
            className={`${styles.dot} ${dot <= skill.level ? styles.filled : ''}`}
            aria-label={`Level ${dot}`}
          />
        ))}
      </div>
    </div>
  );
}
