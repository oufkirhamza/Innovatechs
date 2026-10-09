import { useLocale } from "../i18n/locale";

const SkipToContent = () => {
  const { t } = useLocale();
  return (
  <a
    href="#main"
    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-teta focus:text-white focus:rounded-lg focus:outline-none"
  >
    {t.a11y.skip}
  </a>
  );
};

export default SkipToContent;
