import React from 'react'
import "./sidebar.css"
import Link from "react-router-dom"
import add_product from "../../Assets/Product_Cart.svg"
import productList from "../../Assets/Product_list_icon.svg"
const Sidebar = () => {
  return (
    <div className='sidebar'>
<Link to={"/add_product"}>
  <div className="sidebar_item">
    <img src={add_product} alt="" />
    <p>Add product</p>
  </div>
</Link>
<Link to={"/product_list"}>
  <div className="sidebar_item">
    <img src={productList} alt="" />
    <p>Add product</p>
  </div>
</Link>
    </div>
  )
}

export default Sidebar