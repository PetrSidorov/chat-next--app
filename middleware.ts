// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { validateSession } from "./utils/actions";
import { PrismaClient } from "@prisma/client/edge";

export function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get("amazing-chat")?.value;

  if (sessionToken) {
    let test = validateSession(sessionToken);
    console.log("test ", test);
  }

  //   if (someCookieCondition(someCookie)) {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }
  if (!true) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

function someCookieCondition(cookieValue: string | undefined): boolean {
  // Implement your logic to check the cookie
  // Return true if the condition for redirection is met
  return false;
}
