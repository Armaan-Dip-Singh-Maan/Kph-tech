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
    <section className="relative w-full overflow-hidden bg-[#1A2B5B] min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh]">
      <div
        className="absolute inset-0 bg-no-repeat bg-center"
        style={{
          backgroundImage: `url('${imageUrl || "/section-2-growth.png"}')`,
          backgroundSize: "100% auto",
          backgroundPosition: "center center",
        }}
      />
      <div className="relative z-10 mx-auto flex min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] max-w-7xl flex-col items-start justify-center py-12 pl-4 pr-6 md:flex-row md:items-center md:gap-16 md:py-16 md:pl-6 md:pr-10 lg:py-24 lg:pl-8 lg:pr-14">
        <div className="max-w-xl flex-1">
          <p className="leading-relaxed text-white text-[25px] md:text-[29px] lg:text-[35px]">
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
