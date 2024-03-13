import React from "react";
import "./Admin.css";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "../Components/Sidebar";
import { AddProduct } from "../Components/AddProduct";
import { ListProduct } from "../Components/ListProduct";

export const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
      </Routes>
    </div>
  );
};
