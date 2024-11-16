import React from 'react'
import blog1 from '../../assets/blogs/Blog_1.png'
import blog2 from '../../assets/blogs/Blog_2.png'

const Blogs = () => {
  return (
    <div className='w-full flex flex-col md:flex-row gap-4 sm:gap-6 lg:gap-8 my-4 sm:my-6 lg:my-8 px-4 sm:px-6 lg:px-8'>
      {/* Left Section - Blog Introduction */}
      <div className='w-full md:w-[35%] flex flex-col justify-start p-4 sm:p-6 lg:p-8 gap-2 sm:gap-3'>
        <h1 className="text-xl sm:text-2xl font-extrabold text-[#B07FD3]">From The Blogs</h1>
        <p className="text-lg sm:text-xl font-bold text-[#999999]">Explore the world of print with us on our blog!</p>
        <p className="text-sm sm:text-md font-bold text-[#5D5D5D] text-pretty">From selecting the perfect paper to crafting remarkable, high-quality prints, join us as we dive into every detail that brings your creative vision to life.</p>
      </div>

      {/* Middle Section - First Blog Banner */}
      <div className='banner_1 w-full md:w-[350px] h-auto cursor-pointer overflow-hidden'>
        <img src={blog1} alt="Blog post 1" className="w-full h-full object-cover" />
      </div>

      {/* Right Section - Second Blog Banner */}
      <div className='banner_2 w-full md:w-[350px] h-auto cursor-pointer overflow-hidden'>
        <img src={blog2} alt="Blog post 2" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

export default Blogs
