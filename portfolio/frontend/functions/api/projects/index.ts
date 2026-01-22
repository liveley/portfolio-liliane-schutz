/**
 * Cloudflare Pages Function: GET /api/projects
 * Fetch all projects from D1 database
 * Author: Liliane Schutz
 */

interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { DB } = context.env;
  const url = new URL(context.request.url);
  
  try {
    // Build SQL query with optional filters
    let query = 'SELECT * FROM projects';
    const conditions: string[] = [];
    const params: any[] = [];
    
    // Filter by featured
    const featured = url.searchParams.get('featured');
    if (featured === 'true') {
      conditions.push('featured = ?');
      params.push(1);
    }
    
    // Filter by category
    const category = url.searchParams.get('category');
    if (category) {
      conditions.push('category = ?');
      params.push(category);
    }
    
    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }
    
    query += ' ORDER BY year DESC, title ASC';
    
    // Execute query
    const { results } = await DB.prepare(query).bind(...params).all();
    
    // Parse JSON fields
    const projects = results.map((row: any) => ({
      ...row,
      tags: JSON.parse(row.tags),
      links: JSON.parse(row.links),
      detail: JSON.parse(row.detail),
      featured: row.featured === 1,
    }));
    
    return new Response(
      JSON.stringify({
        success: true,
        count: projects.length,
        data: projects,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('Error fetching projects:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: {
          message: 'Failed to fetch projects',
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
