import ServiceCard from "./ServiceCard";

const FIRST_CARD_BULLETS = [
  "Branding",
  "Digital Campaigns",
  "Product Launch & GTM",
  "Copywriting",
  "Marketing Automation",
  "Social Media Marketing",
];

const SECOND_CARD_BULLETS = [
  "UX/UI Design",
  "Graphic Design",
  "Video Design",
  "Motion Design",
];

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
  heading = "Our Services",
  services = [],
}: ServicesSectionProps) {
  return (
    <section id="services" className="w-full bg-dotted py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <h2 className="mb-12 text-center text-6xl lg:text-7xl font-bold text-[#333333] md:mb-16 md:text-6xl">
          {heading}
        </h2>
        <div className="rounded-10xl overflow-hidden p-4 bg-white/50 ">
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                imagePosition={index === 6 || index === 7 ? "left" : "center"}
                customBullets={index === 0 ? FIRST_CARD_BULLETS : index === 1 ? SECOND_CARD_BULLETS : undefined}
                isTall={index === 0 || index === 1 || index >= 4}
                imageOffsetTop={service.title === "Enterprise Security Architecture & Technical Assessments" ? 4 : 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
