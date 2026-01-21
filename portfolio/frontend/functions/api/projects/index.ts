/**
 * Cloudflare Pages Function: GET /api/projects
 * Fetch all projects, optionally filtered
 * Author: Liliane Schutz
 */

interface Env {
  DB: D1Database;
}

interface ProjectRow {
  id: number;
  slug: string;
  title: string;
  year: number;
  category: string;
  featured: number;
  status: string;
  short_description: string;
  role: string;
  cover_image: string | null;
  tags: string;
  tech_stack: string;
  detail_context: string | null;
  detail_problem: string | null;
  detail_goals: string | null;
  detail_role: string | null;
  detail_challenges: string | null;
  detail_results: string | null;
  detail_learnings: string | null;
  detail_images: string | null;
  created_at: string;
  updated_at: string;
}

interface ProjectLink {
  type: string;
  url: string;
}

interface ProcessStep {
  title: string;
  description: string;
  sort_order: number;
}

export async function onRequestGet(context: { request: Request; env: Env }) {
  try {
    const { request, env } = context;
    const url = new URL(request.url);
    
    // Parse query parameters
    const featured = url.searchParams.get('featured');
    const category = url.searchParams.get('category');
    
    // Build SQL query with filters
    let query = 'SELECT * FROM projects WHERE 1=1';
    const params: any[] = [];
    
    if (featured === 'true') {
      query += ' AND featured = 1';
    }
    
    if (category) {
      query += ' AND category = ?';
      params.push(category);
    }
    
    query += ' ORDER BY year DESC, created_at DESC';
    
    // Execute query
    const { results } = await env.DB.prepare(query).bind(...params).all<ProjectRow>();
    
    // Transform results to match frontend expectations
    const projects = results.map((row) => ({
      id: row.id.toString(),
      slug: row.slug,
      title: row.title,
      year: row.year,
      category: row.category,
      featured: row.featured === 1,
      status: row.status,
      shortDescription: row.short_description,
      role: row.role,
      coverImage: row.cover_image,
      tags: JSON.parse(row.tags),
      techStack: JSON.parse(row.tech_stack),
      // Don't include full detail in list view for performance
    }));
    
    return new Response(
      JSON.stringify({
        success: true,
        count: projects.length,
        data: projects,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error fetching projects:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'Failed to fetch projects',
        },
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
