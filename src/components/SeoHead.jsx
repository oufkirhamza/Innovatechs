import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  SITE_URL,
  HREFLANG,
  OG_LOCALE,
  GEO,
  absoluteUrl,
  localizedPath,
} from "../constants/seo";
import { LOCALE_CODES, stripLocale, useLocale } from "../i18n/locale";
import {
  setCanonical,
  setDocumentTitle,
  setGeoMeta,
  setHreflang,
  setMetaDescription,
  setOgLocaleAlternates,
  setOpenGraph,
  setRobots,
  setTwitter,
} from "../utils/domMeta";

/**
 * Route-level SEO for Morocco-first search + AI citation.
 * Pass title/description from the page; canonical/hreflang follow the locale URL.
 */
const SeoHead = ({
  title,
  description,
  path,
  noindex = false,
  type = "website",
  image = `${SITE_URL}/og-image.png`,
}) => {
  const { lang } = useLocale();
  const location = useLocation();
  const barePath = path || stripLocale(location.pathname) || "/";

  useEffect(() => {
    const canonicalPath = localizedPath(barePath, lang);
    const canonical = absoluteUrl(canonicalPath === "/" ? "/" : canonicalPath);
    const desc = description || "";

    setDocumentTitle(title);
    setMetaDescription(desc);
    setCanonical(canonical);
    setRobots(noindex ? "noindex, follow" : "index, follow, max-image-preview:large");
    setGeoMeta({ region: GEO.region, placename: GEO.placename });

    setOpenGraph({
      title,
      description: desc,
      url: canonical,
      image,
      locale: OG_LOCALE[lang],
      type,
    });

    setOgLocaleAlternates(
      LOCALE_CODES.filter((code) => code !== lang).map((code) => OG_LOCALE[code])
    );

    setTwitter({ title, description: desc, image });

    const hreflangLinks = [
      ...LOCALE_CODES.map((code) => {
        const p = localizedPath(barePath, code);
        return {
          hreflang: HREFLANG[code],
          href: absoluteUrl(p === "/" ? "/" : p),
        };
      }),
      {
        hreflang: "x-default",
        href: absoluteUrl(localizedPath(barePath, "en") === "/" ? "/" : localizedPath(barePath, "en")),
      },
    ];
    setHreflang(hreflangLinks);
  }, [title, description, barePath, lang, noindex, type, image]);

  return null;
};

export default SeoHead;
