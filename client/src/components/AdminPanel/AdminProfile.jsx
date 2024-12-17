import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import greenTick from "../../assets/icons/green_tick.png";

import baseURL from "../../baseURL";
import Loader from "../Loader/Loader";

const AdminProfile = () => {
  const [admin, setAdmin] = useState(null);
  const [error, setError] = useState(null);
  const { userId } = useParams();

  const isAdmin = localStorage.getItem("role");

  useEffect(() => {
    const fetchAdminProfile = async () => {
      try {
        const response = await axios.get(
          `${baseURL}/api/users/profile/${userId}`
        );
        setAdmin(response.data);
        console.log(isAdmin);
      } catch (err) {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Admin Not Found! Please Log In");
        } else {
          setError(
            err.response
              ? err.response.data.message
              : "Error fetching admin profile(client)"
          );
        }
      }
    };

    fetchAdminProfile();
  }, [userId]);

  if (error) {
    return (
      <div className="w-full m-8 flex items-center justify-center">
        <span className="text-3xl font-semibold text-red-600">{error}</span>
      </div>
    );
  }

  if (!admin) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="h-auto bg-gray-50 py-10 px-4">
      <ToastContainer position="top-right" />
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
        {/* Profile Header */}
        <div className="flex items-center space-x-4 p-6 border-b">
          <div className="w-full flex  items-center gap-1">
            <h1 className="text-3xl font-bold text-gray-800">
              {admin.username}
            </h1>
            {isAdmin && (
              <img className="ml-2 w-6 h-auto" src={greenTick} alt="Admin" />
            )}
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Personal Information
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {["username", "email", "firstName", "lastName", "phoneNumber"].map(
              (field) => (
                <div key={field}>
                  <label className="text-sm text-gray-500">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <p className="text-gray-800">{admin[field]}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Address Section */}
        <div className="p-6 border-t">
          <h2 className="text-lg font-semibold text-gray-800">Address</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {["country", "city", "pincode"].map((field) => (
              <div key={field}>
                <label className="text-sm text-gray-500">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <p className="text-gray-800">{admin[field]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
