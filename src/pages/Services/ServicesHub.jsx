import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import SeoHead from "../../components/SeoHead";
import { SERVICES } from "../../data/services";
import { useLocale } from "../../i18n/locale";

const ServicesHub = () => {
  const { t, to } = useLocale();
  const hub = t.servicePages.hub;

  return (
    <>
      <SeoHead
        title={hub.documentTitle}
        description={hub.metaDescription}
        path="/services"
      />
      <div className="shell pb-16 pt-12 sm:pt-16 lg:pb-24 lg:pt-20">
        <p className="eyebrow">{hub.eyebrow}</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1.35fr_0.85fr] lg:items-end">
          <h1 className="max-w-[16ch] text-[40px] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-[52px] lg:text-[60px]">
            {hub.title}
          </h1>
          <p className="max-w-md text-[15px] leading-relaxed text-muted sm:text-[16px] lg:pb-2">
            {hub.intro}
          </p>
        </div>

        <p className="mt-8 text-sm text-teta">{t.servicePages.basedIn}</p>

        <div className="mt-14 border-t border-white/[0.11] lg:mt-16">
          {SERVICES.map((service) => {
            const copy = t.services.items[service.id];
            const page = t.servicePages[service.id];
            return (
              <article key={service.id} className="border-b border-white/[0.11]">
                <Link
                  to={to(`/services/${service.id}`)}
                  className="group grid gap-3 py-8 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-6 sm:py-10"
                >
                  <span className="text-[13px] tracking-[0.14em] text-teta">
                    {service.number}
                  </span>
                  <div>
                    <h2 className="text-[24px] font-semibold tracking-[-0.03em] transition-colors group-hover:text-teta sm:text-[28px]">
                      {copy.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
                      {page?.intro || copy.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors group-hover:text-teta sm:mt-2">
                    {t.servicePages.learnMore}
                    <MdArrowOutward
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/[0.11] pt-10 sm:flex-row sm:items-center">
          <p className="max-w-md text-[15px] leading-relaxed text-muted">
            {t.servicePages.ctaBody}
          </p>
          <Link to={to("/#contact")} className="btn btn-primary">
            {t.servicePages.ctaButton} <MdArrowOutward aria-hidden />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServicesHub;
