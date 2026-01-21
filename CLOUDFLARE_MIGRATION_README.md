# Portfolio Website - Cloudflare D1 Migration

This repository has been migrated from MongoDB/Docker to **Cloudflare D1** + **Pages Functions**.

## 📋 Quick Links

- **Migration Report:** [CLOUDFLARE_MIGRATION_REPORT.md](./CLOUDFLARE_MIGRATION_REPORT.md)
- **Setup Guide:** [CLOUDFLARE_D1_SETUP.md](./CLOUDFLARE_D1_SETUP.md)

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
```powershell
npm install -g wrangler
wrangler login
```

### 2. Create D1 Database
```powershell
cd portfolio
wrangler d1 create portfoliodb --local
```

### 3. Install Dependencies
```powershell
npm install
cd frontend && npm install
```

### 4. Setup Database (Migrations + Seed)
```powershell
cd portfolio
npm run db:setup:local
```

### 5. Run Development Server
```powershell
cd frontend
npm run pages:dev
```

**Access:** http://localhost:8788

---

## 📦 Project Structure

```
portfolio-website/
├── wrangler.toml                    # Cloudflare config
├── CLOUDFLARE_MIGRATION_REPORT.md   # Full migration report
├── CLOUDFLARE_D1_SETUP.md          # Setup & deployment guide
└── portfolio/
    ├── package.json                 # DB operation scripts
    ├── migrations/
    │   └── 0001_initial.sql        # Database schema
    ├── scripts/
    │   └── seed-d1.ts              # Seed generator
    ├── frontend/
    │   ├── package.json            # Frontend + pages:dev script
    │   ├── functions/
    │   │   └── api/
    │   │       ├── projects/
    │   │       │   ├── index.ts    # GET /api/projects
    │   │       │   └── [slug].ts   # GET /api/projects/:slug
    │   │       └── contact.ts      # POST /api/contact
    │   └── ...
    └── backend/                    # ⚠️ Legacy - to be removed
```

---

## 🗄️ Database Schema

### Tables
- **projects** – Portfolio projects
- **project_links** – GitHub/Demo/Figma links
- **project_process_steps** – Process descriptions
- **contact_submissions** – Contact form entries

### JSON Columns (in `projects`)
- `tags`, `tech_stack`, `detail_goals`, `detail_results`, etc.

---

## 🛠️ NPM Scripts

### Database Operations (in `/portfolio`)
```powershell
npm run migrate:local    # Apply migrations locally
npm run migrate:prod     # Apply migrations to production
npm run seed:local       # Generate + apply seed data locally
npm run seed:prod        # Generate + apply seed data to production
npm run db:setup:local   # Migrations + Seed (local)
npm run db:setup:prod    # Migrations + Seed (production)
```

### Frontend (in `/portfolio/frontend`)
```powershell
npm run dev              # Next.js dev (no API)
npm run pages:dev        # Wrangler Pages dev (with D1 API)
npm run build            # Build for production
npm run pages:deploy     # Deploy to Cloudflare Pages
```

---

## 🌐 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/projects` | GET | All projects (optional: `?featured=true&category=coding`) |
| `/api/projects/:slug` | GET | Single project by slug |
| `/api/contact` | POST | Submit contact form |

---

## 📝 Migration Checklist

- [x] Phase 0: Bestandsaufnahme
- [x] Phase 1: Cloudflare-Architektur festlegen
- [x] Phase 2: D1 Schema planen
- [x] Phase 3: D1 Setup + Migrations
- [x] Phase 4: Data Migration/Seeding
- [x] Phase 5: API Implementation (Pages Functions)
- [x] Phase 6: Frontend auf API umstellen
- [x] Phase 7: Cloudflare Pages Deployment Setup
- [x] Phase 8: Dokumentation + Cleanup

---

## 🔗 Deployment

**Cloudflare Pages:**
1. Dashboard → Pages → Create Project
2. Connect GitHub repo
3. Build command: `cd portfolio/frontend && npm install && npm run build`
4. Build output: `portfolio/frontend/.next`
5. Functions → D1 Binding: `DB` → `portfoliodb`
6. Git push → Auto-deploy ✓

---

## 📚 Documentation

See [CLOUDFLARE_D1_SETUP.md](./CLOUDFLARE_D1_SETUP.md) for detailed setup instructions, troubleshooting, and deployment guide.

---

**Status:** ✅ Migration Complete  
**Author:** Liliane Schutz  
**Date:** January 21, 2026
