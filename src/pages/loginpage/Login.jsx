import React, { useState } from "react";
import { useNavigate } from "react-router";
const Login = ({ users }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = () => {
    const user = users.find((user) => user.email === email);
    if (user && user.password === password) {
      navigate("/");
      localStorage.setItem("logUser", user.id);
      localStorage.setItem("isLogin", true);
    } else {
      alert("Tài khoản hoặc mật khẩu không đúng");
    }
  };

  return (
    <>
      <div className="form">
        <div className="form-container">
          <h1>Đăng nhập</h1>
          <div className="box">
            <label>Địa chỉ email</label>
            <input
              type="email"
              placeholder="Nhập địa chỉ email"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="box">
            <label>Mật khẩu</label>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>
          <button onClick={() => signIn()}>Đăng nhập</button>
        </div>
      </div>
    </>
  );
};

export default Login;
