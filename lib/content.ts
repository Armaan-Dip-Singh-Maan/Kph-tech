import { cache } from "react";
import { prisma } from "./prisma";

const fallbackContent = {
  siteConfig: undefined,
  navLinks: [
    { id: "1", label: "Services", href: "#services" },
    { id: "2", label: "About Us", href: "#about" },
    { id: "3", label: "Contact Us", href: "#contact" },
  ],
  services: [] as { id: string; title: string; gradientFrom: string; gradientTo: string; icon: string; image?: string }[],
  features: [] as { id: string; title: string; description: string; icon: string; side: string; iconBg: string; iconColor: string }[],
  partners: [] as { id: string; name: string; description?: string | null; logoType: string; accentColor?: string | null }[],
  footer: {
    description: "Empowering business growth through enterprise-grade technology, strategic marketing, and innovative solutions.",
    copyright: "© 2026 KPH Tech. All rights reserved.",
    privacyUrl: "#",
    termsUrl: "#",
    cookieUrl: "#",
    services: [] as { id: string; label: string; href: string }[],
    solutions: [] as { id: string; label: string; href: string }[],
    company: [] as { id: string; label: string; href: string }[],
  },
  socialLinks: [] as { id: string; platform: string; url: string }[],
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

    const footerServices = footerLinks.filter((l) => l.columnType === "services");
    const footerSolutions = footerLinks.filter((l) => l.columnType === "solutions");
    const footerCompany = footerLinks.filter((l) => l.columnType === "company");

    return {
      siteConfig: siteConfig ?? undefined,
      navLinks: navLinks ?? [],
      services: (services ?? []).map((s) => ({
        id: s.id,
        title: s.title,
        gradientFrom: s.gradientFrom,
        gradientTo: s.gradientTo,
        icon: s.icon,
        image: s.imageUrl ?? undefined,
      })),
      features: features ?? [],
      partners: partners ?? [],
      footer: {
        description: siteConfig?.footerDescription ?? "",
        copyright: siteConfig?.footerCopyright ?? "",
        privacyUrl: siteConfig?.privacyUrl ?? "#",
        termsUrl: siteConfig?.termsUrl ?? "#",
        cookieUrl: siteConfig?.cookieUrl ?? "#",
        services: footerServices,
        solutions: footerSolutions,
        company: footerCompany,
      },
      socialLinks: socialLinks ?? [],
    };
  } catch {
    return fallbackContent;
  }
});
