import { Link } from "react-router-dom";
import Styles from "./Button.module.scss";

export function ButtonPrimary({ children, className, href, onClick }) {
  if (href) {
    return (
      <Link className={`${Styles.ButtonPrimary} ${className}`} to={href}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${Styles.ButtonPrimary} ${className}`}
    >
      {children}
    </button>
  );
}

export function Button({ children, className, href, onClick }) {
  if (href) {
    return (
      <Link className={`${Styles.Button} ${className}`} to={href}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${Styles.Button} ${className}`}>
      {children}
    </button>
  );
}
