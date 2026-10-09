import ScrollReveal from "./ScrollReveal";

export function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      tabIndex={-1}
      className={`section-space scroll-mt-[72px] outline-none ${className}`}
    >
      <ScrollReveal>
        <div className="shell">{children}</div>
      </ScrollReveal>
    </section>
  );
}

export function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}
