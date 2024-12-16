import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import baseURL from "../../baseURL";
import Loader from "../Loader/Loader";

const UpdateAdmin = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const { userId } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    city: "",
    pincode: "",
    country: "",
  });

  useEffect(() => {
    const fetchAdminProfile = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/users/profile/${userId}`);
        setUser(response.data);
        setFormData({
          username: response.data.username || "",
          email: response.data.email || "",
          firstName: response.data.firstName || "",
          lastName: response.data.lastName || "",
          phoneNumber: response.data.phoneNumber || "",
          city: response.data.city || "",
          pincode: response.data.pincode || "",
          country: response.data.country || "",
        });
      } catch (err) {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("User Not Found! Please Log In");
        } else {
          setError(
            err.response
              ? err.response.data.message
              : "Error fetching user profile(client)"
          );
        }
      }
    };

    fetchAdminProfile();
  }, [userId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `${baseURL}/api/users/profile/${userId}`,
        formData
      );
      setUser(response.data.user);
      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (err) {
      console.error("Error updating user profile:", err);
      toast.error(
        "Error updating profile: " +
          (err.response ? err.response.data.message : err.message)
      );
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({
      username: user.username || "",
      email: user.email || "",
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      phoneNumber: user.phoneNumber || "",
      city: user.city || "",
      pincode: user.pincode || "",
      country: user.country || "",
    });
  };

  if (error) {
    return (
      <div className="w-full m-8 flex items-center justify-center">
        <span className="text-3xl font-semibold text-red-600">{error}</span>
      </div>
    );
  }

  if (!user) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="h-[100vh] bg-gray-50 py-10 px-4">
      <ToastContainer position="top-right" />
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
        {/* Profile Header */}
        <div className="flex items-center space-x-4 p-6 border-b">
          <div className="w-full flex flex-col md:flex-row items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-800">
              {formData.username}
            </h1>
            {!isEditing && (
              <Button
                variant="contained"
                color="error"
                onClick={() => setIsEditing(true)}
                style={{ width: "fit-content" }}
              >
                Edit Profile
              </Button>
            )}
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Personal Information
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "username",
              "email",
              "firstName",
              "lastName",
              "phoneNumber",
              "city",
              "pincode",
              "country",
            ].map((field) => (
              <div key={field} className="flex flex-col">
                <label className="text-gray-600">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="border rounded p-2"
                />
              </div>
            ))}
          </div>

          {isEditing && (
            <div className="mt-6 flex justify-end space-x-4">
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpdate}
              >
                Update
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateAdmin;
