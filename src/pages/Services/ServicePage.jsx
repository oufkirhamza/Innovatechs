import { Link, Navigate, useParams } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import SeoHead from "../../components/SeoHead";
import { SERVICE_SLUGS } from "../../constants/seo";
import { SERVICES } from "../../data/services";
import { useLocale } from "../../i18n/locale";

const ServicePage = () => {
  const { slug } = useParams();
  const { t, to } = useLocale();

  if (!SERVICE_SLUGS.includes(slug)) {
    return <Navigate to={to("/services")} replace />;
  }

  const service = SERVICES.find((item) => item.id === slug);
  const page = t.servicePages[slug];
  const others = SERVICES.filter((item) => item.id !== slug);

  return (
    <>
      <SeoHead
        title={page.documentTitle}
        description={page.metaDescription}
        path={`/services/${slug}`}
      />
      <article className="shell pb-16 pt-12 sm:pt-16 lg:pb-24 lg:pt-20">
        <Link
          to={to("/services")}
          className="text-sm text-muted transition-colors hover:text-teta"
        >
          {t.servicePages.back}
        </Link>

        <p className="eyebrow mt-8">{page.eyebrow}</p>
        <h1 className="mt-4 max-w-[16ch] text-[40px] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-[52px] lg:text-[60px]">
          {page.title}
        </h1>
        <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-muted sm:text-[17px]">
          {page.intro}
        </p>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink/85">
          {page.lead}
        </p>
        <p className="mt-5 text-sm text-teta">{t.servicePages.basedIn}</p>

        <div className="mt-14 grid gap-10 border-t border-white/[0.11] pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="space-y-10">
            {page.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-[22px] font-semibold tracking-[-0.02em] sm:text-[24px]">
                  {section.title}
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <aside className="border border-white/[0.11] bg-white/[0.02] p-6 sm:p-8 lg:self-start">
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-teta">
              {service.number} · {t.services.items[slug].title}
            </p>
            <ul className="mt-5 space-y-3">
              {page.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-3 text-[15px] leading-snug text-ink/90"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teta" aria-hidden />
                  {bullet}
                </li>
              ))}
            </ul>
            <Link to={to("/#contact")} className="btn btn-primary mt-8 w-full sm:w-auto">
              {t.servicePages.ctaButton} <MdArrowOutward aria-hidden />
            </Link>
          </aside>
        </div>

        <div className="mt-16 border-t border-white/[0.11] pt-10">
          <h2 className="text-[22px] font-semibold tracking-[-0.02em]">
            {t.servicePages.ctaTitle}
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
            {t.servicePages.ctaBody}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to={to("/#contact")} className="btn btn-primary">
              {t.servicePages.ctaButton} <MdArrowOutward aria-hidden />
            </Link>
            <Link to={to("/work")} className="btn btn-secondary">
              {t.nav.work}
            </Link>
          </div>
        </div>

        <div className="mt-16 border-t border-white/[0.11] pt-10">
          <p className="eyebrow">{t.nav.services}</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <li key={item.id}>
                <Link
                  to={to(`/services/${item.id}`)}
                  className="group flex items-center justify-between gap-3 border border-white/[0.11] px-4 py-3 text-sm transition-colors hover:border-teta hover:text-teta"
                >
                  {t.services.items[item.id].title}
                  <MdArrowOutward
                    aria-hidden
                    className="shrink-0 opacity-60 transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </>
  );
};

export default ServicePage;
