import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/AdminPanel/Sidebar";
import AddProduct from "../components/AdminPanel/AddProduct";
import AdminProfile from "../components/AdminPanel/AdminProfile";
import UpdateAdmin from "../components/AdminPanel/UpdateAdmin";
import AddAdmin from "../components/AdminPanel/AddAdmin";
import ManageProduct from "../components/AdminPanel/ManageProduct";


const AdminPanel = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start">
      {/* Sidebar remains static */}
      <Sidebar />

      {/* Admin components change based on the route */}
      <div className="admin-components w-full flex-1 p-4 items-start justify-center">
        <Routes>
          <Route path=":userId" element={<AdminProfile />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="manage-product" element={<ManageProduct />} />
          <Route path="update-admin/:userId" element={<UpdateAdmin />} />
          <Route path="add-admin" element={<AddAdmin />} />
        </Routes>
      </div>
      
    </div>
  );
};

export default AdminPanel;
