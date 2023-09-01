import React, { useState } from "react";
import products from "../../api/products.json";
import BeforeCart from "./cartButtons/BeforeCart";
import AfterCart from "./cartButtons/AfterCart";
import "./ProductList.css";
const ProductList = () => {
  const [count, setCount] = useState(0);
  const addTocart = () => {
    setCount(1);
  };
  console.log(count);
  return (
    <section className="container">
      {products?.map((product, key) => (
        <div className="product-container">
          <img src={product?.image} alt="" key={key} />
          <h3>{product?.title}</h3>
          {count > 0 ? <AfterCart/> :<BeforeCart addTocart={addTocart} />}
        </div>
      ))}
    </section>
  );
};

export default ProductList;
