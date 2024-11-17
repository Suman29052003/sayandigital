import React from 'react'
import { allCategories } from '../../data/allCategories'
import ItemCard from './ItemCard'

const AllCategories = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 ">
      {/* Section Title with decorative lines */}
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        <div className="h-[1px] bg-gray-300 flex-grow"></div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold whitespace-nowrap text-[#A2A2A2]">Browse All Categories</h2>
        <div className="h-[1px] bg-gray-300 flex-grow"></div>
      </div>

      {/* Grid container - 2 columns on mobile, existing responsive layout for larger screens */}
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 justify-items-center my-3 sm:my-5'>
        {allCategories.map((item) => (
          <ItemCard 
            key={item.id} 
            {...item} 
            width={137} 
            height={170}  // Slightly reduced height for better mobile display
          />
        ))}
      </div>
    </div>
  )
}

export default AllCategories
