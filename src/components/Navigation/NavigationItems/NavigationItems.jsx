import React from "react";
import { NavLink } from "react-router-dom";

import Classes from "./NavigationItems.module.css";

function NavigationItems() {
  return (
    <React.Fragment>
      <ul className={Classes.NavigationItems}>
        <li className={Classes.ListItem}>
          <NavLink
            to="/app"
            // className={({ isActive }) =>
            //   isActive ? `${Classes.Link} ${Classes.Active}` : Classes.Link
            // }
            className={Classes.Link}
          >
            Home
          </NavLink>
        </li>
        <li className={Classes.ListItem}>
          <NavLink
            to="orders"
            // className={({ isActive }) =>
            //   isActive ? `${Classes.Link} ${Classes.Active}` : Classes.Link
            // }
            className={Classes.Link}
          >
            Orders
          </NavLink>
        </li>
        <li className={Classes.ListItem}>
          <NavLink
            to="login"
            // className={({ isActive }) =>
            //   isActive ? `${Classes.Link} ${Classes.Active}` : Classes.Link
            // }
            className={Classes.Link}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default NavigationItems;
