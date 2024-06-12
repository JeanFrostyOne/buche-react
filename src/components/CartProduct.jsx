import React from "react";
import { useDispatch } from "react-redux";

export default function CartProduct() {
  const dispatch = useDispatch();

  return (
    <div className="cart-product-wrapper">
      <img className="cart-product-img" src={product.img[1]} alt="" />
      <div className="cart-product-info">
        <div className="cart-product-info-box">
          <p className="cart-product-name">{product.name}</p>
          <span className="cart-product-weight">{product.weight}</span>
          <span className="cart-product-price">{product.price} ₽</span>
        </div>
        <div className="cart-product-close-count">
          <button
            onClick={() => dispatch(removeElement(product.id))}
            className="count-box-btn count-box-close"
          >
            <svg
              width="16"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.94 8L2.803 3.863l1.06-1.06L8 6.939l4.137-4.136 1.06 1.06L9.061 8l4.136 4.136-1.06 1.06L8 9.06l-4.136 4.137-1.06-1.06L6.94 8z"
                fill="#75787C"
              ></path>
            </svg>
          </button>
          <div className="count-box">
            <button className="count-box-btn">-</button>
            <span className="count-box-amount">1</span>
            <button className="count-box-btn">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
