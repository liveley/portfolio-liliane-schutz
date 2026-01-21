// Author: Liliane Schutz

/**
 * Database Configuration Module
 * Mongoose Connection with Fail-fast and Graceful Shutdown
 */

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfoliodb';

/**
 * Connect to MongoDB with Retry Logic and Event Handlers
 */
export async function connectDB(): Promise<void> {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✓ MongoDB connected successfully to:', MONGODB_URI);

    // Connection Event Handlers for Production Resilience
    mongoose.connection.on('error', (err) => {
      console.error('✗ MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('⚠ MongoDB disconnected. Mongoose will attempt to reconnect automatically.');
    });

    mongoose.connection.on('reconnected', () => {
      console.log('✓ MongoDB reconnected successfully');
    });

  } catch (error) {
    console.error('✗ MongoDB connection failed:', error);
    if (error instanceof Error) {
      // Provide specific error messages
      if (error.message.includes('ECONNREFUSED')) {
        console.error('  → MongoDB Server läuft nicht. Starte MongoDB mit: docker compose up -d');
      } else if (error.message.includes('Authentication failed')) {
        console.error('  → Authentifizierung fehlgeschlagen. Prüfe Username/Password in .env');
      } else if (error.message.includes('ETIMEDOUT')) {
        console.error('  → Connection Timeout. Prüfe Netzwerkverbindung und Firewall');
      }
    }
    process.exit(1); // Fail-fast: terminate app if DB is not reachable
  }
}

/**
 * Graceful Shutdown: Close MongoDB Connection
 */
export async function disconnectDB(): Promise<void> {
  try {
    await mongoose.connection.close();
    console.log('✓ MongoDB connection closed');
  } catch (error) {
    console.error('✗ Error closing MongoDB connection:', error);
  }
}

/**
 * Setup Signal Handlers for Graceful Shutdown
 */
export function setupGracefulShutdown(): void {
  const shutdown = async (signal: string) => {
    console.log(`\n${signal} received. Closing MongoDB connection...`);
    await disconnectDB();
    process.exit(0);
  };

  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGTERM', () => shutdown('SIGTERM'));
}
