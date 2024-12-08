import React, { useEffect } from "react";
import customStickersAndVinyls from "../../data/ItemList/stickersAndVinylsList ";
import ProductCard from "@/components/Cards/ProductCard.jsx";

const StickerPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex md:flex-row flex-col gap-4 py-4 items-center justify-center flex-wrap">
      {customStickersAndVinyls.map((card, index) => (
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

export default StickerPage;
