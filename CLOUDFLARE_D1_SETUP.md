# Cloudflare D1 Setup & Deployment Guide
**Portfolio Website - Lokales Development & Production Deployment**

**Autor:** Liliane Schutz  
**Letzte Aktualisierung:** 21. Januar 2026

---

## Voraussetzungen

- Node.js 18+ und npm installiert
- Cloudflare Account (kostenlos)
- Wrangler CLI installiert: `npm install -g wrangler`
- Git installiert

---

## 1. Wrangler Setup & Login

```powershell
# Wrangler global installieren (falls noch nicht geschehen)
npm install -g wrangler

# Bei Cloudflare anmelden
wrangler login
```

Folge dem Browser-Link und autorisiere Wrangler.

---

## 2. D1 Database erstellen

### Lokale Entwicklung

```powershell
# Navigiere zum Portfolio-Verzeichnis
cd portfolio

# Erstelle lokale D1-Datenbank
wrangler d1 create portfoliodb --local
```

### Production Database (Cloudflare)

```powershell
# Erstelle Production D1-Datenbank
wrangler d1 create portfoliodb
```

**Wichtig:** Kopiere die `database_id` aus der Ausgabe und füge sie in `wrangler.toml` ein:

```toml
[[d1_databases]]
binding = "DB"
database_name = "portfoliodb"
database_id = "DEINE_DATABASE_ID_HIER"  # ← Ersetzen!
```

---

## 3. Migrations anwenden

### Lokal (Development)

```powershell
# Migration auf lokale DB anwenden
wrangler d1 execute portfoliodb --local --file=./migrations/0001_initial.sql
```

### Production

```powershell
# Migration auf Production DB anwenden
wrangler d1 execute portfoliodb --file=./migrations/0001_initial.sql
```

**Verifizieren:**
```powershell
# Lokale Tabellen auflisten
wrangler d1 execute portfoliodb --local --command="SELECT name FROM sqlite_master WHERE type='table';"

# Production Tabellen auflisten
wrangler d1 execute portfoliodb --command="SELECT name FROM sqlite_master WHERE type='table';"
```

---

## 4. Seed-Daten importieren

### Seed SQL generieren

```powershell
# Im portfolio-Verzeichnis
cd scripts
npx tsx seed-d1.ts > seed-d1-output.sql
```

### Seed anwenden

**Lokal:**
```powershell
wrangler d1 execute portfoliodb --local --file=./scripts/seed-d1-output.sql
```

**Production:**
```powershell
wrangler d1 execute portfoliodb --file=./scripts/seed-d1-output.sql
```

**Verifizieren:**
```powershell
# Anzahl Projekte prüfen (lokal)
wrangler d1 execute portfoliodb --local --command="SELECT COUNT(*) as count FROM projects;"

# Anzahl Projekte prüfen (production)
wrangler d1 execute portfoliodb --command="SELECT COUNT(*) as count FROM projects;"
```

Erwartete Ausgabe: `count: 6`

---

## 5. Lokales Development mit Wrangler

### Option A: Wrangler Pages Dev (mit D1 Binding)

```powershell
# Im frontend-Verzeichnis
cd portfolio/frontend

# Build Next.js (erforderlich für Pages)
npm run build

# Starte Wrangler Pages Dev Server
npx wrangler pages dev .next --binding DB=portfoliodb --local
```

**Zugriff:** http://localhost:8788

### Option B: Next.js Dev Server (ohne D1, nur für Frontend-Dev)

```powershell
# Im frontend-Verzeichnis
npm run dev
```

**Achtung:** API-Funktionen (`/api/*`) funktionieren NICHT im normalen Next.js Dev Server.  
Für vollständigen Test mit D1: Option A verwenden.

---

## 6. Production Deployment

### Schritt 1: Cloudflare Pages Projekt erstellen

1. Gehe zu [Cloudflare Dashboard](https://dash.cloudflare.com)
2. **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. Wähle dein GitHub Repo aus
4. **Build Configuration:**
   - **Framework preset:** Next.js
   - **Build command:** `cd portfolio/frontend && npm install && npm run build`
   - **Build output directory:** `portfolio/frontend/.next`
   - **Root directory:** `/` (oder leer lassen)

### Schritt 2: D1 Binding konfigurieren

1. In deinem Pages-Projekt → **Settings** → **Functions**
2. **D1 database bindings** → **Add binding**
   - **Variable name:** `DB`
   - **D1 database:** Wähle `portfoliodb`
3. Speichern

### Schritt 3: Environment Variables (optional)

Falls benötigt:
- **Settings** → **Environment variables**
- Füge hinzu:
  - `NODE_ENV` = `production`

### Schritt 4: Deploy

**Automatisch (via Git Push):**
```powershell
git add .
git commit -m "Cloudflare D1 Migration abgeschlossen"
git push origin main
```

Cloudflare baut und deployt automatisch bei jedem Push.

**Manuell (mit Wrangler):**
```powershell
cd portfolio/frontend
npm run build
npx wrangler pages deploy .next --project-name=portfolio-website
```

---

## 7. Troubleshooting

### Problem: "Database not found"

**Lösung:**
1. Prüfe, ob `database_id` in `wrangler.toml` korrekt ist
2. Stelle sicher, dass D1 Binding in Cloudflare Pages gesetzt ist (`DB`)

### Problem: "Tables do not exist"

**Lösung:**
```powershell
# Migrations erneut anwenden
wrangler d1 execute portfoliodb --local --file=./migrations/0001_initial.sql
```

### Problem: "No projects returned"

**Lösung:**
```powershell
# Seed erneut ausführen
npx tsx scripts/seed-d1.ts > scripts/seed-d1-output.sql
wrangler d1 execute portfoliodb --local --file=./scripts/seed-d1-output.sql
```

### Problem: Pages Functions funktionieren nicht lokal

**Lösung:**
- Nutze `wrangler pages dev` statt `npm run dev`
- Stelle sicher, dass `--binding DB=portfoliodb` gesetzt ist

---

## 8. Nützliche Befehle

```powershell
# D1 Database auflisten
wrangler d1 list

# SQL Query direkt ausführen (lokal)
wrangler d1 execute portfoliodb --local --command="SELECT * FROM projects LIMIT 3;"

# SQL Query direkt ausführen (production)
wrangler d1 execute portfoliodb --command="SELECT * FROM projects WHERE featured = 1;"

# Cloudflare Pages Logs anzeigen
wrangler pages deployment tail

# Migration zurückrollen (manuell)
wrangler d1 execute portfoliodb --local --command="DROP TABLE projects;"
```

---

## 9. Datenbankstruktur

### Tabellen

- **projects** – Haupttabelle für Portfolio-Projekte
- **project_links** – Links zu GitHub, Demo, Figma
- **project_process_steps** – Prozess-Schritte für Detail-Seite
- **contact_submissions** – Kontaktformular-Einträge

### JSON Columns in `projects`

- `tags` – Array von Tags (z.B. `["React", "TypeScript"]`)
- `tech_stack` – Array von Technologien
- `detail_goals` – Array von Projektzielen
- `detail_challenges` – Array von Herausforderungen
- `detail_results` – Array von Ergebnissen
- `detail_learnings` – Array von Learnings
- `detail_images` – Array von Bild-URLs

---

## 10. API Endpoints (Cloudflare Pages Functions)

| Endpoint | Method | Beschreibung |
|----------|--------|--------------|
| `/api/projects` | GET | Alle Projekte (optional: `?featured=true&category=coding`) |
| `/api/projects/:slug` | GET | Einzelnes Projekt nach Slug |
| `/api/contact` | POST | Kontaktformular absenden |

**Beispiel:**
```bash
# Lokal
curl http://localhost:8788/api/projects?featured=true

# Production
curl https://deine-domain.pages.dev/api/projects?featured=true
```

---

**Ende Setup Guide**
