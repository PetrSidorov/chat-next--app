import "@/scss/login-signup.scss";
import { newUser } from "@/utils/actions";
import { loginUser } from "@/utils/actions";
import { cookies } from "next/headers";

import { validateSession } from "@/utils/actions";

export default function LogIn() {
  return (
    <>
      <div className="container">
        <h2>Signup form</h2>
        <form className="register-form" action={newUser}>
          <input name="name" placeholder="Type your name" type="text" />
          <input name="username" placeholder="Type your username" type="text" />
          <input name="email" placeholder="Type your email" type="email" />
          <input name="password" placeholder="password" type="password" />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="container">
        <h2>Login form</h2>
        <form className="register-form" action={loginUser}>
          <input name="username" placeholder="Type your username" type="text" />
          <input name="password" placeholder="password" type="password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
