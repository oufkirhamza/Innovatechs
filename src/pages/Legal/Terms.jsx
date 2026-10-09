import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SITE } from "../../constants/site";
import { dateLocale, useLocale } from "../../i18n/locale";

const Terms = () => {
  const { t, to, lang } = useLocale();

  useEffect(() => {
    document.title = `${t.legal.termsTitle} | Innovatechs`;
  }, [t.legal.termsTitle]);

  return (
  <article className="shell min-h-[60vh] py-16">
    <Link to={to("/")} className="text-teta hover:underline text-sm">
      {t.legal.back}
    </Link>
    <h1 className="text-4xl font-bold mt-6 mb-4">{t.legal.termsTitle}</h1>
    <p className="text-[#f5f5f5b4] mb-6 max-w-3xl leading-relaxed">
      {t.legal.updated}{" "}
      {new Date().toLocaleDateString(dateLocale(lang), { month: "long", year: "numeric" })}
    </p>
    <div className="max-w-3xl space-y-6 text-[#f5f5f5cc] leading-relaxed">
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">{t.terms.servicesTitle}</h2>
        <p>
          {SITE.name} {t.terms.services}
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">{t.terms.paymentTitle}</h2>
        <p>
          {t.terms.payment}
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">{t.terms.ipTitle}</h2>
        <p>
          {t.terms.ipBefore} {SITE.name} {t.terms.ipAfter}
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">{t.terms.limitTitle}</h2>
        <p>
          {t.terms.limit}
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">{t.terms.contactTitle}</h2>
        <p>
          {t.terms.questions}{" "}
          <a href={`mailto:${SITE.email}`} className="text-teta hover:underline">
            {SITE.email}
          </a>{" "}
          · {SITE.phoneDisplay}
        </p>
      </section>
    </div>
  </article>
  );
};

export default Terms;
