import React from "react";
import BuildControl from "./BuildControl/BuildControl";

import Classes from "./BuildControls.module.css";

function BuildControls({ reset, order }) {
  return (
    <div className={Classes.Wrapper}>
      <h3 className={Classes.Price}>Price: $10</h3>
      <div className={Classes.Controls}>
        <BuildControl label="Meat" />
        <BuildControl label="Meat" />
        <BuildControl label="Meat" />
        <BuildControl label="Meat" />
        <BuildControl label="Meat" />
        <BuildControl label="Meat" />
        <BuildControl label="Meat" />
      </div>
      <div className={Classes.Buttons}>
        <button onClick={reset}>Reset</button>
        <button onClick={order}>Order</button>
      </div>
    </div>
  );
}

export default BuildControls;
