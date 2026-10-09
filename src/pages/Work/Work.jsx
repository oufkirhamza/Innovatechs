import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { ProjectPreview } from "../../components/mockups/ConceptMockups";
import { PROJECTS, projectPath } from "../../data/projects";

const HOME_TITLE = "Innovatechs | Websites, Custom Software & AI Automation";

const WorkPage = () => {
  useEffect(() => {
    const previous = document.title;
    document.title = "Work | Innovatechs";
    return () => {
      document.title = previous || HOME_TITLE;
    };
  }, []);

  return (
    <div className="shell pb-16 pt-12 sm:pt-16 lg:pb-24 lg:pt-20">
      <p className="eyebrow">Work</p>
      <div className="mt-4 grid gap-6 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
        <h1 className="max-w-[12ch] text-[40px] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-[52px] lg:text-[64px]">
          The websites we make.
        </h1>
        <p className="max-w-md text-[15px] leading-relaxed text-muted sm:text-[16px] lg:pb-2">
          A closer look at the sites and product studies in the studio. A public address
          appears only when a site is actually live. Everything else is labeled as a concept.
        </p>
      </div>

      <div className="mt-14 border-t border-white/[0.11] lg:mt-20">
        {PROJECTS.map((project, index) => (
          <article key={project.id} className="border-b border-white/[0.11]">
            <Link
              to={projectPath(project)}
              className="group grid gap-6 py-8 sm:py-10 lg:grid-cols-[0.9fr_1.2fr] lg:items-center lg:gap-12 lg:py-12"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <p className="text-[12px] font-medium tracking-[0.18em] text-teta">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 text-[32px] font-semibold tracking-[-0.03em] sm:text-[40px]">
                  {project.title}
                </h2>
                {project.headline ? (
                  <p className="mt-3 text-[18px] leading-snug text-ink/90 sm:text-[20px]">
                    {project.headline}
                  </p>
                ) : null}
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
                  {project.description}
                </p>
                <p className="mt-5 text-[11px] uppercase tracking-[0.16em] text-muted">
                  {project.category}
                  <span className="mx-2 text-white/25" aria-hidden>
                    ·
                  </span>
                  <span className="text-teta">{project.status}</span>
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors group-hover:text-teta">
                  {project.liveUrl ? "View project" : "Explore concept"}
                  <MdArrowOutward
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
              <div
                className={`relative min-h-[240px] overflow-hidden border border-white/[0.11] sm:min-h-[320px] lg:min-h-[380px] ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <div className="project-zoom absolute inset-0" aria-hidden>
                  <ProjectPreview project={project} />
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/[0.11] pt-10 sm:flex-row sm:items-center">
        <p className="max-w-md text-[15px] leading-relaxed text-muted">
          Have a site in mind? Tell us what you want it to do.
        </p>
        <Link to="/#contact" className="btn btn-primary">
          Start a project <MdArrowOutward aria-hidden />
        </Link>
      </div>
    </div>
  );
};

export default WorkPage;
