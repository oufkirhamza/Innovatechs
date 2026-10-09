import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import en from "./en";
import fr from "./fr";
import nl from "./nl";
import ar from "./ar";
import { LocaleContext, detectLocale, localizePath, stripLocale } from "./locale";

const MESSAGES = { en, fr, nl, ar };

const HTML_LANG = { en: "en", fr: "fr", nl: "nl", ar: "ar" };

const LocaleProvider = ({ children }) => {
  const location = useLocation();
  const lang = detectLocale(location.pathname);

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang];
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const value = useMemo(() => {
    const t = MESSAGES[lang];
    return {
      lang,
      t,
      homePath: lang === "en" ? "/" : `/${lang}`,
      to: (path) => {
        const hashIndex = path.indexOf("#");
        const hash = hashIndex >= 0 ? path.slice(hashIndex) : "";
        const bare = hashIndex >= 0 ? path.slice(0, hashIndex) || "/" : path;
        return localizePath(bare, hash, lang);
      },
      switchTo: (nextLang) => localizePath(location.pathname, location.hash, nextLang),
      isHome: stripLocale(location.pathname) === "/",
    };
  }, [lang, location.pathname, location.hash]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export default LocaleProvider;
