import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";

import Classes from "./Live.module.css";

function Live() {
  return (
    <div className={Classes.Wrapper}>
      <div className={Classes.Header}>
        <Header />
      </div>
      <div className={Classes.Body}>
        <SideBar />
        <div className={Classes.Content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Live;
