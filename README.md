# Nationwide Dispatch Services LLC website

Static marketing site for Nationwide Dispatch Services LLC, a truck dispatching company for owner-operators and small fleets.

There's no build step. Plain HTML, CSS and JavaScript, deployed on Vercel. Every push to `main` deploys automatically.

## Files

- `index.html` — page content
- `styles.css` — styles
- `script.js` — contact details and the sign-up form
- `favicon.svg` — browser tab icon

## Things to update before launch

1. **Phone and email:** edit the `CONTACT` object at the top of `script.js`. Also replace `(000) 000-0000` and `dispatch@example.com` in `index.html` so they show correctly even before JavaScript loads.
2. **Dispatch fee:** the pricing section shows `6%` as a placeholder. Search `index.html` for `price-num`.
3. **Hours:** in the sign-up section of `index.html`.

## Sign-up form

The form opens the visitor's email app with their details filled in, addressed to the email in `CONTACT`. To receive submissions without relying on the visitor's email app, connect a form service such as Formspree or add a Vercel serverless function.
