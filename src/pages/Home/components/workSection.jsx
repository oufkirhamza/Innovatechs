import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { Section, Eyebrow } from "../../../components/Section";
import { ProjectPreview } from "../../../components/mockups/ConceptMockups";
import { PROJECTS, projectPath } from "../../../data/projects";
import { useLocale } from "../../../i18n/locale";

const Tags = ({ tags }) => (
  <ul className="flex flex-wrap gap-2">
    {tags.map((tag) => (
      <li
        key={tag}
        className="border border-white/15 px-2 py-1 text-[11px] uppercase tracking-[0.14em] text-muted"
      >
        {tag}
      </li>
    ))}
  </ul>
);

const Meta = ({ project }) => (
  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.16em]">
    <span className="text-muted">{project.category}</span>
    <span className="text-white/25" aria-hidden>
      ·
    </span>
    <span className="text-teta">{project.status}</span>
  </div>
);

const Action = ({ project, label, className = "" }) => {
  const { to } = useLocale();
  const classNames = `inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors group-hover:text-teta ${className}`;
  const icon = (
    <MdArrowOutward
      aria-hidden
      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
    />
  );

  if (project.liveUrl) {
    return (
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={classNames}>
        {label}
        {icon}
      </a>
    );
  }

  return (
    <Link to={to(projectPath(project))} className={classNames}>
      {label}
      {icon}
    </Link>
  );
};

const Preview = ({ project, label, className = "", imageFirst = false }) => {
  const { to } = useLocale();
  return (
  <Link
    to={to(projectPath(project))}
    aria-label={`${label}: ${project.title}`}
    className={`relative block w-full overflow-hidden text-left ${className}`}
  >
    <div className="project-zoom absolute inset-0" aria-hidden>
      <ProjectPreview project={project} imageFirst={imageFirst} />
    </div>
  </Link>
  );
};

const ProjectCopy = ({ project, label, showHeadline = false }) => (
  <div className="flex h-full flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10">
    <div>
      <Meta project={project} />
      <h3 className="mt-5 text-[30px] font-semibold tracking-[-0.03em] sm:text-[36px] lg:text-[40px]">
        {project.title}
      </h3>
      {showHeadline && project.headline ? (
        <p className="mt-3 text-[20px] leading-snug text-ink/90 sm:text-[22px]">
          {project.headline}
        </p>
      ) : null}
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
        {project.description}
      </p>
    </div>
    <div>
      <Tags tags={project.tags} />
      <Action project={project} label={label} className="mt-6" />
    </div>
  </div>
);

export const WorkSection = () => {
  const { t, to } = useLocale();
  const labelFor = (project) => (project.liveUrl ? t.work.viewLive : t.work.explore);
  const withCopy = (project) => ({ ...project, ...t.projects[project.id] });
  const featured = PROJECTS.filter((project) => project.layout === "feature").map(withCopy)[0];
  const paired = PROJECTS.filter((project) => project.layout === "pair").map(withCopy);
  const wide = PROJECTS.filter((project) => project.layout === "wide").map(withCopy);

  return (
    <Section id="work">
      <Eyebrow>{t.work.eyebrow}</Eyebrow>
      <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="max-w-[14ch] text-[34px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[44px] lg:text-[52px]">
          {t.work.title1}
          <span className="block">{t.work.title2}</span>
        </h2>
        <div className="max-w-sm lg:pb-1">
          <p className="text-[15px] leading-relaxed text-muted sm:text-[16px]">
            {t.work.intro}
          </p>
          <p className="mt-4 inline-flex border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-muted">
            {t.work.label}
          </p>
          <Link
            to={to("/work")}
            className="mt-4 flex w-fit items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-teta"
          >
            {t.work.viewAll}
            <MdArrowOutward aria-hidden />
          </Link>
        </div>
      </div>

      <div className="mt-12 space-y-8 lg:mt-16 lg:space-y-10">
        {featured && (
          <article className="group border border-white/[0.11] transition-colors duration-300 hover:border-white/25">
            <div className="grid lg:grid-cols-[1.72fr_0.9fr]">
              <Preview
                project={featured}
                label={labelFor(featured)}
                className="h-full min-h-[300px] sm:min-h-[440px] lg:min-h-[560px]"
              />
              <div className="border-t border-white/[0.11] lg:border-l lg:border-t-0">
                <ProjectCopy project={featured} label={labelFor(featured)} showHeadline />
              </div>
            </div>
          </article>
        )}

        {paired.length > 0 && (
          <div className="grid gap-8 md:grid-cols-2 lg:gap-6">
            {paired.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col border border-white/[0.11] transition-colors duration-300 hover:border-white/25"
              >
                <Preview
                  project={project}
                  label={labelFor(project)}
                  className="min-h-[260px] sm:min-h-[340px] lg:min-h-[400px]"
                />
                <div className="flex flex-1 flex-col border-t border-white/[0.11]">
                  <ProjectCopy project={project} label={labelFor(project)} />
                </div>
              </article>
            ))}
          </div>
        )}

        {wide.map((project) => (
          <article
            key={project.id}
            className="group border border-white/[0.11] transition-colors duration-300 hover:border-white/25"
          >
            <div className="grid lg:grid-cols-[0.82fr_1.35fr]">
              <div className="order-2 border-t border-white/[0.11] lg:order-1 lg:border-r lg:border-t-0">
                <ProjectCopy project={project} label={labelFor(project)} />
              </div>
              <Preview
                project={project}
                label={labelFor(project)}
                className="order-1 h-full min-h-[280px] sm:min-h-[400px] lg:order-2 lg:min-h-[500px]"
              />
            </div>
          </article>
        ))}
      </div>

      </Section>
  );
};
