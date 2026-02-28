import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Infrastructure Virtualization & Modernization | KPH Tech",
  description:
    "Professional infrastructure virtualization, hyper-converged infrastructure, and enterprise server modernization services for B2B and enterprise organizations in Canada and the United States.",
};

const SERVICE_SECTIONS = [
  {
    id: "virtualization",
    title: "Virtualization Platform Implementation and Support",
    tagline: "Virtualization remains a critical foundation for enterprise infrastructure efficiency and workload flexibility.",
    intro:
      "We provide expert implementation and support for leading virtualization platforms across Canada and the United States. Our services focus on performance optimization, resource allocation, security, and long-term maintainability.",
    bullets: [
      "VMware implementation and optimization",
      "Nutanix virtualization deployment",
      "Microsoft Hyper-V infrastructure configuration",
      "IBM PowerVM environment management",
      "oVirt Linux-based virtualization support",
      "Virtual machine consolidation and capacity planning",
    ],
    outcome:
      "Our virtualization expertise improves resource utilization, enhances availability, and supports scalable infrastructure growth.",
  },
  {
    id: "hci",
    title: "Hyper Converged Infrastructure Design and Management",
    tagline: "Hyper-converged infrastructure simplifies operations while improving performance and scalability.",
    intro:
      "We design and manage VMware and Nutanix HCI environments to reduce hardware complexity, streamline operations, and enhance performance reliability.",
    bullets: [
      "HCI architecture design",
      "Cluster configuration and deployment",
      "Performance tuning and optimization",
      "Storage and compute consolidation",
      "Capacity planning and lifecycle management",
    ],
    outcome:
      "Our hyper-converged infrastructure services support high availability, operational efficiency, and predictable scalability.",
  },
  {
    id: "redhat",
    title: "OpenShift , Kubernetes",
    tagline: "Modern enterprises require consistent application deployment across hybrid and multi-cloud environments.",
    intro:
      "KPH Tech provides specialized Red Hat platform services including OpenShift and OpenStack implementation and management.",
    bullets: [
      "OpenShift container platform deployment",
      "OpenStack infrastructure configuration",
      "Kubernetes cluster management",
      "Hybrid cloud platform integration",
      "Application lifecycle support",
    ],
    outcome:
      "Our Red Hat platform expertise enables standardized deployment, scalability, and infrastructure consistency across environments.",
  },
  {
    id: "server-infrastructure",
    title: "Enterprise Server Infrastructure Deployment",
    tagline: "Reliable hardware architecture remains essential for performance-driven enterprise systems.",
    intro:
      "We provide deployment, optimization, and lifecycle management services for enterprise server infrastructure across Canada and the United States.",
    bullets: [
      "Cisco server deployment",
      "Dell enterprise hardware configuration",
      "HPE infrastructure implementation",
      "Lenovo server optimization",
      "Performance benchmarking",
      "Capacity and redundancy planning",
    ],
    outcome:
      "Our hardware expertise ensures infrastructure stability, resilience, and long-term operational reliability.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Do you provide infrastructure virtualization services in Canada?",
    a: "Yes. KPH Tech provides infrastructure virtualization and modernization services across Canada and the United States for enterprise and B2B organizations.",
  },
  {
    q: "What virtualization platforms do you support?",
    a: "We support VMware, Nutanix, Hyper-V, IBM PowerVM, and oVirt environments.",
  },
  {
    q: "Do you design hyper-converged infrastructure environments?",
    a: "Yes. We design and manage VMware and Nutanix hyper-converged infrastructure solutions aligned to enterprise performance requirements.",
  },
  {
    q: "Can you modernize legacy server infrastructure?",
    a: "Yes. We assess, modernize, and optimize enterprise server infrastructure to improve performance, scalability, and operational efficiency.",
  },
  {
    q: "Do you support Red Hat OpenShift and OpenStack?",
    a: "Yes. We provide Red Hat OpenShift and OpenStack deployment, configuration, and management services.",
  },
];

export default function InfrastructureModernizationPage() {
  return (
    <main>
      <section className="relative w-full aspect-video overflow-hidden">
        <Image
          src="/assets/infrastructure-banner.png"
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
                Infrastructure Virtualization and Modernization Services
              </h1>
              <p className="mt-6 text-2xl font-semibold text-white/95 md:text-3xl">
                Building High Performance Resilient IT Foundations
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F5F5F5] py-16 md:py-20">
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20">
          <p className="w-full text-[20px] leading-relaxed text-[#000000]">
            KPH Tech delivers infrastructure virtualization and modernization services for B2B and enterprise organizations across Canada and the United States.
          </p>
          <p className="mt-6 w-full text-[20px] leading-relaxed text-[#000000]">
            Modern IT environments must be reliable, scalable, and optimized for performance. Legacy infrastructure often creates operational complexity, performance limitations, and increased risk. Our infrastructure modernization services are designed to improve efficiency, strengthen resilience, and support long-term growth.
          </p>
          <p className="mt-6 w-full text-[20px] leading-relaxed text-[#000000]">
            We design, deploy, and manage enterprise-grade infrastructure platforms aligned with business objectives, compliance requirements, and operational demands.
          </p>
          <p className="mt-6 w-full text-[20px] leading-relaxed text-[#000000]">
            Every engagement begins with assessing current infrastructure, performance capacity, constraints, risk exposure, and future scalability requirements. From architecture design to optimization, we ensure stable and future-ready IT foundations.
          </p>
        </div>
      </section>

      {SERVICE_SECTIONS.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className={`w-full py-16 md:py-20 ${i % 2 === 0 ? "bg-[#c5c4f0]" : "bg-[#F8F8F8]"}`}
        >
          <div className="grid w-full grid-cols-1 md:grid-cols-2">
            <div className="hidden md:block" />
            <div className="px-6 py-0 md:px-10 lg:px-14">
              <h2 className="text-2xl font-bold text-[#000000] md:text-3xl">
                {section.title}
              </h2>
              <p className="mt-2 text-xl font-medium text-[#5B5CEF]">
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
                <p className="mt-6 rounded-lg border-l-4 border-[#5B5CEF] bg-white/80 px-4 py-3 text-lg font-medium text-[#000000]">
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
          background: "linear-gradient(to right, #5B5CEF 0%, #7b7bf2 25%, #9b9bf5 50%, #bbbbf8 75%, #ffffff 100%)",
        }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <h2 className="text-2xl font-bold text-white md:text-3xl [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
            Strengthen Your Infrastructure Foundation
          </h2>
          <p className="mt-4 text-lg text-white/95 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
            Partner with us to design, deploy, and optimize resilient, high-performance infrastructure built for long-term growth.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-[#5B5CEF] transition hover:opacity-95"
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
