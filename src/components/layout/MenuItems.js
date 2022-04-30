import React from "react";
import { Link } from "react-router-dom";
import styles from "./MenuItems.module.css";

const MenuItems = () => {
  return (
    <div className={styles.nav__menu}>
      <ul >
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
        <li>
          <Link to="/shop">shop</Link>
        </li>
        <li>
          <Link to="/">footer</Link>
        </li>
      </ul>
    </div>
  );
};
export default MenuItems;
