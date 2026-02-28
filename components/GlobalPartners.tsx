import PartnerCard from "./PartnerCard";

type PartnerItem = {
  id: string;
  name: string;
  description?: string | null;
  logoType: string;
  accentColor?: string | null;
  logoUrl?: string | null;
};

interface GlobalPartnersProps {
  headline?: string | null;
  sectionTitle?: string | null;
  partners: PartnerItem[];
}

export default function GlobalPartners({
  headline = "At KPH Tech we have global teams working in different time zones which makes us 24*7 available for you",
  sectionTitle = "Our Global Partners",
  partners = [],
}: GlobalPartnersProps) {
  return (
    <section id="partners" className="w-full">
      <div className="w-full bg-[#F8F8F8] py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <p className="text-2xl font-bold leading-snug text-[#000000] md:text-3xl lg:text-4xl">
            {headline}
          </p>
        </div>
      </div>
      <div
        className="w-full py-16 md:py-20"
        style={{
          background: "linear-gradient(to right, #E0BBE4, #A0ECFF)",
        }}
      >
        <div className="mx-auto max-w-5xl px-6 md:px-10 lg:px-14">
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:mb-16 md:text-4xl">
            {sectionTitle}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {partners.map((partner) => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
