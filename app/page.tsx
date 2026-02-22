import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import GrowthSection from "@/components/GrowthSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import GlobalPartners from "@/components/GlobalPartners";
import ContactSection from "@/components/ContactSection";
import { getContent, fallbackServices, fallbackFeatures, fallbackPartners } from "@/lib/content";

export default async function Home() {
  const content = await getContent();
  const c = content.siteConfig;
  const services = Array.isArray(content.services) && content.services.length > 0 ? content.services : fallbackServices;
  const features = Array.isArray(content.features) && content.features.length > 0 ? content.features : fallbackFeatures;
  const partners = Array.isArray(content.partners) && content.partners.length > 0 ? content.partners : fallbackPartners;

  return (
    <main>
      <Hero
        headline={c?.heroHeadline}
        subtitle={c?.heroSubtitle}
        ctaText={c?.heroCtaText}
        heroImageUrl={c?.heroImageUrl}
      />
      <ValueProposition
        text={c?.valuePropText}
        highlight={c?.valuePropHighlight}
        suffix={c?.valuePropSuffix}
      />
      <GrowthSection
        paragraph={c?.growthParagraph}
        imageUrl={c?.growthImageUrl}
      />
      <ServicesSection
        heading={content.siteConfig?.servicesHeading ?? "Our Services"}
        services={services}
      />
      <WhyChooseUs
        heading={content.siteConfig?.whyChooseHeading ?? "Why modern businesses choose KPH Tech"}
        features={features}
      />
      <GlobalPartners
        headline={content.siteConfig?.partnersHeadline ?? "At KPH Tech we have global teams working in different time zones which makes us 24*7 available for you"}
        sectionTitle={content.siteConfig?.partnersSectionTitle ?? "Our Global Partners"}
        partners={partners}
      />
      <ContactSection
        headline={c?.contactHeadline}
        description={c?.contactDescription}
        emailLabel={c?.contactEmailLabel}
        emailAddress={c?.contactEmailAddress}
      />
    </main>
  );
}
