import React from "react";
import styles from "./MenuItens.module.css";
import { NavLink } from "react-router-dom";
import {
  AiOutlineFire as FireIcon,
  AiOutlineImport as LoginIcon,
  AiOutlineExport as LogoutIcon,
  AiOutlineMessage as ChatIcon,
  AiOutlineShoppingCart as CartIcon,
} from "react-icons/ai";
import { FiUser as UserImg } from "react-icons/fi";
import "../../assets/Icons/style.css";
import { useState, useEffect } from "react";
import { close } from "../../store/reducer/ClickMenu";
import { verifyLogin } from "../../store/reducer/LoginSystem";
import { useSelector, useDispatch } from "react-redux";
function MenuItens() {
  const isLogged = localStorage.getItem("logged") === "true" ? true : false;
  const dispatch = useDispatch();
  function closeMenu() {
    dispatch(close());
  }
  function logout() {
    localStorage.setItem("logged", false);
    dispatch(verifyLogin());
  }
  return (
    <div className={styles.menuItens}>
      <ul className={styles.listItens}>
        {isLogged && (
          <NavLink to="/user">
            <li onClick={closeMenu}>
              User
              <i className={`${styles.icons}`}>
                {" "}
                <UserImg />
              </i>
            </li>
          </NavLink>
        )}
        <NavLink to="/">
          <li onClick={closeMenu}>
            Products
            <i className={`${styles.icons}`}>
              {" "}
              <FireIcon />
            </i>
          </li>
        </NavLink>
        {isLogged && (
          <NavLink to="/cart">
            <li onClick={closeMenu}>
              Cart
              <i className={`${styles.icons}`}>
                {" "}
                <CartIcon />
              </i>
            </li>
          </NavLink>
        )}
        {isLogged ? (
          <NavLink to="/">
            <li
              onClick={() => {
                logout(), closeMenu();
              }}
            >
              Logout
              <i className={`${styles.icons}`}>
                {" "}
                <LogoutIcon />
              </i>
            </li>
          </NavLink>
        ) : (
          <NavLink to="/login">
            <li onClick={closeMenu}>
              Login
              <i className={`${styles.icons}`}>
                {" "}
                <LoginIcon />
              </i>
            </li>
          </NavLink>
        )}
      </ul>
    </div>
  );
}

export default MenuItens;
