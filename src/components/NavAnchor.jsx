import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "../utils/scrollToSection";
import { stripLocale, useLocale } from "../i18n/locale";

const NavAnchor = ({ sectionId, children, className = "", onNavigate, style }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { to } = useLocale();
  const href = to(`/#${sectionId}`);

  const handleClick = (e) => {
    e.preventDefault();
    onNavigate?.();
    if (stripLocale(pathname) !== "/") {
      navigate(href);
      return;
    }
    scrollToSection(sectionId);
    document.getElementById(sectionId)?.focus({ preventScroll: true });
  };

  return (
    <a href={href} onClick={handleClick} className={className} style={style}>
      {children}
    </a>
  );
};

export default NavAnchor;
