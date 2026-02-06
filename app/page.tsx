import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import GrowthSection from "@/components/GrowthSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import GlobalPartners from "@/components/GlobalPartners";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ValueProposition />
      <GrowthSection />
      <ServicesSection />
      <WhyChooseUs />
      <GlobalPartners />
      <ContactSection />
    </main>
  );
}
