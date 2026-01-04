# Development Notes

**Author:** Liliane Schutz  
**Last Updated:** 04.01.2026

---

## White-Box Styling Implementation

### CSS Architecture
- **globals.css**: Base design tokens + white-box token aliases
- **white-box.css**: Comprehensive white-box design system (280 lines)
- **Component CSS Modules**: Use `--wb-*` tokens for consistency

### Token System
```css
--wb-card-bg: #F5F5F7       /* Off-white card background */
--wb-card-fg: #111111        /* Dark text on light cards */
--wb-card-border: #E0E0E3    /* Subtle border */
--wb-shadow-lg: ...          /* Progressive shadow system */
--wb-shadow-hover: ...       /* Accent glow on hover */
```

### Visual Verification Checklist
If white-box styling doesn't appear after changes:

1. **Restart dev server** (CSS changes sometimes need fresh start)
   ```bash
   npm run dev
   ```

2. **Check DevTools → Network**: Verify `white-box.css` is loaded

3. **Inspect a card element** (e.g., ProjectCard):
   - Computed `background-color` should be `rgb(245, 245, 247)` (off-white)
   - Computed `border` should be `1px solid rgb(224, 224, 227)`
   - Computed `box-shadow` should show multiple shadow layers

4. **Verify color contrast**: Text should be dark (#111) on light cards (#F5F5F7)

5. **Check hover effects**: Cards should lift (`translateY(-2px)`) and show accent glow

### Known Issues

#### Hydration Warning (cz-shortcut-listen)
**Cause:** Browser extensions (ColorZilla, etc.) inject DOM attributes before React hydration.

**Solution:** Added `suppressHydrationWarning` to `<body>` tag in [layout.tsx](portfolio/frontend/app/layout.tsx#L23).

**Alternative:** Test in Incognito mode or disable extensions for localhost to avoid warning entirely.

---

## Git Workflow - Reference Files

### What NOT to Commit
The following folders are **reference material only** and excluded via `.gitignore`:
- `Elegantdatavisualizationwebsite/` - Design reference project (Tailwind-based)
- `inspo/` - Inspiration screenshots and HTML exports
- `references/` - Extracted CSS/HTML from external sources

### Why?
- Portfolio submission should only contain **original implementation** code
- Reference files are ~18k+ lines of external code (not part of assignment)
- Keeps git history clean and focused on actual work

---

## Build Validation

Last successful build: **04.01.2026 20:55**
```
✓ Compiled successfully in 2.3s
✓ Finished TypeScript in 2.8s
✓ All 12 routes prerendered
  - ○ / (Static)
  - ○ /kontakt
  - ○ /projekte
  - ● /projekte/[slug] (5 SSG paths)
  - ○ /ueber-mich
```

No TypeScript errors, no ESLint errors, all routes static/SSG.

---

## Design System Status

✅ **Near-black background** (#0A0A0F) with radial gradients (blue/violet/teal glows)  
✅ **White-box cards** (#F5F5F7) with enhanced shadows and borders  
✅ **Electric blue accent** (#4361EE) for active states, buttons, focus rings  
✅ **8px spacing grid** (--s1 through --s10) consistently applied  
✅ **Glassmorphism support** with backdrop-filter + fallback  
✅ **Pure CSS** - NO Tailwind anywhere in project  

All design tokens centralized in CSS custom properties for maintainability.
