import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  const dbUrl = process.env.DATABASE_URL ?? "";
  const hasUrl = !!dbUrl;
  const isSqlite = dbUrl.startsWith("file:");
  const isMySQL = /^mysql:/i.test(dbUrl);

  const out: {
    ok: boolean;
    message: string;
    database: {
      hasUrl: boolean;
      type: "sqlite" | "mysql" | "unknown";
      urlMasked: string;
    };
    counts: { services: number; features: number; partners: number } | null;
    error?: string;
    usingFallback?: boolean;
  } = {
    ok: false,
    message: "",
    database: {
      hasUrl: hasUrl,
      type: isSqlite ? "sqlite" : isMySQL ? "mysql" : "unknown",
      urlMasked: hasUrl ? dbUrl.replace(/:[^:@]+@/, ":****@").slice(0, 50) + "…" : "(not set)",
    },
    counts: null,
  };

  try {
    const [services, features, partners] = await Promise.all([
      prisma.service.findMany({ select: { id: true } }),
      prisma.feature.findMany({ select: { id: true } }),
      prisma.partner.findMany({ select: { id: true } }),
    ]);
    out.ok = true;
    out.message = "Database connected. Sections will use DB data.";
    out.counts = {
      services: services.length,
      features: features.length,
      partners: partners.length,
    };
    if (services.length === 0 && features.length === 0 && partners.length === 0) {
      out.usingFallback = true;
      out.message =
        "Database connected but Services, Why Choose Us, and Partners tables are empty. App will show fallback content until you run the seed.";
    }
    return NextResponse.json(out);
  } catch (e) {
    const err = e instanceof Error ? e.message : String(e);
    out.error = err;
    out.message =
      "Database connection or query failed. The site uses in-memory fallback for Services, Partners, and Why Choose Us so those sections should still appear.";
    out.usingFallback = true;
    return NextResponse.json(out, { status: 200 });
  }
}
