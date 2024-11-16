import React, { useState } from 'react'
import { bannerData } from '../../data/banner'
import ItemCard from './ItemCard'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const ShopByNeeds = () => {
  // Responsive card dimensions
  const getCardDimensions = () => {
    if (window.innerWidth < 640) return { width: 280, gap: 12 }; // mobile
    if (window.innerWidth < 1024) return { width: 320, gap: 14 }; // tablet
    return { width: 350, gap: 16 }; // desktop
  };

  const scroll = (direction) => {
    const container = document.querySelector('.cards-container');
    const { width, gap } = getCardDimensions();
    const scrollAmount = width + gap;
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
      {/* Section header */}
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        <div className="h-[1px] bg-gray-300 flex-grow"></div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold whitespace-nowrap text-[#A2A2A2]">
          Shop By Needs
        </h2>
        <div className="h-[1px] bg-gray-300 flex-grow"></div>
      </div>

      {/* Carousel section */}
      <div className="relative my-3 sm:my-4 lg:my-5">
        {/* Left Navigation Button */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-1.5 sm:p-2 rounded-full shadow-md"
        >
          <FaChevronLeft className="text-xl sm:text-2xl text-primary" />
        </button>

        {/* Cards Container */}
        <div className="cards-container overflow-x-hidden scroll-smooth">
          <div className="flex gap-3 sm:gap-4 lg:gap-4 px-2 sm:px-4">
            {bannerData.map((item) => (
              <div key={item.id} className="flex-shrink-0">
                <ItemCard 
                  {...item} 
                  width={getCardDimensions().width}
                  height={100}
                  variant="imageOnly"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Navigation Button */}
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-1.5 sm:p-2 rounded-full shadow-md"
        >
          <FaChevronRight className="text-xl sm:text-2xl text-primary" />
        </button>
      </div>
    </div>
  );
};

export default ShopByNeeds

// Card dimensions reference: 350 x 120