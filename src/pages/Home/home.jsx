import { AboutSection } from "./components/aboutSection";
import { useLocale } from "../../i18n/locale";
import { Contact } from "./components/contact";
import { FaqSection } from "./components/faqSection";
import { FirstSection } from "./components/firstSection";
import { ProcessSection } from "./components/processSection";
import { ServiceSection } from "./components/serviceSection";
import { WorkSection } from "./components/workSection";
import BrandStrip from "../../components/BrandStrip";
import PreFooterCta from "../../components/PreFooterCta";
import SeoHead from "../../components/SeoHead";

export const HomePage = () => {
  const { t } = useLocale();

  return (
    <>
      <SeoHead
        title={t.meta.homeTitle}
        description={t.meta.description}
        path="/"
      />
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
