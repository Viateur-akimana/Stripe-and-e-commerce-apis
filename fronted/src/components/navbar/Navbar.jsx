import React, { useState } from "react";
import "./Navbar.css";
import log from "../assets/log.jpeg";
import cart from "../assets/cart.jpg";
const Navbar = () => {
  const { menu, setMenu } = useState("Shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={log} alt="" />
        <p>E-SHOP</p>
      </div>
      <ul className="navbar-menu">
        <li onClick={() => {setMenu("Shop")}}>
          Shop{menu === "Shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => {setMenu("Men")}}>
          {" "}
          Men{menu === "Men" ? <hr /> : <></>}
        </li>
        <li onClick={() => {setMenu("Women")}}>
          Women{menu === "Women" ? <hr /> : <></>}
        </li>
        <li onClick={() => {setMenu("Kids")}}>
          Kids{menu === "Kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="navbar-login">
        <button>Login</button>
        <img src={cart} alt="" />
        <div className="navbar-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
