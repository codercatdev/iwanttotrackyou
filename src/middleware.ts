// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");
  console.debug(host);

  if (host === "api.iwanttotrackyou.com") {
    console.debug("redirecting to /api");
    return NextResponse.rewrite(new URL("/api", request.url));
  }
}
