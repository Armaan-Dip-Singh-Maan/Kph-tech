import GrowthArrow from "./icons/GrowthArrow";

export default function GrowthSection() {
  return (
    <section
      className="relative w-full py-20 md:py-28"
      style={{
        background: "linear-gradient(135deg, #2C3A7A 0%, #1A2B5B 50%, #192A56 100%)",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row md:gap-16 md:px-10 lg:px-14">
        <div className="flex-1">
          <p className="max-w-xl text-lg leading-relaxed text-white md:text-xl">
            KPH Tech delivers solutions that not only{" "}
            <span className="font-bold">accelerates your business growth</span>{" "}
            but also ensures long-term sustainability and competitive advantage in the digital landscape.
          </p>
        </div>
        <div className="flex flex-1 justify-center md:justify-end">
          <div className="h-48 w-56 md:h-56 md:w-64">
            <GrowthArrow />
          </div>
        </div>
      </div>
      {/* Optional bar chart / wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-end gap-0.5 overflow-hidden px-2 pb-2 md:px-4">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="w-1 rounded-sm opacity-70"
            style={{
              height: `${20 + Math.sin(i * 0.3) * 30 + i * 1.5}px`,
              background: i % 3 === 0 ? "#00CFFF" : i % 3 === 1 ? "#007BFF" : "#00FFFF",
            }}
          />
        ))}
      </div>
    </section>
  );
}
