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

The mark is a semi-truck whose trailer becomes orange, teal and blue speed stripes. Colors: navy `#0c1f3f`, blue `#1663e6`, teal `#10b3a3`, orange `#ff7a1a`, amber `#ffbf1f`. Wordmark set in Inter Display Black Italic and Inter Bold, converted to outlines. The site uses Inter for text.

Root also has `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` and `og-image.png` (the preview image shown when the site is shared on social media or in texts).

## Update before launch

1. **Phone and email:** edit the `CONTACT` object at the top of `script.js`, and replace `(000) 000-0000`, `+10000000000` and `dispatch@example.com` in the HTML files so they show correctly even before JavaScript loads.
2. **Dispatch fee:** `6%` is a placeholder on `index.html` and `pricing.html` (including the example table).
3. **Hours:** in the footer of every page and on `contact.html`.

## Sign-up form

The form opens the visitor's email app with their details filled in, addressed to the email in `CONTACT`. To receive submissions directly, connect a form service such as Formspree or add a Vercel serverless function.
