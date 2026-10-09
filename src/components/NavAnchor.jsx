import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "../utils/scrollToSection";

const NavAnchor = ({ sectionId, children, className = "", onNavigate, style }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    onNavigate?.();
    if (pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }
    scrollToSection(sectionId);
    document.getElementById(sectionId)?.focus({ preventScroll: true });
  };

  return (
    <a href={`/#${sectionId}`} onClick={handleClick} className={className} style={style}>
      {children}
    </a>
  );
};

export default NavAnchor;
