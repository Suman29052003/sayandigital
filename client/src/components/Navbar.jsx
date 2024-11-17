// Import necessary dependencies and assets
import React, { useState } from "react";
import storeLogo from "../assets/logos/store_logo.png";
import searchIcon from "../assets/icons/search.png";
import profileIcon from "../assets/icons/profile.png";
import cartIcon from "../assets/icons/cart.png";
import hamIcon from "../assets/icons/hamburger.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const logoClickHandler = () => {
    navigate("/");
    window.location.reload();
  }

  return (
    <nav className='w-full bg-bgPrimary h-[60px] sm:h-[80px] flex items-center justify-between p-3 sm:p-4 shadow-md relative z-10' >
      {/* Store logo */}
      <img 
        src={storeLogo} 
        alt="store logo" 
        className="w-[150px] sm:w-[200px] object-contain cursor-pointer" 
        onClick={logoClickHandler}
      />

      {/* Search bar - Hidden on mobile, visible on tablet and up */}
      <div className="searchBar relative hidden md:flex items-center">
        <input 
          type="text" 
          placeholder='Search for products, brands and more' 
          className='w-[300px] lg:w-[500px] h-[35px] sm:h-[40px] rounded-3xl pl-4 p-2 outline-none border-none' 
        />
        <div className="circle w-[38px] sm:w-[45px] h-[38px] sm:h-[45px] rounded-full bg-[#87e5ff] absolute -right-[10px] flex items-center justify-center">
          <img 
            src={searchIcon} 
            alt="search icon" 
            className='w-[22px] sm:w-[28px] h-[22px] sm:h-[28px] object-contain' 
          />
        </div>
      </div>

      {/* Navigation icons - Hidden on mobile */}
      <div className="profile hidden md:flex items-center gap-4 sm:gap-8">
        {/* <img 
          src={profileIcon} 
          alt="profile icon" 
          className='w-[24px] sm:w-[28px] h-[24px] sm:h-[28px] object-contain cursor-pointer transition-transform duration-300 hover:scale-110' 
        /> */}
        <span className="cursor-pointer transition-transform duration-300 hover:scale-110">Log In / Sign Up</span>
        <div className="flex items-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-110">
        <img 
          src={cartIcon} 
          alt="cart icon" 
          className='w-[24px] sm:w-[28px] h-[24px] sm:h-[28px] object-contain ' 
        />
        <span className="">Cart</span></div>
      </div>

      {/* Mobile menu button */}
      <button 
        className="md:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <img 
          src={hamIcon} 
          alt="menu" 
          className='w-[24px] h-[24px] object-contain cursor-pointer' 
        />
      </button>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-bgPrimary shadow-lg md:hidden">
          {/* Mobile search bar */}
          <div className="p-4">
            <div className="relative flex items-center">
              <input 
                type="text" 
                placeholder='Search for products...' 
                className='w-full h-[35px] rounded-3xl pl-4 p-2 outline-none border-none' 
              />
              <div className="circle w-[38px] h-[38px] rounded-full bg-[#87e5ff] absolute right-0 flex items-center justify-center">
                <img 
                  src={searchIcon} 
                  alt="search icon" 
                  className='w-[22px] h-[22px] object-contain' 
                />
              </div>
            </div>
          </div>

          {/* Mobile navigation links */}
          <div className="flex flex-col p-4 gap-4 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <img 
                src={profileIcon} 
                alt="profile" 
                className='w-[24px] h-[24px]' 
              />
              <span className="text-gray-700">Profile</span>
            </div>
            <div className="flex items-center gap-3">
              <img 
                src={cartIcon} 
                alt="cart" 
                className='w-[24px] h-[24px]' 
              />
              <span className="text-gray-700">Cart</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
