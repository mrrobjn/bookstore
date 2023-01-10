import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const FlashCard = ({ products, addToCart }) => {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="next">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="prev">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Slider {...settings}>
        {products.map((product, index) => {
          return (
            <div className="product-box" key={product.id}>
              <div className="product">
                <Link to={`/product/${product.id}`}>
                  <div className="product-img">
                    <span className="discount">{product.discount}% Off</span>
                    <img src={product.image} />
                    <div className="product-like">
                      <label>0</label>
                      <br />
                      <i className="fa-regular fa-heart"></i>{" "}
                    </div>
                  </div>
                </Link>

                <div className="product-detail">
                  <p className="product-title">{product.title}</p>
                  <div className="rate">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i> (2)
                  </div>
                  <div className="price">
                    <h4>{product.price} đ</h4>
                    <button onClick={() => addToCart(product)}>
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default FlashCard;
