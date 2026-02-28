import ServiceCard from "./ServiceCard";

const WEB_MOBILE_BULLET_COLORS: (string | undefined)[] = ["#319999", "#319999"];

const CARD_BULLETS: string[][] = [
  ["Branding", "Digital Campaigns", "Product launch", "Copywriting", "Marketing Programs", "Social media", "SEO", "PPC"],
  ["UX/UI", "Graphic design", "Video & Motion", "Design Systems"],
  ["Website Development", "Custom Application", "Mobile Application", "Application Architecture"],
  ["Multi Cloud", "MS Azure Cloud Services", "AWS Deployment", "GCP Services"],
  ["Migration Services", "Data Modernization", "AWS - AI - ML", "Azure AI", "GCP AI"],
  ["Virtualization", "Hyper Converged", "Open shift", "Kubernetes", "Server Infrastructure"],
  ["Backup & DR", "Data Protection", "DR Architecture", "Compliance & Governance"],
  ["Security Platform Services", "Network Infrastructure Security", "Technical Assessment & Audits", "DR Consulting"],
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
        <h2 className="mb-12 text-center text-6xl lg:text-7xl font-bold text-[#000000] md:mb-16 md:text-6xl">
          {heading}
        </h2>
        <div className="rounded-10xl overflow-hidden p-4 bg-white/50 ">
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={service.id} className="min-w-0">
              <ServiceCard
                service={service}
                imagePosition={index === 6 || index === 7 ? "left" : "center"}
                customBullets={CARD_BULLETS[index]}
                bulletColors={index === 2 ? WEB_MOBILE_BULLET_COLORS : undefined}
                isTall
                imageOffsetTop={service.title === "Enterprise Security Architecture & Technical Assessments" ? 4 : 0}
                href={
                  index === 0
                    ? "/services/marketing-growth-solutions"
                    : index === 1
                    ? "/services/design-creative-services"
                    : index === 2
                    ? "/services/web-mobile-development"
                    : index === 3
                    ? "/services/cloud-transformation"
                    : index === 4
                    ? "/services/cloud-migration-ai"
                    :                     index === 5
                    ? "/services/infrastructure-modernization"
                    : index === 6
                    ? "/services/security-compliance"
                    : index === 7
                    ? "/services/enterprise-security"
                    : undefined
                }
              />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
