// import React from 'react'

import { useState, useEffect } from "react";
import remove_icon from "../../Assets/cross_icon.svg"

const ListProduct = () => {
  const [allProducts, setAllProduct] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost/all_products")
      .then((res) => res.json())
      .then((data) => {
        setAllProduct(data);
      });
  };

  useEffect(() => {
    fetchInfo(allProducts);
  });

  return (
    <div className="listProduct">
      <h1>All products list</h1>
      <div className="format-producut">
        <p>Name</p>
        <p>Title</p>
        <p>New price</p>
        <p>Old price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="all_products">
        {allProducts.map((product, index) => {
          return (
            <div key={index} className="formatMain">
              <img src={product.image} alt="" />
              <p>{product.name}</p>
              <p>${product.new_price}</p>
              <p>${product.old_price}</p>
              <p>{product.category}</p>
              <img src={remove_icon} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
