import React from "react";
import "./footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram from "../Assets/instagram_icon.png";
import p_interest from "../Assets/ig.png";
import what_sap from "../Assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_log">
        <img src={footer_logo} alt="" />
        <h1>E-SHOP</h1>
      </div>
      <ul className="footer_links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={instagram} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={p_interest} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={what_sap} alt="" />
        </div>
      </div>
      <div className="copyright">
        <hr />
        <p>Copy right @ 2024 - All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
