"use client";

interface HeroProps {
  headline?: string | null;
  subtitle?: string | null;
  ctaText?: string | null;
  heroImageUrl?: string | null;
  heroImageUrlTablet?: string | null;
  heroImageUrlMobile?: string | null;
}

const DEFAULT_HEADLINE = "Your Digital Transformation Partner";
const DEFAULT_SUBTITLE =
  "End-to-end IT managed services, strategic marketing solutions, and enterprise-grade development that drive measurable results";
const DEFAULT_CTA = "Explore Our Services";

const DEFAULT_HERO_DESKTOP = "/assets/Hero_Banner.png";
const DEFAULT_HERO_TABLET = "/assets/Hero_Banner_tablet.png";
const DEFAULT_HERO_MOBILE = "/assets/Hero_Banner_mobile.png";

export default function Hero({
  headline = DEFAULT_HEADLINE,
  subtitle = DEFAULT_SUBTITLE,
  ctaText = DEFAULT_CTA,
  heroImageUrl = DEFAULT_HERO_DESKTOP,
  heroImageUrlTablet = DEFAULT_HERO_TABLET,
  heroImageUrlMobile = DEFAULT_HERO_MOBILE,
}: HeroProps) {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const desktopBg = heroImageUrl || DEFAULT_HERO_DESKTOP;
  const tabletBg = heroImageUrlTablet || DEFAULT_HERO_TABLET;
  const mobileBg = heroImageUrlMobile || DEFAULT_HERO_MOBILE;

  return (
    <section id="home" className="relative w-full overflow-hidden">
      {/* Banner at original size – no cropping; full image visible */}
      <div className="relative w-full">
        <img
          src={mobileBg}
          alt=""
          className="block w-full h-auto object-contain md:hidden"
          width={768}
          height={1024}
          fetchPriority="high"
        />
        <img
          src={tabletBg}
          alt=""
          className="hidden w-full h-auto object-contain md:block lg:hidden"
          width={1024}
          height={768}
          fetchPriority="high"
        />
        <img
          src={desktopBg}
          alt=""
          className="hidden w-full h-auto object-contain lg:block"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="absolute inset-0 z-10 mx-auto flex max-w-7xl flex-col justify-center px-6 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-14 lg:py-24">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-[#202020] md:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#000000] md:text-lg">
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
      </div>
    </section>
  );
}
