import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Login from './pages/Authentication/Login'
import Signup from './pages/Authentication/Signup'

const App = () => {
  return (
    <BrowserRouter>
      <div className='max-w-[1380px] w-full mx-auto px-4 sm:px-6 lg:px-8'>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />
          {/* About Us Route */}
          <Route path="/about-us" element={<AboutUs />} />
          {/* Authentication Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
