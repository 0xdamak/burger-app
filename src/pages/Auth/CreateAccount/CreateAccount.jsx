import Styles from "./CreateAccount.module.scss";

export default function CreateAccount({ onClick }) {
  function googleSignUp(e) {
    e.preventDefault();
  }

  return (
    <div className={Styles.CreateAccount}>
      <p>
        Create your account in just a few clicks! You can sign up either using
        your e-mail address or your Google account.
      </p>
      <div className={Styles.Buttons}>
        <button onClick={onClick}>Sign Up with E-mail</button>
        <button onClick={googleSignUp}>Sign Up with Google</button>
      </div>
    </div>
  );
}
