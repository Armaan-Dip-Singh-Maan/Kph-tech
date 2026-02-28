interface ValuePropositionProps {
  text?: string | null;
  highlight?: string | null;
  suffix?: string | null;
}

const DEFAULT_TEXT = "KPH Tech provides";
const DEFAULT_HIGHLIGHT = "Technology, Growth & Cloud Solutions";
const DEFAULT_SUFFIX = "Built for Modern Enterprises";

export default function ValueProposition({
  text = DEFAULT_TEXT,
  highlight = DEFAULT_HIGHLIGHT,
  suffix = DEFAULT_SUFFIX,
}: ValuePropositionProps) {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-10 lg:px-14">
        <p className="text-2xl font-bold leading-snug text-[#000000] md:text-3xl lg:text-4xl">
          {text}{" "}
          <span className="text-[#3366FF]">{highlight}</span> {suffix}
        </p>
      </div>
    </section>
  );
}
