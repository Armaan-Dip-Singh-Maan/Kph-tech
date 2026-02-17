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

type ServiceCardProps = { service: ServiceItem; imagePosition?: "center" | "left" };

export default function ServiceCard({ service, imagePosition = "center" }: ServiceCardProps) {
  if (service.image) {
    const positionClass = imagePosition === "left" ? "object-left" : "object-center";
    const positionStyle = imagePosition === "left" ? { objectPosition: "35% center" } : undefined;
    return (
      <div className="relative h-[260px] w-full overflow-hidden rounded-xl shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition hover:shadow-lg">
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
    );
  }

  return (
    <div
      className="flex flex-col items-center justify-center rounded-xl p-8 shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition hover:shadow-lg md:p-10"
      style={{
        background: `linear-gradient(to bottom, ${service.gradientFrom}, ${service.gradientTo})`,
        minHeight: "220px",
      }}
    >
      <div className="text-white/90 [&_svg]:text-white">
        <ServiceIcon name={service.icon} />
      </div>
      <h3 className="mt-4 text-center text-base font-bold leading-snug text-white md:text-lg">
        {service.title}
      </h3>
    </div>
  );
}
