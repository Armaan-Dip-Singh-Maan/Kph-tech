import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  await prisma.siteConfig.upsert({
    where: { id: "default" },
    create: { id: "default" },
    update: {
      footerDescription: body.footerDescription ?? undefined,
      footerCopyright: body.footerCopyright ?? undefined,
      privacyUrl: body.privacyUrl ?? undefined,
      termsUrl: body.termsUrl ?? undefined,
      cookieUrl: body.cookieUrl ?? undefined,
    },
  });
  if (Array.isArray(body.footerLinks)) {
    await prisma.footerLink.deleteMany({});
    await prisma.footerLink.createMany({
      data: body.footerLinks.map((l: { label: string; href: string; columnType: string }, i: number) => ({
        label: l.label,
        href: l.href,
        columnType: l.columnType,
        order: i,
      })),
    });
  }
  if (Array.isArray(body.socialLinks)) {
    await prisma.socialLink.deleteMany({});
    await prisma.socialLink.createMany({
      data: body.socialLinks.map((s: { platform: string; url: string }, i: number) => ({
        platform: s.platform,
        url: s.url,
        order: i,
      })),
    });
  }
  return NextResponse.json({ ok: true });
}
