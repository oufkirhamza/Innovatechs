import { PROJECTS } from "../../data/projects";

const byId = Object.fromEntries(PROJECTS.map((project) => [project.id, project]));

function host(url) {
  try {
    return new URL(url).host;
  } catch {
    return "";
  }
}

export function BrowserFrame({ url, children, tone = "light", className = "" }) {
  const dark = tone === "dark";
  return (
    <div
      className={`flex h-full flex-col overflow-hidden border ${
        dark ? "border-white/12 bg-[#101114]" : "border-black/10 bg-[#f6f1e8]"
      } ${className}`}
    >
      <div
        className={`flex h-7 shrink-0 items-center gap-2 border-b px-2.5 ${
          dark ? "border-white/10" : "border-black/10"
        }`}
      >
        <span className="flex gap-[3px]" aria-hidden>
          <i className={`block h-[5px] w-[5px] rounded-full ${dark ? "bg-white/30" : "bg-black/20"}`} />
          <i className={`block h-[5px] w-[5px] rounded-full ${dark ? "bg-white/20" : "bg-black/15"}`} />
          <i className={`block h-[5px] w-[5px] rounded-full ${dark ? "bg-white/20" : "bg-black/15"}`} />
        </span>
        <div
          className={`flex h-[14px] min-w-0 flex-1 items-center truncate rounded-[2px] px-2 text-[8px] tracking-wide ${
            dark ? "bg-white/5 text-white/40" : "bg-black/[0.04] text-black/45"
          }`}
        >
          {url}
        </div>
      </div>
      <div className="relative min-h-0 flex-1">{children}</div>
    </div>
  );
}

function Shot({ project, position = "object-top", priority = false }) {
  if (!project) return null;
  return (
    <img
      src={project.image}
      alt=""
      className={`h-full w-full object-cover ${position}`}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

export function ProjectPreview({ project, priority = false }) {
  return <Shot project={project} priority={priority} />;
}

export function HeroComposition() {
  const main = byId["maison-nera"];
  const top = byId["lune-events"];
  const side = byId.riffit;

  return (
    <div
      className="hero-visual relative mx-auto h-[430px] w-full max-w-[560px] sm:h-[480px] sm:max-w-[640px] lg:h-[560px] lg:max-w-none"
      aria-hidden
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[68%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5c45fd]/25 blur-[70px]"
      />

      <div className="float-a absolute right-0 top-0 z-10 h-[112px] w-[58%] sm:h-[128px] lg:left-0 lg:right-auto lg:top-0 lg:h-[34%] lg:w-[52%]">
        <BrowserFrame url={host(top?.liveUrl)} className="h-full shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
          <Shot project={top} position="object-[center_30%]" />
        </BrowserFrame>
      </div>

      <div className="absolute left-0 top-[64px] z-20 h-[268px] w-[88%] sm:top-[76px] sm:h-[300px] lg:left-auto lg:right-0 lg:top-[18%] lg:h-[74%] lg:w-[78%]">
        <BrowserFrame
          url={host(main?.liveUrl)}
          className="h-full shadow-[0_28px_70px_rgba(0,0,0,0.42)]"
        >
          <Shot project={main} priority />
        </BrowserFrame>
      </div>

      <div className="float-b absolute bottom-0 left-1 z-30 h-[210px] w-[128px] sm:left-2 sm:h-[220px] sm:w-[136px] lg:left-0 lg:h-[48%] lg:w-[34%]">
        <div className="h-full rounded-[1.55rem] border border-white/15 bg-[#0c0d10] p-[6px] shadow-[0_22px_50px_rgba(0,0,0,0.45)]">
          <div className="h-full overflow-hidden rounded-[1.2rem]">
            <Shot project={side} position="object-left" />
          </div>
        </div>
      </div>
    </div>
  );
}
