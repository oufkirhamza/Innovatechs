import { Section, Eyebrow } from "../../../components/Section";
import { useLocale } from "../../../i18n/locale";

const NUMBERS = ["01", "02", "03"];

export const AboutSection = () => {
  const { t } = useLocale();
  return (
    <Section id="about">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20">
        <div>
          <Eyebrow>{t.about.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-[34px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[44px] lg:text-[50px]">
            {t.about.title}
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted sm:text-[16px]">
            {t.about.body}
          </p>
        </div>

        <div className="border-t border-white/[0.11]">
          {t.about.reasons.map((reason, index) => (
            <article key={NUMBERS[index]} className="border-b border-white/[0.11] py-6 lg:py-7">
              <div className="grid grid-cols-[auto_1fr] gap-5">
                <span className="pt-1 text-[13px] tracking-[0.14em] text-teta">{NUMBERS[index]}</span>
                <div>
                  <h3 className="text-[22px] font-semibold tracking-[-0.02em] sm:text-[24px]">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{reason.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
};
