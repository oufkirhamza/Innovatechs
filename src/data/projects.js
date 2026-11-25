import maisonNera from "../assets/img/projects/maison-nera.jpg";
import solara from "../assets/img/projects/solara.jpg";
import novaDental from "../assets/img/projects/nova-dental.jpg";
import luneEvents from "../assets/img/projects/lune-events.jpg";
import rifDrive from "../assets/img/projects/rif-drive.jpg";
import atelierBeaute from "../assets/img/projects/atelier-beaute.jpg";
import riffit from "../assets/img/projects/riffit.jpg";
import morrow from "../assets/img/projects/morrow.jpg";
import noura from "../assets/img/projects/noura.jpg";
import rifLiving from "../assets/img/projects/rif-living.jpg";
import furryFriends from "../assets/img/projects/furry-friends.jpg";
import mielEtCreme from "../assets/img/projects/miel-et-creme.jpg";
import rifAdventures from "../assets/img/projects/rif-adventures.jpg";
import rifBusinessDesk from "../assets/img/projects/rif-business-desk.jpg";
import rifAcademy from "../assets/img/projects/rif-academy.jpg";
import rifAutocare from "../assets/img/projects/rif-autocare.jpg";

/**
 * Live demos published by the studio.
 * Copy describes what each public site actually presents.
 */
export const PROJECTS = [
  {
    id: "maison-nera",
    slug: "maison-nera",
    title: "Maison Néra",
    category: "Beauty & E-commerce",
    status: "Live demo",
    headline: "Beauty, shaped by hand.",
    description:
      "A handmade cosmetics boutique with a calm shop, a care story, and a direct way to get in touch.",
    tags: ["E-commerce", "Beauty", "Boutique"],
    image: maisonNera,
    liveUrl: "https://cosmetics-lab.vercel.app/",
    featured: true,
    features: [
      "A shop for small-batch care products",
      "Brand story and know-how pages",
      "Contact and WhatsApp from the site",
    ],
  },
  {
    id: "solara",
    slug: "solara",
    title: "Solara",
    category: "Energy",
    status: "Live demo",
    headline: "A brighter way to live.",
    description:
      "A solar studio site for homes and businesses, with solutions, a savings estimate, and a quote request.",
    tags: ["Energy", "Website", "Lead generation"],
    image: solara,
    liveUrl: "https://solara-cyan-seven.vercel.app/",
    featured: false,
    features: [
      "Solutions for home and business",
      "A savings estimate",
      "A demo quote request",
    ],
  },
  {
    id: "nova-dental",
    slug: "nova-dental",
    title: "Nova Dental",
    category: "Healthcare",
    status: "Live demo",
    headline: "A thoughtful approach to dentistry.",
    description:
      "A dental practice site built around comfort, with services, the team, and a simple visit request.",
    tags: ["Healthcare", "Website", "Appointments"],
    image: novaDental,
    liveUrl: "https://novadental-nine.vercel.app/",
    featured: false,
    features: [
      "Services and the practice approach",
      "Team and frequently asked questions",
      "A request for a visit",
    ],
  },
  {
    id: "lune-events",
    slug: "lune-events",
    title: "Lune Events",
    category: "Events",
    status: "Live demo",
    headline: "An art of celebration.",
    description:
      "An editorial site for celebrations, with gatherings, a journal, and a way to start planning.",
    tags: ["Events", "Editorial", "Website"],
    image: luneEvents,
    liveUrl: "https://luneevents.vercel.app/",
    featured: false,
    features: [
      "Stories and celebration experiences",
      "A journal and atelier",
      "An enquiry to start planning",
    ],
  },
  {
    id: "rif-drive",
    slug: "rif-drive",
    title: "Rif Drive",
    category: "Car Rental",
    status: "Live demo",
    headline: "Go your own way.",
    description:
      "A car rental site for the Rif, with a fleet, the story behind the drive, and a way to find a ride.",
    tags: ["Automotive", "Website", "Booking"],
    image: rifDrive,
    liveUrl: "https://rifdrive.vercel.app/",
    featured: false,
    features: [
      "A fleet you can browse",
      "The story of driving in the Rif",
      "A ride enquiry",
    ],
  },
  {
    id: "atelier-beaute",
    slug: "atelier-beaute",
    title: "Atelier Beauté",
    category: "Beauty Studio",
    status: "Live demo",
    headline: "Beauty, on your terms.",
    description:
      "A beauty studio site with rituals, selected work, and a booking path for a first visit.",
    tags: ["Beauty", "Studio", "Booking"],
    image: atelierBeaute,
    liveUrl: "https://atelierbeauty.vercel.app/",
    featured: false,
    features: [
      "Services and studio rituals",
      "A look at the work",
      "A booking enquiry",
    ],
  },
  {
    id: "riffit",
    slug: "riffit",
    title: "Riffit",
    category: "Fitness",
    status: "Live demo",
    headline: "Show up. Level up.",
    description:
      "A training club site with programs, a weekly schedule, coaches, and a first-session enquiry.",
    tags: ["Fitness", "Website", "Scheduling"],
    image: riffit,
    liveUrl: "https://riffit-two.vercel.app/",
    featured: false,
    features: [
      "Strength, conditioning, and mobility programs",
      "A weekly schedule and coach profiles",
      "A trial-session enquiry",
    ],
  },
  {
    id: "morrow",
    slug: "morrow",
    title: "Morrow",
    category: "Beauty & E-commerce",
    status: "Live demo",
    headline: "Beauty for every version of you.",
    description:
      "A shade-inclusive beauty shop with a clear product story and a bag for browsing the range.",
    tags: ["E-commerce", "Beauty", "Brand"],
    image: morrow,
    liveUrl: "https://morrow-self-tau.vercel.app/",
    featured: false,
    features: [
      "A shop built around everyday rituals",
      "Brand story",
      "A bag for the range",
    ],
  },
  {
    id: "noura",
    slug: "noura",
    title: "Noura",
    category: "Fashion & E-commerce",
    status: "Live demo",
    headline: "Modest by nature.",
    description:
      "A modest-fashion store for hijabs, abayas, and dresses, with collection browsing and checkout.",
    tags: ["E-commerce", "Fashion", "Catalog"],
    image: noura,
    liveUrl: "https://noura-tan-rho.vercel.app/",
    featured: false,
    features: [
      "Hijabs, abayas, and dresses",
      "Collection browsing with color options",
      "Bag and checkout",
    ],
  },
  {
    id: "rif-living",
    slug: "rif-living",
    title: "Rif Living",
    category: "Real Estate",
    status: "Live demo",
    headline: "Find your place in the Rif.",
    description:
      "A property site for buying or renting in the Rif, with filters for place, type, and budget.",
    tags: ["Real Estate", "Listings", "Search"],
    image: rifLiving,
    liveUrl: "https://rifliving.vercel.app/",
    featured: false,
    features: [
      "Homes to buy or rent",
      "Filters for location, type, and budget",
      "A path to list a property",
    ],
  },
  {
    id: "furry-friends",
    slug: "furry-friends",
    title: "Furry Friends",
    category: "Pets",
    status: "Live demo",
    headline: "Give a new life to furry friends.",
    description:
      "An adoption and rehoming site with pet search, care guidance, and a clear path for families.",
    tags: ["Marketplace", "Pets", "Search"],
    image: furryFriends,
    liveUrl: "https://furryfreinds.vercel.app/",
    featured: false,
    features: [
      "Adopt or rehome a pet",
      "Search by name, breed, or city",
      "Care guide and reviews",
    ],
  },
  {
    id: "miel-et-creme",
    slug: "miel-et-creme",
    title: "Miel & Crème",
    category: "Food & Hospitality",
    status: "Live demo",
    headline: "A little joy in every layer.",
    description:
      "A cake studio site with a product range, the house philosophy, and a custom-cake enquiry.",
    tags: ["Hospitality", "E-commerce", "Brand"],
    image: mielEtCreme,
    liveUrl: "https://miel-et-creme.vercel.app/",
    featured: false,
    features: [
      "A catalog of cakes and sweets",
      "The studio philosophy",
      "A custom-cake enquiry",
    ],
  },
  {
    id: "rif-adventures",
    slug: "rif-adventures",
    title: "Rif Adventures",
    category: "Tourism",
    status: "Live demo",
    headline: "The Mediterranean, from the Rif.",
    description:
      "A boat and diving site for Al Hoceima, with coastal trips, first dives, and booking by WhatsApp.",
    tags: ["Tourism", "Booking", "WhatsApp"],
    image: rifAdventures,
    liveUrl: "https://rif-adventures.vercel.app/",
    featured: false,
    features: [
      "Boat trips, snorkeling, and diving experiences",
      "Date and group size in one short request",
      "Confirmation on WhatsApp",
    ],
  },
  {
    id: "rif-business-desk",
    slug: "rif-business-desk",
    title: "Rif Business Desk",
    category: "Business Services",
    status: "Live demo",
    headline: "Your company, set up from the start.",
    description:
      "A business-creation desk for Al Hoceima, covering company setup, domiciliation, and administrative follow-up.",
    tags: ["Services", "Website", "Lead generation"],
    image: rifBusinessDesk,
    liveUrl: "https://rif-business-desk.vercel.app/",
    featured: false,
    features: [
      "Orientation for residents, MRE, and foreign investors",
      "SARL, SARL AU, and auto-entrepreneur paths",
      "A consultation request before the quote",
    ],
  },
  {
    id: "rif-academy",
    slug: "rif-academy",
    title: "Rif Academy",
    category: "Education",
    status: "Live demo",
    headline: "A useful skill, close to home.",
    description:
      "A training center site for languages, IT, office tools, and digital marketing, with sessions on site or online.",
    tags: ["Education", "Website", "Enrollment"],
    image: rifAcademy,
    liveUrl: "https://rif-academy.vercel.app/",
    featured: false,
    features: [
      "Short courses across four training areas",
      "Upcoming sessions with day, evening, and weekend options",
      "A place request the center confirms",
    ],
  },
  {
    id: "rif-autocare",
    slug: "rif-autocare",
    title: "Rif AutoCare",
    category: "Automotive",
    status: "Live demo",
    headline: "We look, we explain, then we repair.",
    description:
      "A garage site for mechanics and detailing in Al Hoceima, with clear packages and a quote request on WhatsApp.",
    tags: ["Automotive", "Services", "WhatsApp"],
    image: rifAutocare,
    liveUrl: "https://rif-autocare.vercel.app/",
    featured: false,
    features: [
      "Mechanics, tires, bodywork, and detailing",
      "Compare detailing packs with indicative prices",
      "A WhatsApp quote before any work starts",
    ],
  },
];

export const projectPath = (project) => `/work/${project.slug}`;

export const projectActionLabel = (project) =>
  project.liveUrl ? "View live demo" : "Explore concept";
