import React, { useContext, useState } from "react";
import "./Navbar.css";
import log from "../Assets/log.png";
import cart from "../Assets/cart.png";
import { Link } from "react-router-dom";
import { shopContext } from "../../context/ShopContext";

const Navbar = () => {
  // Destructuring the array returned by useState
  const [menu, setMenu] = useState("Shop");
  const { getTotalCartItems } = useContext(shopContext)

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={log} alt="" />
        <p>E-SHOP</p>
      </div>
      <ul className="navbar-menu">
        <li
          onClick={() => {
            setMenu("Shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "Shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Men");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/men">
            Men
          </Link>{" "}
          {menu === "Men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Women");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/women">
            Women
          </Link>
          {menu === "Women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
          {menu === "Kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="navbar-login">
        <button>  
          <Link style={{ textDecoration: "none" }} to="/login">
            Login
          </Link>
        </button>
        <Link to="/cart">
          <img  style={{fontSize:"xx-large"}} src={cart} alt="" />
        </Link>
        <div className="navbar-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
