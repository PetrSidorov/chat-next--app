import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get("amazing-chat");
  // if (request.nextUrl.pathname == "/chat" && !sessionToken) {
  //   // return NextResponse.redirect(new URL("/", request.url));
  // }

  const apiUrl = new URL(`/api/`, request.nextUrl.origin);
  const apiResponse = await fetch(apiUrl.toString(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sessionToken?.value),
  });

  const responseText = await apiResponse.text();

  if (apiResponse.ok) {
    const user = JSON.parse(responseText);
    // console.log("hi", user);
  } else {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (!sessionToken) {
    // return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
