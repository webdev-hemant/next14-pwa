import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { allRoutes } from "./constants/allRoutes";
import { AUTH_SECRET } from "./constants/allEnv";

export async function middleware(req: NextRequest) {
  // Check if the token exists in the cookies
  let token = req.cookies.get("token")?.value;

  // If no token in cookies, attempt to get it from the JWT
  if (!token) {
    token = (await getToken({ req, secret: AUTH_SECRET }))?.token as string;
  }

  // If there's still no token and the request is not to a public path, redirect to login
  if (!token && !req.nextUrl.pathname.startsWith("/public")) {
    const url = req.nextUrl.clone();
    url.pathname = allRoutes.LOGIN;
    return NextResponse.redirect(url);
  }

  if (token) {
    const response = NextResponse.next();
    response.cookies.set("token", token as string, {
      httpOnly: false,
      // secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });
    return response;
  }

  // Continue as normal for public paths
  return NextResponse.next();
}

// Define which paths this middleware should be applied to
export const config = {
  matcher: ["/profile/:id*"],
};
