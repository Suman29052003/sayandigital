import React from "react";
import { Link } from "react-router-dom";
import { FiPlusCircle, FiSettings, FiPackage, FiShoppingCart, FiUser } from "react-icons/fi";

const Sidebar = () => {
    return (
        <div className="w-72 my-4 rounded-xl h-screen bg-gradient-to-b from-gray-700 to-gray-500 text-white shadow-lg">
            <div className="p-6">
                <h2 className="text-2xl font-bold tracking-wide text-center border-b border-gray-700 pb-4">
                    Admin Panel
                </h2>
            </div>
            <ul className="mt-8 space-y-4 px-4">
            <li>
                    <Link
                        to="/admin/profile"
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        <FiUser className="text-xl" />
                        <span className="font-medium">Admin Info</span>
                    </Link>
                </li>

                <li>
                    <Link
                        to="/admin/add-product"
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        <FiPlusCircle className="text-xl" />
                        <span className="font-medium">Add Product</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/admin/manage-products"
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        <FiPackage className="text-xl" />
                        <span className="font-medium">Manage Products</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/admin/orders"
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        <FiShoppingCart className="text-xl" />
                        <span className="font-medium">View Orders</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/admin/settings"
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        <FiSettings className="text-xl" />
                        <span className="font-medium">Settings</span>
                    </Link>
                </li>
              
            </ul>
        </div>
    );
};

export default Sidebar;
