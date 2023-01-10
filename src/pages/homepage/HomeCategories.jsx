import React from "react";
import { Link } from "react-router-dom";

const HomeCategories = ({
  categories,
  filterResult,
  setProductFilter,
  products,
}) => {
  return (
    <>
      <div className="home-category">
        <Link to="./product">
          <div className="box" onClick={() => setProductFilter(products)}>
            <span>Tất cả</span>
          </div>
        </Link>

        {categories.map((category, index) => {
          return (
            <Link to="./product" key={index}>
              <div
                className="box"
                onClick={() => filterResult(`${category.title}`)}
              >
                <span>{category.title}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default HomeCategories;
