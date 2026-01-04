# Portfolio-Website

**Autor:** Liliane Schutz  
**Modul:** Webtechnologien – Praktikum 06  
**Framework:** Next.js 14 + TypeScript (App Router)

## Projektstruktur

```
portfolio/
├── frontend/          # Next.js Frontend-Anwendung
└── backend/           # Backend-Stub (für spätere Integration)
```

## Frontend starten

### Development Mode
```bash
cd frontend
npm run dev
```

Die Anwendung ist dann unter [http://localhost:3000](http://localhost:3000) erreichbar.

### Build für Production
```bash
cd frontend
npm run build
npm run start
```

### Linting
```bash
cd frontend
npm run lint
```

## Anforderungen
- Node.js 18+ 
- npm oder pnpm

## Abgabe
Die Abgabe erfolgt als **ZIP-Export des gesamten Repositories** über GitLab/GitHub.

## Hinweise
- Das Backend ist aktuell nur ein Stub (siehe `/backend/README.md`)
- Alle Daten sind als Mock-Daten im Frontend implementiert
- TypeScript und ESLint sind konfiguriert und müssen ohne Errors laufen
