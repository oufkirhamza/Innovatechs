import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocale } from "../i18n/locale";

const NotFound = () => {
  const { t, to } = useLocale();

  useEffect(() => {
    document.title = `${t.notFound.title} | Innovatechs`;
  }, [t.notFound.title]);

  return (
    <div className="shell flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-teta text-8xl font-bold">404</p>
      <h1 className="text-3xl font-semibold mt-4">{t.notFound.title}</h1>
      <p className="text-[#f5f5f5b4] mt-3 max-w-md">
        {t.notFound.body}
      </p>
      <div className="flex flex-wrap gap-4 mt-10 justify-center">
        <Link
          to={to("/")}
          className="btn btn-primary"
        >
          {t.notFound.home}
        </Link>
        <Link
          to={to("/#contact")}
          className="btn btn-secondary"
        >
          {t.notFound.contact}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
