import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Security Compliance & Data Protection | KPH Tech",
  description:
    "Professional backup, disaster recovery, and data protection services for B2B and enterprise organizations in Canada and the United States.",
};

const SERVICE_SECTIONS = [
  {
    id: "backup-dr",
    title: "Backup and Disaster Recovery Solutions",
    tagline: "Business continuity depends on reliable backup and disaster recovery planning.",
    intro:
      "We design and implement comprehensive backup and disaster recovery solutions in Canada and the United States to minimize downtime, protect sensitive data, and ensure compliance readiness.",
    bullets: [
      "Enterprise backup architecture design",
      "Disaster recovery planning and implementation",
      "Recovery time objective and recovery point objective alignment",
      "Hybrid and cloud-based backup solutions",
      "Continuous data protection strategy",
      "Backup validation and recovery testing",
    ],
    outcome:
      "Our solutions ensure rapid restoration, reduced data loss, and structured resilience planning.",
  },
  {
    id: "data-protection",
    title: "Enterprise Data Protection Platforms",
    tagline: "Effective data protection requires reliable enterprise-grade platforms.",
    intro:
      "KPH Tech provides implementation, configuration, and ongoing support for leading data protection technologies including Veritas NetBackup, Backup Exec, Veeam, Commvault, Arctera, and IBM Tivoli.",
    bullets: [
      "Platform architecture design",
      "Backup policy configuration",
      "Data retention strategy implementation",
      "Performance tuning and optimization",
      "Monitoring and reporting integration",
      "Secure storage configuration",
    ],
    outcome:
      "Our data protection services improve visibility, enhance compliance, and ensure reliable workload protection.",
  },
  {
    id: "dr-architecture",
    title: "Disaster Recovery Architecture for On-Premises, Cloud and Hybrid Environments",
    tagline: "Modern infrastructure requires advanced disaster recovery architecture that supports distributed environments.",
    intro:
      "We design disaster recovery architectures using Veritas and Veeam technologies to support on-premises, cloud, and hybrid environments across Canada and the United States.",
    bullets: [
      "Secondary site design",
      "Cloud-based disaster recovery configuration",
      "Hybrid recovery orchestration",
      "Replication and failover planning",
      "Recovery automation",
      "Business continuity alignment",
    ],
    outcome:
      "Our disaster recovery services reduce operational risk, strengthen resilience, and support regulatory compliance.",
  },
  {
    id: "compliance",
    title: "Compliance and Governance Alignment",
    tagline: "Data protection strategies must align with regulatory and industry requirements.",
    intro:
      "We help organizations implement governance frameworks, documentation processes, and compliance-aligned backup strategies to support audit readiness and risk reduction.",
    bullets: [
      "Policy development",
      "Audit preparation support",
      "Data classification strategy",
      "Retention policy alignment",
      "Risk assessment and mitigation planning",
    ],
    outcome:
      "This ensures data protection initiatives support long-term compliance objectives.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Do you provide backup and disaster recovery services in Canada?",
    a: "Yes. KPH Tech provides backup, disaster recovery, and data protection services across Canada and the United States for enterprise organizations.",
  },
  {
    q: "What data protection platforms do you support?",
    a: "We support Veritas NetBackup, Backup Exec, Veeam, Commvault, Arctera, and IBM Tivoli platforms.",
  },
  {
    q: "Can you design disaster recovery for hybrid environments?",
    a: "Yes. We design disaster recovery architecture for on-premises, cloud, and hybrid environments aligned to business continuity objectives.",
  },
  {
    q: "How do you ensure compliance in backup strategies?",
    a: "We align backup architecture, retention policies, and governance controls with regulatory requirements and audit standards.",
  },
  {
    q: "Do you provide ongoing support for data protection platforms?",
    a: "Yes. We provide monitoring, optimization, policy updates, and performance tuning services for enterprise data protection environments.",
  },
];

export default function SecurityCompliancePage() {
  return (
    <main>
      <section className="relative w-full aspect-video overflow-hidden">
        <Image
          src="/assets/security-compliance-banner.png"
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
                Security Compliance and Data Protection Services
              </h1>
              <p className="mt-6 text-2xl font-semibold text-white/95 md:text-3xl">
                Protecting Critical Systems, Data, and Business Continuity
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F5F5F5] py-16 md:py-20">
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20">
          <p className="w-full text-[20px] leading-relaxed text-[#000000]">
            KPH Tech delivers security compliance and data protection services for B2B and enterprise organizations across Canada and the United States.
          </p>
          <p className="mt-6 w-full text-[20px] leading-relaxed text-[#000000]">
            Modern enterprises must protect critical workloads, ensure regulatory compliance, and maintain operational continuity in the face of disruption. Our security and data protection services are designed to strengthen resilience, reduce risk, and support rapid recovery across on-premises, cloud, and hybrid environments.
          </p>
          <p className="mt-6 w-full text-[20px] leading-relaxed text-[#000000]">
            We help organizations design structured backup strategies, implement enterprise data protection platforms, and build disaster recovery architectures aligned with compliance and business objectives.
          </p>
          <p className="mt-6 w-full text-[20px] leading-relaxed text-[#000000]">
            Every engagement begins with understanding regulatory requirements, workload criticality, recovery objectives, and risk exposure. From assessment to deployment, we ensure secure and performance-driven data protection frameworks.
          </p>
        </div>
      </section>

      {SERVICE_SECTIONS.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className={`w-full py-16 md:py-20 ${i % 2 === 0 ? "bg-[#D4E2FA]" : "bg-[#F8F8F8]"}`}
        >
          <div className="grid w-full grid-cols-1 md:grid-cols-2">
            <div className="hidden md:block" />
            <div className="px-6 py-0 md:px-10 lg:px-14">
              <h2 className="text-2xl font-bold text-[#000000] md:text-3xl">
                {section.title}
              </h2>
              <p className="mt-2 text-xl font-medium text-[#3261D1]">
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
                <p className="mt-6 rounded-lg border-l-4 border-[#3261D1] bg-white/80 px-4 py-3 text-lg font-medium text-[#000000]">
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
          background: "linear-gradient(to right, #244DB6 0%, #3261D1 25%, #5a7ee0 50%, #8da8ed 75%, #ffffff 100%)",
        }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <h2 className="text-2xl font-bold text-white md:text-3xl [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
            Strengthen Your Data Protection and Recovery Strategy
          </h2>
          <p className="mt-4 text-lg text-white/95 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
            Partner with us to design, implement, and optimize secure, resilient, and compliant data protection environments built for long-term stability.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-[#3261D1] transition hover:opacity-95"
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
