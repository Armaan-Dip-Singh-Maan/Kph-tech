import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Cloud Migration & Data/AI Transformation | KPH Tech",
  description:
    "Professional cloud migration, data modernization, and AI transformation services for B2B and enterprise organizations in Canada and the United States.",
};

const SERVICE_SECTIONS = [
  {
    id: "cloud-migration",
    title: "Cloud and Cross Platform Migration Services",
    tagline: "Migrating to the cloud requires structured planning and disciplined execution.",
    intro:
      "We provide cloud migration services in Canada and the United States that enable seamless workload transitions across platforms while maintaining security and business continuity.",
    bullets: [
      "VMware to AWS migration",
      "VMware to Azure migration",
      "VMware to Google Cloud migration",
      "Migration to Nutanix, OpenShift, and Proxmox",
      "Cross-cloud workload management",
      "Post-migration optimization",
      "Governance and cost control strategy",
    ],
    outcome:
      "Our cloud migration services minimize disruption, protect data integrity, and ensure scalable cloud foundations.",
  },
  {
    id: "data-modernization",
    title: "Data Platform Modernization for Advanced Analytics",
    tagline: "Data transformation is central to digital transformation.",
    intro:
      "We modernize enterprise data platforms to support advanced analytics, reporting, machine learning, and AI workloads. Our approach focuses on performance, scalability, governance, and secure architecture.",
    bullets: [
      "Cloud data warehouse migration",
      "Data Lake architecture design",
      "Structured data governance frameworks",
      "Performance optimization",
      "Secure data access controls",
    ],
    outcome:
      "Modern data infrastructure enables faster insights, improved forecasting, and measurable operational intelligence.",
  },
  {
    id: "aws-ai",
    title: "AWS AI and Machine Learning Solutions",
    tagline: "KPH Tech implements AWS AI and machine learning solutions that enable predictive analytics, automation, and intelligent application development.",
    intro:
      "Our AWS AI services include Amazon SageMaker implementation, machine learning model development, retrieval augmented generation architecture, AI pipeline deployment, and intelligent data processing systems.",
    bullets: [
      "Amazon SageMaker implementation",
      "Machine learning model development",
      "Retrieval augmented generation architecture",
      "AI pipeline deployment",
      "Intelligent data processing systems",
    ],
    outcome:
      "We design AI solutions that are secure, scalable, and aligned to enterprise performance objectives.",
  },
  {
    id: "azure-ai",
    title: "Azure AI and Intelligent Automation",
    tagline: "We deploy Azure AI services to enhance automation, customer engagement, and operational decision making.",
    intro:
      "Our Azure AI capabilities include Azure AI service implementation, intelligent virtual agents, AI chatbot integration, automation workflow design, and AI governance and compliance alignment.",
    bullets: [
      "Azure AI service implementation",
      "Intelligent virtual agents",
      "AI chatbot integration",
      "Automation workflow design",
      "AI governance and compliance alignment",
    ],
    outcome:
      "Our Azure AI solutions help organizations operationalize artificial intelligence while maintaining security and regulatory readiness.",
  },
  {
    id: "gcp-ai",
    title: "Google Cloud AI and Advanced Analytics",
    tagline: "KPH Tech supports AI transformation on Google Cloud Platform for organizations seeking scalable cloud-native intelligence.",
    intro:
      "Our Google Cloud AI services include Vertex AI implementation, BigQuery analytics integration, machine learning model deployment, intelligent data pipelines, and cloud-native AI architecture.",
    bullets: [
      "Vertex AI implementation",
      "BigQuery analytics integration",
      "Machine learning model deployment",
      "Intelligent data pipelines",
      "Cloud-native AI architecture",
    ],
    outcome:
      "These solutions enable advanced analytics, operational optimization, and intelligent decision support.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Do you provide cloud migration services in Canada?",
    a: "Yes. KPH Tech provides cloud migration services in Canada and the United States for enterprise and B2B organizations.",
  },
  {
    q: "Can you migrate VMware environments to public cloud platforms?",
    a: "Yes. We provide VMware to AWS, VMware to Azure, and VMware to Google Cloud migration services with structured governance and optimization.",
  },
  {
    q: "Do you modernize enterprise data platforms for AI workloads?",
    a: "Yes. We modernize data platforms to support advanced analytics, machine learning, and artificial intelligence workloads.",
  },
  {
    q: "What AI platforms do you support?",
    a: "We support AWS AI services, Azure AI services, and Google Cloud AI platforms, including machine learning deployment and intelligent automation.",
  },
  {
    q: "How do you ensure security during migration and AI deployment?",
    a: "Security is integrated into architecture design, identity management, data protection controls, and governance frameworks throughout migration and implementation.",
  },
];

export default function CloudMigrationAIPage() {
  return (
    <main>
      <section className="relative w-full aspect-video overflow-hidden">
        <Image
          src="/assets/cloud-migration-ai-banner.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-start">
          <div className="w-full max-w-6xl pl-6 pr-6 md:pl-12 md:pr-10 lg:pl-16 lg:pr-14">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                Cloud Migration Data and AI Transformation Services
              </h1>
              <p className="mt-6 text-2xl font-semibold text-white/95 md:text-3xl">
                Enabling Intelligent Future Ready Enterprises
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F5F5F5] py-16 md:py-20">
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20">
          <p className="w-full text-[20px] leading-relaxed text-[#000000]">
            KPH Tech delivers professional cloud migration, data modernization, and AI transformation services for B2B and enterprise organizations across Canada and the United States.
          </p>
          <p className="mt-6 w-full text-[20px] leading-relaxed text-[#000000]">
            Modern enterprises must modernize legacy infrastructure, optimize data platforms, and integrate artificial intelligence to remain competitive. Our cloud migration and AI transformation services are designed to reduce complexity, improve performance, and unlock measurable business value.
          </p>
          <p className="mt-6 w-full text-[20px] leading-relaxed text-[#000000]">
            We help organizations transition workloads, modernize data environments, and deploy AI solutions that support operational efficiency, advanced analytics, and long-term scalability.
          </p>
          <p className="mt-6 w-full text-[20px] leading-relaxed text-[#000000]">
            Every engagement begins with understanding business objectives, technical dependencies, compliance requirements, and growth strategy. From migration planning to AI implementation, we ensure secure, structured, and performance-driven outcomes.
          </p>
        </div>
      </section>

      {SERVICE_SECTIONS.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className={`w-full py-16 md:py-20 ${i % 2 === 0 ? "bg-[#b8e0d5]" : "bg-[#F8F8F8]"}`}
        >
          <div className="grid w-full grid-cols-1 md:grid-cols-2">
            <div className="hidden md:block" />
            <div className="px-6 py-0 md:px-10 lg:px-14">
              <h2 className="text-2xl font-bold text-[#000000] md:text-3xl">
                {section.title}
              </h2>
              <p className="mt-2 text-xl font-medium text-[#218779]">
                {section.tagline}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#000000]">
                {section.intro}
              </p>
              <ul className="mt-6 space-y-2 pl-6 list-disc text-lg text-[#000000]">
                {section.bullets.map((bullet, j) => (
                  <li key={j} className="list-disc">
                    {bullet}
                  </li>
                ))}
              </ul>
              {section.outcome && (
                <p className="mt-6 rounded-lg border-l-4 border-[#218779] bg-white/80 px-4 py-3 text-lg font-medium text-[#000000]">
                  {section.outcome}
                </p>
              )}
            </div>
          </div>
        </section>
      ))}

      <section
        className="w-full py-16 md:py-20"
        style={{
          background: "linear-gradient(to right, #186b62 0%, #218779 25%, #2da89a 50%, #5bc4b8 75%, #8fd9d0 100%)",
        }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <h2 className="text-2xl font-bold text-white md:text-3xl [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
            Build an Intelligent Cloud Foundation
          </h2>
          <p className="mt-4 text-lg text-white/95 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
            Partner with us to migrate, modernize, and optimize secure, scalable, and intelligent cloud environments built for future growth.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-[#186b62] transition hover:opacity-95"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <section className="w-full bg-[#eaeff8] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <h2 className="text-center text-2xl font-bold text-[#000000] md:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
            {[0, 1, 2].map((rowIndex) => (
              <React.Fragment key={rowIndex}>
                {FAQ_ITEMS[rowIndex] && (
                  <div className="border-b border-[#E0E0E0] pb-6">
                    <p className="text-[20px] font-semibold text-[#000000]">
                      {FAQ_ITEMS[rowIndex].q}
                    </p>
                    <p className="mt-2 text-[18px] leading-relaxed text-[#000000]">
                      {FAQ_ITEMS[rowIndex].a}
                    </p>
                  </div>
                )}
                {FAQ_ITEMS[rowIndex + 3] ? (
                  <div className="border-b border-[#E0E0E0] pb-6">
                    <p className="text-[20px] font-semibold text-[#000000]">
                      {FAQ_ITEMS[rowIndex + 3].q}
                    </p>
                    <p className="mt-2 text-[18px] leading-relaxed text-[#000000]">
                      {FAQ_ITEMS[rowIndex + 3].a}
                    </p>
                  </div>
                ) : (
                  <div />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
