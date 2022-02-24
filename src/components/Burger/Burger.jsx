import React from "react";
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";

import Classes from "./Burger.module.css";
import "./Burger.css";

function Burger({ ingredients }) {
  const ingredientsArray = Object.keys(ingredients);

  let _burger = ingredientsArray
    .map((ingredient) => {
      return [...Array(ingredients[ingredient].number)].map((_, index) => {
        return (
          <BurgerIngredient
            key={ingredient + index}
            ingredientType={ingredient}
            className={`${ingredients[ingredient].id}`}
          />
        );
      });
    })
    .flat(1);

  console.log(_burger);

  return (
    <div className={Classes.Wrapper}>
      <div className="Burger">
        <BurgerIngredient ingredientType="top-bun" className="TopBun" />
        {_burger}
        <BurgerIngredient ingredientType="bottom-bun" className="BottomBun" />
      </div>

      {_burger.length === 0 && (
        <div className={Classes.Text}>
          <h4>Start Adding Ingredients</h4>
        </div>
      )}
    </div>
  );
}

export default Burger;
