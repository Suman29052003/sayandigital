import React, { useState } from "react";

import minusIcon from "../../assets/icons/minus.png";
import plusIcon from "../../assets/icons/plus.png";

const CustomProduct = ({
  title,
  subTitle,
  price,
}) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="w-full flex flex-col gap-3 p-4 md:p-6 lg:p-8">
      <div className="_title">
        <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
      </div>
      <div className="_shortTitle text-lg font-medium">{subTitle}</div>


      <div className="_quantity w-full flex flex-col my-7 gap-3">
  {/* Quantity Label and Input */}
  <div className="flex flex-wrap items-center justify-between w-full gap-3">
    <span className="font-medium text-lg md:text-xl">Quantity:</span>
    <div className="flex items-center justify-between px-2 w-full sm:w-[70%] bg-[#F0F0F0] border-2 border-gray-400 rounded-lg">
      {/* Minus Button */}
      <img
        src={minusIcon}
        onClick={decreaseQuantity}
        className="p-2 cursor-pointer w-6 h-6 sm:w-8 sm:h-8"
        alt="Decrease Quantity"
      />
      {/* Quantity Display */}
      <span className="text-lg sm:text-2xl text-center">{quantity}</span>
      {/* Plus Button */}
      <img
        src={plusIcon}
        onClick={increaseQuantity}
        className="p-2 cursor-pointer w-6 h-6 sm:w-8 sm:h-8"
        alt="Increase Quantity"
      />
    </div>
  </div>
  {/* Instructional Text */}
  <p className="w-full text-center text-[10px] sm:text-[12px] text-gray-500 px-4">
    Choose a quantity between 1 - 100 for instant ordering. For higher
    quantities, you will be allowed to request quotations from the Sales Team.
  </p>
</div>


      <div className="_price">
        <span className="text-2xl md:text-3xl font-bold text-[#FC7C1B]">
          ₹ {price}{" "}
        </span>
        <span className="text-lg md:text-xl font-medium">
          inclusive of all taxes (except delivery charges)
        </span>
        <p className="text-sm font-semibold text-gray-400">
          Buy in bulk and save
        </p>
      </div>
    </div>
  );
};

export default CustomProduct;