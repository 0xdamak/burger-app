import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { removeUser } from "../../store/features/user";
import { auth } from "../../firebase";
import { logout } from "../../firebase";
import { HomeIcon } from "../../assets/svg/icons";
import { List } from "../../assets/svg/icons";
import { LoginIcon } from "../../assets/svg/icons";
import { LogoutIcon } from "../../assets/svg/icons";
import Styles from "./Navigation.module.scss";

export default function Navigation() {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();

  return (
    <ul className={Styles.NavigationItems}>
      <li className={Styles.ListItem}>
        <NavLink
          to="/app"
          // className={({ isActive }) =>
          //   isActive ? `${Styles.Link} ${Styles.Active}` : Styles.Link
          // }
          className={Styles.Link}
        >
          <HomeIcon /> Home
        </NavLink>
      </li>
      <li className={Styles.ListItem}>
        <NavLink
          to="orders"
          // className={({ isActive }) =>
          //   isActive ? `${Styles.Link} ${Styles.Active}` : Styles.Link
          // }
          className={Styles.Link}
        >
          <List /> Orders
        </NavLink>
      </li>
      <li className={Styles.ListItem}>
        {user ? (
          <div
            onClick={() => {
              logout();
              dispatch(removeUser());
            }}
          >
            <NavLink to="" className={Styles.Link}>
              <LogoutIcon /> Log Out
            </NavLink>
          </div>
        ) : (
          <NavLink
            to="login"
            // className={({ isActive }) =>
            //   isActive ? `${Styles.Link} ${Styles.Active}` : Styles.Link
            // }
            className={Styles.Link}
          >
            <LoginIcon /> Log In
          </NavLink>
        )}
      </li>
    </ul>
  );
}
