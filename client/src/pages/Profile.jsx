import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import baseURL from "../baseURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import Loader from "../components/Loader/Backdrop";


const Profile = () => {
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
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `${baseURL}/api/users/profile/${userId}`
        );
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

    fetchUserProfile();
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
    <div className="max-h-screen bg-gray-50 py-10 px-4">
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
                style={{width:'fit-content'}}
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
            {["username", "email", "firstName", "lastName", "phoneNumber"].map(
              (field) => (
                <div key={field}>
                  <label className="text-sm text-gray-500">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {isEditing ? (
                    <input
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="text-gray-800 border border-gray-300 rounded-md p-2 w-full mt-1"
                    />
                  ) : (
                    <p className="text-gray-800">{formData[field]}</p>
                  )}
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
                {isEditing ? (
                  <input
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="text-gray-800 border border-gray-300 rounded-md p-2 w-full mt-1"
                  />
                ) : (
                  <p className="text-gray-800">{formData[field]}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {isEditing && (
          <div className="p-6 flex justify-end gap-4">
            <button
              onClick={handleUpdate}
              className="bg-blue-500 text-white rounded-md px-4 py-2"
            >
              Save Changes
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white rounded-md px-4 py-2"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
