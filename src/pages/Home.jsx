import React from "react";
import Category from "../components/Category";
import Header from "../components/Header";
import ProductHeading from "../components/ProductHeading";
import Products from "../components/Products";
import Sorting from "../components/Sorting";
import Tags from "../components/Tags";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="category-and-products">
        <Category />
        <div className="products-field">
          <div className="app-top">
            <ProductHeading />
            <Sorting />
          </div>
          <Tags />
          <Products />
        </div>
      </div>
    </div>
  );
}
