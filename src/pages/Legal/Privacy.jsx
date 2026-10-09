import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SITE } from "../../constants/site";
import { dateLocale, useLocale } from "../../i18n/locale";

const Privacy = () => {
  const { t, to, lang } = useLocale();

  useEffect(() => {
    document.title = `${t.legal.privacyTitle} | Innovatechs`;
  }, [t.legal.privacyTitle]);

  return (
  <article className="shell min-h-[60vh] py-16">
    <Link to={to("/")} className="text-teta hover:underline text-sm">
      {t.legal.back}
    </Link>
    <h1 className="text-4xl font-bold mt-6 mb-4">{t.legal.privacyTitle}</h1>
    <p className="text-[#f5f5f5b4] mb-6 max-w-3xl leading-relaxed">
      {t.legal.updated}{" "}
      {new Date().toLocaleDateString(dateLocale(lang), { month: "long", year: "numeric" })}
    </p>
    <div className="max-w-3xl space-y-6 text-[#f5f5f5cc] leading-relaxed">
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">{t.privacy.whoTitle}</h2>
        <p>
          {SITE.name} {t.privacy.who}{" "}
          <a href={`mailto:${SITE.email}`} className="text-teta hover:underline">
            {SITE.email}
          </a>
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">{t.privacy.collectTitle}</h2>
        <p>
          {t.privacy.collect}
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">{t.privacy.useTitle}</h2>
        <p>
          {t.privacy.use}
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">{t.privacy.analyticsTitle}</h2>
        <p>
          {t.privacy.analytics}
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">{t.privacy.rightsTitle}</h2>
        <p>
          {t.privacy.rightsBefore}{" "}
          <a href={`mailto:${SITE.email}`} className="text-teta hover:underline">
            {SITE.email}
          </a>
          .
        </p>
      </section>
    </div>
  </article>
  );
};

export default Privacy;
