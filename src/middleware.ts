// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middleware/withAuth";

export function mainMiddleware(request: NextRequest) {
  const token = request.cookies.get("next-auth.session-token");
  
  if (token && request.nextUrl.pathname.startsWith("/auth/login")) {
    return NextResponse.redirect(new URL("/produk", request.url));
  }

  return NextResponse.next();
}

export default withAuth(mainMiddleware, ["/profile", "/admin", "/editor"]);

export const config = {
  matcher: ["/profile", "/auth/login", "/admin", "/editor"],
};