import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdArrowOutward, MdClose } from "react-icons/md";
import { TbMenu2 } from "react-icons/tb";
import Logo from "../components/Logo";
import NavAnchor from "../components/NavAnchor";
import { scrollToSection } from "../utils/scrollToSection";
import { trackEvent } from "../utils/analytics";
import { SITE } from "../constants/site";

const NAV_ITEMS = [
  { id: "work", label: "Work", to: "/work" },
  { id: "services", label: "Services" },
  { id: "about", label: "Why Us" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef(null);
  const panelRef = useRef(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setIsOpen(false);

  const goHome = () => {
    closeMenu();
    if (pathname === "/") {
      scrollToSection("hero");
      return;
    }
    navigate("/");
  };

  const talk = (location) => {
    trackEvent("cta_click", { location, label: "lets_talk" });
    closeMenu();
    if (pathname === "/") {
      scrollToSection("contact");
      document.getElementById("contact")?.focus({ preventScroll: true });
      return;
    }
    navigate("/#contact");
  };

  const linkClass = (active) =>
    `text-[13px] tracking-wide transition-colors hover:text-ink ${active ? "text-ink" : "text-muted"}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return undefined;
    panel.inert = !isOpen;
    if (!isOpen) return undefined;

    const menuButton = menuButtonRef.current;
    const getItems = () => [...panel.querySelectorAll("a, button")];
    const timer = window.setTimeout(() => getItems()[0]?.focus(), 30);

    const onKey = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        menuButton?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const items = getItems();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-white/10 bg-alpha/80 backdrop-blur-md"
          : "border-white/[0.08] bg-transparent"
      }`}
    >
      <div className="shell flex h-[72px] items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <button
          type="button"
          onClick={goHome}
          className="flex items-center gap-2.5 justify-self-start"
          aria-label={`${SITE.name} home`}
        >
          <Logo className="h-8 w-8" />
          <span className="text-[15px] font-semibold tracking-tight">{SITE.name}</span>
        </button>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) =>
            item.to ? (
              <Link
                key={item.id}
                to={item.to}
                className={linkClass(pathname.startsWith(item.to))}
                aria-current={pathname.startsWith(item.to) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ) : (
              <NavAnchor key={item.id} sectionId={item.id} className={linkClass(false)}>
                {item.label}
              </NavAnchor>
            )
          )}
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <button
            type="button"
            onClick={() => talk("header")}
            className="btn btn-primary btn-sm hidden md:inline-flex"
          >
            Let&apos;s talk <MdArrowOutward aria-hidden />
          </button>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-white/15 lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <MdClose className="text-xl" /> : <TbMenu2 className="text-xl" />}
          </button>
        </div>
      </div>
    </header>

      <div
        id="mobile-nav"
        ref={panelRef}
        className={`fixed inset-0 top-[72px] z-40 bg-alpha transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <nav aria-label="Mobile navigation" className="shell flex h-full flex-col pt-6">
          {NAV_ITEMS.map((item) =>
            item.to ? (
              <Link
                key={item.id}
                to={item.to}
                onClick={closeMenu}
                className="border-b border-white/10 py-4 text-[28px] font-medium tracking-tight"
                aria-current={pathname.startsWith(item.to) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ) : (
              <NavAnchor
                key={item.id}
                sectionId={item.id}
                onNavigate={closeMenu}
                className="border-b border-white/10 py-4 text-[28px] font-medium tracking-tight"
              >
                {item.label}
              </NavAnchor>
            )
          )}
          <button
            type="button"
            onClick={() => talk("mobile_menu")}
            className="btn btn-primary mt-8 w-full"
          >
            Let&apos;s talk <MdArrowOutward aria-hidden />
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;
