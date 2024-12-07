import React, { useState } from "react"; // Importing React and useState hook
import { useNavigate, Link } from "react-router-dom"; // Importing navigation and Link components
import baseURL from "../../baseURL"; // Importing base URL for API calls
import { ToastContainer, toast } from "react-toastify"; // Importing toast notifications
import "react-toastify/dist/ReactToastify.css"; // Importing toast CSS

const Signup = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    city: "",
    pincode: "",
    country: "",
  });

  // State to hold error messages
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Update specific field in formData
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError(""); // Reset error state

    // Basic validation for password match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      toast.error("Error: Passwords do not match"); // Show error toast
      return; // Exit if passwords do not match
    }

    try {
      // API call to sign up the user
      const response = await fetch(`${baseURL}/api/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName,
          phoneNumber: formData.phoneNumber,
          city: formData.city,
          pincode: formData.pincode,
          country: formData.country,
        }),
      });

      const data = await response.json(); // Parse JSON response

      // Check if the response is not OK
      if (!response.ok) {
        throw new Error(data.message || "Registration failed"); // Throw error if registration fails
      }

      // Store token and firstName in local storage
      localStorage.setItem("token", data.token);
      localStorage.setItem("firstName", formData.firstName);
      // localStorage.setItem("userId",data)

      toast.success("Sign Up successful!"); // Show success toast
      setTimeout(() => navigate("/"), 1000); // Navigate to home after 1 second
    } catch (err) {
      setError(err.message); // Set error message
      toast.error("Error: " + err.message); // Show error toast
    }
  };

  return (
    <>
      <ToastContainer position="top-right" /> {/* Toast container for notifications */}
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-indigo-600 hover:text-indigo-500 flex items-center gap-2"
            >
              {/* Back link to home */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Go Back
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-center">Create Account</h2>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error} {/* Display error message if exists */}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {/* Form fields for user input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange} // Handle input change
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange} // Handle input change
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            {/* Other input fields for username, email, phone number, password, and confirm password */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={formData.username}
                onChange={handleChange} // Handle input change
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange} // Handle input change
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                required
                value={formData.phoneNumber}
                onChange={handleChange} // Handle input change
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange} // Handle input change
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange} // Handle input change
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                required
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="pincode"
                className="block text-sm font-medium text-gray-700"
              >
                Pincode
              </label>
              <input
                id="pincode"
                name="pincode"
                type="text"
                required
                value={formData.pincode}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <input
                id="country"
                name="country"
                type="text"
                required
                value={formData.country}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up {/* Submit button for the form */}
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500 underline"
              >
                Login here {/* Link to login page */}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup; // Exporting the Signup component