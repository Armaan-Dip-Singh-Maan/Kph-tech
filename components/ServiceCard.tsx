import Image from "next/image";
import { ServiceIcon } from "./icons/ServiceIcons";

type ServiceItem = {
  id: string;
  title: string;
  gradientFrom: string;
  gradientTo: string;
  icon: string;
  image?: string;
};

const CARD_DESCRIPTION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

type ServiceCardProps = { service: ServiceItem; imagePosition?: "center" | "left" };

function RevealPanel({ title, textColor }: { title: string; textColor: string }) {
  return (
    <div className="flex flex-col justify-center bg-white p-6 md:p-8" style={{ color: textColor }}>
      <h3 className="mb-3 text-center text-base font-bold leading-snug md:text-lg">{title}</h3>
      <p className="text-center text-sm leading-relaxed opacity-90 md:text-base" style={{ color: textColor }}>
        {CARD_DESCRIPTION}
      </p>
    </div>
  );
}

export default function ServiceCard({ service, imagePosition = "center" }: ServiceCardProps) {
  const cardHeight = "260px";

  if (service.image) {
    const positionClass = imagePosition === "left" ? "object-left" : "object-center";
    const positionStyle = imagePosition === "left" ? { objectPosition: "35% center" } : undefined;
    return (
      <div
        className="group relative h-[260px] w-full overflow-hidden rounded-xl shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 hover:shadow-lg"
        style={{ minHeight: cardHeight }}
      >
        {/* Reveal panel: white bg, card color for text — only visible on hover */}
        <div className="absolute inset-0 z-0 bg-white">
          <RevealPanel title={service.title} textColor={service.gradientFrom} />
        </div>
        {/* Front: image + title — swipes up on hover */}
        <div className="absolute inset-0 z-10 transition-transform duration-300 ease-out delay-0 group-hover:delay-200 group-hover:-translate-y-full">
          <div className="relative h-full w-full">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className={`object-cover ${positionClass}`}
              style={positionStyle}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h3 className="text-center text-base font-bold leading-snug text-white drop-shadow-md md:text-lg">
                {service.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group relative w-full overflow-hidden rounded-xl shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 hover:shadow-lg"
      style={{
        minHeight: cardHeight,
        background: `linear-gradient(to bottom, ${service.gradientFrom}, ${service.gradientTo})`,
      }}
    >
      {/* Reveal panel: white bg, card color for text — only visible on hover */}
      <div className="absolute inset-0 z-0 flex items-center bg-white">
        <RevealPanel title={service.title} textColor={service.gradientFrom} />
      </div>
      {/* Front: icon + title — swipes up on hover */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 transition-transform duration-300 ease-out delay-0 group-hover:delay-200 group-hover:-translate-y-full md:p-10">
        <div className="text-white/90 [&_svg]:text-white">
          <ServiceIcon name={service.icon} />
        </div>
        <h3 className="mt-4 text-center text-base font-bold leading-snug text-white md:text-lg">
          {service.title}
        </h3>
      </div>
    </div>
  );
}
