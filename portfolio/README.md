# Portfolio - Liliane Schutz

Next.js frontend with Cloudflare D1 database, deployed on Cloudflare Pages.

> Previously used a MongoDB + Express backend (see `backend/` and `db-dump/`). That stack has been replaced by Cloudflare D1 (SQLite-compatible) accessed directly from the Next.js app via a Cloudflare binding.

## Quick Start

### Prerequisites

- Node.js 18+
- Wrangler CLI (`npx wrangler` or global install)
- A Cloudflare account with D1 enabled

### Local Setup

```bash
# 1. Install D1 script dependencies
cd portfolio
npm install

# 2. Set up local D1 database (migrate + seed)
npm run db:setup:local

# 3. Install frontend dependencies and start dev server
cd frontend
npm install
npm run dev        # runs on port 3001
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

### Cloudflare Pages Preview (with D1 binding)

```bash
cd frontend
npm run pages:dev  # Cloudflare Pages local preview on port 8788
```

## Project Structure

```
portfolio/
├── frontend/          # Next.js 16 app (main codebase)
│   ├── app/           # Pages and layouts (App Router)
│   ├── components/    # React components
│   └── lib/           # Utilities and types
├── migrations/        # D1 SQL migrations
├── scripts/           # Seed scripts (TypeScript)
├── backend/           # Legacy Express/MongoDB backend (not in use)
├── db-dump/           # Legacy MongoDB exports (not in use)
└── package.json       # D1 / wrangler scripts
```

## Tech Stack

**Frontend:**
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion

**Database:**
- Cloudflare D1 (SQLite-compatible)
- Binding name: `DB`
- Database name: `portfoliodb`

## Available Commands

### Frontend (`frontend/`)

```bash
npm run dev            # Dev server on port 3001
npm run build          # Production build
npm run start          # Production server
npm run lint           # ESLint
npm run pages:dev      # Cloudflare Pages preview (port 8788)
npm run pages:deploy   # Deploy to Cloudflare Pages
```

### Database (`portfolio/`)

```bash
npm run db:setup:local   # Migrate + seed D1 locally
npm run db:setup:prod    # Migrate + seed D1 in production
npm run migrate:local    # Run migration locally only
npm run seed:local       # Generate and apply seed locally
npm run db:query:local   # Run raw SQL against local D1
npm run db:query:prod    # Run raw SQL against production D1
```

## Deployment

Deployed on Cloudflare Pages. Configuration is in `wrangler.toml` at the repo root.

```bash
cd frontend
npm run pages:deploy
```
