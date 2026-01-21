# Local Development Guide - Updated

After switching to static export for Cloudflare Pages compatibility, local development has changed slightly.

## Running the Dev Server

**Option 1: UI Development (no live data)**
```bash
cd portfolio/frontend
npm run dev
```
- The Next.js dev server runs at http://localhost:3000
- Pages render correctly but API calls will fail (no `/api` routes in static export)
- Components will show loading/empty states
- Good for: UI work, styling, layout development

**Option 2: Full Stack Development (with Pages Functions)**
```bash
cd portfolio/frontend
npm run build
npx wrangler pages dev out --binding DB=<your-local-d1-id>
```
- Serves the built static site with Pages Functions
- `/api` routes work via Functions in the `functions/` directory
- Requires local D1 setup or remote D1 binding
- Good for: Testing full integration, API work

**Option 3: Test Against Production API**
- Set environment variable to use production:
  ```bash
  $env:NEXT_PUBLIC_API_URL="https://your-site.pages.dev"
  npm run dev
  ```
- Client-side fetching will call your deployed Pages Functions

## Why the Change?

Next.js static export (`output: 'export'`) is incompatible with App Router API routes. Since Cloudflare Pages uses Functions (not Next.js API routes), we removed the mock API routes.

For local testing with real API:
- Use **wrangler pages dev** after building
- Or develop UI-only and test API integration on preview/production deploys

## Seeding Local D1 (for Option 2)

```bash
cd portfolio
npm run db:setup:local
```

Then reference your local D1 in wrangler pages dev.
