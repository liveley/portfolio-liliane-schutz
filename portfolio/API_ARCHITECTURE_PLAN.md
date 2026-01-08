# Backend API Architecture Plan

**Status**: Planning Phase (No Implementation Yet)  
**Purpose**: Define REST API endpoints for future backend integration  
**Aligned with**: Summary_05_Express_2_REST_Webarchitekturen.md

## Architecture Decision

### Option A: Separate Express Backend (Recommended)
- **Location**: `portfolio/backend/`
- **Tech Stack**: Node.js + Express + TypeScript
- **Database**: PostgreSQL or SQLite
- **Pros**: 
  - Clean separation of concerns
  - Can be deployed independently
  - Follows course requirements (Express backend)
  - Better for learning backend concepts
- **Cons**: 
  - Requires CORS configuration
  - Two separate deployments

### Option B: Next.js Route Handlers (Alternative)
- **Location**: `portfolio/frontend/app/api/`
- **Tech Stack**: Next.js App Router API Routes
- **Pros**: 
  - Single deployment
  - No CORS issues
  - Simpler development setup
- **Cons**: 
  - Less clear backend/frontend separation
  - Not a "pure" Express backend (deviates from course)

**Decision**: **Option A (Separate Express Backend)** for better alignment with course requirements.

---

## REST API Endpoints

Following REST principles from Summary_05:
- Ressourcenorientierte URLs (not `/getProjects` but `/projects`)
- Semantische HTTP-Verben (GET, POST, PUT, DELETE)
- Stateless communication
- JSON serialization

### Projects API

#### `GET /projects`
Get all projects with optional filtering.

**Query Parameters:**
- `featured=true` - Only featured projects
- `category=coding|uiux|data|experiment` - Filter by category
- `status=in-progress|finished` - Filter by status
- `limit=10` - Pagination limit
- `offset=0` - Pagination offset

**Response:** `200 OK`
```json
{
  "data": [
    {
      "id": "proj-001",
      "slug": "life-threads-data-vis",
      "title": "Life Threads – Interaktive Datenvisualisierung",
      "year": 2025,
      "featured": true,
      "category": "data",
      "status": "in-progress",
      "shortDescription": "...",
      "tags": ["SvelteKit", "TypeScript", "D3.js"],
      "image": "/projects/life-threads.png",
      "links": {
        "github": null,
        "demo": null
      }
    }
  ],
  "pagination": {
    "total": 4,
    "limit": 10,
    "offset": 0
  }
}
```

#### `GET /projects/:slug`
Get single project by slug with full details.

**Parameters:**
- `slug` (path) - Project slug (e.g., `life-threads-data-vis`)

**Response:** `200 OK`
```json
{
  "data": {
    "id": "proj-001",
    "slug": "life-threads-data-vis",
    "title": "Life Threads – Interaktive Datenvisualisierung",
    "year": 2025,
    "featured": true,
    "category": "data",
    "status": "in-progress",
    "shortDescription": "...",
    "tags": ["SvelteKit", "TypeScript", "D3.js"],
    "image": "/projects/life-threads.png",
    "links": {
      "github": null,
      "demo": null
    },
    "detail": {
      "context": "...",
      "problem": "...",
      "goals": ["...", "..."],
      "role": "...",
      "process": [
        {"title": "...", "description": "..."}
      ],
      "outcomes": ["...", "..."]
    }
  }
}
```

**Response:** `404 Not Found` (if slug doesn't exist)

#### `GET /projects/:slug/navigation`
Get previous and next projects for navigation.

**Response:** `200 OK`
```json
{
  "data": {
    "prev": {
      "id": "proj-002",
      "slug": "ressource-realms",
      "title": "Ressource Realms"
    },
    "next": {
      "id": "proj-004",
      "slug": "walkable-memory",
      "title": "Walkable Memory"
    }
  }
}
```

---

### Skills API

#### `GET /skills`
Get all skills, optionally grouped by category.

**Query Parameters:**
- `grouped=true` - Return skills grouped by category

**Response:** `200 OK`
```json
{
  "data": [
    {
      "id": "skill-001",
      "name": "React",
      "level": 3,
      "category": "Frontend",
      "slug": "react"
    }
  ]
}
```

**Response (grouped=true):** `200 OK`
```json
{
  "data": [
    {
      "category": "Frontend",
      "skills": [
        {"id": "skill-001", "name": "React", "level": 3}
      ]
    }
  ]
}
```

---

### About Content API

#### `GET /about`
Get all about page content.

**Response:** `200 OK`
```json
{
  "data": {
    "bio": "Hallo! Ich bin Liliane...",
    "focusAreas": ["Automation & Workflow-Optimierung", "..."],
    "timeline": [
      {
        "period": "2024 – heute",
        "title": "B.Sc Studium Informatik & Design",
        "description": "..."
      }
    ],
    "languages": [
      {"name": "Deutsch", "level": "Native"}
    ],
    "softSkills": [
      {"name": "Kommunikation", "description": "..."}
    ]
  }
}
```

---

### Social Links API

#### `GET /socials`
Get all social links.

**Response:** `200 OK`
```json
{
  "data": [
    {
      "id": "social-001",
      "type": "GitHub",
      "label": "GitHub",
      "url": "https://github.com/liveley",
      "order": 1
    }
  ]
}
```

---

### Contact Form API

#### `POST /contact`
Submit contact form (send email).

**Request Body:**
```json
{
  "name": "Max Mustermann",
  "email": "max@example.com",
  "message": "Hallo, ich würde gerne..."
}
```

**Response:** `200 OK`
```json
{
  "message": "Message sent successfully",
  "status": "success"
}
```

**Response:** `400 Bad Request` (validation error)
```json
{
  "error": "Validation failed",
  "details": {
    "email": "Invalid email format"
  }
}
```

---

## Backend Structure (Express)

Following Summary_05 Separation of Concerns:

```
portfolio/backend/
├── src/
│   ├── app.ts                 # Express app setup (routes, middleware)
│   ├── server.ts              # Server startup (dotenv, listen)
│   ├── routes/
│   │   ├── projectRoutes.ts   # /projects routes
│   │   ├── skillRoutes.ts     # /skills routes
│   │   ├── aboutRoutes.ts     # /about routes
│   │   ├── socialRoutes.ts    # /socials routes
│   │   └── contactRoutes.ts   # /contact routes
│   ├── controllers/
│   │   ├── projectController.ts
│   │   ├── skillController.ts
│   │   └── ...
│   ├── services/
│   │   ├── projectService.ts   # Business logic + DB queries
│   │   ├── skillService.ts
│   │   └── ...
│   ├── repositories/
│   │   ├── projectRepository.ts # Database access layer
│   │   ├── skillRepository.ts
│   │   └── ...
│   ├── models/
│   │   ├── Project.ts          # Entity classes/interfaces
│   │   ├── Skill.ts
│   │   └── ...
│   ├── db/
│   │   ├── connection.ts       # Database connection setup
│   │   ├── migrations/         # SQL migration scripts
│   │   └── seeds/              # Initial data seeding
│   ├── middleware/
│   │   ├── errorHandler.ts
│   │   ├── cors.ts
│   │   └── validation.ts
│   └── utils/
│       ├── logger.ts
│       └── validation.ts
├── .env.example
├── package.json
└── tsconfig.json
```

---

## Data Layer Migration Strategy

### Phase 1: Current State (✅ Completed)
- Data in `lib/data/*.ts`
- Centralized access through helper functions
- UI components use data layer only

### Phase 2: Backend Stub (Next Step)
- Create Express backend with mock endpoints
- Endpoints return data from current `lib/data/*.ts`
- Test API with Postman/Thunder Client
- **NO DATABASE YET**

### Phase 3: Database Integration (Later)
- Set up PostgreSQL/SQLite
- Create migrations (schema from `lib/db-schema.ts`)
- Implement repositories with SQL queries
- Seed data from current mock data
- Update services to use repositories

### Phase 4: Frontend Integration (Final)
- Update `lib/data/*.ts` functions to call backend API
- Replace local arrays with `fetch()` calls
- Handle loading states and errors
- **UI components remain unchanged**

---

## Example: Project Service Migration

### Before (Current - Local Array)
```typescript
// lib/data/projects.ts
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
```

### After (With Backend API)
```typescript
// lib/data/projects.ts
export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
  
  try {
    const response = await fetch(`${apiUrl}/projects/${slug}`);
    
    if (!response.ok) {
      if (response.status === 404) return undefined;
      throw new Error('Failed to fetch project');
    }
    
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error('Error fetching project:', error);
    return undefined;
  }
}
```

**Key Point**: Page components (`app/projekte/[slug]/page.tsx`) don't change at all!

---

## Security Considerations

### CORS Configuration
Allow frontend domain to access backend:
```typescript
// backend/src/middleware/cors.ts
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
```

### Input Validation
Validate all incoming data:
```typescript
// backend/src/middleware/validation.ts
export const validateContactForm = (req, res, next) => {
  const { name, email, message } = req.body;
  
  if (!name || name.length < 2) {
    return res.status(400).json({ error: 'Name is required' });
  }
  
  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ error: 'Valid email is required' });
  }
  
  if (!message || message.length < 10) {
    return res.status(400).json({ error: 'Message must be at least 10 characters' });
  }
  
  next();
};
```

### SQL Injection Prevention
Always use parameterized queries (Prepared Statements):
```typescript
// BAD (vulnerable to SQL injection)
const sql = `SELECT * FROM projects WHERE slug = '${slug}'`;

// GOOD (safe with placeholders)
const sql = 'SELECT * FROM projects WHERE slug = ?';
const result = db.query(sql, [slug]);
```

Per Summary_09: "Prepared Statements bzw. Platzhalter (`?`, `$1`) nutzen → Schutz vor SQL-Injection."

---

## Testing Strategy

### API Testing (Postman/Thunder Client)
1. Test each endpoint with valid data
2. Test with invalid/missing parameters (400 errors)
3. Test with non-existent resources (404 errors)
4. Test pagination and filtering

### Integration Testing
1. Frontend → Backend → Mock DB
2. Verify response formats match expected types
3. Test error handling (network failures, timeouts)

---

## Deployment Considerations

### Development
- Frontend: `npm run dev` (localhost:3000)
- Backend: `npm run dev` (localhost:3001)
- Database: Local PostgreSQL or SQLite file

### Production (Later)
- Frontend: Vercel/Netlify (Next.js)
- Backend: Railway/Render/Heroku (Express)
- Database: Railway/Supabase PostgreSQL

---

## Next Steps (Implementation Order)

1. ✅ Centralize data layer (Completed)
2. ✅ Define DB schema (Completed)
3. ⏳ Create backend folder structure
4. ⏳ Implement Express routes + controllers (mock data)
5. ⏳ Test API endpoints with Postman
6. ⏳ Update frontend data layer to call API
7. ⏳ Set up database (PostgreSQL/SQLite)
8. ⏳ Implement migrations and seed data
9. ⏳ Replace mock data with real DB queries
10. ⏳ Deploy backend and frontend separately

---

**Note**: This document is a PLAN only. No backend code is implemented yet. The frontend is fully prepared for this migration through the centralized data layer architecture.
