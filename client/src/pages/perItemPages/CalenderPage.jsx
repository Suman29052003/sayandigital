import React, { useEffect } from "react";
import calenderList from "../../data/ItemList/calenderList";
import ProductCard from "@/components/Cards/ProductCard.jsx";

const CalenderPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex md:flex-row flex-col gap-4 py-4 items-center justify-center flex-wrap">
      {calenderList.map((card, index) => (
        <ProductCard
          key={index}
          id={card.id}
          title={card.title}
          subTitle={card.subTitle}
          price={`From ${card.price} `}
          image={card.image_1}
        />
      ))}
    </div>
  );
};

export default CalenderPage;
