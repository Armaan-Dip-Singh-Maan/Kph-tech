import { cache } from "react";
import { prisma } from "./prisma";

// Fallback when DB is missing or fails (e.g. Vercel without database) – exported for use in page if needed
export const fallbackServices = [
  { id: "f1", title: "Marketing & Growth Solutions", gradientFrom: "#5f72ee", gradientTo: "#6c5ce7", icon: "marketing", image: "/assets/service-card-1-marketing.png" },
  { id: "f2", title: "Design & Creative Services", gradientFrom: "#a770ef", gradientTo: "#cf75ed", icon: "design", image: "/assets/service-card-2-design.png" },
  { id: "f3", title: "Web & Mobile Application Development", gradientFrom: "#2afafc", gradientTo: "#4adeca", icon: "webmobile", image: "/assets/service-card-3-web-mobile.png" },
  { id: "f4", title: "Cloud Transformation & Platform Engineering", gradientFrom: "#6c5ce7", gradientTo: "#4e54c8", icon: "cloud", image: "/assets/service-card-4-cloud.png" },
  { id: "f5", title: "Cloud Migration & Data/AI Transformation", gradientFrom: "#38C4AF", gradientTo: "#64D4C4", icon: "migration", image: "/assets/service-card-5-cloud-migration.png" },
  { id: "f6", title: "Infrastructure Virtualization & Modernization", gradientFrom: "#724CBE", gradientTo: "#8F6EBE", icon: "infrastructure", image: "/assets/service-card-6-infrastructure.png" },
  { id: "f7", title: "Security & Compliance", gradientFrom: "#386CB7", gradientTo: "#275A9C", icon: "security", image: "/assets/service-card-7-security-compliance.png" },
  { id: "f8", title: "Enterprise Security Architecture & Technical Assessments", gradientFrom: "#A087C9", gradientTo: "#8D7EA0", icon: "enterprise", image: "/assets/service-card-8-enterprise-security.png" },
];

export const fallbackFeatures = [
  { id: "fe1", title: "Better Pricing", description: "Competitive rates without compromising on enterprise-grade quality", icon: "pricing", side: "left", iconBg: "#D5E7FA", iconColor: "#42A5F5" },
  { id: "fe2", title: "Global Team Experience", description: "Professionals from Fortune 500 and leading MNCs worldwide", icon: "team", side: "right", iconBg: "#D5E7FA", iconColor: "#42A5F5" },
  { id: "fe3", title: "MNC-Level Expertise", description: "Enterprise-grade solutions backed by certified professionals", icon: "expertise", side: "left", iconBg: "#FDF2E3", iconColor: "#FF8C00" },
  { id: "fe4", title: "Faster Delivery", description: "Agile methodologies ensuring rapid deployment without compromising quality.", icon: "delivery", side: "right", iconBg: "#FFE0B2", iconColor: "#FF9900" },
  { id: "fe5", title: "End-to-End Services", description: "Complete IT, Cloud, Marketing, and Design solutions under one roof", icon: "e2e", side: "left", iconBg: "#D5E7FA", iconColor: "#42A5F5" },
  { id: "fe6", title: "Certified Cloud Experts", description: "Team certified in AWS, Azure, GCP, and other leading platforms.", icon: "cloud", side: "right", iconBg: "#B3E5FC", iconColor: "#66B2FF" },
];

export const fallbackPartners = [
  { id: "p1", name: "TECH CONNECT", logoType: "techconnect", accentColor: "#E64A19" },
  { id: "p2", name: "Partner 2", description: "Description of partner 2 and our collaboration.", logoType: "placeholder", accentColor: null },
];

const fallbackFooterLinks = {
  services: [
    { id: "fs1", label: "Marketing & Growth", href: "#services" },
    { id: "fs2", label: "Web & Mobile Development", href: "#services" },
    { id: "fs3", label: "Design & Creative", href: "#services" },
    { id: "fs4", label: "Cloud Transformation", href: "#services" },
  ],
  solutions: [
    { id: "fso1", label: "Data & AI", href: "#services" },
    { id: "fso2", label: "Infrastructure", href: "#services" },
    { id: "fso3", label: "Security & Compliance", href: "#services" },
    { id: "fso4", label: "Technical Assessments", href: "#services" },
  ],
  company: [
    { id: "fc1", label: "About Us", href: "#" },
    { id: "fc2", label: "Careers", href: "#" },
    { id: "fc3", label: "Case Studies", href: "#" },
    { id: "fc4", label: "Contact", href: "#contact" },
  ],
};

const fallbackSocialLinks = [
  { id: "s1", platform: "linkedin", url: "https://www.linkedin.com/company/kph-tech/" },
  { id: "s2", platform: "twitter", url: "https://twitter.com" },
  { id: "s3", platform: "facebook", url: "https://facebook.com" },
  { id: "s4", platform: "instagram", url: "https://instagram.com" },
];

const fallbackSiteConfig = {
  id: "default",
  heroHeadline: "Your Digital Transformation Partner",
  heroSubtitle: "End-to-end IT managed services, strategic marketing solutions, and enterprise-grade development that drive measurable results",
  heroCtaText: "Explore Our Services",
  heroImageUrl: "/assets/Hero_Banner.png",
  valuePropText: "KPH Tech provides",
  valuePropHighlight: "Technology, Growth & Cloud Solutions",
  valuePropSuffix: "Built for Modern Enterprises",
  growthParagraph: "KPH Tech delivers solutions that not only accelerates your business growth but also ensures long-term sustainability and competitive advantage in the digital landscape.",
  growthImageUrl: "/assets/Section_2_banner.png",
  contactHeadline: "Let's Build Something Extraordinary Together",
  contactDescription: "Ready to accelerate your business transformation? Connect with our team to explore how we can help you achieve your strategic objectives.",
  contactEmailLabel: "Email Us",
  contactEmailAddress: "info@kphtech.com",
  footerDescription: "Empowering business growth through enterprise-grade technology, strategic marketing, and innovative solutions.",
  footerCopyright: "© 2026 KPH Tech. All rights reserved.",
  privacyUrl: "#",
  termsUrl: "#",
  cookieUrl: "#",
  partnersHeadline: "At KPH Tech we have global teams working in different time zones which makes us 24*7 available for you",
  partnersSectionTitle: "Our Global Partners",
  servicesHeading: "Our Services",
  whyChooseHeading: "Why modern businesses choose KPH Tech",
};

const fallbackContent = {
  siteConfig: fallbackSiteConfig,
  navLinks: [
    { id: "1", label: "Services", href: "#services" },
    { id: "2", label: "About Us", href: "#about" },
    { id: "3", label: "Contact Us", href: "#contact" },
  ],
  services: fallbackServices,
  features: fallbackFeatures,
  partners: fallbackPartners,
  footer: {
    description: fallbackSiteConfig.footerDescription,
    copyright: fallbackSiteConfig.footerCopyright,
    privacyUrl: fallbackSiteConfig.privacyUrl,
    termsUrl: fallbackSiteConfig.termsUrl,
    cookieUrl: fallbackSiteConfig.cookieUrl,
    services: fallbackFooterLinks.services,
    solutions: fallbackFooterLinks.solutions,
    company: fallbackFooterLinks.company,
  },
  socialLinks: fallbackSocialLinks,
};

export const getContent = cache(async () => {
  try {
    const [siteConfig, navLinks, services, features, partners, footerLinks, socialLinks] =
      await Promise.all([
        prisma.siteConfig.findUnique({ where: { id: "default" } }),
        prisma.navLink.findMany({ orderBy: { order: "asc" } }),
        prisma.service.findMany({ orderBy: { order: "asc" } }),
        prisma.feature.findMany({ orderBy: { order: "asc" } }),
        prisma.partner.findMany({ orderBy: { order: "asc" } }),
        prisma.footerLink.findMany({ orderBy: { order: "asc" } }),
        prisma.socialLink.findMany({ orderBy: { order: "asc" } }),
      ]);

    const footerServices = footerLinks?.filter((l) => l.columnType === "services") ?? [];
    const footerSolutions = footerLinks?.filter((l) => l.columnType === "solutions") ?? [];
    const footerCompany = footerLinks?.filter((l) => l.columnType === "company") ?? [];

    const servicesFromDb = (services ?? []).map((s) => ({
      id: String(s.id),
      title: s.title,
      gradientFrom: s.gradientFrom,
      gradientTo: s.gradientTo,
      icon: s.icon,
      image: s.imageUrl ?? undefined,
    }));
    const servicesList = servicesFromDb.length > 0 ? servicesFromDb : fallbackServices;
    const featuresList = (features ?? []).length > 0 ? (features ?? []).map((f) => ({ ...f, id: String(f.id) })) : fallbackFeatures;
    const partnersList = (partners ?? []).length > 0 ? (partners ?? []).map((p) => ({ ...p, id: String(p.id) })) : fallbackPartners;

    return {
      siteConfig: siteConfig ?? fallbackSiteConfig,
      navLinks: (navLinks ?? []).length > 0 ? (navLinks ?? []).map((n) => ({ ...n, id: String(n.id) })) : fallbackContent.navLinks,
      services: servicesList,
      features: featuresList,
      partners: partnersList,
      footer: {
        description: siteConfig?.footerDescription ?? fallbackSiteConfig.footerDescription,
        copyright: siteConfig?.footerCopyright ?? fallbackSiteConfig.footerCopyright,
        privacyUrl: siteConfig?.privacyUrl ?? "#",
        termsUrl: siteConfig?.termsUrl ?? "#",
        cookieUrl: siteConfig?.cookieUrl ?? "#",
        services: footerServices.length > 0 ? footerServices.map((l) => ({ id: String(l.id), label: l.label, href: l.href })) : fallbackFooterLinks.services,
        solutions: footerSolutions.length > 0 ? footerSolutions.map((l) => ({ id: String(l.id), label: l.label, href: l.href })) : fallbackFooterLinks.solutions,
        company: footerCompany.length > 0 ? footerCompany.map((l) => ({ id: String(l.id), label: l.label, href: l.href })) : fallbackFooterLinks.company,
      },
      socialLinks: (socialLinks ?? []).length > 0 ? (socialLinks ?? []).map((s) => ({ ...s, id: String(s.id) })) : fallbackSocialLinks,
    };
  } catch {
    return fallbackContent;
  }
});
