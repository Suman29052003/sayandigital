
import React, { useState } from "react"; // Importing React and useState hook
import { useNavigate, Link } from "react-router-dom"; // Importing navigation and Link components
import baseURL from "../../baseURL"; // Importing base URL for API calls
import { ToastContainer, toast } from "react-toastify"; // Importing toast notifications
import "react-toastify/dist/ReactToastify.css"; // Importing toast CSS

const Login = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    email: "", // Email input
    password: "", // Password input
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

    try {
      // API call to log in the user
      const response = await fetch(`${baseURL}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });

      const data = await response.json(); // Parse JSON response
      // console.log("Login Response:", data); // Log the response for debugging

      // Check if the response is not OK
      if (!response.ok) {
        throw new Error(data.message || "Login failed"); // Throw error if login fails
      }

      // Success Block: Store token and user details in local storage
      console.log("Login successful, storing token and user details");
      localStorage.setItem("token", data.token); // Store token
      localStorage.setItem("firstName", data.user.firstName); // Store user's first name

      toast.success("Login successful!"); // Show success toast
      setTimeout(() => navigate("/"), 1000); // Navigate to home after 1 second
    } catch (err) {
      console.error("Login Error:", err.message); // Log error for debugging
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

          <h2 className="text-3xl font-bold text-center">Login</h2>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error} {/* Display error message if exists */}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {/* Form fields for user input */}
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
                value={formData.email} // Bind input value to formData
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
                value={formData.password} // Bind input value to formData
                onChange={handleChange} // Handle input change
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in {/* Submit button for the form */}
            </button>

            <div className="text-center text-sm">
              <span className="text-gray-600">Don't have an account? </span>
              <Link
                to="/signup"
                className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline"
              >
                Sign up {/* Link to signup page */}
              </Link>
            </div>
          </form>

          <div className="text-center text-sm">
            <Link
              to="/forgot-password"
              className="font-medium text-gray-600 hover:text-gray-500"
            >
              Forgot your password? {/* Link to forgot password page */}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login; // Exporting the Login component