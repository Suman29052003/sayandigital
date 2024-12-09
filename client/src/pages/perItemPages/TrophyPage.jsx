import React, { useEffect } from "react";
import trophyList from "../../data/ItemList/trophyList";

import ProductCard from "../../components/Cards/ProductCard"; // Ensure this path is correct

const TrophyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex md:flex-row flex-col gap-4 py-4 items-center justify-center flex-wrap">
      {trophyList.map((card, index) => (
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

export default TrophyPage;
