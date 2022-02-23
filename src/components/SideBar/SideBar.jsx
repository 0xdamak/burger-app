import React from "react";
import Navigation from "../Navigation/Navigation";

import Classes from "./SideBar.module.css";

function SideBar() {
  return (
    <div className={Classes.SideBar}>
      <Navigation />
      <div className={Classes.Footer}>
        &copy; 2022 by{" "}
        <span onClick={() => window.open("https://damak.dev", "_blank")}>
          Damak
        </span>{" "}
        <br />
        Original concept by{" "}
        <span
          onClick={() =>
            window.open(
              "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
              "_blank"
            )
          }
        >
          Maximilian Schwarzmüller
        </span>
      </div>
    </div>
  );
}

export default SideBar;
