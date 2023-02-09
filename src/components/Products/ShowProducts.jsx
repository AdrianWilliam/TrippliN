import React from "react";
import Product from "./Product";
function ShowProducts({ currentItems }) {
  return (
    <>
      {currentItems.length ? (
        currentItems.map((item) => {
          return (
            <Product
              title={item.title}
              cost={item.cost}
              img={item.imgURL}
              id={item.id}
              key={item.id}
            />
          );
        })
      ) : (
        <p>No result</p>
      )}
    </>
  );
}
export default ShowProducts;
