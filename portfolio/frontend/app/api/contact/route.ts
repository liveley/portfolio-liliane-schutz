/**
 * Next.js API Route: POST /api/contact
 * Development fallback for Cloudflare Pages Functions
 * In production, this is handled by /functions/api/contact.ts
 */

import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Validation helpers (same as Pages Function)
function validateName(name: string): string | null {
  const trimmed = name.trim();
  if (!trimmed) return 'Name is required';
  if (trimmed.length < 2) return 'Name must be at least 2 characters long';
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
  return null;
}

function validateMessage(message: string): string | null {
  const trimmed = message.trim();
  if (!trimmed) return 'Message is required';
  if (trimmed.length < 10) return 'Message must be at least 10 characters long';
  return null;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    
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
    
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Validation failed',
            details: errors,
          },
        },
        { status: 400 }
      );
    }
    
    // In development, just log and return success
    console.log('📧 Contact Form Submission (DEV MODE):', {
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message.substring(0, 50) + '...',
    });
    
    return NextResponse.json(
      {
        success: true,
        message: 'Contact request successfully saved (dev mode - not actually saved)',
        data: {
          id: 'dev-' + Date.now(),
          createdAt: new Date().toISOString(),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing contact submission:', error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'Failed to process contact submission',
        },
      },
      { status: 500 }
    );
  }
}
