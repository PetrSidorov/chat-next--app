"use server";
import { revalidatePath } from "next/cache";
import db from "./db";
import dbEdge from "./dbEdge";
import { User } from "@prisma/client";
import crypto from "crypto";
import { cookies } from "next/headers";
import { UserSession } from "@prisma/client";
import { redirect } from "next/navigation";

// TODO: throwing error only for now, i'll adjust that later

const newSession = async (user: User, sessionToken: string) => {
  await db.userSession.create({
    data: {
      userId: user.id,
      sessionToken,
      expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    },
  });

  // setCookie("amazing-chat", sessionToken, true);
  // cookies().set("amazing-chat", sessionToken, { secure: true });
  // console.log("sanity", cookies().get("amazing-chat"));
};

export const newUser = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const email = formData.get("email") as string;
  // console.log(name, username, password, email);
  if (!name || !username || !password || !email) {
    throw new Error("Not all fields are there");
  }
  const user = await db.user.create({
    data: {
      name,
      username,
      password,
      email,
    },
  });

  // revalidatePath("/chat");
};

export const loginUser = async (formData: FormData) => {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!username || !password) {
    throw new Error("Not all fields are there");
  }
  const user = await db.user.findUnique({
    where: {
      username,
      password,
    },
  });

  if (user) {
    const sessionToken = crypto.randomBytes(32).toString("hex");
    newSession(user, sessionToken);
    setCookie("amazing-chat", sessionToken, true);
  }

  // revalidatePath("/chat");
};

export const validateSession = async (token: string) => {
  if (!token) {
    return false;
  } else if (token) {
    const cookie = await dbEdge.userSession.findUnique({
      where: {
        sessionToken: token,
      },
    });
    if (!cookie) {
      return false;
    } else {
      return true;
    }
  }
};

// export const validateSession = async () => {
//   const cookieStore = cookies();
//   return cookieStore.getAll().map((cookie) => console.table(cookie));
// };

export const setCookie = async (
  name: string,
  value: string,
  secureLevel: boolean
) => {
  cookies().set(name, value, { secure: secureLevel });
  return Promise.resolve({
    actionNow: Date.now(),
  });
};
