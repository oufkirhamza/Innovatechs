import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Section, Eyebrow } from "../../../components/Section";
import { SERVICES } from "../../../data/services";
import { scrollToSection } from "../../../utils/scrollToSection";
import { useLocale } from "../../../i18n/locale";

export const ServiceSection = () => {
  const { t } = useLocale();
  const [openId, setOpenId] = useState(null);

  const discuss = () => {
    scrollToSection("contact");
    window.setTimeout(() => {
      document.getElementById("contact-message")?.focus({ preventScroll: true });
    }, 400);
  };

  return (
    <Section id="services">
      <Eyebrow>{t.services.eyebrow}</Eyebrow>
      <h2 className="mt-4 max-w-[14ch] text-[34px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[44px] lg:text-[52px]">
        {t.services.title1}
        <span className="block">{t.services.title2}</span>
      </h2>

      <div className="mt-12 border-t border-white/[0.11] lg:mt-16">
        {SERVICES.map((service) => {
          const copy = t.services.items[service.id];
          const open = openId === service.id;
          const panelId = `service-panel-${service.id}`;
          return (
            <article
              key={service.id}
              id={`service-${service.id}`}
              tabIndex={-1}
              className="scroll-mt-[84px] border-b border-white/[0.11] outline-none"
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenId(open ? null : service.id)}
                  className={`group grid w-full grid-cols-[auto_1fr_auto] items-start gap-x-4 gap-y-2 py-7 text-left transition-colors sm:gap-x-6 lg:py-8 ${
                    open ? "bg-white/[0.03]" : "hover:bg-white/[0.03]"
                  }`}
                >
                  <span className="pt-2 text-[13px] tracking-[0.14em] text-teta">
                    {service.number}
                  </span>
                  <span className="text-[24px] font-semibold tracking-[-0.03em] transition-colors group-hover:text-teta sm:text-[28px]">
                    {copy.title}
                  </span>
                  <MdArrowOutward
                    aria-hidden
                    className={`mt-2 text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:text-teta ${
                      open ? "translate-x-1 text-teta" : ""
                    }`}
                  />
                  <span className="col-start-2 max-w-xl text-[15px] leading-relaxed text-muted">
                    {copy.description}
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-label={copy.title}
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden" aria-hidden={!open}>
                  <div className="grid grid-cols-[auto_1fr] gap-x-4 pb-7 sm:gap-x-6">
                    <span className="w-6 sm:w-7" aria-hidden />
                    <div className="max-w-xl">
                      <p className="text-[15px] leading-relaxed text-muted">{copy.detail}</p>
                      <button
                        type="button"
                        onClick={discuss}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-teta"
                        tabIndex={open ? 0 : -1}
                      >
                        {t.services.discuss} <MdArrowOutward aria-hidden />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
};
