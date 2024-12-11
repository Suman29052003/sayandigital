import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import baseURL from "../../baseURL"; // Import your base URL
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${baseURL}/api/users/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Password reset request failed");
      }

      toast.success("Password reset link sent to your email!");
      setTimeout(() => navigate("/login"), 1000);
    } catch (err) {
      setError(err.message);
      toast.error("Error: " + err.message);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" />
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

          <h2 className="text-3xl font-bold text-center">Forgot Password</h2>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error} {/* Display error message if exists */}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="flex flex-col">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={handleChange} // Handle input change
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Reset Link {/* Submit button for the form */}
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Remembered your password?{" "}
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

export default ForgotPassword; // Exporting the ForgotPassword component