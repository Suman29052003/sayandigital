import React from 'react'
import minusIcon from '../../assets/icons/minus.png'
import plusIcon from '../../assets/icons/plus.png'
import cupImg from '../../assets/products/cup.png'
import { useState } from "react";

const ProductInfo = () => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
      if (quantity > 1) setQuantity(quantity - 1);
    };

  return (
    <div className="w-full grid grid-cols-2 p-6 m-4 gap-4">
    <div className="_productImage w-full">
      <div className="_border border-2 border-black">
        <div className="_image">
          <img src={cupImg} alt="" className="" />
        </div>
      </div>
    </div>
    <div className="_productDetails w-full flex flex-col gap-3 p-4">
      <div className="_title">
        <h1 className="text-3xl font-bold">Personalized White Photo Mug</h1>
      </div>
      <div className="_shortTitle text-lg font-medium">
        Classic white mug (325 mL). Relish your favorite images or art with
        your morning coffee!
      </div>
      <div className="_description text-xl font-medium gap-3 flex flex-col">
        <li className="">Dishwasher and microwave-safe</li>
        <li className="">Design a custom mug with any photo</li>
        <li className="">Material: Ceramic, Capacity: 325 ml</li>
      </div>

      <div className="_quantity w-full  flex items-start flex-col my-7">
        <div className="flex items-center w-full justify-between">
          <span className="font-medium text-2xl">Quantity :</span>
          <div className="_input flex items-center justify-between px-2 w-[70%] bg-[#F0F0F0] border-2 border-gray-400 rounded-lg">
            <div className="_buttons flex items-center">
              <img
                src={minusIcon}
                onClick={decreaseQuantity}
                className="p-2 cursor-pointer"
              ></img>
              <img
                src={plusIcon}
                onClick={increaseQuantity}
                className="p-2 cursor-pointer"
              ></img>
            </div>
            <div className="_blank">
              <span className="">{quantity}</span>
            </div>
          </div>
        </div>
        <p className="w-full flex text-center text-[12px] text-pretty px-4">
          Choose a quantity between 1 - 100 for instant ordering. For higher
          quantities, you will be allowed to request quotations from Sales
          Team.
        </p>
      </div>

      <div className="_price">
        <span className="text-3xl font-extrabold text-[#FC7C1B]">₹ 200.00 </span>
        <span className="text-xl font-medium">inclusive of all taxes (except delivery charges)</span>
        <p className="text-sm font-semibold text-gray-400">Buy in bulk and save</p>
      </div>
    </div>
  </div>
  )
}

export default ProductInfo
