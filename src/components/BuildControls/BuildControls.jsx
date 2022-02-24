import React from "react";
import { useSelector } from "react-redux";
import BuildControl from "./BuildControl/BuildControl";

import Classes from "./BuildControls.module.css";

function BuildControls({ reset, order, add, remove, amount }) {
  const burger = useSelector((state) => state.burgerBuilder.ingredients);

  const buildControls = [
    { label: "Salad", id: "salad" },
    { label: "Cheese", id: "cheese" },
    { label: "Meat", id: "meat" },
    { label: "Tomato", id: "tomato" },
    { label: "Onion", id: "onion" },
    { label: "Pear", id: "pear" },
  ];

//   console.log(burger);

  return (
    <div className={Classes.Wrapper}>
      <h3 className={Classes.Price}>Price: $10</h3>
      <div className={Classes.Controls}>
        {buildControls.map((buildControl, index) => {
          return (
            <BuildControl
              add={() => add(buildControl.id)}
              remove={() => remove(buildControl.id)}
              key={buildControl.id}
              label={buildControl.label}
              amount={burger[buildControl.id].amount}
            />
            // console.log(burger[buildControl.id].amount)
          );
        })}
      </div>
      <div className={Classes.Buttons}>
        <button onClick={reset}>Reset</button>
        <button onClick={order}>Order</button>
      </div>
    </div>
  );
}

export default BuildControls;
