"use client";

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, #E0F2F7 0%, #B0CCF7 40%, #8B80F7 100%)",
        }}
      />
      {/* Wavy blob overlays - right 2/3 */}
      <div className="absolute right-0 top-0 h-full w-2/3 opacity-90">
        <div
          className="absolute -right-20 top-20 h-72 w-96 rounded-full opacity-60 blur-2xl"
          style={{ background: "#48D1CC" }}
        />
        <div
          className="absolute right-10 top-40 h-64 w-80 rounded-full opacity-50 blur-xl"
          style={{ background: "#5E93FF" }}
        />
        <div
          className="absolute bottom-20 right-20 h-80 w-96 rounded-full opacity-55 blur-2xl"
          style={{ background: "#5C5CFF" }}
        />
        <div
          className="absolute bottom-40 right-40 h-56 w-72 rounded-full opacity-50 blur-xl"
          style={{ background: "#6A0DAD" }}
        />
      </div>
      {/* Sparkle dots - fixed positions for SSR */}
      <div className="absolute inset-0 overflow-hidden">
        {[22, 35, 48, 62, 78, 25, 55, 70, 40, 85, 30, 65, 50, 72, 38].map((left, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white opacity-70"
            style={{
              left: `${left}%`,
              top: `${12 + (i * 5) % 75}%`,
            }}
          />
        ))}
      </div>
      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-8 pt-24 pb-20 md:px-12 lg:px-14">
        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-[#202020] md:text-5xl lg:text-6xl">
          Your Digital Transformation Partner
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#666666] md:text-lg">
          End-to-end IT managed services, strategic marketing solutions, and enterprise-grade development that drive measurable results
        </p>
        <button
          type="button"
          onClick={scrollToServices}
          className="mt-8 w-fit rounded-xl px-8 py-4 text-base font-medium text-white shadow-lg transition hover:opacity-95"
          style={{
            background: "linear-gradient(to right, #5E5BFF, #AA33FF)",
          }}
        >
          Explore Our Services
        </button>
      </div>
    </section>
  );
}
