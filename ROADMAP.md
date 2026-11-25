# Innovatechs Site Roadmap

## Shipped (content relaunch)

- [x] Honest positioning: websites, custom software, integrations, AI automation
- [x] Hero, services, why us, process, FAQ and contact copy refreshed
- [x] Technology showcase strips removed from marketing pages
- [x] Unverified stats, testimonials and portfolio entries removed
- [x] Contact form: success only on real Formspree delivery; email/WhatsApp fallback otherwise
- [x] Casablanca office map removed (no verified street address)
- [x] Metadata, OG image and structured data updated

## Before launch (founder input)

- [ ] Set `REACT_APP_FORMSPREE_FORM_ID` for working form delivery
- [ ] Confirm email, phone and WhatsApp numbers are the ones to publish
- [ ] Add verified portfolio projects only (see notes in `src/constants/projects.js`)
- [ ] Add social profile URLs in `.env` when ready
- [ ] Update `REACT_APP_SITE_URL`, `sitemap.xml`, `index.html` canonical to the live domain
- [ ] Optional: export `og-image.svg` → `og-image.png` (1200×630) for best social previews

## Morocco SEO / GEO (shipped)

- [x] Locale meta, canonical, hreflang (en / fr-MA / ar-MA / nl)
- [x] Morocco entity schema (ProfessionalService + FAQ + Service pages)
- [x] Dedicated `/services` landing pages (FR-first keyword copy)
- [x] Post-build prerender shells + hreflang sitemap
- [ ] Submit sitemap in Google Search Console (Search results → Morocco)
- [ ] Create Google Business Profile if a verifiable address exists
- [ ] Add social profile URLs for Organization `sameAs`

## Future enhancements

- [ ] Verified case study pages
- [ ] Blog / insights (French Morocco topics)
- [ ] Lighthouse performance pass
