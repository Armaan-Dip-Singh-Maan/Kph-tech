import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySession, getSessionTokenFromCookie } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (path.startsWith("/api/admin")) {
    const token = getSessionTokenFromCookie(request.headers.get("cookie"));
    const valid = token ? await verifySession(token) : false;
    if (!valid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.next();
  }

  if (path.startsWith("/admin/")) {
    const token = getSessionTokenFromCookie(request.headers.get("cookie"));
    const valid = token ? await verifySession(token) : false;
    if (!valid) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
