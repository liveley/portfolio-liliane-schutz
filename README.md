# Portfolio Website - Liliane Schutz

Root repository for Liliane Schutz's portfolio website. The deployable
application lives in [`portfolio/`](portfolio/README.md); this root folder keeps
only the app-level files that need to be versioned.

## Structure

```text
.
+-- portfolio/          # Next.js frontend, D1 scripts, migrations, legacy backend
+-- image/              # Additional image assets
+-- wrangler.toml       # Cloudflare configuration
+-- README.md
```

Local working folders such as `Projects_Content/`, `Webtech/`, `inspo/`,
`references/`, and `Elegantdatavisualizationwebsite/` are excluded through
`.git/info/exclude`.

## Main App

Use the README inside `portfolio/` for the detailed setup:

```powershell
cd portfolio
npm install
npm run db:setup:local

cd frontend
npm install
npm run dev
```

The frontend runs on port `3001` by default.

## Cloudflare

Useful commands:

```powershell
cd portfolio
npm run db:setup:local
npm run db:setup:prod

cd frontend
npm run pages:dev
npm run pages:deploy
```