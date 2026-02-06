import { servicesData } from "@/constants/servicesData";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section id="services" className="w-full bg-dotted py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#333333] md:mb-16 md:text-4xl">
          Explore our services
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
