import React, { useState, useRef } from 'react'
import ItemCard from './ItemCard'
import { itemsData } from '../../data/items'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { startDrag, stopDrag } from '../../redux/features/carouselSlice';

const ItemsSlider = () => {
  // Refs and Redux state management
  const sliderRef = useRef(null);
  const dispatch = useDispatch();
  const { isDragging, startX, scrollLeft } = useSelector(state => state.carousel);

  // Update scroll amount based on screen size
  const scroll = (direction) => {
    const { current } = sliderRef;
    if (current) {
      // Responsive scroll amount
      const scrollAmount = direction === 'left'
        ? current.scrollLeft - (window.innerWidth < 640 ? 220 : 280)
        : current.scrollLeft + (window.innerWidth < 640 ? 220 : 280);
      
      current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='relative w-full my-3 sm:my-5 bg-gradient-to-r from-[#33393b] from-40% to-[#09a5d3] h-[200px] sm:h-[250px] flex items-center'>
      {/* Left Navigation Button */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-1 sm:left-2 z-10 bg-gray-400/80 hover:bg-gray-600/50 p-2 sm:p-3 rounded-full"
      >
        <FaChevronLeft className="text-black text-lg sm:text-xl" />
      </button>

      {/* Carousel Container */}
      <div 
        ref={sliderRef}
        className="flex gap-3 sm:gap-7 overflow-x-hidden scroll-smooth px-4 sm:px-10 py-3 sm:py-5"
      >
        {itemsData.map((item) => (
          <ItemCard 
            key={item.id} 
            title={item.title} 
            image={item.image}
            width={window.innerWidth < 640 ? 240 : 300}
            height={window.innerWidth < 640 ? 160 : 200}
            variant="full"
          />
        ))}
      </div>

      {/* Right Navigation Button */}
      <button 
        onClick={() => scroll('right')}
        className="absolute right-1 sm:right-2 z-10 bg-gray-400/80 hover:bg-gray-600/50 p-2 sm:p-3 rounded-full"
      >
        <FaChevronRight className="text-black text-lg sm:text-xl" />
      </button>
    </div>
  )
}

export default ItemsSlider
