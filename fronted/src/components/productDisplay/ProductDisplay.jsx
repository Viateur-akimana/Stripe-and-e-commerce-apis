import React, { useContext } from "react";
import "./productDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { shopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(shopContext)
  return (
    <div className="productDisplay">
      <div className="product-left">
        <div className="product-image-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-display-image">
          <img
            className="product-display-main-image"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="product-right">
        <h1>{product.image}</h1>
        <div className="product-display-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
        </div>

        <div className="display-prices">
          <div className="display-product-old-price">${product.old_price}</div>
          <div className="display-product-new-price">${product.new_price}</div>
        </div>
        <div className="display-product-size">
          <h1>Select the size</h1>
          <div className="right-display-product-size">
            <div>Small</div>
            <div>Medium</div>
            <div>Large</div>
            <div>X-Large</div>
            <div>XX-Large</div>
          </div>
        </div>
        <button onClick={addToCart(product.id)}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductDisplay;
