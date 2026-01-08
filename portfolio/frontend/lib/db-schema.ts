/** Author: Liliane Schutz */

/**
 * Database Schema Planning
 * 
 * This file documents the planned relational database structure
 * based on Summary_09_Relationale Datenbanken.md principles.
 * 
 * Purpose: Prepare for future backend integration WITHOUT implementing actual DB.
 * All entities follow normalization principles (1NF-3NF).
 */

// ============================================================================
// ENTITIES (Tables)
// ============================================================================

/**
 * Project Entity (Main Table)
 * Primary Key: id (UUID or INTEGER AUTO_INCREMENT)
 * 
 * Normalization: All atomic fields, no nested objects
 */
export interface ProjectEntity {
  id: string;              // PK: UUID or INTEGER
  slug: string;            // UNIQUE: URL-friendly identifier
  title: string;           // NOT NULL
  year: number;            // NOT NULL
  featured: boolean;       // NOT NULL, DEFAULT false
  category: string;        // NOT NULL, FK to ProjectCategory
  status: string;          // NOT NULL, FK to ProjectStatus  
  shortDescription: string; // NOT NULL
  image: string | null;    // NULL allowed
  
  // Detail fields (nullable for projects without case study)
  detailContext: string | null;
  detailProblem: string | null;
  detailRole: string | null;
  
  // Timestamps (Best Practice für DB)
  createdAt: Date;
  updatedAt: Date;
}

/**
 * ProjectLink Entity (1:n Relation)
 * A project can have multiple links (GitHub, Demo, Figma, etc.)
 * 
 * Normalization: Separate table instead of JSON blob in Project
 */
export interface ProjectLinkEntity {
  id: string;              // PK
  projectId: string;       // FK → Project.id, ON DELETE CASCADE
  type: string;            // 'github' | 'demo' | 'figma' | 'other'
  url: string;             // NOT NULL
  label: string | null;    // Optional display label
}

/**
 * Tag Entity (Technology/Method tags)
 * Normalized: Tags stored once, not duplicated per project
 */
export interface TagEntity {
  id: string;              // PK
  name: string;            // UNIQUE, NOT NULL (e.g., "React", "TypeScript")
  slug: string;            // UNIQUE, URL-friendly
  category: string | null; // Optional: "frontend" | "backend" | "design" | "data"
}

/**
 * ProjectTag Entity (n:m Join Table)
 * Many-to-Many: Projects <-> Tags
 * 
 * Per Summary_09: n:m relations require separate join table
 */
export interface ProjectTagEntity {
  projectId: string;       // FK → Project.id, ON DELETE CASCADE
  tagId: string;           // FK → Tag.id, ON DELETE CASCADE
  // Composite PK: (projectId, tagId)
}

/**
 * ProjectGoal Entity (1:n Relation)
 * Project can have multiple goals (currently in detail.goals[])
 */
export interface ProjectGoalEntity {
  id: string;              // PK
  projectId: string;       // FK → Project.id, ON DELETE CASCADE
  goal: string;            // NOT NULL
  order: number;           // For maintaining list order
}

/**
 * ProjectProcess Entity (1:n Relation)
 * Process steps for case studies
 */
export interface ProjectProcessEntity {
  id: string;              // PK
  projectId: string;       // FK → Project.id, ON DELETE CASCADE
  title: string;           // NOT NULL
  description: string;     // NOT NULL
  order: number;           // For maintaining step order
}

/**
 * ProjectOutcome Entity (1:n Relation)
 * Results/achievements (currently in detail.outcomes[])
 */
export interface ProjectOutcomeEntity {
  id: string;              // PK
  projectId: string;       // FK → Project.id, ON DELETE CASCADE
  outcome: string;         // NOT NULL
  order: number;           // For maintaining list order
}

/**
 * Skill Entity
 * Primary Key: id
 */
export interface SkillEntity {
  id: string;              // PK
  name: string;            // UNIQUE, NOT NULL
  level: number;           // 1-5, CHECK constraint
  category: string;        // FK to SkillCategory
  slug: string;            // UNIQUE, URL-friendly
}

/**
 * SocialLink Entity
 */
export interface SocialLinkEntity {
  id: string;              // PK
  type: string;            // 'GitHub' | 'LinkedIn' | 'E-Mail'
  label: string;           // NOT NULL
  url: string;             // NOT NULL
  order: number;           // Display order
}

/**
 * AboutContent Entity (Singleton)
 * Only one row, or keyed by language for i18n
 */
export interface AboutContentEntity {
  id: string;              // PK (or language code)
  bio: string;             // NOT NULL
  updatedAt: Date;
}

/**
 * FocusArea Entity (1:n to AboutContent)
 */
export interface FocusAreaEntity {
  id: string;              // PK
  aboutContentId: string;  // FK → AboutContent.id
  area: string;            // NOT NULL
  order: number;
}

/**
 * TimelineItem Entity (1:n to AboutContent)
 */
export interface TimelineItemEntity {
  id: string;              // PK
  aboutContentId: string;  // FK → AboutContent.id
  period: string;          // NOT NULL
  title: string;           // NOT NULL
  description: string;     // NOT NULL
  order: number;           // For chronological display
}

/**
 * Language Entity (1:n to AboutContent)
 */
export interface LanguageEntity {
  id: string;              // PK
  aboutContentId: string;  // FK → AboutContent.id
  name: string;            // NOT NULL
  level: string;           // CEFR or "Native"
  order: number;
}

/**
 * SoftSkill Entity (1:n to AboutContent)
 */
export interface SoftSkillEntity {
  id: string;              // PK
  aboutContentId: string;  // FK → AboutContent.id
  name: string;            // NOT NULL
  description: string | null;
  order: number;
}

// ============================================================================
// LOOKUP TABLES (Reference Data)
// ============================================================================

/**
 * ProjectCategory Lookup
 * Ensures referential integrity (no invalid categories)
 */
export interface ProjectCategoryLookup {
  id: string;              // PK
  code: string;            // UNIQUE: "coding" | "uiux" | "data" | "experiment"
  label: string;           // Display name
}

/**
 * ProjectStatus Lookup
 */
export interface ProjectStatusLookup {
  id: string;              // PK
  code: string;            // UNIQUE: "in-progress" | "finished"
  label: string;           // Display name
}

/**
 * SkillCategory Lookup
 */
export interface SkillCategoryLookup {
  id: string;              // PK
  code: string;            // UNIQUE: "Frontend" | "Backend & APIs" etc.
  label: string;           // Display name
}

// ============================================================================
// API RESPONSE TYPES (What frontend receives)
// ============================================================================

/**
 * Project API Response
 * Assembled from multiple tables via JOINs
 * 
 * This is what getProjectBySlug() will return after DB integration
 */
export interface ProjectDTO {
  id: string;
  slug: string;
  title: string;
  year: number;
  featured: boolean;
  category: string;        // Denormalized for frontend convenience
  status: string;
  shortDescription: string;
  tags: string[];          // From ProjectTag join
  image: string | null;
  links: {                 // From ProjectLink join
    github?: string;
    demo?: string;
    figma?: string;
  };
  detail?: {               // From related tables
    context?: string;
    problem?: string;
    goals?: string[];      // From ProjectGoal
    role?: string;
    process?: {            // From ProjectProcess
      title: string;
      description: string;
    }[];
    outcomes?: string[];   // From ProjectOutcome
  };
}

// ============================================================================
// MIGRATION NOTES
// ============================================================================

/**
 * Migration Strategy (Later Implementation)
 * 
 * 1. Create tables with proper constraints:
 *    - PRIMARY KEY on id
 *    - FOREIGN KEY with ON DELETE CASCADE
 *    - UNIQUE constraints on slug fields
 *    - CHECK constraints on level (1-5)
 *    - NOT NULL on required fields
 * 
 * 2. Seed data from current lib/data/*.ts files
 * 
 * 3. Update data layer functions to query DB:
 *    - getProjectBySlug() → SELECT with JOINs
 *    - getFeaturedProjects() → WHERE featured = true
 *    - getAllProjects() → SELECT all with LEFT JOINs
 * 
 * 4. Frontend components remain UNCHANGED
 *    (they only call data layer functions)
 */

/**
 * Example SQL Schema (PostgreSQL/SQLite)
 * 
 * CREATE TABLE project (
 *   id TEXT PRIMARY KEY,
 *   slug TEXT UNIQUE NOT NULL,
 *   title TEXT NOT NULL,
 *   year INTEGER NOT NULL,
 *   featured BOOLEAN DEFAULT false,
 *   category TEXT NOT NULL,
 *   status TEXT NOT NULL,
 *   short_description TEXT NOT NULL,
 *   image TEXT,
 *   detail_context TEXT,
 *   detail_problem TEXT,
 *   detail_role TEXT,
 *   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 *   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 * );
 * 
 * CREATE TABLE tag (
 *   id TEXT PRIMARY KEY,
 *   name TEXT UNIQUE NOT NULL,
 *   slug TEXT UNIQUE NOT NULL,
 *   category TEXT
 * );
 * 
 * CREATE TABLE project_tag (
 *   project_id TEXT NOT NULL REFERENCES project(id) ON DELETE CASCADE,
 *   tag_id TEXT NOT NULL REFERENCES tag(id) ON DELETE CASCADE,
 *   PRIMARY KEY (project_id, tag_id)
 * );
 * 
 * CREATE TABLE project_link (
 *   id TEXT PRIMARY KEY,
 *   project_id TEXT NOT NULL REFERENCES project(id) ON DELETE CASCADE,
 *   type TEXT NOT NULL,
 *   url TEXT NOT NULL,
 *   label TEXT
 * );
 * 
 * ... (similar for other entities)
 */
