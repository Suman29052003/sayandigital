import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiPlusCircle, FiEdit, FiUserPlus, FiPackage, FiUser  } from "react-icons/fi";

const Sidebar = () => {
    const userId = localStorage.getItem("userId");
    const location = useLocation();

    // Define the links and their corresponding paths
    const links = [
        { path: `/admin/${userId}`, label: "Admin Info", icon: <FiUser  className="text-xl" /> },
        { path: "/admin/add-product", label: "Add Product", icon: <FiPlusCircle className="text-xl" /> },
        { path: "/admin/manage-product", label: "Manage Product", icon: <FiPackage className="text-xl" /> },
        { path: `/admin/update-admin/${userId}`, label: "Edit Info", icon: <FiEdit className="text-xl" /> },
        { path: "/admin/add-admin", label: "Add Admin", icon: <FiUserPlus className="text-xl" /> },

    ];

    return (
        <div className="w-72 p-2 my-4 rounded-xl lg:min-h-auto bg-gradient-to-b from-gray-700 to-gray-500 text-white shadow-lg mx-auto">
            <div className="p-6">
                <h2 className="text-2xl font-bold tracking-wide text-center border-b border-gray-700 pb-4">
                    Admin Panel
                </h2>
            </div>
            <ul className=" space-y-2 px-4">
                {links.map((link) => (
                    <li key={link.path}>
                        <Link
                            to={link.path}
                            className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${
                                location.pathname === link.path ? "bg-gray-700 underline" : "hover:bg-gray-700"
                            }`}
                        >
                            {link.icon}
                            <span className={`font-medium ${location.pathname === link.path ? "underline" : ""}`}>
                                {link.label}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;