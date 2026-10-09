import { useEffect } from "react";
import { SITE } from "../constants/site";

const SITE_URL = process.env.REACT_APP_SITE_URL || "https://innovatechs.com";

const StructuredData = () => {
  useEffect(() => {
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: SITE.name,
      description: SITE.tagline,
      url: SITE_URL,
      email: SITE.email,
      telephone: SITE.phone,
      areaServed: ["MA", "International"],
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE.name,
      url: SITE_URL,
      description: SITE.tagline,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify([organizationSchema, websiteSchema]);
    script.id = "innovatechs-structured-data";
    document.head.appendChild(script);
    return () => {
      document.getElementById("innovatechs-structured-data")?.remove();
    };
  }, []);

  return null;
};

export default StructuredData;
