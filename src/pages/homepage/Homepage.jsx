import React from "react";
import Slider from "./Slider";
import FlashDeal from "../../components/flashDeals/FlashDeal";
import HomeCategories from "./HomeCategories";
import "./Homepage.scss";

const Homepage = ({
  products,
  categories,
  slides,
  addToCart,
  setProductFilter,
  filterResult,
}) => {
  return (
    <section id="homepage">
      <div className="container">
        <HomeCategories
          categories={categories}
          products={products}
          setProductFilter={setProductFilter}
          filterResult={filterResult}
        />
        <Slider slides={slides} />
      </div>
      <FlashDeal products={products} addToCart={addToCart} />
    </section>
  );
};

export default Homepage;
