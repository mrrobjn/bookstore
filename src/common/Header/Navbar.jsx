import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setProductFilter, products }) => {
  return (
    <div className="header">
      <div className="categories">
        <span>
          <h4>
            <i className="fa-solid fa-bars"></i> Danh mục{" "}
            <i className="fa-solid fa-caret-down"></i>
          </h4>
        </span>
      </div>
      <div className="nav-link">
        <ul>
          <li className="nav-btn">
            <Link to="/">Trang chủ</Link>
          </li>
          <li className="nav-btn">
            <Link to="/product" onClick={() => setProductFilter(products)}>
              Sản phẩm
            </Link>
          </li>
          <li className="nav-btn">
            <Link to="/contact">Liên lạc</Link>
          </li>
          <li className="nav-btn ">
            <Link to="/profile/userprofile">Hồ sơ</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
