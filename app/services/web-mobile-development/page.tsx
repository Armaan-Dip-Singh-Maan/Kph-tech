import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Web & Mobile Application Development | KPH Tech",
  description:
    "Professional web application development, mobile app development, and secure website solutions for B2B and enterprise organizations across Canada and the United States.",
};

const SERVICE_SECTIONS = [
  {
    id: "website-development",
    title: "Website Development Services for B2B Organizations",
    tagline: "Your website is a critical business asset that influences credibility, discoverability, and conversion performance.",
    intro:
      "We provide custom website development services built for speed, accessibility, and search engine optimization. Whether developing a corporate website, high-conversion landing page, or enterprise content platform, our solutions are engineered for performance, security, and scalability.",
    bullets: [
      "Custom website design and architecture",
      "Responsive front-end development",
      "SEO optimized structure",
      "Performance optimization for fast loading",
      "Secure hosting configuration",
      "Content management system implementation",
    ],
    outcome:
      "Our website development services are designed to improve search visibility, user experience, and long-term maintainability.",
  },
  {
    id: "web-application",
    title: "Custom Web Application Development",
    tagline: "Businesses today require secure, scalable, and integrated web applications to support operations, collaboration, and customer engagement.",
    intro:
      "We deliver custom web application development services for SaaS platforms, internal enterprise systems, and customer-facing portals. Our engineering process focuses on clean code, structured architecture, database efficiency, and system integration.",
    bullets: [
      "Custom SaaS application development",
      "Enterprise web application development",
      "Business process automation platforms",
      "Secure authentication systems",
      "API development and third-party integration",
      "Cloud-ready application deployment",
    ],
    outcome:
      "Applications are built to handle growing user demand, evolving features, and increased performance requirements.",
  },
  {
    id: "mobile-development",
    title: "Mobile App Development Services",
    tagline: "Mobile applications play a central role in customer engagement and operational efficiency.",
    intro:
      "We provide professional mobile app development services for iOS and Android platforms. Our development process emphasizes usability, security, performance, and long-term maintainability.",
    bullets: [
      "Native iOS application development",
      "Native Android application development",
      "Cross-platform mobile app development",
      "Mobile user interface design",
      "Backend integration and API connectivity",
      "Data security implementation",
    ],
    outcome:
      "Our mobile applications are optimized for performance, device compatibility, and secure data handling across enterprise environments.",
  },
  {
    id: "architecture-security",
    title: "Application Architecture, Security and Performance Optimization",
    tagline: "Scalable application development requires strong technical foundations.",
    intro:
      "We design application architecture that supports high performance, secure data handling, and seamless integration with cloud and enterprise infrastructure. Security best practices are incorporated from initial design through deployment.",
    bullets: [
      "Scalable backend architecture",
      "Cloud integration and infrastructure alignment",
      "Application security best practices",
      "Performance testing and load optimization",
      "Continuous integration and deployment processes",
    ],
    outcome:
      "This structured approach ensures digital platforms remain stable, secure, and adaptable as business needs evolve.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What types of web applications do you develop?",
    a: "We develop custom web applications including SaaS platforms, enterprise systems, customer portals, dashboards, and integrated business applications tailored to B2B and enterprise environments.",
  },
  {
    q: "Do you provide web application development services in Canada?",
    a: "Yes. We provide web application development services for organizations across Canada and the United States, including secure enterprise platforms and SaaS solutions.",
  },
  {
    q: "Do you develop both iOS and Android mobile applications?",
    a: "Yes. We offer native iOS development, native Android development, and cross-platform mobile app development services.",
  },
  {
    q: "How do you ensure application security?",
    a: "Security is integrated into application architecture, authentication mechanisms, data protection standards, and ongoing testing practices.",
  },
  {
    q: "Can your web applications scale as our business grows?",
    a: "Yes. Our custom web application development services are built with scalable architecture, cloud readiness, and performance optimization to support long-term growth.",
  },
  {
    q: "Do you integrate applications with existing enterprise systems?",
    a: "Yes. We design applications with structured API integration and compatibility with existing infrastructure and business systems.",
  },
];

export default function WebMobileDevelopmentPage() {
  return (
    <main>
      {/* Hero — banner image with text on left */}
      <section className="relative w-full aspect-video overflow-hidden">
        <Image
          src="/assets/web-mobile-banner.png"
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
                Web Application and Mobile App Development Services
              </h1>
              <p className="mt-6 text-2xl font-semibold text-white/95 md:text-3xl">
                Scalable, Secure and Performance Driven Digital Platforms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro paragraphs */}
      <section className="w-full bg-[#F5F5F5] py-16 md:py-20">
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20">
          <p className="w-full text-[20px] leading-relaxed text-[#000000]">
            KPH Tech delivers professional web application development and mobile app development services for B2B and enterprise organizations across Canada and the United States.
          </p>
          <p className="mt-6 w-full text-[20px] leading-relaxed text-[#000000]">
            Modern digital platforms must support business growth, integrate with enterprise systems, and scale without performance limitations. Our development approach combines structured architecture, secure engineering, and long-term scalability to ensure applications remain reliable and future-ready.
          </p>
          <p className="mt-6 w-full text-[20px] leading-relaxed text-[#000000]">
            We work with technology companies, SaaS providers, startups, and established enterprises that require custom web application development, mobile app development, and secure website solutions aligned with measurable business objectives.
          </p>
          <p className="mt-6 w-full text-[20px] leading-relaxed text-[#000000]">
            Every engagement begins with understanding business requirements, user expectations, integration complexity, and growth targets. From architecture design to deployment, we ensure applications deliver performance, security, and operational stability.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      {SERVICE_SECTIONS.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className={`w-full py-16 md:py-20 ${
            section.id === "website-development" || section.id === "mobile-development"
              ? "bg-[#b8e0d5]"
              : "bg-[#F8F8F8]"
          }`}
        >
          <div className="grid w-full grid-cols-1 md:grid-cols-2">
            <div className="hidden md:block" />
            <div className="px-6 py-0 md:px-10 lg:px-14">
              <h2 className="text-2xl font-bold text-[#000000] md:text-3xl">
                {section.title}
              </h2>
              <p className="mt-2 text-xl font-medium text-[#5E5BFF]">
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
                <p className="mt-6 rounded-lg border-l-4 border-[#5E5BFF] bg-white/80 px-4 py-3 text-lg font-medium text-[#000000]">
                  {section.outcome}
                </p>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section
        className="w-full py-16 md:py-20"
        style={{
          background: "linear-gradient(to right, #186b62 0%, #218779 25%, #2da89a 50%, #5bc4b8 75%, #8fd9d0 100%)",
        }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <h2 className="text-2xl font-bold text-white md:text-3xl [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
            Build Secure, Scalable Digital Platforms
          </h2>
          <p className="mt-4 text-lg text-white/95">
            Partner with us to design, develop, and optimize digital platforms that support scalability, security, and sustained growth.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-[#186b62] transition hover:opacity-95"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-[#eaeff8] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <h2 className="text-center text-2xl font-bold text-[#000000] md:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
            {[0, 1, 2].map((rowIndex) => (
              <React.Fragment key={rowIndex}>
                <div className="border-b border-[#E0E0E0] pb-6">
                  <p className="text-[20px] font-semibold text-[#000000]">
                    {FAQ_ITEMS[rowIndex].q}
                  </p>
                  <p className="mt-2 text-[18px] leading-relaxed text-[#000000]">
                    {FAQ_ITEMS[rowIndex].a}
                  </p>
                </div>
                <div className="border-b border-[#E0E0E0] pb-6">
                  <p className="text-[20px] font-semibold text-[#000000]">
                    {FAQ_ITEMS[rowIndex + 3].q}
                  </p>
                  <p className="mt-2 text-[18px] leading-relaxed text-[#000000]">
                    {FAQ_ITEMS[rowIndex + 3].a}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
