import React from "react";
import './offer.css';
import exclusive_image from "../Assets/exclusive_image.png";
const Offer = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive Offers</h1>
        <h1>For you</h1>
        <p>Only for best sellers products</p>
        <button>Check now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offer;
 