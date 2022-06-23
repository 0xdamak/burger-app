import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
} from "../../../store/features/burgerBuilderSlice";
import { toast } from "react-toastify";
import Burger from "../../../components/Burger";
import BuildControls from "../../../components/BuildControls";
import Modal from "../../../components/UI/Modal";
import OrderSummary from "../../../components/OrderSummary";
import Classes from "./BurgerBuilder.module.scss";

export default function BurgerBuilder() {
  const [displayModal, setDisplayModal] = useState(false);
  const { ingredients } = useSelector((state) => state.burgerBuilder);
  const { totalPrice } = useSelector((state) => state.burgerBuilder);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // console.log(ingredients);
  function add(id) {
    if (ingredients[id].quantity === 3) {
      return;
    }
    dispatch(increment(id));
  }

  function remove(id) {
    if (ingredients[id].quantity === 0) {
      return;
    }
    dispatch(decrement(id));
  }

  function order() {
    const totalQuantity = Object.keys(ingredients)
      .map((ingredient) => ingredients[ingredient].quantity)
      .reduce((prev, curr) => prev + curr);

    if (totalQuantity === 0) {
      toast.warning("Start adding ingredients");
    }

    if (totalQuantity > 0 && !user) {
      toast.warning("Please login to order");
      return;
    }

    if (totalQuantity > 0) {
      setDisplayModal(true);
    }
  }

  function closeModal() {
    setDisplayModal(false);
  }

  return (
    <div className={Classes.Wrapper}>
      <div className={Classes.Burger}>
        <Burger ingredients={ingredients} />
      </div>
      <div className={Classes.Controls}>
        <BuildControls
          add={(id) => add(id)}
          remove={(id) => remove(id)}
          totalPrice={totalPrice.toFixed(2)}
          reset={() => dispatch(reset())}
          order={order}
        />
      </div>
      {displayModal && (
        <Modal onClick={closeModal}>
          <OrderSummary onClick={closeModal}></OrderSummary>
        </Modal>
      )}
    </div>
  );
}
