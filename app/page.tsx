import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import GrowthSection from "@/components/GrowthSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import GlobalPartners from "@/components/GlobalPartners";
import ContactSection from "@/components/ContactSection";
import { getContent } from "@/lib/content";

export default async function Home() {
  const content = await getContent();
  const c = content.siteConfig;

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
        heading={content.siteConfig?.servicesHeading}
        services={content.services}
      />
      <WhyChooseUs
        heading={content.siteConfig?.whyChooseHeading}
        features={content.features}
      />
      <GlobalPartners
        headline={content.siteConfig?.partnersHeadline}
        sectionTitle={content.siteConfig?.partnersSectionTitle}
        partners={content.partners}
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
