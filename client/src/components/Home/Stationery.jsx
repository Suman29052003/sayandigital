// Import necessary dependencies and components
import React from 'react'
import { stationery } from '../../data/Stationery'
import ItemCard from './ItemCard'

const Stationery = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 lg:mt-10">
      {/* Section header with decorative lines */}
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        {/* Left decorative line */}
        <div className="h-[1px] bg-gray-300 flex-grow"></div>
        {/* Section title */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold whitespace-nowrap text-[#A2A2A2]">
          Stationery
        </h2>
        {/* Right decorative line */}
        <div className="h-[1px] bg-gray-300 flex-grow"></div>
      </div>

      {/* Grid container for stationery items */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 my-4 sm:my-6 lg:my-8'>
        {stationery.map((item) => (
          <ItemCard 
            key={item.id} 
            {...item} 
            width="100%"
            height={180} 
          />
        ))}
      </div>
    </div>
  )
}

export default Stationery
