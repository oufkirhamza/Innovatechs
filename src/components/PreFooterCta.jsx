import Star from "./Star";
import { scrollToSection } from "../utils/scrollToSection";
import { trackEvent } from "../utils/analytics";
import { SITE } from "../constants/site";
import { useLocale } from "../i18n/locale";

const PreFooterCta = () => {
  const { t } = useLocale();
  const whatsappHref = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    t.contact.whatsappText
  )}`;

  return (
    <section aria-label={t.a11y.cta} className="pb-14 sm:pb-16 lg:pb-[4.25rem]">
      <div className="shell">
        <div className="relative overflow-hidden bg-[#241c3d] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 h-full w-[70%] bg-[radial-gradient(circle_at_75%_40%,rgba(92,69,253,0.42),transparent_62%)]"
          />
          <Star
            className="pointer-events-none absolute -bottom-10 -right-6 h-48 w-48 opacity-[0.14] sm:h-64 sm:w-64"
          />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-[40px] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-[52px] lg:text-[64px]">
              {t.cta.line1}
              <span className="block">{t.cta.line2}</span>
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#d9d4e6] sm:text-[16px]">
              {t.cta.body}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={() => {
                  trackEvent("cta_click", { location: "pre_footer", label: "discuss_project" });
                  scrollToSection("contact");
                }}
                className="btn btn-light"
              >
                {t.cta.discuss}
              </button>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("cta_click", { location: "pre_footer", label: "whatsapp" })}
                className="btn border border-white/30 text-ink hover:border-white/60"
              >
                {t.cta.whatsapp} {SITE.name}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreFooterCta;
