import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import storeLogo from "../assets/logos/store_logo.png";
import profileIcon from "../assets/icons/profile.png";
import hamIcon from "../assets/icons/hamburger.png";
import crossIcon from '../assets/icons/cross.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState("");
  // const [userId, setUserId] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  // check admin
  const checkAdmin = () => {
    const role = localStorage.getItem("role");
    if (role == "user") {
      setIsAdmin(false);
    } else {
      setIsAdmin(true);
    }
  };
  // Check authentication status whenever component mounts or token changes
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      const storedFirstName = localStorage.getItem("firstName");

      setIsLoggedIn(!!token);
      setFirstName(storedFirstName || "");
      // setUserId(userid);
      checkAdmin();
    };

    checkAuth();
    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setFirstName("");
    setIsMenuOpen(false);
    navigate("/");
    window.location.reload();
  };

  const AuthButtons = () => (
    <div className="flex items-center gap-4 ">
      {isLoggedIn ? (
        <>
          <span className="text-gray-700 font-semibold text-sm sm:text-lg">
            Hello, {firstName}
          </span>
          {isAdmin ? (
            <Link
              to={`/admin/${userId}`}
              className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md transition-transform duration-300 hover:scale-105"
            >
              Admin
            </Link>
          ) : (
            <Link
              to={`/profile/${userId}`}
              className="bg-blue-500 flex items-center gap-2 justify-center text-white px-4 py-2 rounded-md shadow-md transition-transform duration-300 hover:scale-105"
            >
              <img src={profileIcon} alt="" className="w-4 h-auto" /> Account
            </Link>
          )}
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md transition-transform duration-300 hover:scale-105"
          >
            Logout
          </button>
        </>
      ) : (
        <Link
          to="/login"
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md transition-transform duration-300 hover:scale-105"
        >
          Login
        </Link>
      )}
    </div>
  );

  return (
    <nav className="w-full bg-[#C6E7FF] h-[60px] sm:h-[80px] flex items-center justify-between p-3 sm:p-4 shadow-md relative z-20 ">
      {/* Container for the inner content with specific width */}
      <div className="max-w-[1400px] w-full flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="w-[150px] sm:w-[200px]">
          <img
            src={storeLogo}
            alt="store logo"
            className="w-full object-contain cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">

          {/* Auth Buttons */}
          <AuthButtons />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
<img src={isMenuOpen ? crossIcon : hamIcon} alt="menu" className="w-6 h-6" />        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
          

            {/* Mobile Auth Buttons */}
            <div className="p-4 border-t border-gray-100">
              <AuthButtons />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
