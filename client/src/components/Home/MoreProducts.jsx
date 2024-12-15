import React from 'react'

import { allCategories } from '../../data/allCategories';
import ItemCard from '../Cards/ItemCard';
import { Link } from 'react-router-dom';
const MoreProducts = () => {
    return (
        <div className="w-full grid gap-y-6 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
          {/* Section Title with decorative lines */}
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            <div className="h-[1px] bg-gray-300 flex-grow"></div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold whitespace-nowrap text-[#A2A2A2]">
              More Products
            </h2>
            <div className="h-[1px] bg-gray-300 flex-grow"></div>
          </div>
          
          {/* Grid container */}
          <div className="grid grid-cols-3  gap-3 sm:gap-5 mx-auto">
            {allCategories.map((item) => (
              <Link to={`/product/${item.route}`} key={item.id}>
                <ItemCard 
                  {...item} 
                  width={337} 
                  height={270}  
                />
              </Link>
            ))}
          </div>
        </div>
      );
}

export default MoreProducts
