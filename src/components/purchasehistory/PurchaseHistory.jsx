import "./PurchaseHistory.scss";
import { Link } from "react-router-dom";
const PurchaseHistory = ({ orders }) => {
  const logUser = localStorage.getItem("logUser");
  const orderWithUser = orders.filter((order) => order.userId == logUser);
  return (
    <>
      <div className="order-history-section">
        <div className="order-container">
          <ul className="order-title">
            <li className="date">Ngày đặt</li>
            <li className="address">Địa chỉ</li>
            <li className="total">Tổng tiền</li>
            <li className="payment-method">Thanh toán</li>
            <li className="status">Trạng thái</li>
          </ul>
          <ul className="order-history">
            {orderWithUser.map((order) => {
              return (
                <Link to={`/purchasehistory/${order.id}`} key={order.id}>
                  <li>
                    <p className="date">{order.date}</p>
                    <p className="address">{order.address}</p>
                    <p className="total">{order.totalPrice} đ</p>
                    <p className="payment-method">{order.paymentMethod}</p>
                    <p
                      className={
                        order.status === false
                          ? "status not-confirm"
                          : "status confirm"
                      }
                    >
                      {order.status === false ? "Chưa xác nhận" : "Đã xác nhận"}
                    </p>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default PurchaseHistory;
