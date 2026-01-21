-- Migration 0001: Initial Schema
-- Portfolio Database für Cloudflare D1
-- Author: Liliane Schutz
-- Date: 2026-01-21

-- ============================================================================
-- PROJECTS TABLE
-- ============================================================================
CREATE TABLE projects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  year INTEGER NOT NULL,
  category TEXT NOT NULL CHECK(category IN ('coding', 'uiux', 'data', 'experiment')),
  featured INTEGER NOT NULL DEFAULT 0 CHECK(featured IN (0, 1)),
  status TEXT NOT NULL CHECK(status IN ('in-progress', 'finished')),
  short_description TEXT NOT NULL,
  role TEXT NOT NULL,
  cover_image TEXT,
  
  -- JSON columns for arrays
  tags TEXT, -- JSON array of strings
  tech_stack TEXT, -- JSON array of strings
  
  -- Detail page content (JSON)
  detail_context TEXT,
  detail_problem TEXT,
  detail_goals TEXT, -- JSON array
  detail_role TEXT,
  detail_challenges TEXT, -- JSON array
  detail_results TEXT, -- JSON array
  detail_learnings TEXT, -- JSON array
  detail_images TEXT, -- JSON array
  
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  
  -- Constraints
  CHECK(length(title) >= 3),
  CHECK(length(short_description) >= 10),
  CHECK(year >= 2000 AND year <= 2030),
  CHECK(slug GLOB '[a-z0-9-]*')
);

-- Indexes for common queries
CREATE INDEX idx_projects_slug ON projects(slug);
CREATE INDEX idx_projects_featured ON projects(featured, year DESC);
CREATE INDEX idx_projects_category ON projects(category, year DESC);

-- ============================================================================
-- PROJECT LINKS TABLE
-- ============================================================================
CREATE TABLE project_links (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  project_id INTEGER NOT NULL,
  type TEXT NOT NULL CHECK(type IN ('github', 'demo', 'figma', 'note')),
  url TEXT NOT NULL,
  
  FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);

CREATE INDEX idx_project_links_project_id ON project_links(project_id);

-- ============================================================================
-- PROJECT PROCESS STEPS TABLE
-- ============================================================================
CREATE TABLE project_process_steps (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  project_id INTEGER NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  
  FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);

CREATE INDEX idx_project_process_project_id ON project_process_steps(project_id, sort_order);

-- ============================================================================
-- CONTACT SUBMISSIONS TABLE
-- ============================================================================
CREATE TABLE contact_submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  
  -- Validation constraints
  CHECK(length(name) >= 2 AND length(name) <= 100),
  CHECK(length(subject) >= 3 AND length(subject) <= 200),
  CHECK(length(message) >= 10 AND length(message) <= 5000),
  CHECK(email LIKE '%_@__%.__%')
);

CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
