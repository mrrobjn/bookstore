import React, { useState } from "react";

const CartTotal = ({ cartItem, setCartItem }) => {
  const isLogin = localStorage.getItem("isLogin");
  const userId = localStorage.getItem("logUser");
  const [paymentMethod, setPaymentMethod] = useState("VNPAY");
  const [cardOwner, setCardOwner] = useState("null");
  const [cardNumber, setCardNumber] = useState("null");
  const [address, setAddress] = useState("");
  const status = false;
  const current = new Date();
  //date
  const date = `${current.getDate()}-${
    current.getMonth() + 1
  }-${current.getFullYear()}`;
  //time
  const time =
    current.getHours() +
    ":" +
    current.getMinutes() +
    ":" +
    current.getSeconds();

  var arrayProducts = [];
  cartItem.map((product) => {
    let prd = {
      id: product.id,
      qty: product.qty,
    };
    arrayProducts.push(prd);
    return 0;
  });

  const totalPrice = cartItem.reduce(
    (price, item) => price + item.price * item.qty,
    0
  );
  let orders = {
    userId,
    paymentMethod,
    cardOwner,
    cardNumber,
    address,
    totalPrice,
    status,
    date,
    time,
    arrayProducts,
  };
  const URLOrder = "http://localhost:3000/orders";
  function checkout(e) {
    if (cartItem.length === 0) {
      alert("Giỏ hàng trống");
    } else if (isLogin !== "true") {
      alert("Vui lòng đăng nhập");
    } else {
      fetch(URLOrder, {
        method: "POST",
        body: JSON.stringify(orders),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(() => {
          alert("Đặt hàng thành công");
        });
      // setCartItem([]);
      // setCardOwner("");
      // setCardNumber("");
      // setAddress("");
      return false
    }
  }

  return (
    <>
      <div className="cart-total">
        <div className="payment">
          <div className="total-box">
            <p>Tổng thanh toán: </p>
            <span>{totalPrice} đ</span>
          </div>
          <form className="payment-box" onSubmit={() => checkout()}>
            <p>Chọn phương thức thanh toán:</p>
            <div className="payment-method">
              <label className="payment-input">
                <input
                  type="radio"
                  name="payment-method"
                  value="VNPAY"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  defaultChecked="checked"
                />
                <i className="fa-solid fa-qrcode"></i>
                <p>VNPAY</p>
              </label>
              <label className="payment-input">
                <input
                  type="radio"
                  name="payment-method"
                  value="Thẻ tín dụng"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <i className="fa-solid fa-credit-card"></i>
                <p>Thẻ tín dụng</p>
              </label>
              <label className="payment-input">
                <input
                  type="radio"
                  name="payment-method"
                  value="Tiền mặt"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <i className="fa-solid fa-wallet"></i>
                <p>Tiền mặt</p>
              </label>
            </div>
            {paymentMethod === "Thẻ tín dụng" ? (
              <>
                <div className="input-holder">
                  <label>Tên chủ thẻ</label>
                  <input
                    type="text"
                    onChange={(e) => setCardOwner(e.target.value)}
                    required
                  />
                </div>
                <div className="input-holder">
                  <label>Số thẻ</label>
                  <input
                    type="text"
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                  />
                </div>
              </>
            ) : (
              ""
            )}
            {paymentMethod === "VNPAY" ? (
              <div className="qr-img">
                <img src="assets/images/qr.jpg" alt="" />
              </div>
            ) : (
              ""
            )}
            <div className="input-holder address-holder">
              <label>Địa chỉ nhận hàng</label>
              <textarea
                type="text"
                rows="3"
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <button type="submit">Thanh toán </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
