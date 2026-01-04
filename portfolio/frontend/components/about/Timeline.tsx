/** Author: Liliane Schutz */

import { TimelineItem as TimelineItemType } from '@/lib/types';
import TimelineItem from './TimelineItem';
import styles from './Timeline.module.css';

interface TimelineProps {
  items: TimelineItemType[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className={styles.timeline}>
      {items.map((item, index) => (
        <TimelineItem key={index} item={item} />
      ))}
    </div>
  );
}
