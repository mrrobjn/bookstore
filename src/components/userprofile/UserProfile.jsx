import React from "react";
import "./UserProfile.scss";
const UserProfile = ({ users }) => {
  const logUser = localStorage.getItem("logUser");
  if (logUser) {
    var user = users.find((user) => user.id == logUser);
  }
  return (
    <>
      <div className="user-profile-container">
        {logUser ? (
          <div className="info-container">
            <div className="info-label">
              <p>Họ và tên:</p>
              <p>Email:</p>
              <p>Số điện thoại:</p>
              <p>Mật khẩu:</p>
            </div>
            <div className="user-info">
              <p>{user.useName}</p>
              <p>{user.email}</p>
              <p>{user.phoneNo}</p>
              <p>*******</p>
            </div>
          </div>
        ) : (
          <h1>Vui lòng đăng nhập</h1>
        )}
      </div>
    </>
  );
};

export default UserProfile;
