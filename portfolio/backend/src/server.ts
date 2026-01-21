// Author: Liliane Schutz

/**
 * Server Entry Point
 * Starts Express Server with MongoDB Connection
 */

import { createApp } from './app';
import { connectDB, setupGracefulShutdown } from './config/database';

const PORT = process.env.PORT || 4000;

async function startServer() {
  try {
    // MongoDB Connection
    await connectDB();

    // Create Express App
    const app = createApp();

    // Start server with error handling
    const server = app.listen(PORT, () => {
      console.log(`✓ Server läuft auf Port ${PORT}`);
      console.log(`✓ Umgebung: ${process.env.NODE_ENV || 'development'}`);
      console.log(`✓ CORS Origin: ${process.env.CORS_ORIGIN || 'http://localhost:3000'}`);
    });

    // Handle port already in use
    server.on('error', (error: NodeJS.ErrnoException) => {
      if (error.code === 'EADDRINUSE') {
        console.error(`\n✗ Port ${PORT} ist bereits belegt!`);
        console.error(`\n  Lösungsvorschläge:`);
        console.error(`  1. Stoppe den laufenden Prozess auf Port ${PORT}:`);
        console.error(`     Windows: Get-NetTCPConnection -LocalPort ${PORT} | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }`);
        console.error(`     macOS/Linux: lsof -ti:${PORT} | xargs kill -9`);
        console.error(`  2. Ändere den Port in der .env Datei (PORT=XXXX)`);
        console.error(`  3. Warte 10 Sekunden und versuche es erneut\n`);
        process.exit(1);
      } else {
        console.error('✗ Server Start fehlgeschlagen:', error);
        process.exit(1);
      }
    });

    // Graceful Shutdown Setup
    setupGracefulShutdown();

    // Server Shutdown bei Process Exit
    process.on('SIGINT', () => {
      server.close(() => {
        console.log('✓ HTTP Server geschlossen');
      });
    });
  } catch (error) {
    console.error('✗ Server Start fehlgeschlagen:', error);
    process.exit(1);
  }
}

startServer();
