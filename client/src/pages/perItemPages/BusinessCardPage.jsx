import React from "react";
import ProductCard from "../../components/productCard";
import businessCardsList from "../../data/ItemList/businessCardsList";
import { useParams } from "react-router-dom";

const BusinessCardPage = () => {
  const { route } = useParams();



  return (
    <div className="flex md:flex-row flex-col gap-4 py-4 items-center justify-center flex-wrap">
      {businessCardsList.map((card, index) => (
        <ProductCard
          key={index}
          id={card.id}
          title={card.title}
          subTitle={card.subTitle}
          price={card.price}
          image={card.image_1}
        />
      ))}
    </div>
  );
};

export default BusinessCardPage;
