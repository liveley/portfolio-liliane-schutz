// Author: Liliane Schutz

/**
 * Express App Configuration
 * Middleware, Routes und Error Handling Setup
 */

import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import projectsRouter from './routes/projects';
import contactRouter from './routes/contact';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';

dotenv.config();

export function createApp(): Application {
  const app = express();

  // ============================================================================
  // MIDDLEWARE
  // ============================================================================

  // CORS Configuration
  const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:3000';
  app.use(
    cors({
      origin: corsOrigin,
      credentials: true
    })
  );

  // Body Parser
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Request Logging (Development)
  if (process.env.NODE_ENV === 'development') {
    app.use((req, _res, next) => {
      console.log(`${req.method} ${req.path}`);
      next();
    });
  }

  // ============================================================================
  // ROUTES
  // ============================================================================

  // Health Check
  app.get('/health', (_req, res) => {
    res.status(200).json({
      success: true,
      message: 'Portfolio Backend ist online',
      timestamp: new Date().toISOString()
    });
  });

  // API Routes
  app.use('/api/projects', projectsRouter);
  app.use('/api/contact', contactRouter);

  // ============================================================================
  // ERROR HANDLING
  // ============================================================================

  // 404 Handler (muss vor errorHandler kommen)
  app.use(notFoundHandler);

  // Global Error Handler (muss als letzte Middleware registriert werden)
  app.use(errorHandler);

  return app;
}
