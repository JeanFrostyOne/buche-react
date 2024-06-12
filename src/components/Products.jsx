import React, { useEffect, useState } from "react";
import img from "../img/cake.webp";
import Product from "./Product";
import { baseUrl } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productReducer";
import ProductSkeleton from "../loading/ProductSkeleton";

export default function Products() {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);

  const { categoryId } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchProducts({ categoryId }));
  }, [categoryId]);
  console.log(loading);

  const skeletons = [...new Array(4)].map(() => <ProductSkeleton />);

  return (
    <div className="product-container">
      {loading
        ? skeletons
        : products.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
    </div>
  );
}
