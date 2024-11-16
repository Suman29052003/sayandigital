import React from 'react'

const Links = () => {
  return (
    <div className='w-full mx-auto my-3 sm:my-5 flex items-center justify-center bg-[#f8f9fa] h-auto sm:h-[40px] py-2 sm:py-0'>
      {/* Navigation list container - full width on mobile, 80% on desktop */}
      <ul className="w-[95%] sm:w-[80%] flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-2 sm:gap-4 font-normal text-[#5f2677] text-sm sm:text-base">
        {/* Navigation items with hover effects */}
        <li className="cursor-pointer transition-transform duration-200 hover:scale-110 whitespace-nowrap">
          Calendar & Diaries
        </li>
        <li className="cursor-pointer transition-transform duration-200 hover:scale-110 whitespace-nowrap">
          Business Cards
        </li>
        <li className="cursor-pointer transition-transform duration-200 hover:scale-110 whitespace-nowrap">
          Corporate Gifts
        </li>
        <li className="cursor-pointer transition-transform duration-200 hover:scale-110 whitespace-nowrap">
          Signage
        </li>
        <li className="cursor-pointer transition-transform duration-200 hover:scale-110 whitespace-nowrap">
          Photo Gifts
        </li>
        <li className="cursor-pointer transition-transform duration-200 hover:scale-110 whitespace-nowrap">
          Marketing & Promos
        </li>
        <li className="cursor-pointer transition-transform duration-200 hover:scale-110 whitespace-nowrap">
          Stationery
        </li>
      </ul>
    </div>
  )
}

export default Links
