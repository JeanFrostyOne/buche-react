import React from "react";
import img from "../img/cake.webp";
import Tags from "./Tags";
import { getTagById } from "../utils/constants";

export default function Product({ product }) {
  return (
    <div className="product">
      <div className="product-wrapper">
        <img className="product-img" src={product.img[0] || img} alt="" />
        <div className="product-tags">
          {product.tags.map((tag) => {
            return <p className="product-tag">{getTagById(tag).name}</p>;
          })}
        </div>
      </div>
      <h3 className="product-header">{product.name}</h3>
      <div className="product-info">
        <p className="product-price">{product.price} ₽</p>
        <p className="product-weight">{product.weight}</p>
      </div>
    </div>
  );
}
