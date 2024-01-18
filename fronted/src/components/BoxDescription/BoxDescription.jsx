import React from "react";
import './descriptionBOx.css'

const BoxDescription = () => {
  return (
    <div className="boxDescription">
      <div className="boxDescription-navbar">
        <div className="nav-box">Description</div>
        <div className="nav-box fade">Reviews(122)</div>
      </div>
      <div className="description-box">
        <p>
          An e-commerce website is an online platform that facilitate buying and
          selling of goods and services over internet serve as virtual market
          place where businesses and individuals showcase their products and
          interact with the customer and conduct transaction without physical
          presence. E-commerce websites have gained a lot of popularity due to
          convenient accessibility and global reach they offer.
        </p>
      </div>
    </div>
  );
};

export default BoxDescription;
