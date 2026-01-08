/** Author: Liliane Schutz */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware for LIVELEY Intro Session Handling
 * 
 * Logic:
 * - First visit to / (no intro_seen cookie) → redirect to /intro
 * - Intro page sets intro_seen cookie
 * - Subsequent visits to / → show home directly
 * - Direct visit to /intro with cookie → redirect to / (prevent re-watching)
 */
export function middleware(request: NextRequest) {
  const hasSeenIntro = request.cookies.get('intro_seen');
  const { pathname } = request.nextUrl;

  // First visit to home → redirect to intro
  if (pathname === '/' && !hasSeenIntro) {
    return NextResponse.redirect(new URL('/intro', request.url));
  }

  // Direct visit to intro when already seen → redirect to home
  if (pathname === '/intro' && hasSeenIntro) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

/**
 * Matcher: only run middleware on root and intro routes
 * Don't run on static files, API routes, etc.
 */
export const config = {
  matcher: [
    '/',
    '/intro',
  ],
};
