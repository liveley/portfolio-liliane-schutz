# Test Local - Wrangler Pages Dev Starter
# Autor: Liliane Schutz

Write-Host "🚀 Starting Wrangler Pages Dev..." -ForegroundColor Cyan

# Kill existing processes
Write-Host "Killing existing Node processes..." -ForegroundColor Yellow
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue

# Set API token
Write-Host "Setting Cloudflare API token..." -ForegroundColor Yellow
$env:CLOUDFLARE_API_TOKEN = "_0cac19LNHaDcO8wbpQ84wIF6nSyRQTaY1TCbULw"

# Build Next.js
Write-Host "Building Next.js..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build successful!" -ForegroundColor Green

# Start Wrangler Pages Dev
Write-Host "Starting Wrangler Pages Dev on http://127.0.0.1:8788..." -ForegroundColor Cyan
npx wrangler pages dev out --binding DB=portfoliodb --port=8788

Write-Host "✅ Server started!" -ForegroundColor Green
Write-Host "Open: http://127.0.0.1:8788" -ForegroundColor Cyan
