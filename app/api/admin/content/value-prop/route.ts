import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  await prisma.siteConfig.upsert({
    where: { id: "default" },
    create: {
      id: "default",
      valuePropText: body.valuePropText ?? "",
      valuePropHighlight: body.valuePropHighlight ?? "",
      valuePropSuffix: body.valuePropSuffix ?? "",
    },
    update: {
      valuePropText: body.valuePropText ?? undefined,
      valuePropHighlight: body.valuePropHighlight ?? undefined,
      valuePropSuffix: body.valuePropSuffix ?? undefined,
    },
  });
  return NextResponse.json({ ok: true });
}
