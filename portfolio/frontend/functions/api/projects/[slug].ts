/**
 * Cloudflare Pages Function: GET /api/projects/:slug
 * Fetch single project by slug from D1 database
 * Author: Liliane Schutz
 */

interface Env {
  DB: D1Database;
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
    const project = {
      ...row,
      tags: JSON.parse(row.tags),
      links: JSON.parse(row.links),
      detail: JSON.parse(row.detail),
      featured: row.featured === 1,
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
