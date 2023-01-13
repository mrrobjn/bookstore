import React, { useState } from "react";

const Register = ({ users }) => {
  const [useName, setUseName] = useState("");
  const [email, setEmail] = useState("");
  const [phongNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function signUp(event) {
    const emailDumplicate = users.find((user) => email === user.email);
    let item = { useName, email, phongNo, password };
    if (emailDumplicate) {
      alert("Email đã tồn tại");
    } else if (password !== confirmPassword) {
      alert("Mật khẩu không trùng khớp");
    } else {
      let result = await fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          mode: "no-cors",
        },
      });
      result = await result.json();
      alert("Đăng kí thành công");
    }
  }
  return (
    <>
      <div className="form">
        <form className="form-container" onSubmit={signUp}>
          <h1>Tạo tài khoản</h1>
          <div className="box">
            <label>Họ và tên</label>
            <input
              type="text"
              placeholder="Nhập họ và tên"
              autoComplete="off"
              onChange={(e) => setUseName(e.target.value)}
              required
            />
          </div>
          <div className="box">
            <label>Địa chỉ email</label>
            <input
              type="email"
              placeholder="Nhập địa chỉ email"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          <div className="box">
            <label>Số điện thoại (10 số)</label>
            <input
              type="tel"
              placeholder="Nhập số điện thoại"
              autoComplete="off"
              onChange={(e) => setPhoneNo(e.target.value)}
              required
              pattern="[0]{1}[0-9]{9}"
            />
          </div>
          <div className="box">
            <label>Mật khẩu</label>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
          </div>
          <div className="box">
            <label>Xác nhận mật khẩu</label>
            <input
              type="password"
              placeholder="Xác nhận mật khẩu"
              autoComplete="new-password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Đăng kí</button>
        </form>
      </div>
    </>
  );
};

export default Register;
