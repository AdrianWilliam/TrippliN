import React, { useEffect, useState } from "react";
import MenuItens from "./MenuItens";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { open } from "../../store/reducer/ClickMenu";
import { FiMenu as MenuIcon, FiUser as UserImg } from "react-icons/fi";
import { AiOutlineFire as FireIcon } from "react-icons/ai";
function NavBar() {
  const openOrClose = useSelector((state) => state.click.value);
  const dispatch = useDispatch();
  const isLogged = localStorage.getItem("logged") === "true" ? true : false;

  return (
    <nav className={styles.Nav}>
      <div className={styles.ContainerNav}>
        <div className={styles.Logo}><Link to="/">TrippliN</Link></div>
        <div
          className={`${styles.icons} ${
            openOrClose ? `${styles.hiding}` : `${styles.show}`
          }`}
        >
          <div className={styles.IconDefault}>
            {isLogged && (
              <Link to="/user">
                <UserImg />
              </Link>
            )}
            <Link to="/">
              <FireIcon />
            </Link>
          </div>
          <div
            className={styles.iconMenuMobile}
            onClick={() => dispatch(open())}
          >
            <MenuIcon />
          </div>
        </div>
        <div className={styles.MenuItens}>
          <MenuItens />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
