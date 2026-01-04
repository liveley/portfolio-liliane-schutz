/** Author: Liliane Schutz */

import { SocialLink } from "../types";

/**
 * Mock Social Links Data (Placeholder)
 * 
 * WICHTIG: Dies sind Placeholder-URLs.
 * Echte Links werden später ergänzt.
 * 
 * Used in:
 * - Footer (alle Seiten)
 * - Contact page (/kontakt)
 */

export const socialLinks: SocialLink[] = [
  {
    type: "GitHub",
    label: "GitHub",
    url: "https://github.com/placeholder-username"
  },
  {
    type: "LinkedIn",
    label: "LinkedIn",
    url: "https://linkedin.com/in/placeholder-profile"
  },
  {
    type: "E-Mail",
    label: "E-Mail",
    url: "mailto:placeholder@example.com"
  }
];

/**
 * Helper function to get social link by type
 */
export function getSocialLinkByType(type: "GitHub" | "LinkedIn" | "E-Mail"): SocialLink | undefined {
  return socialLinks.find(link => link.type === type);
}

/**
 * Helper function to get all social links
 */
export function getAllSocialLinks(): SocialLink[] {
  return socialLinks;
}
