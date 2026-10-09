import { Section, Eyebrow } from "../../../components/Section";
import { useLocale } from "../../../i18n/locale";

const NUMBERS = ["01", "02", "03", "04"];

export const ProcessSection = () => {
  const { t } = useLocale();
  const steps = t.process.steps;
  return (
    <Section id="process">
      <Eyebrow>{t.process.eyebrow}</Eyebrow>
      <h2 className="mt-4 max-w-[16ch] text-[34px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[44px] lg:text-[52px]">
        {t.process.title1}
        <span className="block">{t.process.title2}</span>
      </h2>

      <ol className="mt-12 lg:mt-16 lg:grid lg:grid-cols-4 lg:gap-8">
        {steps.map((step, index) => (
          <li key={NUMBERS[index]} className="relative pb-10 last:pb-0 lg:pb-0">
            <div className="flex items-start gap-5 lg:block">
              <div className="relative shrink-0">
                <span className="block text-[40px] font-semibold leading-none tracking-[-0.04em] text-teta lg:text-[46px]">
                  {NUMBERS[index]}
                </span>
                {index < steps.length - 1 && (
                  <span
                    className="absolute left-1/2 top-full h-10 w-px -translate-x-1/2 bg-white/15 lg:hidden"
                    aria-hidden
                  />
                )}
              </div>
              <div className="pt-1 lg:pt-6">
                {index < steps.length - 1 && (
                  <span
                    className="absolute start-[4.5rem] end-[-2rem] top-[22px] hidden h-px bg-white/15 lg:block"
                    aria-hidden
                  />
                )}
                <h3 className="text-[20px] font-semibold tracking-[-0.02em] lg:text-[22px]">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[32ch] text-[14px] leading-relaxed text-muted lg:text-[15px]">
                  {step.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};
