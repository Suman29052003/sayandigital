import React from "react";
import letterHeadList from "../../data/ItemList/letterHeadList";
import ProductPage from "../ProductPage";

const LetterHeadPage = () => {
  const images = [
    letterHeadList[0].image_1,
    letterHeadList[0].image_2,
    letterHeadList[0].image_3,
  ];
  return (
    <div>
      <ProductPage
        title={letterHeadList[0].title}
        subTitle={letterHeadList[0].subTitle}
        price={letterHeadList[0].price}
        images={images} // Pass the images array as a prop
        des_1={letterHeadList[0].des_1}
        des_2={letterHeadList[0].des_2}
        des_3={letterHeadList[0].des_3}
        des_4={letterHeadList[0].des_4}
      />
    </div>
  );
};

export default LetterHeadPage;
