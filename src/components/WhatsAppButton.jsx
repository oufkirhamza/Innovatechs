import { FaWhatsapp } from "react-icons/fa";
import { SITE } from "../constants/site";
import { trackEvent } from "../utils/analytics";

const WhatsAppButton = () => {
  const message = encodeURIComponent(
    "Hi Innovatechs! I'd like to discuss a project."
  );
  const href = `https://wa.me/${SITE.whatsapp}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("cta_click", { location: "floating", label: "whatsapp" })}
      className="fixed bottom-6 right-6 z-30 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 hover:scale-105 transition-transform max-lg:bottom-20"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default WhatsAppButton;
