/**
 * Author: Liliane Schutz
 * Client-side intro redirect handler
 * Redirects to /intro on first visit (when no cookie exists)
 */
'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function IntroRedirect() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Only check on home page
    if (pathname !== '/') return;

    // Check if intro was already seen
    const hasSeenIntro = document.cookie.includes('intro_seen=1');

    // If not seen, redirect to intro
    if (!hasSeenIntro) {
      router.replace('/intro');
    }
  }, [pathname, router]);

  return null; // This component renders nothing
}
