# Nationwide Dispatch Services LLC website

Static marketing site for Nationwide Dispatch Services LLC, a truck dispatching company for owner-operators and small fleets. It's plain HTML, CSS and JavaScript with no build step, made for deployment on Vercel.

## Pages

| File | URL | Contents |
| --- | --- | --- |
| `index.html` | `/` | Hero, services overview, how it works, pricing, equipment, FAQ |
| `services.html` | `/services` | Full service list and equipment types |
| `pricing.html` | `/pricing` | Dispatch fee, what's included, worked example |
| `about.html` | `/about` | Who we are and how we work |
| `contact.html` | `/contact` | Contact details and carrier sign-up form |
| `404.html` | — | Page-not-found |

`vercel.json` turns on clean URLs (`/services` instead of `/services.html`).

## Logo files (`brand/`)

- `logo.svg` / `logo.png` — horizontal logo for light backgrounds
- `logo-reverse.svg` / `logo-reverse.png` — horizontal logo for dark or green backgrounds
- `logo-stacked.svg` / `logo-stacked.png` — stacked version
- `logo-mark.svg` / `logo-mark-512.png` — icon only (social profile pictures, app icons)

The mark is a semi-truck on a highway-sign plate with a yellow road line. Colors: sign green `#0b5e3b`, safety yellow `#f5c518`, ink `#1d2024`. Wordmark set in Inter Display Black and Inter SemiBold, converted to outlines.

Root also has `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` and `og-image.png` (the preview image shown when the site is shared on social media or in texts).

## Update before launch

1. **Phone and email:** edit the `CONTACT` object at the top of `script.js`, and replace `(000) 000-0000`, `+10000000000` and `dispatch@example.com` in the HTML files so they show correctly even before JavaScript loads.
2. **Dispatch fee:** `6%` is a placeholder on `index.html` and `pricing.html` (including the example table).
3. **Hours:** in the footer of every page and on `contact.html`.

## Sign-up form

The form opens the visitor's email app with their details filled in, addressed to the email in `CONTACT`. To receive submissions directly, connect a form service such as Formspree or add a Vercel serverless function.
