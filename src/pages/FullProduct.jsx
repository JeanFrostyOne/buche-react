import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { baseUrl } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  reduceAmount,
  selectCurrentProduct,
} from "../redux/slices/cartReducer";
import { fetchProduct } from "../redux/slices/fullProductReducer";

export default function FullProduct() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const { product, loading, error } = useSelector((state) => state.fullProduct);

  const [dropdownOpen, setDropdownOpen] = useState({
    foodvalue: false,
    composition: false,
  });

  const currentProduct = useSelector(selectCurrentProduct(product));

  function handleDropdown(key) {
    setDropdownOpen((prev) => {
      return { ...prev, [key]: !prev[key] };
    });
  }

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, []);

  

  return (
    <div>
      <Header />
      <div className="fp-body">
        <div className="fp-gallery">
          <img className="fp-img" src={product.img[0]} />
        </div>
        <div className="fp-info">
          <h3 className="fp-title">{product.name}</h3>
          <p className="fp-text">{product.description}</p>
          <div
            className={
              dropdownOpen.foodvalue
                ? "fp-dropdown dropdown-active"
                : "fp-dropdown"
            }
          >
            <div
              onClick={() => handleDropdown("foodvalue")}
              className="fp-dropdown__top"
            >
              <p className="fp-dropdown__text">пищевая ценность на 100 г</p>
            </div>
            <div className="fp-dropdown__body">
              <div className="foodvalue">
                <div className="foodvalue-item">
                  <p className="calory">Калорийность</p>
                  <p className="calory-num">{product.foodvalue[0]}</p>
                </div>
                <div className="foodvalue-item">
                  <p className="calory">Белки</p>
                  <p className="calory-num">{product.foodvalue[1]}</p>
                </div>
                <div className="foodvalue-item">
                  <p className="calory">Жиры</p>
                  <p className="calory-num">{product.foodvalue[2]}</p>
                </div>
                <div className="foodvalue-item">
                  <p className="calory">Углеводы</p>
                  <p className="calory-num">{product.foodvalue[3]}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              dropdownOpen.composition
                ? "fp-dropdown dropdown-active"
                : "fp-dropdown"
            }
          >
            <div
              className="fp-dropdown__top"
              onClick={() => handleDropdown("composition")}
            >
              <p className="fp-dropdown__text">состав</p>
            </div>
            <div className="fp-dropdown__body">
              <p className="composition">{product.composition}</p>
            </div>
          </div>
          {currentProduct ? (
            <div className="btn-box">
              <span className="btn-text">товар добавлен в корзину</span>
              <button
                onClick={() => dispatch(reduceAmount(product))}
                className="btn-minus"
                disabled={currentProduct.count === 1}
              >
                -
              </button>
              <span className="btn-count">{currentProduct.count}</span>
              <button
                onClick={() => dispatch(addProduct(product))}
                className="btn-plus"
              >
                +
              </button>
            </div>
          ) : (
            <div
              onClick={() => dispatch(addProduct(product))}
              className="btn-box-add"
            >
              добавить в корзину
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
