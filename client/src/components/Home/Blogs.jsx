import React from 'react'
import blog1 from '../../assets/blogs/Blog_1.png'
import blog2 from '../../assets/blogs/Blog_2.png'

const Blogs = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 my-4 sm:my-6 lg:my-8 md:flex">
      {/* Left Section - Blog Introduction */}
      <div className="w-full md:w-1/3 flex flex-col justify-start p-4 sm:p-6 lg:p-8 gap-2 sm:gap-3">
        <h1 className="text-xl sm:text-3xl font-extrabold text-[#B07FD3]">From The Blogs</h1>
        <p className="text-lg sm:text-2xl font-bold text-[#999999]">Explore the world of print with us on our blog!</p>
        <p className="text-sm sm:text-xl font-bold text-[#5D5D5D] text-pretty">From selecting the perfect paper to crafting remarkable, high-quality prints, join us as we dive into every detail that brings your creative vision to life.</p>
      </div>

      {/* Middle and Right Sections - Blog Banners */}
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 lg:gap-8">
        <div className="banner_1 w-full md:w-[350px] h-auto cursor-pointer overflow-hidden">
          <img src={blog1} alt="Blog post 1" className="w-full h-full object-cover" />
        </div>
        <div className="banner_2 w-full md:w-[350px] h-auto cursor-pointer overflow-hidden">
          <img src={blog2} alt="Blog post 2" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default Blogs