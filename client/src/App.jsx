import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BusinessCardPage from "./pages/perItemPages/BusinessCardPage";
import CalenderPage from "./pages/perItemPages/CalenderPage";
import CorporateGiftsPage from "./pages/perItemPages/CorporateGiftsPage";
import CoffeeMugsPage from "./pages/perItemPages/CoffeeMugsPage";
import PhotoFramePage from "./pages/perItemPages/PhotoFramePage";
import StandeePage from "./pages/perItemPages/StandeePage";
import StickerPage from "./pages/perItemPages/StickerPage";
import TrophyPage from "./pages/perItemPages/TrophyPage";
import PenPage from "./pages/perItemPages/PenPage";
import KeyChainPage from "./pages/perItemPages/KeyChainPage";
import TilesPage from "./pages/perItemPages/TilesPage";
import TShirtPage from "./pages/perItemPages/TShirtPage";
import LetterHeadPage from "./pages/perItemPages/LetterHeadPage";
import InvitationCardPage from "./pages/perItemPages/InvitationCardPage";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import ResetPassword from "./components/ForgotPassword/ResetPassword";
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
        case "/order-product":
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
          {/* Forgot Password route  */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/*Profile Page for User */}
          <Route path="/profile/:userId" element={<Profile />} />
          {/* Product Page */}
          <Route path="/order-product" element={<ProductPage />} />
          {/* Product page for specific route */}
          <Route path="/product/:route" element={<ProductPage />} />
          {/* Item page for business card */}
          <Route
            path="/product/business-cards"
            element={<BusinessCardPage />}
          />
          {/* Item page for calendar */}
          <Route path="/product/Calendar" element={<CalenderPage />} />
          {/* Item page for corporate gifts */}
          <Route
            path="/product/corporate-gifts"
            element={<CorporateGiftsPage />}
          />
          {/* Item page for custom mugs */}
          <Route path="/product/custom-mugs" element={<CoffeeMugsPage />} />
          {/* Item page for photo frame */}
          <Route path="/product/photo-frames" element={<PhotoFramePage />} />
          {/* Item page for standees */}
          <Route path="/product/standees" element={<StandeePage />} />
          {/* Item page for stickers and vinyls */}
          <Route path="/product/stickers" element={<StickerPage />} />
          {/* Item page for trophies */}
          <Route path="/product/trophy" element={<TrophyPage />} />
          {/* Item page for pens */}
          <Route path="/product/pen" element={<PenPage />} />
          {/* Item page for keychains */}
          <Route path="/product/keychains" element={<KeyChainPage />} />
          {/* Item page for tiles */}
          <Route path="/product/tiles" element={<TilesPage />} />
          {/* Item page for t-shirts */}
          <Route path="/product/tshirts" element={<TShirtPage />} />
          {/* Item page for letter heads */}
          <Route path="/product/letter-head" element={<LetterHeadPage />} />
          {/* Item page for invitation cards */}
          <Route
            path="/product/invitation-card"
            element={<InvitationCardPage />}
          />

          <Route path="/forgot-password/:token" element={<ResetPassword/>}/>
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
