import React from "react";
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";

import Classes from "./BurgerAnimated.module.css";

function BurgerAnimated() {
  const ingredients = [
    { type: "top-bun", key: "Top Bun", class: "TopBun" },
    { type: "salad", key: "Salad", class: "Salad" },
    { type: "cheese", key: "Cheese", class: "Cheese" },
    { type: "meat", key: "Meat", class: "Meat" },
    { type: "tomato", key: "Tomato", class: "Tomato" },
    { type: "onion", key: "Onion", class: "Onion" },
    { type: "bottom-bun", key: "Bottom Bun", class: "BottomBun" },
  ];

  return (
    <div className={Classes.BurgerAnimated}>
      {ingredients.map((ingredient) => {
        return (
          <BurgerIngredient
            key={ingredient.key}
            ingredientType={ingredient.type}
            className={Classes[ingredient.class]}
          />
        );
      })}
    </div>
  );
}

export default BurgerAnimated;
