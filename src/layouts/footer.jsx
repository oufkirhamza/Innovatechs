import { Link } from "react-router-dom";
import { TiSocialTwitter } from "react-icons/ti";
import {
  FaInstagramSquare,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import Logo from "../components/Logo";
import NavAnchor from "../components/NavAnchor";
import { SITE, SOCIAL } from "../constants/site";
import { SERVICES } from "../data/services";

const NAV_LINKS = [
  { id: "services", label: "Services" },
  { id: "about", label: "Why Us" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  { href: SOCIAL.linkedin, label: "LinkedIn", icon: FaLinkedin },
  { href: SOCIAL.github, label: "GitHub", icon: FaGithub },
  { href: SOCIAL.instagram, label: "Instagram", icon: FaInstagramSquare },
  { href: SOCIAL.facebook, label: "Facebook", icon: FaFacebook },
  { href: SOCIAL.twitter, label: "Twitter", icon: TiSocialTwitter },
].filter((item) => item.href);

const Footer = () => {
  const whatsappHref = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi Innovatechs!")}`;

  const backToTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <footer className="border-t border-white/10">
      <div className="shell py-14 lg:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link to="/" className="flex w-fit items-center gap-2.5 text-left">
              <Logo className="h-8 w-8 shrink-0" />
              <span className="text-lg font-semibold tracking-tight">{SITE.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {SITE.tagline}
            </p>
            {SOCIAL_LINKS.length > 0 && (
              <div className="mt-5 flex gap-2">
                {SOCIAL_LINKS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="inline-flex h-9 w-9 items-center justify-center border border-white/15 text-ink hover:border-teta hover:text-teta"
                    >
                      <Icon aria-hidden />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow">Navigate</p>
            <nav aria-label="Footer navigation" className="mt-4 flex flex-col gap-2.5">
              <Link to="/work" className="w-fit text-sm text-ink/85 transition-colors hover:text-teta">
                Work
              </Link>
              {NAV_LINKS.map((link) => (
                <NavAnchor
                  key={link.id}
                  sectionId={link.id}
                  className="w-fit text-sm text-ink/85 transition-colors hover:text-teta"
                >
                  {link.label}
                </NavAnchor>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow">Services</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <NavAnchor
                    sectionId={`service-${service.id}`}
                    className="text-sm text-ink/85 transition-colors hover:text-teta"
                  >
                    {service.title}
                  </NavAnchor>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink/85">
              <li>{SITE.location}</li>
              <li>
                <a href={`mailto:${SITE.email}`} className="break-all transition-colors hover:text-teta">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone}`} className="transition-colors hover:text-teta">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-teta"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col items-start justify-between gap-3 py-5 text-[13px] text-muted sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link to="/privacy" className="transition-colors hover:text-teta">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-teta">
              Terms of Service
            </Link>
            <button type="button" onClick={backToTop} className="transition-colors hover:text-teta">
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
