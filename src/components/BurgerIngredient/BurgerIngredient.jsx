import { motion } from "framer-motion";
import TopBun from "../../assets/images/topBun.png";
import BottomBun from "../../assets/images/bottomBun.png";
import Cheese from "../../assets/images/cheese.png";
import Meat from "../../assets/images/meat.png";
import Onions from "../../assets/images/onions.png";
import Pear from "../../assets/images/pear.png";
import Salad from "../../assets/images/salad.png";
import Tomatoes from "../../assets/images/tomatoes.png";

function BurgerIngredient({ ingredientType, className, style }) {
  let ingredient;

  switch (ingredientType) {
    case "top-bun":
      ingredient = (
        <motion.img
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.1 }}
          src={TopBun}
          style={style}
          alt="top-bun"
          className={className}
        />
      );
      break;
    case "bottom-bun":
      ingredient = (
        <motion.img
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.1 }}
          src={BottomBun}
          style={style}
          alt="bottom-bun"
          className={className}
        />
      );
      break;
    case "cheese":
      ingredient = (
        <motion.img
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.1 }}
          src={Cheese}
          style={style}
          alt="cheese"
          className={className}
        />
      );
      break;
    case "meat":
      ingredient = (
        <motion.img
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.1 }}
          src={Meat}
          style={style}
          alt="meat"
          className={className}
        />
      );
      break;
    case "onion":
      ingredient = (
        <motion.img
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.1 }}
          src={Onions}
          style={style}
          alt="onions"
          className={className}
        />
      );
      break;
    case "pear":
      ingredient = (
        <motion.img
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.1 }}
          src={Pear}
          style={style}
          alt="pear"
          className={className}
        />
      );
      break;
    case "salad":
      ingredient = (
        <motion.img
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.2 }}
          src={Salad}
          style={style}
          alt="salad"
          className={className}
        />
      );
      break;
    case "tomato":
      ingredient = (
        <motion.img
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.1 }}
          src={Tomatoes}
          style={style}
          alt="tomatoes"
          className={className}
        />
      );

      break;
    default:
      ingredient = null;
  }

  return <>{ingredient}</>;
}

export default BurgerIngredient;
