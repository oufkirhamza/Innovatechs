import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { ProjectPreview } from "../../components/mockups/ConceptMockups";
import { PROJECTS, projectPath } from "../../data/projects";
import NotFound from "../NotFound";
import { useLocale } from "../../i18n/locale";

const ProjectPage = () => {
  const { slug } = useParams();
  const { t, to } = useLocale();
  const source = PROJECTS.find((item) => item.slug === slug);
  const project = source ? { ...source, ...t.projects[source.id] } : null;
  const others = PROJECTS.filter((item) => item.slug !== slug).map((item) => ({
    ...item,
    ...t.projects[item.id],
  }));

  useEffect(() => {
    if (source) document.title = `${source.title} | Innovatechs`;
  }, [source]);

  if (!project) return <NotFound />;

  const isLive = Boolean(project.liveUrl);

  return (
    <article className="shell pb-16 pt-10 lg:pb-24 lg:pt-14">
      <Link
        to={to("/work")}
        className="text-[13px] tracking-wide text-muted transition-colors hover:text-teta"
      >
        {t.work.back}
      </Link>

      <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
            {project.category}
            <span className="mx-2 text-white/25" aria-hidden>
              ·
            </span>
            <span className="text-teta">{project.status}</span>
          </p>
          <h1 className="mt-4 text-[40px] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-[52px]">
            {project.title}
          </h1>
          {project.headline ? (
            <p className="mt-4 text-[20px] leading-snug text-ink/90 sm:text-[22px]">
              {project.headline}
            </p>
          ) : null}
        </div>
        <div>
          <p className="max-w-xl text-[15px] leading-relaxed text-muted sm:text-[16px]">
            {project.description}
          </p>
          <p className="mt-4 max-w-xl text-[13px] leading-relaxed text-muted/80">
            {isLive ? t.work.liveNote : t.work.conceptNote}
          </p>
        </div>
      </div>

      <div className="mt-10 overflow-hidden border border-white/[0.11] lg:mt-14">
        <ProjectPreview project={project} priority />
      </div>

      <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
        <div>
          <h2 className="text-[12px] uppercase tracking-[0.18em] text-muted">
            {isLive ? t.work.includes : t.work.proposed}
          </h2>
          <ul className="mt-4 border-t border-white/[0.11]">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="border-b border-white/[0.11] py-3.5 text-[15px] text-ink sm:text-[16px]"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[12px] uppercase tracking-[0.18em] text-muted">{t.work.focus}</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="border border-white/15 px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {isLive ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {t.work.viewLive} <MdArrowOutward aria-hidden />
              </a>
            ) : null}
            <Link to={to("/#contact")} className={isLive ? "btn btn-secondary" : "btn btn-primary"}>
              {t.work.likeThis}
            </Link>
          </div>
        </div>
      </div>

      {others.length > 0 && (
        <div className="mt-16 border-t border-white/[0.11] pt-10">
          <p className="eyebrow">{t.work.more}</p>
          <ul className="mt-6 divide-y divide-white/[0.11] border-y border-white/[0.11]">
            {others.map((item) => (
              <li key={item.id}>
                <Link
                  to={to(projectPath(item))}
                  className="group flex items-center justify-between gap-4 py-4"
                >
                  <span>
                    <span className="block text-[20px] font-medium tracking-tight sm:text-[24px]">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-[12px] uppercase tracking-[0.14em] text-muted">
                      {item.category}
                    </span>
                  </span>
                  <MdArrowOutward
                    aria-hidden
                    className="shrink-0 text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:text-teta"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
};

export default ProjectPage;
