import React, { useState } from "react";
import { useParams } from "react-router-dom";
import baseURL from "../../baseURL"; // Import your base URL
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${baseURL}/api/users/reset-password/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newPassword }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Password reset failed");
      }

      toast.success("Password has been reset successfully!");
    } catch (err) {
      setError(err.message);
      toast.error("Error: " + err.message);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" />
      <div>
        <h2>Reset Password</h2>
        {error && <div>{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
