/** Author: Liliane Schutz */

import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

/**
 * Button Component (Reusable)
 * Can render as <button> or <Link> depending on href prop
 * Used for CTAs, navigation, form submissions
 */
export default function Button({
  children,
  href,
  variant = "secondary",
  onClick,
  type = "button",
}: ButtonProps) {
  const className = `${styles.button} ${variant === "primary" ? styles.primary : styles.secondary}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
