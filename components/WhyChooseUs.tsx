import FeatureCard from "./FeatureCard";

type FeatureItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
  side: string;
  iconBg: string;
  iconColor: string;
};

interface WhyChooseUsProps {
  heading?: string | null;
  features: FeatureItem[];
}

export default function WhyChooseUs({
  heading = "Why modern businesses choose KPH Tech",
  features = [],
}: WhyChooseUsProps) {
  return (
    <section
      id="about"
      className="w-full py-16 md:py-24"
      style={{
        background: "linear-gradient(to right, #AF7BF5, #B2A2F8 40%, #8BD7FA 100%)",
      }}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10 lg:px-14">
        <h2 className="mb-14 text-center text-3xl font-bold text-white md:mb-20 md:text-4xl lg:text-5xl">
          {heading}
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-px bg-[#DDDDDD] md:block" />
          <div className="space-y-12 md:space-y-16">
            {features.map((feature) => (
              <div key={feature.id} className="relative flex flex-col md:flex-row md:items-center">
                {feature.side === "left" ? (
                  <>
                    <div className="w-full md:w-1/2 md:pr-10 md:text-right">
                      <div className="ml-0 md:ml-auto md:inline-block">
                        <FeatureCard feature={feature} />
                      </div>
                    </div>
                    <div className="hidden w-1/2 md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden w-1/2 md:block" />
                    <div className="w-full md:w-1/2 md:pl-10">
                      <FeatureCard feature={feature} />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
