import { useState } from "react";
import { Section, Eyebrow } from "../../../components/Section";
import { useLocale } from "../../../i18n/locale";

export const FaqSection = () => {
  const { t } = useLocale();
  const faqs = t.faq.items;
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <Section id="faq">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28">
          <Eyebrow>{t.faq.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-[34px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[44px] lg:text-[50px]">
            {t.faq.title}
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted sm:text-[16px]">
            {t.faq.intro}
          </p>
        </div>

        <div className="border-t border-white/[0.11]">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div key={faq.question} className="border-b border-white/[0.11]">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    className="flex w-full items-start justify-between gap-6 py-4 text-left sm:py-5"
                  >
                    <span className="text-[15px] font-medium leading-snug sm:text-[16px]">
                      {faq.question}
                    </span>
                    <span className="mt-0.5 text-lg leading-none text-teta" aria-hidden>
                      {open ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden" aria-hidden={!open}>
                    <p className="max-w-xl pb-5 pe-8 text-[14px] leading-relaxed text-muted sm:text-[15px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
