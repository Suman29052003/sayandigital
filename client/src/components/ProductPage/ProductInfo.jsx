import React from "react";
import { useParams } from "react-router-dom";

import leftIcon from "../../assets/icons/left_icon.png";
import rightIcon from "../../assets/icons/right_icon.png";
import { useState } from "react";

import mug_img_1 from "../../assets/itemsImage/customizeCoffeeMugs/color_cup_1.png";
import mug_img_2 from "../../assets/itemsImage/customizeCoffeeMugs/color_cup_2.png";
import mug_img_3 from "../../assets/itemsImage/customizeCoffeeMugs/color_cup_3.png";

import banner_1 from "../../assets/itemsImage/flex&Banners/banner_1.png";
import banner_2 from "../../assets/itemsImage/flex&Banners/banner_2.png";
import banner_3 from "../../assets/itemsImage/flex&Banners/banner_3.png";
import banner_4 from "../../assets/itemsImage/flex&Banners/banner_4.png";

import CustomProduct from "./CustomProduct";
import CustomFlex from "./CutsomFlex";

const ProductInfo = () => {
  const { route } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const images = [mug_img_1, mug_img_2, mug_img_3];
  const images = [banner_1, banner_2, banner_3, banner_4];

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 p-4 m-2 gap-4">
      <div className="_productImage w-full h-full relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2"
          onClick={previousImage}
        >
          <img
            src={leftIcon}
            alt="Previous"
            className="object-cover w-[48px] h-auto"
          />
        </button>
        <div className="_border border-2 border-black w-full h-auto p-6">
          <div className="_image">
            <img
              src={images[currentImageIndex]}
              alt=""
              className="object-fit h-auto w-full"
            />
          </div>
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2"
          onClick={nextImage}
        >
          <img
            src={rightIcon}
            alt="Next"
            className="object-cover w-[48px] h-auto"
          />
        </button>
      </div>

      <div className="_productDetails w-full m-auto">

        {route === "banners" ? (
          <CustomFlex />
        ) : (
          <div>
            <CustomProduct />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
