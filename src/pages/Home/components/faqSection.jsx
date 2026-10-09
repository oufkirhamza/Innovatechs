import { useState } from "react";
import { Section, Eyebrow } from "../../../components/Section";

const faqs = [
  {
    question: "What types of projects can you help with?",
    answer:
      "We help with websites, online stores, custom applications, internal tools, integrations and practical automation. We review scope and feasibility with you before committing to a proposal.",
  },
  {
    question: "I have a business problem but no technical specification. Can you help?",
    answer:
      "Yes. Discovery starts with your goals and current workflow. Together we define a realistic solution and a clear scope before development begins.",
  },
  {
    question: "Can you improve an existing website or application?",
    answer:
      "Yes. We first review the existing system and the changes you need, then agree what to improve, connect or rebuild within a clear plan.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Pricing depends on scope, complexity and integrations. After we discuss your needs, we send a written proposal — we do not publish one-size-fits-all prices.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Timelines are agreed after scoping. Duration depends on the work involved, your feedback cycles and any third-party systems we need to connect.",
  },
  {
    question: "Do you work remotely?",
    answer:
      "Yes. We collaborate with clients across Morocco and internationally through calls, written updates and agreed milestones.",
  },
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <Section id="faq">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28">
          <Eyebrow>05 / Questions</Eyebrow>
          <h2 className="mt-4 text-[34px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[44px] lg:text-[50px]">
            Things you might be wondering.
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted sm:text-[16px]">
            A few things worth knowing before you write to us. We work remotely with clients in
            Morocco and elsewhere. Support after launch can be agreed separately, and we suggest
            AI only when it solves a clear problem.
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
                    <p className="max-w-xl pb-5 pr-8 text-[14px] leading-relaxed text-muted sm:text-[15px]">
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
