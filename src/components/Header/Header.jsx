import React from "react";
import Logo from "../../assets/svgs/Logo";

import Classes from "./Header.module.css";

function Header() {
  return (
    <div className={Classes.Wrapper}>
      <div className={Classes.Logo}>
        <Logo />
        <h3>Burger App</h3>
      </div>
      <div className={Classes.Profile}>
        <img
          src="https://i.pinimg.com/736x/50/c9/b2/50c9b2e452527a88e18e22dff7a5a2ed.jpg"
          alt="avatar"
        />
        <h4>Damak</h4>
      </div>
    </div>
  );
}

export default Header;
