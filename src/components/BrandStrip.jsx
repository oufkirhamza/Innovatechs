import Star from "./Star";

const WORDS = ["Design", "Develop", "Automate", "Grow"];
const REPEATS = 12;

const Sequence = ({ id }) => (
  <div className="flex shrink-0 items-center">
    {Array.from({ length: REPEATS }, (_, repeat) =>
      WORDS.map((word) => (
        <span key={`${id}-${repeat}-${word}`} className="inline-flex items-center">
          <span className="px-6 sm:px-8">{word}</span>
          <Star className="h-3 w-3 shrink-0" />
        </span>
      ))
    )}
  </div>
);

const BrandStrip = () => (
  <div className="border-y border-white/10 bg-[#1c1929]">
    <p className="sr-only">Design, develop, automate, grow.</p>
    <div className="overflow-hidden py-3.5" aria-hidden>
      <div className="brand-track text-[11px] font-medium uppercase tracking-[0.28em] text-muted sm:text-[12px]">
        <Sequence id="a" />
        <Sequence id="b" />
      </div>
    </div>
  </div>
);

export default BrandStrip;
