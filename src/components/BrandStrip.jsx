import Star from "./Star";
import { useLocale } from "../i18n/locale";

const REPEATS = 12;

const Sequence = ({ id, words }) => (
  <div className="flex shrink-0 items-center">
    {Array.from({ length: REPEATS }, (_, repeat) =>
      words.map((word) => (
        <span key={`${id}-${repeat}-${word}`} className="inline-flex items-center">
          <span className="px-6 sm:px-8">{word}</span>
          <Star className="h-3 w-3 shrink-0" />
        </span>
      ))
    )}
  </div>
);

const BrandStrip = () => {
  const { t } = useLocale();
  return (
  <div className="border-y border-white/10 bg-[#1c1929]">
    <p className="sr-only">{t.brand.sr}</p>
    <div className="overflow-hidden py-3.5" aria-hidden>
      <div className="brand-track text-[11px] font-medium uppercase tracking-[0.28em] text-muted sm:text-[12px]">
        <Sequence id="a" words={t.brand.words} />
        <Sequence id="b" words={t.brand.words} />
      </div>
    </div>
  </div>
  );
};

export default BrandStrip;
