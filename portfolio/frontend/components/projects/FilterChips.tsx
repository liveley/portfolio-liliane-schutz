/** Author: Liliane Schutz */

"use client";

import { useState } from "react";
import { Project } from "@/lib/types";
import ProjectGrid from "./ProjectGrid";
import styles from "./FilterChips.module.css";

interface FilterChipsProps {
  projects: Project[];
}

// Derive category type from Project type to avoid duplication
type ProjectCategory = Project["category"];
type CategoryFilter = "all" | ProjectCategory;

/**
 * FilterChips Component (Client Component)
 * Stateful filter for projects by category
 * Uses useState to manage selectedCategory
 * Renders ProjectGrid with filtered results
 */
export default function FilterChips({ projects }: FilterChipsProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");

  // Filter logic
  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  // Category options with German labels
  const categories: { value: CategoryFilter; label: string }[] = [
    { value: "all", label: "Alle" },
    { value: "coding", label: "Coding" },
    { value: "uiux", label: "UI/UX" },
    { value: "data", label: "Daten" },
    { value: "experiment", label: "Experimente" },
  ];

  return (
    <div className={styles.container}>
      {/* Filter Chips */}
      <div className={styles.chips} role="group" aria-label="Projekt-Filter">
        {categories.map((cat) => (
          <button
            key={cat.value}
            type="button"
            className={`${styles.chip} ${selectedCategory === cat.value ? styles.chipActive : ""}`}
            onClick={() => setSelectedCategory(cat.value)}
            aria-pressed={selectedCategory === cat.value}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Filtered Project Grid */}
      <ProjectGrid projects={filteredProjects} />
    </div>
  );
}
