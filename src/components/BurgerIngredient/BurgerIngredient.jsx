import React from "react";
import TopBun from "../../assets/images/topBun.png";
import BottomBun from "../../assets/images/bottomBun.png";
import Cheese from "../../assets/images/cheese.png";
import Meat from "../../assets/images/meat.png";
import Onions from "../../assets/images/onions.png";
import Pear from "../../assets/images/pear.png";
import Salad from "../../assets/images/salad.png";
import Tomatoes from "../../assets/images/tomatoes.png";

function BurgerIngredient({ ingredientType, className }) {
  let ingredient;

  switch (ingredientType) {
    case "top-bun":
      ingredient = <img src={TopBun} alt="top-bun" className={className} />;
      break;
    case "bottom-bun":
      ingredient = (
        <img src={BottomBun} alt="bottom-bun" className={className} />
      );
      break;
    case "cheese":
      ingredient = <img src={Cheese} alt="cheese" className={className} />;
      break;
    case "meat":
      ingredient = <img src={Meat} alt="meat" className={className} />;
      break;
    case "onions":
      ingredient = <img src={Onions} alt="onions" className={className} />;
      break;
    case "pear":
      ingredient = <img src={Pear} alt="pear" className={className} />;
      break;
    case "salad":
      ingredient = <img src={Salad} alt="salad" className={className} />;
      break;
    case "tomatoes":
      ingredient = <img src={Tomatoes} alt="tomatoes" className={className} />;

      break;
    default:
      ingredient = null;
  }

  return <React.Fragment>{ingredient}</React.Fragment>;
}

export default BurgerIngredient;
