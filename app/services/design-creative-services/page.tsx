import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Design & Creative Services | KPH Tech",
  description:
    "Professional UX/UI design, graphic design, and video design services for B2B and technology organizations across Canada and the United States.",
};

const SERVICE_SECTIONS = [
  {
    id: "ux-ui",
    title: "UX and UI Design Services",
    tagline: "Modern digital platforms require structured user experience design that reduces friction and improves engagement.",
    intro:
      "Our UX and UI design services focus on building interfaces that are simple, efficient, and aligned with how real users think and operate. We apply research-driven insights and usability principles to ensure every interaction is intentional.",
    bullets: [
      "User research and persona development",
      "Information architecture planning",
      "Wireframing and interactive prototyping",
      "Web application interface design",
      "Mobile app UI design",
      "Usability testing and interface optimization",
    ],
    outcome:
      "As a UX UI design partner we prioritize clarity, navigation efficiency, and conversion performance. The result is improved engagement, stronger retention, and higher user satisfaction.",
  },
  {
    id: "graphic-design",
    title: "Graphic Design Services for Brand and Marketing",
    tagline: "Consistent visual communication strengthens trust and authority.",
    intro:
      "Our graphic design services support marketing teams, sales enablement initiatives, and digital platforms through structured brand-aligned visuals.",
    bullets: [
      "Brand identity refinement",
      "Corporate presentation design",
      "Marketing collateral design",
      "Social media creative assets",
      "Website and digital graphics",
      "Product visual content",
    ],
    outcome:
      "Every design asset is aligned to brand standards, messaging hierarchy, and audience expectations. Strong visual consistency supports recognition, credibility, and market positioning.",
  },
  {
    id: "video-design",
    title: "Video Design and Motion Graphics Services",
    tagline: "Video content plays a critical role in communicating complex ideas and supporting digital marketing strategies.",
    intro:
      "We provide professional video design services including explainer videos, motion graphics, and product demonstration content tailored for B2B and technology organizations.",
    bullets: [
      "Explainer video production",
      "Product demonstration videos",
      "Motion graphics for marketing campaigns",
      "Onboarding and training videos",
      "Promotional video content",
    ],
    outcome:
      "Our focus is clarity, structure, and persuasive storytelling. Well-executed video content improves engagement, simplifies messaging, and strengthens brand authority.",
  },
  {
    id: "design-systems",
    title: "Design Systems for Scalable Growth",
    tagline: "As organizations expand, design consistency becomes essential.",
    intro:
      "We help companies develop structured design systems that ensure cohesive visual identity across websites, applications, marketing assets, and internal platforms.",
    bullets: [
      "Component libraries",
      "Typography and color frameworks",
      "Layout standards",
      "Interface documentation",
      "Scalable design governance",
    ],
    outcome:
      "This structured approach improves efficiency, reduces inconsistencies, and supports long-term growth.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What is included in your UX UI design services?",
    a: "Our UX UI design services include user research, interface design, wireframing, prototyping, usability testing, and continuous optimization for web and mobile platforms.",
  },
  {
    q: "Do you provide design services for B2B companies in Canada and the United States?",
    a: "Yes. We provide UX UI design, graphic design, and video design services for B2B and technology organizations across Canada and the United States.",
  },
  {
    q: "Do you create custom graphic design assets for marketing teams?",
    a: "Yes. We develop presentations, social media creatives, website graphics, and branded marketing materials aligned to business objectives.",
  },
  {
    q: "Do you offer ongoing design support?",
    a: "Yes. We provide ongoing creative services including UX updates, graphic design support, and video production for organizations that require continuous improvement.",
  },
];

export default function DesignCreativeServicesPage() {
  return (
    <main>
      {/* Hero — banner image with text on left */}
      <section className="relative w-full aspect-video overflow-hidden">
        <Image
          src="/assets/design-creative-banner.png"
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
                UX UI Design and Creative Services for B2B, B2C Enterprises
              </h1>
              <p className="mt-6 text-2xl font-semibold text-white/95 md:text-3xl">
                Strategic Design That Enhances User Experience and Drives Engagement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro paragraphs */}
      <section className="w-full bg-[#F5F5F5] py-16 md:py-20">
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20">
          <p className="w-full text-[20px] leading-relaxed text-[#000000]">
            At KPH Tech we deliver professional UX UI design and creative services built for B2B organizations, technology companies, and enterprise platforms across Canada and the United States.
          </p>
          <p className="mt-6 w-full text-[20px] leading-relaxed text-[#000000]">
            Design is not only about appearance. It shapes how users interact with digital products, influences brand perception, and directly impacts conversion performance. Our design services balance creativity, usability, and business alignment to create structured digital experiences that are intuitive, consistent, and built to convert.
          </p>
          <p className="mt-6 w-full text-[20px] leading-relaxed text-[#000000]">
            Every project begins with a clear understanding of user behavior, platform goals, and commercial objectives. From research to implementation, we ensure design supports measurable growth.
          </p>
        </div>
      </section>

      {/* Service Sections */}
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
              <p className="mt-2 text-xl font-medium" style={{ color: ["Consistent visual communication strengthens trust and authority.", "As organizations expand, design consistency becomes essential."].includes(section.tagline) ? "#996699" : "#bcafdb" }}>
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
                <p className="mt-6 rounded-lg border-l-4 border-white/40 bg-[#996699] px-4 py-3 text-lg font-medium text-white">
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
          background: "linear-gradient(to right, #724CBE 0%, #8a6dc7 25%, #a38ed1 50%, #bcafdb 75%, #ffffff 100%)",
        }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <h2 className="text-2xl font-bold text-white md:text-3xl [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
            Build Digital Experiences That Strengthen Engagement
          </h2>
          <p className="mt-4 text-lg text-white/95 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
            Partner with us to create digital experiences that enhance usability, strengthen brand authority, and drive sustained engagement.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-[#724CBE] transition hover:opacity-95"
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
