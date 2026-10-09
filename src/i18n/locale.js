import { createContext, useContext } from "react";

export const LocaleContext = createContext(null);

export const LOCALE_CODES = ["en", "fr", "nl", "ar"];

export const LOCALE_LABELS = {
  en: "EN",
  fr: "FR",
  nl: "NL",
  ar: "AR",
};

export const LOCALE_NAMES = {
  en: "English",
  fr: "Français",
  nl: "Nederlands",
  ar: "العربية",
};

const DATE_LOCALES = {
  en: "en-GB",
  fr: "fr-FR",
  nl: "nl-NL",
  ar: "ar-MA",
};

export function detectLocale(pathname) {
  const segment = pathname.split("/")[1];
  return segment === "fr" || segment === "nl" || segment === "ar" ? segment : "en";
}

export function stripLocale(pathname) {
  const lang = detectLocale(pathname);
  if (lang === "en") return pathname || "/";
  const rest = pathname.slice(lang.length + 1);
  return rest === "" ? "/" : rest;
}

export function localizePath(pathname, hash, lang) {
  const bare = stripLocale(pathname || "/");
  const path = lang === "en" ? bare : bare === "/" ? `/${lang}` : `/${lang}${bare}`;
  return `${path}${hash || ""}`;
}

export function useLocale() {
  const value = useContext(LocaleContext);
  if (!value) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return value;
}

export function dateLocale(lang) {
  return DATE_LOCALES[lang] || "en-GB";
}
