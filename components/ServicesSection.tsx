import ServiceCard from "./ServiceCard";

export type ServiceItem = {
  id: string;
  title: string;
  gradientFrom: string;
  gradientTo: string;
  icon: string;
  image?: string;
};

interface ServicesSectionProps {
  heading?: string | null;
  services: ServiceItem[];
}

export default function ServicesSection({
  heading = "Explore our services",
  services = [],
}: ServicesSectionProps) {
  return (
    <section id="services" className="w-full bg-dotted py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#333333] md:mb-16 md:text-4xl">
          {heading}
        </h2>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
