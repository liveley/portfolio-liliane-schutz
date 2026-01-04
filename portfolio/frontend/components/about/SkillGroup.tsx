/** Author: Liliane Schutz */

import { Skill } from '@/lib/types';
import SkillBadge from './SkillBadge';
import styles from './SkillGroup.module.css';

interface SkillGroupProps {
  title: string;
  skills: Skill[];
}

export default function SkillGroup({ title, skills }: SkillGroupProps) {
  return (
    <div className={styles.group}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.skills}>
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}
