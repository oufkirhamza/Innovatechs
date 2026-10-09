import cosmetics from "../assets/img/concept-cosmetics.jpg";
import car from "../assets/img/concept-car.jpg";
import cafe from "../assets/img/concept-cafe.jpg";
import architecture from "../assets/img/concept-architecture.jpg";

/**
 * Concept studies for the public site.
 *
 * These are original illustrations of the kinds of products Innovatechs designs.
 * They are not completed client deliveries. Do not add unverified third-party
 * screenshots, real company branding, or invented results.
 *
 * To publish a real project later, replace the copy, image, and status, and set
 * liveUrl when a demo actually exists. Use status "Concept" until then.
 */
export const PROJECTS = [
  {
    id: "maison-nera",
    slug: "maison-nera",
    title: "Maison Néra",
    category: "Beauty & E-commerce",
    status: "Concept Demo",
    headline: "A more beautiful way to shop.",
    description:
      "A refined handmade cosmetics shopping experience with product discovery, cart management, and WhatsApp ordering.",
    tags: ["E-commerce", "UI Design", "WhatsApp Commerce"],
    image: cosmetics,
    visualTheme: "cosmetics",
    previewUrl: "maisonnera.concept",
    liveUrl: "",
    featured: true,
    layout: "feature",
    features: [
      "Collection browsing and product pages",
      "Cart management",
      "WhatsApp ordering from the product",
    ],
  },
  {
    id: "rif-drive",
    slug: "rif-drive",
    title: "Rif Drive",
    category: "Car Rental",
    status: "Concept",
    headline: "",
    description:
      "An inquiry-focused rental platform with a fleet catalog and intuitive booking journey.",
    tags: ["Automotive", "Website", "Booking UX"],
    image: car,
    visualTheme: "automotive",
    previewUrl: "rifdrive.concept",
    liveUrl: "",
    featured: false,
    layout: "pair",
    features: [
      "Fleet catalog with a clear vehicle presentation",
      "A short booking inquiry, not a fake checkout",
      "Dates, pickup, and return gathered in one place",
    ],
  },
  {
    id: "atelier-cafe",
    slug: "atelier-cafe",
    title: "Atelier Café",
    category: "Hospitality",
    status: "Concept",
    headline: "",
    description:
      "A digital home for a modern café, combining menus, atmosphere, and simple customer interactions.",
    tags: ["Hospitality", "Website", "Digital Menu"],
    image: cafe,
    visualTheme: "hospitality",
    previewUrl: "ateliercafe.concept",
    liveUrl: "",
    featured: false,
    layout: "pair",
    features: [
      "An atmosphere-led homepage",
      "A digital menu that is easy to scan",
      "A simple way for guests to get in touch",
    ],
  },
  {
    id: "rif-living",
    slug: "rif-living",
    title: "Rif Living",
    category: "Real Estate",
    status: "Concept",
    headline: "",
    description:
      "A property discovery experience with refined listings, filters, and inquiry-focused interactions.",
    tags: ["Real Estate", "Listings", "Web Application"],
    image: architecture,
    visualTheme: "realestate",
    previewUrl: "rifliving.concept",
    liveUrl: "",
    featured: false,
    layout: "wide",
    features: [
      "Large listing layouts",
      "Filters for browsing properties",
      "Inquiry instead of an invented purchase flow",
    ],
  },
];

export const projectPath = (project) => `/work/${project.slug}`;

export const projectActionLabel = (project) =>
  project.liveUrl ? "View live demo" : "Explore concept";
