# Portfolio Backend – Praktikum 07

**Autorin:** Liliane Schutz

Express + TypeScript Backend mit MongoDB für Portfolio-Website.

## Features

- ✅ REST API für Projekte (GET /api/projects, GET /api/projects/:slug)
- ✅ Kontaktformular-Endpoint (POST /api/contact)
- ✅ MongoDB mit Mongoose ODM
- ✅ Authentication (Username/Password)
- ✅ Validierung mit express-validator & Mongoose Schemas
- ✅ Zentrale Error-Handling Middleware
- ✅ CORS für Frontend
- ✅ Seed-Script für initiale Daten
- ✅ Graceful Shutdown & Connection Resilience
- ✅ TypeScript

## Tech Stack

- **Runtime:** Node.js 18+
- **Framework:** Express 4.x
- **Database:** MongoDB 7.0 Standalone (Docker)
- **ODM:** Mongoose 8.x
- **Language:** TypeScript
- **Validation:** express-validator, Mongoose Schemas

## Setup

### 1. MongoDB starten (Docker Compose)

```bash
# Im portfolio/ Verzeichnis
docker compose up -d

# Container prüfen
docker ps | grep mongodb
```

MongoDB läuft auf Port 27017 mit Authentication:
- **Root User:** admin / portfolio2026
- **App User:** portfolio_app / portfolio_app_2026

### 2. Dependencies installieren

```bash
cd backend
npm install
```

### 3. Environment Variables

Die `.env` Datei ist bereits konfiguriert:

```env
PORT=4000
MONGODB_URI=mongodb://portfolio_app:portfolio_app_2026@localhost:27017/portfoliodb?authSource=portfoliodb
CORS_ORIGIN=http://localhost:3000
NODE_ENV=development
```

### 4. Datenbank initialisieren (Seed)

Das Seed-Script liest Projektdaten aus `src/data/projects-data.json` und importiert sie in MongoDB.

```bash
npm run seed
```

Importiert 6 Projekte in die `portfoliodb` Datenbank.

**Projektdaten ändern:**
1. `backend/src/data/projects-data.json` bearbeiten
2. `npm run seed` erneut ausführen (löscht alte Daten und importiert neu)

### 5. Backend starten

```bash
# Development (mit Hot Reload)
npm run dev

# Production Build
npm run build
npm start
```

Server läuft auf [http://localhost:4000](http://localhost:4000)

## API Endpoints

### Projekte

**GET /api/projects**
- Alle Projekte abrufen
- Query Params:
  - `featured=true` - Nur Featured Projekte
  - `category=coding|uiux|data|experiment` - Nach Kategorie filtern

**GET /api/projects/:slug**
- Einzelnes Projekt nach Slug

### Kontakt

**POST /api/contact**
- Kontaktformular-Submission speichern
- Body: `{ name, email, subject, message }`

### Health Check

**GET /**
- Server Health Check

## Datenbank-Struktur

**Database:** `portfoliodb`

**Collections:**
- `projects` - Portfolio-Projekte (6 Einträge)
- `contactSubmissions` - Kontaktformular-Einreichungen

## Error Handling

Das Backend implementiert umfassende Fehlerbehandlung:

- **EADDRINUSE:** Port bereits belegt (mit Troubleshooting-Tipps)
- **MongoDB Connection Errors:** ECONNREFUSED, Auth Failed, Timeout
- **Validation Errors:** Mongoose & express-validator (400)
- **Duplicate Key:** Slug bereits vergeben (409)
- **Version Conflicts:** Optimistic Locking bei gleichzeitigen Updates (409)
- **Network Errors:** MongoDB Verbindung unterbrochen (503)

## Scripts

```bash
npm run dev      # Development Server (tsx watch)
npm run build    # TypeScript kompilieren
npm run start    # Production Server
npm run seed     # Datenbank mit Seed-Daten füllen
```

## Ordner-Struktur

```
backend/
├── src/
│   ├── server.ts          # Entry Point
│   ├── app.ts             # Express App Setup
│   ├── config/
│   │   └── database.ts    # MongoDB Connection
│   ├── models/            # Mongoose Schemas
│   │   ├── Project.ts
│   │   └── ContactSubmission.ts
│   ├── routes/            # API Endpoints
│   │   ├── projects.ts
│   │   └── contact.ts
│   ├── middleware/        # Error Handling
│   │   └── errorHandler.ts
│   ├── scripts/
│   │   └── seed.ts        # Seed Script
│   └── data/
│       └── projects-data.json  # Projekt-Daten
├── package.json
├── tsconfig.json
└── .env
```

## Entwickelt für

Hochschule München – Informatik und Design  
Webtechnologien Praktikum 07  
Liliane Schutz

## Features

- ✅ REST API für Projekte (GET /api/projects, GET /api/projects/:slug)
- ✅ Kontaktformular-Endpoint (POST /api/contact)
- ✅ MongoDB mit Mongoose ODM
- ✅ Validierung mit express-validator & Mongoose Schemas
- ✅ Zentrale Error-Handling Middleware
- ✅ CORS für Frontend
- ✅ Health Check Endpoint
- ✅ Seed-Script für initiale Daten
- ✅ Graceful Shutdown
- ✅ TypeScript

## Tech Stack

- **Runtime:** Node.js 18+
- **Framework:** Express 4.x
- **Database:** MongoDB Replica Set (3-node cluster via Docker) or MongoDB Atlas
- **ODM:** Mongoose 8.x
- **Language:** TypeScript
- **Validation:** express-validator, Mongoose Schemas

## Setup

### 1. Start MongoDB Replica Set (Docker Compose)

**Note:** This portfolio now uses a MongoDB Replica Set (cluster) for production-readiness.

```bash
# In the portfolio/ directory
docker compose up -d

# Check if all 3 containers are running
docker ps
```

This starts 3 MongoDB nodes:
- `portfolio-mongo-primary` (port 27017)
- `portfolio-mongo-secondary1` (port 27018)
- `portfolio-mongo-secondary2` (port 27019)

### 2. Initialize the Replica Set

**Important:** Run this ONCE after starting the containers for the first time:

```powershell
# In the portfolio/ directory
.\init-replica-set.ps1
```

This script initializes the 3-node cluster and elects a primary node.

### 3. Install Dependencies

```bash
cd backend
npm install
```

### 4. Environment Variables

The `.env` file is already configured for the replica set:

```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017,localhost:27018,localhost:27019/portfoliodb?replicaSet=portfolio-rs
CORS_ORIGIN=http://localhost:3000
NODE_ENV=development
```

**Alternative:** For MongoDB Atlas (cloud cluster), see [../MONGODB_CLUSTER_SETUP.md](../MONGODB_CLUSTER_SETUP.md)

### 5. Initialize Database (Seed)

The seed script reads project data from `src/data/projects-data.json` and imports it into MongoDB.

```bash
npm run seed
```

This inserts 6 projects into the `portfoliodb` database.

**To modify project data:**
1. Edit `backend/src/data/projects-data.json`
2. Run `npm run seed` again (deletes old data and re-imports)

**Note:** The frontend file `frontend/lib/data/projects.ts` is deprecated and no longer used. All project data comes from the database via API.

### 6. Start Backend

```bash
# Development (mit Hot Reload)
npm run dev

# Production Build
npm run build
npm start
```

Backend läuft auf http://localhost:4000

## API Endpoints

### Health Check

```bash
GET http://localhost:4000/health
```

Response:
```json
{
  "success": true,
  "message": "Portfolio Backend ist online",
  "timestamp": "2026-01-13T21:00:00.000Z"
}
```

### Projekte

**Alle Projekte abrufen:**
```bash
GET http://localhost:4000/api/projects
GET http://localhost:4000/api/projects?featured=true
GET http://localhost:4000/api/projects?category=coding
```

**Einzelnes Projekt:**
```bash
GET http://localhost:4000/api/projects/life-threads-data-vis
```

### Kontaktformular

```bash
POST http://localhost:4000/api/contact
Content-Type: application/json

{
  "name": "Max Mustermann",
  "email": "max@example.com",
  "subject": "Projektanfrage",
  "message": "Hallo, ich hätte gerne..."
}
```

## Projekt-Struktur

```
backend/
├── src/
│   ├── config/
│   │   └── database.ts           # MongoDB Connection
│   ├── models/
│   │   ├── Project.ts             # Mongoose Schema für Projekte
│   │   └── ContactSubmission.ts  # Mongoose Schema für Kontaktformular
│   ├── routes/
│   │   ├── projects.ts            # Projekte-Endpoints
│   │   └── contact.ts             # Kontaktformular-Endpoint
│   ├── middleware/
│   │   └── errorHandler.ts       # Zentrale Fehlerbehandlung
│   ├── scripts/
│   │   └── seed.ts                # DB Seed-Script
│   ├── app.ts                     # Express App Configuration
│   └── server.ts                  # Server Entry Point
├── .env                           # Environment Variables (lokal)
├── .env.example                   # ENV Template
├── package.json
└── tsconfig.json
```

## Scripts

```bash
npm run dev     # Development Server mit Hot Reload
npm run build   # TypeScript Compilation
npm start       # Production Server starten
npm run seed    # Datenbank mit Seed-Daten füllen
npm run lint    # ESLint ausführen
```

## MongoDB Administration

**Container Shell:**
```bash
docker exec -it portfolio-mongo-aufgabe07 mongosh
```

**MongoDB Shell Befehle:**
```javascript
use portfoliodb
db.projects.find().pretty()
db.contactSubmissions.find().pretty()
```

**Dump erstellen:**
```bash
docker exec portfolio-mongo-aufgabe07 mongodump --db portfoliodb --out /tmp/dump
docker cp portfolio-mongo-aufgabe07:/tmp/dump ./db-dump
```

**Dump wiederherstellen:**
```bash
docker exec -i portfolio-mongo-aufgabe07 mongorestore --db portfoliodb /tmp/dump/portfoliodb
```

## Error Handling

Alle API-Fehler folgen einheitlichem Format:

```json
{
  "success": false,
  "error": {
    "code": 400,
    "message": "Validierungsfehler",
    "details": "..."
  }
}
```

**Status Codes:**
- 200 OK
- 201 Created
- 400 Bad Request (Validation)
- 404 Not Found
- 409 Conflict (z.B. duplicate slug)
- 500 Internal Server Error

## Development

**TypeScript Watch Mode:**
```bash
npm run dev
```

Nutzt `tsx watch` für Hot Reload bei Code-Änderungen.

**Validierung testen:**
```bash
# Fehlende Felder
curl -X POST http://localhost:4000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Max"}'

# Ungültige E-Mail
curl -X POST http://localhost:4000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Max","email":"invalid","subject":"Test","message":"Hallo Welt"}'
```

## Production Deployment

1. Build erstellen: `npm run build`
2. ENV-Variablen setzen (MONGODB_URI, CORS_ORIGIN, PORT)
3. MongoDB Connection String anpassen
4. Server starten: `npm start`

## Logs

Development: Console Logs mit Request-Methode und -Pfad

```
GET /api/projects
✓ MongoDB connected successfully to: mongodb://localhost:27017/portfoliodb
✓ Server läuft auf Port 4000
```

Production: Nur Errors (console.error)

## Status

**Implementiert:** ✅ Vollständig (Praktikum 07)  
**Letzte Aktualisierung:** 13.01.2026
