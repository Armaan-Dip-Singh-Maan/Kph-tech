import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Enterprise Security Architecture & Technical Assessments | KPH Tech",
  description:
    "Enterprise security architecture, security audits, and technical assessment services for B2B and enterprise organizations in Canada and the United States.",
};

const SERVICE_SECTIONS = [
  {
    id: "security-platform",
    title: "Enterprise Security Platform Implementation",
    tagline: "Strong security architecture begins with the right platform strategy.",
    intro:
      "We integrate and manage leading enterprise security solutions to protect network infrastructure, endpoints, data, and cloud environments.",
    bullets: [
      "Palo Alto Networks firewall and security configuration",
      "Fortinet security implementation",
      "Trellix threat protection deployment",
      "SentinelOne endpoint security management",
      "Check Point firewall and gateway configuration",
      "Cisco security platform integration",
      "Sophos network and endpoint security",
      "SonicWall security deployment",
      "Astra security solution integration",
    ],
    outcome:
      "Our approach ensures centralized visibility, policy consistency, and operational efficiency across security environments.",
  },
  {
    id: "network-security",
    title: "Network Infrastructure Security Architecture",
    tagline: "Secure network architecture is foundational to enterprise protection.",
    intro:
      "We design, deploy, and configure secure networking platforms to strengthen perimeter defense, internal segmentation, and traffic visibility.",
    bullets: [
      "Cisco network security deployment",
      "Juniper secure infrastructure configuration",
      "Extreme Networks implementation",
      "Secure routing and switching architecture",
      "Network segmentation strategy",
      "Access control policy configuration",
    ],
    outcome:
      "Our network security architecture aligns performance, scalability, and protection standards.",
  },
  {
    id: "assessments",
    title: "Technical Security Assessments and Audits",
    tagline: "Structured assessments provide clarity before major investments or compliance initiatives.",
    intro:
      "We deliver comprehensive security assessments in Canada and the United States that evaluate infrastructure, cloud environments, identity systems, and data protection controls.",
    bullets: [
      "Virtual infrastructure and VDI security assessments",
      "Active Directory security assessments",
      "Data protection assessment services",
      "Cloud security audits",
      "Network security audits",
      "System and endpoint security audits",
      "Pre-ISO security audits",
      "Disaster recovery consulting",
    ],
    outcome:
      "These assessments identify vulnerabilities, configuration gaps, and performance risks while providing prioritized remediation guidance.",
  },
  {
    id: "dr-consulting",
    title: "Disaster Recovery and Resilience Consulting",
    tagline: "Security is closely linked to resilience and recovery readiness.",
    intro:
      "We provide disaster recovery consulting services that evaluate backup strategies, recovery time objectives, infrastructure redundancy, and operational continuity.",
    bullets: [
      "Recovery strategy validation",
      "Backup architecture review",
      "Infrastructure redundancy planning",
      "Business continuity alignment",
    ],
    outcome:
      "This ensures organizations are prepared for disruption while maintaining regulatory and operational compliance.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Do you provide enterprise security services in Canada?",
    a: "Yes. KPH Tech provides enterprise security architecture and technical assessment services across Canada and the United States.",
  },
  {
    q: "What security platforms do you support?",
    a: "We support Palo Alto Networks, Fortinet, Trellix, SentinelOne, Check Point, Cisco, Sophos, SonicWall, and Astra platforms.",
  },
  {
    q: "Do you conduct security audits and compliance assessments?",
    a: "Yes. We perform cloud, network, system, and endpoint security audits along with pre-ISO security assessments.",
  },
  {
    q: "Can you assess Active Directory and virtual infrastructure security?",
    a: "Yes. We conduct structured Active Directory security assessments and virtual infrastructure security reviews.",
  },
  {
    q: "Do you provide disaster recovery consulting?",
    a: "Yes. We evaluate disaster recovery architecture, backup strategies, and resilience planning to strengthen business continuity.",
  },
];

export default function EnterpriseSecurityPage() {
  return (
    <main>
      <section className="relative w-full aspect-video overflow-hidden">
        <Image
          src="/assets/enterprise-security-banner.png"
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
                Enterprise Security Architecture and Technical Assessment
              </h1>
              <p className="mt-6 text-2xl font-semibold text-white/95 md:text-3xl">
                Strengthening Security Posture Through Structured Architecture and Expert Evaluation
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F5F5F5] py-16 md:py-20">
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20">
          <p className="w-full text-[20px] leading-relaxed text-[#000000]">
            KPH Tech delivers enterprise security architecture and technical assessment services for B2B and enterprise organizations across Canada and the United States.
          </p>
          <p className="mt-6 w-full text-[20px] leading-relaxed text-[#000000]">
            Cybersecurity must be proactive, structured, and aligned with business continuity objectives. Modern organizations face increasing regulatory pressure, evolving threat landscapes, and complex hybrid environments. Our security services are designed to identify risk, close gaps, and strengthen long-term resilience.
          </p>
          <p className="mt-6 w-full text-[20px] leading-relaxed text-[#000000]">
            We provide security platform implementation, secure network architecture, and high-value technical assessments that deliver actionable insights and measurable improvements.
          </p>
          <p className="mt-6 w-full text-[20px] leading-relaxed text-[#000000]">
            Every engagement begins with understanding your infrastructure, threat exposure, compliance requirements, and operational priorities. From assessment to remediation, we ensure security controls are aligned with enterprise standards.
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
              <p className="mt-2 text-xl font-medium text-[#8b7aa8]">
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
                <p className="mt-6 rounded-lg border-l-4 border-[#8b7aa8] bg-white/80 px-4 py-3 text-lg font-medium text-[#000000]">
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
          background: "linear-gradient(to right, #724CBE 0%, #8a6dc7 25%, #a38ed1 50%, #bcafdb 75%, #ffffff 100%)",
        }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <h2 className="text-2xl font-bold text-white md:text-3xl [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
            Strengthen Your Enterprise Security Posture
          </h2>
          <p className="mt-4 text-lg text-white/95 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
            Partner with us to design, implement, and validate secure, resilient, and performance-aligned security environments.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-[#724CBE] transition hover:opacity-95"
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
