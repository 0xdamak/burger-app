import React from "react";

import Classes from "./BuildControl.module.css";

function BuildControl({ add, remove, label, amount }) {
  return (
    <div className={Classes.Wrapper}>
      <div className={Classes.Label}>
        <h4>
          {label}: <strong>{amount}</strong>
        </h4>
      </div>
      <div className={Classes.Buttons}>
        <button onClick={remove}>-</button>
        <button onClick={add}>+</button>
      </div>
    </div>
  );
}

export default BuildControl;
