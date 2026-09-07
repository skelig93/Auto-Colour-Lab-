# Auto Paint Lab

Independent car spray painting and paint repairs, Auckland. Owner-operator / sole trader: Anthony.

## Features

- Instant preliminary estimate from NZ registration plate
- Colour / paint-system comparison (solid, metallic, pearl, 3-stage)
- Booking and quote forms (local storage for demo)
- Mobile paint support, motorbike painting, services, blog, contact, terms pages
- SEO-friendly meta titles, descriptions and keywords

## Instant estimate

1. Enter a NZ registration (try `APL1`, `HILUX`, `RANGER`, or `DEMO`).
2. Vehicle details and colour paint-system pricing are compared.
3. Set the repair area. **632 cm² = $300** solid paint (then metallic / pearl / 3-stage multipliers).
4. Photo upload is optional.
5. Generate the estimate, then continue to booking.

Vehicle lookup uses a local NZ-style catalogue for consistent demos. For live accuracy, integrate the [CarJam API](https://www.carjam.co.nz) (see comments in `src/lib/vehicles.ts`).

Pickup is +$80. Motorcycle pickup stays included in bike paint pricing.

## Contact

Owner / operator Anthony — 020 411 04094

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:8080

## Build

```bash
npm run build
```

## Deploy on GitHub / Vercel / Netlify

This is a TanStack Start + Vite project. Push to GitHub and connect to Vercel or Netlify for automatic deploys. Ensure Node 20+ is used.

For pure static hosting, run the build and serve the output directory produced by Vite/Nitro.
