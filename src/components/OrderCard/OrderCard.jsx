import React from "react";
import Logo from "../../assets/svgs/Logo";
import Classes from "./OrderCard.module.scss";

function OrderCard() {
  return (
    <div className={Classes.Wrapper}>
      <div className={Classes.Image}>
        <Logo />
      </div>
      <div className={Classes.Details}>
        <h4>Order 356358683</h4>
        <p>
          QUANTITY: 1<span></span>
        </p>
        <p>$5.7</p>
      </div>
      <div className={Classes.More}>
        <h5>24/02/22</h5>
      </div>
      {/* <div className={Classes.Less}></div> */}
    </div>
  );
}

export default OrderCard;
