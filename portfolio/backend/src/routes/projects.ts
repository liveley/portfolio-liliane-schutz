// Author: Liliane Schutz

/**
 * Projects Routes
 * REST API Endpoints for Projects
 */

import { Router } from 'express';
import { Project } from '../models/Project';
import { asyncHandler, AppError } from '../middleware/errorHandler';

const router = Router();

/**
 * GET /api/projects
 * Fetch all projects, optionally filtered
 * Query Params:
 *   - featured: boolean (only featured projects)
 *   - category: string (only projects of this category)
 */
router.get(
  '/',
  asyncHandler(async (req, res) => {
    // Filter from Query Params
    const filter: Record<string, unknown> = {};

    if (req.query.featured === 'true') {
      filter.featured = true;
    }

    if (req.query.category) {
      filter.category = req.query.category;
    }

    // Fetch projects, sorted by year (newest first)
    const projects = await Project.find(filter)
      .sort({ year: -1, createdAt: -1 })
      .select('-__v'); // Hide __v (version key)

    // Map _id to id for frontend compatibility
    const projectsWithId = projects.map(project => {
      const obj = project.toObject();
      return {
        ...obj,
        id: obj._id.toString()
      };
    });

    res.status(200).json({
      success: true,
      count: projectsWithId.length,
      data: projectsWithId
    });
  })
);

/**
 * GET /api/projects/:slug
 * Fetch individual project by slug
 */
router.get(
  '/:slug',
  asyncHandler(async (req, res) => {
    const { slug } = req.params;

    const project = await Project.findOne({ slug }).select('-__v');

    if (!project) {
      throw new AppError(`Project with slug "${slug}" not found`, 404);
    }

    // Map _id to id for frontend compatibility
    const obj = project.toObject();
    const projectWithId = {
      ...obj,
      id: obj._id.toString()
    };

    res.status(200).json({
      success: true,
      data: projectWithId
    });
  })
);

export default router;
