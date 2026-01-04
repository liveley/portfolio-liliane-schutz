/** Author: Liliane Schutz */

import styles from "./ProcessStep.module.css";

interface ProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
}

/**
 * ProcessStep Component
 * Displays a step in the project process
 * Used in ProjectDetail to show workflow/methodology
 */
export default function ProcessStep({ stepNumber, title, description }: ProcessStepProps) {
  return (
    <div className={styles.step}>
      <div className={styles.stepNumber}>{stepNumber}</div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
