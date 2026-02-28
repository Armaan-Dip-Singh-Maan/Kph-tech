import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Cloud Transformation & Platform Engineering | KPH Tech",
  description:
    "Professional cloud transformation services, hybrid cloud architecture, and multi-cloud platform engineering for enterprise organizations in Canada and the United States.",
};

const SERVICE_SECTIONS = [
  {
    id: "hybrid-multicloud",
    title: "Hybrid Cloud and Multi Cloud Infrastructure Services",
    tagline: "Enterprise organizations require flexibility without losing governance, control, or cost visibility.",
    intro:
      "We design, deploy, and manage hybrid cloud and multi-cloud infrastructure tailored to regulatory, operational, and performance requirements. Our cloud platform engineering approach ensures secure workload placement, cost optimization, and seamless integration across cloud environments.",
    bullets: [
      "Hybrid cloud architecture design",
      "Multi-cloud strategy consulting",
      "Secure cloud network configuration",
      "Infrastructure modernization",
      "Cloud governance framework implementation",
      "Cost and performance optimization",
    ],
    outcome:
      "Our cloud transformation services help organizations build resilient infrastructure across Microsoft Azure, Amazon Web Services, and Google Cloud Platform.",
  },
  {
    id: "azure",
    title: "Microsoft Azure and Microsoft 365 Cloud Services",
    tagline: "KPH Tech delivers Microsoft Azure cloud services and Microsoft 365 implementation for enterprise clients across Canada and the United States.",
    intro:
      "We support Azure infrastructure, Azure Virtual Desktop, Entra ID identity management, and Microsoft 365 optimization to strengthen productivity, compliance, and performance.",
    bullets: [
      "Azure infrastructure architecture and deployment",
      "Azure Virtual Desktop implementation",
      "Entra ID identity and access management",
      "Microsoft 365 configuration and optimization",
      "Licensing optimization",
      "Data loss prevention implementation",
      "Microsoft Purview compliance configuration",
      "Power Automate workflow automation",
      "Power BI analytics integration",
    ],
    outcome:
      "Our Microsoft Azure services ensure secure, scalable, and compliant enterprise cloud environments.",
  },
  {
    id: "aws",
    title: "Amazon Web Services Architecture and Deployment",
    tagline: "We provide AWS cloud transformation services for organizations seeking scalable and secure cloud infrastructure.",
    intro:
      "Our AWS platform engineering services support infrastructure modernization, serverless deployment, and enterprise data platforms.",
    bullets: [
      "AWS cloud architecture design",
      "Virtual private cloud configuration",
      "Compute and storage optimization",
      "Serverless solutions using AWS Lambda",
      "Enterprise Data Lake architecture",
      "Identity and access management configuration",
      "Cost management optimization",
    ],
    outcome:
      "Our AWS cloud services focus on reliability, scalability, and operational efficiency.",
  },
  {
    id: "gcp",
    title: "Google Cloud Platform Services",
    tagline: "KPH Tech implements and manages Google Cloud Platform environments for analytics, application hosting, and cloud-native workloads.",
    intro:
      "We help organizations leverage GCP for scalable, secure, and performance-driven cloud solutions.",
    bullets: [
      "Cloud infrastructure deployment",
      "Application hosting and scaling",
      "Analytics and data processing platforms",
      "Kubernetes environment configuration",
      "Secure identity management",
      "Performance monitoring and optimization",
    ],
    outcome:
      "Our Google Cloud Platform expertise supports enterprise innovation, agility, and digital transformation.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Do you provide cloud transformation services in Canada?",
    a: "Yes. KPH Tech provides cloud transformation services in Canada and the United States for enterprise and B2B organizations.",
  },
  {
    q: "What cloud platforms do you support?",
    a: "We support Microsoft Azure, Amazon Web Services, and Google Cloud Platform, including hybrid cloud and multi-cloud infrastructure.",
  },
  {
    q: "Can you design hybrid cloud architecture for enterprise environments?",
    a: "Yes. We design secure hybrid cloud infrastructure aligned to compliance, operational, and performance requirements.",
  },
  {
    q: "Do you optimize existing cloud environments?",
    a: "Yes. Our cloud platform engineering services include cost optimization, governance review, and performance improvement.",
  },
  {
    q: "How do you ensure security in cloud transformation projects?",
    a: "Security is integrated into architecture design, identity management, data protection controls, and governance frameworks from planning through deployment.",
  },
];

export default function CloudTransformationPage() {
  return (
    <main>
      <section className="relative w-full aspect-video overflow-hidden">
        <Image
          src="/assets/cloud-transformation-banner.png"
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
                Cloud Transformation and Platform Engineering for Enterprise Organizations
              </h1>
              <p className="mt-6 text-2xl font-semibold text-white/95 md:text-3xl">
                Professional Cloud Transformation Services for B2B and Enterprise Organizations
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F5F5F5] py-16 md:py-20">
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20">
          <p className="w-full text-[20px] leading-relaxed text-[#000000]">
            Modern cloud infrastructure must support scalability, security, performance, and operational efficiency. Our cloud transformation and platform engineering services are designed to modernize legacy systems, reduce operational complexity, and align cloud strategy with measurable business outcomes.
          </p>
          <p className="mt-6 w-full text-[20px] leading-relaxed text-[#000000]">
            We deliver hybrid cloud architecture, multi-cloud infrastructure design, and enterprise cloud platform engineering built for long-term growth and resilience.
          </p>
          <p className="mt-6 w-full text-[20px] leading-relaxed text-[#000000]">
            Every engagement begins with understanding business objectives, compliance requirements, workload demands, and integration complexity. From cloud strategy to implementation, we ensure secure, scalable, and performance-driven environments.
          </p>
        </div>
      </section>

      {SERVICE_SECTIONS.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className={`w-full py-16 md:py-20 ${i % 2 === 0 ? "bg-[#bcafdb]" : "bg-[#F8F8F8]"}`}
        >
          <div className="grid w-full grid-cols-1 md:grid-cols-2">
            <div className="hidden md:block" />
            <div className="px-6 py-0 md:px-10 lg:px-14">
              <h2 className="text-2xl font-bold text-[#000000] md:text-3xl">
                {section.title}
              </h2>
              <p className="mt-2 text-xl font-medium text-[#6c5ce7]">
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
                <p className="mt-6 rounded-lg border-l-4 border-[#6c5ce7] bg-white/80 px-4 py-3 text-lg font-medium text-[#000000]">
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
          background: "linear-gradient(to right, #6c5ce7 0%, #8a7aec 25%, #a398f1 50%, #bcb6f6 75%, #ffffff 100%)",
        }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <h2 className="text-2xl font-bold text-white md:text-3xl [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
            Build a Secure, Scalable Cloud Foundation
          </h2>
          <p className="mt-4 text-lg text-white/95 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
            Partner with us to design, deploy, and optimize secure, scalable, and high-performance cloud environments built for long-term growth.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-[#6c5ce7] transition hover:opacity-95"
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
