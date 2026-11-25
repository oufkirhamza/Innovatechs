/**
 * Post-build: write static HTML shells for Morocco SEO routes.
 * Vercel serves these files before the SPA rewrite, so crawlers get
 * title / description / hreflang / JSON-LD / noscript copy without JS.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const buildDir = path.join(root, "build");
const SITE = "https://innovatechs.com";

const LOCALES = [
  { code: "en", hreflang: "en", og: "en_US", prefix: "" },
  { code: "fr", hreflang: "fr-MA", og: "fr_MA", prefix: "/fr" },
  { code: "ar", hreflang: "ar-MA", og: "ar_MA", prefix: "/ar" },
  { code: "nl", hreflang: "nl", og: "nl_NL", prefix: "/nl" },
];

const PAGES = [
  {
    path: "/",
    titles: {
      en: "Innovatechs | Web Agency & Custom Software in Morocco",
      fr: "Innovatechs | Agence web & logiciels sur mesure au Maroc",
      ar: "Innovatechs | وكالة ويب وبرمجيات مخصصة في المغرب",
      nl: "Innovatechs | Webstudio & maatwerksoftware in Marokko",
    },
    descriptions: {
      en: "Morocco-based studio for websites, custom applications and practical AI automation. French, Arabic and English. Discuss your project with Innovatechs.",
      fr: "Studio basé au Maroc : création de sites web, applications sur mesure et automatisation IA pour entreprises marocaines et internationales. Français, arabe, anglais.",
      ar: "استوديو مقرّه المغرب: مواقع ويب وتطبيقات مخصصة وأتمتة بالذكاء الاصطناعي للشركات المغربية والدولية. العربية والفرنسية والإنجليزية.",
      nl: "Studio gevestigd in Marokko: websites, maatwerkapplicaties en praktische AI-automatisering voor Marokkaanse en internationale bedrijven.",
    },
    bodies: {
      en: "Innovatechs is a creative technology studio based in Morocco. We design and build websites, custom applications and practical AI automations for businesses in Morocco and internationally.",
      fr: "Innovatechs est un studio de technologie créative basé au Maroc. Nous concevons et réalisons des sites web, des applications sur mesure et des automatisations concrètes par IA pour les entreprises au Maroc et à l'international.",
      ar: "Innovatechs استوديو للتكنولوجيا الإبداعية مقرّه المغرب. نصمّم ونبني مواقع ويب وتطبيقات مخصصة وأتمتة عملية بالذكاء الاصطناعي للشركات في المغرب ودوليًا.",
      nl: "Innovatechs is een studio voor creatieve technologie gevestigd in Marokko. Wij ontwerpen en bouwen websites, maatwerkapplicaties en praktische AI-automatisering.",
    },
  },
  {
    path: "/services",
    titles: {
      en: "Services | Web, Software & AI in Morocco | Innovatechs",
      fr: "Services | Sites web, logiciels et IA au Maroc | Innovatechs",
      ar: "الخدمات | مواقع وبرمجيات وذكاء اصطناعي في المغرب | Innovatechs",
      nl: "Diensten | Web, software & AI in Marokko | Innovatechs",
    },
    descriptions: {
      en: "Innovatechs services in Morocco: business websites, custom applications, AI automation and integrations.",
      fr: "Services Innovatechs au Maroc : création de sites web, applications sur mesure, automatisation IA et intégrations.",
      ar: "خدمات Innovatechs في المغرب: مواقع ويب وتطبيقات مخصصة وأتمتة بالذكاء الاصطناعي وربط الأنظمة.",
      nl: "Innovatechs-diensten in Marokko: websites, maatwerkapplicaties, AI-automatisering en integraties.",
    },
    bodies: {
      en: "Four focused offers from a Morocco-based studio: websites, custom apps, practical AI automation, and integrations.",
      fr: "Quatre offres ciblées depuis le Maroc : sites web, applications, automatisation IA et intégrations.",
      ar: "أربع خدمات مركّزة من استوديو في المغرب: مواقع وتطبيقات وأتمتة وربط أنظمة.",
      nl: "Vier gerichte diensten vanuit Marokko: websites, maatwerkapps, AI-automatisering en integraties.",
    },
  },
  {
    path: "/services/websites",
    titles: {
      en: "Website Development in Morocco | Innovatechs",
      fr: "Création de site web au Maroc | Innovatechs",
      ar: "إنشاء مواقع ويب في المغرب | Innovatechs",
      nl: "Website laten maken in Marokko | Innovatechs",
    },
    descriptions: {
      en: "Business websites and online stores built for Moroccan and international companies. Based in Morocco.",
      fr: "Création de sites web et boutiques en ligne pour entreprises au Maroc. Studio basé au Maroc.",
      ar: "مواقع شركات ومتاجر إلكترونية للشركات في المغرب. استوديو مقرّه المغرب.",
      nl: "Bedrijfswebsites en webshops voor bedrijven in Marokko. Studio gevestigd in Marokko.",
    },
    bodies: {
      en: "Innovatechs creates websites that explain your offer and give visitors one clear action: call, WhatsApp, book, or buy.",
      fr: "Innovatechs crée des sites web qui expliquent votre offre et donnent aux visiteurs une action claire : appeler, WhatsApp, réserver ou acheter.",
      ar: "تنشئ Innovatechs مواقع توضّح عرضكم وتمنح الزائر إجراءً واحدًا واضحًا.",
      nl: "Innovatechs maakt websites die uw aanbod uitleggen en bezoekers één duidelijke actie geven.",
    },
  },
  {
    path: "/services/applications",
    titles: {
      en: "Custom Applications in Morocco | Innovatechs",
      fr: "Application sur mesure au Maroc | Innovatechs",
      ar: "تطبيقات مخصصة في المغرب | Innovatechs",
      nl: "Maatwerkapplicaties in Marokko | Innovatechs",
    },
    descriptions: {
      en: "Custom business applications and internal tools from a studio based in Morocco.",
      fr: "Applications métier et outils internes sur mesure au Maroc.",
      ar: "تطبيقات أعمال وأدوات داخلية مخصصة في المغرب.",
      nl: "Maatwerk bedrijfsapplicaties en interne tools vanuit Marokko.",
    },
    bodies: {
      en: "Booking tools, portals and operations software shaped around how your business actually works.",
      fr: "Outils de réservation, portails et logiciels opérationnels calés sur votre façon de travailler.",
      ar: "أدوات حجز وبوابات وبرمجيات تشغيل مبنية حول طريقة عملكم.",
      nl: "Boekingstools, portalen en operationele software rond hoe u echt werkt.",
    },
  },
  {
    path: "/services/automation",
    titles: {
      en: "AI Automation in Morocco | Innovatechs",
      fr: "Automatisation IA au Maroc | Innovatechs",
      ar: "أتمتة بالذكاء الاصطناعي في المغرب | Innovatechs",
      nl: "AI-automatisering in Marokko | Innovatechs",
    },
    descriptions: {
      en: "Practical AI and workflow automation for Moroccan businesses.",
      fr: "Automatisation des flux et IA concrète pour entreprises au Maroc.",
      ar: "أتمتة سير العمل وذكاء اصطناعي عملي للشركات في المغرب.",
      nl: "Praktische AI en workflowautomatisering voor bedrijven in Marokko.",
    },
    bodies: {
      en: "Automate repetitive tasks only where they save real time — scoped with clear outcomes.",
      fr: "Automatisez les tâches répétitives seulement là où cela gagne du temps réel.",
      ar: "نؤتمت المهام المتكررة فقط حيث توفّر وقتًا حقيقيًا.",
      nl: "Automatiseer repetitieve taken alleen waar het echte tijd bespaart.",
    },
  },
  {
    path: "/services/integrations",
    titles: {
      en: "Integrations & Improvements | Innovatechs Morocco",
      fr: "Intégrations et améliorations | Innovatechs Maroc",
      ar: "الربط والتحسين | Innovatechs المغرب",
      nl: "Integraties & verbeteringen | Innovatechs Marokko",
    },
    descriptions: {
      en: "Connect existing tools and improve live websites or software. Based in Morocco.",
      fr: "Reliez vos outils existants et améliorez un site ou un logiciel déjà en ligne.",
      ar: "اربطوا أدواتكم الحالية وحسّنوا موقعًا أو برنامجًا قائمًا.",
      nl: "Koppel bestaande tools en verbeter live websites of software.",
    },
    bodies: {
      en: "Improve, connect or partially rebuild what you already run — within a written plan.",
      fr: "Améliorer, relier ou reconstruire partiellement ce que vous faites déjà tourner.",
      ar: "حسّنوا أو اربطوا أو أعيدوا البناء جزئيًا لما تشغّلونه أصلًا.",
      nl: "Verbeter, koppel of herbouw deels wat u al draait — binnen een schriftelijk plan.",
    },
  },
  {
    path: "/work",
    titles: {
      en: "Work | Innovatechs",
      fr: "Réalisations | Innovatechs",
      ar: "الأعمال | Innovatechs",
      nl: "Werk | Innovatechs",
    },
    descriptions: {
      en: "Selected website and product demos by Innovatechs, a Morocco-based studio.",
      fr: "Démos de sites et produits par Innovatechs, studio basé au Maroc.",
      ar: "عروض مواقع ومنتجات من Innovatechs، استوديو مقرّه المغرب.",
      nl: "Geselecteerde demo's van Innovatechs, een studio in Marokko.",
    },
    bodies: {
      en: "A closer look at the live demos and concept sites from the Innovatechs studio.",
      fr: "Un regard plus précis sur les démos en ligne du studio Innovatechs.",
      ar: "نظرة أدق إلى العروض المباشرة من استوديو Innovatechs.",
      nl: "Een preciezere blik op de live demo's van studio Innovatechs.",
    },
  },
];

const ORG_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Organization"],
  "@id": `${SITE}/#organization`,
  name: "Innovatechs",
  alternateName: ["Innovatechs Morocco", "Innovatechs Maroc"],
  url: SITE,
  telephone: "+212699312362",
  email: "Innovatechs.solution@gmail.com",
  address: { "@type": "PostalAddress", addressCountry: "MA" },
  areaServed: { "@type": "Country", name: "Morocco" },
  description:
    "Innovatechs is a creative technology studio based in Morocco. It designs and builds websites, custom applications and practical AI automations for businesses in Morocco and internationally.",
  sameAs: [
    "https://www.instagram.com/innovatechs/",
    "https://www.facebook.com/profile.php?id=61596532763486",
  ],
});

function localizedUrl(barePath, locale) {
  if (!locale.prefix) return barePath === "/" ? `${SITE}/` : `${SITE}${barePath}`;
  if (barePath === "/") return `${SITE}${locale.prefix}`;
  return `${SITE}${locale.prefix}${barePath}`;
}

function outputPath(barePath, locale) {
  const full =
    barePath === "/"
      ? locale.prefix || "/"
      : `${locale.prefix}${barePath}`;
  if (full === "/") return path.join(buildDir, "index.html");
  return path.join(buildDir, full.replace(/^\//, ""), "index.html");
}

function upsert(html, pattern, replacement) {
  if (pattern.test(html)) return html.replace(pattern, replacement);
  return html.replace("</head>", `  ${replacement}\n  </head>`);
}

function injectPage(template, page, locale) {
  const canonical = localizedUrl(page.path, locale);
  const title = page.titles[locale.code];
  const description = page.descriptions[locale.code];
  const body = page.bodies[locale.code];

  let html = template;

  html = html.replace(/<html lang="[^"]*"/, `<html lang="${locale.code === "ar" ? "ar" : locale.code}"`);
  if (locale.code === "ar") {
    html = html.replace(/<html([^>]*)>/, '<html$1 dir="rtl">');
  }

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);
  html = upsert(
    html,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${escapeAttr(description)}" />`
  );
  html = upsert(
    html,
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${canonical}" />`
  );
  html = upsert(
    html,
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${escapeAttr(title)}" />`
  );
  html = upsert(
    html,
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${escapeAttr(description)}" />`
  );
  html = upsert(
    html,
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${canonical}" />`
  );
  html = upsert(
    html,
    /<meta\s+property="og:locale"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:locale" content="${locale.og}" />`
  );

  // Fresh hreflang set for this path
  html = html.replace(/<link rel="alternate" hreflang="[^"]+" href="[^"]+"\s*\/>\n?/g, "");
  const hreflangBlock = [
    ...LOCALES.map(
      (loc) =>
        `<link rel="alternate" hreflang="${loc.hreflang}" href="${localizedUrl(page.path, loc)}" />`
    ),
    `<link rel="alternate" hreflang="x-default" href="${localizedUrl(page.path, LOCALES[0])}" />`,
  ].join("\n    ");
  html = html.replace("</head>", `    ${hreflangBlock}\n  </head>`);

  const noscript = `
    <noscript>
      <main>
        <h1>${escapeHtml(title)}</h1>
        <p>${escapeHtml(body)}</p>
        <p>Innovatechs · Morocco · +212 699 312 362 · Innovatechs.solution@gmail.com</p>
        <ul>
          <li><a href="${SITE}/services/websites">Websites</a></li>
          <li><a href="${SITE}/services/applications">Applications</a></li>
          <li><a href="${SITE}/services/automation">AI automation</a></li>
          <li><a href="${SITE}/fr">Français</a></li>
          <li><a href="${SITE}/ar">العربية</a></li>
        </ul>
      </main>
    </noscript>`;

  html = html.replace(/<noscript>[\s\S]*?<\/noscript>/, noscript.trim());

  // Ensure organization JSON-LD present
  if (!html.includes('"@id": "https://innovatechs.com/#organization"')) {
    html = html.replace(
      "</head>",
      `  <script type="application/ld+json">${ORG_JSON_LD}</script>\n  </head>`
    );
  }

  return html;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(value) {
  return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function writeSitemap(projectSlugs) {
  const barePaths = [
    "/",
    "/services",
    "/services/websites",
    "/services/applications",
    "/services/automation",
    "/services/integrations",
    "/work",
    ...projectSlugs.map((slug) => `/work/${slug}`),
    "/privacy",
    "/terms",
  ];

  const urls = [];
  for (const bare of barePaths) {
    for (const locale of LOCALES) {
      const loc = localizedUrl(bare, locale);
      const priority =
        bare === "/" ? "1.0" : bare.startsWith("/services") ? "0.9" : bare === "/work" ? "0.8" : "0.6";
      const alternates = LOCALES.map(
        (locItem) =>
          `    <xhtml:link rel="alternate" hreflang="${locItem.hreflang}" href="${localizedUrl(bare, locItem)}" />`
      ).join("\n");
      urls.push(`  <url>
    <loc>${loc}</loc>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${localizedUrl(bare, LOCALES[0])}" />
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`);
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;

  fs.writeFileSync(path.join(buildDir, "sitemap.xml"), xml);
  fs.writeFileSync(path.join(root, "public", "sitemap.xml"), xml);
  console.log(`sitemap.xml → ${urls.length} URLs`);
}

function main() {
  if (!fs.existsSync(buildDir)) {
    console.error("build/ missing — run react-scripts build first");
    process.exit(1);
  }

  const template = fs.readFileSync(path.join(buildDir, "index.html"), "utf8");
  let written = 0;

  for (const page of PAGES) {
    for (const locale of LOCALES) {
      // Root EN home already is build/index.html — still overwrite with enriched shell
      const target = outputPath(page.path, locale);
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, injectPage(template, page, locale));
      written += 1;
    }
  }

  const projectsPath = path.join(root, "src", "data", "projects.js");
  const projectsSrc = fs.readFileSync(projectsPath, "utf8");
  const projectSlugs = [...projectsSrc.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
  writeSitemap(projectSlugs);

  console.log(`Prerendered ${written} SEO HTML shells`);
}

main();
