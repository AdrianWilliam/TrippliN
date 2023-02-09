import React, { useEffect } from "react";
import styles from "./Register.module.css";
import Button from "../components/Button/Button";
import { Link, Route, Routes } from "react-router-dom";
import { useState, UseEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
function Register() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setEmailConfirm] = useState("");
  let [created, setCreated] = useState(false);
  function Success() {
    return (
      <div className={styles.success}>
        <p>Congratulation!</p>
        <p>Your account was created</p>
      </div>
    );
  }
  function register() {
    if (
      userName.length == 0 ||
      password.length == 0 ||
      email.length == 0 ||
      confirmEmail.length == 0 ||
      email !== confirmEmail
    ) {
      alert("[ERROR] Verify your informations ");
      return;
    }
    localStorage.setItem("name", userName);
    localStorage.setItem("password", password);
    localStorage.setItem("email", email);
    setCreated(!created);
    setTimeout(() => {
      navigate("/login");
    }, 2500);
  }
  return (
    <div className={styles.containerRegister}>
      {created ? <Success /> : null}
      <div className={styles.addDatasRegister}>
        <div className={styles.registerTitle}>
          <p>Register</p>
        </div>
        <div className={styles.data}>
          <p>
            <label htmlFor="name">Username</label>
            <br></br>
            <input
              type="text"
              value={userName}
              name="user"
              id="1"
              onChange={(e) => setUserName(e.target.value)}
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
              name="password"
              id="2"
              onChange={(e) => setPassword(e.target.value)}
            />
          </p>
        </div>
        <div className={styles.data}>
          <p>
            <label htmlFor="password">Email</label>
            <br></br>
            <input
              type="email"
              value={email}
              name="email"
              id="3"
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
        </div>
        <div className={styles.data}>
          <p>
            <label htmlFor="password">Confirm Email</label>
            <br></br>
            <input
              type="email"
              value={confirmEmail}
              name="confirmEmail"
              id="4"
              onChange={(e) => setEmailConfirm(e.target.value)}
            />
          </p>
        </div>

        <Button text="Register" onClick={register} />
        <div className={styles.makeLogin}>
          <p className={styles.loginRedirect}>
            <Link to="/login">Make Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
