# Dean Web Services - One Page Site

Fast, static one-page marketing site for a UK-focused web design service. Built with vanilla HTML/CSS/JS and ready to deploy on Netlify.

## Structure
- `index.html`: main page (replace placeholders noted in the top comment)
- `assets/styles.css`: styles
- `assets/main.js`: small enhancements (mobile nav toggle, current year)
- `robots.txt`, `sitemap.xml`: SEO helpers
- `netlify.toml`: deploy settings

## Setup
1. Clone the repo.
2. Update placeholders in `index.html` (canonical URL, email, phone, optional address) and sitemap/robots URLs.
3. Open `index.html` in a browser to preview locally.

## Deploy to Netlify
1. Push to GitHub.
2. Create a new Netlify site from GitHub and select this repo.
3. Build settings: no build command, publish directory = `.`
4. Add your custom domain and enable HTTPS.

## Contact form
- Netlify form ready: `name="contact"` with honeypot enabled.
- Submissions appear in Netlify Forms once deployed.

## Customisation tips
- Adjust colours in `assets/styles.css` via CSS variables.
- Update structured data (JSON-LD) and OpenGraph/Twitter meta tags in `index.html` with your live details.
