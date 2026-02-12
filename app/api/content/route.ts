import { getContent } from "@/lib/content";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const content = await getContent();
    return NextResponse.json(content);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to load content" },
      { status: 500 }
    );
  }
}
