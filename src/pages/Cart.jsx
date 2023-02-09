import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCart, deleteCart } from "../store/reducer/Cart";
import styles from "./Cart.module.css";
function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;
  const endOffset = itemOffset + itemsPerPage;

  function Products({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((product) => {
            return (
              <Link to={`/${product.id}`}>
                <div className={styles.productCart} key={product.id}>
                  <img src={product.img} alt="product image" />
                  <div className={styles.content}>
                    <h1>{product.title}</h1>
                    <div className={styles.price}>
                      <p>{`$${parseFloat(product.cost * product.qty).toFixed(
                        2
                      )}`}</p>
                    </div>
                    <div className={styles.buttonCart}>
                      <button className={styles.buy}>buy</button>
                      <button onClick={() => dispatch(addCart(product))}>
                        +
                      </button>
                      {product.qty}
                      <button onClick={() => dispatch(deleteCart(product))}>
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </>
    );
  }
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);
  const handlePageClick = ({ selected }) => {
    setItemOffset((selected * itemsPerPage) % products.length);
  };
  return (
    <div className={styles.cart}>
      <div className={styles.cartContainer}>
        <div className={styles.cartProducts}>
          <Products currentItems={currentItems} />
          <ReactPaginate
            breakLabel="..."
            nextLabel=" >"
            previousLabel="< "
            onPageChange={handlePageClick}
            pageCount={pageCount}
            className={styles.paginateContainer}
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
}

export default Cart;
