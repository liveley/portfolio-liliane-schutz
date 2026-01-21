// Author: Liliane Schutz

/**
 * ContactSubmission Model
 * Mongoose Schema for Contact Form Submissions with Validation
 */

import { Schema, model, Document } from 'mongoose';

// TypeScript Interface
export interface IContactSubmission extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}

// Mongoose Schema with Validation
const contactSubmissionSchema = new Schema<IContactSubmission>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters long'],
      maxlength: [100, 'Name cannot exceed 100 characters']
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please enter a valid email address'
      ]
    },
    subject: {
      type: String,
      required: [true, 'Subject is required'],
      trim: true,
      minlength: [3, 'Subject must be at least 3 characters long'],
      maxlength: [200, 'Subject cannot exceed 200 characters']
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      minlength: [10, 'Message must be at least 10 characters long'],
      maxlength: [5000, 'Message cannot exceed 5000 characters']
    },
    createdAt: {
      type: Date,
      default: Date.now,
      immutable: true // createdAt cannot be changed
    }
  },
  {
    timestamps: false, // Only createdAt, no updatedAt
    collection: 'contactSubmissions'
  }
);

// Index for chronological sorting
contactSubmissionSchema.index({ createdAt: -1 });

export const ContactSubmission = model<IContactSubmission>(
  'ContactSubmission',
  contactSubmissionSchema
);
