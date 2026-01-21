# Portfolio Frontend – Praktikum 07

**Autorin:** Liliane Schutz

Next.js 15 Frontend für Portfolio-Website mit dynamischen Projektdaten aus MongoDB.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Runtime:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **API:** Fetch von Express Backend (localhost:4000)

## Setup

### 1. Backend starten

Das Frontend benötigt das laufende Backend auf Port 4000:

```bash
# Im backend/ Verzeichnis
npm run dev
```

### 2. Dependencies installieren

```bash
cd frontend
npm install
```

### 3. Frontend starten

```bash
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) im Browser.

## Features

- ✅ Dynamische Projektdaten von MongoDB über REST API
- ✅ Projekt-Filter nach Kategorie (coding, uiux, data, experiment)
- ✅ Featured Projects Sektion
- ✅ Projekt-Detailseiten mit vollständiger Dokumentation
- ✅ Kontaktformular mit Backend-Integration
- ✅ Responsive Design
- ✅ Animations mit Framer Motion
- ✅ TypeScript Type Safety

## API Integration

Das Frontend kommuniziert mit dem Backend über `/lib/api.ts`:

```typescript
// Alle Projekte abrufen
const projects = await fetchProjects();

// Featured Projekte
const featured = await fetchProjects({ featured: true });

// Nach Kategorie filtern
const codingProjects = await fetchProjects({ category: 'coding' });

// Einzelnes Projekt
const project = await fetchProjectBySlug('life-threads-data-vis');

// Kontaktformular
await submitContactForm({ name, email, subject, message });
```

## Seiten-Struktur

```
app/
├── page.tsx                    # Home Page
├── projekte/
│   ├── page.tsx               # Alle Projekte (mit Filter)
│   └── [slug]/
│       └── page.tsx           # Projekt-Detailseite
├── about/
│   └── page.tsx               # About Page
├── kontakt/
│   └── page.tsx               # Kontakt Page
└── layout.tsx                 # Root Layout mit Header/Footer
```

## Components

```
components/
├── Header.tsx                 # Navigation
├── Footer.tsx                 # Footer mit Social Links
├── ProjectCard.tsx            # Projekt-Vorschau
├── ProjectFilter.tsx          # Kategorie-Filter
└── ContactForm.tsx            # Kontaktformular
```

## Scripts

```bash
npm run dev      # Development Server (localhost:3000)
npm run build    # Production Build
npm run start    # Production Server
npm run lint     # ESLint
```

## Environment Variables

Für Production (z.B. Vercel):

```env
NEXT_PUBLIC_API_BASE_URL=https://your-backend.com
```

## Entwickelt für

Hochschule München – Informatik und Design  
Webtechnologien Praktikum 07  
Liliane Schutz

---

**Original Repo:** [github.com/liveley/portfolio-website](https://github.com/liveley/portfolio-website)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Original repo
I implemented this code originally in my own repo as i want to continue using the portfolio afterwards. The repo is here: github.com/liveley/portfolio-website