import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
} from "../../../store/features/burgerBuilderSlice/burgerBuilderSlice";
import Burger from "../../../components/Burger/Burger";
import BuildControls from "../../../components/BuildControls/BuildControls";

import Classes from "./BurgerBuilder.module.css";

function BurgerBuilder() {
  const burgerIngredients = useSelector(
    (state) => state.burgerBuilder.ingredients
  );
  const dispatch = useDispatch();

  function add(id) {
    if (burgerIngredients[id].amount === 5) {
      return;
    }
    console.log(id);
    dispatch(increment(id));
  }

  function remove(id) {
    if (burgerIngredients[id].amount === 0) {
      return;
    }
    console.log(id);
    dispatch(decrement(id));
  }

  return (
    <div className={Classes.Wrapper}>
      <div className={Classes.Burger}>
        <Burger ingredients={burgerIngredients} />
      </div>
      <div className={Classes.Controls}>
        <BuildControls add={(id) => add(id)} remove={(id) => remove(id)} />
      </div>

      {/* BurgerBuilder <br />
      <button onClick={() => dispatch(increment("salad"))}>add</button>
      <br />
      <button onClick={() => dispatch(decrement("salad"))}>remove</button> */}
    </div>
  );
}

export default BurgerBuilder;
