# Portfolio-Website – Liliane Schutz

Vollständige Portfolio-Website mit Next.js Frontend und Express/MongoDB Backend.

## 🚀 Schnellstart

### Voraussetzungen
- Node.js 18+ und npm
- Docker & Docker Compose

### Setup

```bash
# 1. MongoDB starten
docker compose up -d

# 2. Backend Dependencies installieren & starten
cd backend
npm install
npm run seed    # Datenbank mit Projekten füllen
npm run dev     # Backend startet auf Port 4000

# 3. Frontend Dependencies installieren & starten (neues Terminal)
cd frontend
npm install
npm run dev     # Frontend startet auf Port 3000
```

Öffne [http://localhost:3000](http://localhost:3000) im Browser.

## 📁 Projekt-Struktur

```
portfolio/
├── backend/           # Express/TypeScript REST API
│   ├── src/
│   │   ├── models/    # Mongoose Schemas
│   │   ├── routes/    # API Endpoints
│   │   ├── middleware/# Error Handling
│   │   └── data/      # Seed-Daten (projects-data.json)
│   └── package.json
├── frontend/          # Next.js 15 App
│   ├── app/           # Pages & Layouts
│   ├── components/    # React Components
│   └── lib/           # Utils & Types
├── db-dump/           # MongoDB Exports (mongodump)
└── docker-compose.yml # MongoDB Container Config
```

## 🛠 Technologie-Stack

**Frontend:**
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion

**Backend:**
- Express.js
- TypeScript
- Mongoose ODM
- MongoDB 7.0

## 🔧 Verfügbare Befehle

### Backend
```bash
npm run dev      # Development Server (Port 4000)
npm run build    # TypeScript Kompilierung
npm run start    # Production Server
npm run seed     # Datenbank mit Seed-Daten füllen
```

### Frontend
```bash
npm run dev      # Development Server (Port 3000)
npm run build    # Production Build
npm run start    # Production Server
npm run lint     # ESLint
```

### MongoDB
```bash
docker compose up -d              # Container starten
docker compose down               # Container stoppen
docker compose down -v            # Container + Daten löschen
docker exec -it portfolio-mongodb mongosh --username admin --password portfolio2026 --authenticationDatabase admin
```

## 📊 API Endpoints

**Projekte:**
- `GET /api/projects` - Alle Projekte abrufen
- `GET /api/projects?featured=true` - Nur Featured Projekte
- `GET /api/projects?category=coding` - Nach Kategorie filtern
- `GET /api/projects/:slug` - Einzelnes Projekt

**Kontakt:**
- `POST /api/contact` - Kontaktformular-Submission

## 🗄 MongoDB

**Datenbank:** `portfoliodb`

**Collections:**
- `projects` - Portfolio-Projekte (6 Einträge)
- `contactSubmissions` - Kontaktformular-Einreichungen

**Credentials:**
- Root User: `admin` / `portfolio2026`
- App User: `portfolio_app` / `portfolio_app_2026`

**MongoDB Compass Connection:**
```
mongodb://admin:portfolio2026@localhost:27017/?authSource=admin
```

## 📦 Deployment

Für Production:
1. Umgebungsvariablen in `.env` setzen
2. MongoDB Atlas oder eigenen Server nutzen
3. Backend und Frontend separat deployen (z.B. Vercel + Railway)

## 📝 Entwickelt von

Liliane Schutz  
Hochschule München – Informatik und Design  
Webtechnologien Praktikum 07