import { AboutSection } from "./components/aboutSection";
import { Contact } from "./components/contact";
import { FaqSection } from "./components/faqSection";
import { FirstSection } from "./components/firstSection";
import { ProcessSection } from "./components/processSection";
import { ServiceSection } from "./components/serviceSection";
import { WorkSection } from "./components/workSection";
import BrandStrip from "../../components/BrandStrip";
import PreFooterCta from "../../components/PreFooterCta";

export const HomePage = () => {
  return (
    <>
      <FirstSection />
      <BrandStrip />
      <WorkSection />
      <ServiceSection />
      <AboutSection />
      <ProcessSection />
      <FaqSection />
      <PreFooterCta />
      <Contact />
    </>
  );
};
