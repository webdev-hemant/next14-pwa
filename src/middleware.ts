import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { allRoutes } from "./constants/allRoutes";
import { AUTH_SECRET } from "./constants/allEnv";

export async function middleware(req: NextRequest) {
  // @ts-ignore
  const token = await getToken({ req, secret: AUTH_SECRET });

  // If there's no token and the request is not to a public path, redirect to login
  if (!token && !req.nextUrl.pathname.startsWith("/public")) {
    const url = req.nextUrl.clone();
    url.pathname = allRoutes.LOGIN;
    return NextResponse.redirect(url);
  }

  // If token exists or request is to a public path, continue as normal
  return NextResponse.next();
}

// Define which paths this middleware should be applied to
export const config = {
  matcher: ["/settings", "/profile/:id*"],
};
