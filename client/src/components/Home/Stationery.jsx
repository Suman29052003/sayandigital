// Import necessary dependencies and components
import React from 'react'
import { stationery } from '../../data/Stationery'
import ItemCard from '../Cards/ItemCard'

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
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5  gap-3 sm:gap-4 justify-items-center place-content-center my-3 sm:my-5 '>
        {stationery.map((item) => (
          <ItemCard 
            key={item.id} 
            {...item} 
            width={137} 
            height={170} 
          />
        ))}
      </div>
    </div>
  )
}

export default Stationery
