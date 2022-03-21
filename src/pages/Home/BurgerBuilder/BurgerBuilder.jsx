import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
} from "../../../store/features/burgerBuilderSlice";
import Burger from "../../../components/Burger";
import BuildControls from "../../../components/BuildControls";
import Classes from "./BurgerBuilder.module.scss";

function BurgerBuilder() {
  const burgerIngredients = useSelector(
    (state) => state.burgerBuilder.ingredients
  );
  const totalPrice = useSelector((state) => state.burgerBuilder.totalPrice);
  const dispatch = useDispatch();

  function add(id) {
    if (burgerIngredients[id].number === 5) {
      return;
    }
    dispatch(increment(id));
  }

  function remove(id) {
    if (burgerIngredients[id].number === 0) {
      return;
    }
    dispatch(decrement(id));
  }

  return (
    <div className={Classes.Wrapper}>
      <div className={Classes.Burger}>
        <Burger ingredients={burgerIngredients} />
      </div>
      <div className={Classes.Controls}>
        <BuildControls
          add={(id) => add(id)}
          remove={(id) => remove(id)}
          totalPrice={totalPrice.toFixed(2)}
          reset={() => dispatch(reset())}
        />
      </div>
    </div>
  );
}

export default BurgerBuilder;
