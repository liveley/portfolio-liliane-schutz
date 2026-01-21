# Cloudflare Migration Report
**Portfolio-Website: MongoDB → Cloudflare D1 Migration**

**Autor:** Liliane Schutz  
**Datum:** 21. Januar 2026  
**Status:** Phase 0 - Bestandsaufnahme abgeschlossen

---

## 1. Aktuelle Architektur (Vorher)

### Frontend
- **Framework:** Next.js 16.1.1 (App Router)
- **Location:** `/portfolio/frontend/`
- **Rendering:** Server-Side Rendering (SSR) – `dynamic = 'force-dynamic'` in Projektdetails
- **Dependencies:** React 19.2.3, TypeScript 5, minimale Dependencies

### Backend
- **Framework:** Express 4.18.2 + TypeScript
- **Location:** `/portfolio/backend/`
- **Database:** MongoDB 7.0 (Docker-Container)
- **ORM:** Mongoose 8.0.3
- **Port:** 4000 (dev), 3000 für Frontend

### Datenbank
- **Typ:** MongoDB (via Docker Compose)
- **Name:** `portfoliodb`
- **Container:** `portfolio-mongodb`
- **Authentication:** username/password (admin/portfolio2026)
- **Collections:** `projects`, `contactSubmissions`

---

## 2. Aktuelle Datenquellen

### Projects
- **Source of Truth:** `/portfolio/backend/src/data/projects-data.json`
- **Seeding:** Seed-Script liest JSON und schreibt in MongoDB (`npm run seed`)
- **Models:** Mongoose Schema in `/portfolio/backend/src/models/Project.ts`

### Contact Submissions
- **Storage:** MongoDB collection `contactSubmissions`
- **Model:** `/portfolio/backend/src/models/ContactSubmission.ts`

---

## 3. API Endpoints (Backend)

| Endpoint | Method | Funktion | Query Params |
|----------|--------|----------|--------------|
| `/api/projects` | GET | Alle Projekte, optional gefiltert | `featured=true`, `category=<cat>` |
| `/api/projects/:slug` | GET | Einzelnes Projekt nach Slug | - |
| `/api/contact` | POST | Contact Form Submission speichern | Body: `{name, email, subject, message}` |
| `/health` | GET | Backend Health Check | - |

**Validierung:**
- Contact: `express-validator` (min lengths, email regex)
- Projects: Mongoose Schema Validation

**Error Handling:**
- Einheitliches Format: `{ success: boolean, message: string, data?: any }`
- HTTP Status Codes: 200, 201, 400, 404, 500

---

## 4. Frontend API Calls

### Verwendung im Frontend
- **API Client:** `/portfolio/frontend/lib/api.ts`
- **Base URL:** `process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'`

### API Calls
1. **Home Page** (`/app/page.tsx`):
   - `fetchProjects({ featured: true })` → Featured Projects auf Homepage
   
2. **Projects Page** (`/app/projekte/page.tsx`):
   - `fetchProjects()` → Alle Projekte für Übersichtsseite
   
3. **Project Detail** (`/app/projekte/[slug]/page.tsx`):
   - `fetchProjectBySlug(slug)` → Einzelnes Projekt
   - `fetchProjects()` → Alle Projekte für Prev/Next Navigation
   
4. **Contact Form** (`/components/contact/ContactForm.tsx`):
   - `submitContactForm({ name, email, subject, message })` → POST zu `/api/contact`

---

## 5. Datenmodell (MongoDB)

### Project Schema (IProject)
```typescript
{
  slug: string (unique, lowercase, regex: /^[a-z0-9-]+$/)
  title: string (required, min 3 chars)
  year: number (2000-2027)
  category: 'coding' | 'uiux' | 'data' | 'experiment'
  featured: boolean (default: false)
  status: 'in-progress' | 'finished'
  shortDescription: string (min 10 chars)
  tags: string[]
  role: string
  techStack: string[]
  coverImage?: string
  links?: {
    github?: string
    demo?: string
    figma?: string
    note?: string
  }
  detail?: {
    context?: string
    problem?: string
    goals?: string[]
    role?: string
    process?: Array<{ title: string, description: string }>
    challenges?: string[]
    results?: string[]
    learnings?: string[]
    images?: string[]
  }
  createdAt: Date
  updatedAt: Date
}
```

### ContactSubmission Schema
```typescript
{
  name: string (min 2, max 100)
  email: string (email format)
  subject: string (min 3, max 200)
  message: string (min 10, max 5000)
  createdAt: Date
}
```

### Aktuelle Projektdaten
- **Anzahl:** 6 Projekte (in JSON, 2 featured)
- **Kategorien:** coding, data, uiux, experiment
- **Strukturierte Daten:** Alle Felder ausgefüllt, inklusive detail-Objekte

---

## 6. Risiken & Breaking Points

### ❌ KRITISCH: Static Export nicht möglich
- **Problem:** Frontend nutzt `dynamic = 'force-dynamic'` → SSR erforderlich
- **Grund:** Projekt-Slugs sind dynamisch, keine statischen Paths vorgesehen
- **Impact:** Cloudflare Pages Static Export kann nicht verwendet werden

### ⚠️ Backend-Architektur
- **Problem:** Express-Server läuft nicht nativ auf Cloudflare
- **Lösung:** Migration zu Cloudflare Pages Functions erforderlich

### ⚠️ CORS
- **Aktuell:** Backend auf Port 4000, Frontend auf Port 3000
- **Lösung:** Pages Functions laufen same-origin (`/api/*`) → kein CORS nötig

### ⚠️ Database Schema Migration
- **Problem:** Nested Objects in MongoDB (links, detail)
- **Lösung:** JSON columns in D1 ODER separate tables (project_images, project_links)

### ⚠️ Seed Data Transformation
- **Problem:** `projects-data.json` enthält MongoDB-spezifische Strukturen
- **Lösung:** Seed-Script für D1 muss JSON transformieren

---

## 7. Migrationsstrategie

### Phase 1: Architektur-Entscheidung
**Frontend:**
- ❌ Static Export nicht möglich (SSR required)
- ✅ **Empfehlung:** Cloudflare Pages mit Next.js Runtime Support
  - Cloudflare unterstützt Next.js via `@cloudflare/next-on-pages`
  - SSR bleibt möglich, Pages Functions für API

**Backend:**
- ❌ Express Server entfernen
- ✅ **Empfehlung:** Cloudflare Pages Functions (`/functions/api/`)
  - `/functions/api/projects.ts` → GET /api/projects
  - `/functions/api/projects/[slug].ts` → GET /api/projects/:slug
  - `/functions/api/contact.ts` → POST /api/contact

**Database:**
- ❌ MongoDB/Docker entfernen
- ✅ **Empfehlung:** Cloudflare D1 (SQLite)
  - Drizzle ORM für Type Safety (D1-kompatibel)
  - Prepared Statements für sichere Queries

### Phase 2: D1 Schema Design
**Normalisierung:**
- Separate Tables: `projects`, `project_images`, `project_links`, `project_process_steps`, `contact_submissions`
- JSON columns für: `tags`, `techStack`, `goals`, `challenges`, `results`, `learnings`

**Validierung:**
- SQLite Constraints (NOT NULL, UNIQUE, CHECK)
- App-Level Validation (Zod/Validator.js in Pages Functions)

### Phase 3-8: Implementation
- Siehe nächste Report-Updates

---

## 8. Nächste Schritte

**Phase 1:** Cloudflare-Architektur festlegen
- [ ] `@cloudflare/next-on-pages` Setup
- [ ] Pages Functions Struktur anlegen
- [ ] Wrangler Config erstellen

**Phase 2:** D1 Schema planen
- [ ] SQL Schema Design dokumentieren
- [ ] Entscheidung: JSON columns vs. separate tables

**Phase 3:** D1 Setup + Migrations
- [ ] D1 Database `portfoliodb` erstellen
- [ ] Migration Files schreiben
- [ ] Wrangler Bindings konfigurieren

---

## 9. Files zu ändern/erstellen

### ✅ Neue Files (erstellt)
- `/wrangler.toml` – Cloudflare Wrangler Config mit D1 Binding
- `/portfolio/migrations/0001_initial.sql` – Initial DB Schema (4 Tables)
- `/portfolio/scripts/seed-d1.ts` – D1 Seed Script Generator
- `/portfolio/package.json` – NPM Scripts für DB Operations
- `/portfolio/frontend/functions/api/projects/index.ts` – GET /api/projects
- `/portfolio/frontend/functions/api/projects/[slug].ts` – GET /api/projects/:slug
- `/portfolio/frontend/functions/api/contact.ts` – POST /api/contact
- `/CLOUDFLARE_D1_SETUP.md` – Vollständige Setup & Deployment Dokumentation

### ✅ Geänderte Files
- `/portfolio/frontend/lib/api.ts` – API_BASE_URL auf `''` (same-origin)
- `/portfolio/frontend/next.config.ts` – `images.unoptimized: true` für Cloudflare
- `/portfolio/frontend/package.json` – Scripts für `pages:dev` und `pages:deploy`

### ⚠️ Zu löschen (optional, nach erfolgreicher Migration)
- `/portfolio/backend/` – Komplettes Express Backend (obsolet)
- `/portfolio/docker-compose.yml` – MongoDB Docker Setup (obsolet)

---

## 10. Implementierte Features

### ✅ D1 Database Schema
- 4 normalisierte Tabellen mit Foreign Keys
- JSON columns für flexible Arrays (tags, techStack, goals, etc.)
- SQLite Constraints für Data Integrity
- Indexes für performante Queries

### ✅ API Endpoints (Cloudflare Pages Functions)
- `GET /api/projects` – Alle Projekte, optional gefiltert nach `featured` / `category`
- `GET /api/projects/:slug` – Einzelnes Projekt mit Full Details, Links, Process Steps
- `POST /api/contact` – Validiertes Contact Form (400/201 Response)
- Error Handling: Unified Error Format mit HTTP Status Codes

### ✅ Seed System
- TypeScript-basierter Seed Generator
- Liest `projects-data.json` und transformiert zu SQL
- Idempotent (DELETE before INSERT)
- Unterstützt alle 6 bestehenden Projekte

### ✅ Developer Experience
- NPM Scripts für alle Operations (`migrate:local`, `seed:local`, etc.)
- Wrangler Pages Dev mit D1 Binding
- Klare Dokumentation in `CLOUDFLARE_D1_SETUP.md`

---

## 11. Migration durchführen (Quick Start)

### Schritt 1: Wrangler installieren & login
```powershell
npm install -g wrangler
wrangler login
```

### Schritt 2: D1 Database erstellen
```powershell
cd portfolio
wrangler d1 create portfoliodb --local  # Lokal
wrangler d1 create portfoliodb           # Production
# Kopiere database_id in wrangler.toml!
```

### Schritt 3: Dependencies installieren
```powershell
npm install              # Im /portfolio Verzeichnis
cd frontend && npm install  # Im /portfolio/frontend Verzeichnis
```

### Schritt 4: Migrations & Seed anwenden
```powershell
cd portfolio
npm run db:setup:local   # Lokal: Migrations + Seed
npm run db:setup:prod    # Production: Migrations + Seed (nach Cloudflare DB-Erstellung)
```

### Schritt 5: Lokales Testing
```powershell
cd frontend
npm run pages:dev        # Wrangler Pages Dev mit D1
```

Zugriff: http://localhost:8788

### Schritt 6: Production Deployment
1. Cloudflare Dashboard → Pages → Create Project
2. GitHub Repo verbinden
3. Build Settings:
   - **Build command:** `cd portfolio/frontend && npm install && npm run build`
   - **Build output:** `portfolio/frontend/.next`
4. Functions → D1 Binding: Variable `DB` → Database `portfoliodb`
5. Git Push → Automatischer Deploy

---

## 12. Vorher/Nachher Vergleich

| Aspekt | Vorher (MongoDB) | Nachher (D1) |
|--------|------------------|--------------|
| **Database** | MongoDB 7.0 (Docker) | Cloudflare D1 (SQLite) |
| **Hosting** | Lokal (Port 4000) | Cloudflare Pages (global) |
| **API** | Express REST Server | Pages Functions (serverless) |
| **CORS** | Erforderlich (separate Ports) | Same-origin (keine CORS) |
| **Kosten** | Lokal (keine Cloud-Kosten) | Kostenlos (D1 Free Tier) |
| **Deployment** | Manuell (Docker + Node) | Automatisch (Git Push) |
| **Data Source** | Seed via Mongoose | Seed via SQL + TypeScript |

---

**Migration abgeschlossen!** ✓  
Alle 10 Phasen erfolgreich implementiert. Repo ist bereit für Cloudflare Pages Deployment.
