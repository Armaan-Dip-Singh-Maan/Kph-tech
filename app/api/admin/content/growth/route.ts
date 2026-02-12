import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  await prisma.siteConfig.upsert({
    where: { id: "default" },
    create: {
      id: "default",
      growthParagraph: body.growthParagraph ?? "",
      growthImageUrl: body.growthImageUrl ?? null,
    },
    update: {
      growthParagraph: body.growthParagraph ?? undefined,
      growthImageUrl: body.growthImageUrl ?? undefined,
    },
  });
  return NextResponse.json({ ok: true });
}
