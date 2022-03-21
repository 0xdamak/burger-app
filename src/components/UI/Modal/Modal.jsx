import React from "react";
import Backdrop from "../Backdrop";
import Classes from "./Modal.module.scss";

function Modal({ children }) {
  return (
    <div>
      <Backdrop />
      <div className={Classes.Wrapper}>{children}</div>
    </div>
  );
}

export default Modal;
