import React from 'react';
import { allCategories } from '../../data/allCategories';
import ItemCard from '../Cards/ItemCard';
import { Link } from 'react-router-dom';

const AllCategories = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Section Title with decorative lines */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">
        <div className="h-[1px] bg-gray-300 flex-grow"></div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold whitespace-nowrap text-[#A2A2A2]">Browse All Categories</h2>
        <div className="h-[1px] bg-gray-300 flex-grow"></div>
      </div>

      {/* Grid container */}
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 justify-items-center my-3 sm:my-5'>
        {allCategories.map((item) => (
          <Link to={`/product/${item.route}`} key={item.id}>
            <ItemCard 
              {...item} 
              width={137} 
              height={170}  
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

const MemoizedAllCategories = React.memo(AllCategories);

export default MemoizedAllCategories;