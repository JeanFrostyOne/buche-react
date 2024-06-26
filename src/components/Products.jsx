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

  const { categoryId, sort } = useSelector((state) => state.filter);

  const { tags } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchProducts({ categoryId, sort }));
  }, [categoryId, sort]);

  const skeletons = [...new Array(4)].map(() => <ProductSkeleton />);

  const { search } = useSelector((state) => state.filter);

  function handleSearch(arr) {
    const searchArray = arr.filter((item) =>
      item.name.toUpperCase().includes(search.toUpperCase())
    );
    if (tags.length) {
      return searchArray.filter((item) => {
        let itemTags = item.tags
        let res = itemTags.filter((itemTag) => isActive(itemTag))
        return res.length
      })
    } else {
      return searchArray;
    }
  }

  function isActive(id) {
    let currentTag = tags.find((tag) => {
      return tag.id === id;
    });
    return currentTag;
  }

  const filteredProducts = handleSearch(products);

  if (error) {
    return <div className="error">{error}</div>
  }
  
  return (
    <div className="product-container">
      {loading
        ? skeletons
        : filteredProducts.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
    </div>
  );
}
