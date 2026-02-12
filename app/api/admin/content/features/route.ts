import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const features = await prisma.feature.findMany({ orderBy: { order: "asc" } });
  return NextResponse.json(features);
}

export async function PUT(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const features = Array.isArray(body.features) ? body.features : [];
  await prisma.feature.deleteMany({});
  await prisma.feature.createMany({
    data: features.map((f: { title: string; description: string; icon: string; side: string; iconBg: string; iconColor: string }, i: number) => ({
      title: f.title,
      description: f.description ?? "",
      icon: f.icon ?? "e2e",
      side: f.side ?? "left",
      iconBg: f.iconBg ?? "#D5E7FA",
      iconColor: f.iconColor ?? "#42A5F5",
      order: i,
    })),
  });
  return NextResponse.json({ ok: true });
}
