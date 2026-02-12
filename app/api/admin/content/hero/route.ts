import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  await prisma.siteConfig.upsert({
    where: { id: "default" },
    create: {
      id: "default",
      heroHeadline: body.heroHeadline ?? "",
      heroSubtitle: body.heroSubtitle ?? "",
      heroCtaText: body.heroCtaText ?? "",
      heroImageUrl: body.heroImageUrl ?? null,
    },
    update: {
      heroHeadline: body.heroHeadline ?? undefined,
      heroSubtitle: body.heroSubtitle ?? undefined,
      heroCtaText: body.heroCtaText ?? undefined,
      heroImageUrl: body.heroImageUrl ?? undefined,
    },
  });
  return NextResponse.json({ ok: true });
}
