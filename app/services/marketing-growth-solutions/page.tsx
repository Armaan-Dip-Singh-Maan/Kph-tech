import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Marketing & Growth Solutions | KPH Tech",
  description:
    "Strategic growth marketing services for B2B companies. Brand positioning, digital campaigns, product launch, copywriting, SEO, PPC, and more.",
};

const SERVICE_SECTIONS = [
  {
    id: "branding",
    title: "Branding and Awareness",
    tagline: "Build a brand that earns trust and stands out in competitive markets.",
    intro:
      "We help businesses define and articulate a clear brand narrative that resonates with the right audience. Our branding work goes beyond visuals. It establishes positioning, messaging, and consistency across all customer touchpoints.",
    bullets: [
      "Brand positioning strategy",
      "Brand messaging framework aligned to buyer intent",
      "Visual and verbal brand consistency",
      "Consistency across digital and offline channels",
    ],
    outcome: "The result is a brand that is ready to scale.",
  },
  {
    id: "campaigns",
    title: "Digital Campaigns",
    tagline: "Performance Driven Campaigns That Generate Demand",
    intro:
      "We design and execute integrated digital campaigns across paid, owned, and earned channels with a clear focus on ROI. Every campaign is backed by audience insights, structured testing, and continuous optimization.",
    bullets: [
      "Demand generation campaigns",
      "Audience segmentation and targeting",
      "Creative and content development",
      "Multi-channel marketing campaigns",
      "Funnel marketing strategy",
    ],
    outcome: "The outcome is sustained demand generation and measurable contribution to the sales pipeline.",
  },
  {
    id: "launch",
    title: "Product Launch Strategy and Consulting",
    tagline: "Launch Products with Confidence and Market Clarity",
    intro:
      "Launching a product requires more than announcements. It demands clarity, timing, and market readiness. We help businesses bring products to market with confidence through structured launch planning and execution.",
    bullets: [
      "Market and buyer readiness assessment",
      "Product launch consulting",
      "Go to market consulting services",
      "Launch messaging and positioning",
      "Multi-channel activation planning",
      "Post-launch performance evaluation",
    ],
    outcome: "This ensures faster market entry, stronger adoption, and clearer differentiation.",
  },
  {
    id: "copywriting",
    title: "Copywriting",
    tagline: "Messaging that converts, not just communicates.",
    intro:
      "Our copywriting services are built to attract the right audience, communicate value clearly, and drive action. Every piece of content is aligned with SEO best practices and buyer intent.",
    bullets: [
      "B2B copywriting services",
      "Campaign and product messaging",
      "Thought leadership and brand content",
      "SEO content writing services",
    ],
    outcome: "The focus is on clarity, persuasion, and relevance supported by search best practices.",
  },
  {
    id: "marketing-programs",
    title: "Marketing Programs",
    tagline: "Integrated Digital Marketing Programs for Scalable Growth",
    intro:
      "We deliver end-to-end digital marketing services that bring together strategy, execution, and performance insights to drive consistent and scalable growth. Our approach focuses on building demand programs that perform across the full buyer journey.",
    bullets: [
      "Full funnel marketing strategy aligned to business goals",
      "Lead generation marketing services",
      "Content and channel performance analysis",
      "Marketing automation strategy",
    ],
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    tagline: "Build authority, engagement, and brand relevance.",
    intro:
      "Social media is treated as a strategic channel, not just a publishing platform. We help brands with social media strategy and consulting by building meaningful presence and engagement across LinkedIn, Instagram, Facebook, and X.",
    bullets: [
      "B2B social media marketing",
      "Brand voice and narrative development",
      "Community engagement and growth",
      "Performance tracking beyond vanity metrics",
    ],
    outcome: "The result is increased visibility, stronger brand authority, and audience trust.",
  },
  {
    id: "seo",
    title: "SEO and Local SEO",
    tagline: "Long-term visibility that compounds over time.",
    intro:
      "Our SEO strategies are built for sustainable growth, helping businesses rank for the right keywords and attract high-intent traffic.",
    bullets: [
      "Technical SEO consulting",
      "Keyword and content strategy",
      "On-page and off-page optimization",
      "Local SEO and Google Business Profile optimization",
      "B2B SEO strategy",
    ],
    outcome: "This ensures stronger organic presence at both national and local levels.",
  },
  {
    id: "ppc",
    title: "PPC Advertising",
    tagline: "Paid media optimized for efficiency and conversions.",
    intro:
      "We manage high-performance PPC campaigns across Google Ads, LinkedIn Ads, and Meta platforms with a strong focus on lead quality and cost efficiency.",
    bullets: [
      "Campaign and keyword strategy",
      "Audience targeting and retargeting",
      "Creative testing and optimization",
      "Conversion tracking and ROI analysis",
    ],
    outcome: "Every dollar spent is tied back to measurable business outcomes.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What is growth marketing for B2B companies?",
    a: "Growth marketing for B2B companies focuses on generating qualified leads, improving conversion rates, and aligning marketing directly with revenue. It combines SEO, demand generation, analytics, and funnel optimization into one measurable framework.",
  },
  {
    q: "How is growth marketing different from traditional digital marketing?",
    a: "Traditional marketing often prioritizes awareness and traffic. Growth marketing focuses on measurable outcomes such as cost per acquisition, pipeline contribution, and long-term customer value.",
  },
  {
    q: "How long does it take to see results from SEO?",
    a: "SEO is a long-term investment. Most B2B organizations begin seeing measurable improvement in organic traffic within three to six months, depending on competition, domain authority, and consistency of execution.",
  },
  {
    q: "Can growth marketing reduce dependency on paid advertising?",
    a: "Yes. With a strong SEO strategy, content authority, and structured optimization, businesses can build sustainable organic visibility that reduces reliance on paid media over time.",
  },
  {
    q: "Do you provide growth marketing services across Canada and the United States?",
    a: "Yes. KPH Tech supports B2B and technology companies across Canada and the United States, including national and local SEO strategies.",
  },
  {
    q: "How do you measure marketing performance?",
    a: "We measure marketing performance using conversion tracking, lead quality, pipeline influence, and revenue contribution—rather than impressions or vanity metrics.",
  },
];

export default function MarketingGrowthSolutionsPage() {
  return (
    <main>
      {/* Hero — banner image with text on left (1920×1080 = 16:9) */}
      <section className="relative w-full aspect-video overflow-hidden">
        <Image
          src="/assets/marketing-growth-banner.png"
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
                Growth Marketing Services for B2B Companies in Canada and the United States
              </h1>
              <p className="mt-6 text-2xl font-semibold text-white/95 md:text-3xl">
                Turning Strategy into Measurable Growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro paragraphs (moved below banner) */}
      <section className="w-full bg-[#F5F5F5] py-16 md:py-20">
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20">
          <p className="w-full text-[20px] leading-relaxed text-[#000000]">
            At KPH Tech marketing is built to drive business growth. We provide strategic growth marketing services for businesses across Canada and the United States focused on strengthening market presence, generating qualified demand, and delivering measurable revenue impact.
          </p>
          <p className="mt-6 w-full text-[20px] leading-relaxed text-[#000000]">
            Every engagement starts with a clear understanding of business objectives, buyer journeys, and market dynamics. From brand positioning and go-to-market strategy services to performance-driven execution, our work ensures marketing directly supports pipeline growth, customer acquisition, product adoption, and market expansion—not just awareness.
          </p>
          <p className="mt-6 w-full text-[20px] leading-relaxed text-[#000000]">
            We partner with startups, scaling organizations, and established enterprises that expect marketing to perform as a business function—delivering real outcomes through data-driven and technology-enabled strategies aligned to clear and measurable goals.
          </p>
        </div>
      </section>

      {/* Service Sections — half empty left, content on right */}
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
                <p className="mt-2 text-xl font-medium" style={{ color: ["Build a brand that earns trust and stands out in competitive markets.", "Performance Driven Campaigns That Generate Demand", "Launch Products with Confidence and Market Clarity"].includes(section.tagline) ? "#003366" : "#5E5BFF" }}>
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
                  <p className="mt-6 rounded-lg border-l-4 border-white/40 bg-[#003366] px-4 py-3 text-lg font-medium text-white">
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
          background: "linear-gradient(to right, #2e5fbd 0%, #587fca 25%, #829fd7 50%, #abbfe5 75%, #d5dff2 100%)",
        }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Ready to Turn Marketing into a Growth Engine?
          </h2>
          <p className="mt-4 text-lg text-white/95">
            Partner with KPH Tech to build marketing strategies that deliver real business impact.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-[#5E5BFF] transition hover:opacity-95"
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
