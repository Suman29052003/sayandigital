import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/AdminPanel/Sidebar";
import AddProduct from "../components/AdminPanel/AddProduct";
import AdminProfile from "../components/AdminPanel/AdminProfile";
import ManageProduct from "../components/AdminPanel/ManageProduct";
import ViewOrders from "../components/AdminPanel/ViewOrders";
import AdminSetting from "../components/AdminPanel/AdminSetting";

const AdminPanel = () => {
  return (
    <div className="flex">
      {/* Sidebar remains static */}
      <Sidebar />

      {/* Admin components change based on the route */}
      <div className="admin-components flex-1 p-4">
        <Routes>
          <Route path=":userId" element={<AdminProfile />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="manage-products" element={< ManageProduct/>} />
          <Route path="orders" element={< ViewOrders/>} />
          <Route path="settings" element={< AdminSetting/>} />
        </Routes>
      </div>
      
    </div>
  );
};

export default AdminPanel;
