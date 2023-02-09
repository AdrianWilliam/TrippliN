import React from "react";
import styles from "./Edit.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Edit() {
  const navigate = useNavigate();
  const [nameEdit, setName] = useState("");
  const [emailEdit, setEmail] = useState("");
  const [passwordEdit, setPassword] = useState("");
  const [ageEdit, setAge] = useState("");
  const [cityEdit, setCity] = useState("");
  const [acceptChange, setAcceptChange] = useState(false);
  function AcceptChanges() {
    return (
      <div className={styles.acceptChangeContainer}>
        <div className={styles.acceptChange}>
          <h2>Do you sure?</h2>
          <div className={styles.buttonsAcceptChange}>
            <button onClick={() => setEdit()}>Yes</button>
            <button onClick={() => setAcceptChange(false)}>No</button>
          </div>
        </div>
      </div>
    );
  }
  function deleteAccount() {
    localStorage.clear();
    alert("Your account had been deleted");
    setTimeout(() => {
      navigate("/");
    }, 500);
  }
  function setEdit() {
    if (nameEdit) {
      localStorage.setItem("name", nameEdit);
    }
    if (emailEdit) {
      localStorage.setItem("email", emailEdit);
    }
    if (passwordEdit) {
      localStorage.setItem("password", passwordEdit);
    }
    if (ageEdit) {
      localStorage.setItem("age", ageEdit);
    }
    if (cityEdit) {
      localStorage.setItem("city", cityEdit);
    }
    setAcceptChange(false);
    setTimeout(() => {
      navigate("/user");
    }, 500);
    return;
  }
  return (
    <div className={styles.edit}>
      {acceptChange && <AcceptChanges />}
      <div className={styles.editContainer}>
        <div className={styles.editItem}>
          <label htmlFor="nameEdit">
            NAME
            <input
              maxLength={50}
              value={nameEdit}
              type="text"
              name="nameEdit"
              id="nameEdit"
              placeholder="EDIT NAME"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className={styles.editItem}>
          <label htmlFor="emailEdit">
            {" "}
            EMAIL
            <input
              maxLength={50}
              value={emailEdit}
              type="email"
              name="emailEdit"
              id="emailEdit"
              placeholder="EDIT EMAIL"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className={styles.editItem}>
          <label htmlFor="passwordEdit">
            {" "}
            PASSWORD
            <input
              maxLength={15}
              value={passwordEdit}
              type="text"
              name="passwordEdit"
              id="passwordEdit"
              placeholder="EDIT PASSWORD"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div className={styles.editItem}>
          <label htmlFor="ageEdit">
            {" "}
            AGE
            <input
              value={ageEdit}
              type="number"
              name="ageEdit"
              id="ageEdit"
              placeholder="SET AGE"
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
        </div>
        <div className={styles.editItem}>
          <label htmlFor="cityEdit">
            {" "}
              City
            <input
              value={cityEdit}
              type="text"
              name="cityEdit"
              id="cityEdit"
              placeholder="WHERE ARE YOU FROM?"
              onChange={(e) => setCity(e.target.value)}
            />
          </label>
        </div>
      </div>
      <div className={styles.buttonEdit}>
        <button
          className={styles.editButton}
          onClick={() => setAcceptChange(true)}
        >
          SAVE
        </button>
        <button
          className={styles.deleteAccountButton}
          onClick={() => deleteAccount()}
        >
          DELETE ACCOUNT
        </button>
      </div>
    </div>
  );
}

export default Edit;
