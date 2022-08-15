import { useState } from "react";

export function Login() {

  const [user, sertUser] = useState({
    email: "",
    password: "",
  });

  return (
    <div>
      <form>
        <input type="email" placeholder = "Email" name="email" id="email" required />
        <input type="password" placeholder = "Password" name="password" id="password" required />
      </form>
    </div>
  )
}
