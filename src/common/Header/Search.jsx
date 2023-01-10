import React from "react";
import { Link } from "react-router-dom";

const Search = ({ cartItem }) => {
  window.addEventListener("scroll", function () {
    const search = this.document.querySelector(".search");
    search.classList.toggle("active", this.window.scrollY > 100);
  });
  return (
    <div className="search">
      <div className="logo">
        <Link to="/">
          OBS.Com <i className="fa-solid fa-book-open-reader"></i>
        </Link>
      </div>
      <div className="search-bar">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Tìm kiếm sách..." />
        <span className="search-category">Danh mục</span>
      </div>
      <div className="icon">
        <div className="user-icon icon-circle">
          <i className="fa-solid fa-user"></i>
        </div>
        
        <div className="cart">
          <Link to="/cart" className="cart-icon icon-circle">
            <i className="fa-solid fa-bag-shopping"></i>
            <span>{cartItem.length === 0 ? 0 : cartItem.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Search;
