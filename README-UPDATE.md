# Auto Paint Lab — vehicle make + Mobile Mech update

Replace the matching files in the GitHub repository with these files.

## Changes
- Estimate pricing selection is now **Vehicle make** rather than a pricing-level/category selector.
- Pricing is calculated internally from vehicle make; the form does not disclose pricing categories.
- Japanese makes use the lower internal multiplier; European makes use the higher internal multiplier.
- Damage size is displayed simply in **cm**. The calculator uses the selected cm value as an approximate square damage dimension for the underlying area calculation.
- Main page now has a small clickable **Mobile Mech** sister-company panel linking to `https://mobilemech.co.nz/` in a new tab.
- Existing visual design and layout are otherwise preserved.

## Files
- `src/components/EstimateTool.tsx`
- `src/lib/paint.ts`
- `src/lib/vehicles.ts`
- `src/routes/index.tsx`
- `index.html` (legacy/static main page)
