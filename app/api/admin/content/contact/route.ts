import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  await prisma.siteConfig.upsert({
    where: { id: "default" },
    create: {
      id: "default",
      contactHeadline: body.contactHeadline ?? "",
      contactDescription: body.contactDescription ?? "",
      contactEmailLabel: body.contactEmailLabel ?? "",
      contactEmailAddress: body.contactEmailAddress ?? "",
    },
    update: {
      contactHeadline: body.contactHeadline ?? undefined,
      contactDescription: body.contactDescription ?? undefined,
      contactEmailLabel: body.contactEmailLabel ?? undefined,
      contactEmailAddress: body.contactEmailAddress ?? undefined,
    },
  });
  return NextResponse.json({ ok: true });
}
