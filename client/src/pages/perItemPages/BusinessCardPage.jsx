import React, { useEffect } from "react";
import businessCardsList from "../../data/ItemList/businessCardsList";
import ProductCard from "../../components/Cards/productCard";

const BusinessCardPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex md:flex-row flex-col gap-4 py-4 items-center justify-center flex-wrap">
      {businessCardsList.map((card, index) => (
        <ProductCard
          key={index}
          id={card.id}
          title={card.title}
          subTitle={card.subTitle}
          price={`₹ ${card.price} /piece`}
          image={card.image_1}
        />
      ))}
    </div>
  );
};

export default BusinessCardPage;
