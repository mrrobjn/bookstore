import React from "react";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("isLogin");
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
    // navigate("/login");
  };

  return (
    <div className="head">
      <div className="left-head">
        <a href="#">
          <i className="fa-solid fa-phone"></i>
          +84 905 109 563
        </a>
        <a href="#">
          <i className="fa-solid fa-envelope"></i>
          obs@gmail.com
        </a>
      </div>
      <div className="right-head">
        {isLogin === "true" ? (
          <a onClick={handleClick}>Đăng xuất</a>
        ) : (
          <a onClick={() => navigate("/login")}>Đăng nhập</a>
        )}
        <a>🇻🇳 VN</a>
        <a>🇬🇧 UK</a>
      </div>
    </div>
  );
};

export default Head;
