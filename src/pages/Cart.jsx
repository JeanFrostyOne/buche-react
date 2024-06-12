import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import logo from "../img/cake.webp";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  reduceAmount,
  removeElement,
} from "../redux/slices/cartReducer";

export default function Cart({}) {
  const dispatch = useDispatch();

  const { items, totalPrice } = useSelector((state) => state.cart);

  return (
    <div>
      <Header />
      <div className="cart-wrapper">
        <p className="cart-catalog-link">вернуться в каталог</p>
        <div className="cart-field">
          <div className="cart-box">
            <p className="cart-box-text">корзина</p>
            <div className="cart-box-goods">
              {items.map((product) => {
                return (
                  <div className="cart-product-wrapper">
                    <img
                      className="cart-product-img"
                      src={product.img[1]}
                      alt=""
                    />
                    <div className="cart-product-info">
                      <div className="cart-product-info-box">
                        <p className="cart-product-name">{product.name}</p>
                        <span className="cart-product-weight">
                          {product.weight}
                        </span>
                        <span className="cart-product-price">
                          {product.price} ₽
                        </span>
                      </div>
                      <div className="cart-product-close-count">
                        <button
                          onClick={() => dispatch(removeElement(product))}
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
                          <button
                            disabled={product.count === 1}
                            onClick={() => dispatch(reduceAmount(product))}
                            className="count-box-btn"
                          >
                            -
                          </button>
                          <span className="count-box-amount">
                            {product.count}
                          </span>
                          <button
                            onClick={() => dispatch(addProduct(product))}
                            className="count-box-btn"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="cart-totalsum">
            <p className="cart-totalsum-text">итог</p>
            <div className="cart-info">
              <div className="cart-info-inner">
                <div className="cart-info-content">
                  <span className="cart-sum-info">сумма заказа</span>
                  <span className="cart-sum">{totalPrice} ₽</span>
                </div>
                <div className="cart-info-content">
                  <span className="cart-sum-info">итого</span>
                  <span className="cart-sum">{totalPrice} ₽</span>
                </div>
              </div>
              <button className="cart-btn">оформить заказ</button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
