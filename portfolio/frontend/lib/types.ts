/** Author: Liliane Schutz */

/**
 * Type definitions for Portfolio Website
 * Based on Konzeption_Portfolio_Liliane_Schutz.md
 */

// Project Categories (matching filter categories from Konzeption)
export type ProjectCategory = "coding" | "uiux" | "data" | "experiment";

// Skill Categories (matching About page structure)
export type SkillCategory = 
  | "Frontend" 
  | "Backend & APIs" 
  | "Daten & Viz" 
  | "Design & Tools";

// Skill Level (1-5 rating as per requirements)
export type SkillLevel = 1 | 2 | 3 | 4 | 5;

// Social Link Types
export type SocialType = "GitHub" | "LinkedIn" | "E-Mail";

/**
 * Project Interface
 * Represents a portfolio project with all necessary fields for:
 * - Overview page (title, shortDescription, tags, featured)
 * - Detail page (slug for routing, links for demo/github)
 * - Filtering (category)
 */
export interface Project {
  id: string;
  slug: string; // URL-friendly identifier for dynamic routes
  title: string;
  year: number;
  featured: boolean; // true for Featured Projects on Home page
  category: ProjectCategory;
  shortDescription: string; // 1-2 sentences for card
  tags: string[]; // Technology/methodology tags (e.g., "React", "Figma")
  image?: string; // Thumbnail image path (optional, placeholder for now)
  links?: {
    github?: string;
    demo?: string;
  };
}

/**
 * Skill Interface
 * Represents a skill with 1-5 rating for About page
 */
export interface Skill {
  name: string;
  level: SkillLevel;
  category: SkillCategory;
}

/**
 * Social Link Interface
 * Used in Footer (all pages) and Contact page
 */
export interface SocialLink {
  type: SocialType;
  label: string; // Display text (e.g., "GitHub", "LinkedIn")
  url: string; // Full URL or mailto: link
}

/**
 * Contact Form Data Interface
 * State shape for contact form (Step 8)
 */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Timeline Item Interface
 * For About page timeline/Werdegang section
 */
export interface TimelineItem {
  period: string; // e.g., "2023 – heute"
  title: string; // e.g., "Studium Informatik & Design"
  description: string;
}

/**
 * About Content Interface
 * All content for About page (/ueber-mich)
 */
export interface AboutContent {
  bio: string; // Introduction paragraph (2-3 sentences)
  focusAreas: string[]; // Bullet points for "Meine Focus Areas"
  timeline: TimelineItem[]; // Education/career timeline
}
