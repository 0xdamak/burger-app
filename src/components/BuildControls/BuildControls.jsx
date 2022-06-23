import React from "react";
import { useSelector } from "react-redux";
import BuildControl from "./BuildControl/BuildControl";
import { ButtonPrimary, Button } from "../UI/Button";
import Classes from "./BuildControls.module.scss";

function BuildControls({ reset, order, add, remove, totalPrice, disabled }) {
  const burger = useSelector((state) => state.burgerBuilder.ingredients);

  const buildControls = [
    { label: "Salad", id: "salad" },
    { label: "Cheese", id: "cheese" },
    { label: "Meat", id: "meat" },
    { label: "Tomato", id: "tomato" },
    { label: "Onion", id: "onion" },
    { label: "Pear", id: "pear" },
  ];

  return (
    <div className={Classes.Wrapper}>
      <h3 className={Classes.Price}>Price: ₦{totalPrice}</h3>
      <div className={Classes.Controls}>
        {buildControls.map((controlType, index) => {
          return (
            <BuildControl
              add={() => add(controlType.id)}
              remove={() => remove(controlType.id)}
              key={controlType.id}
              label={controlType.label}
              quantity={burger[controlType.id].quantity}
              disabled={() => disabled(controlType.id)}
            />
          );
        })}
      </div>
      <div className={Classes.Buttons}>
        <Button onClick={reset}>Reset</Button>
        <ButtonPrimary onClick={order}>Order</ButtonPrimary>
      </div>
    </div>
  );
}

export default BuildControls;
