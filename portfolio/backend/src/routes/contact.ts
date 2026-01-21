// Author: Liliane Schutz

/**
 * Contact Routes
 * REST API Endpoint for Contact Form
 */

import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { ContactSubmission } from '../models/ContactSubmission';
import { asyncHandler, AppError } from '../middleware/errorHandler';

const router = Router();

/**
 * POST /api/contact
 * Save contact form submission
 * Body: { name, email, subject, message }
 */
router.post(
  '/',
  // Request Validation with express-validator
  [
    body('name')
      .trim()
      .notEmpty()
      .withMessage('Name is required')
      .isLength({ min: 2 })
      .withMessage('Name must be at least 2 characters long'),
    body('email')
      .trim()
      .notEmpty()
      .withMessage('Email is required')
      .isEmail()
      .withMessage('Please enter a valid email address')
      .normalizeEmail(),
    body('subject')
      .trim()
      .notEmpty()
      .withMessage('Subject is required')
      .isLength({ min: 3 })
      .withMessage('Subject must be at least 3 characters long'),
    body('message')
      .trim()
      .notEmpty()
      .withMessage('Message is required')
      .isLength({ min: 10 })
      .withMessage('Message must be at least 10 characters long')
  ],
  asyncHandler(async (req, res) => {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new AppError('Validation error', 400);
    }

    const { name, email, subject, message } = req.body;

    // Save ContactSubmission to DB
    const submission = await ContactSubmission.create({
      name,
      email,
      subject,
      message
    });

    res.status(201).json({
      success: true,
      message: 'Contact request successfully saved',
      data: {
        id: submission._id,
        createdAt: submission.createdAt
      }
    });
  })
);

export default router;
