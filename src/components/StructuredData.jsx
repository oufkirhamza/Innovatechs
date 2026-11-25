import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SAME_AS, SITE } from "../constants/site";
import { SITE_URL, GEO, absoluteUrl, localizedPath, SERVICE_SLUGS } from "../constants/seo";
import { stripLocale, useLocale } from "../i18n/locale";

const StructuredData = () => {
  const { t, lang } = useLocale();
  const location = useLocation();
  const barePath = stripLocale(location.pathname) || "/";

  useEffect(() => {
    const pageUrl = absoluteUrl(localizedPath(barePath, lang));
    const entityDescription =
      t.geo?.entity ||
      t.meta.description;

    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": ["ProfessionalService", "Organization"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE.name,
      legalName: SITE.name,
      alternateName: ["Innovatechs Morocco", "Innovatechs Maroc"],
      description: entityDescription,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/brand/logo.png`,
      },
      image: `${SITE_URL}/og-image.png`,
      email: SITE.email,
      telephone: SITE.phone,
      address: {
        "@type": "PostalAddress",
        addressCountry: GEO.region,
        addressRegion: GEO.placename,
      },
      areaServed: GEO.areaServed.map((name) =>
        name === "International"
          ? { "@type": "Place", name: "Worldwide" }
          : { "@type": name === "Morocco" ? "Country" : "City", name }
      ),
      availableLanguage: GEO.availableLanguage,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: SITE.phone,
          contactType: "sales",
          areaServed: GEO.region,
          availableLanguage: GEO.availableLanguage,
        },
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: SITE.email,
          url: `https://wa.me/${SITE.whatsapp}`,
          areaServed: GEO.region,
          availableLanguage: GEO.availableLanguage,
        },
      ],
      knowsAbout: [
        "Website development",
        "Custom software",
        "AI automation",
        "Création de site web Maroc",
        "Application sur mesure",
        "Automatisation IA",
        "Digital agencies Morocco",
      ],
      slogan: SITE.tagline,
      ...(SAME_AS.length ? { sameAs: SAME_AS } : {}),
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE.name,
      url: SITE_URL,
      description: t.meta.description,
      inLanguage: ["en", "fr-MA", "ar-MA", "nl"],
      publisher: { "@id": `${SITE_URL}/#organization` },
    };

    const faqItems = t.faq?.items || [];
    const faqSchema =
      faqItems.length > 0
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }
        : null;

    const serviceMatch = barePath.match(/^\/services\/([^/]+)$/);
    const serviceSlug = serviceMatch?.[1];
    const serviceCopy =
      serviceSlug && SERVICE_SLUGS.includes(serviceSlug)
        ? t.servicePages?.[serviceSlug]
        : null;

    const serviceSchema = serviceCopy
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${pageUrl}#service`,
          name: serviceCopy.title,
          description: serviceCopy.metaDescription || serviceCopy.intro,
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: { "@type": "Country", name: GEO.placename },
          url: pageUrl,
          serviceType: serviceCopy.eyebrow,
        }
      : null;

    const breadcrumbItems = [{ name: SITE.name, path: "/" }];
    if (barePath.startsWith("/services")) {
      breadcrumbItems.push({
        name: t.servicePages?.hub?.eyebrow || t.nav.services,
        path: "/services",
      });
      if (serviceCopy) {
        breadcrumbItems.push({ name: serviceCopy.eyebrow, path: barePath });
      }
    } else if (barePath.startsWith("/work")) {
      breadcrumbItems.push({ name: t.nav.work, path: "/work" });
    }

    const breadcrumbSchema =
      breadcrumbItems.length > 1
        ? {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: breadcrumbItems.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.name,
              item: absoluteUrl(localizedPath(item.path, lang)),
            })),
          }
        : null;

    const graph = [
      organizationSchema,
      websiteSchema,
      barePath === "/" || barePath === "/services" ? faqSchema : null,
      serviceSchema,
      breadcrumbSchema,
    ].filter(Boolean);

    const existing = document.getElementById("innovatechs-structured-data");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "innovatechs-structured-data";
    script.text = JSON.stringify(graph.length === 1 ? graph[0] : graph);
    document.head.appendChild(script);

    return () => {
      document.getElementById("innovatechs-structured-data")?.remove();
    };
  }, [lang, t, barePath]);

  return null;
};

export default StructuredData;
