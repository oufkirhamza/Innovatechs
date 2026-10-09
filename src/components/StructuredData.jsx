import { useEffect } from "react";
import { SITE } from "../constants/site";
import { useLocale } from "../i18n/locale";

const SITE_URL = process.env.REACT_APP_SITE_URL || "https://innovatechs.com";

const StructuredData = () => {
  const { t, lang } = useLocale();

  useEffect(() => {
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: SITE.name,
      description: t.meta.description,
      url: SITE_URL,
      logo: `${SITE_URL}/brand/logo.png`,
      email: SITE.email,
      telephone: SITE.phone,
      areaServed: ["MA", "International"],
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE.name,
      url: SITE_URL,
      description: t.meta.description,
      inLanguage: lang,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify([organizationSchema, websiteSchema]);
    script.id = "innovatechs-structured-data";
    document.head.appendChild(script);
    return () => {
      document.getElementById("innovatechs-structured-data")?.remove();
    };
  }, [lang, t]);

  return null;
};

export default StructuredData;
