import { Section, Eyebrow } from "../../../components/Section";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "We talk through the business problem, the people involved, and how the work happens today.",
  },
  {
    number: "02",
    title: "Define",
    description: "We agree on what will be built, why it matters, and the order of the work.",
  },
  {
    number: "03",
    title: "Build & Refine",
    description: "We design and develop in stages, reviewing progress with you as it takes shape.",
  },
  {
    number: "04",
    title: "Launch & Handover",
    description: "We test, launch, and walk you through the finished work. Ongoing support can be agreed separately.",
  },
];

export const ProcessSection = () => {
  return (
    <Section id="process">
      <Eyebrow>04 / How we work</Eyebrow>
      <h2 className="mt-4 max-w-[16ch] text-[34px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[44px] lg:text-[52px]">
        From idea to launch.
        <span className="block">A clear process.</span>
      </h2>

      <ol className="mt-12 lg:mt-16 lg:grid lg:grid-cols-4 lg:gap-8">
        {steps.map((step, index) => (
          <li key={step.number} className="relative pb-10 last:pb-0 lg:pb-0">
            <div className="flex items-start gap-5 lg:block">
              <div className="relative shrink-0">
                <span className="block text-[40px] font-semibold leading-none tracking-[-0.04em] text-teta lg:text-[46px]">
                  {step.number}
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
                    className="absolute left-[4.5rem] right-[-2rem] top-[22px] hidden h-px bg-white/15 lg:block"
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
