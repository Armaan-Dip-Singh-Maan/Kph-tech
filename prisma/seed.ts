import "dotenv/config";
import path from "path";
import { PrismaClient } from "@prisma/client";

// Use same DB as app (Prisma resolves file:./dev.db relative to prisma/)
const dbPath = path.join(process.cwd(), "prisma", "dev.db");
const prisma = new PrismaClient({
  datasources: { db: { url: `file:${dbPath}` } },
});

async function main() {
  await prisma.siteConfig.upsert({
    where: { id: "default" },
    update: {},
    create: {
      id: "default",
      heroHeadline: "Your Digital Transformation Partner",
      heroSubtitle:
        "End-to-end IT managed services, strategic marketing solutions, and enterprise-grade development that drive measurable results",
      heroCtaText: "Explore Our Services",
      heroImageUrl: "/hero-banner.jpg",
      valuePropText: "KPH Tech provides",
      valuePropHighlight: "Technology, Growth & Cloud Solutions",
      valuePropSuffix: "Built for Modern Enterprises",
      growthParagraph:
        "KPH Tech delivers solutions that not only accelerates your business growth but also ensures long-term sustainability and competitive advantage in the digital landscape.",
      growthImageUrl: "/section-2-growth.png",
      contactHeadline: "Let's Build Something Extraordinary Together",
      contactDescription:
        "Ready to accelerate your business transformation? Connect with our team to explore how we can help you achieve your strategic objectives.",
      contactEmailLabel: "Email Us",
      contactEmailAddress: "info@kphtech.com",
      footerDescription:
        "Empowering business growth through enterprise-grade technology, strategic marketing, and innovative solutions.",
      footerCopyright: "© 2026 KPH Tech. All rights reserved.",
      privacyUrl: "#",
      termsUrl: "#",
      cookieUrl: "#",
      partnersHeadline:
        "At KPH Tech we have global teams working in different time zones which makes us 24*7 available for you",
      partnersSectionTitle: "Our Global Partners",
      servicesHeading: "Explore our services",
      whyChooseHeading: "Why modern businesses choose KPH Tech",
    },
  });

  await prisma.navLink.deleteMany({});
  await prisma.navLink.createMany({
    data: [
      { label: "Services", href: "#services", order: 0 },
      { label: "About Us", href: "#about", order: 1 },
      { label: "Contact Us", href: "#contact", order: 2 },
    ],
  });

  await prisma.service.deleteMany({});
  await prisma.service.createMany({
    data: [
      {
        title: "Marketing & Growth Solutions",
        gradientFrom: "#5f72ee",
        gradientTo: "#6c5ce7",
        icon: "marketing",
        imageUrl: "/service-card-1-marketing.png",
        order: 0,
      },
      {
        title: "Design & Creative Services",
        gradientFrom: "#a770ef",
        gradientTo: "#cf75ed",
        icon: "design",
        imageUrl: "/service-card-2-design.png",
        order: 1,
      },
      {
        title: "Web & Mobile Application Development",
        gradientFrom: "#2afafc",
        gradientTo: "#4adeca",
        icon: "webmobile",
        imageUrl: "/service-card-3-web-mobile.png",
        order: 2,
      },
      {
        title: "Cloud Transformation & Platform Engineering",
        gradientFrom: "#6c5ce7",
        gradientTo: "#4e54c8",
        icon: "cloud",
        imageUrl: "/service-card-4-cloud.png",
        order: 3,
      },
      {
        title: "Cloud Migration & Data/AI Transformation",
        gradientFrom: "#38C4AF",
        gradientTo: "#64D4C4",
        icon: "migration",
        order: 4,
      },
      {
        title: "Infrastructure Virtualization & Modernization",
        gradientFrom: "#724CBE",
        gradientTo: "#8F6EBE",
        icon: "infrastructure",
        order: 5,
      },
      {
        title: "Security & Compliance",
        gradientFrom: "#386CB7",
        gradientTo: "#275A9C",
        icon: "security",
        order: 6,
      },
      {
        title: "Enterprise Security Architecture & Technical Assessments",
        gradientFrom: "#A087C9",
        gradientTo: "#8D7EA0",
        icon: "enterprise",
        order: 7,
      },
    ],
  });

  await prisma.feature.deleteMany({});
  await prisma.feature.createMany({
    data: [
      {
        title: "Better Pricing",
        description:
          "Competitive rates without compromising on enterprise-grade quality",
        icon: "pricing",
        side: "left",
        iconBg: "#D5E7FA",
        iconColor: "#42A5F5",
        order: 0,
      },
      {
        title: "Global Team Experience",
        description:
          "Professionals from Fortune 500 and leading MNCs worldwide",
        icon: "team",
        side: "right",
        iconBg: "#D5E7FA",
        iconColor: "#42A5F5",
        order: 1,
      },
      {
        title: "MNC-Level Expertise",
        description:
          "Enterprise-grade solutions backed by certified professionals",
        icon: "expertise",
        side: "left",
        iconBg: "#FDF2E3",
        iconColor: "#FF8C00",
        order: 2,
      },
      {
        title: "Faster Delivery",
        description:
          "Agile methodologies ensuring rapid deployment without compromising quality.",
        icon: "delivery",
        side: "right",
        iconBg: "#FFE0B2",
        iconColor: "#FF9900",
        order: 3,
      },
      {
        title: "End-to-End Services",
        description:
          "Complete IT, Cloud, Marketing, and Design solutions under one roof",
        icon: "e2e",
        side: "left",
        iconBg: "#D5E7FA",
        iconColor: "#42A5F5",
        order: 4,
      },
      {
        title: "Certified Cloud Experts",
        description:
          "Team certified in AWS, Azure, GCP, and other leading platforms.",
        icon: "cloud",
        side: "right",
        iconBg: "#B3E5FC",
        iconColor: "#66B2FF",
        order: 5,
      },
    ],
  });

  await prisma.partner.deleteMany({});
  await prisma.partner.createMany({
    data: [
      {
        name: "TECH CONNECT",
        logoType: "techconnect",
        accentColor: "#E64A19",
        order: 0,
      },
      {
        name: "Partner 2",
        description: "Description of partner 2 and our collaboration.",
        logoType: "placeholder",
        order: 1,
      },
    ],
  });

  await prisma.footerLink.deleteMany({});
  const footerLinks = [
    { label: "Marketing & Growth", href: "#services", columnType: "services", order: 0 },
    { label: "Web & Mobile Development", href: "#services", columnType: "services", order: 1 },
    { label: "Design & Creative", href: "#services", columnType: "services", order: 2 },
    { label: "Cloud Transformation", href: "#services", columnType: "services", order: 3 },
    { label: "Data & AI", href: "#services", columnType: "solutions", order: 0 },
    { label: "Infrastructure", href: "#services", columnType: "solutions", order: 1 },
    { label: "Security & Compliance", href: "#services", columnType: "solutions", order: 2 },
    { label: "Technical Assessments", href: "#services", columnType: "solutions", order: 3 },
    { label: "About Us", href: "#", columnType: "company", order: 0 },
    { label: "Careers", href: "#", columnType: "company", order: 1 },
    { label: "Case Studies", href: "#", columnType: "company", order: 2 },
    { label: "Contact", href: "#contact", columnType: "company", order: 3 },
  ];
  await prisma.footerLink.createMany({ data: footerLinks });

  await prisma.socialLink.deleteMany({});
  await prisma.socialLink.createMany({
    data: [
      { platform: "linkedin", url: "https://linkedin.com", order: 0 },
      { platform: "twitter", url: "https://twitter.com", order: 1 },
      { platform: "facebook", url: "https://facebook.com", order: 2 },
      { platform: "instagram", url: "https://instagram.com", order: 3 },
    ],
  });

  console.log("Seed completed.");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
