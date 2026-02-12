import { NextRequest, NextResponse } from "next/server";
import { createSession, getAdminCookieHeader } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const password = body.password ?? "";
  const expected = process.env.ADMIN_PASSWORD ?? "admin";
  if (password !== expected) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }
  const token = await createSession();
  const response = NextResponse.json({ ok: true });
  response.headers.set("Set-Cookie", getAdminCookieHeader(token));
  return response;
}
