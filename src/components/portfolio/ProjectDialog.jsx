import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import { ProjectPreview } from "../mockups/ConceptMockups";
import { scrollToSection } from "../../utils/scrollToSection";

const ProjectDialog = ({ project, onClose }) => {
  const dialogRef = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!project) return undefined;
    const previouslyFocused = document.activeElement;
    const node = dialogRef.current;
    const getItems = () =>
      [...node.querySelectorAll("a[href], button:not([disabled])")];

    getItems()[0]?.focus();

    const onKey = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseRef.current();
        return;
      }
      if (event.key !== "Tab") return;
      const items = getItems();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [project]);

  if (!project) return null;

  const discuss = () => {
    onClose();
    window.setTimeout(() => scrollToSection("contact"), 30);
  };

  return createPortal(
    <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-black/70"
        aria-label="Close project details"
        onClick={onClose}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-y-auto border border-white/10 bg-[#1c1928] shadow-2xl sm:max-h-[88vh]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-8">
          <p className="eyebrow pt-1">Concept illustration</p>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-ink hover:border-white/40"
            aria-label="Close"
          >
            <MdClose className="text-xl" aria-hidden />
          </button>
        </div>

        <div className="px-5 py-6 sm:px-8 sm:py-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.16em]">
            <span className="text-muted">{project.category}</span>
            <span className="text-teta">{project.status}</span>
          </div>
          <h2
            id="project-dialog-title"
            className="mt-3 text-[32px] font-semibold tracking-[-0.03em] sm:text-[40px]"
          >
            {project.title}
          </h2>
          {project.headline ? (
            <p className="mt-3 text-lg text-ink/90">{project.headline}</p>
          ) : null}
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
            {project.description}
          </p>
          <p className="mt-4 max-w-2xl text-[13px] leading-relaxed text-muted/80">
            This preview shows the kind of experience we design. It is not a completed client project.
          </p>

          <div className="mt-6 overflow-hidden border border-white/10">
            <ProjectPreview project={project} />
          </div>

          <h3 className="mt-8 text-[13px] uppercase tracking-[0.18em] text-muted">
            Proposed functionality
          </h3>
          <ul className="mt-3 border-t border-white/10">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="border-b border-white/10 py-3 text-[15px] text-ink"
              >
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View live demo
              </a>
            ) : null}
            <button
              type="button"
              onClick={discuss}
              className={project.liveUrl ? "btn btn-secondary" : "btn btn-primary"}
            >
              Start a project like this
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectDialog;
