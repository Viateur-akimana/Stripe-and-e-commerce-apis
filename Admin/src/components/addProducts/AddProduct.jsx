// import React from 'react'
import "./addproducts.css";
import upload_area from "../../Assets/upload_area.svg";
import { useState } from "react";
const AddProduct = () => {
  const { image, setImage } = useState(false);
  const { productDetails, setProductDetails } = useState({
    name: "",
    image: "",
    category: "women",
    old_price: "",
    new_price: "",
  });

  const changeProductDetailsHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <div className="add_product">
      <div className="add_product_itemFields">
        <p>Add product</p>
        <input
          type="text"
          value={productDetails.name}
          onChange={changeProductDetailsHandler()}
          name="name"
          placeholder="Type your name here"
        />
      </div>
      <div className="add_product_price">
        <div className="add_product_itemField">
          <p>Price</p>
          <input
            type="text"
            value={productDetails.old_price}
            onChange={changeProductDetailsHandler()}
            name="old_price"
            placeholder="Type old price here"
          />
        </div>
        <div className="add_product_itemField">
          <p>Offer price</p>
          <input
            type="text"
            value={productDetails.new_price}
            onChange={changeProductDetailsHandler()}
            name="new_price"
            placeholder="Type new price here"
          />
        </div>
      </div>
      <div className="add_product_itemField">
        <p>Category</p>
        <select
          name="category"
          value={productDetails.category}
          onChange={changeProductDetailsHandler()}
          className="product-selector"
        >
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids"> Kids </option>
        </select>
      </div>
      <div className="add_product_itemField">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            onClick={imageHandler()}
            className="images"
            alt=""
          />
        </label>
        <input
          type="file"
          onClick={imageHandler()}
          name="images"
          id="file-input"
          hidden
        />
      </div>
      <button className="add">ADD</button>
    </div>
  );
};

export default AddProduct;
