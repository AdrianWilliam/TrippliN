import React from "react";
import styles from "./MenuMobile.module.css";
import { close } from "../../../store/reducer/ClickMenu";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MenuItens from "../MenuItens";
import { FiX as MenuClose, FiUser as UserImg } from "react-icons/fi";
function MenuMobile() {
  const value = useSelector((state) => state.click.value);
  const dispatch = useDispatch();
  const isLogged = localStorage.getItem("logged");

  return (
    <div
      className={`${styles.MenuMobile} ${
        value ? `${styles.show}` : `${styles.hiding}`
      }`}
    >
      <div className={styles.MenuMobileContainer}>
        <div
          className={`${styles.icons} ${styles.iconClose}`}
          onClick={() => dispatch(close())}
        >
          <MenuClose />
        </div>
        <div className={styles.user}>
          {isLogged === "true" ? (
            <div className={styles.imgUser}>
              <Link to="/user" onClick={() => dispatch(close())}>
                <UserImg />
              </Link>
            </div>
          ) : (
            "You not are logged in"
          )}
        </div>
        <div className={styles.menuMobileItens}>
          <MenuItens />
        </div>
      </div>
    </div>
  );
}

export default MenuMobile;
