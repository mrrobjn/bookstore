import { useParams } from "react-router-dom";
import React, { useState } from "react";
import "./SingleProduct.scss";
const SingleProduct = ({ products, addToCartQty }) => {
  const [quantity, setQuantity] = useState(1);
  // change quantity
  const increaseQty = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQty = () => {
    if (quantity >= 2) {
      setQuantity(quantity - 1);
    }
  };
  const { productId } = useParams();
  const product = products.find((product) => product.id == productId);
  return (
    <>
      <section className="single-product-section" style={{ paddingTop: 200 }}>
        {product&& <div className="single-product-container">
          <div className="single-product-left">
            <div className="img">
              <img src={product.image} />
            </div>
          </div>
          <div className="single-product-right">
            <h3>{product.title}</h3>
            <div className="detail-box">
              <p>
                Tác giả: <span>{product.author}</span>
              </p>
              <p>
                Loại sách: <span>{product.type}</span>
              </p>
              <div className="rate">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i> (2 đánh giá)
              </div>
              <h5 className="price">{product.price} đ</h5>
            </div>
            <div className="quantity-box">
              <button
                className="descrease-value-btn"
                onClick={() => decreaseQty()}
              >
                <i className="fa-solid fa-minus"></i>
              </button>
              <div className="quantity-value">{quantity}</div>
              <button
                className="increase-value-btn"
                onClick={() => increaseQty()}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
            <button
              className="add-to-cart-btn"
              onClick={() => addToCartQty(product, quantity)}
            >
              <i className="fa-solid fa-cart-shopping"></i> Thêm vào giỏ hàng
            </button>
          </div>
        </div>}
      </section>
    </>
  );
};

export default SingleProduct;
