import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./User.module.css";
import { FiUser as UserImg } from "react-icons/fi";
import { AiOutlineTool as EditIcon } from "react-icons/ai";
function User() {
  const [date, setDate] = useState({});
  useEffect(() => {
    setDate({
      name: localStorage.getItem("name"),
      age: localStorage.getItem("age"),
      city: localStorage.getItem('city'),
    });
  }, []);

  return (
    <div className={styles.user}>
      <div className={styles.userContainer}>
        <div className={`${styles.userData} ${styles.userIcon}`}>
          <UserImg />
          <div className={styles.userDatas}>
            <h2>{date.name}</h2>
            <p onClick={() => setOpenEdit(true)}>
              <Link to="/edit">
                <span>
                  EDIT <EditIcon />
                </span>
              </Link>
            </p>
          </div>
        </div>
        <div className={styles.userContent}>
          <div className={styles.userContentItems}>
            {date.age && <div>
              <p>{`Age: ${date.age}`}</p></div>}
              {date.age && <div>
              <p>{`City: ${date.city}`}</p></div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
