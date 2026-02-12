import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const services = await prisma.service.findMany({ orderBy: { order: "asc" } });
  return NextResponse.json(services);
}

export async function PUT(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const services = Array.isArray(body.services) ? body.services : [];
  await prisma.service.deleteMany({});
  await prisma.service.createMany({
    data: services.map((s: { title: string; gradientFrom: string; gradientTo: string; icon: string; imageUrl?: string; image?: string }, i: number) => ({
      title: s.title,
      gradientFrom: s.gradientFrom ?? "#5f72ee",
      gradientTo: s.gradientTo ?? "#6c5ce7",
      icon: s.icon ?? "cloud",
      imageUrl: s.imageUrl ?? s.image ?? null,
      order: i,
    })),
  });
  return NextResponse.json({ ok: true });
}
