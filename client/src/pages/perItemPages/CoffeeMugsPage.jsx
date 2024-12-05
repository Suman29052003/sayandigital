import React, { useEffect } from "react";
import coffeeMugsList from "../../data/ItemList/coffeeMugsList";
import ProductCard from "../../components/Cards/productCard";

const CoffeeMugsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const maxSubTitleLength = 30; // Set the maximum length for the subtitle

  return (
    <div className="flex md:flex-row flex-col gap-4 py-4 items-center justify-center flex-wrap">
      {coffeeMugsList.map((card, index) => (
        <ProductCard
          key={index}
          id={card.id}
          title={card.title}
          subTitle={card.subTitle.length > maxSubTitleLength ? `${card.subTitle.slice(0, maxSubTitleLength)}...` : card.subTitle}
          price={`₹ ${card.price} /piece`}
          image={card.image_1}
        />
      ))}
    </div>
  );
};

export default CoffeeMugsPage;