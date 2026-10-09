import { PROJECTS } from "../../data/projects";

const byTheme = Object.fromEntries(PROJECTS.map((project) => [project.visualTheme, project]));

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

export function CosmeticsMockup({ image, imageFirst = false, priority = false }) {
  const products = [
    ["01", "Sérum"],
    ["02", "Balm"],
    ["03", "Oil"],
  ];

  return (
    <div className="concept flex flex-col bg-[#f3eee6] text-[#241f1a]">
      <div className="flex items-center justify-between border-b border-black/10 px-[5%] py-[3.2%]">
        <span className="concept-nav">Shop</span>
        <span className="concept-serif text-[clamp(11px,2.8cqi,20px)] tracking-[0.22em]">
          MAISON NÉRA
        </span>
        <span className="concept-nav">Bag</span>
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-2">
        <div className={`relative min-h-0 ${imageFirst ? "" : "order-2"}`}>
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
          />
        </div>
        <div className={`flex flex-col justify-end gap-[3%] p-[7%] ${imageFirst ? "" : "order-1"}`}>
          <p className="concept-kicker text-[#8d7d6b]">Handmade care</p>
          <p className="concept-display">Care, composed.</p>
          <p className="concept-body max-w-[22ch] text-[#5c5348]">
            Discovery, a quiet cart, and WhatsApp ordering.
          </p>
          <span className="concept-kicker mt-[2%] inline-flex w-fit border border-[#241f1a]/20 px-[3.5%] py-[2%]">
            Shop the edit
          </span>
        </div>
      </div>
      <div className="concept-foot grid grid-cols-3 border-t border-black/10">
        {products.map(([num, name]) => (
          <div key={name} className="border-r border-black/10 px-[8%] py-[5%] last:border-r-0">
            <p className="concept-kicker text-[#8d7d6b]">{num}</p>
            <p className="concept-serif concept-small mt-[6%]">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AutomotiveMockup({ image, priority = false }) {
  const fields = [
    ["Pickup", "City"],
    ["Dates", "Flexible"],
    ["Next", "Enquire"],
  ];

  return (
    <div className="concept relative overflow-hidden bg-[#101114] text-white">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[center_60%]"
        loading={priority ? "eager" : "lazy"}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/45" />
      <div className="relative flex h-full flex-col p-[5%]">
        <div className="flex items-center justify-between">
          <span className="concept-serif text-[clamp(14px,3.2cqi,28px)] tracking-[0.08em]">
            Rif Drive
          </span>
          <span className="concept-nav text-white/70">Fleet</span>
        </div>
        <div className="mt-auto">
          <p className="concept-display max-w-[12ch]">The drive, clearly booked.</p>
          <div className="concept-bar mt-[4%] grid grid-cols-3 border border-white/25 bg-black/45">
            {fields.map(([label, value], index) => (
              <div
                key={label}
                className={`px-[8%] py-[7%] ${index < fields.length - 1 ? "border-r border-white/20" : ""}`}
              >
                <p className="concept-kicker text-white/55">{label}</p>
                <p className="concept-small mt-[8%]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CafeMockup({ image, priority = false }) {
  const menu = [
    ["Coffee", "Espresso"],
    ["Table", "Pastry"],
    ["Visit", "This week"],
  ];

  return (
    <div className="concept flex flex-col bg-[#f6f0e8] text-[#3a2a22]">
      <div className="flex items-center justify-between px-[5%] py-[4%]">
        <span className="concept-serif text-[clamp(16px,3.6cqi,32px)]">Atelier Café</span>
        <span className="concept-nav text-[#3a2a22]/70">Menu</span>
      </div>
      <div className="relative mx-[5%] min-h-0 flex-1">
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading={priority ? "eager" : "lazy"}
        />
      </div>
      <div className="grid grid-cols-3 gap-[2%] px-[5%] py-[4.5%]">
        {menu.map(([label, value]) => (
          <div key={label}>
            <p className="concept-kicker text-[#8a6a52]">{label}</p>
            <p className="concept-serif concept-small mt-[6%]">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LivingMockup({ image, priority = false }) {
  return (
    <div className="concept flex flex-col bg-[#f3f0ea] text-[#2c2926]">
      <div className="flex items-center justify-between px-[4.5%] py-[3.5%]">
        <span className="concept-serif text-[clamp(16px,3.4cqi,30px)]">Rif Living</span>
        <span className="concept-nav text-[#2c2926]/60">Listings</span>
      </div>
      <div className="flex gap-[2%] px-[4.5%]">
        {["All homes", "Courtyard", "Enquire"].map((chip, index) => (
          <span
            key={chip}
            className={`concept-kicker border px-[2.4%] py-[1.3%] ${
              index === 0 ? "border-black/25" : "border-black/10 text-[#2c2926]/60"
            }`}
          >
            {chip}
          </span>
        ))}
      </div>
      <div className="relative m-[4.5%] min-h-0 flex-1">
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading={priority ? "eager" : "lazy"}
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-[5%] text-white">
          <p className="concept-serif text-[clamp(16px,4cqi,34px)] leading-none">Courtyard residence</p>
          <p className="concept-kicker mt-[2%] text-white/80">Concept listing · Enquiry</p>
        </div>
      </div>
    </div>
  );
}

function AutomotivePhone({ image }) {
  return (
    <div className="h-full rounded-[1.55rem] border border-white/15 bg-[#0c0d10] p-[6px] shadow-[0_22px_50px_rgba(0,0,0,0.45)]">
      <div className="relative h-full overflow-hidden rounded-[1.2rem] bg-[#0c0d10] text-white">
        <img src={image} alt="" className="absolute inset-x-0 top-0 h-[58%] w-full object-cover object-[center_55%]" />
        <div className="absolute inset-x-0 bottom-0 top-[54%] bg-[#0c0d10] px-3.5 pb-3.5 pt-3">
          <p className="text-[9px] uppercase tracking-[0.2em] text-white/50">Rif Drive</p>
          <p className="concept-serif mt-1 text-[15px] leading-none">Book the drive.</p>
          <div className="mt-2.5 flex h-7 items-center justify-center border border-white/25 text-[9px] tracking-[0.14em] uppercase">
            Check dates
          </div>
        </div>
      </div>
    </div>
  );
}

function CafeSlim({ image }) {
  return (
    <div className="relative h-full bg-[#2a211c]">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover object-[center_40%]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      <div className="relative p-3 text-[#f6f0e8] sm:p-4">
        <p className="concept-serif text-[15px] leading-none sm:text-lg">Atelier Café</p>
        <p className="mt-1.5 text-[8px] uppercase tracking-[0.18em] text-white/75 sm:text-[9px]">
          Menu · Visit
        </p>
      </div>
    </div>
  );
}

const MOCKUP = {
  cosmetics: CosmeticsMockup,
  automotive: AutomotiveMockup,
  hospitality: CafeMockup,
  realestate: LivingMockup,
};

const FRAME_TONE = {
  cosmetics: "light",
  automotive: "dark",
  hospitality: "light",
  realestate: "light",
};

export function ProjectPreview({ project, priority = false, imageFirst = false }) {
  const Mockup = MOCKUP[project.visualTheme];
  if (!Mockup) return null;
  return (
    <BrowserFrame url={project.previewUrl} tone={FRAME_TONE[project.visualTheme]} className="h-full">
      <Mockup
        image={project.image}
        priority={priority}
        imageFirst={imageFirst}
      />
    </BrowserFrame>
  );
}

export function HeroComposition() {
  const cosmetics = byTheme.cosmetics;
  const automotive = byTheme.automotive;
  const cafe = byTheme.hospitality;

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
        <BrowserFrame url={cafe.previewUrl} className="h-full shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
          <CafeSlim image={cafe.image} />
        </BrowserFrame>
      </div>

      <div className="absolute left-0 top-[64px] z-20 h-[268px] w-[88%] sm:top-[76px] sm:h-[300px] lg:left-auto lg:right-0 lg:top-[18%] lg:h-[74%] lg:w-[78%]">
        <BrowserFrame
          url={cosmetics.previewUrl}
          className="h-full shadow-[0_28px_70px_rgba(0,0,0,0.42)]"
        >
          <CosmeticsMockup image={cosmetics.image} imageFirst priority />
        </BrowserFrame>
      </div>

      <div className="float-b absolute bottom-0 left-1 z-30 h-[210px] w-[128px] sm:left-2 sm:h-[220px] sm:w-[136px] lg:left-0 lg:h-[48%] lg:w-[34%]">
        <AutomotivePhone image={automotive.image} />
      </div>
    </div>
  );
}
