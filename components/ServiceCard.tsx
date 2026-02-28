import Image from "next/image";
import Link from "next/link";
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

type ServiceCardProps = {
  service: ServiceItem;
  imagePosition?: "center" | "left";
  customBullets?: string[];
  bulletColors?: (string | undefined)[];
  isTall?: boolean;
  imageOffsetTop?: number;
  href?: string;
};

function RevealPanel({
  title,
  textColor,
  bullets,
  bulletColors,
}: {
  title: string;
  textColor: string;
  bullets?: string[];
  bulletColors?: (string | undefined)[];
}) {
  return (
    <div className="flex flex-col justify-center bg-white p-6 md:p-8" style={{ color: textColor }}>
      <h3 className="mb-3 text-center text-[19px] font-bold leading-snug md:text-[21px]">{title}</h3>
      {bullets && bullets.length > 0 ? (
        <ul className="list-inside list-disc space-y-1.5 text-left font-sans font-bold text-[17px] md:text-[19px]">
          {bullets.map((item, i) => (
            <li key={i} style={{ color: bulletColors?.[i] ?? textColor }}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-center font-sans leading-relaxed opacity-90 text-[17px] md:text-[19px]" style={{ color: textColor }}>
          {CARD_DESCRIPTION}
        </p>
      )}
    </div>
  );
}

const DEFAULT_CARD_HEIGHT = "260px";
const TALL_CARD_HEIGHT = "480px";

export default function ServiceCard({ service, imagePosition = "center", customBullets, bulletColors, isTall = false, imageOffsetTop = 0, href }: ServiceCardProps) {
  const cardHeight = isTall ? TALL_CARD_HEIGHT : DEFAULT_CARD_HEIGHT;
  const CardWrapper = href ? Link : "div";
  const wrapperProps = href ? { href, className: "block" } : {};

  if (service.image) {
    return (
      <CardWrapper {...wrapperProps}>
      <div
        className="group relative w-full overflow-hidden rounded-4xl shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 hover:shadow-lg flex items-center justify-center cursor-pointer"
        style={{ minHeight: cardHeight }}
      >
        {/* Reveal panel: white bg, card color for text — only visible on hover */}
        <div className="absolute inset-0 z-0 bg-white">
          <RevealPanel title={service.title} textColor={service.gradientFrom} bullets={customBullets} bulletColors={bulletColors} />
        </div>
        {/* Front: image + title — swipes up on hover */}
        <div className="absolute inset-0 z-10 transition-transform duration-300 ease-out delay-0 group-hover:delay-300 group-hover:-translate-y-full flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center" style={{ transform: imageOffsetTop ? `translateY(-${imageOffsetTop}px)` : undefined }}>
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h3 className="text-center text-[19px] font-bold leading-snug text-white drop-shadow-lg md:text-[21px]">
                {service.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
      </CardWrapper>
    );
  }

  return (
    <CardWrapper {...wrapperProps}>
    <div
      className={`group relative w-full overflow-hidden rounded-xl shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 hover:shadow-lg ${href ? "cursor-pointer" : ""}`}
      style={{
        minHeight: cardHeight,
        background: service.gradientFrom,
      }}
    >
      {/* Reveal panel: white bg, card color for text — only visible on hover */}
      <div className="absolute inset-0 z-0 flex items-center bg-white">
        <RevealPanel title={service.title} textColor={service.gradientFrom} bullets={customBullets} bulletColors={bulletColors} />
      </div>
      {/* Front: icon + title — swipes up on hover */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 transition-transform duration-300 ease-out delay-0 group-hover:delay-200 group-hover:-translate-y-full md:p-10">
        <div className="text-white/90 [&_svg]:text-white">
          <ServiceIcon name={service.icon} />
        </div>
        <h3 className="mt-4 text-center text-[19px] font-bold leading-snug text-white md:text-[21px]">
          {service.title}
        </h3>
      </div>
    </div>
    </CardWrapper>
  );
}
