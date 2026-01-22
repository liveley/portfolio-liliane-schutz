/**
 * Cloudflare Pages Function: GET /api/projects/:slug
 * Fetch single project by slug from D1 database
 * Author: Liliane Schutz
 */

interface Env {
  DB: D1Database;
}

function safeJsonArray(value: unknown): string[] {
  if (!value || typeof value !== 'string') return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { DB } = context.env;
  const slug = context.params.slug as string;
  
  if (!slug) {
    return new Response(
      JSON.stringify({
        success: false,
        error: { message: 'Slug parameter is required' },
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
  
  try {
    const { results } = await DB.prepare(
      'SELECT * FROM projects WHERE slug = ?'
    ).bind(slug).all();
    
    if (results.length === 0) {
      return new Response(
        JSON.stringify({
          success: false,
          error: { message: `Project with slug "${slug}" not found` },
        }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    const row: any = results[0];

    // Load links
    const { results: linkRows } = await DB.prepare(
      'SELECT type, url FROM project_links WHERE project_id = ?'
    ).bind(row.id).all();
    const links = linkRows.reduce((acc: Record<string, string>, link: any) => {
      acc[link.type] = link.url;
      return acc;
    }, {});

    // Load process steps
    const { results: processRows } = await DB.prepare(
      'SELECT title, description FROM project_process_steps WHERE project_id = ? ORDER BY sort_order ASC'
    ).bind(row.id).all();

    const project = {
      id: row.id?.toString?.() ?? row.id,
      slug: row.slug,
      title: row.title,
      year: row.year,
      category: row.category,
      featured: row.featured === 1,
      status: row.status,
      shortDescription: row.short_description,
      tags: safeJsonArray(row.tags),
      coverImage: row.cover_image ?? undefined,
      links: Object.keys(links).length > 0 ? links : undefined,
      detail: {
        context: row.detail_context ?? undefined,
        problem: row.detail_problem ?? undefined,
        goals: row.detail_goals ? safeJsonArray(row.detail_goals) : undefined,
        role: row.detail_role ?? undefined,
        process: processRows.length > 0 ? processRows : undefined,
        challenges: row.detail_challenges ? safeJsonArray(row.detail_challenges) : undefined,
        results: row.detail_results ? safeJsonArray(row.detail_results) : undefined,
        learnings: row.detail_learnings ? safeJsonArray(row.detail_learnings) : undefined,
        images: row.detail_images ? safeJsonArray(row.detail_images) : undefined,
      },
    };
    
    return new Response(
      JSON.stringify({
        success: true,
        data: project,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error(`Error fetching project ${slug}:`, error);
    return new Response(
      JSON.stringify({
        success: false,
        error: {
          message: 'Failed to fetch project',
          details: error.message,
        },
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
