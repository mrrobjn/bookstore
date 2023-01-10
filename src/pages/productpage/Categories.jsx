import React from "react";
const Categories = ({ categories, filterResult, setProductFilter,products }) => {
  return (
    <>
      <div className="category">
        <div className="box" onClick={()=>setProductFilter(products)}>
          <span>Tất cả</span>
        </div>
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              className="box"
              onClick={() => filterResult(`${category.title}`)}
            >
              <span>{category.title}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
