import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { verifyLogin } from "../store/reducer/LoginSystem";
import { useState } from "react";
import Button from "../components/Button/Button";
import {
  AiFillGoogleSquare as IconGoogle,
  AiFillLinkedin as IconLinkedin,
} from "react-icons/ai";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userNameOrEmail, setUserNameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const getUser = localStorage.getItem("name");
  const getPassword = localStorage.getItem("password");
  const getEmail = localStorage.getItem("email");
  function handleClickLogin() {
    if (userNameOrEmail === getUser || userNameOrEmail === getEmail) {
      if (password === getPassword) {
        localStorage.setItem("logged", true);
        dispatch(verifyLogin());
        setTimeout(() => {
          navigate("/");
        }, 500);
        return;
      }
    }
    alert("[ERROR] Verify your informations");
  }

  return (
    <div className={styles.containerLogin}>
      <div className={styles.addDatasLogin}>
        <div className={styles.loginTitle}>
          <p>Login</p>
        </div>
        <div className={styles.data}>
          <p>
            <label htmlFor="name">Username or Email</label>
            <br></br>
            <input
              type="text"
              value={userNameOrEmail}
              name="password"
              id="1"
              onChange={(e) => setUserNameOrEmail(e.target.value)}
            />
          </p>
        </div>
        <div className={styles.data}>
          <p>
            <label htmlFor="password">Password</label>
            <br></br>
            <input
              type="password"
              value={password}
              name="text"
              id="2"
              onChange={(e) => setPassword(e.target.value)}
            />
          </p>
        </div>

        <div className={styles.forgotPassword}>
          <p>Forgot password?</p>
        </div>
        <Button text="Login" onClick={handleClickLogin} />
        <div className={styles.otherWayLogin}>
          <p className={styles.createAccount}>
            <Link to="/register">Create account</Link>
          </p>
          <p className={styles.otherWay}>Other way for login</p>
          <i>
            <IconGoogle />
          </i>
          <i>
            <IconLinkedin />
          </i>
        </div>
      </div>
    </div>
  );
}

export default Login;
