"use server";
import "@/scss/chat.scss";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { validateSession } from "@/utils/actions";
import { revalidatePath } from "next/cache";

const Chat = async ({ children }: { children: React.ReactNode }) => {
  const test = validateSession();
  console.log("test: ", test);
  // if (!validateSession()) {
  //   console.log(validateSession());
  //   revalidatePath("/");
  // }
  // const token = cookies().get("amazing-chat");
  // if (token) {
  //   redirect("/");
  // } else if (token) {

  //   console.log(token);
  // }

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default Chat;
// import React from "react";
// import { setCookie } from "@/utils/actions";

// export default function Form() {
//   return (
//     <fieldset className="border-2 border-gray-500 p-3">
//       <legend>Cookies Via Form Action</legend>
//       <form action={setCookie}>
//         <button
//           className="p-2 m-2 border-2 border-gray-500 hover:border-gray-900"
//           type="submit"
//         >
//           Smash it
//         </button>
//       </form>
//       Check Application Cookies
//     </fieldset>
//   );
// }
