import Styles from "./Backdrop.module.scss";

export default function Backdrop({ onClick }) {
  return <div onClick={onClick} className={Styles.Wrapper}></div>;
}
