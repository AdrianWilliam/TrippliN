import React from "react";
import styles from "./Products.module.css";
import { useState, useEffect } from "react";
import ShowProducts from "../components/Products/ShowProducts";
import Categories from "./Categories";
import { dataProducts } from "../Server";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";

function Products() {
  const categorieActual = useSelector((state) => state.categories.categorie);
  const [searchValue, setSearchValue] = useState("");
  const products = dataProducts.filter((product) => {
    if (product.categorie === categorieActual) {
      return product;
    } else if (categorieActual === "all") {
      return dataProducts;
    }
  });
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = products
    .filter((product) => {
      if (searchValue === "") {
        return products;
      } else if (
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return product;
      }
    })
    .slice(itemOffset, endOffset);
  const pageCount = Math.ceil(
    products.filter((product) => {
      if (searchValue === "") {
        return products;
      } else if (
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return product;
      }
    }).length / itemsPerPage
  );

  function handlePageChange({ selected }) {
    setItemOffset((selected * itemsPerPage) % products.length);
  }

  return (
    <div className={styles.containerProducts}>
      <div className={styles.abc}>
        <div className={styles.SearchInput}>
          <label htmlFor="search">
            search
            <input
              type="text"
              name="search"
              id="search"
              onChange={(e) => {
                setSearchValue(e.target.value);
                handlePageChange({ selected: 0 });
              }}
            />
          </label>
        </div>
      </div>
      <Categories />
      <div className={styles.products}>
        <ShowProducts currentItems={currentItems} />
      </div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={handlePageChange}
        className={styles.paginateContainer}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Products;
