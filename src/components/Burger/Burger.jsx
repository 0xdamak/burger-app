import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";
import Classes from "./Burger.module.scss";

function Burger({ ingredients }) {
  const ingredientsArray = Object.keys(ingredients);

  const classNames = {
    salad: "Salad",
    cheese: "Cheese",
    meat: "Meat",
    tomato: "Tomato",
    onion: "Onion",
    pear: "Pear",
  };

  let _burger = ingredientsArray
    .map((ingredient) => {
      return [...Array(ingredients[ingredient].quantity)].map((_, index) => {
        return (
          <BurgerIngredient
            key={ingredient + index}
            ingredientType={ingredient}
            className={Classes[classNames[ingredient]]}
          />
        );
      });
    })
    .flat(1);

  return (
    <div className={Classes.Wrapper}>
      <AnimatePresence>
        <motion.div
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ duration: 0.6 }}
          className={Classes.Burger}
        >
          <BurgerIngredient
            ingredientType="top-bun"
            className={`${Classes.TopBun} ${
              _burger.length === 0 && Classes["mb-1"]
            }`}
          />
          {_burger}
          <BurgerIngredient
            ingredientType="bottom-bun"
            className={Classes.BottomBun}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Burger;
