function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href, attrs = {}) {
  const selector = Object.entries(attrs)
    .map(([k, v]) => `[${k}="${v}"]`)
    .join("");
  let el = document.head.querySelector(`link[rel="${rel}"]${selector}`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function setDocumentTitle(title) {
  if (title) document.title = title;
}

export function setMetaDescription(description) {
  upsertMeta("name", "description", description);
}

export function setCanonical(url) {
  upsertLink("canonical", url);
}

export function setOpenGraph({ title, description, url, image, locale, type = "website" }) {
  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:url", url);
  upsertMeta("property", "og:type", type);
  upsertMeta("property", "og:image", image);
  upsertMeta("property", "og:locale", locale);
}

export function setTwitter({ title, description, image }) {
  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", title);
  upsertMeta("name", "twitter:description", description);
  upsertMeta("name", "twitter:image", image);
}

export function setGeoMeta({ region, placename }) {
  upsertMeta("name", "geo.region", region);
  upsertMeta("name", "geo.placename", placename);
  upsertMeta("name", "ICBM", "31.7917, -7.0926");
}

export function setRobots(content = "index, follow, max-image-preview:large") {
  upsertMeta("name", "robots", content);
}

export function setHreflang(links) {
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
  links.forEach(({ hreflang, href }) => {
    const el = document.createElement("link");
    el.setAttribute("rel", "alternate");
    el.setAttribute("hreflang", hreflang);
    el.setAttribute("href", href);
    document.head.appendChild(el);
  });
}

export function setOgLocaleAlternates(locales) {
  document.head
    .querySelectorAll('meta[property="og:locale:alternate"]')
    .forEach((el) => el.remove());
  locales.forEach((locale) => {
    const el = document.createElement("meta");
    el.setAttribute("property", "og:locale:alternate");
    el.setAttribute("content", locale);
    document.head.appendChild(el);
  });
}
