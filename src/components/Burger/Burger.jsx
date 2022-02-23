import React from "react";
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";

import Classes from "./Burger.module.css";
import "./Burger.css";

function Burger({ ingredients }) {
  const ingredientsArray = Object.keys(ingredients);

  let _burger = ingredientsArray.map((ingredient) => {
    return [...Array(ingredients[ingredient].value)].map((_, index) => {
      return (
        <BurgerIngredient
          key={ingredient + index}
          ingredientType={ingredient}
          className={ingredients[ingredient].id}
        />
      );
    });
  });
  return (
    <div className={Classes.Container}>
      <div className="Burger">
        <BurgerIngredient ingredientType="top-bun" className="TopBun" />
        {_burger}
        <BurgerIngredient ingredientType="bottom-bun" className="BottomBun" />
      </div>
    </div>
  );
}

export default Burger;
