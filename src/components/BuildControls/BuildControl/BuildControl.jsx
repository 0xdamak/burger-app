import Styles from "./BuildControl.module.scss";

function BuildControl({ add, remove, label, quantity, disabled }) {
  return (
    <div className={Styles.Wrapper}>
      <div className={Styles.Label}>
        <h4>
          {label}: <strong>{quantity}</strong>
        </h4>
      </div>
      <div className={Styles.Buttons}>
        <button onClick={remove}>-</button>
        <button onClick={add}>+</button>
      </div>
    </div>
  );
}

export default BuildControl;
