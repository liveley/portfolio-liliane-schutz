// Author: Liliane Schutz

/**
 * Error Handler Middleware
 * Centralized Error Handling for Express following Best Practices
 */

import { Request, Response, NextFunction } from 'express';

// Custom Error Class
export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

// Error Response Interface
interface ErrorResponse {
  success: false;
  error: {
    code: number;
    message: string;
    details?: unknown;
  };
}

/**
 * Global Error Handler Middleware
 * Must be registered as last middleware
 */
export function errorHandler(
  err: Error | AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  // Default Status Code
  let statusCode = 500;
  let message = 'Internal Server Error';
  let details: unknown = undefined;

  // AppError (operational errors)
  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  }
  // Mongoose Validation Error
  else if (err.name === 'ValidationError') {
    statusCode = 400;
    message = 'Validation error';
    details = err.message;
  }
  // Mongoose CastError (invalid ID)
  else if (err.name === 'CastError') {
    statusCode = 400;
    message = 'Invalid ID';
  }
  // Mongoose Duplicate Key Error
  else if (err.name === 'MongoServerError' && 'code' in err && err.code === 11000) {
    statusCode = 409;
    message = 'Resource already exists';
    details = err.message;
  }
  // Mongoose VersionError (Optimistic Concurrency Conflict)
  else if (err.name === 'VersionError') {
    statusCode = 409;
    message = 'Data was changed in the meantime. Please reload and try again.';
  }
  // MongoDB Connection Errors
  else if (err.name === 'MongoNetworkError' || err.name === 'MongoTimeoutError') {
    statusCode = 503;
    message = 'Database connection interrupted. Please try again later.';
  }
  // Development: Log Stack Trace
  else if (process.env.NODE_ENV === 'development') {
    console.error('Unhandled Error:', err);
    message = err.message;
    details = err.stack;
  }

  const response: ErrorResponse = {
    success: false,
    error: {
      code: statusCode,
      message,
      ...(details ? { details } : {})
    }
  };

  res.status(statusCode).json(response);
}

/**
 * 404 Handler for unknown routes
 */
export function notFoundHandler(req: Request, res: Response): void {
  res.status(404).json({
    success: false,
    error: {
      code: 404,
      message: `Route ${req.method} ${req.path} not found`
    }
  });
}

/**
 * Async Error Wrapper
 * Wraps async route handlers and forwards errors to errorHandler
 */
export function asyncHandler(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<void>
) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}
