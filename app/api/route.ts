import type { NextApiResponse } from "next";

import db from "@/utils/db";
// To handle a GET request to /api
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const user = await findUserBySessionToken(data);
    if (user) {
      return Response.json({ user });
    } else {
      return Response.json("oh no");
    }
  } catch (error) {
    console.error(error);
    return Response.json("oh no no no");
  }
}
async function findUserBySessionToken(token: string) {
  const userSession = await db.userSession.findUnique({
    where: {
      sessionToken: token,
    },
    include: {
      user: true,
    },
  });

  if (userSession) {
    return userSession.user;
  } else {
    return null;
  }
}
