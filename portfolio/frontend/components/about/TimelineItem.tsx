/** Author: Liliane Schutz */

import { TimelineItem as TimelineItemType } from '@/lib/types';
import styles from './TimelineItem.module.css';

interface TimelineItemProps {
  item: TimelineItemType;
}

export default function TimelineItem({ item }: TimelineItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.period}>{item.period}</div>
      <div className={styles.content}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.description}>{item.description}</p>
      </div>
    </div>
  );
}
