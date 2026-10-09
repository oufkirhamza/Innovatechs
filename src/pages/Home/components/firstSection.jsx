import { MdArrowOutward } from "react-icons/md";
import { HeroComposition } from "../../../components/mockups/ConceptMockups";
import { scrollToSection } from "../../../utils/scrollToSection";
import { trackEvent } from "../../../utils/analytics";

export const FirstSection = () => {
  return (
    <section
      id="hero"
      tabIndex={-1}
      className="scroll-mt-[72px] outline-none"
    >
      <div className="shell flex min-h-0 flex-col justify-center pb-14 pt-8 sm:pb-16 sm:pt-10 lg:min-h-[650px] lg:pb-16 lg:pt-6">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] lg:gap-8">
          <div className="max-w-[40rem]">
            <p className="hero-eyebrow eyebrow">Independent creative technology studio</p>
            <h1 className="hero-title mt-5 text-[42px] font-bold leading-[1.02] tracking-[-0.04em] sm:text-[48px] lg:text-[68px] xl:text-[76px]">
              <span className="block">Websites,</span>
              <span className="block">software &amp; AI</span>
              <span className="block">solutions for</span>
              <span className="block">
                your <span className="text-teta">business.</span>
              </span>
            </h1>
            <p className="hero-copy mt-6 max-w-[34rem] text-[15px] leading-relaxed text-muted sm:text-[16px]">
              We design and build websites, digital products, and intelligent tools that help
              businesses grow, work smarter, and stand out.
            </p>
            <div className="hero-actions mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={() => {
                  trackEvent("cta_click", { location: "hero", label: "explore_work" });
                  scrollToSection("work");
                }}
                className="btn btn-primary"
              >
                Explore our work <MdArrowOutward aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => {
                  trackEvent("cta_click", { location: "hero", label: "start_project" });
                  scrollToSection("contact");
                }}
                className="btn btn-secondary"
              >
                Start a project
              </button>
            </div>
            <p className="hero-note mt-6 text-[13px] text-muted">
              Based in Morocco. Working beyond borders.
            </p>
          </div>

          <HeroComposition />
        </div>
      </div>
    </section>
  );
};
