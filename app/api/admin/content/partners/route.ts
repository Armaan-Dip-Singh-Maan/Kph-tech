import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  await prisma.siteConfig.upsert({
    where: { id: "default" },
    create: { id: "default" },
    update: {
      partnersHeadline: body.partnersHeadline ?? undefined,
      partnersSectionTitle: body.partnersSectionTitle ?? undefined,
    },
  });
  const partners = Array.isArray(body.partners) ? body.partners : [];
  await prisma.partner.deleteMany({});
  await prisma.partner.createMany({
    data: partners.map((p: { name: string; description?: string; logoType: string; accentColor?: string; logoUrl?: string }, i: number) => ({
      name: p.name,
      description: p.description ?? null,
      logoType: p.logoType ?? "placeholder",
      accentColor: p.accentColor ?? null,
      logoUrl: p.logoUrl ?? null,
      order: i,
    })),
  });
  return NextResponse.json({ ok: true });
}
