import React from "react";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import "./Product.scss";

const Product = ({ categories, addToCart, filterResult, productFilter,setProductFilter,products }) => {
  return (
    <>
      <section className="product-page-section" style={{ paddingTop: 200 }}>
        <Categories categories={categories} filterResult={filterResult} setProductFilter={setProductFilter} products={products} />
        <ProductCard productFilter={productFilter} addToCart={addToCart} />
      </section>
    </>
  );
};

export default Product;
