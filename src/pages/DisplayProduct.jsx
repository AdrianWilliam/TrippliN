import React from "react";
import styles from "./DisplayProduct.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { dataProducts } from "../Server";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../store/reducer/Cart";
function DisplayProduct() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart);
  const { id } = useParams();
  const [products, setProducts] = useState({
    id: "",
    title: "",
    img: "",
    cost: "",
    description: "",
  });
  useEffect(() => {
    const getProducts = () => {
      const filter = dataProducts.filter((product) => {
        if (product.id == id) {
          return product;
        }
      });
      setProducts(() => ({
        id: filter[0].id,
        title: filter[0].title,
        img: filter[0].imgURL,
        cost: filter[0].cost,
        description: filter[0].description,
      }));
    };
    getProducts();
  }, []);
  return (
    <div className={styles.containerDisplayProduct}>
      <div className={styles.containerContent}>
        <div className={styles.containerImgDisplayProduct}>
          <img src={products.img} alt="product image" />
        </div>
        <div className={styles.details}>
          <div className={styles.title}><p>{products.title}</p></div>
          <div className={styles.cost}>{`$${products.cost}`}</div>
          <div className={styles.description}>
            <p>{products.description}</p>
          </div>
          <div className={styles.containerButtonDisplayProduct}>
            <button className={styles.buy}>Buy</button>
            <button className={styles.addCart} onClick={() => dispatch(addCart(products))}>
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayProduct;
