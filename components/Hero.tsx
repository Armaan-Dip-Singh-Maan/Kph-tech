"use client";

interface HeroProps {
  headline?: string | null;
  subtitle?: string | null;
  ctaText?: string | null;
  heroImageUrl?: string | null;
}

const DEFAULT_HEADLINE = "Your Digital Transformation Partner";
const DEFAULT_SUBTITLE =
  "End-to-end IT managed services, strategic marketing solutions, and enterprise-grade development that drive measurable results";
const DEFAULT_CTA = "Explore Our Services";

export default function Hero({
  headline = DEFAULT_HEADLINE,
  subtitle = DEFAULT_SUBTITLE,
  ctaText = DEFAULT_CTA,
  heroImageUrl = "/Hero_Banner.png",
}: HeroProps) {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative w-full overflow-hidden min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh]">
      <div
        className="absolute inset-0 bg-no-repeat bg-center"
        style={{
          backgroundImage: `url('${heroImageUrl || "/hero-banner.jpg"}')`,
          backgroundSize: "100% auto",
          backgroundPosition: "center top",
        }}
      />
      <div className="relative z-10 mx-auto flex min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] max-w-7xl flex-col justify-center px-6 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-14 lg:py-24">
        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-[#202020] md:text-5xl lg:text-6xl">
          {headline}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#666666] md:text-lg">
          {subtitle}
        </p>
        <button
          type="button"
          onClick={scrollToServices}
          className="mt-8 w-fit rounded-xl px-8 py-4 text-base font-medium text-white shadow-lg transition hover:opacity-95"
          style={{
            background: "linear-gradient(to right, #5E5BFF, #AA33FF)",
          }}
        >
          {ctaText}
        </button>
      </div>
    </section>
  );
}
