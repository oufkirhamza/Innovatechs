export const SITE = {
  name: "Innovatechs",
  tagline:
    "Morocco-based studio for websites, custom applications and practical AI automation.",
  email: "Innovatechs.solution@gmail.com",
  phone: "+212699312362",
  phoneDisplay: "+212 699 312 362",
  whatsapp: "212699312362",
  /** Neutral service area — no unverified street address or office map. */
  location: "Morocco · Remote collaboration",
  countryCode: "MA",
};

export const SOCIAL = {
  twitter: process.env.REACT_APP_SOCIAL_TWITTER || "",
  instagram:
    process.env.REACT_APP_SOCIAL_INSTAGRAM || "https://www.instagram.com/innovatechs/",
  facebook:
    process.env.REACT_APP_SOCIAL_FACEBOOK ||
    "https://www.facebook.com/profile.php?id=61596532763486",
  linkedin: process.env.REACT_APP_SOCIAL_LINKEDIN || "",
  github: process.env.REACT_APP_SOCIAL_GITHUB || "",
};

/** Public profiles used for Organization sameAs (GEO entity consistency). */
export const SAME_AS = Object.values(SOCIAL).filter(Boolean);
