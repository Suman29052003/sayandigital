import React from "react";
import letterHeadList from "../../data/ItemList/letterHeadList";
import ProductCard from "../../components/Cards/ProductCard";

const LetterHeadPage = () => {
  return (
    <div className="flex md:flex-row flex-col gap-4 py-4 items-center justify-center flex-wrap">
      {letterHeadList.map((card, index) => (
        <ProductCard
          key={index}
          id={card.id}
          title={card.title}
          subTitle={card.subTitle}
          price={`From ${card.price}`}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default LetterHeadPage;
