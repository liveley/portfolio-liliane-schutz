/** Author: Liliane Schutz */

import { Skill, SkillCategory } from "../types";

/**
 * Mock Skill Data (Placeholder)
 * 
 * WICHTIG: Dies sind Placeholder-Daten für die Entwicklung.
 * Skills werden gruppiert nach Kategorie dargestellt.
 * 
 * Requirements:
 * - Level 1-5 Rating (wie in Anforderungen)
 * - Kategorien: Frontend, Backend & APIs, Daten & Viz, Design & Tools
 */

export const skills: Skill[] = [
  // Frontend Skills
  { name: "React", level: 3, category: "Frontend" },
  { name: "Next.js", level: 3, category: "Frontend" },
  { name: "TypeScript", level: 3, category: "Frontend" },
  { name: "HTML & CSS", level: 4, category: "Frontend" },
  { name: "JavaScript", level: 3, category: "Frontend" },
  { name: "three.js", level: 3, category: "Frontend" },
  
  // Backend & APIs
  { name: "Node.js", level: 3, category: "Backend & APIs" },
  { name: "Express", level: 3, category: "Backend & APIs" },
  { name: "REST APIs", level: 3, category: "Backend & APIs" },
  { name: "n8n", level: 5, category: "Backend & APIs" },
  { name: "Docker", level: 5, category: "Backend & APIs" },
  
  // Daten & Viz
  { name: "D3.js", level: 4, category: "Daten & Viz" },
  { name: "Python", level: 3, category: "Daten & Viz" },
  { name: "Data Analysis", level: 5, category: "Daten & Viz" },
  { name: "Visualization", level: 4, category: "Daten & Viz" },
  
  // Design & Tools
  { name: "Figma", level: 4, category: "Design & Tools" },
  { name: "UI/UX Design", level: 3, category: "Design & Tools" },
  { name: "Prototyping", level: 4, category: "Design & Tools" },
  { name: "Git", level: 5, category: "Design & Tools" }
];

/**
 * Skill Groups Interface
 * Structure for grouped display on About page
 */
export interface SkillGroup {
  category: SkillCategory;
  skills: Skill[];
}

/**
 * Helper function to get skills grouped by category
 * Returns array of skill groups for structured display
 */
export function getSkillsGrouped(): SkillGroup[] {
  const categories: SkillCategory[] = [
    "Frontend",
    "Backend & APIs",
    "Daten & Viz",
    "Design & Tools"
  ];
  
  return categories.map(category => ({
    category,
    skills: skills.filter(skill => skill.category === category)
  }));
}

/**
 * Helper function to get all skills (ungrouped)
 */
export function getAllSkills(): Skill[] {
  return skills;
}
