import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const links = Array.isArray(body.links) ? body.links : [];
  await prisma.navLink.deleteMany({});
  await prisma.navLink.createMany({
    data: links.map((l: { label: string; href: string }, i: number) => ({
      label: l.label,
      href: l.href,
      order: i,
    })),
  });
  return NextResponse.json({ ok: true });
}
