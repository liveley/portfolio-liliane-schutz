/**
 * Cloudflare Pages Function: GET /api/projects/[slug]
 * Fetch single project by slug with full details
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

export async function onRequestGet(context: { 
  request: Request; 
  env: Env; 
  params: { slug: string } 
}) {
  try {
    const { env, params } = context;
    const { slug } = params;
    
    // Fetch project by slug
    const projectResult = await env.DB.prepare(
      'SELECT * FROM projects WHERE slug = ?'
    ).bind(slug).first<ProjectRow>();
    
    if (!projectResult) {
      return new Response(
        JSON.stringify({
          success: false,
          error: {
            code: 'NOT_FOUND',
            message: `Project with slug "${slug}" not found`,
          },
        }),
        {
          status: 404,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
    
    // Fetch related links
    const { results: links } = await env.DB.prepare(
      'SELECT type, url FROM project_links WHERE project_id = ?'
    ).bind(projectResult.id).all<ProjectLink>();
    
    // Fetch related process steps
    const { results: processSteps } = await env.DB.prepare(
      'SELECT title, description, sort_order FROM project_process_steps WHERE project_id = ? ORDER BY sort_order'
    ).bind(projectResult.id).all<ProcessStep>();
    
    // Transform to frontend format
    const project = {
      id: projectResult.id.toString(),
      slug: projectResult.slug,
      title: projectResult.title,
      year: projectResult.year,
      category: projectResult.category,
      featured: projectResult.featured === 1,
      status: projectResult.status,
      shortDescription: projectResult.short_description,
      role: projectResult.role,
      coverImage: projectResult.cover_image,
      tags: JSON.parse(projectResult.tags),
      techStack: JSON.parse(projectResult.tech_stack),
      links: links.reduce((acc, link) => {
        acc[link.type] = link.url;
        return acc;
      }, {} as Record<string, string>),
      detail: {
        context: projectResult.detail_context,
        problem: projectResult.detail_problem,
        goals: projectResult.detail_goals ? JSON.parse(projectResult.detail_goals) : undefined,
        role: projectResult.detail_role,
        process: processSteps.length > 0 
          ? processSteps.map(step => ({ title: step.title, description: step.description }))
          : undefined,
        challenges: projectResult.detail_challenges ? JSON.parse(projectResult.detail_challenges) : undefined,
        results: projectResult.detail_results ? JSON.parse(projectResult.detail_results) : undefined,
        learnings: projectResult.detail_learnings ? JSON.parse(projectResult.detail_learnings) : undefined,
        images: projectResult.detail_images ? JSON.parse(projectResult.detail_images) : undefined,
      },
    };
    
    return new Response(
      JSON.stringify({
        success: true,
        data: project,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error fetching project:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'Failed to fetch project',
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
