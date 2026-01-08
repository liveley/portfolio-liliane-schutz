/** Author: Liliane Schutz */

import { Language } from '@/lib/types';
import styles from './Languages.module.css';

interface LanguagesProps {
  languages: Language[];
}

/**
 * Languages Component
 * Displays language proficiency with CEFR levels
 */
export default function Languages({ languages }: LanguagesProps) {
  return (
    <div className={styles.languages}>
      {languages.map((language, index) => (
        <div key={index} className={styles.language}>
          <span className={styles.name}>{language.name}</span>
          <span className={styles.level}>{language.level}</span>
        </div>
      ))}
    </div>
  );
}
