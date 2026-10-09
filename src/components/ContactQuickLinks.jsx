import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import { SITE } from "../constants/site";

const ContactQuickLinks = ({ className = "" }) => {
  const whatsappHref = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi Innovatechs!")}`;

  const links = [
    {
      href: `mailto:${SITE.email}`,
      icon: FaEnvelope,
      label: SITE.email,
      external: false,
    },
    {
      href: `tel:${SITE.phone}`,
      icon: FaPhone,
      label: SITE.phoneDisplay,
      external: false,
    },
    {
      href: whatsappHref,
      icon: FaWhatsapp,
      label: "WhatsApp",
      external: true,
    },
  ];

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {links.map((link) => {
        const Icon = link.icon;
        const props = link.external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {};
        return (
          <a
            key={link.label}
            href={link.href}
            {...props}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#f5f5f530] text-sm hover:border-teta hover:bg-[#f5f5f508] transition-colors"
          >
            <Icon className={link.label === "WhatsApp" ? "text-[#25D366]" : "text-teta"} />
            <span className="truncate max-w-[200px]">{link.label}</span>
          </a>
        );
      })}
    </div>
  );
};

export default ContactQuickLinks;
