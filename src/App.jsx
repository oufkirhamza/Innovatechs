import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { HomePage } from "./pages/Home/home";
import WorkPage from "./pages/Work/Work";
import ProjectPage from "./pages/Work/Project";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Legal/Privacy";
import Terms from "./pages/Legal/Terms";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import WhatsAppButton from "./components/WhatsAppButton";
import SkipToContent from "./components/SkipToContent";
import StructuredData from "./components/StructuredData";
import LocaleProvider from "./i18n/LocaleProvider";
import { stripLocale } from "./i18n/locale";
import { initAnalytics } from "./utils/analytics";
import { scrollToSection } from "./utils/scrollToSection";

const HashScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (stripLocale(pathname) === "/" && hash) {
      const id = hash.replace("#", "");
      const timer = window.setTimeout(() => scrollToSection(id), 80);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash]);

  return null;
};

function App() {
  const location = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  const routedLocation = {
    ...location,
    pathname: stripLocale(location.pathname),
  };

  return (
    <LocaleProvider>
      <SkipToContent />
      <StructuredData />
      <HashScrollHandler />
      <Header />
      <main id="main">
        <Routes location={routedLocation}>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<ProjectPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </LocaleProvider>
  );
}

export default App;
