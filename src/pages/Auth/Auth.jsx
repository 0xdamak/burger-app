import React, { useState } from "react";
import Classes from "./Auth.module.scss";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function loginEmail(e) {
    e.preventDefault();
  }

  function loginGoogle(e) {
    e.preventDefault();
  }

  return (
    <div className={Classes.Wrapper}>
      <div className={Classes.Header}>
        <h3>Log In</h3>
        <h3>Create Account</h3>
      </div>

      <div className={Classes.Body}>
        <form className={Classes.Login}>
          <div className={Classes.Inputs}>
            <input
              type="text"
              placeholder="Your Name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={Classes.Buttons}>
            <button onClick={loginEmail}>Log In</button>
            <button onClick={loginGoogle}>Continue with Google</button>
          </div>
        </form>
        <form className={Classes.CreateAccount}>
          <p>
            Create your account in just a few clicks! You can register either
            using your e-mail address or through your Google account.
          </p>
          <div className={Classes.Buttons}>
            <button onClick={loginEmail}>Sign Up with E-mail</button>
            <button onClick={loginGoogle}>Sign Up with Google</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;
