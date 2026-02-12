import { notFound } from "next/navigation";
import Link from "next/link";
import { getContent } from "@/lib/content";
import HeroForm from "./HeroForm";
import ValuePropForm from "./ValuePropForm";
import GrowthForm from "./GrowthForm";
import ContactForm from "./ContactForm";
import FooterForm from "./FooterForm";
import NavForm from "./NavForm";
import ServicesForm from "./ServicesForm";
import FeaturesForm from "./FeaturesForm";
import PartnersForm from "./PartnersForm";

const SECTIONS = [
  "hero",
  "value-prop",
  "growth",
  "contact",
  "footer",
  "nav",
  "services",
  "features",
  "partners",
] as const;

export default async function AdminEditPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  if (!SECTIONS.includes(section as (typeof SECTIONS)[number])) notFound();
  const content = await getContent();

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <Link
        href="/admin/dashboard"
        className="mb-6 inline-block text-sm text-[#6F2EDD] hover:underline"
      >
        ← Dashboard
      </Link>
      <h1 className="mb-8 text-2xl font-bold text-gray-800">
        Edit {section.replace("-", " ")}
      </h1>
      {section === "hero" && <HeroForm initial={content.siteConfig} />}
      {section === "value-prop" && <ValuePropForm initial={content.siteConfig} />}
      {section === "growth" && <GrowthForm initial={content.siteConfig} />}
      {section === "contact" && <ContactForm initial={content.siteConfig} />}
      {section === "footer" && (
        <FooterForm
          initialConfig={content.siteConfig}
          footer={content.footer}
          socialLinks={content.socialLinks}
        />
      )}
      {section === "nav" && <NavForm initial={content.navLinks} />}
      {section === "services" && <ServicesForm initial={content.services} />}
      {section === "features" && <FeaturesForm initial={content.features} />}
      {section === "partners" && (
        <PartnersForm
          initialConfig={content.siteConfig}
          partners={content.partners}
        />
      )}
    </div>
  );
}
