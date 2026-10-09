import { Section, Eyebrow } from "../../../components/Section";

const reasons = [
  {
    number: "01",
    title: "Direct communication",
    description: "Work directly with the people designing and building your solution.",
  },
  {
    number: "02",
    title: "Clear scope",
    description: "Know what's being built, why it matters, and what happens next.",
  },
  {
    number: "03",
    title: "Built for everyday use",
    description: "Useful, reliable tools designed for real business workflows.",
  },
];

export const AboutSection = () => {
  return (
    <Section id="about">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20">
        <div>
          <Eyebrow>03 / Why Innovatechs</Eyebrow>
          <h2 className="mt-4 text-[34px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[44px] lg:text-[50px]">
            Good technology starts with understanding people.
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted sm:text-[16px]">
            We work closely with businesses to understand what they need, then design practical
            digital solutions around their goals.
          </p>
        </div>

        <div className="border-t border-white/[0.11]">
          {reasons.map((reason) => (
            <article key={reason.number} className="border-b border-white/[0.11] py-6 lg:py-7">
              <div className="grid grid-cols-[auto_1fr] gap-5">
                <span className="pt-1 text-[13px] tracking-[0.14em] text-teta">{reason.number}</span>
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
