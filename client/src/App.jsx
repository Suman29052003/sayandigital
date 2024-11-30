import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Login from './pages/Authentication/Login';
import Signup from './pages/Authentication/Signup';
import ProductPage from './pages/ProductPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const location = useLocation();
  const [footerText, setFooterText] = useState('Go Back to Home'); // Default footer text

  useEffect(() => {
    // Update footer text based on the current route
    if (location.pathname === '/') {
      setFooterText('About Us');
    } else {
      setFooterText('Go Back to Home');
    }
  }, [location.pathname]); // Dependency on pathname

  return (
    <div className='flex flex-col min-h-screen max-w-[1380px] w-full mx-auto px-4 sm:px-6 lg:px-8'>
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
          <Route path='/product' element={<ProductPage />} />
        </Routes>
      </div>
      {/* Updated Footer to use dynamic text */}
      <Footer page={footerText} />
    </div>
  );
}

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
