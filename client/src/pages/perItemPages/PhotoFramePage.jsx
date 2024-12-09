import React, { useEffect } from "react";
import photoFrameList from "../../data/ItemList/photoFrameList";
import ProductCard from "@/components/Cards/ProductCard.jsx";

const PhotoFramePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex md:flex-row flex-col gap-4 py-4 items-center justify-center flex-wrap">
      {photoFrameList.map((card) => (
        <ProductCard
          key={card.id}
          id={card.id}
          title={card.title}
          subTitle={card.subTitle}
          price={`From ${card.price} /piece`}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default PhotoFramePage;
