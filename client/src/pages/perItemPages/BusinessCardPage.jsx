import React from "react";
import ProductCard from "../../components/productCard";
import businessCardsList from "../../data/ItemList.js/businessCardsList";
import { useParams } from "react-router-dom";

const BusinessCardPage = () => {
  const { route } = useParams();

  // Check if the route parameter is "Business Cards"
  if (route !== "Business Cards") {
    return null; // Return null if the route is not "Business Cards"
  }

  return (
    <div className="flex md:flex-row flex-col gap-4 p-4 items-center">
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
