import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import Image from "../../images/ubisoft-gaming-logo.png";
import styles from "./mainNavigation.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {BiBasket} from "react-icons/bi"
import MenuItems from "./MenuItems";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const MainNavigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const itemQuantity =  useSelector((state) => state.totalQuantity)

  const nofitFlag = !!itemQuantity;

  console.log(nofitFlag)

  const menuToggleHandler = () => {
    setToggleMenu(true);
  };
  const closeMenuHandler = () => {
    setToggleMenu(false);
  };

  return (
    <header className={styles.nav__header}>
      <img src={Image} alt="logo" width="230" height="70" />

      <nav className={styles.nav__menu}>
        <MenuItems />
      </nav>
      <div className={styles.login__Menu}>
        <a>login/register</a>
        <div className={styles.nav__divider}></div>
        <Link to="/cart"><BiBasket fontSize={25} /></Link>
        { nofitFlag && <p className={styles.notifStyle}>{itemQuantity}</p>}
      </div>
     <div className={styles.hamburgerMenu__container}>
     <GiHamburgerMenu
        color="#ffff"
        fontSize={27}
        className={styles.hamburgerMenu}
        onClick={menuToggleHandler}
      />
      {toggleMenu && (
        <div className={styles.hamburgerMenu__layout} > //transition doent wo
         <div >
         <CgClose
            color="#ffff"
            fontSize={27}
            className={styles.hamburgerMenu__close}
            onClick={closeMenuHandler}
          />
          <MenuItems />
         </div>
        </div>
      )}
     </div>
    </header>
  );
};
export default MainNavigation;
