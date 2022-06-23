import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import { formatString } from "../../../utils/formatString";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import Styles from "./Login.module.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  function loginEmail(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  function loginGoogle(e) {
    e.preventDefault();
  }

  useEffect(() => {
    if (user) {
      navigate("/app");
      // console.log(user);
      // toast.success(`Welcome ${user.user.email}!!!`);
    }

    if (error) {
      toast.error(formatString(error.code));
    }
  }, [user, error, navigate]);

  return (
    <form className={Styles.Login} onSubmit={loginEmail}>
      <div className={Styles.Inputs}>
        <input
          type="email"
          placeholder="Your E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          // disabled
        />
      </div>
      {/* <p>Forgot Password?</p> */}
      <div className={Styles.Buttons}>
        <button>
          {loading ? <ClipLoader size={10} color="#ffffff" /> : "Log In"}
        </button>
        <button onClick={loginGoogle}>Continue with Google</button>
      </div>
    </form>
  );
}
