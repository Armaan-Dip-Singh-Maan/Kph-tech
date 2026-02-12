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
  heroImageUrl = "/hero-banner.jpg",
}: HeroProps) {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${heroImageUrl || "/hero-banner.jpg"}')`,
        }}
      />
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-8 pt-24 pb-20 md:px-12 lg:px-14">
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
