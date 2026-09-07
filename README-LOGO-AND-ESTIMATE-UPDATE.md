# Auto Paint Lab — Logo + Estimate Update

## Changes
- Original logo artwork retained. Logo PNG assets are cleaned at low-alpha edges and exported at 4× the original source resolution for sharper rendering.
- Website logo display sizes increased across the React header/footer and static HTML pages.
- Static homepage estimate form now measures visible damage in **cm²** instead of A4 sheets. The pricing bands retain the same approximate scale as the previous A4 options.
- React `EstimateTool.tsx` already used cm², so its measurement model is unchanged.

## Implementation
Copy the contents of this folder into the repository root and replace the matching files.
