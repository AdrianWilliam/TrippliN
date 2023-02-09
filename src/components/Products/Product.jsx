import React from "react";
import { Link, Routes, Route, useParams } from "react-router-dom";
import styles from "./Product.module.css";
import { useState } from "react";

function Product(props) {
  return (
      <Link to={`/${props.id}`}>
        <div className={styles.productContainer}>
          <div className={styles.itensContainer}>
            <div className={styles.image}>
              <img src={props.img} alt="" />
            </div>
            <div className={styles.text}>
              <div className={styles.title}>
                <h2>{props.title}</h2>
              </div>
              <div className={styles.cost}>
                <p>{`$${props.cost}`}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
}

export default Product;
