# Auto Paint Lab — SEO + Pricing + Copy Optimisation

Apply these files to the corresponding paths in your GitHub repo.

## Summary of changes

### 1. SEO & search-term strength
- **index.html**: Stronger title & meta description targeting high-intent terms:
  - "Car Spray Painting Auckland"
  - "Bumper Painting", "Scratch Repair", "Resprays"
  - Instant online estimate + mobile paint mentioned
- **mobile-mech.html**: Backlink to https://mobilemech.co.nz/ optimised with descriptive, keyword-rich anchor text:
  - "Mobile Mech Auckland — mobile car servicing & repairs"
  - Consistent `rel="noopener noreferrer"` and title attribute
- Sister-company promo card on homepage uses richer anchor text and keywords that help Mobile Mech ranking.

### 2. Removed all "sole trader" mentions
- SiteFooter.tsx
- index.html (meta, footer, body copy)
- blog.html, booking.html, bumper-painting.html, colour-matching.html, full-respray.html, mobile-mech.html, mobile-paint.html, motorbike-resprays.html, panel-refinishing.html

### 3. Estimate calculator — prices halved
**paint.ts** (source of truth for React/EstimateTool):
```ts
export const BASE_PRICE_NZD = 150;   // was 300
export const MIN_JOB_NZD = 110;      // was 220
```
**index.html** (static calculator JS):
```js
const base = Math.max(110, area * (150 / 632));
```
Pickup fee remains $80.

### 4. Clearer "estimate only" messaging
- **index.html** result text + prominent note:
  > Important — estimate only: The figure shown is an automated guide … It is *not* a fixed quote. Final pricing is confirmed after inspection…
- **EstimateTool.tsx**: Same strengthened disclaimer under the price range.

## Files to commit

| File | Action |
|------|--------|
| `paint.ts` (or `src/lib/paint.ts`) | Replace |
| `EstimateTool.tsx` (or `src/components/EstimateTool.tsx`) | Replace |
| `SiteFooter.tsx` (or `src/components/layout/SiteFooter.tsx`) | Replace |
| `index.html` | Replace |
| `mobile-mech.html` | Replace |
| Other service HTML pages listed above | Replace |

## Quick verify after deploy
1. Open homepage → Instant Estimate section → prices should be ~half previous.
2. Read the estimate note — should clearly say "not a fixed quote".
3. Search page source for "sole trader" — should return zero matches.
4. Click Mobile Mech card / links → go to mobilemech.co.nz with good anchor text.
