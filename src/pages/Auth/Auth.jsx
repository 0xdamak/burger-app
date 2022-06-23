import { useState } from "react";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import Form from "./CreateAccount/Form";
import { ChevronLeft } from "../../assets/svg/icons";
import Classes from "./Auth.module.scss";

export default function Auth() {
  const [activeView, setActiveView] = useState("init");
  return (
    <div className={Classes.Wrapper}>
      <div className={Classes.Header}>
        {activeView !== "init" ? (
          <ChevronLeft onClick={() => setActiveView("init")} />
        ) : (
          <h3>Log In</h3>
        )}
        <h3>Create Account</h3>
      </div>

      <div className={Classes.Body}>
        {activeView === "init" ? (
          <>
            <Login />
            <CreateAccount onClick={() => setActiveView("")} />
          </>
        ) : (
          <Form />
        )}
        {/* {activeView === "create account" && (
          <>
            <Form />
          </>
        )} */}
      </div>
    </div>
  );
}
