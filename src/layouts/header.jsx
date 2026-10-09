import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdArrowOutward, MdClose, MdKeyboardArrowDown, MdLanguage } from "react-icons/md";
import { TbMenu2 } from "react-icons/tb";
import Logo from "../components/Logo";
import NavAnchor from "../components/NavAnchor";
import { scrollToSection } from "../utils/scrollToSection";
import { trackEvent } from "../utils/analytics";
import { LOCALE_CODES, LOCALE_NAMES, stripLocale, useLocale } from "../i18n/locale";

const NAV_ITEMS = [
  { id: "work", key: "work", to: "/work" },
  { id: "services", key: "services" },
  { id: "about", key: "about" },
  { id: "process", key: "process" },
  { id: "contact", key: "contact" },
];

const LanguageSwitch = ({ id, className = "", onNavigate, collapsed = false }) => {
  const { lang, t, switchTo } = useLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (collapsed) setOpen(false);
  }, [collapsed]);

  useEffect(() => {
    if (!open) return undefined;
    const onPointer = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex h-10 items-center gap-1.5 whitespace-nowrap rounded-[10px] border border-white/15 px-2.5 text-[13px] text-ink transition-colors hover:border-white/40 lg:gap-2 lg:px-3"
        aria-label={`${t.a11y.language}: ${LOCALE_NAMES[lang]}`}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
      >
        <MdLanguage aria-hidden className="text-[18px] text-muted" />
        <span>{t.a11y.language}</span>
        <MdKeyboardArrowDown
          aria-hidden
          className={`text-base text-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        id={id}
        role="group"
        aria-label={t.a11y.language}
        className={`absolute end-0 top-[calc(100%+8px)] z-50 min-w-[180px] overflow-hidden rounded-[10px] border border-white/15 bg-[#1c1928] py-1 ${
          open ? "" : "hidden"
        }`}
      >
        {LOCALE_CODES.map((code) => {
          const selected = code === lang;
          return (
            <Link
              key={code}
              to={switchTo(code)}
              hrefLang={code}
              lang={code}
              aria-current={selected ? "true" : undefined}
              onClick={() => {
                setOpen(false);
                onNavigate?.();
              }}
              className={`block px-3 py-2.5 text-[13px] transition-colors hover:bg-white/[0.04] ${
                selected ? "text-teta" : "text-ink"
              }`}
            >
              {LOCALE_NAMES[code]}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef(null);
  const panelRef = useRef(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { t, to, isHome } = useLocale();
  const barePath = stripLocale(pathname);

  const closeMenu = () => setIsOpen(false);

  const goHome = () => {
    closeMenu();
    if (isHome) {
      scrollToSection("hero");
      return;
    }
    navigate(to("/"));
  };

  const talk = (location) => {
    trackEvent("cta_click", { location, label: "lets_talk" });
    closeMenu();
    if (isHome) {
      scrollToSection("contact");
      document.getElementById("contact")?.focus({ preventScroll: true });
      return;
    }
    navigate(to("/#contact"));
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
          className="flex min-w-0 items-center gap-2.5 justify-self-start"
          aria-label={t.a11y.home}
        >
          <Logo variant="mark" className="h-9 w-9 shrink-0 min-[380px]:hidden" />
          <Logo variant="lockup" className="hidden h-7 w-auto shrink-0 min-[380px]:block lg:h-10" />
        </button>

        <nav aria-label={t.a11y.mainNav} className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) =>
            item.to ? (
              <Link
                key={item.id}
                to={to(item.to)}
                className={linkClass(barePath.startsWith(item.to))}
                aria-current={barePath.startsWith(item.to) ? "page" : undefined}
              >
                {t.nav[item.key]}
              </Link>
            ) : (
              <NavAnchor key={item.id} sectionId={item.id} className={linkClass(false)}>
                {t.nav[item.key]}
              </NavAnchor>
            )
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-2 justify-self-end lg:gap-3">
          <LanguageSwitch id="language-menu" />
          <button
            type="button"
            onClick={() => talk("header")}
            className="btn btn-primary btn-sm hidden md:inline-flex"
          >
            {t.nav.talk} <MdArrowOutward aria-hidden />
          </button>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/15 lg:hidden"
            aria-label={isOpen ? t.a11y.closeMenu : t.a11y.openMenu}
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
        <nav aria-label={t.a11y.mobileNav} className="shell flex h-full flex-col pt-6">
          {NAV_ITEMS.map((item) =>
            item.to ? (
              <Link
                key={item.id}
                to={to(item.to)}
                onClick={closeMenu}
                className="border-b border-white/10 py-4 text-[28px] font-medium tracking-tight"
                aria-current={barePath.startsWith(item.to) ? "page" : undefined}
              >
                {t.nav[item.key]}
              </Link>
            ) : (
              <NavAnchor
                key={item.id}
                sectionId={item.id}
                onNavigate={closeMenu}
                className="border-b border-white/10 py-4 text-[28px] font-medium tracking-tight"
              >
                {t.nav[item.key]}
              </NavAnchor>
            )
          )}
          <button
            type="button"
            onClick={() => talk("mobile_menu")}
            className="btn btn-primary mt-8 w-full"
          >
            {t.nav.talk} <MdArrowOutward aria-hidden />
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;
