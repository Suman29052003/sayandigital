import React from "react";
import ProductCard from "../../components/productCard";
import businessCardsList from "../../data/ItemList.js/businessCardsList";

const BusinessCardPage = () => {
  return (
    <div className="flex gap-4">
      {businessCardsList.map((card, index) => (
        <ProductCard key={index} id={card.id} title={card.title} subTitle={card.subTitle} />
      ))}
    </div>
  );
};

export default BusinessCardPage;