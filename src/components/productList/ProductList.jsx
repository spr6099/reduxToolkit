import React, { useState } from "react";
import products from "../../api/products.json";
import BeforeCart from "./cartButtons/BeforeCart";
import AfterCart from "./cartButtons/AfterCart";
import { useDispatch, useSelector } from "react-redux";
import "./ProductList.css";
const ProductList = () => {
  const {cartCount } = useSelector((state)=>state.cart);
  const dispatch = useDispatch();
  
  
  
  return (
    <section className="container">
      {products?.map((product, key) => (
        <div className="product-container">
          <img src={product?.image} alt="" key={key} />
          <h3>{product?.title}</h3>
          {cartCount > 0 ? <AfterCart/> :<BeforeCart   />}
        </div>
      ))}
    </section>
  );
};

export default ProductList;
