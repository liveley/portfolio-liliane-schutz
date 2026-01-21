# Local Development Guide

After switching to static export for Cloudflare Pages compatibility, local development has three options.

## Option 1: UI Development Only (Fastest)

```bash
cd portfolio/frontend
npm run dev
```

**What works:**
- Pages render at http://localhost:3000
- Navigation between pages works
- Component styling and layout

**What doesn't work:**
- API calls show loading/empty states (no backend)
- Project details load but show empty

**Best for:** UI work, styling, component iteration

---

## Option 2: Full-Stack with Pages Functions (Recommended for Integration Testing)

```bash
cd portfolio/frontend
npm run build
npx wrangler pages dev out
```

**What works:**
- Full app at http://127.0.0.1:8788
- All API endpoints (`/api/projects`, `/api/projects/[slug]`, `/api/contact`)
- Pages Functions from `functions/` directory
- Local D1 binding if database is seeded

**What doesn't work:**
- Wrangler warning about `_redirects` (harmless - works in production)

**Setup:**
1. Build the Next.js app: `npm run build`
2. Run Wrangler Pages dev to serve the built `out/` folder
3. Access at `http://127.0.0.1:8788`

**Database setup (if testing API):**
```bash
cd portfolio
npm run db:setup:local  # Creates and seeds local D1
```

**Best for:** Full integration testing before deploy, verifying Pages Functions work, testing API with real data

---

## Option 3: Point to Production API (Quick Validation)

```bash
cd portfolio/frontend
$env:NEXT_PUBLIC_API_URL="https://your-deployed-site.pages.dev"
npm run dev
```

**What works:**
- Local dev server at http://localhost:3000
- All API calls hit your deployed site
- Full app experience with live data

**Best for:** Quick validation without building, testing against production data

---

## How Project Details Work Locally

Since we removed dynamic routes (`[slug]`) to support static export:

1. **Client-side routing**: When you navigate to `/projekte/walkable-memory`, `ProjectDetailRouter` component detects the URL
2. **Client-side fetch**: Fetches the project data from the API
3. **SPA rendering**: Renders the project detail page on the client

This works the same on production—the `_redirects` file serves `index.html` for all routes, enabling client-side routing.

---

## Troubleshooting

**Build fails locally:**
```bash
# Clear all caches and try again
rm -r portfolio/frontend/.next portfolio/frontend/out node_modules/.cache
npm run build
```

**Wrangler Pages dev shows 404:**
```bash
# Make sure you built first
npm run build

# Check that out/ directory exists
ls portfolio/frontend/out
```

**API calls return 503 (Option 1):**
- This is expected—there's no backend. Use Option 2 or 3 instead.

**API calls fail in Option 2:**
- Ensure D1 is seeded: `npm run db:setup:local`
- Check that Pages Functions are in `functions/` directory

---

## Summary

| Scenario | Command | URL |
|----------|---------|-----|
| Quick UI work | `npm run dev` | http://localhost:3000 |
| Test APIs locally | `npm run build && npx wrangler pages dev out` | http://127.0.0.1:8788 |
| Test with live data | Set `NEXT_PUBLIC_API_URL` + `npm run dev` | http://localhost:3000 |
