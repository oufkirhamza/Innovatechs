# Innovatechs

Marketing site for **Innovatechs** — websites, custom software and practical AI automations for businesses in Morocco and beyond.

## Stack

- React 18 (Create React App)
- React Router
- Tailwind CSS
- Sass (section-specific styles)

## Local development

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env` and configure:

| Variable | Purpose |
|----------|---------|
| `REACT_APP_FORMSPREE_FORM_ID` | Formspree form ID for contact submissions |
| `REACT_APP_GA_MEASUREMENT_ID` | Google Analytics 4 measurement ID |
| `REACT_APP_SITE_URL` | Production URL for JSON-LD structured data |
| `REACT_APP_CALENDLY_URL` | Optional Calendly embed in contact section |

Without Formspree, the contact form shows an honest fallback to email and WhatsApp (no false success message).

## Production build

```bash
npm run build
```

Output is in `build/`.

## Deploy

### Vercel

1. Import the repo at [vercel.com](https://vercel.com)
2. Framework preset: **Create React App**
3. Add environment variables from `.env.example`
4. Deploy — `vercel.json` handles SPA routing

### Netlify

1. Build command: `npm run build`
2. Publish directory: `build`
3. Add a redirect rule: `/* /index.html 200` (SPA)
4. Set the same environment variables in the Netlify UI

After deploy, update:

- `public/sitemap.xml` — replace `https://innovatechs.com` with your domain
- `public/robots.txt` — update the Sitemap URL
- `public/index.html` — `canonical` and `og:url` meta tags

## Project structure

```
src/
  components/     Shared UI
  layouts/        Header, Footer
  pages/Home/     Landing page sections
  constants/      Site copy and portfolio data
  utils/          Scroll helpers, analytics
public/           Static assets, robots.txt, sitemap.xml
```

## Sections (in order)

Hero → Services → Why Us → Process → FAQ → CTA → Contact

## Features

- Scroll-reveal animations (respects `prefers-reduced-motion`)
- PWA manifest (`public/manifest.json`)
- Custom 404 page
- Optional GA4, Formspree, and Calendly via env vars
