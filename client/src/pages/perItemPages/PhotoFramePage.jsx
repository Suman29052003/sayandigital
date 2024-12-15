import React, { useEffect } from "react";
import photoFrameList from "../../data/ItemList/photoFrameList";
import ProductCard from "@/components/Cards/ProductCard.jsx";

const PhotoFramePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 py-4 ">

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mx-auto py-4">
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
    </div>
  );
};

export default PhotoFramePage;
