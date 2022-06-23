import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Burger from "../Burger";
import { ButtonPrimary, Button } from "../UI/Button";
import Classes from "./OrderSummary.module.scss";

export default function OrderSummary({ onClick }) {
  const burgerIngredients = useSelector(
    (state) => state.burgerBuilder.ingredients
  );
  const totalPrice = useSelector((state) => state.burgerBuilder.totalPrice);
  const ingredients = [];

  for (const keys in burgerIngredients) {
    const _ingredientQuantity = burgerIngredients[keys].quantity;
    if (_ingredientQuantity > 0) {
      const _ingredients = {
        name: keys,
        quantity: _ingredientQuantity,
      };
      ingredients.push(_ingredients);
    }
  }

  return (
    <div className={`${Classes.Wrapper} flex-column space-between`}>
      <div className="flex-row space-between">
        <div className="flex-column">
          <h3 className="mb-1">Your Burger</h3>
          <ul>
            {ingredients.map((ingredient) => (
              <li key={uuidv4()}>
                {ingredient.name}: <span>{ingredient.quantity}</span>
              </li>
            ))}
          </ul>
          <h4 className="mt-2">
            Total: <span>₦{totalPrice}</span>
          </h4>
        </div>
        <Burger ingredients={burgerIngredients}></Burger>
      </div>
      <div className={Classes.Buttons}>
        <Button onClick={onClick} className={Classes.Cancel}>
          Cancel
        </Button>
        <ButtonPrimary href="checkout" className={Classes.Continue}>
          Continue
        </ButtonPrimary>
      </div>
    </div>
  );
}
