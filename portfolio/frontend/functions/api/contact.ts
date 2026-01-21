/**
 * Cloudflare Pages Function: POST /api/contact
 * Handle contact form submissions
 * Author: Liliane Schutz
 */

interface Env {
  DB: D1Database;
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Validation helpers
function validateName(name: string): string | null {
  const trimmed = name.trim();
  if (!trimmed) return 'Name is required';
  if (trimmed.length < 2) return 'Name must be at least 2 characters long';
  if (trimmed.length > 100) return 'Name cannot exceed 100 characters';
  return null;
}

function validateEmail(email: string): string | null {
  const trimmed = email.trim();
  if (!trimmed) return 'Email is required';
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(trimmed)) return 'Please enter a valid email address';
  return null;
}

function validateSubject(subject: string): string | null {
  const trimmed = subject.trim();
  if (!trimmed) return 'Subject is required';
  if (trimmed.length < 3) return 'Subject must be at least 3 characters long';
  if (trimmed.length > 200) return 'Subject cannot exceed 200 characters';
  return null;
}

function validateMessage(message: string): string | null {
  const trimmed = message.trim();
  if (!trimmed) return 'Message is required';
  if (trimmed.length < 10) return 'Message must be at least 10 characters long';
  if (trimmed.length > 5000) return 'Message cannot exceed 5000 characters';
  return null;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    const { request, env } = context;
    
    // Parse request body
    let body: ContactFormData;
    try {
      body = await request.json() as ContactFormData;
    } catch {
      return new Response(
        JSON.stringify({
          success: false,
          error: {
            code: 'INVALID_JSON',
            message: 'Invalid JSON in request body',
          },
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
    
    // Validate all fields
    const errors: Record<string, string> = {};
    
    const nameError = validateName(body.name);
    if (nameError) errors.name = nameError;
    
    const emailError = validateEmail(body.email);
    if (emailError) errors.email = emailError;
    
    const subjectError = validateSubject(body.subject);
    if (subjectError) errors.subject = subjectError;
    
    const messageError = validateMessage(body.message);
    if (messageError) errors.message = messageError;
    
    // If there are validation errors, return 400
    if (Object.keys(errors).length > 0) {
      return new Response(
        JSON.stringify({
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Validation failed',
            details: errors,
          },
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
    
    // Insert into database
    const result = await env.DB.prepare(
      `INSERT INTO contact_submissions (name, email, subject, message)
       VALUES (?, ?, ?, ?)
       RETURNING id, created_at`
    ).bind(
      body.name.trim(),
      body.email.trim().toLowerCase(),
      body.subject.trim(),
      body.message.trim()
    ).first<{ id: number; created_at: string }>();
    
    if (!result) {
      throw new Error('Failed to insert contact submission');
    }
    
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Contact request successfully saved',
        data: {
          id: result.id.toString(),
          createdAt: result.created_at,
        },
      }),
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error saving contact submission:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'Failed to save contact submission',
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
