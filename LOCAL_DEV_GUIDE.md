# Local Development Guide - Cloudflare D1 Portfolio

## Problem: Pages Functions don't work in `next dev`

Cloudflare Pages Functions (`/functions/api/*`) only run in these environments:
1. Production (Cloudflare Pages deployment)
2. Local with `wrangler pages dev` (requires building first)

They **DO NOT** work with `npm run dev` (regular Next.js dev server).

---

## Solution: Two Development Modes

### Mode 1: Frontend-Only Development (Fast, no API)
Use this when working on UI/styling only.

```powershell
cd portfolio/frontend
npm run dev
```

**Pros:** Fast reload, instant changes  
**Cons:** API calls fail (projects/contact won't work)

---

### Mode 2: Full-Stack Development (with D1 API)
Use this when testing API integration.

```powershell
# Set API token (once per terminal session)
$env:CLOUDFLARE_API_TOKEN = "_0cac19LNHaDcO8wbpQ84wIF6nSyRQTaY1TCbULw"

# Navigate to frontend
cd C:\Users\lilly\Documents\Aaa Main My file system\Github My Projects\portfolio-website\portfolio\frontend

# Build Next.js
npm run build

# Start Wrangler Pages Dev
npx wrangler pages dev .next --binding DB=portfoliodb --port=8788

# Open browser
start http://127.0.0.1:8788
```

**Pros:** Full API functionality, D1 database access  
**Cons:** Slower (must rebuild for changes), port 8788 instead of 3000

---

## Quick Test Script

Save this as `test-local.ps1` in `/portfolio/frontend`:

```powershell
# Kill existing processes
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force

# Set API token
$env:CLOUDFLARE_API_TOKEN = "_0cac19LNHaDcO8wbpQ84wIF6nSyRQTaY1TCbULw"

# Build and run
npm run build
npx wrangler pages dev .next --binding DB=portfoliodb --port=8788

# Auto-open browser
start http://127.0.0.1:8788
```

Then run:
```powershell
.\test-local.ps1
```

---

## Testing API Endpoints Directly

You can test API functions without the frontend:

```powershell
# Set token
$env:CLOUDFLARE_API_TOKEN = "_0cac19LNHaDcO8wbpQ84wIF6nSyRQTaY1TCbULw"

# Start wrangler pages dev in background
cd portfolio/frontend
npm run build
Start-Process npx -ArgumentList "wrangler pages dev .next --binding DB=portfoliodb --port=8788"

# Wait for server to start
Start-Sleep -Seconds 5

# Test endpoints
Invoke-RestMethod -Uri "http://127.0.0.1:8788/api/projects?featured=true"
Invoke-RestMethod -Uri "http://127.0.0.1:8788/api/projects/life-threads-data-vis"
```

---

## Recommended Workflow

1. **UI Development:** Use `npm run dev` (port 3000)
2. **API Testing:** Build + `wrangler pages dev` (port 8788)  
3. **Final Test:** Deploy to Cloudflare Pages (automatic on git push)

---

## Why This Limitation?

Cloudflare Pages Functions are **Workers**, not Express routes. They:
- Run in the Cloudflare Workers runtime (V8 isolates)
- Have access to `env.DB` (D1 binding)
- Only execute when deployed or via `wrangler pages dev`

Next.js dev server doesn't have Workers runtime, so it can't run `/functions/api/*` files.

---

## Alternative: Mock API for Development

If you want `npm run dev` to work, create mock API routes:

**Create:** `/portfolio/frontend/app/api/projects/route.ts`

```typescript
export async function GET() {
  // Mock data for development
  return Response.json({
    success: true,
    count: 2,
    data: [/* ... mock projects ... */]
  });
}
```

**But this is redundant** since we already have the real API in `/functions/api/*`.

---

**Recommended:** Use Mode 2 for testing, then deploy to Cloudflare for production.
