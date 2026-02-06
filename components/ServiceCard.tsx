import { ServiceIcon } from "./icons/ServiceIcons";
import type { ServiceItem } from "@/constants/servicesData";

export default function ServiceCard({ service }: { service: ServiceItem }) {
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
