import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ProfileMenu from "../profilemenu/ProfileMenu";
import "./OrderDetail.scss";

const OrderDetail = ({ orders }) => {
  const [orderDetails, setOrderDetails] = useState([]);
  const orderDetailUrl = "http://localhost:3000/orderDetails";
  useEffect(() => {
    axios
      .get(orderDetailUrl)
      .then((res) => {
        setOrderDetails(res.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);
  const { orderId } = useParams();
  const orderDetail = orderDetails.find((order) => order.id == orderId);
  const orderInfo = orders.find((order) => order.id == orderId);
  return (
    <>
      <section className="order-detail-section" style={{ paddingTop: 200 }}>
        <ProfileMenu />
        <div className="order-detail-container">
          <div className="product-list">
            {orderDetail &&
              orderDetail.arrayProducts.map((product) => {
                return (
                  <Link
                    to={`/product/${product.id}`}
                    className="order-product"
                    key={product.id}
                  >
                    <div className="product-img">
                      <img src={product.image} />
                    </div>
                    <div className="product-detail">
                      <h3>{product.title}</h3>
                      <div className="detail-container">
                        <div className="left-detail">
                          <p>Số lượng:</p>
                          <p>Giá:</p>
                          <p>Tổng:</p>
                        </div>
                        <div className="right-detail">
                          <p>{product.qty}</p>
                          <p>{product.price} đ</p>
                          <p>{product.price * product.qty} đ</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
          {orderInfo && (
            <div className="order-detail">
              <div className="detail-container">
                <div className="title">
                  <p>Ngày đặt: </p>
                  <p>Giờ đặt: </p>
                  <p>Thành tiền: </p>
                  <p>Trạng thái: </p>
                </div>
                <div className="detail">
                  <p>{orderInfo.date}</p>
                  <p>{orderInfo.time}</p>
                  <p style={{ color: "#ea5867" }}>{orderInfo.totalPrice} đ</p>
                  <p className={orderInfo.status == false ? "red" : "green"}>
                    {orderInfo.status === false
                      ? "Chưa xác nhận"
                      : "Đã xác nhận"}
                  </p>
                </div>
              </div>
              <div className="detail-container">
                <div className="title">
                  <p>Thanh toán</p>
                  <p>Chủ thẻ: </p>
                  <p>Số thẻ: </p>
                  <p>Địa chỉ: </p>
                </div>
                <div className="detail">
                  <p>{orderInfo.paymentMethod}</p>
                  <p>{orderInfo.cardOwner}</p>
                  <p>{orderInfo.cardNumber}</p>
                  <p>{orderInfo.address}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default OrderDetail;
