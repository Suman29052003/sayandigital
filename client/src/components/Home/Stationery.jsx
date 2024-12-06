// Import necessary dependencies and components
import React from "react";
import { stationery } from "../../data/Stationery";
import ItemCard from "../Cards/ItemCard";
import { Link } from "react-router-dom";

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
      <div className="w-full flex flex-wrap items-center justify-center gap-3 sm:gap-6 my-3 sm:my-5 ">
        {stationery.map((item) => (
          <Link to={`/product/${item.route}`} key={item.id}>
            <ItemCard key={item.id} {...item} width={137} height={170} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Stationery;
