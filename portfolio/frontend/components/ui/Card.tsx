/**
 * Author: Liliane Schutz
 * Reusable Card Component – Light card on dark background
 */
import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Card({ children, hover = false, className = '', onClick }: CardProps) {
  const classNames = [
    styles.card,
    hover ? styles.cardHover : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames} onClick={onClick}>
      {children}
    </div>
  );
}
