/**
 * D1 Seed Script
 * Migrates project data from projects-data.json to D1 database
 * Author: Liliane Schutz
 * 
 * Usage: npm run seed-d1
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// This script is designed to be run with wrangler:
// wrangler d1 execute portfoliodb --local --file=./portfolio/scripts/seed-d1-output.sql

interface MongoProject {
  slug: string;
  title: string;
  year: number;
  category: string;
  featured: boolean;
  status: string;
  shortDescription: string;
  tags: string[];
  role: string;
  techStack: string[];
  coverImage?: string;
  links?: {
    github?: string;
    demo?: string;
    figma?: string;
    note?: string;
  };
  detail?: {
    context?: string;
    problem?: string;
    goals?: string[];
    role?: string;
    process?: Array<{
      title: string;
      description: string;
    }>;
    challenges?: string[];
    results?: string[];
    learnings?: string[];
    images?: string[];
  };
}

// Load projects from JSON
const projectsPath = join(__dirname, '../backend/src/data/projects-data.json');
const projectsData: MongoProject[] = JSON.parse(readFileSync(projectsPath, 'utf-8'));

// SQL Escape Helper
function escapeSql(str: string): string {
  return str.replace(/'/g, "''");
}

// Generate SQL INSERT statements
function generateSeedSql(): string {
  const statements: string[] = [];
  
  // Clear existing data
  statements.push('-- Clear existing data');
  statements.push('DELETE FROM project_process_steps;');
  statements.push('DELETE FROM project_links;');
  statements.push('DELETE FROM projects;');
  statements.push('');
  
  // Insert projects
  statements.push('-- Insert projects');
  projectsData.forEach((project, index) => {
    const projectId = index + 1;
    
    // Main project INSERT
    statements.push(`INSERT INTO projects (
      id, slug, title, year, category, featured, status, 
      short_description, role, cover_image,
      tags, tech_stack,
      detail_context, detail_problem, detail_goals, detail_role,
      detail_challenges, detail_results, detail_learnings, detail_images
    ) VALUES (
      ${projectId},
      '${escapeSql(project.slug)}',
      '${escapeSql(project.title)}',
      ${project.year},
      '${project.category}',
      ${project.featured ? 1 : 0},
      '${project.status}',
      '${escapeSql(project.shortDescription)}',
      '${escapeSql(project.role)}',
      ${project.coverImage ? `'${escapeSql(project.coverImage)}'` : 'NULL'},
      '${JSON.stringify(project.tags).replace(/'/g, "''")}',
      '${JSON.stringify(project.techStack).replace(/'/g, "''")}',
      ${project.detail?.context ? `'${escapeSql(project.detail.context)}'` : 'NULL'},
      ${project.detail?.problem ? `'${escapeSql(project.detail.problem)}'` : 'NULL'},
      ${project.detail?.goals ? `'${JSON.stringify(project.detail.goals).replace(/'/g, "''")}'` : 'NULL'},
      ${project.detail?.role ? `'${escapeSql(project.detail.role)}'` : 'NULL'},
      ${project.detail?.challenges ? `'${JSON.stringify(project.detail.challenges).replace(/'/g, "''")}'` : 'NULL'},
      ${project.detail?.results ? `'${JSON.stringify(project.detail.results).replace(/'/g, "''")}'` : 'NULL'},
      ${project.detail?.learnings ? `'${JSON.stringify(project.detail.learnings).replace(/'/g, "''")}'` : 'NULL'},
      ${project.detail?.images ? `'${JSON.stringify(project.detail.images).replace(/'/g, "''")}'` : 'NULL'}
    );`);
    statements.push('');
    
    // Insert links
    if (project.links) {
      Object.entries(project.links).forEach(([type, url]) => {
        statements.push(`INSERT INTO project_links (project_id, type, url) VALUES (${projectId}, '${type}', '${escapeSql(url)}');`);
      });
    }
    
    // Insert process steps
    if (project.detail?.process) {
      project.detail.process.forEach((step, stepIndex) => {
        statements.push(`INSERT INTO project_process_steps (project_id, sort_order, title, description) VALUES (${projectId}, ${stepIndex}, '${escapeSql(step.title)}', '${escapeSql(step.description)}');`);
      });
    }
    
    statements.push('');
  });
  
  return statements.join('\n');
}

// Generate and write SQL file with UTF-8 BOM
const sqlContent = [
  '-- ============================================================================',
  '-- D1 Seed Data',
  '-- Generated from projects-data.json',
  `-- Date: ${new Date().toISOString()}`,
  `-- Projects: ${projectsData.length}`,
  '-- ============================================================================',
  '',
  generateSeedSql()
].join('\n');

// Write with UTF-8 BOM to ensure proper encoding
const outputPath = join(__dirname, 'seed-d1-output.sql');
const bom = '\uFEFF'; // UTF-8 BOM
writeFileSync(outputPath, bom + sqlContent, { encoding: 'utf8' });

console.log(`✓ Generated seed SQL for ${projectsData.length} projects`);
console.log(`✓ Written to: ${outputPath}`);
console.log(`✓ To apply locally: wrangler d1 execute portfoliodb --local --file=./scripts/seed-d1-output.sql`);
console.log(`✓ To apply to prod: wrangler d1 execute portfoliodb --remote --file=./scripts/seed-d1-output.sql`);
