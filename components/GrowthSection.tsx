interface GrowthSectionProps {
  paragraph?: string | null;
  imageUrl?: string | null;
}

const DEFAULT_PARAGRAPH =
  "KPH Tech delivers solutions that not only accelerates your business growth but also ensures long-term sustainability and competitive advantage in the digital landscape.";

export default function GrowthSection({
  paragraph = DEFAULT_PARAGRAPH,
  imageUrl = "/section-2-growth.png",
}: GrowthSectionProps) {
  const parts = (paragraph || DEFAULT_PARAGRAPH).split("accelerates your business growth");
  const before = parts[0]?.trim() ?? "";
  const after = parts[1]?.trim() ?? "";

  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-[#1A2B5B] py-24 md:min-h-[75vh] md:py-32">
      <div
        className="absolute inset-0 bg-cover bg-right bg-no-repeat"
        style={{
          backgroundImage: `url('${imageUrl || "/section-2-growth.png"}')`,
        }}
      />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 md:flex-row md:items-center md:gap-16 md:px-10 lg:px-14">
        <div className="max-w-xl flex-1">
          <p className="text-xl leading-relaxed text-white md:text-2xl lg:text-3xl">
            {parts.length >= 2 ? (
              <>
                {before}{" "}
                <span className="font-bold">accelerates your business growth</span>
                {after ? ` ${after}` : ""}
              </>
            ) : (
              paragraph
            )}
          </p>
        </div>
        <div className="flex-1" aria-hidden="true" />
      </div>
    </section>
  );
}
