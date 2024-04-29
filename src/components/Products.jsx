import React, { useEffect, useState } from "react";
import img from "../img/cake.webp";
import Product from "./Product";
import { baseUrl } from "../utils/constants";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);

  return (
    <div className="product-container">
      {products.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
}
