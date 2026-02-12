-- CreateTable
CREATE TABLE "SiteConfig" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT 'default',
    "heroHeadline" TEXT NOT NULL DEFAULT 'Your Digital Transformation Partner',
    "heroSubtitle" TEXT NOT NULL DEFAULT 'End-to-end IT managed services, strategic marketing solutions, and enterprise-grade development that drive measurable results',
    "heroCtaText" TEXT NOT NULL DEFAULT 'Explore Our Services',
    "heroImageUrl" TEXT DEFAULT '/hero-banner.jpg',
    "valuePropText" TEXT NOT NULL DEFAULT 'KPH Tech provides',
    "valuePropHighlight" TEXT NOT NULL DEFAULT 'Technology, Growth & Cloud Solutions',
    "valuePropSuffix" TEXT NOT NULL DEFAULT 'Built for Modern Enterprises',
    "growthParagraph" TEXT NOT NULL DEFAULT 'KPH Tech delivers solutions that not only accelerates your business growth but also ensures long-term sustainability and competitive advantage in the digital landscape.',
    "growthImageUrl" TEXT DEFAULT '/section-2-growth.png',
    "contactHeadline" TEXT NOT NULL DEFAULT 'Let''s Build Something Extraordinary Together',
    "contactDescription" TEXT NOT NULL DEFAULT 'Ready to accelerate your business transformation? Connect with our team to explore how we can help you achieve your strategic objectives.',
    "contactEmailLabel" TEXT NOT NULL DEFAULT 'Email Us',
    "contactEmailAddress" TEXT NOT NULL DEFAULT 'info@kphtech.com',
    "footerDescription" TEXT NOT NULL DEFAULT 'Empowering business growth through enterprise-grade technology, strategic marketing, and innovative solutions.',
    "footerCopyright" TEXT NOT NULL DEFAULT '© 2026 KPH Tech. All rights reserved.',
    "privacyUrl" TEXT DEFAULT '#',
    "termsUrl" TEXT DEFAULT '#',
    "cookieUrl" TEXT DEFAULT '#',
    "partnersHeadline" TEXT NOT NULL DEFAULT 'At KPH Tech we have global teams working in different time zones which makes us 24*7 available for you',
    "partnersSectionTitle" TEXT NOT NULL DEFAULT 'Our Global Partners',
    "servicesHeading" TEXT NOT NULL DEFAULT 'Explore our services',
    "whyChooseHeading" TEXT NOT NULL DEFAULT 'Why modern businesses choose KPH Tech',
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "NavLink" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "gradientFrom" TEXT NOT NULL,
    "gradientTo" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "imageUrl" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "Feature" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "side" TEXT NOT NULL,
    "iconBg" TEXT NOT NULL,
    "iconColor" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "Partner" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "logoType" TEXT NOT NULL,
    "accentColor" TEXT,
    "logoUrl" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "FooterLink" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "columnType" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "SocialLink" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "platform" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0
);
