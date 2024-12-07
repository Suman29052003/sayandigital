// Import necessary dependencies and assets
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import storeLogo from "../assets/logos/store_logo.png";
import searchIcon from "../assets/icons/search.png";
import profileIcon from "../assets/icons/profile.png";
import cartIcon from "../assets/icons/cart.png";
import hamIcon from "../assets/icons/hamburger.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [userId, setUserId] = useState();
  const navigate = useNavigate();

  // Check authentication status whenever component mounts or token changes
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      const storedFirstName = localStorage.getItem("firstName");
      const userid = localStorage.getItem("userId");
      setIsLoggedIn(!!token);
      setFirstName(storedFirstName || "");
      setUserId(userid)
    };

    checkAuth();
    // Add event listener for storage changes
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
    <div className="flex items-center gap-4">
      {isLoggedIn ? (
        <>
          <span className="text-gray-700 font-semibold text-lg">
            Hello, {firstName}
          </span>
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
    <nav className="w-full bg-[#C6E7FF] h-[60px] sm:h-[80px] flex items-center justify-between p-3 sm:p-4 shadow-md relative z-20">
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
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-[300px] lg:w-[400px] h-[40px] rounded-full pl-4 pr-12 outline-none border-none"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-[35px] h-[35px] bg-[#87e5ff] rounded-full flex items-center justify-center">
            <img src={searchIcon} alt="search" className="w-5 h-5" />
          </button>
        </div>

        {/* Auth & Cart */}
        <div className="flex items-center gap-6">
          <AuthButtons />
          <Link to={`/profile/${userId}`} className="flex items-center gap-2">
            <img src={profileIcon} alt="cart" className="w-6 h-6" />
            <span className="font-semibold text-lg">Account</span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <img src={hamIcon} alt="menu" className="w-6 h-6" />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
          {/* Mobile Search */}
          <div className="p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full h-[40px] rounded-full pl-4 pr-12 outline-none border border-gray-200"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-[35px] h-[35px] bg-[#87e5ff] rounded-full flex items-center justify-center">
                <img src={searchIcon} alt="search" className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col border-t border-gray-100">
            <div className="p-4 border-b border-gray-100">
              <AuthButtons />
            </div>
            <Link
              to={`/profile/${userId}`}
              className="p-4 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <img src={profileIcon} alt="cart" className="w-6 h-6" />
              <span className="font-semibold text-lg">Account</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
