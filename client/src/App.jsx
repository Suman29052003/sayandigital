import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BusinessCardPage from "./pages/perItemPages/businessCardPage";
import CalenderPage from "./pages/perItemPages/CalenderPage";
import CorporateGiftsPage from "./pages/perItemPages/CorporateGiftsPage";
import CoffeeMugsPage from "./pages/perItemPages/CoffeeMugsPage";
import PhotoFramePage from "./pages/perItemPages/PhotoFramePage";

const App = () => {
  const location = useLocation();
  const [footerText, setFooterText] = useState("Go Back to Home"); // Default footer text

  useEffect(() => {
    const updateFooterText = () => {
      switch (location.pathname) {
        case "/":
          setFooterText("About Us");
          break;
        case "/about-us":
          setFooterText("Go Back to Home");
          break;
        case "/login":
          setFooterText("Signup");
          break;
        case "/signup":
          setFooterText("Login");
          break;
        case "/product":
          setFooterText("Go Back to Home");
          break;
        case "/product/:route":
          setFooterText("Go Back to Home");
          break;
        case "/businessCard":
          setFooterText("Go Back to Home");
          break;
        default:
          setFooterText("Go Back to Home");
      }
    };
    updateFooterText();
  }, [location.pathname]); // Dependency on pathname

  return (
    <div className="flex flex-col min-h-screen max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />
          {/* About Us Route */}
          <Route path="/about-us" element={<AboutUs />} />
          {/* Authentication Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Product Page */}
          <Route path="/product" element={<ProductPage />} />
          {/*product page for banner*/}
          <Route path="/product/:route" element={<ProductPage />} />
          {/*item page for business card */}
          <Route path="/product/businesscards" element={<BusinessCardPage />} />
          {/*item page for calender */}
          <Route path="/product/Calendar" element={<CalenderPage />} />
          {/*item page for corporate gifts */}
          <Route
            path="/product/corporate-gifts"
            element={<CorporateGiftsPage />}
          />
          {/*item page for custom mugs */}
          <Route path="/product/custom-mugs" element={<CoffeeMugsPage />} />
          {/*item page for photo frame */}
          <Route path="/product/photo-frames" element={<PhotoFramePage />} />
        </Routes>
      </div>
      {/* Updated Footer to use dynamic text */}
      <Footer page={footerText} />
    </div>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
