export const SITE_URL = (
  process.env.REACT_APP_SITE_URL ||
  "https://www.innovatechs.tech"
).replace(/\/$/, "");

/** BCP 47 tags used in hreflang / og:locale */
export const HREFLANG = {
  en: "en",
  fr: "fr-MA",
  nl: "nl",
  ar: "ar-MA",
};

export const OG_LOCALE = {
  en: "en_US",
  fr: "fr_MA",
  nl: "nl_NL",
  ar: "ar_MA",
};

export const GEO = {
  region: "MA",
  placename: "Morocco",
  countryName: "Morocco",
  countryNameFr: "Maroc",
  countryNameAr: "المغرب",
  areaServed: ["Morocco", "Casablanca", "Rabat", "Tangier", "Marrakech", "International"],
  availableLanguage: ["fr", "ar", "en", "nl"],
};

export const SERVICE_SLUGS = [
  "websites",
  "applications",
  "automation",
  "integrations",
];

export function absoluteUrl(path = "/") {
  if (!path || path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function localizedPath(barePath, lang) {
  const bare = !barePath || barePath === "/" ? "/" : barePath;
  if (lang === "en") return bare;
  return bare === "/" ? `/${lang}` : `/${lang}${bare}`;
}

/** Every public path (locale-stripped) that should appear in the sitemap. */
export function getSeoPaths(projectSlugs = []) {
  return [
    "/",
    "/work",
    "/services",
    ...SERVICE_SLUGS.map((slug) => `/services/${slug}`),
    "/privacy",
    "/terms",
    ...projectSlugs.map((slug) => `/work/${slug}`),
  ];
}
