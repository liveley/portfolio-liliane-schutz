// Author: Liliane Schutz

/**
 * Database Seed Script
 * Initializes portfoliodb with project data from JSON file
 * 
 * Usage: npm run seed
 * Edit data: backend/src/data/projects-data.json
 */

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { readFileSync } from 'fs';
import { join } from 'path';
import { Project } from '../models/Project';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfoliodb';

// Load project data from JSON file
const dataPath = join(__dirname, '../data/projects-data.json');
let seedProjects: any[];

try {
  const jsonData = readFileSync(dataPath, 'utf-8');
  seedProjects = JSON.parse(jsonData);
  console.log(`✓ Loaded: ${seedProjects.length} projects from projects-data.json`);
} catch (error) {
  console.error('✗ Error loading JSON file:', error);
  process.exit(1);
}

async function seedDatabase() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✓ Connected');

    // Delete existing projects (for clean re-seed)
    console.log('\nDeleting existing projects...');
    await Project.deleteMany({});
    console.log('✓ Old data deleted');

    // Insert seed data
    console.log('\nInserting seed data...');
    const insertedProjects = await Project.insertMany(seedProjects);
    console.log(`✓ ${insertedProjects.length} projects inserted`);

    // Show summary
    console.log('\n=== Seed Summary ===');
    for (const project of insertedProjects) {
      console.log(`  • ${project.title} (${project.slug})`);
    }

    console.log('\n✓ Seed completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('✗ Seed failed:', error);
    process.exit(1);
  }
}

seedDatabase();
