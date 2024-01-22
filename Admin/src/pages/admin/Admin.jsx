// import React from 'react'
import AddProduct from "../../components/addProducts/AddProduct";
import ListProduct from "../../components/listProduct/ListProduct";
import Sidebar from "../../components/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/add_product" element={<AddProduct />} />
        <Route path="/product_list" element={<ListProduct />} />
      </Routes>
    </div>
  );
};

export default Admin;
