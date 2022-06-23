import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/svg/icons";
import Styles from "./Header.module.scss";

function Header() {
  const { user } = useSelector((state) => state.user);

  return (
    <div className={Styles.Wrapper}>
      <div className={Styles.Logo}>
        <Link to="/">
          <Logo />
        </Link>
        <h3>Burger App</h3>
      </div>
      <div className={Styles.Profile}>
        <img
          src="https://i.pinimg.com/736x/50/c9/b2/50c9b2e452527a88e18e22dff7a5a2ed.jpg"
          alt="avatar"
        />
        <h4>
          {user?.firstName && "Hi, "}
          {user?.firstName || "Account"}
        </h4>
      </div>
    </div>
  );
}

export default Header;
