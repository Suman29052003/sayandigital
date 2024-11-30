// Import necessary dependencies and social media icons
import React from "react";
import facebookIcon from "../assets/icons/facebook.png";
import instagramIcon from "../assets/icons/instagram.png";
import youtubeIcon from "../assets/icons/youtube.png";
import { Link } from "react-router-dom";

const Footer = (props) => {

  return (
    <div className="w-full h-auto my-2 sm:my-4 py-6  bg-white">
      {/* Horizontal divider line */}
      <div className="line w-full h-[1px] bg-[#9F9F9F] mb-4 sm:mb-6"></div>

      {/* Footer content container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 sm:justify-between">
       {
        props.page === "Go Back to Home" ? (
          <Link 
            to="/" 
            className="text-base sm:text-lg font-semibold text-[#999999] hover:text-gray-700 order-1 sm:order-none"
          >
            Go Back to Home
          </Link>
        ) : (
          <Link 
            to="/about-us" 
            className="text-base sm:text-lg font-semibold text-[#999999] hover:text-gray-700 order-1 sm:order-none"
          >
            About Us
          </Link>
        )
       }

        {/* Copyright text */}
        <div className="copyright text-sm sm:text-base text-center font-semibold text-[#999999] order-3 sm:order-none">
          ©2024 FrameCraft Document Services Pvt. Ltd. All Rights Reserved.
        </div>

        {/* Social media links section */}
        <div className="social_links flex items-center gap-2 sm:gap-3 justify-center text-base sm:text-lg font-semibold text-[#999999] order-2 sm:order-none">
          Follow Us :
          {/* Social media icons */}
          {/* Facebook */}
          <a
            href="https://www.facebook.com/sayan.digital.2023"
            target="_blank"
            rel="noreferrer"
            className="w-[28px] h-auto"
          >
            <span className="">
              <img src={facebookIcon} alt="facebook icon" />
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/sayan177123/"
            target="_blank"
            rel="noreferrer"
            className="w-[28px] h-auto"
          >
            <span className="">
              <img src={instagramIcon} alt="instagram icon" />
            </span>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@sayandigital362"
            target="_blank"
            rel="noreferrer"
            className="w-[28px] h-auto"
          >
            <span className="">
              <img src={youtubeIcon} alt="youtube icon" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;