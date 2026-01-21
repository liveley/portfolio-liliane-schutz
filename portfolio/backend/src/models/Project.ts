// Author: Liliane Schutz

/**
 * Project Model
 * Mongoose Schema for Portfolio Projects with Validation
 */

import { Schema, model, Document } from 'mongoose';

// TypeScript Interface for Type Safety
export interface IProject extends Document {
  slug: string;
  title: string;
  year: number;
  category: 'coding' | 'uiux' | 'data' | 'experiment';
  featured: boolean;
  status: 'in-progress' | 'finished';
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
  createdAt: Date;
  updatedAt: Date;
}

// Mongoose Schema with Validation
const projectSchema = new Schema<IProject>(
  {
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^[a-z0-9-]+$/, 'Slug may only contain lowercase letters, numbers and hyphens']
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      minlength: [3, 'Title must be at least 3 characters long']
    },
    year: {
      type: Number,
      required: [true, 'Year is required'],
      min: [2000, 'Year must be at least 2000'],
      max: [new Date().getFullYear() + 1, 'Year cannot be in distant future']
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: {
        values: ['coding', 'uiux', 'data', 'experiment'],
        message: 'Category must be coding, uiux, data or experiment'
      }
    },
    featured: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      required: [true, 'Status is required'],
      enum: {
        values: ['in-progress', 'finished'],
        message: 'Status must be in-progress or finished'
      }
    },
    shortDescription: {
      type: String,
      required: [true, 'Short description is required'],
      trim: true,
      minlength: [10, 'Short description must be at least 10 characters long']
    },
    tags: {
      type: [String],
      default: []
    },
    role: {
      type: String,
      required: [true, 'Role is required'],
      trim: true
    },
    techStack: {
      type: [String],
      default: []
    },
    coverImage: {
      type: String,
      trim: true
    },
    links: {
      github: { type: String, trim: true },
      demo: { type: String, trim: true },
      figma: { type: String, trim: true },
      note: { type: String, trim: true }
    },
    detail: {
      context: { type: String, trim: true },
      problem: { type: String, trim: true },
      goals: [{ type: String }],
      role: { type: String, trim: true },
      process: [{
        title: { type: String, required: true },
        description: { type: String, required: true }
      }],
      challenges: [{ type: String }],
      results: [{ type: String }],
      learnings: [{ type: String }],
      images: [{ type: String }]
    }
  },
  {
    timestamps: true, // Automatic createdAt & updatedAt
    collection: 'projects',
    optimisticConcurrency: true // Enable versioning for concurrent updates
  }
);

// Indexes removed - `unique: true` in schema automatically creates index
// projectSchema.index({ slug: 1 }); // Duplicate removed
// projectSchema.index({ category: 1, featured: 1 }); // Optional for Queries

export const Project = model<IProject>('Project', projectSchema);
