# Auto Paint Lab — Auckland

Static website for Auto Paint Lab (independent sole-trader automotive paint services).

## Structure

All site files are in this single folder — upload the whole folder to GitHub or any static host.

- `index.html` — home
- `services.html` — services overview
- Individual service pages with booking forms:
  - `spray-painting.html`, `scratch-repairs.html`, `bumper-painting.html`
  - `colour-matching.html`, `panel-refinishing.html`, `full-respray.html`
  - `mobile-paint.html`, `motorbike-resprays.html`
- `booking.html` — general quote form
- `terms.html`, `blog.html`, `mobile-mech.html`
- `assets/` — images

## Booking forms

Forms post to **FormSubmit** (`formsubmit.co`) at `nzmobilemech@gmail.com`.

On first submission, FormSubmit may email a confirmation link to activate the address — check that inbox once.

File uploads use the field name `attachment` (FormSubmit-compatible).

## Deploy

Upload this entire folder to GitHub Pages, Netlify, Cloudflare Pages, or any static host. No build step required.
