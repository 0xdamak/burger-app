import { Logo } from "../../assets/svg/icons";
import Styles from "./OrderCard.module.scss";

function OrderCard() {
  return (
    <div className={Styles.Wrapper}>
      <div className={Styles.Image}>
        <Logo />
      </div>
      <div className={Styles.Details}>
        <h4>Order 356358683</h4>
        <p>
          QUANTITY: 1<span></span>
        </p>
        <p>$5.7</p>
      </div>
      <div className={Styles.More}>
        <h5>24/02/22</h5>
      </div>
      {/* <div className={Styles.Less}></div> */}
    </div>
  );
}

export default OrderCard;
